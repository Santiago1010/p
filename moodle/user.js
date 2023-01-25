const { sequelize } = require('../../database/moodle/config');
const initModels = require('../../models/db_moodle/init-models');
const CryptoJS = require('crypto-js');
const { mdl_user, mdl_role_assignments, mdl_user_enrolments, mdl_cohort_members, mdl_course_sections } =
  initModels(sequelize);
const Sequelize = require('sequelize');
const moment = require('moment');
moment.locale('es');

const create = async (user) => {
  const { usuario, password, email, firstname, lastname, corte } = user;

  let [mdl_user, mdl_cohort] = await Promise.all([
    sequelize.query(`SELECT mdl_user.id FROM mdl_user WHERE mdl_user.username = :usuario`, {
      type: Sequelize.QueryTypes.SELECT,
      replacements: { usuario },
    }),
    sequelize.query(`SELECT mdl_cohort.id FROM mdl_cohort WHERE mdl_cohort.idnumber = :corte`, {
      type: Sequelize.QueryTypes.SELECT,
      replacements: { corte },
    }),
  ]);

  if (mdl_cohort.length) {
    mdl_cohort = mdl_cohort[0];

    if (!mdl_user.length) {
      await sequelize.query(
        `INSERT INTO mdl_user 
            (username, password, firstname, lastname, email, institution, department, city, country, confirmed, mnethostid) 
            VALUES (:usuario, md5(:password), :firstname, :lastname, :email, 
            'Cartagena International School', 'Estudiantes', 'Cartagena', 'CO', 1, 1)`,
        {
          type: Sequelize.QueryTypes.INSERT,
          replacements: { usuario, password, firstname, lastname, email },
        }
      );
    }

    mdl_user = await sequelize.query(`SELECT mdl_user.id FROM mdl_user WHERE mdl_user.username = :usuario`, {
      type: Sequelize.QueryTypes.SELECT,
      replacements: { usuario },
    });
    mdl_user = mdl_user[0];

    let [corte, cursos] = await Promise.all([
      sequelize.query(`SELECT * FROM mdl_cohort_members WHERE mdl_cohort_members.userid = :userid`, {
        type: Sequelize.QueryTypes.SELECT,
        replacements: { userid: mdl_user.id },
      }),
      sequelize.query(
        `SELECT mdl_enrol.id AS id_enrol, mdl_context.id AS id_context,  
                mdl_role_assignments.id AS matriculada FROM mdl_cohort
                INNER JOIN mdl_enrol ON  mdl_enrol.customint1 = mdl_cohort.id
                INNER JOIN mdl_course ON mdl_course.id = mdl_enrol.courseid
                INNER JOIN mdl_context ON mdl_context.contextlevel = 50 AND mdl_context.instanceid = mdl_course.id
                LEFT JOIN mdl_role_assignments ON mdl_role_assignments.contextid = mdl_context.id AND 
                mdl_role_assignments.roleid = 5 AND mdl_role_assignments.userid = :userid
                WHERE mdl_cohort.id = :cohortid`,
        {
          type: Sequelize.QueryTypes.SELECT,
          replacements: { userid: mdl_user.id, cohortid: mdl_cohort.id },
        }
      ),
    ]);

    if (!corte.length) {
      await sequelize.query(`INSERT INTO mdl_cohort_members(userid, cohortid) VALUES (:userid, :cohortid)`, {
        type: Sequelize.QueryTypes.INSERT,
        replacements: { userid: mdl_user.id, cohortid: mdl_cohort.id },
      });
    } else {
      corte = corte[0];
      console.log('Corte diferente');
      if (corte.cohortid !== mdl_cohort.id) {
        await Promise.all([
          mdl_cohort_members.destroy({
            where: {
              id: corte.id,
            },
          }),
          sequelize.query(`INSERT INTO mdl_cohort_members(userid, cohortid) VALUES (:userid, :cohortid)`, {
            type: Sequelize.QueryTypes.INSERT,
            replacements: { userid: mdl_user.id, cohortid: mdl_cohort.id },
          }),
          mdl_role_assignments.destroy({
            where: {
              userid: mdl_user.id,
            },
          }),
          mdl_user_enrolments.destroy({
            where: {
              userid: mdl_user.id,
            },
          }),
        ]);
      }
    }

    const assignments = [];
    const enrolments = [];
    if (cursos.length) {
      cursos.forEach((curso) => {
        if (!curso.matriculada) {
          const fecha = moment().milliseconds();
          assignments.push({
            roleid: '5',
            contextid: curso.id_context,
            userid: mdl_user.id,
            timemodified: fecha,
            modifierid: 2,
            component: '',
            itemid: 0,
            sortorder: 0,
          });
          enrolments.push({
            status: 0,
            enrolid: curso.id_enrol,
            userid: mdl_user.id,
            timestart: fecha,
            timeend: 0,
            modifierid: 2,
            timecreated: fecha,
            timemodified: fecha,
          });
        }
      });
    }

    if (assignments.length && enrolments.length) {
      await Promise.all([mdl_role_assignments.bulkCreate(assignments), mdl_user_enrolments.bulkCreate(enrolments)]);
    }
  } else {
    console.log('Corte no encontrado: ', corte);
    console.log(user);
  }
};

