const { sequelize } = require('../../database/config')
const initModels = require('../../models/db/init-models')
const {
    admision_aspirantes,
    admision_aspirantes_anio,
    config_tipos_ident,
    admision_aspirantes_familiares,
    config_tipos_familiares,
    admision_familiares,
    config_grados,
    admision_config_documentos,
    config_documentos,
    admision_aspirantes_documentos,
    matricula_consecutivos,
    adm_ciudades,
    config_data_opciones,
    adm_paises,
    adm_departamentos,
    adm_barrios
} = initModels(sequelize)

const validarDocumentos = async (id_admision) => {
    const result = await admision_aspirantes_anio.findOne({
        where: {
            id: id_admision
        },
        include: [
            {
                model: config_grados,
                attributes: [
                    "id",
                    ["nombre", "text"]
                ],
                as: "id_grado_config_grado",
                required: true,
                include: [
                    {
                        model: admision_config_documentos,
                        as: "admision_config_documentos",
                        attributes: ["id"],
                        required: false,
                        include: [
                            {
                                model: config_documentos,
                                as: "id_documento_config_documento",
                                required: false,
                                include: [
                                    {
                                        model: admision_aspirantes_documentos,
                                        as: "admision_aspirantes_documentos",
                                        required: false,
                                        where: {
                                            id_admision
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });

    const totalDocumentos = result.id_grado_config_grado.admision_config_documentos.length;
    let documentosaceptados = 0;
    result.id_grado_config_grado.admision_config_documentos.forEach(c => {
        if (c?.id_documento_config_documento?.admision_aspirantes_documentos[0]?.estado == 1) {
            documentosaceptados++;
        }
    });
    console.log(totalDocumentos, documentosaceptados);
    if (totalDocumentos == documentosaceptados) {
        await admision_aspirantes_anio.update({
            estado: 3
        }, { where: { id: id_admision } });
    }

}

const enviarControl = async (id_admision) => {
    const result = await admision_aspirantes_anio.findOne({
        attributes: [
            "id"
        ],
        where: {
            id: id_admision
        },
        include: [
            {
                model: config_grados,
                attributes: [
                    ["codigo", "id"],
                    ["nombre", "text"]
                ],
                as: "id_grado_config_grado",
                required: true
            },
            {
                model: admision_aspirantes,
                attributes: [
                    "id",
                    "ident",
                    "codigo_especial",
                    "p_nombre",
                    "s_nombre",
                    "p_apellido",
                    "s_apellido",
                    "avatar",
                    "telefono",
                    "celular",
                    "direccion",
                    "correo",
                    "estatura",
                    "peso",
                    "fecha_nacimiento",
                    "pais_nacimiento"
                ],
                as: "id_aspirante_admision_aspirante",
                required: true,
                include: [
                    {
                        model: admision_aspirantes_familiares,
                        as: "admision_aspirantes_familiares",
                        required: false,
                        include: [
                            {
                                model: admision_familiares,
                                as: "id_familiar_admision_familiare",
                                required: false,
                                attributes: [
                                    "id",
                                    "ident",
                                    "p_nombre",
                                    "s_nombre",
                                    "p_apellido",
                                    "s_apellido",
                                    "fecha_nacimiento",
                                    "telefono",
                                    "celular",
                                    "direccion",
                                    "correo",
                                    "cargo",
                                    "ingreso_mensual",
                                    "nombre_lugar_trabajo",
                                    "profesion",
                                    ["nombre_lugar_trabajo", "empresa"]
                                ],
                                include: [
                                    {
                                        model: config_data_opciones,
                                        attributes: [
                                            ["id_opcion", "id"],
                                            ["descripcion", "text"]
                                        ],
                                        as: "exalumno_config_data_opcione",
                                        required: false
                                    },
                                    {
                                        model: config_data_opciones,
                                        attributes: [
                                            ["id_opcion", "id"],
                                            ["descripcion", "text"]
                                        ],
                                        as: "tipo_trabajo_config_data_opcione",
                                        required: false
                                    },
                                    {
                                        model: config_tipos_ident,
                                        attributes: [
                                            "codigo",
                                            ["nombre", "text"]
                                        ],
                                        as: "ident_tipo_config_tipos_ident",
                                        required: false
                                    }
                                ]
                            },
                            {
                                model: config_tipos_familiares,
                                as: "tipo_familiar_config_tipos_familiare",
                                required: false,
                                attributes: [
                                    ["codigo", "id"],
                                    ["nombre", "text"]
                                ],
                            }
                        ]
                    },
                    {
                        model: config_tipos_ident,
                        as: "ident_tipo_config_tipos_ident",
                        required: false,
                        attributes: [
                            ["codigo", "id"],
                            ["nombre", "text"]
                        ],
                    },
                    {
                        model: adm_ciudades,
                        as: "ident_ciudad_adm_ciudade",
                        required: false,
                        attributes: [
                            ["idCiudades", "id"],
                            ["ciudad", "text"]
                        ],
                    },
                    {
                        model: config_data_opciones,
                        attributes: [
                            ["id_opcion", "id"],
                            ["descripcion", "text"]
                        ],
                        as: "genero_config_data_opcione",
                        required: false
                    },

                    {
                        model: adm_departamentos,
                        attributes: [
                            "id",
                            ["nombre", "text"]
                        ],
                        as: "dpto_nacimiento_adm_departamento",
                        required: false
                    },
                    {
                        model: adm_ciudades,
                        attributes: [
                            ["idCiudades", "id"],
                            ["ciudad", "text"]
                        ],
                        as: "ciudad_nacimiento_adm_ciudade",
                        required: false
                    },
                    {
                        model: adm_barrios,
                        attributes: [
                            "id",
                            ["nombre", "text"]
                        ],
                        as: "barrio_adm_barrio",
                        required: false
                    },
                ]
            }
        ]
    });

    let aspirante = JSON.parse(JSON.stringify(result));
    aspirante.id_aspirante_admision_aspirante.grado = aspirante?.id_grado_config_grado || null;
    aspirante = aspirante.id_aspirante_admision_aspirante;
    aspirante.ident_tipo = aspirante?.ident_tipo_config_tipos_ident || null
    aspirante.familiares = aspirante.admision_aspirantes_familiares;
    aspirante.familiares.forEach((f, i) => {
        f.id_familiar_admision_familiare.tipo = f?.tipo_familiar_config_tipos_familiare || null;
        aspirante.familiares[i] = f.id_familiar_admision_familiare;
        aspirante.familiares[i].exalumno = aspirante.familiares[i].exalumno_config_data_opcione?.text;
        aspirante.familiares[i].fallecido = "No";
        aspirante.familiares[i].barrio = "";
        aspirante.familiares[i].tipodetrabajo = aspirante.familiares[i].tipo_trabajo_config_data_opcione?.text;
        aspirante.familiares[i].tipodocumento = aspirante.familiares[i].ident_tipo_config_tipos_ident?.codigo;

        aspirante.familiares[i].lugarnacimiento_pais = "";
        aspirante.familiares[i].lugarnacimiento_dpto = "";
        aspirante.familiares[i].lugarnacimiento_municipio = "";
        aspirante.familiares[i].lugarresidencia_pais = "";
        aspirante.familiares[i].lugarresidencia_dpto = "";
        aspirante.familiares[i].lugarresidencia_municipio = "";

        delete aspirante.familiares[i].exalumno_config_data_opcione;
        delete aspirante.familiares[i].tipo_trabajo_config_data_opcione;
        delete aspirante.familiares[i].ident_tipo_config_tipos_ident;
    });

    const [pais_nacimiento_adm_paise] = await Promise.all([
        
        adm_paises.findOne({
            attributes: [
                "Codigo",
                "Pais"
            ],
            where: {
                Codigo: aspirante.pais_nacimiento
            }
        }),
    ]);

    aspirante.password = aspirante.codigo_especial;
    aspirante.lugarexpedicion = aspirante.ident_ciudad_adm_ciudade?.text;
    aspirante.genero = aspirante.genero_config_data_opcione?.text;
    aspirante.lugarnacimiento_pais = pais_nacimiento_adm_paise?.Pais;
    aspirante.lugarnacimiento_dpto = aspirante?.dpto_nacimiento_adm_departamento?.text;
    aspirante.lugarnacimiento_municipio = aspirante?.ciudad_nacimiento_adm_ciudade?.text;
    aspirante.lugarresidencia_pais = pais_nacimiento_adm_paise?.Pais;
    aspirante.lugarresidencia_dpto = aspirante?.dpto_nacimiento_adm_departamento?.text;
    aspirante.lugarresidencia_municipio = aspirante?.ciudad_nacimiento_adm_ciudade?.text;
    aspirante.barrio = aspirante.barrio_adm_barrio?.text;

    delete aspirante.admision_aspirantes_familiares;
    delete aspirante.ident_tipo_config_tipos_ident;
    delete aspirante.ident_ciudad_adm_ciudade;
    delete aspirante.genero_config_data_opcione;
    delete aspirante.dpto_nacimiento_adm_departamento;
    delete aspirante.ciudad_nacimiento_adm_ciudade;
    delete aspirante.barrio_adm_barrio;
    delete aspirante.pais_nacimiento;

    //const { data } = await axios.post(`${process.env.URLCONTROL}agregarMatriculaEstudianteNuevo`, aspirante);

    await Promise.all([
       
        admision_aspirantes_anio.update({ matriculado: 1 }, { where: { id: id_admision } })
    ])


    return {};
}

module.exports = {
    validarDocumentos,
    enviarControl
}