var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _acd_elementos = require("./acd_elementos");
var _actualizar_pagos = require("./actualizar_pagos");
var _adm_bancos = require("./adm_bancos");
var _adm_barrios = require("./adm_barrios");
var _adm_cargos = require("./adm_cargos");
var _adm_cargos_plataformas = require("./adm_cargos_plataformas");
var _adm_ciudades = require("./adm_ciudades");
var _adm_contratos_funciones = require("./adm_contratos_funciones");
var _adm_contratos_modelos = require("./adm_contratos_modelos");
var _adm_contratos_validate = require("./adm_contratos_validate");
var _adm_departamentos = require("./adm_departamentos");
var _adm_dependencias = require("./adm_dependencias");
var _adm_email_plantillas = require("./adm_email_plantillas");
var _adm_email_plantillas_resp = require("./adm_email_plantillas_resp");
var _adm_empleados = require("./adm_empleados");
var _adm_empleados_contrato = require("./adm_empleados_contrato");
var _adm_empleados_estudios = require("./adm_empleados_estudios");
var _adm_empleados_plataformas = require("./adm_empleados_plataformas");
var _adm_eps = require("./adm_eps");
var _adm_fondo_pensiones = require("./adm_fondo_pensiones");
var _adm_funciones = require("./adm_funciones");
var _adm_funciones_cargos = require("./adm_funciones_cargos");
var _adm_grupos = require("./adm_grupos");
var _adm_grupos_integrantes = require("./adm_grupos_integrantes");
var _adm_paises = require("./adm_paises");
var _adm_plataformas = require("./adm_plataformas");
var _adm_sedes = require("./adm_sedes");
var _biz_opciones = require("./biz_opciones");
var _biz_roles = require("./biz_roles");
var _biz_roles_opciones = require("./biz_roles_opciones");
var _biz_usuarios = require("./biz_usuarios");
var _biz_usuarios_opciones = require("./biz_usuarios_opciones");
var _calendario = require("./calendario");
var _calendario_categorias = require("./calendario_categorias");
var _config_anios = require("./config_anios");
var _config_ciudades = require("./config_ciudades");
var _config_periodo = require("./config_periodo");
var _config_tipos_ident = require("./config_tipos_ident");
var _ctb_doc_electronicos = require("./ctb_doc_electronicos");
var _ctb_doc_electronicos_productos = require("./ctb_doc_electronicos_productos");
var _ctb_doc_electronicos_productos_componentes = require("./ctb_doc_electronicos_productos_componentes");
var _ctb_doc_electronicos_productos_curriculos = require("./ctb_doc_electronicos_productos_curriculos");
var _ctb_doc_electronicos_productos_rutas_aprendizaje = require("./ctb_doc_electronicos_productos_rutas_aprendizaje");
var _ctb_documento_contable = require("./ctb_documento_contable");
var _ctb_festivos_anios = require("./ctb_festivos_anios");
var _ctb_novedad_cambios = require("./ctb_novedad_cambios");
var _ctb_novedad_control_cajas = require("./ctb_novedad_control_cajas");
var _ctb_novedad_control_cierresdetalle = require("./ctb_novedad_control_cierresdetalle");
var _ctb_novedad_control_creditos = require("./ctb_novedad_control_creditos");
var _ctb_novedad_control_vc = require("./ctb_novedad_control_vc");
var _ctb_novedad_control_vc_detalle = require("./ctb_novedad_control_vc_detalle");
var _ctb_novedad_tipos = require("./ctb_novedad_tipos");
var _ctb_novedad_user = require("./ctb_novedad_user");
var _ctb_novedades_nom = require("./ctb_novedades_nom");
var _ctb_productos = require("./ctb_productos");
var _ctb_proveedores = require("./ctb_proveedores");
var _ctb_proveedores_correos = require("./ctb_proveedores_correos");
var _ctb_proveedores_detalles = require("./ctb_proveedores_detalles");
var _ctb_proveedores_pagos = require("./ctb_proveedores_pagos");
var _ctb_proveedores_recordatorio = require("./ctb_proveedores_recordatorio");
var _ctb_proveedores_respons = require("./ctb_proveedores_respons");
var _ctb_proveedores_tipos_ident = require("./ctb_proveedores_tipos_ident");
var _departamentos = require("./departamentos");
var _departamentos_opciones = require("./departamentos_opciones");
var _gnr_parametros = require("./gnr_parametros");
var _gnr_parametros_perfiles = require("./gnr_parametros_perfiles");
var _gnr_parametros_usuarios = require("./gnr_parametros_usuarios");
var _matricula_familiares = require("./matricula_familiares");
var _notificaciones = require("./notificaciones");
var _notificaciones_disparadores = require("./notificaciones_disparadores");
var _notificaciones_enviadas = require("./notificaciones_enviadas");
var _notificaciones_users = require("./notificaciones_users");
var _opciones = require("./opciones");
var _pelv_indicadores = require("./pelv_indicadores");
var _pevl_criterios = require("./pevl_criterios");
var _pevl_evaluacion = require("./pevl_evaluacion");
var _pevl_evaluacion_criterio = require("./pevl_evaluacion_criterio");
var _pevl_evaluacion_grupos = require("./pevl_evaluacion_grupos");
var _pevl_evaluacion_indicador = require("./pevl_evaluacion_indicador");
var _pevl_evaluacion_integrante = require("./pevl_evaluacion_integrante");
var _pevl_evaluacion_programacion = require("./pevl_evaluacion_programacion");
var _pqrs = require("./pqrs");
var _pqrs_respuesta = require("./pqrs_respuesta");
var _pqrs_tipo_perfil = require("./pqrs_tipo_perfil");
var _pqrs_tipo_solicitud = require("./pqrs_tipo_solicitud");
var _test_actividades = require("./test_actividades");
var _test_actividades_ejercicios = require("./test_actividades_ejercicios");
var _test_cerebros = require("./test_cerebros");
var _test_general = require("./test_general");
var _test_general_preguntas = require("./test_general_preguntas");
var _test_opciones = require("./test_opciones");
var _test_preguntas = require("./test_preguntas");
var _test_preguntas_opciones = require("./test_preguntas_opciones");
var _test_recomendaciones = require("./test_recomendaciones");
var _test_resdetalle = require("./test_resdetalle");
var _test_resgeneral = require("./test_resgeneral");
var _test_tipo = require("./test_tipo");
var _test_tipo_users = require("./test_tipo_users");
var _tienda_cupon_autoriza = require("./tienda_cupon_autoriza");
var _usuarios = require("./usuarios");
var _usuarios_departamentos = require("./usuarios_departamentos");
var _usuarios_opciones = require("./usuarios_opciones");
var _usuarios_perfil = require("./usuarios_perfil");
var _usuarios_perfil_opciones = require("./usuarios_perfil_opciones");
var _usuarios_permisos_opciones = require("./usuarios_permisos_opciones");
var _web_componentes = require("./web_componentes");
var _web_componentes_categorias = require("./web_componentes_categorias");
var _web_curriculos = require("./web_curriculos");
var _web_curriculos_categorias = require("./web_curriculos_categorias");
var _web_cursos = require("./web_cursos");
var _web_cursos_categorias = require("./web_cursos_categorias");
var _web_cursos_certificados_usuarios = require("./web_cursos_certificados_usuarios");
var _web_cursos_comunidad = require("./web_cursos_comunidad");
var _web_cursos_instructores = require("./web_cursos_instructores");
var _web_cursos_materiales = require("./web_cursos_materiales");
var _web_cursos_modulos = require("./web_cursos_modulos");
var _web_cursos_modulos_lecciones = require("./web_cursos_modulos_lecciones");
var _web_cursos_progreso_usuarios = require("./web_cursos_progreso_usuarios");
var _web_empresas = require("./web_empresas");
var _web_empresas_areas = require("./web_empresas_areas");
var _web_instructores = require("./web_instructores");
var _web_niveles = require("./web_niveles");
var _web_rutas_aprendizaje = require("./web_rutas_aprendizaje");
var _web_rutas_aprendizaje_categorias = require("./web_rutas_aprendizaje_categorias");
var _web_rutas_aprendizaje_cursos = require("./web_rutas_aprendizaje_cursos");
var _web_rutas_aprendizajes_sugerencias = require("./web_rutas_aprendizajes_sugerencias");
var _web_suscripciones = require("./web_suscripciones");
var _web_suscripciones_componentes = require("./web_suscripciones_componentes");
var _web_suscripciones_curriculos = require("./web_suscripciones_curriculos");
var _web_suscripciones_lineas = require("./web_suscripciones_lineas");
var _web_suscripciones_rutas_aprendizaje = require("./web_suscripciones_rutas_aprendizaje");
var _web_usuarios = require("./web_usuarios");
var _web_usuarios_empresas = require("./web_usuarios_empresas");
var _web_usuarios_felicitaciones = require("./web_usuarios_felicitaciones");
var _web_usuarios_lista_deseos = require("./web_usuarios_lista_deseos");
var _web_usuarios_niveles = require("./web_usuarios_niveles");
var _web_usuarios_notificaciones = require("./web_usuarios_notificaciones");
var _web_usuarios_puntos = require("./web_usuarios_puntos");
var _web_usuarios_suscripciones = require("./web_usuarios_suscripciones");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var acd_elementos = _acd_elementos(sequelize, DataTypes);
  var actualizar_pagos = _actualizar_pagos(sequelize, DataTypes);
  var adm_bancos = _adm_bancos(sequelize, DataTypes);
  var adm_barrios = _adm_barrios(sequelize, DataTypes);
  var adm_cargos = _adm_cargos(sequelize, DataTypes);
  var adm_cargos_plataformas = _adm_cargos_plataformas(sequelize, DataTypes);
  var adm_ciudades = _adm_ciudades(sequelize, DataTypes);
  var adm_contratos_funciones = _adm_contratos_funciones(sequelize, DataTypes);
  var adm_contratos_modelos = _adm_contratos_modelos(sequelize, DataTypes);
  var adm_contratos_validate = _adm_contratos_validate(sequelize, DataTypes);
  var adm_departamentos = _adm_departamentos(sequelize, DataTypes);
  var adm_dependencias = _adm_dependencias(sequelize, DataTypes);
  var adm_email_plantillas = _adm_email_plantillas(sequelize, DataTypes);
  var adm_email_plantillas_resp = _adm_email_plantillas_resp(sequelize, DataTypes);
  var adm_empleados = _adm_empleados(sequelize, DataTypes);
  var adm_empleados_contrato = _adm_empleados_contrato(sequelize, DataTypes);
  var adm_empleados_estudios = _adm_empleados_estudios(sequelize, DataTypes);
  var adm_empleados_plataformas = _adm_empleados_plataformas(sequelize, DataTypes);
  var adm_eps = _adm_eps(sequelize, DataTypes);
  var adm_fondo_pensiones = _adm_fondo_pensiones(sequelize, DataTypes);
  var adm_funciones = _adm_funciones(sequelize, DataTypes);
  var adm_funciones_cargos = _adm_funciones_cargos(sequelize, DataTypes);
  var adm_grupos = _adm_grupos(sequelize, DataTypes);
  var adm_grupos_integrantes = _adm_grupos_integrantes(sequelize, DataTypes);
  var adm_paises = _adm_paises(sequelize, DataTypes);
  var adm_plataformas = _adm_plataformas(sequelize, DataTypes);
  var adm_sedes = _adm_sedes(sequelize, DataTypes);
  var biz_opciones = _biz_opciones(sequelize, DataTypes);
  var biz_roles = _biz_roles(sequelize, DataTypes);
  var biz_roles_opciones = _biz_roles_opciones(sequelize, DataTypes);
  var biz_usuarios = _biz_usuarios(sequelize, DataTypes);
  var biz_usuarios_opciones = _biz_usuarios_opciones(sequelize, DataTypes);
  var calendario = _calendario(sequelize, DataTypes);
  var calendario_categorias = _calendario_categorias(sequelize, DataTypes);
  var config_anios = _config_anios(sequelize, DataTypes);
  var config_ciudades = _config_ciudades(sequelize, DataTypes);
  var config_periodo = _config_periodo(sequelize, DataTypes);
  var config_tipos_ident = _config_tipos_ident(sequelize, DataTypes);
  var ctb_doc_electronicos = _ctb_doc_electronicos(sequelize, DataTypes);
  var ctb_doc_electronicos_productos = _ctb_doc_electronicos_productos(sequelize, DataTypes);
  var ctb_doc_electronicos_productos_componentes = _ctb_doc_electronicos_productos_componentes(sequelize, DataTypes);
  var ctb_doc_electronicos_productos_curriculos = _ctb_doc_electronicos_productos_curriculos(sequelize, DataTypes);
  var ctb_doc_electronicos_productos_rutas_aprendizaje = _ctb_doc_electronicos_productos_rutas_aprendizaje(sequelize, DataTypes);
  var ctb_documento_contable = _ctb_documento_contable(sequelize, DataTypes);
  var ctb_festivos_anios = _ctb_festivos_anios(sequelize, DataTypes);
  var ctb_novedad_cambios = _ctb_novedad_cambios(sequelize, DataTypes);
  var ctb_novedad_control_cajas = _ctb_novedad_control_cajas(sequelize, DataTypes);
  var ctb_novedad_control_cierresdetalle = _ctb_novedad_control_cierresdetalle(sequelize, DataTypes);
  var ctb_novedad_control_creditos = _ctb_novedad_control_creditos(sequelize, DataTypes);
  var ctb_novedad_control_vc = _ctb_novedad_control_vc(sequelize, DataTypes);
  var ctb_novedad_control_vc_detalle = _ctb_novedad_control_vc_detalle(sequelize, DataTypes);
  var ctb_novedad_tipos = _ctb_novedad_tipos(sequelize, DataTypes);
  var ctb_novedad_user = _ctb_novedad_user(sequelize, DataTypes);
  var ctb_novedades_nom = _ctb_novedades_nom(sequelize, DataTypes);
  var ctb_productos = _ctb_productos(sequelize, DataTypes);
  var ctb_proveedores = _ctb_proveedores(sequelize, DataTypes);
  var ctb_proveedores_correos = _ctb_proveedores_correos(sequelize, DataTypes);
  var ctb_proveedores_detalles = _ctb_proveedores_detalles(sequelize, DataTypes);
  var ctb_proveedores_pagos = _ctb_proveedores_pagos(sequelize, DataTypes);
  var ctb_proveedores_recordatorio = _ctb_proveedores_recordatorio(sequelize, DataTypes);
  var ctb_proveedores_respons = _ctb_proveedores_respons(sequelize, DataTypes);
  var ctb_proveedores_tipos_ident = _ctb_proveedores_tipos_ident(sequelize, DataTypes);
  var departamentos = _departamentos(sequelize, DataTypes);
  var departamentos_opciones = _departamentos_opciones(sequelize, DataTypes);
  var gnr_parametros = _gnr_parametros(sequelize, DataTypes);
  var gnr_parametros_perfiles = _gnr_parametros_perfiles(sequelize, DataTypes);
  var gnr_parametros_usuarios = _gnr_parametros_usuarios(sequelize, DataTypes);
  var matricula_familiares = _matricula_familiares(sequelize, DataTypes);
  var notificaciones = _notificaciones(sequelize, DataTypes);
  var notificaciones_disparadores = _notificaciones_disparadores(sequelize, DataTypes);
  var notificaciones_enviadas = _notificaciones_enviadas(sequelize, DataTypes);
  var notificaciones_users = _notificaciones_users(sequelize, DataTypes);
  var opciones = _opciones(sequelize, DataTypes);
  var pelv_indicadores = _pelv_indicadores(sequelize, DataTypes);
  var pevl_criterios = _pevl_criterios(sequelize, DataTypes);
  var pevl_evaluacion = _pevl_evaluacion(sequelize, DataTypes);
  var pevl_evaluacion_criterio = _pevl_evaluacion_criterio(sequelize, DataTypes);
  var pevl_evaluacion_grupos = _pevl_evaluacion_grupos(sequelize, DataTypes);
  var pevl_evaluacion_indicador = _pevl_evaluacion_indicador(sequelize, DataTypes);
  var pevl_evaluacion_integrante = _pevl_evaluacion_integrante(sequelize, DataTypes);
  var pevl_evaluacion_programacion = _pevl_evaluacion_programacion(sequelize, DataTypes);
  var pqrs = _pqrs(sequelize, DataTypes);
  var pqrs_respuesta = _pqrs_respuesta(sequelize, DataTypes);
  var pqrs_tipo_perfil = _pqrs_tipo_perfil(sequelize, DataTypes);
  var pqrs_tipo_solicitud = _pqrs_tipo_solicitud(sequelize, DataTypes);
  var test_actividades = _test_actividades(sequelize, DataTypes);
  var test_actividades_ejercicios = _test_actividades_ejercicios(sequelize, DataTypes);
  var test_cerebros = _test_cerebros(sequelize, DataTypes);
  var test_general = _test_general(sequelize, DataTypes);
  var test_general_preguntas = _test_general_preguntas(sequelize, DataTypes);
  var test_opciones = _test_opciones(sequelize, DataTypes);
  var test_preguntas = _test_preguntas(sequelize, DataTypes);
  var test_preguntas_opciones = _test_preguntas_opciones(sequelize, DataTypes);
  var test_recomendaciones = _test_recomendaciones(sequelize, DataTypes);
  var test_resdetalle = _test_resdetalle(sequelize, DataTypes);
  var test_resgeneral = _test_resgeneral(sequelize, DataTypes);
  var test_tipo = _test_tipo(sequelize, DataTypes);
  var test_tipo_users = _test_tipo_users(sequelize, DataTypes);
  var tienda_cupon_autoriza = _tienda_cupon_autoriza(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var usuarios_departamentos = _usuarios_departamentos(sequelize, DataTypes);
  var usuarios_opciones = _usuarios_opciones(sequelize, DataTypes);
  var usuarios_perfil = _usuarios_perfil(sequelize, DataTypes);
  var usuarios_perfil_opciones = _usuarios_perfil_opciones(sequelize, DataTypes);
  var usuarios_permisos_opciones = _usuarios_permisos_opciones(sequelize, DataTypes);
  var web_componentes = _web_componentes(sequelize, DataTypes);
  var web_componentes_categorias = _web_componentes_categorias(sequelize, DataTypes);
  var web_curriculos = _web_curriculos(sequelize, DataTypes);
  var web_curriculos_categorias = _web_curriculos_categorias(sequelize, DataTypes);
  var web_cursos = _web_cursos(sequelize, DataTypes);
  var web_cursos_categorias = _web_cursos_categorias(sequelize, DataTypes);
  var web_cursos_certificados_usuarios = _web_cursos_certificados_usuarios(sequelize, DataTypes);
  var web_cursos_comunidad = _web_cursos_comunidad(sequelize, DataTypes);
  var web_cursos_instructores = _web_cursos_instructores(sequelize, DataTypes);
  var web_cursos_materiales = _web_cursos_materiales(sequelize, DataTypes);
  var web_cursos_modulos = _web_cursos_modulos(sequelize, DataTypes);
  var web_cursos_modulos_lecciones = _web_cursos_modulos_lecciones(sequelize, DataTypes);
  var web_cursos_progreso_usuarios = _web_cursos_progreso_usuarios(sequelize, DataTypes);
  var web_empresas = _web_empresas(sequelize, DataTypes);
  var web_empresas_areas = _web_empresas_areas(sequelize, DataTypes);
  var web_instructores = _web_instructores(sequelize, DataTypes);
  var web_niveles = _web_niveles(sequelize, DataTypes);
  var web_rutas_aprendizaje = _web_rutas_aprendizaje(sequelize, DataTypes);
  var web_rutas_aprendizaje_categorias = _web_rutas_aprendizaje_categorias(sequelize, DataTypes);
  var web_rutas_aprendizaje_cursos = _web_rutas_aprendizaje_cursos(sequelize, DataTypes);
  var web_rutas_aprendizajes_sugerencias = _web_rutas_aprendizajes_sugerencias(sequelize, DataTypes);
  var web_suscripciones = _web_suscripciones(sequelize, DataTypes);
  var web_suscripciones_componentes = _web_suscripciones_componentes(sequelize, DataTypes);
  var web_suscripciones_curriculos = _web_suscripciones_curriculos(sequelize, DataTypes);
  var web_suscripciones_lineas = _web_suscripciones_lineas(sequelize, DataTypes);
  var web_suscripciones_rutas_aprendizaje = _web_suscripciones_rutas_aprendizaje(sequelize, DataTypes);
  var web_usuarios = _web_usuarios(sequelize, DataTypes);
  var web_usuarios_empresas = _web_usuarios_empresas(sequelize, DataTypes);
  var web_usuarios_felicitaciones = _web_usuarios_felicitaciones(sequelize, DataTypes);
  var web_usuarios_lista_deseos = _web_usuarios_lista_deseos(sequelize, DataTypes);
  var web_usuarios_niveles = _web_usuarios_niveles(sequelize, DataTypes);
  var web_usuarios_notificaciones = _web_usuarios_notificaciones(sequelize, DataTypes);
  var web_usuarios_puntos = _web_usuarios_puntos(sequelize, DataTypes);
  var web_usuarios_suscripciones = _web_usuarios_suscripciones(sequelize, DataTypes);

  adm_cargos.belongsToMany(adm_funciones, { as: 'idfuncion_adm_funciones', through: adm_funciones_cargos, foreignKey: "idcargo", otherKey: "idfuncion" });
  adm_empleados.belongsToMany(ctb_novedad_tipos, { as: 'codnov_ctb_novedad_tipos', through: ctb_novedad_user, foreignKey: "codusr", otherKey: "codnov" });
  adm_funciones.belongsToMany(adm_cargos, { as: 'idcargo_adm_cargos', through: adm_funciones_cargos, foreignKey: "idfuncion", otherKey: "idcargo" });
  ctb_novedad_tipos.belongsToMany(adm_empleados, { as: 'codusr_adm_empleados', through: ctb_novedad_user, foreignKey: "codnov", otherKey: "codusr" });
  adm_empleados.belongsTo(adm_bancos, { as: "banco_adm_banco", foreignKey: "banco"});
  adm_bancos.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "banco"});
  ctb_proveedores.belongsTo(adm_bancos, { as: "banco_adm_banco", foreignKey: "banco"});
  adm_bancos.hasMany(ctb_proveedores, { as: "ctb_proveedores", foreignKey: "banco"});
  ctb_proveedores_pagos.belongsTo(adm_bancos, { as: "banco_adm_banco", foreignKey: "banco"});
  adm_bancos.hasMany(ctb_proveedores_pagos, { as: "ctb_proveedores_pagos", foreignKey: "banco"});
  adm_cargos_plataformas.belongsTo(adm_cargos, { as: "idcargo_adm_cargo", foreignKey: "idcargo"});
  adm_cargos.hasMany(adm_cargos_plataformas, { as: "adm_cargos_plataformas", foreignKey: "idcargo"});
  adm_contratos_funciones.belongsTo(adm_cargos, { as: "codcrg_adm_cargo", foreignKey: "codcrg"});
  adm_cargos.hasMany(adm_contratos_funciones, { as: "adm_contratos_funciones", foreignKey: "codcrg"});
  adm_empleados.belongsTo(adm_cargos, { as: "cargo_adm_cargo", foreignKey: "cargo"});
  adm_cargos.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "cargo"});
  adm_funciones_cargos.belongsTo(adm_cargos, { as: "idcargo_adm_cargo", foreignKey: "idcargo"});
  adm_cargos.hasMany(adm_funciones_cargos, { as: "adm_funciones_cargos", foreignKey: "idcargo"});
  adm_empleados.belongsTo(adm_ciudades, { as: "ciudad_nacimiento_adm_ciudade", foreignKey: "ciudad_nacimiento"});
  adm_ciudades.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "ciudad_nacimiento"});
  ctb_proveedores.belongsTo(adm_ciudades, { as: "ciudad_adm_ciudade", foreignKey: "ciudad"});
  adm_ciudades.hasMany(ctb_proveedores, { as: "ctb_proveedores", foreignKey: "ciudad"});
  matricula_familiares.belongsTo(adm_ciudades, { as: "ciudad_adm_ciudade", foreignKey: "ciudad"});
  adm_ciudades.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "ciudad"});
  adm_ciudades.belongsTo(adm_departamentos, { as: "id_departamento_adm_departamento", foreignKey: "id_departamento"});
  adm_departamentos.hasMany(adm_ciudades, { as: "adm_ciudades", foreignKey: "id_departamento"});
  matricula_familiares.belongsTo(adm_departamentos, { as: "departamento_adm_departamento", foreignKey: "departamento"});
  adm_departamentos.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "departamento"});
  adm_empleados.belongsTo(adm_dependencias, { as: "depuser_adm_dependencia", foreignKey: "depuser"});
  adm_dependencias.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "depuser"});
  ctb_proveedores_respons.belongsTo(adm_dependencias, { as: "coddep_adm_dependencia", foreignKey: "coddep"});
  adm_dependencias.hasMany(ctb_proveedores_respons, { as: "ctb_proveedores_respons", foreignKey: "coddep"});
  adm_email_plantillas.belongsTo(adm_email_plantillas, { as: "id_plantilla_resp_adm_email_plantilla", foreignKey: "id_plantilla_resp"});
  adm_email_plantillas.hasMany(adm_email_plantillas, { as: "adm_email_plantillas", foreignKey: "id_plantilla_resp"});
  adm_email_plantillas_resp.belongsTo(adm_email_plantillas, { as: "id_email_plantilla_adm_email_plantilla", foreignKey: "id_email_plantilla"});
  adm_email_plantillas.hasMany(adm_email_plantillas_resp, { as: "adm_email_plantillas_resps", foreignKey: "id_email_plantilla"});
  adm_empleados_contrato.belongsTo(adm_empleados, { as: "codusr_adm_empleado", foreignKey: "codusr"});
  adm_empleados.hasMany(adm_empleados_contrato, { as: "adm_empleados_contratos", foreignKey: "codusr"});
  adm_empleados_estudios.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(adm_empleados_estudios, { as: "adm_empleados_estudios", foreignKey: "codemp"});
  adm_empleados_plataformas.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(adm_empleados_plataformas, { as: "adm_empleados_plataformas", foreignKey: "codemp"});
  adm_grupos_integrantes.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(adm_grupos_integrantes, { as: "adm_grupos_integrantes", foreignKey: "codemp"});
  ctb_novedad_cambios.belongsTo(adm_empleados, { as: "addusr_adm_empleado", foreignKey: "addusr"});
  adm_empleados.hasMany(ctb_novedad_cambios, { as: "ctb_novedad_cambios", foreignKey: "addusr"});
  ctb_novedad_control_creditos.belongsTo(adm_empleados, { as: "usuario_adm_empleado", foreignKey: "usuario"});
  adm_empleados.hasMany(ctb_novedad_control_creditos, { as: "ctb_novedad_control_creditos", foreignKey: "usuario"});
  ctb_novedad_control_vc.belongsTo(adm_empleados, { as: "reclama_adm_empleado", foreignKey: "reclama"});
  adm_empleados.hasMany(ctb_novedad_control_vc, { as: "ctb_novedad_control_vcs", foreignKey: "reclama"});
  ctb_novedad_user.belongsTo(adm_empleados, { as: "codusr_adm_empleado", foreignKey: "codusr"});
  adm_empleados.hasMany(ctb_novedad_user, { as: "ctb_novedad_users", foreignKey: "codusr"});
  ctb_novedades_nom.belongsTo(adm_empleados, { as: "codusr_adm_empleado", foreignKey: "codusr"});
  adm_empleados.hasMany(ctb_novedades_nom, { as: "ctb_novedades_noms", foreignKey: "codusr"});
  ctb_novedades_nom.belongsTo(adm_empleados, { as: "addusr_adm_empleado", foreignKey: "addusr"});
  adm_empleados.hasMany(ctb_novedades_nom, { as: "addusr_ctb_novedades_noms", foreignKey: "addusr"});
  ctb_proveedores_pagos.belongsTo(adm_empleados, { as: "responsable_adm_empleado", foreignKey: "responsable"});
  adm_empleados.hasMany(ctb_proveedores_pagos, { as: "ctb_proveedores_pagos", foreignKey: "responsable"});
  ctb_proveedores_respons.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(ctb_proveedores_respons, { as: "ctb_proveedores_respons", foreignKey: "codemp"});
  gnr_parametros_usuarios.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(gnr_parametros_usuarios, { as: "gnr_parametros_usuarios", foreignKey: "codemp"});
  pqrs.belongsTo(adm_empleados, { as: "id_empleado_adm_empleado", foreignKey: "id_empleado"});
  adm_empleados.hasMany(pqrs, { as: "pqrs", foreignKey: "id_empleado"});
  usuarios.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(usuarios, { as: "usuarios", foreignKey: "codemp"});
  adm_contratos_funciones.belongsTo(adm_empleados_contrato, { as: "codcontrato_adm_empleados_contrato", foreignKey: "codcontrato"});
  adm_empleados_contrato.hasMany(adm_contratos_funciones, { as: "adm_contratos_funciones", foreignKey: "codcontrato"});
  adm_empleados.belongsTo(adm_empleados_contrato, { as: "contratos_adm_empleados_contrato", foreignKey: "contratos"});
  adm_empleados_contrato.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "contratos"});
  adm_contratos_funciones.belongsTo(adm_funciones, { as: "idfuncion_adm_funcione", foreignKey: "idfuncion"});
  adm_funciones.hasMany(adm_contratos_funciones, { as: "adm_contratos_funciones", foreignKey: "idfuncion"});
  adm_funciones_cargos.belongsTo(adm_funciones, { as: "idfuncion_adm_funcione", foreignKey: "idfuncion"});
  adm_funciones.hasMany(adm_funciones_cargos, { as: "adm_funciones_cargos", foreignKey: "idfuncion"});
  adm_grupos_integrantes.belongsTo(adm_grupos, { as: "idgrupo_adm_grupo", foreignKey: "idgrupo"});
  adm_grupos.hasMany(adm_grupos_integrantes, { as: "adm_grupos_integrantes", foreignKey: "idgrupo"});
  pevl_evaluacion_grupos.belongsTo(adm_grupos, { as: "id_grupo_adm_grupo", foreignKey: "id_grupo"});
  adm_grupos.hasMany(pevl_evaluacion_grupos, { as: "pevl_evaluacion_grupos", foreignKey: "id_grupo"});
  pevl_evaluacion_integrante.belongsTo(adm_grupos_integrantes, { as: "id_integrante_adm_grupos_integrante", foreignKey: "id_integrante"});
  adm_grupos_integrantes.hasMany(pevl_evaluacion_integrante, { as: "pevl_evaluacion_integrantes", foreignKey: "id_integrante"});
  adm_ciudades.belongsTo(adm_paises, { as: "paises_Codigo_adm_paise", foreignKey: "paises_Codigo"});
  adm_paises.hasMany(adm_ciudades, { as: "adm_ciudades", foreignKey: "paises_Codigo"});
  adm_departamentos.belongsTo(adm_paises, { as: "id_pais_adm_paise", foreignKey: "id_pais"});
  adm_paises.hasMany(adm_departamentos, { as: "adm_departamentos", foreignKey: "id_pais"});
  adm_empleados.belongsTo(adm_paises, { as: "pais_nacimiento_adm_paise", foreignKey: "pais_nacimiento"});
  adm_paises.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "pais_nacimiento"});
  ctb_proveedores.belongsTo(adm_paises, { as: "pais_adm_paise", foreignKey: "pais"});
  adm_paises.hasMany(ctb_proveedores, { as: "ctb_proveedores", foreignKey: "pais"});
  matricula_familiares.belongsTo(adm_paises, { as: "pais_adm_paise", foreignKey: "pais"});
  adm_paises.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "pais"});
  adm_cargos_plataformas.belongsTo(adm_plataformas, { as: "idPlataforma_adm_plataforma", foreignKey: "idPlataforma"});
  adm_plataformas.hasMany(adm_cargos_plataformas, { as: "adm_cargos_plataformas", foreignKey: "idPlataforma"});
  adm_dependencias.belongsTo(adm_sedes, { as: "depsed_adm_sede", foreignKey: "depsed"});
  adm_sedes.hasMany(adm_dependencias, { as: "adm_dependencia", foreignKey: "depsed"});
  biz_opciones.belongsTo(biz_opciones, { as: "depende_biz_opcione", foreignKey: "depende"});
  biz_opciones.hasMany(biz_opciones, { as: "biz_opciones", foreignKey: "depende"});
  biz_roles_opciones.belongsTo(biz_opciones, { as: "id_opcion_biz_opcione", foreignKey: "id_opcion"});
  biz_opciones.hasMany(biz_roles_opciones, { as: "biz_roles_opciones", foreignKey: "id_opcion"});
  biz_usuarios_opciones.belongsTo(biz_opciones, { as: "id_opcion_biz_opcione", foreignKey: "id_opcion"});
  biz_opciones.hasMany(biz_usuarios_opciones, { as: "biz_usuarios_opciones", foreignKey: "id_opcion"});
  biz_roles_opciones.belongsTo(biz_roles, { as: "id_rol_biz_role", foreignKey: "id_rol"});
  biz_roles.hasMany(biz_roles_opciones, { as: "biz_roles_opciones", foreignKey: "id_rol"});
  biz_usuarios.belongsTo(biz_roles, { as: "rol_biz_role", foreignKey: "rol"});
  biz_roles.hasMany(biz_usuarios, { as: "biz_usuarios", foreignKey: "rol"});
  biz_usuarios_opciones.belongsTo(biz_usuarios, { as: "id_usuario_biz_usuario", foreignKey: "id_usuario"});
  biz_usuarios.hasMany(biz_usuarios_opciones, { as: "biz_usuarios_opciones", foreignKey: "id_usuario"});
  calendario.belongsTo(calendario_categorias, { as: "id_categoria_calendario_categoria", foreignKey: "id_categoria"});
  calendario_categorias.hasMany(calendario, { as: "calendarios", foreignKey: "id_categoria"});
  adm_grupos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(adm_grupos, { as: "adm_grupos", foreignKey: "id_anio"});
  config_periodo.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(config_periodo, { as: "config_periodos", foreignKey: "id_anio"});
  matricula_familiares.belongsTo(config_ciudades, { as: "ident_expedicion_config_ciudade", foreignKey: "ident_expedicion"});
  config_ciudades.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "ident_expedicion"});
  matricula_familiares.belongsTo(config_ciudades, { as: "lugar_nacimiento_config_ciudade", foreignKey: "lugar_nacimiento"});
  config_ciudades.hasMany(matricula_familiares, { as: "lugar_nacimiento_matricula_familiares", foreignKey: "lugar_nacimiento"});
  matricula_familiares.belongsTo(config_tipos_ident, { as: "ident_tipo_config_tipos_ident", foreignKey: "ident_tipo"});
  config_tipos_ident.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "ident_tipo"});
  ctb_doc_electronicos_productos.belongsTo(ctb_doc_electronicos, { as: "id_doc_electronico_ctb_doc_electronico", foreignKey: "id_doc_electronico"});
  ctb_doc_electronicos.hasMany(ctb_doc_electronicos_productos, { as: "ctb_doc_electronicos_productos", foreignKey: "id_doc_electronico"});
  ctb_doc_electronicos_productos_componentes.belongsTo(ctb_doc_electronicos_productos, { as: "id_doc_electronico_producto_ctb_doc_electronicos_producto", foreignKey: "id_doc_electronico_producto"});
  ctb_doc_electronicos_productos.hasMany(ctb_doc_electronicos_productos_componentes, { as: "ctb_doc_electronicos_productos_componentes", foreignKey: "id_doc_electronico_producto"});
  ctb_doc_electronicos_productos_curriculos.belongsTo(ctb_doc_electronicos_productos, { as: "id_doc_electronico_producto_ctb_doc_electronicos_producto", foreignKey: "id_doc_electronico_producto"});
  ctb_doc_electronicos_productos.hasMany(ctb_doc_electronicos_productos_curriculos, { as: "ctb_doc_electronicos_productos_curriculos", foreignKey: "id_doc_electronico_producto"});
  ctb_doc_electronicos_productos_rutas_aprendizaje.belongsTo(ctb_doc_electronicos_productos, { as: "id_doc_electronico_producto_ctb_doc_electronicos_producto", foreignKey: "id_doc_electronico_producto"});
  ctb_doc_electronicos_productos.hasMany(ctb_doc_electronicos_productos_rutas_aprendizaje, { as: "ctb_doc_electronicos_productos_rutas_aprendizajes", foreignKey: "id_doc_electronico_producto"});
  ctb_novedad_control_cierresdetalle.belongsTo(ctb_novedad_control_cajas, { as: "codubicacion_ctb_novedad_control_caja", foreignKey: "codubicacion"});
  ctb_novedad_control_cajas.hasMany(ctb_novedad_control_cierresdetalle, { as: "ctb_novedad_control_cierresdetalles", foreignKey: "codubicacion"});
  ctb_novedad_control_cierresdetalle.belongsTo(ctb_novedad_control_creditos, { as: "codcredito_ctb_novedad_control_credito", foreignKey: "codcredito"});
  ctb_novedad_control_creditos.hasMany(ctb_novedad_control_cierresdetalle, { as: "ctb_novedad_control_cierresdetalles", foreignKey: "codcredito"});
  ctb_novedad_control_vc.belongsTo(ctb_novedad_control_creditos, { as: "codcierre_ctb_novedad_control_credito", foreignKey: "codcierre"});
  ctb_novedad_control_creditos.hasMany(ctb_novedad_control_vc, { as: "ctb_novedad_control_vcs", foreignKey: "codcierre"});
  ctb_novedad_control_vc_detalle.belongsTo(ctb_novedad_control_vc, { as: "codventa_ctb_novedad_control_vc", foreignKey: "codventa"});
  ctb_novedad_control_vc.hasMany(ctb_novedad_control_vc_detalle, { as: "ctb_novedad_control_vc_detalles", foreignKey: "codventa"});
  ctb_novedad_control_cajas.belongsTo(ctb_novedad_tipos, { as: "id_novedad_ctb_novedad_tipo", foreignKey: "id_novedad"});
  ctb_novedad_tipos.hasMany(ctb_novedad_control_cajas, { as: "ctb_novedad_control_cajas", foreignKey: "id_novedad"});
  ctb_novedad_user.belongsTo(ctb_novedad_tipos, { as: "codnov_ctb_novedad_tipo", foreignKey: "codnov"});
  ctb_novedad_tipos.hasMany(ctb_novedad_user, { as: "ctb_novedad_users", foreignKey: "codnov"});
  ctb_novedades_nom.belongsTo(ctb_novedad_tipos, { as: "concepto_ctb_novedad_tipo", foreignKey: "concepto"});
  ctb_novedad_tipos.hasMany(ctb_novedades_nom, { as: "ctb_novedades_noms", foreignKey: "concepto"});
  ctb_novedad_cambios.belongsTo(ctb_novedades_nom, { as: "codnovd_ctb_novedades_nom", foreignKey: "codnovd"});
  ctb_novedades_nom.hasMany(ctb_novedad_cambios, { as: "ctb_novedad_cambios", foreignKey: "codnovd"});
  ctb_doc_electronicos_productos.belongsTo(ctb_productos, { as: "id_producto_ctb_producto", foreignKey: "id_producto"});
  ctb_productos.hasMany(ctb_doc_electronicos_productos, { as: "ctb_doc_electronicos_productos", foreignKey: "id_producto"});
  web_componentes_categorias.belongsTo(ctb_productos, { as: "id_producto_ctb_producto", foreignKey: "id_producto"});
  ctb_productos.hasMany(web_componentes_categorias, { as: "web_componentes_categoria", foreignKey: "id_producto"});
  web_curriculos_categorias.belongsTo(ctb_productos, { as: "id_producto_ctb_producto", foreignKey: "id_producto"});
  ctb_productos.hasMany(web_curriculos_categorias, { as: "web_curriculos_categoria", foreignKey: "id_producto"});
  web_rutas_aprendizaje_categorias.belongsTo(ctb_productos, { as: "id_producto_ctb_producto", foreignKey: "id_producto"});
  ctb_productos.hasMany(web_rutas_aprendizaje_categorias, { as: "web_rutas_aprendizaje_categoria", foreignKey: "id_producto"});
  ctb_proveedores_pagos.belongsTo(ctb_proveedores, { as: "proveedor_ctb_proveedore", foreignKey: "proveedor"});
  ctb_proveedores.hasMany(ctb_proveedores_pagos, { as: "ctb_proveedores_pagos", foreignKey: "proveedor"});
  ctb_proveedores_detalles.belongsTo(ctb_proveedores_pagos, { as: "id_pago_ctb_proveedores_pago", foreignKey: "id_pago"});
  ctb_proveedores_pagos.hasMany(ctb_proveedores_detalles, { as: "ctb_proveedores_detalles", foreignKey: "id_pago"});
  ctb_proveedores_recordatorio.belongsTo(ctb_proveedores_pagos, { as: "idPago_ctb_proveedores_pago", foreignKey: "idPago"});
  ctb_proveedores_pagos.hasMany(ctb_proveedores_recordatorio, { as: "ctb_proveedores_recordatorios", foreignKey: "idPago"});
  ctb_proveedores.belongsTo(ctb_proveedores_tipos_ident, { as: "tipo_documento_ctb_proveedores_tipos_ident", foreignKey: "tipo_documento"});
  ctb_proveedores_tipos_ident.hasMany(ctb_proveedores, { as: "ctb_proveedores", foreignKey: "tipo_documento"});
  adm_dependencias.belongsTo(departamentos, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamentos.hasMany(adm_dependencias, { as: "adm_dependencia", foreignKey: "id_departamento"});
  calendario.belongsTo(departamentos, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamentos.hasMany(calendario, { as: "calendarios", foreignKey: "id_departamento"});
  calendario_categorias.belongsTo(departamentos, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamentos.hasMany(calendario_categorias, { as: "calendario_categoria", foreignKey: "id_departamento"});
  departamentos_opciones.belongsTo(departamentos, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamentos.hasMany(departamentos_opciones, { as: "departamentos_opciones", foreignKey: "id_departamento"});
  pqrs.belongsTo(departamentos, { as: "departamento_departamento", foreignKey: "departamento"});
  departamentos.hasMany(pqrs, { as: "pqrs", foreignKey: "departamento"});
  usuarios_departamentos.belongsTo(departamentos, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamentos.hasMany(usuarios_departamentos, { as: "usuarios_departamentos", foreignKey: "id_departamento"});
  gnr_parametros.belongsTo(gnr_parametros_perfiles, { as: "perfil_gnr_parametros_perfile", foreignKey: "perfil"});
  gnr_parametros_perfiles.hasMany(gnr_parametros, { as: "gnr_parametros", foreignKey: "perfil"});
  gnr_parametros_usuarios.belongsTo(gnr_parametros_perfiles, { as: "perfil_gnr_parametros_perfile", foreignKey: "perfil"});
  gnr_parametros_perfiles.hasMany(gnr_parametros_usuarios, { as: "gnr_parametros_usuarios", foreignKey: "perfil"});
  notificaciones_disparadores.belongsTo(notificaciones, { as: "id_notificacion_notificacione", foreignKey: "id_notificacion"});
  notificaciones.hasMany(notificaciones_disparadores, { as: "notificaciones_disparadores", foreignKey: "id_notificacion"});
  notificaciones_enviadas.belongsTo(notificaciones, { as: "id_notificacion_notificacione", foreignKey: "id_notificacion"});
  notificaciones.hasMany(notificaciones_enviadas, { as: "notificaciones_enviadas", foreignKey: "id_notificacion"});
  notificaciones_users.belongsTo(notificaciones, { as: "id_notificacion_notificacione", foreignKey: "id_notificacion"});
  notificaciones.hasMany(notificaciones_users, { as: "notificaciones_users", foreignKey: "id_notificacion"});
  notificaciones_enviadas.belongsTo(notificaciones_disparadores, { as: "id_disparador_notificaciones_disparadore", foreignKey: "id_disparador"});
  notificaciones_disparadores.hasMany(notificaciones_enviadas, { as: "notificaciones_enviadas", foreignKey: "id_disparador"});
  departamentos_opciones.belongsTo(opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion"});
  opciones.hasMany(departamentos_opciones, { as: "departamentos_opciones", foreignKey: "id_opcion"});
  opciones.belongsTo(opciones, { as: "depende_opcione", foreignKey: "depende"});
  opciones.hasMany(opciones, { as: "opciones", foreignKey: "depende"});
  usuarios_opciones.belongsTo(opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion"});
  opciones.hasMany(usuarios_opciones, { as: "usuarios_opciones", foreignKey: "id_opcion"});
  usuarios_perfil_opciones.belongsTo(opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion"});
  opciones.hasMany(usuarios_perfil_opciones, { as: "usuarios_perfil_opciones", foreignKey: "id_opcion"});
  usuarios_permisos_opciones.belongsTo(opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion"});
  opciones.hasMany(usuarios_permisos_opciones, { as: "usuarios_permisos_opciones", foreignKey: "id_opcion"});
  pevl_evaluacion_indicador.belongsTo(pelv_indicadores, { as: "id_indicador_pelv_indicadore", foreignKey: "id_indicador"});
  pelv_indicadores.hasMany(pevl_evaluacion_indicador, { as: "pevl_evaluacion_indicadors", foreignKey: "id_indicador"});
  pevl_evaluacion_integrante.belongsTo(pelv_indicadores, { as: "id_indicador_pelv_indicadore", foreignKey: "id_indicador"});
  pelv_indicadores.hasMany(pevl_evaluacion_integrante, { as: "pevl_evaluacion_integrantes", foreignKey: "id_indicador"});
  pelv_indicadores.belongsTo(pevl_criterios, { as: "id_criterio_pevl_criterio", foreignKey: "id_criterio"});
  pevl_criterios.hasMany(pelv_indicadores, { as: "pelv_indicadores", foreignKey: "id_criterio"});
  pevl_evaluacion_criterio.belongsTo(pevl_criterios, { as: "id_criterio_pevl_criterio", foreignKey: "id_criterio"});
  pevl_criterios.hasMany(pevl_evaluacion_criterio, { as: "pevl_evaluacion_criterios", foreignKey: "id_criterio"});
  pevl_evaluacion_criterio.belongsTo(pevl_evaluacion, { as: "id_evaluacion_pevl_evaluacion", foreignKey: "id_evaluacion"});
  pevl_evaluacion.hasMany(pevl_evaluacion_criterio, { as: "pevl_evaluacion_criterios", foreignKey: "id_evaluacion"});
  pevl_evaluacion_grupos.belongsTo(pevl_evaluacion, { as: "id_evaluacion_pevl_evaluacion", foreignKey: "id_evaluacion"});
  pevl_evaluacion.hasMany(pevl_evaluacion_grupos, { as: "pevl_evaluacion_grupos", foreignKey: "id_evaluacion"});
  pevl_evaluacion_indicador.belongsTo(pevl_evaluacion, { as: "id_evaluacion_pevl_evaluacion", foreignKey: "id_evaluacion"});
  pevl_evaluacion.hasMany(pevl_evaluacion_indicador, { as: "pevl_evaluacion_indicadors", foreignKey: "id_evaluacion"});
  pevl_evaluacion_integrante.belongsTo(pevl_evaluacion_grupos, { as: "id_evaluacion_pevl_evaluacion_grupo", foreignKey: "id_evaluacion"});
  pevl_evaluacion_grupos.hasMany(pevl_evaluacion_integrante, { as: "pevl_evaluacion_integrantes", foreignKey: "id_evaluacion"});
  pevl_evaluacion_grupos.belongsTo(pevl_evaluacion_programacion, { as: "id_programacion_pevl_evaluacion_programacion", foreignKey: "id_programacion"});
  pevl_evaluacion_programacion.hasMany(pevl_evaluacion_grupos, { as: "pevl_evaluacion_grupos", foreignKey: "id_programacion"});
  pqrs_respuesta.belongsTo(pqrs, { as: "pqr", foreignKey: "pqrs_id"});
  pqrs.hasMany(pqrs_respuesta, { as: "pqrs_respuesta", foreignKey: "pqrs_id"});
  pqrs.belongsTo(pqrs_tipo_perfil, { as: "tipo_perfil_pqrs_tipo_perfil", foreignKey: "tipo_perfil"});
  pqrs_tipo_perfil.hasMany(pqrs, { as: "pqrs", foreignKey: "tipo_perfil"});
  pqrs.belongsTo(pqrs_tipo_solicitud, { as: "tipo_solicitud_pqrs_tipo_solicitud", foreignKey: "tipo_solicitud"});
  pqrs_tipo_solicitud.hasMany(pqrs, { as: "pqrs", foreignKey: "tipo_solicitud"});
  test_actividades_ejercicios.belongsTo(test_actividades, { as: "cod_actividad_test_actividade", foreignKey: "cod_actividad"});
  test_actividades.hasMany(test_actividades_ejercicios, { as: "test_actividades_ejercicios", foreignKey: "cod_actividad"});
  test_general_preguntas.belongsTo(test_general, { as: "id_test_general_test_general", foreignKey: "id_test_general"});
  test_general.hasMany(test_general_preguntas, { as: "test_general_pregunta", foreignKey: "id_test_general"});
  test_resgeneral.belongsTo(test_general, { as: "id_test_test_general", foreignKey: "id_test"});
  test_general.hasMany(test_resgeneral, { as: "test_resgenerals", foreignKey: "id_test"});
  test_preguntas_opciones.belongsTo(test_opciones, { as: "id_opcion_test_opcione", foreignKey: "id_opcion"});
  test_opciones.hasMany(test_preguntas_opciones, { as: "test_preguntas_opciones", foreignKey: "id_opcion"});
  test_resdetalle.belongsTo(test_opciones, { as: "id_opcion_test_opcione", foreignKey: "id_opcion"});
  test_opciones.hasMany(test_resdetalle, { as: "test_resdetalles", foreignKey: "id_opcion"});
  test_general_preguntas.belongsTo(test_preguntas, { as: "id_pregunta_test_pregunta", foreignKey: "id_pregunta"});
  test_preguntas.hasMany(test_general_preguntas, { as: "test_general_pregunta", foreignKey: "id_pregunta"});
  test_preguntas_opciones.belongsTo(test_preguntas, { as: "id_pregunta_test_pregunta", foreignKey: "id_pregunta"});
  test_preguntas.hasMany(test_preguntas_opciones, { as: "test_preguntas_opciones", foreignKey: "id_pregunta"});
  test_resdetalle.belongsTo(test_preguntas, { as: "codpre_test_pregunta", foreignKey: "codpre"});
  test_preguntas.hasMany(test_resdetalle, { as: "test_resdetalles", foreignKey: "codpre"});
  test_resdetalle.belongsTo(test_resgeneral, { as: "id_test_resgeneral_test_resgeneral", foreignKey: "id_test_resgeneral"});
  test_resgeneral.hasMany(test_resdetalle, { as: "test_resdetalles", foreignKey: "id_test_resgeneral"});
  test_preguntas.belongsTo(test_tipo, { as: "tipo_test_tipo", foreignKey: "tipo"});
  test_tipo.hasMany(test_preguntas, { as: "test_pregunta", foreignKey: "tipo"});
  test_tipo_users.belongsTo(test_tipo, { as: "id_tipo_test_tipo", foreignKey: "id_tipo"});
  test_tipo.hasMany(test_tipo_users, { as: "test_tipo_users", foreignKey: "id_tipo"});
  adm_email_plantillas_resp.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(adm_email_plantillas_resp, { as: "adm_email_plantillas_resps", foreignKey: "id_usuario"});
  calendario.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(calendario, { as: "calendarios", foreignKey: "id_usuario"});
  notificaciones_users.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(notificaciones_users, { as: "notificaciones_users", foreignKey: "id_user"});
  test_tipo_users.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(test_tipo_users, { as: "test_tipo_users", foreignKey: "id_user"});
  usuarios_departamentos.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(usuarios_departamentos, { as: "usuarios_departamentos", foreignKey: "id_usuario"});
  usuarios_opciones.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(usuarios_opciones, { as: "usuarios_opciones", foreignKey: "id_usuario"});
  usuarios_permisos_opciones.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(usuarios_permisos_opciones, { as: "usuarios_permisos_opciones", foreignKey: "id_usuario"});
  adm_empleados.belongsTo(usuarios_perfil, { as: "prfemp_usuarios_perfil", foreignKey: "prfemp"});
  usuarios_perfil.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "prfemp"});
  gnr_parametros.belongsTo(usuarios_perfil, { as: "prfpar_usuarios_perfil", foreignKey: "prfpar"});
  usuarios_perfil.hasMany(gnr_parametros, { as: "gnr_parametros", foreignKey: "prfpar"});
  usuarios.belongsTo(usuarios_perfil, { as: "id_perfil_usuarios_perfil", foreignKey: "id_perfil"});
  usuarios_perfil.hasMany(usuarios, { as: "usuarios", foreignKey: "id_perfil"});
  usuarios_perfil_opciones.belongsTo(usuarios_perfil, { as: "id_perfil_usuarios_perfil", foreignKey: "id_perfil"});
  usuarios_perfil.hasMany(usuarios_perfil_opciones, { as: "usuarios_perfil_opciones", foreignKey: "id_perfil"});
  ctb_doc_electronicos_productos_componentes.belongsTo(web_componentes, { as: "id_componente_web_componente", foreignKey: "id_componente"});
  web_componentes.hasMany(ctb_doc_electronicos_productos_componentes, { as: "ctb_doc_electronicos_productos_componentes", foreignKey: "id_componente"});
  web_suscripciones_componentes.belongsTo(web_componentes, { as: "id_componente_web_componente", foreignKey: "id_componente"});
  web_componentes.hasMany(web_suscripciones_componentes, { as: "web_suscripciones_componentes", foreignKey: "id_componente"});
  web_componentes.belongsTo(web_componentes_categorias, { as: "id_componente_categoria_web_componentes_categoria", foreignKey: "id_componente_categoria"});
  web_componentes_categorias.hasMany(web_componentes, { as: "web_componentes", foreignKey: "id_componente_categoria"});
  ctb_doc_electronicos_productos_curriculos.belongsTo(web_curriculos, { as: "id_curriculo_web_curriculo", foreignKey: "id_curriculo"});
  web_curriculos.hasMany(ctb_doc_electronicos_productos_curriculos, { as: "ctb_doc_electronicos_productos_curriculos", foreignKey: "id_curriculo"});
  web_suscripciones_curriculos.belongsTo(web_curriculos, { as: "id_curriculo_web_curriculo", foreignKey: "id_curriculo"});
  web_curriculos.hasMany(web_suscripciones_curriculos, { as: "web_suscripciones_curriculos", foreignKey: "id_curriculo"});
  web_curriculos.belongsTo(web_curriculos_categorias, { as: "id_curriculo_categoria_web_curriculos_categoria", foreignKey: "id_curriculo_categoria"});
  web_curriculos_categorias.hasMany(web_curriculos, { as: "web_curriculos", foreignKey: "id_curriculo_categoria"});
  web_cursos_certificados_usuarios.belongsTo(web_cursos, { as: "id_curso_web_curso", foreignKey: "id_curso"});
  web_cursos.hasMany(web_cursos_certificados_usuarios, { as: "web_cursos_certificados_usuarios", foreignKey: "id_curso"});
  web_cursos_comunidad.belongsTo(web_cursos, { as: "id_curso_web_curso", foreignKey: "id_curso"});
  web_cursos.hasMany(web_cursos_comunidad, { as: "web_cursos_comunidads", foreignKey: "id_curso"});
  web_cursos_instructores.belongsTo(web_cursos, { as: "id_curso_web_curso", foreignKey: "id_curso"});
  web_cursos.hasMany(web_cursos_instructores, { as: "web_cursos_instructores", foreignKey: "id_curso"});
  web_cursos_materiales.belongsTo(web_cursos, { as: "id_curso_web_curso", foreignKey: "id_curso"});
  web_cursos.hasMany(web_cursos_materiales, { as: "web_cursos_materiales", foreignKey: "id_curso"});
  web_cursos_modulos.belongsTo(web_cursos, { as: "id_curso_web_curso", foreignKey: "id_curso"});
  web_cursos.hasMany(web_cursos_modulos, { as: "web_cursos_modulos", foreignKey: "id_curso"});
  web_rutas_aprendizaje_cursos.belongsTo(web_cursos, { as: "id_curso_web_curso", foreignKey: "id_curso"});
  web_cursos.hasMany(web_rutas_aprendizaje_cursos, { as: "web_rutas_aprendizaje_cursos", foreignKey: "id_curso"});
  web_cursos.belongsTo(web_cursos_categorias, { as: "id_curso_categoria_web_cursos_categoria", foreignKey: "id_curso_categoria"});
  web_cursos_categorias.hasMany(web_cursos, { as: "web_cursos", foreignKey: "id_curso_categoria"});
  web_cursos_modulos_lecciones.belongsTo(web_cursos_modulos, { as: "id_curso_modulo_web_cursos_modulo", foreignKey: "id_curso_modulo"});
  web_cursos_modulos.hasMany(web_cursos_modulos_lecciones, { as: "web_cursos_modulos_lecciones", foreignKey: "id_curso_modulo"});
  web_cursos_progreso_usuarios.belongsTo(web_cursos_modulos_lecciones, { as: "id_curso_modulo_leccion_web_cursos_modulos_leccione", foreignKey: "id_curso_modulo_leccion"});
  web_cursos_modulos_lecciones.hasMany(web_cursos_progreso_usuarios, { as: "web_cursos_progreso_usuarios", foreignKey: "id_curso_modulo_leccion"});
  biz_usuarios.belongsTo(web_empresas, { as: "empresa", foreignKey: "empresa_id"});
  web_empresas.hasMany(biz_usuarios, { as: "biz_usuarios", foreignKey: "empresa_id"});
  web_cursos_comunidad.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_cursos_comunidad, { as: "web_cursos_comunidads", foreignKey: "id_empresa"});
  web_empresas_areas.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_empresas_areas, { as: "web_empresas_areas", foreignKey: "id_empresa"});
  web_suscripciones.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_suscripciones, { as: "web_suscripciones", foreignKey: "id_empresa"});
  web_usuarios_empresas.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_usuarios_empresas, { as: "web_usuarios_empresas", foreignKey: "id_empresa"});
  web_usuarios_felicitaciones.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_usuarios_felicitaciones, { as: "web_usuarios_felicitaciones", foreignKey: "id_empresa"});
  web_usuarios_lista_deseos.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_usuarios_lista_deseos, { as: "web_usuarios_lista_deseos", foreignKey: "id_empresa"});
  web_usuarios_niveles.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_usuarios_niveles, { as: "web_usuarios_niveles", foreignKey: "id_empresa"});
  web_usuarios_notificaciones.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_usuarios_notificaciones, { as: "web_usuarios_notificaciones", foreignKey: "id_empresa"});
  web_usuarios_puntos.belongsTo(web_empresas, { as: "id_empresa_web_empresa", foreignKey: "id_empresa"});
  web_empresas.hasMany(web_usuarios_puntos, { as: "web_usuarios_puntos", foreignKey: "id_empresa"});
  web_usuarios_empresas.belongsTo(web_empresas_areas, { as: "id_empresa_area_web_empresas_area", foreignKey: "id_empresa_area"});
  web_empresas_areas.hasMany(web_usuarios_empresas, { as: "web_usuarios_empresas", foreignKey: "id_empresa_area"});
  web_cursos_instructores.belongsTo(web_instructores, { as: "id_instructor_web_instructore", foreignKey: "id_instructor"});
  web_instructores.hasMany(web_cursos_instructores, { as: "web_cursos_instructores", foreignKey: "id_instructor"});
  web_niveles.belongsTo(web_niveles, { as: "id_siguiente_nivel_web_nivele", foreignKey: "id_siguiente_nivel"});
  web_niveles.hasMany(web_niveles, { as: "web_niveles", foreignKey: "id_siguiente_nivel"});
  web_usuarios_empresas.belongsTo(web_niveles, { as: "id_nivel_actual_web_nivele", foreignKey: "id_nivel_actual"});
  web_niveles.hasMany(web_usuarios_empresas, { as: "web_usuarios_empresas", foreignKey: "id_nivel_actual"});
  web_usuarios_niveles.belongsTo(web_niveles, { as: "id_nivel_web_nivele", foreignKey: "id_nivel"});
  web_niveles.hasMany(web_usuarios_niveles, { as: "web_usuarios_niveles", foreignKey: "id_nivel"});
  ctb_doc_electronicos_productos_rutas_aprendizaje.belongsTo(web_rutas_aprendizaje, { as: "id_ruta_aprendizaje_web_rutas_aprendizaje", foreignKey: "id_ruta_aprendizaje"});
  web_rutas_aprendizaje.hasMany(ctb_doc_electronicos_productos_rutas_aprendizaje, { as: "ctb_doc_electronicos_productos_rutas_aprendizajes", foreignKey: "id_ruta_aprendizaje"});
  web_rutas_aprendizaje_cursos.belongsTo(web_rutas_aprendizaje, { as: "id_ruta_aprendizaje_web_rutas_aprendizaje", foreignKey: "id_ruta_aprendizaje"});
  web_rutas_aprendizaje.hasMany(web_rutas_aprendizaje_cursos, { as: "web_rutas_aprendizaje_cursos", foreignKey: "id_ruta_aprendizaje"});
  web_rutas_aprendizajes_sugerencias.belongsTo(web_rutas_aprendizaje, { as: "id_ruta_aprendizaje_origen_web_rutas_aprendizaje", foreignKey: "id_ruta_aprendizaje_origen"});
  web_rutas_aprendizaje.hasMany(web_rutas_aprendizajes_sugerencias, { as: "web_rutas_aprendizajes_sugerencia", foreignKey: "id_ruta_aprendizaje_origen"});
  web_rutas_aprendizajes_sugerencias.belongsTo(web_rutas_aprendizaje, { as: "id_ruta_aprendizaje_destino_web_rutas_aprendizaje", foreignKey: "id_ruta_aprendizaje_destino"});
  web_rutas_aprendizaje.hasMany(web_rutas_aprendizajes_sugerencias, { as: "id_ruta_aprendizaje_destino_web_rutas_aprendizajes_sugerencia", foreignKey: "id_ruta_aprendizaje_destino"});
  web_suscripciones_rutas_aprendizaje.belongsTo(web_rutas_aprendizaje, { as: "id_ruta_aprendizaje_web_rutas_aprendizaje", foreignKey: "id_ruta_aprendizaje"});
  web_rutas_aprendizaje.hasMany(web_suscripciones_rutas_aprendizaje, { as: "web_suscripciones_rutas_aprendizajes", foreignKey: "id_ruta_aprendizaje"});
  web_usuarios_lista_deseos.belongsTo(web_rutas_aprendizaje, { as: "id_ruta_aprendizaje_web_rutas_aprendizaje", foreignKey: "id_ruta_aprendizaje"});
  web_rutas_aprendizaje.hasMany(web_usuarios_lista_deseos, { as: "web_usuarios_lista_deseos", foreignKey: "id_ruta_aprendizaje"});
  web_rutas_aprendizaje.belongsTo(web_rutas_aprendizaje_categorias, { as: "id_ruta_aprendizaje_categoria_web_rutas_aprendizaje_categoria", foreignKey: "id_ruta_aprendizaje_categoria"});
  web_rutas_aprendizaje_categorias.hasMany(web_rutas_aprendizaje, { as: "web_rutas_aprendizajes", foreignKey: "id_ruta_aprendizaje_categoria"});
  web_suscripciones_componentes.belongsTo(web_suscripciones, { as: "id_suscripcion_web_suscripcione", foreignKey: "id_suscripcion"});
  web_suscripciones.hasMany(web_suscripciones_componentes, { as: "web_suscripciones_componentes", foreignKey: "id_suscripcion"});
  web_suscripciones_curriculos.belongsTo(web_suscripciones, { as: "id_suscripcion_web_suscripcione", foreignKey: "id_suscripcion"});
  web_suscripciones.hasMany(web_suscripciones_curriculos, { as: "web_suscripciones_curriculos", foreignKey: "id_suscripcion"});
  web_suscripciones_rutas_aprendizaje.belongsTo(web_suscripciones, { as: "id_suscripcion_web_suscripcione", foreignKey: "id_suscripcion"});
  web_suscripciones.hasMany(web_suscripciones_rutas_aprendizaje, { as: "web_suscripciones_rutas_aprendizajes", foreignKey: "id_suscripcion"});
  web_usuarios_suscripciones.belongsTo(web_suscripciones, { as: "id_suscripcion_web_suscripcione", foreignKey: "id_suscripcion"});
  web_suscripciones.hasMany(web_usuarios_suscripciones, { as: "web_usuarios_suscripciones", foreignKey: "id_suscripcion"});
  web_suscripciones.belongsTo(web_suscripciones_lineas, { as: "id_suscripcion_linea_web_suscripciones_linea", foreignKey: "id_suscripcion_linea"});
  web_suscripciones_lineas.hasMany(web_suscripciones, { as: "web_suscripciones", foreignKey: "id_suscripcion_linea"});
  test_resgeneral.belongsTo(web_usuarios, { as: "id_web_usuario_web_usuario", foreignKey: "id_web_usuario"});
  web_usuarios.hasMany(test_resgeneral, { as: "test_resgenerals", foreignKey: "id_web_usuario"});
  web_cursos_certificados_usuarios.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_cursos_certificados_usuarios, { as: "web_cursos_certificados_usuarios", foreignKey: "id_usuario"});
  web_cursos_comunidad.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_cursos_comunidad, { as: "web_cursos_comunidads", foreignKey: "id_usuario"});
  web_cursos_progreso_usuarios.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_cursos_progreso_usuarios, { as: "web_cursos_progreso_usuarios", foreignKey: "id_usuario"});
  web_usuarios_empresas.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_usuarios_empresas, { as: "web_usuarios_empresas", foreignKey: "id_usuario"});
  web_usuarios_felicitaciones.belongsTo(web_usuarios, { as: "id_usuario_origen_web_usuario", foreignKey: "id_usuario_origen"});
  web_usuarios.hasMany(web_usuarios_felicitaciones, { as: "web_usuarios_felicitaciones", foreignKey: "id_usuario_origen"});
  web_usuarios_felicitaciones.belongsTo(web_usuarios, { as: "id_usuario_destino_web_usuario", foreignKey: "id_usuario_destino"});
  web_usuarios.hasMany(web_usuarios_felicitaciones, { as: "id_usuario_destino_web_usuarios_felicitaciones", foreignKey: "id_usuario_destino"});
  web_usuarios_lista_deseos.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_usuarios_lista_deseos, { as: "web_usuarios_lista_deseos", foreignKey: "id_usuario"});
  web_usuarios_niveles.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_usuarios_niveles, { as: "web_usuarios_niveles", foreignKey: "id_usuario"});
  web_usuarios_notificaciones.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_usuarios_notificaciones, { as: "web_usuarios_notificaciones", foreignKey: "id_usuario"});
  web_usuarios_puntos.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_usuarios_puntos, { as: "web_usuarios_puntos", foreignKey: "id_usuario"});
  web_usuarios_suscripciones.belongsTo(web_usuarios, { as: "id_usuario_web_usuario", foreignKey: "id_usuario"});
  web_usuarios.hasMany(web_usuarios_suscripciones, { as: "web_usuarios_suscripciones", foreignKey: "id_usuario"});
  gnr_parametros_usuarios.belongsTo(acd_elementos, { as: "tipo_acd_elemento", foreignKey: "tipo"});
  acd_elementos.hasMany(gnr_parametros_usuarios, { as: "gnr_parametros_usuarios", foreignKey: "tipo"});
  adm_empleados_plataformas.belongsTo(adm_plataformas, { as: "idPlataforma_adm_plataforma", foreignKey: "idPlataforma"});
  adm_plataformas.hasMany(adm_empleados_plataformas, { as: "adm_empleados_plataformas", foreignKey: "idPlataforma"});
  calendario.belongsTo(adm_sedes, { as: "codsed_adm_sede", foreignKey: "codsed"});
  adm_sedes.hasMany(calendario, { as: "calendarios", foreignKey: "codsed"});
  ctb_proveedores_pagos.belongsTo(adm_sedes, { as: "codsed_adm_sede", foreignKey: "codsed"});
  adm_sedes.hasMany(ctb_proveedores_pagos, { as: "ctb_proveedores_pagos", foreignKey: "codsed"});
  pqrs.belongsTo(adm_sedes, { as: "sede_adm_sede", foreignKey: "sede"});
  adm_sedes.hasMany(pqrs, { as: "pqrs", foreignKey: "sede"});
  gnr_parametros.belongsTo(config_periodo, { as: "perevl_config_periodo", foreignKey: "perevl"});
  config_periodo.hasMany(gnr_parametros, { as: "gnr_parametros", foreignKey: "perevl"});
  pqrs.belongsTo(config_tipos_ident, { as: "tipo_ident_config_tipos_ident", foreignKey: "tipo_ident"});
  config_tipos_ident.hasMany(pqrs, { as: "pqrs", foreignKey: "tipo_ident"});
  pqrs.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(pqrs, { as: "pqrs", foreignKey: "id_familiar"});
  ctb_novedad_control_vc.belongsTo(tienda_cupon_autoriza, { as: "autoriza_tienda_cupon_autoriza", foreignKey: "autoriza"});
  tienda_cupon_autoriza.hasMany(ctb_novedad_control_vc, { as: "ctb_novedad_control_vcs", foreignKey: "autoriza"});
  adm_empleados_contrato.belongsTo(adm_contratos_modelos, { as: "mod_contrato_confidencialidad_adm_contratos_modelo", foreignKey: "mod_contrato_confidencialidad"});
  adm_contratos_modelos.hasMany(adm_empleados_contrato, { as: "adm_empleados_contratos", foreignKey: "mod_contrato_confidencialidad"});

  return {
    SequelizeMeta,
    acd_elementos,
    actualizar_pagos,
    adm_bancos,
    adm_barrios,
    adm_cargos,
    adm_cargos_plataformas,
    adm_ciudades,
    adm_contratos_funciones,
    adm_contratos_modelos,
    adm_contratos_validate,
    adm_departamentos,
    adm_dependencias,
    adm_email_plantillas,
    adm_email_plantillas_resp,
    adm_empleados,
    adm_empleados_contrato,
    adm_empleados_estudios,
    adm_empleados_plataformas,
    adm_eps,
    adm_fondo_pensiones,
    adm_funciones,
    adm_funciones_cargos,
    adm_grupos,
    adm_grupos_integrantes,
    adm_paises,
    adm_plataformas,
    adm_sedes,
    biz_opciones,
    biz_roles,
    biz_roles_opciones,
    biz_usuarios,
    biz_usuarios_opciones,
    calendario,
    calendario_categorias,
    config_anios,
    config_ciudades,
    config_periodo,
    config_tipos_ident,
    ctb_doc_electronicos,
    ctb_doc_electronicos_productos,
    ctb_doc_electronicos_productos_componentes,
    ctb_doc_electronicos_productos_curriculos,
    ctb_doc_electronicos_productos_rutas_aprendizaje,
    ctb_documento_contable,
    ctb_festivos_anios,
    ctb_novedad_cambios,
    ctb_novedad_control_cajas,
    ctb_novedad_control_cierresdetalle,
    ctb_novedad_control_creditos,
    ctb_novedad_control_vc,
    ctb_novedad_control_vc_detalle,
    ctb_novedad_tipos,
    ctb_novedad_user,
    ctb_novedades_nom,
    ctb_productos,
    ctb_proveedores,
    ctb_proveedores_correos,
    ctb_proveedores_detalles,
    ctb_proveedores_pagos,
    ctb_proveedores_recordatorio,
    ctb_proveedores_respons,
    ctb_proveedores_tipos_ident,
    departamentos,
    departamentos_opciones,
    gnr_parametros,
    gnr_parametros_perfiles,
    gnr_parametros_usuarios,
    matricula_familiares,
    notificaciones,
    notificaciones_disparadores,
    notificaciones_enviadas,
    notificaciones_users,
    opciones,
    pelv_indicadores,
    pevl_criterios,
    pevl_evaluacion,
    pevl_evaluacion_criterio,
    pevl_evaluacion_grupos,
    pevl_evaluacion_indicador,
    pevl_evaluacion_integrante,
    pevl_evaluacion_programacion,
    pqrs,
    pqrs_respuesta,
    pqrs_tipo_perfil,
    pqrs_tipo_solicitud,
    test_actividades,
    test_actividades_ejercicios,
    test_cerebros,
    test_general,
    test_general_preguntas,
    test_opciones,
    test_preguntas,
    test_preguntas_opciones,
    test_recomendaciones,
    test_resdetalle,
    test_resgeneral,
    test_tipo,
    test_tipo_users,
    tienda_cupon_autoriza,
    usuarios,
    usuarios_departamentos,
    usuarios_opciones,
    usuarios_perfil,
    usuarios_perfil_opciones,
    usuarios_permisos_opciones,
    web_componentes,
    web_componentes_categorias,
    web_curriculos,
    web_curriculos_categorias,
    web_cursos,
    web_cursos_categorias,
    web_cursos_certificados_usuarios,
    web_cursos_comunidad,
    web_cursos_instructores,
    web_cursos_materiales,
    web_cursos_modulos,
    web_cursos_modulos_lecciones,
    web_cursos_progreso_usuarios,
    web_empresas,
    web_empresas_areas,
    web_instructores,
    web_niveles,
    web_rutas_aprendizaje,
    web_rutas_aprendizaje_categorias,
    web_rutas_aprendizaje_cursos,
    web_rutas_aprendizajes_sugerencias,
    web_suscripciones,
    web_suscripciones_componentes,
    web_suscripciones_curriculos,
    web_suscripciones_lineas,
    web_suscripciones_rutas_aprendizaje,
    web_usuarios,
    web_usuarios_empresas,
    web_usuarios_felicitaciones,
    web_usuarios_lista_deseos,
    web_usuarios_niveles,
    web_usuarios_notificaciones,
    web_usuarios_puntos,
    web_usuarios_suscripciones,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