const enroll = async (user) => {
  let { usuario, password, email, firstname, lastname, id_user_moodle, courseids } = user;

  let [mdluser] = await Promise.all([
    sequelize.query(`SELECT mdl_user.id FROM mdl_user WHERE mdl_user.id = :id_user_moodle`, {
      type: Sequelize.QueryTypes.SELECT,
      replacements: { id_user_moodle },
    }),
  ]);

  if (!mdluser.length) {
    const insert = await mdl_user.create({
      username: usuario,
      password: CryptoJS.MD5(password).toString(),
      firstname,
      lastname,
      email,
      institution: 'Cartagena International School',
      department: 'Estudiantes',
      city: 'Cartagena',
      country: 'CO',
      confirmed: 1,
      mnethostid: 1,
    });
    id_user_moodle = insert.id;
  } else {
    await sequelize.query(
      `UPDATE mdl_user SET username = :usuario, password = md5(:password)
        WHERE mdl_user.id = :id_user_moodle`,
      {
        type: Sequelize.QueryTypes.INSERT,
        replacements: { id_user_moodle, usuario, password },
      }
    );
  }

  let [cursos] = await Promise.all([
    sequelize.query(
      `SELECT mdl_enrol.id AS id_enrol, mdl_context.id AS id_context,
        mdl_role_assignments.id AS matriculada FROM mdl_course
        INNER JOIN mdl_enrol ON mdl_enrol.courseid = mdl_course.id
        INNER JOIN mdl_context ON mdl_context.instanceid = mdl_course.id
        LEFT JOIN mdl_role_assignments ON mdl_role_assignments.contextid = mdl_context.id AND 
        mdl_role_assignments.roleid = 5 AND mdl_role_assignments.userid = :userid
        WHERE mdl_enrol.enrol = 'manual' AND mdl_enrol.status = 0
        AND mdl_course.id in (${courseids}) AND mdl_context.contextlevel = 50`,
      {
        type: Sequelize.QueryTypes.SELECT,
        replacements: { userid: id_user_moodle },
      }
    ),
  ]);

  const assignments = [];
  const enrolments = [];
  if (cursos.length) {
    cursos.forEach((curso) => {
      if (!curso.matriculada) {
        const fecha = moment().milliseconds();
        assignments.push({
          roleid: '5',
          contextid: curso.id_context,
          userid: id_user_moodle,
          timemodified: fecha,
          modifierid: 2,
          component: '',
          itemid: 0,
          sortorder: 0,
        });
        enrolments.push({
          status: 0,
          enrolid: curso.id_enrol,
          userid: id_user_moodle,
          timestart: fecha,
          timeend: 0,
          modifierid: 2,
          timecreated: fecha,
          timemodified: fecha,
        });
      }
    });
  }

  if (assignments.length && enrolments.length) {
    await Promise.all([mdl_role_assignments.bulkCreate(assignments), mdl_user_enrolments.bulkCreate(enrolments)]);
  }

  return id_user_moodle;
};

const section = async (grado, courseid) => {
  const course_sections = await mdl_course_sections.findOne({
    where: {
      course: courseid,
      grado,
    },
  });

  return course_sections;
};

const quiz = async (courseid, userid) => {
  const moodleExamenes = await sequelize.query(
    `SELECT mdl_quiz.id, mdl_quiz.name, 
        resultados.grade, resultados.quiz FROM mdl_course_sections 
        INNER JOIN mdl_course_modules ON mdl_course_modules.section = mdl_course_sections.id
        INNER JOIN mdl_quiz ON mdl_quiz.id = mdl_course_modules.instance
        LEFT JOIN (SELECT mdl_quiz_grades.quiz,
        ROUND(mdl_quiz_grades.grade, 1) as grade FROM mdl_quiz_grades 
        INNER JOIN mdl_quiz ON mdl_quiz.id = mdl_quiz_grades.quiz
        INNER JOIN mdl_course ON mdl_course.id = mdl_quiz.course
        WHERE mdl_quiz_grades.userid = :userid
        ) resultados ON resultados.quiz = mdl_quiz.id
        WHERE mdl_course_sections.course = :courseid
        AND mdl_course_modules.module = 16 AND mdl_course_modules.visible = 1
        AND mdl_course_modules.deletioninprogress = 0`,
    {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        courseid,
        userid,
      },
    }
  );

  return moodleExamenes;
};

module.exports = {
  create,
  enroll,
  section,
  quiz,
};
