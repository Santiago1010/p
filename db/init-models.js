var DataTypes = require('sequelize').DataTypes;
var _SequelizeMeta = require('./SequelizeMeta');
var _acd_elementos = require('./acd_elementos');
var _acf_actas = require('./acf_actas');
var _acf_actas_detalle = require('./acf_actas_detalle');
var _acf_areas = require('./acf_areas');
var _acf_areas_responsables = require('./acf_areas_responsables');
var _acf_bajas = require('./acf_bajas');
var _acf_bajas_detalle = require('./acf_bajas_detalle');
var _acf_categoria = require('./acf_categoria');
var _acf_componentes = require('./acf_componentes');
var _acf_equipos = require('./acf_equipos');
var _acf_herramientas = require('./acf_herramientas');
var _acf_herramientas_categorias = require('./acf_herramientas_categorias');
var _acf_herramientas_responsables = require('./acf_herramientas_responsables');
var _acf_inventario = require('./acf_inventario');
var _acf_inventario_detalle = require('./acf_inventario_detalle');
var _acf_movimientos = require('./acf_movimientos');
var _acf_movimientos_detalle = require('./acf_movimientos_detalle');
var _acf_plan_mantenimiento = require('./acf_plan_mantenimiento');
var _acf_solicitudes = require('./acf_solicitudes');
var _acf_solicitudes_detalle = require('./acf_solicitudes_detalle');
var _acf_solicitudes_evaluacion = require('./acf_solicitudes_evaluacion');
var _acf_solicitudes_evaluacion_criterios = require('./acf_solicitudes_evaluacion_criterios');
var _acf_solicitudes_ordenes = require('./acf_solicitudes_ordenes');
var _acf_solicitudes_ordenes_detalle = require('./acf_solicitudes_ordenes_detalle');
var _acf_traslados = require('./acf_traslados');
var _acf_traslados_detalle = require('./acf_traslados_detalle');
var _acf_ubicaciones = require('./acf_ubicaciones');
var _actualizar_pagos = require('./actualizar_pagos');
var _adm_arl = require('./adm_arl');
var _adm_bancos = require('./adm_bancos');
var _adm_barrios = require('./adm_barrios');
var _adm_cargos = require('./adm_cargos');
var _adm_cargos_plataformas = require('./adm_cargos_plataformas');
var _adm_ciudades = require('./adm_ciudades');
var _adm_contratos_funciones = require('./adm_contratos_funciones');
var _adm_contratos_modelos = require('./adm_contratos_modelos');
var _adm_contratos_tipos = require('./adm_contratos_tipos');
var _adm_departamentos = require('./adm_departamentos');
var _adm_dependencias = require('./adm_dependencias');
var _adm_email_plantillas = require('./adm_email_plantillas');
var _adm_email_plantillas_resp = require('./adm_email_plantillas_resp');
var _adm_empleados = require('./adm_empleados');
var _adm_empleados_contrato = require('./adm_empleados_contrato');
var _adm_empleados_contrato_anexos = require('./adm_empleados_contrato_anexos');
var _adm_empleados_estudios = require('./adm_empleados_estudios');
var _adm_empleados_plataformas = require('./adm_empleados_plataformas');
var _adm_eps = require('./adm_eps');
var _adm_eventos_generales = require('./adm_eventos_generales');
var _adm_fondo_pensiones = require('./adm_fondo_pensiones');
var _adm_funciones = require('./adm_funciones');
var _adm_funciones_cargos = require('./adm_funciones_cargos');
var _adm_grupos = require('./adm_grupos');
var _adm_grupos_integrantes = require('./adm_grupos_integrantes');
var _adm_insumos_inventarios = require('./adm_insumos_inventarios');
var _adm_insumos_invetarios_detalle = require('./adm_insumos_invetarios_detalle');
var _adm_insumos_lugares = require('./adm_insumos_lugares');
var _adm_insumos_lugares_responsable = require('./adm_insumos_lugares_responsable');
var _adm_insumos_movimientos = require('./adm_insumos_movimientos');
var _adm_insumos_movimientos_detalle = require('./adm_insumos_movimientos_detalle');
var _adm_insumos_ordenes = require('./adm_insumos_ordenes');
var _adm_insumos_ordenes_detalle = require('./adm_insumos_ordenes_detalle');
var _adm_insumos_productos = require('./adm_insumos_productos');
var _adm_insumos_productos_categorias = require('./adm_insumos_productos_categorias');
var _adm_insumos_productos_lugares = require('./adm_insumos_productos_lugares');
var _adm_paises = require('./adm_paises');
var _adm_plataformas = require('./adm_plataformas');
var _adm_sedes = require('./adm_sedes');
var _biz_filtros = require('./biz_filtros');
var _biz_filtros_categorias = require('./biz_filtros_categorias');
var _biz_opciones = require('./biz_opciones');
var _biz_roles = require('./biz_roles');
var _biz_roles_opciones = require('./biz_roles_opciones');
var _biz_usuarios = require('./biz_usuarios');
var _biz_usuarios_areas = require('./biz_usuarios_areas');
var _biz_usuarios_opciones = require('./biz_usuarios_opciones');
var _calendario = require('./calendario');
var _calendario_categorias = require('./calendario_categorias');
var _config_anios = require('./config_anios');
var _config_ciudades = require('./config_ciudades');
var _config_periodo = require('./config_periodo');
var _config_tipos_ident = require('./config_tipos_ident');
var _crm_productos = require('./crm_productos');
var _crm_productos_responsables = require('./crm_productos_responsables');
var _crm_propuestas_responsables = require('./crm_propuestas_responsables');
var _crm_suscripciones_productos = require('./crm_suscripciones_productos');
var _ctb_caja_menor = require('./ctb_caja_menor');
var _ctb_caja_menor_egresos = require('./ctb_caja_menor_egresos');
var _ctb_caja_menor_ingresos = require('./ctb_caja_menor_ingresos');
var _ctb_caja_menor_responsables = require('./ctb_caja_menor_responsables');
var _ctb_compras_ordenes = require('./ctb_compras_ordenes');
var _ctb_compras_ordenes_entrega = require('./ctb_compras_ordenes_entrega');
var _ctb_compras_ordenes_entrega_detalle = require('./ctb_compras_ordenes_entrega_detalle');
var _ctb_compras_solicitudes = require('./ctb_compras_solicitudes');
var _ctb_compras_solicitudes_detalle = require('./ctb_compras_solicitudes_detalle');
var _ctb_doc_electronicos = require('./ctb_doc_electronicos');
var _ctb_doc_electronicos_productos = require('./ctb_doc_electronicos_productos');
var _ctb_doc_electronicos_productos_componentes = require('./ctb_doc_electronicos_productos_componentes');
var _ctb_doc_electronicos_productos_rutas_aprendizaje = require('./ctb_doc_electronicos_productos_rutas_aprendizaje');
var _ctb_documento_contable = require('./ctb_documento_contable');
var _ctb_festivos_anios = require('./ctb_festivos_anios');
var _ctb_medios_pago = require('./ctb_medios_pago');
var _ctb_novedad_cambios = require('./ctb_novedad_cambios');
var _ctb_novedad_control_creditos = require('./ctb_novedad_control_creditos');
var _ctb_novedad_tipos = require('./ctb_novedad_tipos');
var _ctb_novedad_user = require('./ctb_novedad_user');
var _ctb_novedades_nom = require('./ctb_novedades_nom');
var _ctb_pagos_cuentas = require('./ctb_pagos_cuentas');
var _ctb_pagos_lugar = require('./ctb_pagos_lugar');
var _ctb_pagos_tarjetas = require('./ctb_pagos_tarjetas');
var _ctb_productos = require('./ctb_productos');
var _ctb_proveedores = require('./ctb_proveedores');
var _ctb_proveedores_correos = require('./ctb_proveedores_correos');
var _ctb_proveedores_detalles = require('./ctb_proveedores_detalles');
var _ctb_proveedores_pagos = require('./ctb_proveedores_pagos');
var _ctb_proveedores_recordatorio = require('./ctb_proveedores_recordatorio');
var _ctb_proveedores_respons = require('./ctb_proveedores_respons');
var _ctb_proveedores_tipos_ident = require('./ctb_proveedores_tipos_ident');
var _departamentos = require('./departamentos');
var _departamentos_opciones = require('./departamentos_opciones');
var _evl_autempleados = require('./evl_autempleados');
var _gnr_parametros = require('./gnr_parametros');
var _gnr_parametros_perfiles = require('./gnr_parametros_perfiles');
var _gnr_parametros_usuarios = require('./gnr_parametros_usuarios');
var _matricula_familiares = require('./matricula_familiares');
var _notificaciones = require('./notificaciones');
var _notificaciones_disparadores = require('./notificaciones_disparadores');
var _notificaciones_enviadas = require('./notificaciones_enviadas');
var _notificaciones_users = require('./notificaciones_users');
var _opciones = require('./opciones');
var _pelv_indicadores = require('./pelv_indicadores');
var _permisos_api_opciones = require('./permisos_api_opciones');
var _permisos_api_opciones_usuarios = require('./permisos_api_opciones_usuarios');
var _pevl_criterios = require('./pevl_criterios');
var _pevl_evaluacion = require('./pevl_evaluacion');
var _pevl_evaluacion_criterio = require('./pevl_evaluacion_criterio');
var _pevl_evaluacion_grupos = require('./pevl_evaluacion_grupos');
var _pevl_evaluacion_indicador = require('./pevl_evaluacion_indicador');
var _pevl_evaluacion_integrante = require('./pevl_evaluacion_integrante');
var _pevl_evaluacion_programacion = require('./pevl_evaluacion_programacion');
var _pevl_evaluacion_programacion_grupo = require('./pevl_evaluacion_programacion_grupo');
var _plan_negocio_archivos = require('./plan_negocio_archivos');
var _pqrs = require('./pqrs');
var _pqrs_respuesta = require('./pqrs_respuesta');
var _pqrs_tipo_perfil = require('./pqrs_tipo_perfil');
var _pqrs_tipo_solicitud = require('./pqrs_tipo_solicitud');
var _test_actividades = require('./test_actividades');
var _test_actividades_configuracion = require('./test_actividades_configuracion');
var _test_actividades_progreso_usuarios = require('./test_actividades_progreso_usuarios');
var _test_actividades_recursos = require('./test_actividades_recursos');
var _test_categorias = require('./test_categorias');
var _test_cerebros = require('./test_cerebros');
var _test_general = require('./test_general');
var _test_general_preguntas = require('./test_general_preguntas');
var _test_general_roles = require('./test_general_roles');
var _test_habilidades = require('./test_habilidades');
var _test_opciones = require('./test_opciones');
var _test_preguntas = require('./test_preguntas');
var _test_preguntas_categorias = require('./test_preguntas_categorias');
var _test_preguntas_opciones = require('./test_preguntas_opciones');
var _test_prsexterno = require('./test_prsexterno');
var _test_recomendaciones = require('./test_recomendaciones');
var _test_recomendaciones_detalle = require('./test_recomendaciones_detalle');
var _test_resdetalle = require('./test_resdetalle');
var _test_resgeneral = require('./test_resgeneral');
var _test_session_reportes = require('./test_session_reportes');
var _test_session_reportes_cerebros = require('./test_session_reportes_cerebros');
var _test_session_reportes_enganches = require('./test_session_reportes_enganches');
var _test_tipo = require('./test_tipo');
var _test_tipo_users = require('./test_tipo_users');
var _usuarios = require('./usuarios');
var _usuarios_departamentos = require('./usuarios_departamentos');
var _usuarios_opciones = require('./usuarios_opciones');
var _usuarios_perfil = require('./usuarios_perfil');
var _usuarios_perfil_opciones = require('./usuarios_perfil_opciones');
var _usuarios_permisos_opciones = require('./usuarios_permisos_opciones');
var _web_certificados = require('./web_certificados');
var _web_certificados_firmas = require('./web_certificados_firmas');
var _web_certificados_logos = require('./web_certificados_logos');
var _web_certificados_patrocinadores = require('./web_certificados_patrocinadores');
var _web_componentes = require('./web_componentes');
var _web_componentes_categorias = require('./web_componentes_categorias');
var _web_curriculos = require('./web_curriculos');
var _web_curriculos_categorias = require('./web_curriculos_categorias');
var _web_curriculos_documentos = require('./web_curriculos_documentos');
var _web_curriculos_evaluaciones = require('./web_curriculos_evaluaciones');
var _web_curriculos_evaluaciones_resdetalle = require('./web_curriculos_evaluaciones_resdetalle');
var _web_curriculos_evaluaciones_resgeneral = require('./web_curriculos_evaluaciones_resgeneral');
var _web_curriculos_grupos = require('./web_curriculos_grupos');
var _web_curriculos_grupos_ventas = require('./web_curriculos_grupos_ventas');
var _web_curriculos_modulos = require('./web_curriculos_modulos');
var _web_curriculos_modulos_lecciones = require('./web_curriculos_modulos_lecciones');
var _web_curriculos_modulos_lecciones_materiales = require('./web_curriculos_modulos_lecciones_materiales');
var _web_curriculos_modulos_lecciones_periodos = require('./web_curriculos_modulos_lecciones_periodos');
var _web_curriculos_progreso_grupo = require('./web_curriculos_progreso_grupo');
var _web_curriculos_sedes = require('./web_curriculos_sedes');
var _web_cursos = require('./web_cursos');
var _web_cursos_categorias = require('./web_cursos_categorias');
var _web_cursos_certificados = require('./web_cursos_certificados');
var _web_cursos_comunidad = require('./web_cursos_comunidad');
var _web_cursos_comunidad_comentarios = require('./web_cursos_comunidad_comentarios');
var _web_cursos_comunidad_likes = require('./web_cursos_comunidad_likes');
var _web_cursos_instructores = require('./web_cursos_instructores');
var _web_cursos_modulos = require('./web_cursos_modulos');
var _web_cursos_modulos_lecciones = require('./web_cursos_modulos_lecciones');
var _web_cursos_modulos_lecciones_materiales = require('./web_cursos_modulos_lecciones_materiales');
var _web_cursos_modulos_lecciones_parrafos = require('./web_cursos_modulos_lecciones_parrafos');
var _web_cursos_modulos_lecciones_respreguntas = require('./web_cursos_modulos_lecciones_respreguntas');
var _web_cursos_progreso_empresa_usuarios = require('./web_cursos_progreso_empresa_usuarios');
var _web_cursos_progreso_usuarios = require('./web_cursos_progreso_usuarios');
var _web_cursos_progreso_usuarios_historial = require('./web_cursos_progreso_usuarios_historial');
var _web_cursos_quiz = require('./web_cursos_quiz');
var _web_cursos_quiz_resdetalle = require('./web_cursos_quiz_resdetalle');
var _web_cursos_quiz_resgeneral = require('./web_cursos_quiz_resgeneral');
var _web_cursos_rating = require('./web_cursos_rating');
var _web_empresas = require('./web_empresas');
var _web_empresas_areas = require('./web_empresas_areas');
var _web_empresas_asesores = require('./web_empresas_asesores');
var _web_empresas_publicidad = require('./web_empresas_publicidad');
var _web_empresas_roles = require('./web_empresas_roles');
var _web_empresas_test_pruebas = require('./web_empresas_test_pruebas');
var _web_empresas_test_recomendaciones = require('./web_empresas_test_recomendaciones');
var _web_eventos = require('./web_eventos');
var _web_eventos_asistencias = require('./web_eventos_asistencias');
var _web_eventos_categorias = require('./web_eventos_categorias');
var _web_eventos_recursos = require('./web_eventos_recursos');
var _web_filtros_intervalos = require('./web_filtros_intervalos');
var _web_formularios = require('./web_formularios');
var _web_formularios_areas = require('./web_formularios_areas');
var _web_formularios_roles = require('./web_formularios_roles');
var _web_formularios_suscripciones = require('./web_formularios_suscripciones');
var _web_imagenes = require('./web_imagenes');
var _web_imagenes_rutas = require('./web_imagenes_rutas');
var _web_instructores = require('./web_instructores');
var _web_instructores_estudios = require('./web_instructores_estudios');
var _web_instructores_experiencias = require('./web_instructores_experiencias');
var _web_niveles = require('./web_niveles');
var _web_notificaciones = require('./web_notificaciones');
var _web_notificaciones_categorias = require('./web_notificaciones_categorias');
var _web_planes_estudio = require('./web_planes_estudio');
var _web_planes_estudio_cursos = require('./web_planes_estudio_cursos');
var _web_programas_formacion = require('./web_programas_formacion');
var _web_programas_formacion_categoria = require('./web_programas_formacion_categoria');
var _web_programas_formacion_modulos = require('./web_programas_formacion_modulos');
var _web_programas_formacion_modulos_capsulas = require('./web_programas_formacion_modulos_capsulas');
var _web_propuestas_planes_pago = require('./web_propuestas_planes_pago');
var _web_propuestas_planes_pago_cuotas = require('./web_propuestas_planes_pago_cuotas');
var _web_propuestas_planes_pago_seguimiento = require('./web_propuestas_planes_pago_seguimiento');
var _web_redes_sociales = require('./web_redes_sociales');
var _web_retos = require('./web_retos');
var _web_retos_actividades = require('./web_retos_actividades');
var _web_retos_asignacion = require('./web_retos_asignacion');
var _web_retos_cursos = require('./web_retos_cursos');
var _web_retos_iteracion = require('./web_retos_iteracion');
var _web_retos_progreso_usuarios = require('./web_retos_progreso_usuarios');
var _web_rutas_aprendizaje = require('./web_rutas_aprendizaje');
var _web_rutas_aprendizaje_categorias = require('./web_rutas_aprendizaje_categorias');
var _web_rutas_aprendizaje_cursos = require('./web_rutas_aprendizaje_cursos');
var _web_rutas_aprendizaje_cursos_empresa_usuarios = require('./web_rutas_aprendizaje_cursos_empresa_usuarios');
var _web_rutas_aprendizaje_cursos_usuarios = require('./web_rutas_aprendizaje_cursos_usuarios');
var _web_rutas_aprendizaje_niveles = require('./web_rutas_aprendizaje_niveles');
var _web_rutas_aprendizajes_sugerencias = require('./web_rutas_aprendizajes_sugerencias');
var _web_suscripcion_notificaciones = require('./web_suscripcion_notificaciones');
var _web_suscripciones = require('./web_suscripciones');
var _web_suscripciones_certificados = require('./web_suscripciones_certificados');
var _web_suscripciones_componentes = require('./web_suscripciones_componentes');
var _web_suscripciones_curriculos = require('./web_suscripciones_curriculos');
var _web_suscripciones_curriculos_ciclos = require('./web_suscripciones_curriculos_ciclos');
var _web_suscripciones_curriculos_docentes = require('./web_suscripciones_curriculos_docentes');
var _web_suscripciones_curriculos_estudiantes = require('./web_suscripciones_curriculos_estudiantes');
var _web_suscripciones_curriculos_grupos = require('./web_suscripciones_curriculos_grupos');
var _web_suscripciones_curriculos_grupos_asistencias = require('./web_suscripciones_curriculos_grupos_asistencias');
var _web_suscripciones_curriculos_grupos_cronograma = require('./web_suscripciones_curriculos_grupos_cronograma');
var _web_suscripciones_curriculos_periodos = require('./web_suscripciones_curriculos_periodos');
var _web_suscripciones_eventos = require('./web_suscripciones_eventos');
var _web_suscripciones_eventos_categorias = require('./web_suscripciones_eventos_categorias');
var _web_suscripciones_lineas = require('./web_suscripciones_lineas');
var _web_suscripciones_programas_calendario = require('./web_suscripciones_programas_calendario');
var _web_suscripciones_programas_calendario_detalle = require('./web_suscripciones_programas_calendario_detalle');
var _web_suscripciones_programas_formacion = require('./web_suscripciones_programas_formacion');
var _web_suscripciones_propuestas = require('./web_suscripciones_propuestas');
var _web_suscripciones_propuestas_historial = require('./web_suscripciones_propuestas_historial');
var _web_suscripciones_rutas_aprendizaje = require('./web_suscripciones_rutas_aprendizaje');
var _web_suscripciones_test = require('./web_suscripciones_test');
var _web_suscripciones_test_habilidades = require('./web_suscripciones_test_habilidades');
var _web_suscripciones_test_reportes = require('./web_suscripciones_test_reportes');
var _web_usuarios = require('./web_usuarios');
var _web_usuarios_empresas = require('./web_usuarios_empresas');
var _web_usuarios_empresas_historial = require('./web_usuarios_empresas_historial');
var _web_usuarios_felicitaciones = require('./web_usuarios_felicitaciones');
var _web_usuarios_lista_deseos = require('./web_usuarios_lista_deseos');
var _web_usuarios_niveles = require('./web_usuarios_niveles');
var _web_usuarios_notificaciones = require('./web_usuarios_notificaciones');
var _web_usuarios_puntos = require('./web_usuarios_puntos');
var _web_usuarios_redes = require('./web_usuarios_redes');
var _web_usuarios_suscripciones = require('./web_usuarios_suscripciones');

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var acd_elementos = _acd_elementos(sequelize, DataTypes);
  var acf_actas = _acf_actas(sequelize, DataTypes);
  var acf_actas_detalle = _acf_actas_detalle(sequelize, DataTypes);
  var acf_areas = _acf_areas(sequelize, DataTypes);
  var acf_areas_responsables = _acf_areas_responsables(sequelize, DataTypes);
  var acf_bajas = _acf_bajas(sequelize, DataTypes);
  var acf_bajas_detalle = _acf_bajas_detalle(sequelize, DataTypes);
  var acf_categoria = _acf_categoria(sequelize, DataTypes);
  var acf_componentes = _acf_componentes(sequelize, DataTypes);
  var acf_equipos = _acf_equipos(sequelize, DataTypes);
  var acf_herramientas = _acf_herramientas(sequelize, DataTypes);
  var acf_herramientas_categorias = _acf_herramientas_categorias(sequelize, DataTypes);
  var acf_herramientas_responsables = _acf_herramientas_responsables(sequelize, DataTypes);
  var acf_inventario = _acf_inventario(sequelize, DataTypes);
  var acf_inventario_detalle = _acf_inventario_detalle(sequelize, DataTypes);
  var acf_movimientos = _acf_movimientos(sequelize, DataTypes);
  var acf_movimientos_detalle = _acf_movimientos_detalle(sequelize, DataTypes);
  var acf_plan_mantenimiento = _acf_plan_mantenimiento(sequelize, DataTypes);
  var acf_solicitudes = _acf_solicitudes(sequelize, DataTypes);
  var acf_solicitudes_detalle = _acf_solicitudes_detalle(sequelize, DataTypes);
  var acf_solicitudes_evaluacion = _acf_solicitudes_evaluacion(sequelize, DataTypes);
  var acf_solicitudes_evaluacion_criterios = _acf_solicitudes_evaluacion_criterios(sequelize, DataTypes);
  var acf_solicitudes_ordenes = _acf_solicitudes_ordenes(sequelize, DataTypes);
  var acf_solicitudes_ordenes_detalle = _acf_solicitudes_ordenes_detalle(sequelize, DataTypes);
  var acf_traslados = _acf_traslados(sequelize, DataTypes);
  var acf_traslados_detalle = _acf_traslados_detalle(sequelize, DataTypes);
  var acf_ubicaciones = _acf_ubicaciones(sequelize, DataTypes);
  var actualizar_pagos = _actualizar_pagos(sequelize, DataTypes);
  var adm_arl = _adm_arl(sequelize, DataTypes);
  var adm_bancos = _adm_bancos(sequelize, DataTypes);
  var adm_barrios = _adm_barrios(sequelize, DataTypes);
  var adm_cargos = _adm_cargos(sequelize, DataTypes);
  var adm_cargos_plataformas = _adm_cargos_plataformas(sequelize, DataTypes);
  var adm_ciudades = _adm_ciudades(sequelize, DataTypes);
  var adm_contratos_funciones = _adm_contratos_funciones(sequelize, DataTypes);
  var adm_contratos_modelos = _adm_contratos_modelos(sequelize, DataTypes);
  var adm_contratos_tipos = _adm_contratos_tipos(sequelize, DataTypes);
  var adm_departamentos = _adm_departamentos(sequelize, DataTypes);
  var adm_dependencias = _adm_dependencias(sequelize, DataTypes);
  var adm_email_plantillas = _adm_email_plantillas(sequelize, DataTypes);
  var adm_email_plantillas_resp = _adm_email_plantillas_resp(sequelize, DataTypes);
  var adm_empleados = _adm_empleados(sequelize, DataTypes);
  var adm_empleados_contrato = _adm_empleados_contrato(sequelize, DataTypes);
  var adm_empleados_contrato_anexos = _adm_empleados_contrato_anexos(sequelize, DataTypes);
  var adm_empleados_estudios = _adm_empleados_estudios(sequelize, DataTypes);
  var adm_empleados_plataformas = _adm_empleados_plataformas(sequelize, DataTypes);
  var adm_eps = _adm_eps(sequelize, DataTypes);
  var adm_eventos_generales = _adm_eventos_generales(sequelize, DataTypes);
  var adm_fondo_pensiones = _adm_fondo_pensiones(sequelize, DataTypes);
  var adm_funciones = _adm_funciones(sequelize, DataTypes);
  var adm_funciones_cargos = _adm_funciones_cargos(sequelize, DataTypes);
  var adm_grupos = _adm_grupos(sequelize, DataTypes);
  var adm_grupos_integrantes = _adm_grupos_integrantes(sequelize, DataTypes);
  var adm_insumos_inventarios = _adm_insumos_inventarios(sequelize, DataTypes);
  var adm_insumos_invetarios_detalle = _adm_insumos_invetarios_detalle(sequelize, DataTypes);
  var adm_insumos_lugares = _adm_insumos_lugares(sequelize, DataTypes);
  var adm_insumos_lugares_responsable = _adm_insumos_lugares_responsable(sequelize, DataTypes);
  var adm_insumos_movimientos = _adm_insumos_movimientos(sequelize, DataTypes);
  var adm_insumos_movimientos_detalle = _adm_insumos_movimientos_detalle(sequelize, DataTypes);
  var adm_insumos_ordenes = _adm_insumos_ordenes(sequelize, DataTypes);
  var adm_insumos_ordenes_detalle = _adm_insumos_ordenes_detalle(sequelize, DataTypes);
  var adm_insumos_productos = _adm_insumos_productos(sequelize, DataTypes);
  var adm_insumos_productos_categorias = _adm_insumos_productos_categorias(sequelize, DataTypes);
  var adm_insumos_productos_lugares = _adm_insumos_productos_lugares(sequelize, DataTypes);
  var adm_paises = _adm_paises(sequelize, DataTypes);
  var adm_plataformas = _adm_plataformas(sequelize, DataTypes);
  var adm_sedes = _adm_sedes(sequelize, DataTypes);
  var biz_filtros = _biz_filtros(sequelize, DataTypes);
  var biz_filtros_categorias = _biz_filtros_categorias(sequelize, DataTypes);
  var biz_opciones = _biz_opciones(sequelize, DataTypes);
  var biz_roles = _biz_roles(sequelize, DataTypes);
  var biz_roles_opciones = _biz_roles_opciones(sequelize, DataTypes);
  var biz_usuarios = _biz_usuarios(sequelize, DataTypes);
  var biz_usuarios_areas = _biz_usuarios_areas(sequelize, DataTypes);
  var biz_usuarios_opciones = _biz_usuarios_opciones(sequelize, DataTypes);
  var calendario = _calendario(sequelize, DataTypes);
  var calendario_categorias = _calendario_categorias(sequelize, DataTypes);
  var config_anios = _config_anios(sequelize, DataTypes);
  var config_ciudades = _config_ciudades(sequelize, DataTypes);
  var config_periodo = _config_periodo(sequelize, DataTypes);
  var config_tipos_ident = _config_tipos_ident(sequelize, DataTypes);
  var crm_productos = _crm_productos(sequelize, DataTypes);
  var crm_productos_responsables = _crm_productos_responsables(sequelize, DataTypes);
  var crm_propuestas_responsables = _crm_propuestas_responsables(sequelize, DataTypes);
  var crm_suscripciones_productos = _crm_suscripciones_productos(sequelize, DataTypes);
  var ctb_caja_menor = _ctb_caja_menor(sequelize, DataTypes);
  var ctb_caja_menor_egresos = _ctb_caja_menor_egresos(sequelize, DataTypes);
  var ctb_caja_menor_ingresos = _ctb_caja_menor_ingresos(sequelize, DataTypes);
  var ctb_caja_menor_responsables = _ctb_caja_menor_responsables(sequelize, DataTypes);
  var ctb_compras_ordenes = _ctb_compras_ordenes(sequelize, DataTypes);
  var ctb_compras_ordenes_entrega = _ctb_compras_ordenes_entrega(sequelize, DataTypes);
  var ctb_compras_ordenes_entrega_detalle = _ctb_compras_ordenes_entrega_detalle(sequelize, DataTypes);
  var ctb_compras_solicitudes = _ctb_compras_solicitudes(sequelize, DataTypes);
  var ctb_compras_solicitudes_detalle = _ctb_compras_solicitudes_detalle(sequelize, DataTypes);
  var ctb_doc_electronicos = _ctb_doc_electronicos(sequelize, DataTypes);
  var ctb_doc_electronicos_productos = _ctb_doc_electronicos_productos(sequelize, DataTypes);
  var ctb_doc_electronicos_productos_componentes = _ctb_doc_electronicos_productos_componentes(sequelize, DataTypes);
  var ctb_doc_electronicos_productos_rutas_aprendizaje = _ctb_doc_electronicos_productos_rutas_aprendizaje(
    sequelize,
    DataTypes
  );
  var ctb_documento_contable = _ctb_documento_contable(sequelize, DataTypes);
  var ctb_festivos_anios = _ctb_festivos_anios(sequelize, DataTypes);
  var ctb_medios_pago = _ctb_medios_pago(sequelize, DataTypes);
  var ctb_novedad_cambios = _ctb_novedad_cambios(sequelize, DataTypes);
  var ctb_novedad_control_creditos = _ctb_novedad_control_creditos(sequelize, DataTypes);
  var ctb_novedad_tipos = _ctb_novedad_tipos(sequelize, DataTypes);
  var ctb_novedad_user = _ctb_novedad_user(sequelize, DataTypes);
  var ctb_novedades_nom = _ctb_novedades_nom(sequelize, DataTypes);
  var ctb_pagos_cuentas = _ctb_pagos_cuentas(sequelize, DataTypes);
  var ctb_pagos_lugar = _ctb_pagos_lugar(sequelize, DataTypes);
  var ctb_pagos_tarjetas = _ctb_pagos_tarjetas(sequelize, DataTypes);
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
  var evl_autempleados = _evl_autempleados(sequelize, DataTypes);
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
  var permisos_api_opciones = _permisos_api_opciones(sequelize, DataTypes);
  var permisos_api_opciones_usuarios = _permisos_api_opciones_usuarios(sequelize, DataTypes);
  var pevl_criterios = _pevl_criterios(sequelize, DataTypes);
  var pevl_evaluacion = _pevl_evaluacion(sequelize, DataTypes);
  var pevl_evaluacion_criterio = _pevl_evaluacion_criterio(sequelize, DataTypes);
  var pevl_evaluacion_grupos = _pevl_evaluacion_grupos(sequelize, DataTypes);
  var pevl_evaluacion_indicador = _pevl_evaluacion_indicador(sequelize, DataTypes);
  var pevl_evaluacion_integrante = _pevl_evaluacion_integrante(sequelize, DataTypes);
  var pevl_evaluacion_programacion = _pevl_evaluacion_programacion(sequelize, DataTypes);
  var pevl_evaluacion_programacion_grupo = _pevl_evaluacion_programacion_grupo(sequelize, DataTypes);
  var plan_negocio_archivos = _plan_negocio_archivos(sequelize, DataTypes);
  var pqrs = _pqrs(sequelize, DataTypes);
  var pqrs_respuesta = _pqrs_respuesta(sequelize, DataTypes);
  var pqrs_tipo_perfil = _pqrs_tipo_perfil(sequelize, DataTypes);
  var pqrs_tipo_solicitud = _pqrs_tipo_solicitud(sequelize, DataTypes);
  var test_actividades = _test_actividades(sequelize, DataTypes);
  var test_actividades_configuracion = _test_actividades_configuracion(sequelize, DataTypes);
  var test_actividades_progreso_usuarios = _test_actividades_progreso_usuarios(sequelize, DataTypes);
  var test_actividades_recursos = _test_actividades_recursos(sequelize, DataTypes);
  var test_categorias = _test_categorias(sequelize, DataTypes);
  var test_cerebros = _test_cerebros(sequelize, DataTypes);
  var test_general = _test_general(sequelize, DataTypes);
  var test_general_preguntas = _test_general_preguntas(sequelize, DataTypes);
  var test_general_roles = _test_general_roles(sequelize, DataTypes);
  var test_habilidades = _test_habilidades(sequelize, DataTypes);
  var test_opciones = _test_opciones(sequelize, DataTypes);
  var test_preguntas = _test_preguntas(sequelize, DataTypes);
  var test_preguntas_categorias = _test_preguntas_categorias(sequelize, DataTypes);
  var test_preguntas_opciones = _test_preguntas_opciones(sequelize, DataTypes);
  var test_prsexterno = _test_prsexterno(sequelize, DataTypes);
  var test_recomendaciones = _test_recomendaciones(sequelize, DataTypes);
  var test_recomendaciones_detalle = _test_recomendaciones_detalle(sequelize, DataTypes);
  var test_resdetalle = _test_resdetalle(sequelize, DataTypes);
  var test_resgeneral = _test_resgeneral(sequelize, DataTypes);
  var test_session_reportes = _test_session_reportes(sequelize, DataTypes);
  var test_session_reportes_cerebros = _test_session_reportes_cerebros(sequelize, DataTypes);
  var test_session_reportes_enganches = _test_session_reportes_enganches(sequelize, DataTypes);
  var test_tipo = _test_tipo(sequelize, DataTypes);
  var test_tipo_users = _test_tipo_users(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var usuarios_departamentos = _usuarios_departamentos(sequelize, DataTypes);
  var usuarios_opciones = _usuarios_opciones(sequelize, DataTypes);
  var usuarios_perfil = _usuarios_perfil(sequelize, DataTypes);
  var usuarios_perfil_opciones = _usuarios_perfil_opciones(sequelize, DataTypes);
  var usuarios_permisos_opciones = _usuarios_permisos_opciones(sequelize, DataTypes);
  var web_certificados = _web_certificados(sequelize, DataTypes);
  var web_certificados_firmas = _web_certificados_firmas(sequelize, DataTypes);
  var web_certificados_logos = _web_certificados_logos(sequelize, DataTypes);
  var web_certificados_patrocinadores = _web_certificados_patrocinadores(sequelize, DataTypes);
  var web_componentes = _web_componentes(sequelize, DataTypes);
  var web_componentes_categorias = _web_componentes_categorias(sequelize, DataTypes);
  var web_curriculos = _web_curriculos(sequelize, DataTypes);
  var web_curriculos_categorias = _web_curriculos_categorias(sequelize, DataTypes);
  var web_curriculos_documentos = _web_curriculos_documentos(sequelize, DataTypes);
  var web_curriculos_evaluaciones = _web_curriculos_evaluaciones(sequelize, DataTypes);
  var web_curriculos_evaluaciones_resdetalle = _web_curriculos_evaluaciones_resdetalle(sequelize, DataTypes);
  var web_curriculos_evaluaciones_resgeneral = _web_curriculos_evaluaciones_resgeneral(sequelize, DataTypes);
  var web_curriculos_grupos = _web_curriculos_grupos(sequelize, DataTypes);
  var web_curriculos_grupos_ventas = _web_curriculos_grupos_ventas(sequelize, DataTypes);
  var web_curriculos_modulos = _web_curriculos_modulos(sequelize, DataTypes);
  var web_curriculos_modulos_lecciones = _web_curriculos_modulos_lecciones(sequelize, DataTypes);
  var web_curriculos_modulos_lecciones_materiales = _web_curriculos_modulos_lecciones_materiales(sequelize, DataTypes);
  var web_curriculos_modulos_lecciones_periodos = _web_curriculos_modulos_lecciones_periodos(sequelize, DataTypes);
  var web_curriculos_progreso_grupo = _web_curriculos_progreso_grupo(sequelize, DataTypes);
  var web_curriculos_sedes = _web_curriculos_sedes(sequelize, DataTypes);
  var web_cursos = _web_cursos(sequelize, DataTypes);
  var web_cursos_categorias = _web_cursos_categorias(sequelize, DataTypes);
  var web_cursos_certificados = _web_cursos_certificados(sequelize, DataTypes);
  var web_cursos_comunidad = _web_cursos_comunidad(sequelize, DataTypes);
  var web_cursos_comunidad_comentarios = _web_cursos_comunidad_comentarios(sequelize, DataTypes);
  var web_cursos_comunidad_likes = _web_cursos_comunidad_likes(sequelize, DataTypes);
  var web_cursos_instructores = _web_cursos_instructores(sequelize, DataTypes);
  var web_cursos_modulos = _web_cursos_modulos(sequelize, DataTypes);
  var web_cursos_modulos_lecciones = _web_cursos_modulos_lecciones(sequelize, DataTypes);
  var web_cursos_modulos_lecciones_materiales = _web_cursos_modulos_lecciones_materiales(sequelize, DataTypes);
  var web_cursos_modulos_lecciones_parrafos = _web_cursos_modulos_lecciones_parrafos(sequelize, DataTypes);
  var web_cursos_modulos_lecciones_respreguntas = _web_cursos_modulos_lecciones_respreguntas(sequelize, DataTypes);
  var web_cursos_progreso_empresa_usuarios = _web_cursos_progreso_empresa_usuarios(sequelize, DataTypes);
  var web_cursos_progreso_usuarios = _web_cursos_progreso_usuarios(sequelize, DataTypes);
  var web_cursos_progreso_usuarios_historial = _web_cursos_progreso_usuarios_historial(sequelize, DataTypes);
  var web_cursos_quiz = _web_cursos_quiz(sequelize, DataTypes);
  var web_cursos_quiz_resdetalle = _web_cursos_quiz_resdetalle(sequelize, DataTypes);
  var web_cursos_quiz_resgeneral = _web_cursos_quiz_resgeneral(sequelize, DataTypes);
  var web_cursos_rating = _web_cursos_rating(sequelize, DataTypes);
  var web_empresas = _web_empresas(sequelize, DataTypes);
  var web_empresas_areas = _web_empresas_areas(sequelize, DataTypes);
  var web_empresas_asesores = _web_empresas_asesores(sequelize, DataTypes);
  var web_empresas_publicidad = _web_empresas_publicidad(sequelize, DataTypes);
  var web_empresas_roles = _web_empresas_roles(sequelize, DataTypes);
  var web_empresas_test_pruebas = _web_empresas_test_pruebas(sequelize, DataTypes);
  var web_empresas_test_recomendaciones = _web_empresas_test_recomendaciones(sequelize, DataTypes);
  var web_eventos = _web_eventos(sequelize, DataTypes);
  var web_eventos_asistencias = _web_eventos_asistencias(sequelize, DataTypes);
  var web_eventos_categorias = _web_eventos_categorias(sequelize, DataTypes);
  var web_eventos_recursos = _web_eventos_recursos(sequelize, DataTypes);
  var web_filtros_intervalos = _web_filtros_intervalos(sequelize, DataTypes);
  var web_formularios = _web_formularios(sequelize, DataTypes);
  var web_formularios_areas = _web_formularios_areas(sequelize, DataTypes);
  var web_formularios_roles = _web_formularios_roles(sequelize, DataTypes);
  var web_formularios_suscripciones = _web_formularios_suscripciones(sequelize, DataTypes);
  var web_imagenes = _web_imagenes(sequelize, DataTypes);
  var web_imagenes_rutas = _web_imagenes_rutas(sequelize, DataTypes);
  var web_instructores = _web_instructores(sequelize, DataTypes);
  var web_instructores_estudios = _web_instructores_estudios(sequelize, DataTypes);
  var web_instructores_experiencias = _web_instructores_experiencias(sequelize, DataTypes);
  var web_niveles = _web_niveles(sequelize, DataTypes);
  var web_notificaciones = _web_notificaciones(sequelize, DataTypes);
  var web_notificaciones_categorias = _web_notificaciones_categorias(sequelize, DataTypes);
  var web_planes_estudio = _web_planes_estudio(sequelize, DataTypes);
  var web_planes_estudio_cursos = _web_planes_estudio_cursos(sequelize, DataTypes);
  var web_programas_formacion = _web_programas_formacion(sequelize, DataTypes);
  var web_programas_formacion_categoria = _web_programas_formacion_categoria(sequelize, DataTypes);
  var web_programas_formacion_modulos = _web_programas_formacion_modulos(sequelize, DataTypes);
  var web_programas_formacion_modulos_capsulas = _web_programas_formacion_modulos_capsulas(sequelize, DataTypes);
  var web_propuestas_planes_pago = _web_propuestas_planes_pago(sequelize, DataTypes);
  var web_propuestas_planes_pago_cuotas = _web_propuestas_planes_pago_cuotas(sequelize, DataTypes);
  var web_propuestas_planes_pago_seguimiento = _web_propuestas_planes_pago_seguimiento(sequelize, DataTypes);
  var web_redes_sociales = _web_redes_sociales(sequelize, DataTypes);
  var web_retos = _web_retos(sequelize, DataTypes);
  var web_retos_actividades = _web_retos_actividades(sequelize, DataTypes);
  var web_retos_asignacion = _web_retos_asignacion(sequelize, DataTypes);
  var web_retos_cursos = _web_retos_cursos(sequelize, DataTypes);
  var web_retos_iteracion = _web_retos_iteracion(sequelize, DataTypes);
  var web_retos_progreso_usuarios = _web_retos_progreso_usuarios(sequelize, DataTypes);
  var web_rutas_aprendizaje = _web_rutas_aprendizaje(sequelize, DataTypes);
  var web_rutas_aprendizaje_categorias = _web_rutas_aprendizaje_categorias(sequelize, DataTypes);
  var web_rutas_aprendizaje_cursos = _web_rutas_aprendizaje_cursos(sequelize, DataTypes);
  var web_rutas_aprendizaje_cursos_empresa_usuarios = _web_rutas_aprendizaje_cursos_empresa_usuarios(
    sequelize,
    DataTypes
  );
  var web_rutas_aprendizaje_cursos_usuarios = _web_rutas_aprendizaje_cursos_usuarios(sequelize, DataTypes);
  var web_rutas_aprendizaje_niveles = _web_rutas_aprendizaje_niveles(sequelize, DataTypes);
  var web_rutas_aprendizajes_sugerencias = _web_rutas_aprendizajes_sugerencias(sequelize, DataTypes);
  var web_suscripcion_notificaciones = _web_suscripcion_notificaciones(sequelize, DataTypes);
  var web_suscripciones = _web_suscripciones(sequelize, DataTypes);
  var web_suscripciones_certificados = _web_suscripciones_certificados(sequelize, DataTypes);
  var web_suscripciones_componentes = _web_suscripciones_componentes(sequelize, DataTypes);
  var web_suscripciones_curriculos = _web_suscripciones_curriculos(sequelize, DataTypes);
  var web_suscripciones_curriculos_ciclos = _web_suscripciones_curriculos_ciclos(sequelize, DataTypes);
  var web_suscripciones_curriculos_docentes = _web_suscripciones_curriculos_docentes(sequelize, DataTypes);
  var web_suscripciones_curriculos_estudiantes = _web_suscripciones_curriculos_estudiantes(sequelize, DataTypes);
  var web_suscripciones_curriculos_grupos = _web_suscripciones_curriculos_grupos(sequelize, DataTypes);
  var web_suscripciones_curriculos_grupos_asistencias = _web_suscripciones_curriculos_grupos_asistencias(
    sequelize,
    DataTypes
  );
  var web_suscripciones_curriculos_grupos_cronograma = _web_suscripciones_curriculos_grupos_cronograma(
    sequelize,
    DataTypes
  );
  var web_suscripciones_curriculos_periodos = _web_suscripciones_curriculos_periodos(sequelize, DataTypes);
  var web_suscripciones_eventos = _web_suscripciones_eventos(sequelize, DataTypes);
  var web_suscripciones_eventos_categorias = _web_suscripciones_eventos_categorias(sequelize, DataTypes);
  var web_suscripciones_lineas = _web_suscripciones_lineas(sequelize, DataTypes);
  var web_suscripciones_programas_calendario = _web_suscripciones_programas_calendario(sequelize, DataTypes);
  var web_suscripciones_programas_calendario_detalle = _web_suscripciones_programas_calendario_detalle(
    sequelize,
    DataTypes
  );
  var web_suscripciones_programas_formacion = _web_suscripciones_programas_formacion(sequelize, DataTypes);
  var web_suscripciones_propuestas = _web_suscripciones_propuestas(sequelize, DataTypes);
  var web_suscripciones_propuestas_historial = _web_suscripciones_propuestas_historial(sequelize, DataTypes);
  var web_suscripciones_rutas_aprendizaje = _web_suscripciones_rutas_aprendizaje(sequelize, DataTypes);
  var web_suscripciones_test = _web_suscripciones_test(sequelize, DataTypes);
  var web_suscripciones_test_habilidades = _web_suscripciones_test_habilidades(sequelize, DataTypes);
  var web_suscripciones_test_reportes = _web_suscripciones_test_reportes(sequelize, DataTypes);
  var web_usuarios = _web_usuarios(sequelize, DataTypes);
  var web_usuarios_empresas = _web_usuarios_empresas(sequelize, DataTypes);
  var web_usuarios_empresas_historial = _web_usuarios_empresas_historial(sequelize, DataTypes);
  var web_usuarios_felicitaciones = _web_usuarios_felicitaciones(sequelize, DataTypes);
  var web_usuarios_lista_deseos = _web_usuarios_lista_deseos(sequelize, DataTypes);
  var web_usuarios_niveles = _web_usuarios_niveles(sequelize, DataTypes);
  var web_usuarios_notificaciones = _web_usuarios_notificaciones(sequelize, DataTypes);
  var web_usuarios_puntos = _web_usuarios_puntos(sequelize, DataTypes);
  var web_usuarios_redes = _web_usuarios_redes(sequelize, DataTypes);
  var web_usuarios_suscripciones = _web_usuarios_suscripciones(sequelize, DataTypes);

  adm_cargos.belongsToMany(adm_funciones, {
    as: 'idfuncion_adm_funciones',
    through: adm_funciones_cargos,
    foreignKey: 'idcargo',
    otherKey: 'idfuncion',
  });
  adm_empleados.belongsToMany(ctb_novedad_tipos, {
    as: 'codnov_ctb_novedad_tipos',
    through: ctb_novedad_user,
    foreignKey: 'codusr',
    otherKey: 'codnov',
  });
  adm_funciones.belongsToMany(adm_cargos, {
    as: 'idcargo_adm_cargos',
    through: adm_funciones_cargos,
    foreignKey: 'idfuncion',
    otherKey: 'idcargo',
  });
  ctb_novedad_tipos.belongsToMany(adm_empleados, {
    as: 'codusr_adm_empleados',
    through: ctb_novedad_user,
    foreignKey: 'codnov',
    otherKey: 'codusr',
  });
  gnr_parametros_usuarios.belongsTo(acd_elementos, { as: 'tipo_acd_elemento', foreignKey: 'tipo' });
  acd_elementos.hasMany(gnr_parametros_usuarios, { as: 'gnr_parametros_usuarios', foreignKey: 'tipo' });
  acf_actas_detalle.belongsTo(acf_actas, { as: 'id_acta_acf_acta', foreignKey: 'id_acta' });
  acf_actas.hasMany(acf_actas_detalle, { as: 'acf_actas_detalles', foreignKey: 'id_acta' });
  acf_areas_responsables.belongsTo(acf_areas, { as: 'id_area_acf_area', foreignKey: 'id_area' });
  acf_areas.hasMany(acf_areas_responsables, { as: 'acf_areas_responsables', foreignKey: 'id_area' });
  acf_categoria.belongsTo(acf_areas, { as: 'id_area_acf_area', foreignKey: 'id_area' });
  acf_areas.hasMany(acf_categoria, { as: 'acf_categoria', foreignKey: 'id_area' });
  acf_equipos.belongsTo(acf_areas, { as: 'id_area_acf_area', foreignKey: 'id_area' });
  acf_areas.hasMany(acf_equipos, { as: 'acf_equipos', foreignKey: 'id_area' });
  acf_herramientas.belongsTo(acf_areas, { as: 'id_area_acf_area', foreignKey: 'id_area' });
  acf_areas.hasMany(acf_herramientas, { as: 'acf_herramienta', foreignKey: 'id_area' });
  acf_plan_mantenimiento.belongsTo(acf_areas, { as: 'id_area_acf_area', foreignKey: 'id_area' });
  acf_areas.hasMany(acf_plan_mantenimiento, { as: 'acf_plan_mantenimientos', foreignKey: 'id_area' });
  acf_inventario.belongsTo(acf_areas_responsables, {
    as: 'id_area_resp_acf_areas_responsable',
    foreignKey: 'id_area_resp',
  });
  acf_areas_responsables.hasMany(acf_inventario, { as: 'acf_inventarios', foreignKey: 'id_area_resp' });
  acf_solicitudes.belongsTo(acf_areas_responsables, {
    as: 'id_area_resp_acf_areas_responsable',
    foreignKey: 'id_area_resp',
  });
  acf_areas_responsables.hasMany(acf_solicitudes, { as: 'acf_solicitudes', foreignKey: 'id_area_resp' });
  acf_bajas_detalle.belongsTo(acf_bajas, { as: 'id_baja_acf_baja', foreignKey: 'id_baja' });
  acf_bajas.hasMany(acf_bajas_detalle, { as: 'acf_bajas_detalles', foreignKey: 'id_baja' });
  acf_equipos.belongsTo(acf_categoria, { as: 'id_categoria_acf_categorium', foreignKey: 'id_categoria' });
  acf_categoria.hasMany(acf_equipos, { as: 'acf_equipos', foreignKey: 'id_categoria' });
  acf_actas_detalle.belongsTo(acf_equipos, { as: 'id_equipo_acf_equipo', foreignKey: 'id_equipo' });
  acf_equipos.hasMany(acf_actas_detalle, { as: 'acf_actas_detalles', foreignKey: 'id_equipo' });
  acf_bajas_detalle.belongsTo(acf_equipos, { as: 'id_equipo_acf_equipo', foreignKey: 'id_equipo' });
  acf_equipos.hasMany(acf_bajas_detalle, { as: 'acf_bajas_detalles', foreignKey: 'id_equipo' });
  acf_componentes.belongsTo(acf_equipos, { as: 'id_equipo_acf_equipo', foreignKey: 'id_equipo' });
  acf_equipos.hasMany(acf_componentes, { as: 'acf_componentes', foreignKey: 'id_equipo' });
  acf_inventario_detalle.belongsTo(acf_equipos, { as: 'id_equipo_acf_equipo', foreignKey: 'id_equipo' });
  acf_equipos.hasMany(acf_inventario_detalle, { as: 'acf_inventario_detalles', foreignKey: 'id_equipo' });
  acf_movimientos_detalle.belongsTo(acf_equipos, { as: 'id_equipo_acf_equipo', foreignKey: 'id_equipo' });
  acf_equipos.hasMany(acf_movimientos_detalle, { as: 'acf_movimientos_detalles', foreignKey: 'id_equipo' });
  acf_solicitudes_detalle.belongsTo(acf_equipos, { as: 'id_equipo_acf_equipo', foreignKey: 'id_equipo' });
  acf_equipos.hasMany(acf_solicitudes_detalle, { as: 'acf_solicitudes_detalles', foreignKey: 'id_equipo' });
  acf_traslados_detalle.belongsTo(acf_equipos, { as: 'id_equipo_acf_equipo', foreignKey: 'id_equipo' });
  acf_equipos.hasMany(acf_traslados_detalle, { as: 'acf_traslados_detalles', foreignKey: 'id_equipo' });
  acf_herramientas_responsables.belongsTo(acf_herramientas, {
    as: 'id_herramienta_acf_herramienta',
    foreignKey: 'id_herramienta',
  });
  acf_herramientas.hasMany(acf_herramientas_responsables, {
    as: 'acf_herramientas_responsables',
    foreignKey: 'id_herramienta',
  });
  acf_herramientas.belongsTo(acf_herramientas_categorias, {
    as: 'id_categoria_acf_herramientas_categoria',
    foreignKey: 'id_categoria',
  });
  acf_herramientas_categorias.hasMany(acf_herramientas, { as: 'acf_herramienta', foreignKey: 'id_categoria' });
  acf_inventario_detalle.belongsTo(acf_inventario, { as: 'id_inventario_acf_inventario', foreignKey: 'id_inventario' });
  acf_inventario.hasMany(acf_inventario_detalle, { as: 'acf_inventario_detalles', foreignKey: 'id_inventario' });
  acf_movimientos_detalle.belongsTo(acf_movimientos, {
    as: 'id_movimiento_acf_movimiento',
    foreignKey: 'id_movimiento',
  });
  acf_movimientos.hasMany(acf_movimientos_detalle, { as: 'acf_movimientos_detalles', foreignKey: 'id_movimiento' });
  acf_solicitudes.belongsTo(acf_plan_mantenimiento, {
    as: 'id_plan_mantenimiento_acf_plan_mantenimiento',
    foreignKey: 'id_plan_mantenimiento',
  });
  acf_plan_mantenimiento.hasMany(acf_solicitudes, { as: 'acf_solicitudes', foreignKey: 'id_plan_mantenimiento' });
  acf_solicitudes_detalle.belongsTo(acf_solicitudes, { as: 'id_solicitud_acf_solicitude', foreignKey: 'id_solicitud' });
  acf_solicitudes.hasMany(acf_solicitudes_detalle, { as: 'acf_solicitudes_detalles', foreignKey: 'id_solicitud' });
  acf_solicitudes_evaluacion.belongsTo(acf_solicitudes, {
    as: 'id_solicitud_acf_solicitude',
    foreignKey: 'id_solicitud',
  });
  acf_solicitudes.hasMany(acf_solicitudes_evaluacion, {
    as: 'acf_solicitudes_evaluacions',
    foreignKey: 'id_solicitud',
  });
  acf_solicitudes_ordenes.belongsTo(acf_solicitudes, { as: 'id_solicitud_acf_solicitude', foreignKey: 'id_solicitud' });
  acf_solicitudes.hasMany(acf_solicitudes_ordenes, { as: 'acf_solicitudes_ordenes', foreignKey: 'id_solicitud' });
  acf_solicitudes_ordenes_detalle.belongsTo(acf_solicitudes_detalle, {
    as: 'id_solicitud_detalle_acf_solicitudes_detalle',
    foreignKey: 'id_solicitud_detalle',
  });
  acf_solicitudes_detalle.hasOne(acf_solicitudes_ordenes_detalle, {
    as: 'acf_solicitudes_ordenes_detalle',
    foreignKey: 'id_solicitud_detalle',
  });
  acf_solicitudes_evaluacion.belongsTo(acf_solicitudes_evaluacion_criterios, {
    as: 'id_criterio_acf_solicitudes_evaluacion_criterio',
    foreignKey: 'id_criterio',
  });
  acf_solicitudes_evaluacion_criterios.hasMany(acf_solicitudes_evaluacion, {
    as: 'acf_solicitudes_evaluacions',
    foreignKey: 'id_criterio',
  });
  acf_solicitudes_ordenes_detalle.belongsTo(acf_solicitudes_ordenes, {
    as: 'id_solicitud_orden_acf_solicitudes_ordene',
    foreignKey: 'id_solicitud_orden',
  });
  acf_solicitudes_ordenes.hasMany(acf_solicitudes_ordenes_detalle, {
    as: 'acf_solicitudes_ordenes_detalles',
    foreignKey: 'id_solicitud_orden',
  });
  acf_traslados_detalle.belongsTo(acf_traslados, { as: 'id_traslado_acf_traslado', foreignKey: 'id_traslado' });
  acf_traslados.hasMany(acf_traslados_detalle, { as: 'acf_traslados_detalles', foreignKey: 'id_traslado' });
  acf_traslados_detalle.belongsTo(acf_traslados, { as: 'id_prestamo_acf_traslado', foreignKey: 'id_prestamo' });
  acf_traslados.hasMany(acf_traslados_detalle, { as: 'id_prestamo_acf_traslados_detalles', foreignKey: 'id_prestamo' });
  acf_equipos.belongsTo(acf_ubicaciones, { as: 'id_ubicacion_acf_ubicacione', foreignKey: 'id_ubicacion' });
  acf_ubicaciones.hasMany(acf_equipos, { as: 'acf_equipos', foreignKey: 'id_ubicacion' });
  acf_traslados.belongsTo(acf_ubicaciones, {
    as: 'id_ubicacion_origen_acf_ubicacione',
    foreignKey: 'id_ubicacion_origen',
  });
  acf_ubicaciones.hasMany(acf_traslados, { as: 'acf_traslados', foreignKey: 'id_ubicacion_origen' });
  acf_traslados.belongsTo(acf_ubicaciones, {
    as: 'id_ubicacion_destino_acf_ubicacione',
    foreignKey: 'id_ubicacion_destino',
  });
  acf_ubicaciones.hasMany(acf_traslados, {
    as: 'id_ubicacion_destino_acf_traslados',
    foreignKey: 'id_ubicacion_destino',
  });
  adm_empleados.belongsTo(adm_arl, { as: 'arl_adm_arl', foreignKey: 'arl' });
  adm_arl.hasMany(adm_empleados, { as: 'adm_empleados', foreignKey: 'arl' });
  adm_empleados.belongsTo(adm_bancos, { as: 'banco_adm_banco', foreignKey: 'banco' });
  adm_bancos.hasMany(adm_empleados, { as: 'adm_empleados', foreignKey: 'banco' });
  ctb_proveedores.belongsTo(adm_bancos, { as: 'banco_adm_banco', foreignKey: 'banco' });
  adm_bancos.hasMany(ctb_proveedores, { as: 'ctb_proveedores', foreignKey: 'banco' });
  ctb_proveedores_pagos.belongsTo(adm_bancos, { as: 'banco_adm_banco', foreignKey: 'banco' });
  adm_bancos.hasMany(ctb_proveedores_pagos, { as: 'ctb_proveedores_pagos', foreignKey: 'banco' });
  adm_cargos_plataformas.belongsTo(adm_cargos, { as: 'idcargo_adm_cargo', foreignKey: 'idcargo' });
  adm_cargos.hasMany(adm_cargos_plataformas, { as: 'adm_cargos_plataformas', foreignKey: 'idcargo' });
  adm_contratos_funciones.belongsTo(adm_cargos, { as: 'codcrg_adm_cargo', foreignKey: 'codcrg' });
  adm_cargos.hasMany(adm_contratos_funciones, { as: 'adm_contratos_funciones', foreignKey: 'codcrg' });
  adm_empleados.belongsTo(adm_cargos, { as: 'cargo_adm_cargo', foreignKey: 'cargo' });
  adm_cargos.hasMany(adm_empleados, { as: 'adm_empleados', foreignKey: 'cargo' });
  adm_funciones_cargos.belongsTo(adm_cargos, { as: 'idcargo_adm_cargo', foreignKey: 'idcargo' });
  adm_cargos.hasMany(adm_funciones_cargos, { as: 'adm_funciones_cargos', foreignKey: 'idcargo' });
  adm_empleados.belongsTo(adm_ciudades, { as: 'ciudad_nacimiento_adm_ciudade', foreignKey: 'ciudad_nacimiento' });
  adm_ciudades.hasMany(adm_empleados, { as: 'adm_empleados', foreignKey: 'ciudad_nacimiento' });
  ctb_proveedores.belongsTo(adm_ciudades, { as: 'ciudad_adm_ciudade', foreignKey: 'ciudad' });
  adm_ciudades.hasMany(ctb_proveedores, { as: 'ctb_proveedores', foreignKey: 'ciudad' });
  matricula_familiares.belongsTo(adm_ciudades, { as: 'ciudad_adm_ciudade', foreignKey: 'ciudad' });
  adm_ciudades.hasMany(matricula_familiares, { as: 'matricula_familiares', foreignKey: 'ciudad' });
  web_empresas.belongsTo(adm_ciudades, { as: 'id_ciudad_adm_ciudade', foreignKey: 'id_ciudad' });
  adm_ciudades.hasMany(web_empresas, { as: 'web_empresas', foreignKey: 'id_ciudad' });
  adm_empleados_contrato.belongsTo(adm_contratos_modelos, {
    as: 'mod_contrato_adm_contratos_modelo',
    foreignKey: 'mod_contrato',
  });
  adm_contratos_modelos.hasMany(adm_empleados_contrato, { as: 'adm_empleados_contratos', foreignKey: 'mod_contrato' });
  adm_empleados_contrato_anexos.belongsTo(adm_contratos_modelos, {
    as: 'mod_anexo_adm_contratos_modelo',
    foreignKey: 'mod_anexo',
  });
  adm_contratos_modelos.hasMany(adm_empleados_contrato_anexos, {
    as: 'adm_empleados_contrato_anexos',
    foreignKey: 'mod_anexo',
  });
  web_cursos_instructores.belongsTo(adm_contratos_modelos, {
    as: 'mod_contrato_adm_contratos_modelo',
    foreignKey: 'mod_contrato',
  });
  adm_contratos_modelos.hasMany(web_cursos_instructores, { as: 'web_cursos_instructores', foreignKey: 'mod_contrato' });
  adm_empleados_contrato.belongsTo(adm_contratos_tipos, { as: 'id_tipo_adm_contratos_tipo', foreignKey: 'id_tipo' });
  adm_contratos_tipos.hasMany(adm_empleados_contrato, { as: 'adm_empleados_contratos', foreignKey: 'id_tipo' });
  adm_ciudades.belongsTo(adm_departamentos, { as: 'id_departamento_adm_departamento', foreignKey: 'id_departamento' });
  adm_departamentos.hasMany(adm_ciudades, { as: 'adm_ciudades', foreignKey: 'id_departamento' });
  matricula_familiares.belongsTo(adm_departamentos, {
    as: 'departamento_adm_departamento',
    foreignKey: 'departamento',
  });
  adm_departamentos.hasMany(matricula_familiares, { as: 'matricula_familiares', foreignKey: 'departamento' });
  ctb_proveedores_respons.belongsTo(adm_dependencias, { as: 'coddep_adm_dependencia', foreignKey: 'coddep' });
  adm_dependencias.hasMany(ctb_proveedores_respons, { as: 'ctb_proveedores_respons', foreignKey: 'coddep' });
  adm_email_plantillas.belongsTo(adm_email_plantillas, {
    as: 'id_plantilla_resp_adm_email_plantilla',
    foreignKey: 'id_plantilla_resp',
  });
  adm_email_plantillas.hasMany(adm_email_plantillas, { as: 'adm_email_plantillas', foreignKey: 'id_plantilla_resp' });
  adm_email_plantillas_resp.belongsTo(adm_email_plantillas, {
    as: 'id_email_plantilla_adm_email_plantilla',
    foreignKey: 'id_email_plantilla',
  });
  adm_email_plantillas.hasMany(adm_email_plantillas_resp, {
    as: 'adm_email_plantillas_resps',
    foreignKey: 'id_email_plantilla',
  });
  acf_actas.belongsTo(adm_empleados, { as: 'id_empleado_acta_adm_empleado', foreignKey: 'id_empleado_acta' });
  adm_empleados.hasMany(acf_actas, { as: 'acf_acta', foreignKey: 'id_empleado_acta' });
  acf_actas.belongsTo(adm_empleados, { as: 'id_empleado_recibe_adm_empleado', foreignKey: 'id_empleado_recibe' });
  adm_empleados.hasMany(acf_actas, { as: 'id_empleado_recibe_acf_acta', foreignKey: 'id_empleado_recibe' });
  acf_areas_responsables.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(acf_areas_responsables, { as: 'acf_areas_responsables', foreignKey: 'id_empleado' });
  acf_bajas.belongsTo(adm_empleados, { as: 'id_empleado_genera_adm_empleado', foreignKey: 'id_empleado_genera' });
  adm_empleados.hasMany(acf_bajas, { as: 'acf_bajas', foreignKey: 'id_empleado_genera' });
  acf_bajas.belongsTo(adm_empleados, { as: 'id_empleado_autoriza_adm_empleado', foreignKey: 'id_empleado_autoriza' });
  adm_empleados.hasMany(acf_bajas, { as: 'id_empleado_autoriza_acf_bajas', foreignKey: 'id_empleado_autoriza' });
  acf_equipos.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(acf_equipos, { as: 'acf_equipos', foreignKey: 'id_empleado' });
  acf_herramientas.belongsTo(adm_empleados, { as: 'resp_mfa_adm_empleado', foreignKey: 'resp_mfa' });
  adm_empleados.hasMany(acf_herramientas, { as: 'acf_herramienta', foreignKey: 'resp_mfa' });
  acf_herramientas_responsables.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(acf_herramientas_responsables, {
    as: 'acf_herramientas_responsables',
    foreignKey: 'id_empleado',
  });
  acf_movimientos.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(acf_movimientos, { as: 'acf_movimientos', foreignKey: 'id_empleado' });
  acf_solicitudes.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(acf_solicitudes, { as: 'acf_solicitudes', foreignKey: 'id_empleado' });
  acf_solicitudes_ordenes.belongsTo(adm_empleados, {
    as: 'id_empleado_genera_adm_empleado',
    foreignKey: 'id_empleado_genera',
  });
  adm_empleados.hasMany(acf_solicitudes_ordenes, { as: 'acf_solicitudes_ordenes', foreignKey: 'id_empleado_genera' });
  acf_solicitudes_ordenes.belongsTo(adm_empleados, {
    as: 'id_empleado_ejecuta_adm_empleado',
    foreignKey: 'id_empleado_ejecuta',
  });
  adm_empleados.hasMany(acf_solicitudes_ordenes, {
    as: 'id_empleado_ejecuta_acf_solicitudes_ordenes',
    foreignKey: 'id_empleado_ejecuta',
  });
  acf_traslados.belongsTo(adm_empleados, { as: 'id_empleado_genera_adm_empleado', foreignKey: 'id_empleado_genera' });
  adm_empleados.hasMany(acf_traslados, { as: 'acf_traslados', foreignKey: 'id_empleado_genera' });
  acf_traslados.belongsTo(adm_empleados, { as: 'id_empleado_recibe_adm_empleado', foreignKey: 'id_empleado_recibe' });
  adm_empleados.hasMany(acf_traslados, { as: 'id_empleado_recibe_acf_traslados', foreignKey: 'id_empleado_recibe' });
  adm_empleados_contrato.belongsTo(adm_empleados, { as: 'codusr_adm_empleado', foreignKey: 'codusr' });
  adm_empleados.hasMany(adm_empleados_contrato, { as: 'adm_empleados_contratos', foreignKey: 'codusr' });
  adm_empleados_estudios.belongsTo(adm_empleados, { as: 'codemp_adm_empleado', foreignKey: 'codemp' });
  adm_empleados.hasMany(adm_empleados_estudios, { as: 'adm_empleados_estudios', foreignKey: 'codemp' });
  adm_empleados_plataformas.belongsTo(adm_empleados, { as: 'codemp_adm_empleado', foreignKey: 'codemp' });
  adm_empleados.hasMany(adm_empleados_plataformas, { as: 'adm_empleados_plataformas', foreignKey: 'codemp' });
  adm_grupos_integrantes.belongsTo(adm_empleados, { as: 'codemp_adm_empleado', foreignKey: 'codemp' });
  adm_empleados.hasMany(adm_grupos_integrantes, { as: 'adm_grupos_integrantes', foreignKey: 'codemp' });
  adm_insumos_inventarios.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(adm_insumos_inventarios, { as: 'adm_insumos_inventarios', foreignKey: 'id_empleado' });
  adm_insumos_lugares_responsable.belongsTo(adm_empleados, {
    as: 'id_empleado_adm_empleado',
    foreignKey: 'id_empleado',
  });
  adm_empleados.hasMany(adm_insumos_lugares_responsable, {
    as: 'adm_insumos_lugares_responsables',
    foreignKey: 'id_empleado',
  });
  adm_insumos_movimientos.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(adm_insumos_movimientos, { as: 'adm_insumos_movimientos', foreignKey: 'id_empleado' });
  adm_insumos_ordenes.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(adm_insumos_ordenes, { as: 'adm_insumos_ordenes', foreignKey: 'id_empleado' });
  crm_productos_responsables.belongsTo(adm_empleados, {
    as: 'id_responsable_adm_empleado',
    foreignKey: 'id_responsable',
  });
  adm_empleados.hasMany(crm_productos_responsables, { as: 'crm_productos_responsables', foreignKey: 'id_responsable' });
  crm_propuestas_responsables.belongsTo(adm_empleados, {
    as: 'id_responsable_adm_empleado',
    foreignKey: 'id_responsable',
  });
  adm_empleados.hasMany(crm_propuestas_responsables, {
    as: 'crm_propuestas_responsables',
    foreignKey: 'id_responsable',
  });
  ctb_caja_menor_ingresos.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(ctb_caja_menor_ingresos, { as: 'ctb_caja_menor_ingresos', foreignKey: 'id_empleado' });
  ctb_caja_menor_ingresos.belongsTo(adm_empleados, {
    as: 'id_empleado_autoriza_adm_empleado',
    foreignKey: 'id_empleado_autoriza',
  });
  adm_empleados.hasMany(ctb_caja_menor_ingresos, {
    as: 'id_empleado_autoriza_ctb_caja_menor_ingresos',
    foreignKey: 'id_empleado_autoriza',
  });
  ctb_caja_menor_responsables.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(ctb_caja_menor_responsables, { as: 'ctb_caja_menor_responsables', foreignKey: 'id_empleado' });
  ctb_compras_ordenes.belongsTo(adm_empleados, {
    as: 'id_empleado_genera_adm_empleado',
    foreignKey: 'id_empleado_genera',
  });
  adm_empleados.hasMany(ctb_compras_ordenes, { as: 'ctb_compras_ordenes', foreignKey: 'id_empleado_genera' });
  ctb_compras_ordenes.belongsTo(adm_empleados, {
    as: 'id_empleado_autoriza_adm_empleado',
    foreignKey: 'id_empleado_autoriza',
  });
  adm_empleados.hasMany(ctb_compras_ordenes, {
    as: 'id_empleado_autoriza_ctb_compras_ordenes',
    foreignKey: 'id_empleado_autoriza',
  });
  ctb_compras_ordenes_entrega.belongsTo(adm_empleados, {
    as: 'id_empleado_entrega_adm_empleado',
    foreignKey: 'id_empleado_entrega',
  });
  adm_empleados.hasMany(ctb_compras_ordenes_entrega, {
    as: 'ctb_compras_ordenes_entregas',
    foreignKey: 'id_empleado_entrega',
  });
  ctb_compras_ordenes_entrega.belongsTo(adm_empleados, {
    as: 'id_empleado_recibe_adm_empleado',
    foreignKey: 'id_empleado_recibe',
  });
  adm_empleados.hasMany(ctb_compras_ordenes_entrega, {
    as: 'id_empleado_recibe_ctb_compras_ordenes_entregas',
    foreignKey: 'id_empleado_recibe',
  });
  ctb_compras_ordenes_entrega.belongsTo(adm_empleados, {
    as: 'id_empleado_firma_adm_empleado',
    foreignKey: 'id_empleado_firma',
  });
  adm_empleados.hasMany(ctb_compras_ordenes_entrega, {
    as: 'id_empleado_firma_ctb_compras_ordenes_entregas',
    foreignKey: 'id_empleado_firma',
  });
  ctb_compras_solicitudes.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(ctb_compras_solicitudes, { as: 'ctb_compras_solicitudes', foreignKey: 'id_empleado' });
  ctb_novedad_cambios.belongsTo(adm_empleados, { as: 'addusr_adm_empleado', foreignKey: 'addusr' });
  adm_empleados.hasMany(ctb_novedad_cambios, { as: 'ctb_novedad_cambios', foreignKey: 'addusr' });
  ctb_novedad_control_creditos.belongsTo(adm_empleados, { as: 'usuario_adm_empleado', foreignKey: 'usuario' });
  adm_empleados.hasMany(ctb_novedad_control_creditos, { as: 'ctb_novedad_control_creditos', foreignKey: 'usuario' });
  ctb_novedad_user.belongsTo(adm_empleados, { as: 'codusr_adm_empleado', foreignKey: 'codusr' });
  adm_empleados.hasMany(ctb_novedad_user, { as: 'ctb_novedad_users', foreignKey: 'codusr' });
  ctb_novedades_nom.belongsTo(adm_empleados, { as: 'codusr_adm_empleado', foreignKey: 'codusr' });
  adm_empleados.hasMany(ctb_novedades_nom, { as: 'ctb_novedades_noms', foreignKey: 'codusr' });
  ctb_novedades_nom.belongsTo(adm_empleados, { as: 'addusr_adm_empleado', foreignKey: 'addusr' });
  adm_empleados.hasMany(ctb_novedades_nom, { as: 'addusr_ctb_novedades_noms', foreignKey: 'addusr' });
  ctb_proveedores_pagos.belongsTo(adm_empleados, { as: 'responsable_adm_empleado', foreignKey: 'responsable' });
  adm_empleados.hasMany(ctb_proveedores_pagos, { as: 'ctb_proveedores_pagos', foreignKey: 'responsable' });
  ctb_proveedores_respons.belongsTo(adm_empleados, { as: 'codemp_adm_empleado', foreignKey: 'codemp' });
  adm_empleados.hasMany(ctb_proveedores_respons, { as: 'ctb_proveedores_respons', foreignKey: 'codemp' });
  evl_autempleados.belongsTo(adm_empleados, { as: 'codevld_adm_empleado', foreignKey: 'codevld' });
  adm_empleados.hasMany(evl_autempleados, { as: 'evl_autempleados', foreignKey: 'codevld' });
  gnr_parametros_usuarios.belongsTo(adm_empleados, { as: 'codemp_adm_empleado', foreignKey: 'codemp' });
  adm_empleados.hasMany(gnr_parametros_usuarios, { as: 'gnr_parametros_usuarios', foreignKey: 'codemp' });
  pqrs.belongsTo(adm_empleados, { as: 'id_empleado_adm_empleado', foreignKey: 'id_empleado' });
  adm_empleados.hasMany(pqrs, { as: 'pqrs', foreignKey: 'id_empleado' });
  usuarios.belongsTo(adm_empleados, { as: 'codemp_adm_empleado', foreignKey: 'codemp' });
  adm_empleados.hasOne(usuarios, { as: 'usuario', foreignKey: 'codemp' });
  acf_actas.belongsTo(adm_empleados_contrato, {
    as: 'id_contrato_recibe_adm_empleados_contrato',
    foreignKey: 'id_contrato_recibe',
  });
  adm_empleados_contrato.hasMany(acf_actas, { as: 'acf_acta', foreignKey: 'id_contrato_recibe' });
  adm_contratos_funciones.belongsTo(adm_empleados_contrato, {
    as: 'codcontrato_adm_empleados_contrato',
    foreignKey: 'codcontrato',
  });
  adm_empleados_contrato.hasMany(adm_contratos_funciones, { as: 'adm_contratos_funciones', foreignKey: 'codcontrato' });
  adm_empleados_contrato_anexos.belongsTo(adm_empleados_contrato, {
    as: 'id_contrato_adm_empleados_contrato',
    foreignKey: 'id_contrato',
  });
  adm_empleados_contrato.hasMany(adm_empleados_contrato_anexos, {
    as: 'adm_empleados_contrato_anexos',
    foreignKey: 'id_contrato',
  });
  adm_empleados.belongsTo(adm_eps, { as: 'eps_adm_ep', foreignKey: 'eps' });
  adm_eps.hasMany(adm_empleados, { as: 'adm_empleados', foreignKey: 'eps' });
  adm_empleados.belongsTo(adm_fondo_pensiones, { as: 'fondo_adm_fondo_pensione', foreignKey: 'fondo' });
  adm_fondo_pensiones.hasMany(adm_empleados, { as: 'adm_empleados', foreignKey: 'fondo' });
  adm_contratos_funciones.belongsTo(adm_funciones, { as: 'idfuncion_adm_funcione', foreignKey: 'idfuncion' });
  adm_funciones.hasMany(adm_contratos_funciones, { as: 'adm_contratos_funciones', foreignKey: 'idfuncion' });
  adm_funciones_cargos.belongsTo(adm_funciones, { as: 'idfuncion_adm_funcione', foreignKey: 'idfuncion' });
  adm_funciones.hasMany(adm_funciones_cargos, { as: 'adm_funciones_cargos', foreignKey: 'idfuncion' });
  adm_grupos_integrantes.belongsTo(adm_grupos, { as: 'idgrupo_adm_grupo', foreignKey: 'idgrupo' });
  adm_grupos.hasMany(adm_grupos_integrantes, { as: 'adm_grupos_integrantes', foreignKey: 'idgrupo' });
  pevl_evaluacion_grupos.belongsTo(adm_grupos, { as: 'id_grupo_adm_grupo', foreignKey: 'id_grupo' });
  adm_grupos.hasMany(pevl_evaluacion_grupos, { as: 'pevl_evaluacion_grupos', foreignKey: 'id_grupo' });
  pevl_evaluacion_integrante.belongsTo(adm_grupos_integrantes, {
    as: 'id_integrante_adm_grupos_integrante',
    foreignKey: 'id_integrante',
  });
  adm_grupos_integrantes.hasMany(pevl_evaluacion_integrante, {
    as: 'pevl_evaluacion_integrantes',
    foreignKey: 'id_integrante',
  });
  adm_insumos_invetarios_detalle.belongsTo(adm_insumos_inventarios, {
    as: 'id_inventario_adm_insumos_inventario',
    foreignKey: 'id_inventario',
  });
  adm_insumos_inventarios.hasMany(adm_insumos_invetarios_detalle, {
    as: 'adm_insumos_invetarios_detalles',
    foreignKey: 'id_inventario',
  });
  adm_insumos_inventarios.belongsTo(adm_insumos_lugares, { as: 'id_lugar_adm_insumos_lugare', foreignKey: 'id_lugar' });
  adm_insumos_lugares.hasMany(adm_insumos_inventarios, { as: 'adm_insumos_inventarios', foreignKey: 'id_lugar' });
  adm_insumos_lugares_responsable.belongsTo(adm_insumos_lugares, {
    as: 'id_lugar_adm_insumos_lugare',
    foreignKey: 'id_lugar',
  });
  adm_insumos_lugares.hasMany(adm_insumos_lugares_responsable, {
    as: 'adm_insumos_lugares_responsables',
    foreignKey: 'id_lugar',
  });
  adm_insumos_movimientos.belongsTo(adm_insumos_lugares, {
    as: 'id_lugar_origen_adm_insumos_lugare',
    foreignKey: 'id_lugar_origen',
  });
  adm_insumos_lugares.hasMany(adm_insumos_movimientos, {
    as: 'adm_insumos_movimientos',
    foreignKey: 'id_lugar_origen',
  });
  adm_insumos_movimientos_detalle.belongsTo(adm_insumos_lugares, {
    as: 'id_lugar_destino_adm_insumos_lugare',
    foreignKey: 'id_lugar_destino',
  });
  adm_insumos_lugares.hasMany(adm_insumos_movimientos_detalle, {
    as: 'adm_insumos_movimientos_detalles',
    foreignKey: 'id_lugar_destino',
  });
  adm_insumos_ordenes.belongsTo(adm_insumos_lugares, { as: 'id_lugar_adm_insumos_lugare', foreignKey: 'id_lugar' });
  adm_insumos_lugares.hasMany(adm_insumos_ordenes, { as: 'adm_insumos_ordenes', foreignKey: 'id_lugar' });
  adm_insumos_productos_lugares.belongsTo(adm_insumos_lugares, {
    as: 'id_lugar_adm_insumos_lugare',
    foreignKey: 'id_lugar',
  });
  adm_insumos_lugares.hasMany(adm_insumos_productos_lugares, {
    as: 'adm_insumos_productos_lugares',
    foreignKey: 'id_lugar',
  });
  adm_insumos_movimientos_detalle.belongsTo(adm_insumos_movimientos, {
    as: 'id_movimiento_adm_insumos_movimiento',
    foreignKey: 'id_movimiento',
  });
  adm_insumos_movimientos.hasMany(adm_insumos_movimientos_detalle, {
    as: 'adm_insumos_movimientos_detalles',
    foreignKey: 'id_movimiento',
  });
  adm_insumos_ordenes_detalle.belongsTo(adm_insumos_ordenes, {
    as: 'id_orden_adm_insumos_ordene',
    foreignKey: 'id_orden',
  });
  adm_insumos_ordenes.hasMany(adm_insumos_ordenes_detalle, {
    as: 'adm_insumos_ordenes_detalles',
    foreignKey: 'id_orden',
  });
  adm_insumos_invetarios_detalle.belongsTo(adm_insumos_productos, {
    as: 'id_producto_adm_insumos_producto',
    foreignKey: 'id_producto',
  });
  adm_insumos_productos.hasMany(adm_insumos_invetarios_detalle, {
    as: 'adm_insumos_invetarios_detalles',
    foreignKey: 'id_producto',
  });
  adm_insumos_movimientos_detalle.belongsTo(adm_insumos_productos, {
    as: 'id_producto_adm_insumos_producto',
    foreignKey: 'id_producto',
  });
  adm_insumos_productos.hasMany(adm_insumos_movimientos_detalle, {
    as: 'adm_insumos_movimientos_detalles',
    foreignKey: 'id_producto',
  });
  adm_insumos_ordenes_detalle.belongsTo(adm_insumos_productos, {
    as: 'id_producto_adm_insumos_producto',
    foreignKey: 'id_producto',
  });
  adm_insumos_productos.hasMany(adm_insumos_ordenes_detalle, {
    as: 'adm_insumos_ordenes_detalles',
    foreignKey: 'id_producto',
  });
  adm_insumos_productos_lugares.belongsTo(adm_insumos_productos, {
    as: 'id_producto_adm_insumos_producto',
    foreignKey: 'id_producto',
  });
  adm_insumos_productos.hasMany(adm_insumos_productos_lugares, {
    as: 'adm_insumos_productos_lugares',
    foreignKey: 'id_producto',
  });
  adm_insumos_productos.belongsTo(adm_insumos_productos_categorias, {
    as: 'id_categoria_adm_insumos_productos_categoria',
    foreignKey: 'id_categoria',
  });
  adm_insumos_productos_categorias.hasMany(adm_insumos_productos, {
    as: 'adm_insumos_productos',
    foreignKey: 'id_categoria',
  });
  adm_ciudades.belongsTo(adm_paises, { as: 'paises_Codigo_adm_paise', foreignKey: 'paises_Codigo' });
  adm_paises.hasMany(adm_ciudades, { as: 'adm_ciudades', foreignKey: 'paises_Codigo' });
  adm_departamentos.belongsTo(adm_paises, { as: 'id_pais_adm_paise', foreignKey: 'id_pais' });
  adm_paises.hasMany(adm_departamentos, { as: 'adm_departamentos', foreignKey: 'id_pais' });
  adm_empleados.belongsTo(adm_paises, { as: 'pais_nacimiento_adm_paise', foreignKey: 'pais_nacimiento' });
  adm_paises.hasMany(adm_empleados, { as: 'adm_empleados', foreignKey: 'pais_nacimiento' });
  ctb_proveedores.belongsTo(adm_paises, { as: 'pais_adm_paise', foreignKey: 'pais' });
  adm_paises.hasMany(ctb_proveedores, { as: 'ctb_proveedores', foreignKey: 'pais' });
  matricula_familiares.belongsTo(adm_paises, { as: 'pais_adm_paise', foreignKey: 'pais' });
  adm_paises.hasMany(matricula_familiares, { as: 'matricula_familiares', foreignKey: 'pais' });
  web_empresas.belongsTo(adm_paises, { as: 'id_pais_adm_paise', foreignKey: 'id_pais' });
  adm_paises.hasMany(web_empresas, { as: 'web_empresas', foreignKey: 'id_pais' });
  web_instructores.belongsTo(adm_paises, { as: 'pais_adm_paise', foreignKey: 'pais' });
  adm_paises.hasMany(web_instructores, { as: 'web_instructores', foreignKey: 'pais' });
  adm_cargos_plataformas.belongsTo(adm_plataformas, { as: 'idPlataforma_adm_plataforma', foreignKey: 'idPlataforma' });
  adm_plataformas.hasMany(adm_cargos_plataformas, { as: 'adm_cargos_plataformas', foreignKey: 'idPlataforma' });
  acf_ubicaciones.belongsTo(adm_sedes, { as: 'id_sede_adm_sede', foreignKey: 'id_sede' });
  adm_sedes.hasMany(acf_ubicaciones, { as: 'acf_ubicaciones', foreignKey: 'id_sede' });
  adm_dependencias.belongsTo(adm_sedes, { as: 'depsed_adm_sede', foreignKey: 'depsed' });
  adm_sedes.hasMany(adm_dependencias, { as: 'adm_dependencia', foreignKey: 'depsed' });
  calendario.belongsTo(adm_sedes, { as: 'codsed_adm_sede', foreignKey: 'codsed' });
  adm_sedes.hasMany(calendario, { as: 'calendarios', foreignKey: 'codsed' });
  ctb_proveedores_pagos.belongsTo(adm_sedes, { as: 'codsed_adm_sede', foreignKey: 'codsed' });
  adm_sedes.hasMany(ctb_proveedores_pagos, { as: 'ctb_proveedores_pagos', foreignKey: 'codsed' });
  biz_filtros.belongsTo(biz_filtros, { as: 'depende_biz_filtro', foreignKey: 'depende' });
  biz_filtros.hasMany(biz_filtros, { as: 'biz_filtros', foreignKey: 'depende' });
  biz_filtros.belongsTo(biz_filtros_categorias, {
    as: 'id_filtro_categoria_biz_filtros_categoria',
    foreignKey: 'id_filtro_categoria',
  });
  biz_filtros_categorias.hasMany(biz_filtros, { as: 'biz_filtros', foreignKey: 'id_filtro_categoria' });
  biz_opciones.belongsTo(biz_opciones, { as: 'depende_biz_opcione', foreignKey: 'depende' });
  biz_opciones.hasMany(biz_opciones, { as: 'biz_opciones', foreignKey: 'depende' });
  biz_roles_opciones.belongsTo(biz_opciones, { as: 'id_opcion_biz_opcione', foreignKey: 'id_opcion' });
  biz_opciones.hasMany(biz_roles_opciones, { as: 'biz_roles_opciones', foreignKey: 'id_opcion' });
  biz_usuarios_opciones.belongsTo(biz_opciones, { as: 'id_opcion_biz_opcione', foreignKey: 'id_opcion' });
  biz_opciones.hasMany(biz_usuarios_opciones, { as: 'biz_usuarios_opciones', foreignKey: 'id_opcion' });
  biz_roles_opciones.belongsTo(biz_roles, { as: 'id_rol_biz_role', foreignKey: 'id_rol' });
  biz_roles.hasMany(biz_roles_opciones, { as: 'biz_roles_opciones', foreignKey: 'id_rol' });
  biz_usuarios.belongsTo(biz_roles, { as: 'rol_biz_role', foreignKey: 'rol' });
  biz_roles.hasMany(biz_usuarios, { as: 'biz_usuarios', foreignKey: 'rol' });
  biz_usuarios_areas.belongsTo(biz_usuarios, { as: 'id_biz_usuario_biz_usuario', foreignKey: 'id_biz_usuario' });
  biz_usuarios.hasMany(biz_usuarios_areas, { as: 'biz_usuarios_areas', foreignKey: 'id_biz_usuario' });
  biz_usuarios_opciones.belongsTo(biz_usuarios, { as: 'id_usuario_biz_usuario', foreignKey: 'id_usuario' });
  biz_usuarios.hasMany(biz_usuarios_opciones, { as: 'biz_usuarios_opciones', foreignKey: 'id_usuario' });
  web_curriculos_evaluaciones_resgeneral.belongsTo(biz_usuarios, {
    as: 'id_biz_usuario_biz_usuario',
    foreignKey: 'id_biz_usuario',
  });
  biz_usuarios.hasMany(web_curriculos_evaluaciones_resgeneral, {
    as: 'web_curriculos_evaluaciones_resgenerals',
    foreignKey: 'id_biz_usuario',
  });
  calendario.belongsTo(calendario_categorias, { as: 'id_categoria_calendario_categoria', foreignKey: 'id_categoria' });
  calendario_categorias.hasMany(calendario, { as: 'calendarios', foreignKey: 'id_categoria' });
  adm_grupos.belongsTo(config_anios, { as: 'id_anio_config_anio', foreignKey: 'id_anio' });
  config_anios.hasMany(adm_grupos, { as: 'adm_grupos', foreignKey: 'id_anio' });
  config_periodo.belongsTo(config_anios, { as: 'id_anio_config_anio', foreignKey: 'id_anio' });
  config_anios.hasMany(config_periodo, { as: 'config_periodos', foreignKey: 'id_anio' });
  matricula_familiares.belongsTo(config_ciudades, {
    as: 'ident_expedicion_config_ciudade',
    foreignKey: 'ident_expedicion',
  });
  config_ciudades.hasMany(matricula_familiares, { as: 'matricula_familiares', foreignKey: 'ident_expedicion' });
  matricula_familiares.belongsTo(config_ciudades, {
    as: 'lugar_nacimiento_config_ciudade',
    foreignKey: 'lugar_nacimiento',
  });
  config_ciudades.hasMany(matricula_familiares, {
    as: 'lugar_nacimiento_matricula_familiares',
    foreignKey: 'lugar_nacimiento',
  });
  gnr_parametros.belongsTo(config_periodo, { as: 'perevl_config_periodo', foreignKey: 'perevl' });
  config_periodo.hasMany(gnr_parametros, { as: 'gnr_parametros', foreignKey: 'perevl' });
  adm_empleados.belongsTo(config_tipos_ident, { as: 'tipide_config_tipos_ident', foreignKey: 'tipide' });
  config_tipos_ident.hasMany(adm_empleados, { as: 'adm_empleados', foreignKey: 'tipide' });
  matricula_familiares.belongsTo(config_tipos_ident, { as: 'ident_tipo_config_tipos_ident', foreignKey: 'ident_tipo' });
  config_tipos_ident.hasMany(matricula_familiares, { as: 'matricula_familiares', foreignKey: 'ident_tipo' });
  crm_productos_responsables.belongsTo(crm_productos, { as: 'id_producto_crm_producto', foreignKey: 'id_producto' });
  crm_productos.hasMany(crm_productos_responsables, { as: 'crm_productos_responsables', foreignKey: 'id_producto' });
  crm_suscripciones_productos.belongsTo(crm_productos, { as: 'id_producto_crm_producto', foreignKey: 'id_producto' });
  crm_productos.hasMany(crm_suscripciones_productos, { as: 'crm_suscripciones_productos', foreignKey: 'id_producto' });
  ctb_caja_menor_egresos.belongsTo(ctb_caja_menor, { as: 'id_caja_menor_ctb_caja_menor', foreignKey: 'id_caja_menor' });
  ctb_caja_menor.hasMany(ctb_caja_menor_egresos, { as: 'ctb_caja_menor_egresos', foreignKey: 'id_caja_menor' });
  ctb_caja_menor_ingresos.belongsTo(ctb_caja_menor, {
    as: 'id_caja_menor_ctb_caja_menor',
    foreignKey: 'id_caja_menor',
  });
  ctb_caja_menor.hasMany(ctb_caja_menor_ingresos, { as: 'ctb_caja_menor_ingresos', foreignKey: 'id_caja_menor' });
  ctb_caja_menor_responsables.belongsTo(ctb_caja_menor, {
    as: 'id_caja_menor_ctb_caja_menor',
    foreignKey: 'id_caja_menor',
  });
  ctb_caja_menor.hasMany(ctb_caja_menor_responsables, {
    as: 'ctb_caja_menor_responsables',
    foreignKey: 'id_caja_menor',
  });
  ctb_compras_ordenes_entrega.belongsTo(ctb_compras_ordenes, {
    as: 'id_orden_compra_ctb_compras_ordene',
    foreignKey: 'id_orden_compra',
  });
  ctb_compras_ordenes.hasMany(ctb_compras_ordenes_entrega, {
    as: 'ctb_compras_ordenes_entregas',
    foreignKey: 'id_orden_compra',
  });
  ctb_compras_solicitudes_detalle.belongsTo(ctb_compras_ordenes, {
    as: 'id_orden_compra_ctb_compras_ordene',
    foreignKey: 'id_orden_compra',
  });
  ctb_compras_ordenes.hasMany(ctb_compras_solicitudes_detalle, {
    as: 'ctb_compras_solicitudes_detalles',
    foreignKey: 'id_orden_compra',
  });
  ctb_compras_ordenes_entrega_detalle.belongsTo(ctb_compras_ordenes_entrega, {
    as: 'id_orden_entrega_ctb_compras_ordenes_entrega',
    foreignKey: 'id_orden_entrega',
  });
  ctb_compras_ordenes_entrega.hasMany(ctb_compras_ordenes_entrega_detalle, {
    as: 'ctb_compras_ordenes_entrega_detalles',
    foreignKey: 'id_orden_entrega',
  });
  ctb_compras_ordenes.belongsTo(ctb_compras_solicitudes, {
    as: 'id_solicitud_ctb_compras_solicitude',
    foreignKey: 'id_solicitud',
  });
  ctb_compras_solicitudes.hasMany(ctb_compras_ordenes, { as: 'ctb_compras_ordenes', foreignKey: 'id_solicitud' });
  ctb_compras_solicitudes_detalle.belongsTo(ctb_compras_solicitudes, {
    as: 'id_solicitud_ctb_compras_solicitude',
    foreignKey: 'id_solicitud',
  });
  ctb_compras_solicitudes.hasMany(ctb_compras_solicitudes_detalle, {
    as: 'ctb_compras_solicitudes_detalles',
    foreignKey: 'id_solicitud',
  });
  ctb_compras_ordenes_entrega_detalle.belongsTo(ctb_compras_solicitudes_detalle, {
    as: 'id_solicitud_item_ctb_compras_solicitudes_detalle',
    foreignKey: 'id_solicitud_item',
  });
  ctb_compras_solicitudes_detalle.hasMany(ctb_compras_ordenes_entrega_detalle, {
    as: 'ctb_compras_ordenes_entrega_detalles',
    foreignKey: 'id_solicitud_item',
  });
  ctb_doc_electronicos_productos.belongsTo(ctb_doc_electronicos, {
    as: 'id_doc_electronico_ctb_doc_electronico',
    foreignKey: 'id_doc_electronico',
  });
  ctb_doc_electronicos.hasMany(ctb_doc_electronicos_productos, {
    as: 'ctb_doc_electronicos_productos',
    foreignKey: 'id_doc_electronico',
  });
  ctb_doc_electronicos_productos_componentes.belongsTo(ctb_doc_electronicos_productos, {
    as: 'id_doc_electronico_producto_ctb_doc_electronicos_producto',
    foreignKey: 'id_doc_electronico_producto',
  });
  ctb_doc_electronicos_productos.hasMany(ctb_doc_electronicos_productos_componentes, {
    as: 'ctb_doc_electronicos_productos_componentes',
    foreignKey: 'id_doc_electronico_producto',
  });
  ctb_doc_electronicos_productos_rutas_aprendizaje.belongsTo(ctb_doc_electronicos_productos, {
    as: 'id_doc_electronico_producto_ctb_doc_electronicos_producto',
    foreignKey: 'id_doc_electronico_producto',
  });
  ctb_doc_electronicos_productos.hasMany(ctb_doc_electronicos_productos_rutas_aprendizaje, {
    as: 'ctb_doc_electronicos_productos_rutas_aprendizajes',
    foreignKey: 'id_doc_electronico_producto',
  });
  web_propuestas_planes_pago_cuotas.belongsTo(ctb_medios_pago, {
    as: 'id_medio_pago_ctb_medios_pago',
    foreignKey: 'id_medio_pago',
  });
  ctb_medios_pago.hasMany(web_propuestas_planes_pago_cuotas, {
    as: 'web_propuestas_planes_pago_cuota',
    foreignKey: 'id_medio_pago',
  });
  ctb_novedad_user.belongsTo(ctb_novedad_tipos, { as: 'codnov_ctb_novedad_tipo', foreignKey: 'codnov' });
  ctb_novedad_tipos.hasMany(ctb_novedad_user, { as: 'ctb_novedad_users', foreignKey: 'codnov' });
  ctb_novedades_nom.belongsTo(ctb_novedad_tipos, { as: 'concepto_ctb_novedad_tipo', foreignKey: 'concepto' });
  ctb_novedad_tipos.hasMany(ctb_novedades_nom, { as: 'ctb_novedades_noms', foreignKey: 'concepto' });
  ctb_novedad_cambios.belongsTo(ctb_novedades_nom, { as: 'codnovd_ctb_novedades_nom', foreignKey: 'codnovd' });
  ctb_novedades_nom.hasMany(ctb_novedad_cambios, { as: 'ctb_novedad_cambios', foreignKey: 'codnovd' });
  web_propuestas_planes_pago_cuotas.belongsTo(ctb_pagos_cuentas, {
    as: 'id_cuenta_ctb_pagos_cuenta',
    foreignKey: 'id_cuenta',
  });
  ctb_pagos_cuentas.hasMany(web_propuestas_planes_pago_cuotas, {
    as: 'web_propuestas_planes_pago_cuota',
    foreignKey: 'id_cuenta',
  });
  web_propuestas_planes_pago_cuotas.belongsTo(ctb_pagos_lugar, {
    as: 'id_lugar_ctb_pagos_lugar',
    foreignKey: 'id_lugar',
  });
  ctb_pagos_lugar.hasMany(web_propuestas_planes_pago_cuotas, {
    as: 'web_propuestas_planes_pago_cuota',
    foreignKey: 'id_lugar',
  });
  web_propuestas_planes_pago_cuotas.belongsTo(ctb_pagos_tarjetas, {
    as: 'id_tarjeta_ctb_pagos_tarjeta',
    foreignKey: 'id_tarjeta',
  });
  ctb_pagos_tarjetas.hasMany(web_propuestas_planes_pago_cuotas, {
    as: 'web_propuestas_planes_pago_cuota',
    foreignKey: 'id_tarjeta',
  });
  ctb_doc_electronicos_productos.belongsTo(ctb_productos, {
    as: 'id_producto_ctb_producto',
    foreignKey: 'id_producto',
  });
  ctb_productos.hasMany(ctb_doc_electronicos_productos, {
    as: 'ctb_doc_electronicos_productos',
    foreignKey: 'id_producto',
  });
  web_componentes_categorias.belongsTo(ctb_productos, { as: 'id_producto_ctb_producto', foreignKey: 'id_producto' });
  ctb_productos.hasMany(web_componentes_categorias, { as: 'web_componentes_categoria', foreignKey: 'id_producto' });
  web_curriculos_categorias.belongsTo(ctb_productos, { as: 'id_producto_ctb_producto', foreignKey: 'id_producto' });
  ctb_productos.hasMany(web_curriculos_categorias, { as: 'web_curriculos_categoria', foreignKey: 'id_producto' });
  web_eventos_categorias.belongsTo(ctb_productos, { as: 'id_producto_ctb_producto', foreignKey: 'id_producto' });
  ctb_productos.hasMany(web_eventos_categorias, { as: 'web_eventos_categoria', foreignKey: 'id_producto' });
  web_notificaciones_categorias.belongsTo(ctb_productos, { as: 'id_producto_ctb_producto', foreignKey: 'id_producto' });
  ctb_productos.hasMany(web_notificaciones_categorias, {
    as: 'web_notificaciones_categoria',
    foreignKey: 'id_producto',
  });
  web_programas_formacion_categoria.belongsTo(ctb_productos, {
    as: 'id_porducto_ctb_producto',
    foreignKey: 'id_porducto',
  });
  ctb_productos.hasMany(web_programas_formacion_categoria, {
    as: 'web_programas_formacion_categoria',
    foreignKey: 'id_porducto',
  });
  web_rutas_aprendizaje_categorias.belongsTo(ctb_productos, {
    as: 'id_producto_ctb_producto',
    foreignKey: 'id_producto',
  });
  ctb_productos.hasMany(web_rutas_aprendizaje_categorias, {
    as: 'web_rutas_aprendizaje_categoria',
    foreignKey: 'id_producto',
  });
  acf_solicitudes_ordenes.belongsTo(ctb_proveedores, { as: 'id_proveedor_ctb_proveedore', foreignKey: 'id_proveedor' });
  ctb_proveedores.hasMany(acf_solicitudes_ordenes, { as: 'acf_solicitudes_ordenes', foreignKey: 'id_proveedor' });
  adm_insumos_ordenes.belongsTo(ctb_proveedores, { as: 'id_proveedor_ctb_proveedore', foreignKey: 'id_proveedor' });
  ctb_proveedores.hasMany(adm_insumos_ordenes, { as: 'adm_insumos_ordenes', foreignKey: 'id_proveedor' });
  ctb_compras_ordenes.belongsTo(ctb_proveedores, { as: 'id_proveedor_ctb_proveedore', foreignKey: 'id_proveedor' });
  ctb_proveedores.hasMany(ctb_compras_ordenes, { as: 'ctb_compras_ordenes', foreignKey: 'id_proveedor' });
  ctb_proveedores_pagos.belongsTo(ctb_proveedores, { as: 'proveedor_ctb_proveedore', foreignKey: 'proveedor' });
  ctb_proveedores.hasMany(ctb_proveedores_pagos, { as: 'ctb_proveedores_pagos', foreignKey: 'proveedor' });
  ctb_proveedores_detalles.belongsTo(ctb_proveedores_pagos, {
    as: 'id_pago_ctb_proveedores_pago',
    foreignKey: 'id_pago',
  });
  ctb_proveedores_pagos.hasMany(ctb_proveedores_detalles, { as: 'ctb_proveedores_detalles', foreignKey: 'id_pago' });
  ctb_proveedores_recordatorio.belongsTo(ctb_proveedores_pagos, {
    as: 'idPago_ctb_proveedores_pago',
    foreignKey: 'idPago',
  });
  ctb_proveedores_pagos.hasMany(ctb_proveedores_recordatorio, {
    as: 'ctb_proveedores_recordatorios',
    foreignKey: 'idPago',
  });
  ctb_proveedores.belongsTo(ctb_proveedores_tipos_ident, {
    as: 'tipo_documento_ctb_proveedores_tipos_ident',
    foreignKey: 'tipo_documento',
  });
  ctb_proveedores_tipos_ident.hasMany(ctb_proveedores, { as: 'ctb_proveedores', foreignKey: 'tipo_documento' });
  adm_dependencias.belongsTo(departamentos, { as: 'id_departamento_departamento', foreignKey: 'id_departamento' });
  departamentos.hasMany(adm_dependencias, { as: 'adm_dependencia', foreignKey: 'id_departamento' });
  calendario.belongsTo(departamentos, { as: 'id_departamento_departamento', foreignKey: 'id_departamento' });
  departamentos.hasMany(calendario, { as: 'calendarios', foreignKey: 'id_departamento' });
  calendario_categorias.belongsTo(departamentos, { as: 'id_departamento_departamento', foreignKey: 'id_departamento' });
  departamentos.hasMany(calendario_categorias, { as: 'calendario_categoria', foreignKey: 'id_departamento' });
  ctb_compras_solicitudes.belongsTo(departamentos, {
    as: 'id_departamento_departamento',
    foreignKey: 'id_departamento',
  });
  departamentos.hasMany(ctb_compras_solicitudes, { as: 'ctb_compras_solicitudes', foreignKey: 'id_departamento' });
  departamentos_opciones.belongsTo(departamentos, {
    as: 'id_departamento_departamento',
    foreignKey: 'id_departamento',
  });
  departamentos.hasMany(departamentos_opciones, { as: 'departamentos_opciones', foreignKey: 'id_departamento' });
  pqrs.belongsTo(departamentos, { as: 'departamento_departamento', foreignKey: 'departamento' });
  departamentos.hasMany(pqrs, { as: 'pqrs', foreignKey: 'departamento' });
  usuarios_departamentos.belongsTo(departamentos, {
    as: 'id_departamento_departamento',
    foreignKey: 'id_departamento',
  });
  departamentos.hasMany(usuarios_departamentos, { as: 'usuarios_departamentos', foreignKey: 'id_departamento' });
  evl_autempleados.belongsTo(gnr_parametros, { as: 'codevl_gnr_parametro', foreignKey: 'codevl' });
  gnr_parametros.hasMany(evl_autempleados, { as: 'evl_autempleados', foreignKey: 'codevl' });
  pevl_evaluacion_programacion_grupo.belongsTo(gnr_parametros, { as: 'codpar_gnr_parametro', foreignKey: 'codpar' });
  gnr_parametros.hasMany(pevl_evaluacion_programacion_grupo, {
    as: 'pevl_evaluacion_programacion_grupos',
    foreignKey: 'codpar',
  });
  gnr_parametros.belongsTo(gnr_parametros_perfiles, { as: 'perfil_gnr_parametros_perfile', foreignKey: 'perfil' });
  gnr_parametros_perfiles.hasMany(gnr_parametros, { as: 'gnr_parametros', foreignKey: 'perfil' });
  gnr_parametros_usuarios.belongsTo(gnr_parametros_perfiles, {
    as: 'perfil_gnr_parametros_perfile',
    foreignKey: 'perfil',
  });
  gnr_parametros_perfiles.hasMany(gnr_parametros_usuarios, { as: 'gnr_parametros_usuarios', foreignKey: 'perfil' });
  notificaciones_disparadores.belongsTo(notificaciones, {
    as: 'id_notificacion_notificacione',
    foreignKey: 'id_notificacion',
  });
  notificaciones.hasMany(notificaciones_disparadores, {
    as: 'notificaciones_disparadores',
    foreignKey: 'id_notificacion',
  });
  notificaciones_enviadas.belongsTo(notificaciones, {
    as: 'id_notificacion_notificacione',
    foreignKey: 'id_notificacion',
  });
  notificaciones.hasMany(notificaciones_enviadas, { as: 'notificaciones_enviadas', foreignKey: 'id_notificacion' });
  notificaciones_users.belongsTo(notificaciones, {
    as: 'id_notificacion_notificacione',
    foreignKey: 'id_notificacion',
  });
  notificaciones.hasMany(notificaciones_users, { as: 'notificaciones_users', foreignKey: 'id_notificacion' });
  notificaciones_enviadas.belongsTo(notificaciones_disparadores, {
    as: 'id_disparador_notificaciones_disparadore',
    foreignKey: 'id_disparador',
  });
  notificaciones_disparadores.hasMany(notificaciones_enviadas, {
    as: 'notificaciones_enviadas',
    foreignKey: 'id_disparador',
  });
  departamentos_opciones.belongsTo(opciones, { as: 'id_opcion_opcione', foreignKey: 'id_opcion' });
  opciones.hasMany(departamentos_opciones, { as: 'departamentos_opciones', foreignKey: 'id_opcion' });
  opciones.belongsTo(opciones, { as: 'depende_opcione', foreignKey: 'depende' });
  opciones.hasMany(opciones, { as: 'opciones', foreignKey: 'depende' });
  permisos_api_opciones.belongsTo(opciones, { as: 'id_opcion_opcione', foreignKey: 'id_opcion' });
  opciones.hasMany(permisos_api_opciones, { as: 'permisos_api_opciones', foreignKey: 'id_opcion' });
  usuarios_opciones.belongsTo(opciones, { as: 'id_opcion_opcione', foreignKey: 'id_opcion' });
  opciones.hasMany(usuarios_opciones, { as: 'usuarios_opciones', foreignKey: 'id_opcion' });
  usuarios_perfil_opciones.belongsTo(opciones, { as: 'id_opcion_opcione', foreignKey: 'id_opcion' });
  opciones.hasMany(usuarios_perfil_opciones, { as: 'usuarios_perfil_opciones', foreignKey: 'id_opcion' });
  usuarios_permisos_opciones.belongsTo(opciones, { as: 'id_opcion_opcione', foreignKey: 'id_opcion' });
  opciones.hasMany(usuarios_permisos_opciones, { as: 'usuarios_permisos_opciones', foreignKey: 'id_opcion' });
  evl_autempleados.belongsTo(pelv_indicadores, { as: 'codpreg_pelv_indicadore', foreignKey: 'codpreg' });
  pelv_indicadores.hasMany(evl_autempleados, { as: 'evl_autempleados', foreignKey: 'codpreg' });
  pevl_evaluacion_indicador.belongsTo(pelv_indicadores, {
    as: 'id_indicador_pelv_indicadore',
    foreignKey: 'id_indicador',
  });
  pelv_indicadores.hasMany(pevl_evaluacion_indicador, { as: 'pevl_evaluacion_indicadors', foreignKey: 'id_indicador' });
  pevl_evaluacion_integrante.belongsTo(pelv_indicadores, {
    as: 'id_indicador_pelv_indicadore',
    foreignKey: 'id_indicador',
  });
  pelv_indicadores.hasMany(pevl_evaluacion_integrante, {
    as: 'pevl_evaluacion_integrantes',
    foreignKey: 'id_indicador',
  });
  permisos_api_opciones_usuarios.belongsTo(permisos_api_opciones, {
    as: 'id_permiso_permisos_api_opcione',
    foreignKey: 'id_permiso',
  });
  permisos_api_opciones.hasMany(permisos_api_opciones_usuarios, {
    as: 'permisos_api_opciones_usuarios',
    foreignKey: 'id_permiso',
  });
  pelv_indicadores.belongsTo(pevl_criterios, { as: 'id_criterio_pevl_criterio', foreignKey: 'id_criterio' });
  pevl_criterios.hasMany(pelv_indicadores, { as: 'pelv_indicadores', foreignKey: 'id_criterio' });
  pevl_evaluacion_criterio.belongsTo(pevl_criterios, { as: 'id_criterio_pevl_criterio', foreignKey: 'id_criterio' });
  pevl_criterios.hasMany(pevl_evaluacion_criterio, { as: 'pevl_evaluacion_criterios', foreignKey: 'id_criterio' });
  pevl_evaluacion_criterio.belongsTo(pevl_evaluacion, {
    as: 'id_evaluacion_pevl_evaluacion',
    foreignKey: 'id_evaluacion',
  });
  pevl_evaluacion.hasMany(pevl_evaluacion_criterio, { as: 'pevl_evaluacion_criterios', foreignKey: 'id_evaluacion' });
  pevl_evaluacion_grupos.belongsTo(pevl_evaluacion, {
    as: 'id_evaluacion_pevl_evaluacion',
    foreignKey: 'id_evaluacion',
  });
  pevl_evaluacion.hasMany(pevl_evaluacion_grupos, { as: 'pevl_evaluacion_grupos', foreignKey: 'id_evaluacion' });
  pevl_evaluacion_indicador.belongsTo(pevl_evaluacion, {
    as: 'id_evaluacion_pevl_evaluacion',
    foreignKey: 'id_evaluacion',
  });
  pevl_evaluacion.hasMany(pevl_evaluacion_indicador, { as: 'pevl_evaluacion_indicadors', foreignKey: 'id_evaluacion' });
  evl_autempleados.belongsTo(pevl_evaluacion_grupos, {
    as: 'codplanilla_pevl_evaluacion_grupo',
    foreignKey: 'codplanilla',
  });
  pevl_evaluacion_grupos.hasMany(evl_autempleados, { as: 'evl_autempleados', foreignKey: 'codplanilla' });
  pevl_evaluacion_integrante.belongsTo(pevl_evaluacion_grupos, {
    as: 'id_evaluacion_pevl_evaluacion_grupo',
    foreignKey: 'id_evaluacion',
  });
  pevl_evaluacion_grupos.hasMany(pevl_evaluacion_integrante, {
    as: 'pevl_evaluacion_integrantes',
    foreignKey: 'id_evaluacion',
  });
  pevl_evaluacion_programacion_grupo.belongsTo(pevl_evaluacion_grupos, {
    as: 'id_evaluacion_grupo_pevl_evaluacion_grupo',
    foreignKey: 'id_evaluacion_grupo',
  });
  pevl_evaluacion_grupos.hasMany(pevl_evaluacion_programacion_grupo, {
    as: 'pevl_evaluacion_programacion_grupos',
    foreignKey: 'id_evaluacion_grupo',
  });
  pevl_evaluacion_programacion_grupo.belongsTo(pevl_evaluacion_programacion, {
    as: 'id_programacion_pevl_evaluacion_programacion',
    foreignKey: 'id_programacion',
  });
  pevl_evaluacion_programacion.hasMany(pevl_evaluacion_programacion_grupo, {
    as: 'pevl_evaluacion_programacion_grupos',
    foreignKey: 'id_programacion',
  });
  pevl_evaluacion_integrante.belongsTo(pevl_evaluacion_programacion_grupo, {
    as: 'id_programacion_grupo_pevl_evaluacion_programacion_grupo',
    foreignKey: 'id_programacion_grupo',
  });
  pevl_evaluacion_programacion_grupo.hasMany(pevl_evaluacion_integrante, {
    as: 'pevl_evaluacion_integrantes',
    foreignKey: 'id_programacion_grupo',
  });
  pqrs_respuesta.belongsTo(pqrs, { as: 'pqr', foreignKey: 'pqrs_id' });
  pqrs.hasMany(pqrs_respuesta, { as: 'pqrs_respuesta', foreignKey: 'pqrs_id' });
  pqrs.belongsTo(pqrs_tipo_perfil, { as: 'tipo_perfil_pqrs_tipo_perfil', foreignKey: 'tipo_perfil' });
  pqrs_tipo_perfil.hasMany(pqrs, { as: 'pqrs', foreignKey: 'tipo_perfil' });
  pqrs.belongsTo(pqrs_tipo_solicitud, { as: 'tipo_solicitud_pqrs_tipo_solicitud', foreignKey: 'tipo_solicitud' });
  pqrs_tipo_solicitud.hasMany(pqrs, { as: 'pqrs', foreignKey: 'tipo_solicitud' });
  test_actividades_configuracion.belongsTo(test_actividades, {
    as: 'id_actividad_test_actividade',
    foreignKey: 'id_actividad',
  });
  test_actividades.hasMany(test_actividades_configuracion, {
    as: 'test_actividades_configuracions',
    foreignKey: 'id_actividad',
  });
  test_actividades_progreso_usuarios.belongsTo(test_actividades, {
    as: 'id_actividad_test_actividade',
    foreignKey: 'id_actividad',
  });
  test_actividades.hasMany(test_actividades_progreso_usuarios, {
    as: 'test_actividades_progreso_usuarios',
    foreignKey: 'id_actividad',
  });
  test_actividades_recursos.belongsTo(test_actividades, {
    as: 'id_actividad_test_actividade',
    foreignKey: 'id_actividad',
  });
  test_actividades.hasOne(test_actividades_recursos, { as: 'test_actividades_recurso', foreignKey: 'id_actividad' });
  test_preguntas_categorias.belongsTo(test_categorias, { as: 'id_test_categoria', foreignKey: 'id' });
  test_categorias.hasOne(test_preguntas_categorias, { as: 'test_preguntas_categorium', foreignKey: 'id' });
  test_actividades_configuracion.belongsTo(test_cerebros, { as: 'id_cerebro_test_cerebro', foreignKey: 'id_cerebro' });
  test_cerebros.hasMany(test_actividades_configuracion, {
    as: 'test_actividades_configuracions',
    foreignKey: 'id_cerebro',
  });
  test_recomendaciones_detalle.belongsTo(test_cerebros, { as: 'id_cerebro_test_cerebro', foreignKey: 'id_cerebro' });
  test_cerebros.hasMany(test_recomendaciones_detalle, {
    as: 'test_recomendaciones_detalles',
    foreignKey: 'id_cerebro',
  });
  test_resgeneral.belongsTo(test_cerebros, { as: 'dominante_test_cerebro', foreignKey: 'dominante' });
  test_cerebros.hasMany(test_resgeneral, { as: 'test_resgenerals', foreignKey: 'dominante' });
  test_resgeneral.belongsTo(test_cerebros, { as: 'subdominante_test_cerebro', foreignKey: 'subdominante' });
  test_cerebros.hasMany(test_resgeneral, { as: 'subdominante_test_resgenerals', foreignKey: 'subdominante' });
  test_session_reportes_cerebros.belongsTo(test_cerebros, { as: 'id_cerebro_test_cerebro', foreignKey: 'id_cerebro' });
  test_cerebros.hasMany(test_session_reportes_cerebros, {
    as: 'test_session_reportes_cerebros',
    foreignKey: 'id_cerebro',
  });
  test_session_reportes_cerebros.belongsTo(test_cerebros, {
    as: 'id_cerebro_subdominante_test_cerebro',
    foreignKey: 'id_cerebro_subdominante',
  });
  test_cerebros.hasMany(test_session_reportes_cerebros, {
    as: 'id_cerebro_subdominante_test_session_reportes_cerebros',
    foreignKey: 'id_cerebro_subdominante',
  });
  test_actividades_recursos.belongsTo(test_general, { as: 'id_test_test_general', foreignKey: 'id_test' });
  test_general.hasMany(test_actividades_recursos, { as: 'test_actividades_recursos', foreignKey: 'id_test' });
  test_general_preguntas.belongsTo(test_general, { as: 'id_test_general_test_general', foreignKey: 'id_test_general' });
  test_general.hasMany(test_general_preguntas, { as: 'test_general_pregunta', foreignKey: 'id_test_general' });
  test_general_roles.belongsTo(test_general, { as: 'id_test_test_general', foreignKey: 'id_test' });
  test_general.hasMany(test_general_roles, { as: 'test_general_roles', foreignKey: 'id_test' });
  test_resgeneral.belongsTo(test_general, { as: 'id_test_test_general', foreignKey: 'id_test' });
  test_general.hasMany(test_resgeneral, { as: 'test_resgenerals', foreignKey: 'id_test' });
  web_curriculos_evaluaciones.belongsTo(test_general, { as: 'id_test_test_general', foreignKey: 'id_test' });
  test_general.hasMany(web_curriculos_evaluaciones, { as: 'web_curriculos_evaluaciones', foreignKey: 'id_test' });
  web_cursos_quiz.belongsTo(test_general, { as: 'id_test_general_test_general', foreignKey: 'id_test_general' });
  test_general.hasMany(web_cursos_quiz, { as: 'web_cursos_quizzes', foreignKey: 'id_test_general' });
  test_actividades_configuracion.belongsTo(test_habilidades, {
    as: 'id_habilidad_test_habilidade',
    foreignKey: 'id_habilidad',
  });
  test_habilidades.hasMany(test_actividades_configuracion, {
    as: 'test_actividades_configuracions',
    foreignKey: 'id_habilidad',
  });
  test_preguntas_opciones.belongsTo(test_opciones, { as: 'id_opcion_test_opcione', foreignKey: 'id_opcion' });
  test_opciones.hasMany(test_preguntas_opciones, { as: 'test_preguntas_opciones', foreignKey: 'id_opcion' });
  test_resdetalle.belongsTo(test_opciones, { as: 'id_opcion_test_opcione', foreignKey: 'id_opcion' });
  test_opciones.hasMany(test_resdetalle, { as: 'test_resdetalles', foreignKey: 'id_opcion' });
  web_curriculos_evaluaciones_resdetalle.belongsTo(test_opciones, {
    as: 'id_opcion_test_opcione',
    foreignKey: 'id_opcion',
  });
  test_opciones.hasMany(web_curriculos_evaluaciones_resdetalle, {
    as: 'web_curriculos_evaluaciones_resdetalles',
    foreignKey: 'id_opcion',
  });
  web_cursos_modulos_lecciones_respreguntas.belongsTo(test_opciones, {
    as: 'id_opcion_test_opcione',
    foreignKey: 'id_opcion',
  });
  test_opciones.hasMany(web_cursos_modulos_lecciones_respreguntas, {
    as: 'web_cursos_modulos_lecciones_respregunta',
    foreignKey: 'id_opcion',
  });
  test_general_preguntas.belongsTo(test_preguntas, { as: 'id_pregunta_test_pregunta', foreignKey: 'id_pregunta' });
  test_preguntas.hasMany(test_general_preguntas, { as: 'test_general_pregunta', foreignKey: 'id_pregunta' });
  test_preguntas_categorias.belongsTo(test_preguntas, { as: 'id_pregunta_test_pregunta', foreignKey: 'id_pregunta' });
  test_preguntas.hasMany(test_preguntas_categorias, { as: 'test_preguntas_categoria', foreignKey: 'id_pregunta' });
  test_preguntas_opciones.belongsTo(test_preguntas, { as: 'id_pregunta_test_pregunta', foreignKey: 'id_pregunta' });
  test_preguntas.hasMany(test_preguntas_opciones, { as: 'test_preguntas_opciones', foreignKey: 'id_pregunta' });
  test_resdetalle.belongsTo(test_preguntas, { as: 'codpre_test_pregunta', foreignKey: 'codpre' });
  test_preguntas.hasMany(test_resdetalle, { as: 'test_resdetalles', foreignKey: 'codpre' });
  web_curriculos_evaluaciones_resdetalle.belongsTo(test_preguntas, {
    as: 'id_pregunta_test_pregunta',
    foreignKey: 'id_pregunta',
  });
  test_preguntas.hasMany(web_curriculos_evaluaciones_resdetalle, {
    as: 'web_curriculos_evaluaciones_resdetalles',
    foreignKey: 'id_pregunta',
  });
  web_cursos_modulos_lecciones.belongsTo(test_preguntas, {
    as: 'test_codpre_test_pregunta',
    foreignKey: 'test_codpre',
  });
  test_preguntas.hasMany(web_cursos_modulos_lecciones, {
    as: 'web_cursos_modulos_lecciones',
    foreignKey: 'test_codpre',
  });
  web_cursos_modulos_lecciones_respreguntas.belongsTo(test_preguntas, {
    as: 'id_pregunta_test_pregunta',
    foreignKey: 'id_pregunta',
  });
  test_preguntas.hasMany(web_cursos_modulos_lecciones_respreguntas, {
    as: 'web_cursos_modulos_lecciones_respregunta',
    foreignKey: 'id_pregunta',
  });
  web_cursos_quiz_resdetalle.belongsTo(test_preguntas, { as: 'id_pregunta_test_pregunta', foreignKey: 'id_pregunta' });
  test_preguntas.hasMany(web_cursos_quiz_resdetalle, { as: 'web_cursos_quiz_resdetalles', foreignKey: 'id_pregunta' });
  test_recomendaciones_detalle.belongsTo(test_recomendaciones, {
    as: 'id_recomendacion_test_recomendacione',
    foreignKey: 'id_recomendacion',
  });
  test_recomendaciones.hasMany(test_recomendaciones_detalle, {
    as: 'test_recomendaciones_detalles',
    foreignKey: 'id_recomendacion',
  });
  web_empresas_test_recomendaciones.belongsTo(test_recomendaciones, {
    as: 'id_test_ recomendacion_test_recomendacione',
    foreignKey: 'id_test_ recomendacion',
  });
  test_recomendaciones.hasMany(web_empresas_test_recomendaciones, {
    as: 'web_empresas_test_recomendaciones',
    foreignKey: 'id_test_ recomendacion',
  });
  test_resdetalle.belongsTo(test_resgeneral, {
    as: 'id_test_resgeneral_test_resgeneral',
    foreignKey: 'id_test_resgeneral',
  });
  test_resgeneral.hasMany(test_resdetalle, { as: 'test_resdetalles', foreignKey: 'id_test_resgeneral' });
  test_session_reportes_cerebros.belongsTo(test_session_reportes, {
    as: 'id_reporte_test_session_reporte',
    foreignKey: 'id_reporte',
  });
  test_session_reportes.hasMany(test_session_reportes_cerebros, {
    as: 'test_session_reportes_cerebros',
    foreignKey: 'id_reporte',
  });
  test_preguntas.belongsTo(test_tipo, { as: 'tipo_test_tipo', foreignKey: 'tipo' });
  test_tipo.hasMany(test_preguntas, { as: 'test_pregunta', foreignKey: 'tipo' });
  test_tipo_users.belongsTo(test_tipo, { as: 'id_tipo_test_tipo', foreignKey: 'id_tipo' });
  test_tipo.hasMany(test_tipo_users, { as: 'test_tipo_users', foreignKey: 'id_tipo' });
  adm_email_plantillas_resp.belongsTo(usuarios, { as: 'id_usuario_usuario', foreignKey: 'id_usuario' });
  usuarios.hasMany(adm_email_plantillas_resp, { as: 'adm_email_plantillas_resps', foreignKey: 'id_usuario' });
  calendario.belongsTo(usuarios, { as: 'id_usuario_usuario', foreignKey: 'id_usuario' });
  usuarios.hasMany(calendario, { as: 'calendarios', foreignKey: 'id_usuario' });
  notificaciones_users.belongsTo(usuarios, { as: 'id_user_usuario', foreignKey: 'id_user' });
  usuarios.hasMany(notificaciones_users, { as: 'notificaciones_users', foreignKey: 'id_user' });
  permisos_api_opciones_usuarios.belongsTo(usuarios, { as: 'id_usuario_usuario', foreignKey: 'id_usuario' });
  usuarios.hasMany(permisos_api_opciones_usuarios, { as: 'permisos_api_opciones_usuarios', foreignKey: 'id_usuario' });
  test_tipo_users.belongsTo(usuarios, { as: 'id_user_usuario', foreignKey: 'id_user' });
  usuarios.hasMany(test_tipo_users, { as: 'test_tipo_users', foreignKey: 'id_user' });
  usuarios_departamentos.belongsTo(usuarios, { as: 'id_usuario_usuario', foreignKey: 'id_usuario' });
  usuarios.hasMany(usuarios_departamentos, { as: 'usuarios_departamentos', foreignKey: 'id_usuario' });
  usuarios_opciones.belongsTo(usuarios, { as: 'id_usuario_usuario', foreignKey: 'id_usuario' });
  usuarios.hasMany(usuarios_opciones, { as: 'usuarios_opciones', foreignKey: 'id_usuario' });
  usuarios_permisos_opciones.belongsTo(usuarios, { as: 'id_usuario_usuario', foreignKey: 'id_usuario' });
  usuarios.hasMany(usuarios_permisos_opciones, { as: 'usuarios_permisos_opciones', foreignKey: 'id_usuario' });
  gnr_parametros.belongsTo(usuarios_perfil, { as: 'prfpar_usuarios_perfil', foreignKey: 'prfpar' });
  usuarios_perfil.hasMany(gnr_parametros, { as: 'gnr_parametros', foreignKey: 'prfpar' });
  usuarios.belongsTo(usuarios_perfil, { as: 'id_perfil_usuarios_perfil', foreignKey: 'id_perfil' });
  usuarios_perfil.hasMany(usuarios, { as: 'usuarios', foreignKey: 'id_perfil' });
  usuarios_perfil_opciones.belongsTo(usuarios_perfil, { as: 'id_perfil_usuarios_perfil', foreignKey: 'id_perfil' });
  usuarios_perfil.hasMany(usuarios_perfil_opciones, { as: 'usuarios_perfil_opciones', foreignKey: 'id_perfil' });
  web_certificados_firmas.belongsTo(web_certificados, {
    as: 'id_certificado_web_certificado',
    foreignKey: 'id_certificado',
  });
  web_certificados.hasMany(web_certificados_firmas, { as: 'web_certificados_firmas', foreignKey: 'id_certificado' });
  web_certificados_logos.belongsTo(web_certificados, {
    as: 'id_certificado_web_certificado',
    foreignKey: 'id_certificado',
  });
  web_certificados.hasMany(web_certificados_logos, { as: 'web_certificados_logos', foreignKey: 'id_certificado' });
  web_certificados_patrocinadores.belongsTo(web_certificados, {
    as: 'id_certificado_web_certificado',
    foreignKey: 'id_certificado',
  });
  web_certificados.hasMany(web_certificados_patrocinadores, {
    as: 'web_certificados_patrocinadores',
    foreignKey: 'id_certificado',
  });
  web_cursos_certificados.belongsTo(web_certificados, {
    as: 'id_certificado_web_certificado',
    foreignKey: 'id_certificado',
  });
  web_certificados.hasMany(web_cursos_certificados, { as: 'web_cursos_certificados', foreignKey: 'id_certificado' });
  web_cursos_quiz_resgeneral.belongsTo(web_certificados, {
    as: 'id_certificado_web_certificado',
    foreignKey: 'id_certificado',
  });
  web_certificados.hasMany(web_cursos_quiz_resgeneral, {
    as: 'web_cursos_quiz_resgenerals',
    foreignKey: 'id_certificado',
  });
  ctb_doc_electronicos_productos_componentes.belongsTo(web_componentes, {
    as: 'id_componente_web_componente',
    foreignKey: 'id_componente',
  });
  web_componentes.hasMany(ctb_doc_electronicos_productos_componentes, {
    as: 'ctb_doc_electronicos_productos_componentes',
    foreignKey: 'id_componente',
  });
  web_eventos.belongsTo(web_componentes, { as: 'id_componente_web_componente', foreignKey: 'id_componente' });
  web_componentes.hasMany(web_eventos, { as: 'web_eventos', foreignKey: 'id_componente' });
  web_notificaciones.belongsTo(web_componentes, { as: 'id_componente_web_componente', foreignKey: 'id_componente' });
  web_componentes.hasMany(web_notificaciones, { as: 'web_notificaciones', foreignKey: 'id_componente' });
  web_componentes.belongsTo(web_componentes_categorias, {
    as: 'id_componente_categoria_web_componentes_categoria',
    foreignKey: 'id_componente_categoria',
  });
  web_componentes_categorias.hasMany(web_componentes, { as: 'web_componentes', foreignKey: 'id_componente_categoria' });
  web_curriculos_documentos.belongsTo(web_curriculos, { as: 'id_curriculo_web_curriculo', foreignKey: 'id_curriculo' });
  web_curriculos.hasMany(web_curriculos_documentos, { as: 'web_curriculos_documentos', foreignKey: 'id_curriculo' });
  web_curriculos_modulos.belongsTo(web_curriculos, { as: 'id_curriculo_web_curriculo', foreignKey: 'id_curriculo' });
  web_curriculos.hasMany(web_curriculos_modulos, { as: 'web_curriculos_modulos', foreignKey: 'id_curriculo' });
  web_curriculos_progreso_grupo.belongsTo(web_curriculos, {
    as: 'id_curriculo_web_curriculo',
    foreignKey: 'id_curriculo',
  });
  web_curriculos.hasMany(web_curriculos_progreso_grupo, {
    as: 'web_curriculos_progreso_grupos',
    foreignKey: 'id_curriculo',
  });
  web_curriculos.belongsTo(web_curriculos_categorias, {
    as: 'id_curriculo_categoria_web_curriculos_categoria',
    foreignKey: 'id_curriculo_categoria',
  });
  web_curriculos_categorias.hasMany(web_curriculos, { as: 'web_curriculos', foreignKey: 'id_curriculo_categoria' });
  web_curriculos_evaluaciones_resgeneral.belongsTo(web_curriculos_evaluaciones, {
    as: 'id_evaluacion_web_curriculos_evaluacione',
    foreignKey: 'id_evaluacion',
  });
  web_curriculos_evaluaciones.hasMany(web_curriculos_evaluaciones_resgeneral, {
    as: 'web_curriculos_evaluaciones_resgenerals',
    foreignKey: 'id_evaluacion',
  });
  web_curriculos_evaluaciones_resdetalle.belongsTo(web_curriculos_evaluaciones_resgeneral, {
    as: 'id_resgeneral_web_curriculos_evaluaciones_resgeneral',
    foreignKey: 'id_resgeneral',
  });
  web_curriculos_evaluaciones_resgeneral.hasMany(web_curriculos_evaluaciones_resdetalle, {
    as: 'web_curriculos_evaluaciones_resdetalles',
    foreignKey: 'id_resgeneral',
  });
  web_curriculos_grupos_ventas.belongsTo(web_curriculos_grupos, {
    as: 'id_grupo_curriculo_web_curriculos_grupo',
    foreignKey: 'id_grupo_curriculo',
  });
  web_curriculos_grupos.hasMany(web_curriculos_grupos_ventas, {
    as: 'web_curriculos_grupos_venta',
    foreignKey: 'id_grupo_curriculo',
  });
  web_curriculos_modulos_lecciones.belongsTo(web_curriculos_modulos, {
    as: 'id_modulo_web_curriculos_modulo',
    foreignKey: 'id_modulo',
  });
  web_curriculos_modulos.hasMany(web_curriculos_modulos_lecciones, {
    as: 'web_curriculos_modulos_lecciones',
    foreignKey: 'id_modulo',
  });
  web_curriculos_modulos_lecciones_materiales.belongsTo(web_curriculos_modulos_lecciones, {
    as: 'id_leccion_curriculo_web_curriculos_modulos_leccione',
    foreignKey: 'id_leccion_curriculo',
  });
  web_curriculos_modulos_lecciones.hasMany(web_curriculos_modulos_lecciones_materiales, {
    as: 'web_curriculos_modulos_lecciones_materiales',
    foreignKey: 'id_leccion_curriculo',
  });
  web_curriculos_modulos_lecciones_periodos.belongsTo(web_curriculos_modulos_lecciones, {
    as: 'id_leccion_web_curriculos_modulos_leccione',
    foreignKey: 'id_leccion',
  });
  web_curriculos_modulos_lecciones.hasMany(web_curriculos_modulos_lecciones_periodos, {
    as: 'web_curriculos_modulos_lecciones_periodos',
    foreignKey: 'id_leccion',
  });
  web_curriculos_progreso_grupo.belongsTo(web_curriculos_modulos_lecciones, {
    as: 'id_leccion_curriculo_web_curriculos_modulos_leccione',
    foreignKey: 'id_leccion_curriculo',
  });
  web_curriculos_modulos_lecciones.hasMany(web_curriculos_progreso_grupo, {
    as: 'web_curriculos_progreso_grupos',
    foreignKey: 'id_leccion_curriculo',
  });
  web_curriculos_grupos.belongsTo(web_curriculos_sedes, {
    as: 'id_sede_curriculo_web_curriculos_sede',
    foreignKey: 'id_sede_curriculo',
  });
  web_curriculos_sedes.hasMany(web_curriculos_grupos, { as: 'web_curriculos_grupos', foreignKey: 'id_sede_curriculo' });
  test_actividades_recursos.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(test_actividades_recursos, { as: 'test_actividades_recursos', foreignKey: 'id_curso' });
  web_cursos_certificados.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_cursos_certificados, { as: 'web_cursos_certificados', foreignKey: 'id_curso' });
  web_cursos_comunidad.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_cursos_comunidad, { as: 'web_cursos_comunidads', foreignKey: 'id_curso' });
  web_cursos_instructores.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_cursos_instructores, { as: 'web_cursos_instructores', foreignKey: 'id_curso' });
  web_cursos_modulos.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_cursos_modulos, { as: 'web_cursos_modulos', foreignKey: 'id_curso' });
  web_cursos_progreso_usuarios.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_cursos_progreso_usuarios, { as: 'web_cursos_progreso_usuarios', foreignKey: 'id_curso' });
  web_cursos_progreso_usuarios_historial.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_cursos_progreso_usuarios_historial, {
    as: 'web_cursos_progreso_usuarios_historials',
    foreignKey: 'id_curso',
  });
  web_cursos_quiz.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_cursos_quiz, { as: 'web_cursos_quizzes', foreignKey: 'id_curso' });
  web_cursos_rating.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_cursos_rating, { as: 'web_cursos_ratings', foreignKey: 'id_curso' });
  web_planes_estudio_cursos.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_planes_estudio_cursos, { as: 'web_planes_estudio_cursos', foreignKey: 'id_curso' });
  web_retos_cursos.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_retos_cursos, { as: 'web_retos_cursos', foreignKey: 'id_curso' });
  web_rutas_aprendizaje_cursos.belongsTo(web_cursos, { as: 'id_curso_web_curso', foreignKey: 'id_curso' });
  web_cursos.hasMany(web_rutas_aprendizaje_cursos, { as: 'web_rutas_aprendizaje_cursos', foreignKey: 'id_curso' });
  web_rutas_aprendizaje_cursos_usuarios.belongsTo(web_cursos, {
    as: 'id_web_curso_web_curso',
    foreignKey: 'id_web_curso',
  });
  web_cursos.hasMany(web_rutas_aprendizaje_cursos_usuarios, {
    as: 'web_rutas_aprendizaje_cursos_usuarios',
    foreignKey: 'id_web_curso',
  });
  web_cursos.belongsTo(web_cursos_categorias, {
    as: 'id_curso_categoria_web_cursos_categoria',
    foreignKey: 'id_curso_categoria',
  });
  web_cursos_categorias.hasMany(web_cursos, { as: 'web_cursos', foreignKey: 'id_curso_categoria' });
  web_cursos_comunidad_comentarios.belongsTo(web_cursos_comunidad, {
    as: 'id_curso_comunidad_web_cursos_comunidad',
    foreignKey: 'id_curso_comunidad',
  });
  web_cursos_comunidad.hasMany(web_cursos_comunidad_comentarios, {
    as: 'web_cursos_comunidad_comentarios',
    foreignKey: 'id_curso_comunidad',
  });
  web_cursos_comunidad_likes.belongsTo(web_cursos_comunidad, {
    as: 'id_curso_comunidad_web_cursos_comunidad',
    foreignKey: 'id_curso_comunidad',
  });
  web_cursos_comunidad.hasMany(web_cursos_comunidad_likes, {
    as: 'web_cursos_comunidad_likes',
    foreignKey: 'id_curso_comunidad',
  });
  web_cursos_modulos_lecciones.belongsTo(web_cursos_modulos, {
    as: 'id_curso_modulo_web_cursos_modulo',
    foreignKey: 'id_curso_modulo',
  });
  web_cursos_modulos.hasMany(web_cursos_modulos_lecciones, {
    as: 'web_cursos_modulos_lecciones',
    foreignKey: 'id_curso_modulo',
  });
  web_cursos_modulos_lecciones_materiales.belongsTo(web_cursos_modulos_lecciones, {
    as: 'id_curso_modulo_leccion_web_cursos_modulos_leccione',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_modulos_lecciones.hasMany(web_cursos_modulos_lecciones_materiales, {
    as: 'web_cursos_modulos_lecciones_materiales',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_modulos_lecciones_parrafos.belongsTo(web_cursos_modulos_lecciones, {
    as: 'id_curso_modulo_leccion_web_cursos_modulos_leccione',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_modulos_lecciones.hasMany(web_cursos_modulos_lecciones_parrafos, {
    as: 'web_cursos_modulos_lecciones_parrafos',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_modulos_lecciones_respreguntas.belongsTo(web_cursos_modulos_lecciones, {
    as: 'id_leccion_web_cursos_modulos_leccione',
    foreignKey: 'id_leccion',
  });
  web_cursos_modulos_lecciones.hasMany(web_cursos_modulos_lecciones_respreguntas, {
    as: 'web_cursos_modulos_lecciones_respregunta',
    foreignKey: 'id_leccion',
  });
  web_cursos_progreso_usuarios.belongsTo(web_cursos_modulos_lecciones, {
    as: 'id_curso_modulo_leccion_web_cursos_modulos_leccione',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_modulos_lecciones.hasMany(web_cursos_progreso_usuarios, {
    as: 'web_cursos_progreso_usuarios',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_progreso_usuarios_historial.belongsTo(web_cursos_modulos_lecciones, {
    as: 'id_curso_modulo_leccion_web_cursos_modulos_leccione',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_modulos_lecciones.hasMany(web_cursos_progreso_usuarios_historial, {
    as: 'web_cursos_progreso_usuarios_historials',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_quiz.belongsTo(web_cursos_modulos_lecciones, {
    as: 'id_curso_modulo_leccion_web_cursos_modulos_leccione',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_modulos_lecciones.hasMany(web_cursos_quiz, {
    as: 'web_cursos_quizzes',
    foreignKey: 'id_curso_modulo_leccion',
  });
  web_cursos_progreso_empresa_usuarios.belongsTo(web_cursos_progreso_usuarios, {
    as: 'id_curso_progreso_usuario_web_cursos_progreso_usuario',
    foreignKey: 'id_curso_progreso_usuario',
  });
  web_cursos_progreso_usuarios.hasOne(web_cursos_progreso_empresa_usuarios, {
    as: 'web_cursos_progreso_empresa_usuario',
    foreignKey: 'id_curso_progreso_usuario',
  });
  web_cursos_quiz_resgeneral.belongsTo(web_cursos_quiz, { as: 'id_quiz_web_cursos_quiz', foreignKey: 'id_quiz' });
  web_cursos_quiz.hasMany(web_cursos_quiz_resgeneral, { as: 'web_cursos_quiz_resgenerals', foreignKey: 'id_quiz' });
  web_cursos_quiz_resdetalle.belongsTo(web_cursos_quiz_resgeneral, {
    as: 'id_quiz_resgeneral_web_cursos_quiz_resgeneral',
    foreignKey: 'id_quiz_resgeneral',
  });
  web_cursos_quiz_resgeneral.hasMany(web_cursos_quiz_resdetalle, {
    as: 'web_cursos_quiz_resdetalles',
    foreignKey: 'id_quiz_resgeneral',
  });
  biz_usuarios.belongsTo(web_empresas, { as: 'empresa', foreignKey: 'empresa_id' });
  web_empresas.hasMany(biz_usuarios, { as: 'biz_usuarios', foreignKey: 'empresa_id' });
  plan_negocio_archivos.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(plan_negocio_archivos, { as: 'plan_negocio_archivos', foreignKey: 'id_empresa' });
  web_curriculos_sedes.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_curriculos_sedes, { as: 'web_curriculos_sedes', foreignKey: 'id_empresa' });
  web_cursos_comunidad.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_cursos_comunidad, { as: 'web_cursos_comunidads', foreignKey: 'id_empresa' });
  web_cursos_progreso_empresa_usuarios.belongsTo(web_empresas, {
    as: 'id_empresa_web_empresa',
    foreignKey: 'id_empresa',
  });
  web_empresas.hasMany(web_cursos_progreso_empresa_usuarios, {
    as: 'web_cursos_progreso_empresa_usuarios',
    foreignKey: 'id_empresa',
  });
  web_empresas_areas.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_empresas_areas, { as: 'web_empresas_areas', foreignKey: 'id_empresa' });
  web_empresas_publicidad.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_empresas_publicidad, { as: 'web_empresas_publicidads', foreignKey: 'id_empresa' });
  web_empresas_roles.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_empresas_roles, { as: 'web_empresas_roles', foreignKey: 'id_empresa' });
  web_empresas_test_pruebas.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_empresas_test_pruebas, { as: 'web_empresas_test_pruebas', foreignKey: 'id_empresa' });
  web_empresas_test_recomendaciones.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_empresas_test_recomendaciones, {
    as: 'web_empresas_test_recomendaciones',
    foreignKey: 'id_empresa',
  });
  web_formularios.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_formularios, { as: 'web_formularios', foreignKey: 'id_empresa' });
  web_planes_estudio.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_planes_estudio, { as: 'web_planes_estudios', foreignKey: 'id_empresa' });
  web_retos_progreso_usuarios.belongsTo(web_empresas, { as: 'id_empresa_web_empresa', foreignKey: 'id_empresa' });
  web_empresas.hasMany(web_retos_progreso_usuarios, { as: 'web_retos_progreso_usuarios', foreignKey: 'id_empresa' });
  web_rutas_aprendizaje_cursos_empresa_usuarios.belongsTo(web_empresas, {
    as: 'id_empresa_web_empresa',
    foreignKey: 'id_empresa',
  });
  web_empresas.hasMany(web_rutas_aprendizaje_cursos_empresa_usuarios, {
    as: 'web_rutas_aprendizaje_cursos_empresa_usuarios',
    foreignKey: 'id_empresa',
  });
  biz_usuarios_areas.belongsTo(web_empresas_areas, {
    as: 'id_area_empresa_web_empresas_area',
    foreignKey: 'id_area_empresa',
  });
  web_empresas_areas.hasMany(biz_usuarios_areas, { as: 'biz_usuarios_areas', foreignKey: 'id_area_empresa' });
  web_formularios_areas.belongsTo(web_empresas_areas, { as: 'id_area_web_empresas_area', foreignKey: 'id_area' });
  web_empresas_areas.hasMany(web_formularios_areas, { as: 'web_formularios_areas', foreignKey: 'id_area' });
  web_retos_asignacion.belongsTo(web_empresas_areas, { as: 'id_area_web_empresas_area', foreignKey: 'id_area' });
  web_empresas_areas.hasMany(web_retos_asignacion, { as: 'web_retos_asignacions', foreignKey: 'id_area' });
  web_empresas.belongsTo(web_empresas_asesores, {
    as: 'id_web_empresa_asesor_web_empresas_asesore',
    foreignKey: 'id_web_empresa_asesor',
  });
  web_empresas_asesores.hasMany(web_empresas, { as: 'web_empresas', foreignKey: 'id_web_empresa_asesor' });
  test_general_roles.belongsTo(web_empresas_roles, { as: 'id_rol_web_empresas_role', foreignKey: 'id_rol' });
  web_empresas_roles.hasMany(test_general_roles, { as: 'test_general_roles', foreignKey: 'id_rol' });
  web_empresas_test_recomendaciones.belongsTo(web_empresas_roles, {
    as: 'id_rol_usuario_empresa_web_empresas_role',
    foreignKey: 'id_rol_usuario_empresa',
  });
  web_empresas_roles.hasMany(web_empresas_test_recomendaciones, {
    as: 'web_empresas_test_recomendaciones',
    foreignKey: 'id_rol_usuario_empresa',
  });
  web_formularios_roles.belongsTo(web_empresas_roles, { as: 'id_rol_web_empresas_role', foreignKey: 'id_rol' });
  web_empresas_roles.hasMany(web_formularios_roles, { as: 'web_formularios_roles', foreignKey: 'id_rol' });
  test_actividades_progreso_usuarios.belongsTo(web_empresas_test_pruebas, {
    as: 'id_prueba_web_empresas_test_prueba',
    foreignKey: 'id_prueba',
  });
  web_empresas_test_pruebas.hasMany(test_actividades_progreso_usuarios, {
    as: 'test_actividades_progreso_usuarios',
    foreignKey: 'id_prueba',
  });
  test_resgeneral.belongsTo(web_empresas_test_pruebas, {
    as: 'id_prueba_web_empresas_test_prueba',
    foreignKey: 'id_prueba',
  });
  web_empresas_test_pruebas.hasMany(test_resgeneral, { as: 'test_resgenerals', foreignKey: 'id_prueba' });
  web_eventos_asistencias.belongsTo(web_eventos, { as: 'id_evento_web_evento', foreignKey: 'id_evento' });
  web_eventos.hasMany(web_eventos_asistencias, { as: 'web_eventos_asistencia', foreignKey: 'id_evento' });
  web_eventos_recursos.belongsTo(web_eventos, { as: 'id_evento_web_evento', foreignKey: 'id_evento' });
  web_eventos.hasMany(web_eventos_recursos, { as: 'web_eventos_recursos', foreignKey: 'id_evento' });
  web_eventos.belongsTo(web_eventos_categorias, {
    as: 'id_evento_categoria_web_eventos_categoria',
    foreignKey: 'id_evento_categoria',
  });
  web_eventos_categorias.hasMany(web_eventos, { as: 'web_eventos', foreignKey: 'id_evento_categoria' });
  web_formularios_areas.belongsTo(web_formularios, { as: 'id_formulario_web_formulario', foreignKey: 'id_formulario' });
  web_formularios.hasMany(web_formularios_areas, { as: 'web_formularios_areas', foreignKey: 'id_formulario' });
  web_formularios_roles.belongsTo(web_formularios, { as: 'id_formulario_web_formulario', foreignKey: 'id_formulario' });
  web_formularios.hasMany(web_formularios_roles, { as: 'web_formularios_roles', foreignKey: 'id_formulario' });
  web_formularios_suscripciones.belongsTo(web_formularios, {
    as: 'id_formulario_web_formulario',
    foreignKey: 'id_formulario',
  });
  web_formularios.hasMany(web_formularios_suscripciones, {
    as: 'web_formularios_suscripciones',
    foreignKey: 'id_formulario',
  });
  biz_usuarios.belongsTo(web_imagenes, { as: 'id_foto_web_imagene', foreignKey: 'id_foto' });
  web_imagenes.hasMany(biz_usuarios, { as: 'biz_usuarios', foreignKey: 'id_foto' });
  web_cursos_instructores.belongsTo(web_instructores, {
    as: 'id_instructor_web_instructore',
    foreignKey: 'id_instructor',
  });
  web_instructores.hasMany(web_cursos_instructores, { as: 'web_cursos_instructores', foreignKey: 'id_instructor' });
  web_instructores_estudios.belongsTo(web_instructores, {
    as: 'id_instructor_web_instructore',
    foreignKey: 'id_instructor',
  });
  web_instructores.hasMany(web_instructores_estudios, { as: 'web_instructores_estudios', foreignKey: 'id_instructor' });
  web_instructores_experiencias.belongsTo(web_instructores, {
    as: 'id_instructor_web_instructore',
    foreignKey: 'id_instructor',
  });
  web_instructores.hasMany(web_instructores_experiencias, {
    as: 'web_instructores_experiencia',
    foreignKey: 'id_instructor',
  });
  web_niveles.belongsTo(web_niveles, { as: 'id_siguiente_nivel_web_nivele', foreignKey: 'id_siguiente_nivel' });
  web_niveles.hasMany(web_niveles, { as: 'web_niveles', foreignKey: 'id_siguiente_nivel' });
  web_notificaciones.belongsTo(web_notificaciones_categorias, {
    as: 'id_notificacion_categoria_web_notificaciones_categoria',
    foreignKey: 'id_notificacion_categoria',
  });
  web_notificaciones_categorias.hasMany(web_notificaciones, {
    as: 'web_notificaciones',
    foreignKey: 'id_notificacion_categoria',
  });
  web_planes_estudio_cursos.belongsTo(web_planes_estudio, {
    as: 'id_plan_estudio_web_planes_estudio',
    foreignKey: 'id_plan_estudio',
  });
  web_planes_estudio.hasMany(web_planes_estudio_cursos, {
    as: 'web_planes_estudio_cursos',
    foreignKey: 'id_plan_estudio',
  });
  web_programas_formacion_modulos.belongsTo(web_programas_formacion, {
    as: 'id_programa_web_programas_formacion',
    foreignKey: 'id_programa',
  });
  web_programas_formacion.hasMany(web_programas_formacion_modulos, {
    as: 'web_programas_formacion_modulos',
    foreignKey: 'id_programa',
  });
  web_programas_formacion.belongsTo(web_programas_formacion_categoria, {
    as: 'id_programa_formacion_categoria_web_programas_formacion_categorium',
    foreignKey: 'id_programa_formacion_categoria',
  });
  web_programas_formacion_categoria.hasMany(web_programas_formacion, {
    as: 'web_programas_formacions',
    foreignKey: 'id_programa_formacion_categoria',
  });
  web_programas_formacion_modulos_capsulas.belongsTo(web_programas_formacion_modulos, {
    as: 'id_modulo_web_programas_formacion_modulo',
    foreignKey: 'id_modulo',
  });
  web_programas_formacion_modulos.hasMany(web_programas_formacion_modulos_capsulas, {
    as: 'web_programas_formacion_modulos_capsulas',
    foreignKey: 'id_modulo',
  });
  web_propuestas_planes_pago_cuotas.belongsTo(web_propuestas_planes_pago, {
    as: 'id_plan_web_propuestas_planes_pago',
    foreignKey: 'id_plan',
  });
  web_propuestas_planes_pago.hasMany(web_propuestas_planes_pago_cuotas, {
    as: 'web_propuestas_planes_pago_cuota',
    foreignKey: 'id_plan',
  });
  web_propuestas_planes_pago_seguimiento.belongsTo(web_propuestas_planes_pago, {
    as: 'id_plan_web_propuestas_planes_pago',
    foreignKey: 'id_plan',
  });
  web_propuestas_planes_pago.hasMany(web_propuestas_planes_pago_seguimiento, {
    as: 'web_propuestas_planes_pago_seguimientos',
    foreignKey: 'id_plan',
  });
  web_retos_actividades.belongsTo(web_retos, { as: 'id_reto_web_reto', foreignKey: 'id_reto' });
  web_retos.hasMany(web_retos_actividades, { as: 'web_retos_actividades', foreignKey: 'id_reto' });
  web_retos_asignacion.belongsTo(web_retos, { as: 'id_reto_web_reto', foreignKey: 'id_reto' });
  web_retos.hasMany(web_retos_asignacion, { as: 'web_retos_asignacions', foreignKey: 'id_reto' });
  web_retos_cursos.belongsTo(web_retos, { as: 'id_reto_web_reto', foreignKey: 'id_reto' });
  web_retos.hasMany(web_retos_cursos, { as: 'web_retos_cursos', foreignKey: 'id_reto' });
  web_retos_iteracion.belongsTo(web_retos, { as: 'id_reto_web_reto', foreignKey: 'id_reto' });
  web_retos.hasOne(web_retos_iteracion, { as: 'web_retos_iteracion', foreignKey: 'id_reto' });
  web_retos_progreso_usuarios.belongsTo(web_retos, { as: 'id_reto_web_reto', foreignKey: 'id_reto' });
  web_retos.hasMany(web_retos_progreso_usuarios, { as: 'web_retos_progreso_usuarios', foreignKey: 'id_reto' });
  ctb_doc_electronicos_productos_rutas_aprendizaje.belongsTo(web_rutas_aprendizaje, {
    as: 'id_ruta_aprendizaje_web_rutas_aprendizaje',
    foreignKey: 'id_ruta_aprendizaje',
  });
  web_rutas_aprendizaje.hasMany(ctb_doc_electronicos_productos_rutas_aprendizaje, {
    as: 'ctb_doc_electronicos_productos_rutas_aprendizajes',
    foreignKey: 'id_ruta_aprendizaje',
  });
  web_rutas_aprendizaje_cursos.belongsTo(web_rutas_aprendizaje, {
    as: 'id_ruta_aprendizaje_web_rutas_aprendizaje',
    foreignKey: 'id_ruta_aprendizaje',
  });
  web_rutas_aprendizaje.hasMany(web_rutas_aprendizaje_cursos, {
    as: 'web_rutas_aprendizaje_cursos',
    foreignKey: 'id_ruta_aprendizaje',
  });
  web_rutas_aprendizajes_sugerencias.belongsTo(web_rutas_aprendizaje, {
    as: 'id_ruta_aprendizaje_origen_web_rutas_aprendizaje',
    foreignKey: 'id_ruta_aprendizaje_origen',
  });
  web_rutas_aprendizaje.hasMany(web_rutas_aprendizajes_sugerencias, {
    as: 'web_rutas_aprendizajes_sugerencia',
    foreignKey: 'id_ruta_aprendizaje_origen',
  });
  web_rutas_aprendizajes_sugerencias.belongsTo(web_rutas_aprendizaje, {
    as: 'id_ruta_aprendizaje_destino_web_rutas_aprendizaje',
    foreignKey: 'id_ruta_aprendizaje_destino',
  });
  web_rutas_aprendizaje.hasMany(web_rutas_aprendizajes_sugerencias, {
    as: 'id_ruta_aprendizaje_destino_web_rutas_aprendizajes_sugerencia',
    foreignKey: 'id_ruta_aprendizaje_destino',
  });
  web_rutas_aprendizaje.belongsTo(web_rutas_aprendizaje_categorias, {
    as: 'id_ruta_aprendizaje_categoria_web_rutas_aprendizaje_categoria',
    foreignKey: 'id_ruta_aprendizaje_categoria',
  });
  web_rutas_aprendizaje_categorias.hasMany(web_rutas_aprendizaje, {
    as: 'web_rutas_aprendizajes',
    foreignKey: 'id_ruta_aprendizaje_categoria',
  });
  web_rutas_aprendizaje_cursos_empresa_usuarios.belongsTo(web_rutas_aprendizaje_cursos_usuarios, {
    as: 'id_web_ruta_aprendizaje_curso_usuario_web_rutas_aprendizaje_cursos_usuario',
    foreignKey: 'id_web_ruta_aprendizaje_curso_usuario',
  });
  web_rutas_aprendizaje_cursos_usuarios.hasOne(web_rutas_aprendizaje_cursos_empresa_usuarios, {
    as: 'web_rutas_aprendizaje_cursos_empresa_usuario',
    foreignKey: 'id_web_ruta_aprendizaje_curso_usuario',
  });
  web_rutas_aprendizaje.belongsTo(web_rutas_aprendizaje_niveles, {
    as: 'id_ruta_aprendizaje_nivel_web_rutas_aprendizaje_nivele',
    foreignKey: 'id_ruta_aprendizaje_nivel',
  });
  web_rutas_aprendizaje_niveles.hasMany(web_rutas_aprendizaje, {
    as: 'web_rutas_aprendizajes',
    foreignKey: 'id_ruta_aprendizaje_nivel',
  });
  crm_suscripciones_productos.belongsTo(web_suscripciones, {
    as: 'id_suscripcion_web_suscripcione',
    foreignKey: 'id_suscripcion',
  });
  web_suscripciones.hasMany(crm_suscripciones_productos, {
    as: 'crm_suscripciones_productos',
    foreignKey: 'id_suscripcion',
  });
  web_curriculos_documentos.belongsTo(web_suscripciones, {
    as: 'id_suscripcion_web_suscripcione',
    foreignKey: 'id_suscripcion',
  });
  web_suscripciones.hasMany(web_curriculos_documentos, {
    as: 'web_curriculos_documentos',
    foreignKey: 'id_suscripcion',
  });
  web_formularios_suscripciones.belongsTo(web_suscripciones, {
    as: 'id_suscripcion_web_suscripcione',
    foreignKey: 'id_suscripcion',
  });
  web_suscripciones.hasMany(web_formularios_suscripciones, {
    as: 'web_formularios_suscripciones',
    foreignKey: 'id_suscripcion',
  });
  web_retos_asignacion.belongsTo(web_suscripciones, {
    as: 'id_suscripcion_web_suscripcione',
    foreignKey: 'id_suscripcion',
  });
  web_suscripciones.hasMany(web_retos_asignacion, { as: 'web_retos_asignacions', foreignKey: 'id_suscripcion' });
  web_curriculos_evaluaciones.belongsTo(web_suscripciones_curriculos, {
    as: 'id_suscripcion_curriculo_web_suscripciones_curriculo',
    foreignKey: 'id_suscripcion_curriculo',
  });
  web_suscripciones_curriculos.hasMany(web_curriculos_evaluaciones, {
    as: 'web_curriculos_evaluaciones',
    foreignKey: 'id_suscripcion_curriculo',
  });
  web_curriculos_progreso_grupo.belongsTo(web_suscripciones_curriculos_grupos, {
    as: 'id_suscripcion_curriculo_grupo_web_suscripciones_curriculos_grupo',
    foreignKey: 'id_suscripcion_curriculo_grupo',
  });
  web_suscripciones_curriculos_grupos.hasMany(web_curriculos_progreso_grupo, {
    as: 'web_curriculos_progreso_grupos',
    foreignKey: 'id_suscripcion_curriculo_grupo',
  });
  web_curriculos_modulos_lecciones_periodos.belongsTo(web_suscripciones_curriculos_periodos, {
    as: 'id_periodo_web_suscripciones_curriculos_periodo',
    foreignKey: 'id_periodo',
  });
  web_suscripciones_curriculos_periodos.hasMany(web_curriculos_modulos_lecciones_periodos, {
    as: 'web_curriculos_modulos_lecciones_periodos',
    foreignKey: 'id_periodo',
  });
  crm_propuestas_responsables.belongsTo(web_suscripciones_propuestas, {
    as: 'id_propuesta_web_suscripciones_propuesta',
    foreignKey: 'id_propuesta',
  });
  web_suscripciones_propuestas.hasMany(crm_propuestas_responsables, {
    as: 'crm_propuestas_responsables',
    foreignKey: 'id_propuesta',
  });
  web_propuestas_planes_pago.belongsTo(web_suscripciones_propuestas_historial, {
    as: 'id_historial_web_suscripciones_propuestas_historial',
    foreignKey: 'id_historial',
  });
  web_suscripciones_propuestas_historial.hasOne(web_propuestas_planes_pago, {
    as: 'web_propuestas_planes_pago',
    foreignKey: 'id_historial',
  });
  biz_usuarios.belongsTo(web_usuarios, { as: 'id_web_usuario_web_usuario', foreignKey: 'id_web_usuario' });
  web_usuarios.hasMany(biz_usuarios, { as: 'biz_usuarios', foreignKey: 'id_web_usuario' });
  plan_negocio_archivos.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(plan_negocio_archivos, { as: 'plan_negocio_archivos', foreignKey: 'id_usuario' });
  test_resgeneral.belongsTo(web_usuarios, { as: 'id_web_usuario_web_usuario', foreignKey: 'id_web_usuario' });
  web_usuarios.hasMany(test_resgeneral, { as: 'test_resgenerals', foreignKey: 'id_web_usuario' });
  web_curriculos_evaluaciones_resgeneral.belongsTo(web_usuarios, {
    as: 'id_web_usuario_web_usuario',
    foreignKey: 'id_web_usuario',
  });
  web_usuarios.hasMany(web_curriculos_evaluaciones_resgeneral, {
    as: 'web_curriculos_evaluaciones_resgenerals',
    foreignKey: 'id_web_usuario',
  });
  web_cursos_comunidad.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_cursos_comunidad, { as: 'web_cursos_comunidads', foreignKey: 'id_usuario' });
  web_cursos_comunidad_comentarios.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_cursos_comunidad_comentarios, {
    as: 'web_cursos_comunidad_comentarios',
    foreignKey: 'id_usuario',
  });
  web_cursos_comunidad_likes.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_cursos_comunidad_likes, { as: 'web_cursos_comunidad_likes', foreignKey: 'id_usuario' });
  web_cursos_modulos_lecciones_respreguntas.belongsTo(web_usuarios, {
    as: 'id_usuario_web_usuario',
    foreignKey: 'id_usuario',
  });
  web_usuarios.hasMany(web_cursos_modulos_lecciones_respreguntas, {
    as: 'web_cursos_modulos_lecciones_respregunta',
    foreignKey: 'id_usuario',
  });
  web_cursos_progreso_usuarios.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_cursos_progreso_usuarios, { as: 'web_cursos_progreso_usuarios', foreignKey: 'id_usuario' });
  web_cursos_progreso_usuarios_historial.belongsTo(web_usuarios, {
    as: 'id_usuario_web_usuario',
    foreignKey: 'id_usuario',
  });
  web_usuarios.hasMany(web_cursos_progreso_usuarios_historial, {
    as: 'web_cursos_progreso_usuarios_historials',
    foreignKey: 'id_usuario',
  });
  web_cursos_quiz_resgeneral.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_cursos_quiz_resgeneral, { as: 'web_cursos_quiz_resgenerals', foreignKey: 'id_usuario' });
  web_cursos_rating.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_cursos_rating, { as: 'web_cursos_ratings', foreignKey: 'id_usuario' });
  web_eventos_asistencias.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_eventos_asistencias, { as: 'web_eventos_asistencia', foreignKey: 'id_usuario' });
  web_imagenes.belongsTo(web_usuarios, { as: 'id_web_usuario_web_usuario', foreignKey: 'id_web_usuario' });
  web_usuarios.hasMany(web_imagenes, { as: 'web_imagenes', foreignKey: 'id_web_usuario' });
  web_planes_estudio.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_planes_estudio, { as: 'web_planes_estudios', foreignKey: 'id_usuario' });
  web_retos_progreso_usuarios.belongsTo(web_usuarios, { as: 'id_usuario_web_usuario', foreignKey: 'id_usuario' });
  web_usuarios.hasMany(web_retos_progreso_usuarios, { as: 'web_retos_progreso_usuarios', foreignKey: 'id_usuario' });
  web_rutas_aprendizaje_cursos_usuarios.belongsTo(web_usuarios, {
    as: 'id_web_usuario_web_usuario',
    foreignKey: 'id_web_usuario',
  });
  web_usuarios.hasMany(web_rutas_aprendizaje_cursos_usuarios, {
    as: 'web_rutas_aprendizaje_cursos_usuarios',
    foreignKey: 'id_web_usuario',
  });
  test_actividades_progreso_usuarios.belongsTo(web_usuarios_empresas, {
    as: 'id_usuario_empresa_web_usuarios_empresa',
    foreignKey: 'id_usuario_empresa',
  });
  web_usuarios_empresas.hasMany(test_actividades_progreso_usuarios, {
    as: 'test_actividades_progreso_usuarios',
    foreignKey: 'id_usuario_empresa',
  });
  adm_empleados_plataformas.belongsTo(adm_plataformas, {
    as: 'idPlataforma_adm_plataforma',
    foreignKey: 'idPlataforma',
  });
  adm_plataformas.hasMany(adm_empleados_plataformas, { as: 'adm_empleados_plataformas', foreignKey: 'idPlataforma' });
  pqrs.belongsTo(adm_sedes, { as: 'sede_adm_sede', foreignKey: 'sede' });
  adm_sedes.hasMany(pqrs, { as: 'pqrs', foreignKey: 'sede' });
  pqrs.belongsTo(config_tipos_ident, { as: 'tipo_ident_config_tipos_ident', foreignKey: 'tipo_ident' });
  config_tipos_ident.hasMany(pqrs, { as: 'pqrs', foreignKey: 'tipo_ident' });
  pqrs.belongsTo(matricula_familiares, { as: 'id_familiar_matricula_familiare', foreignKey: 'id_familiar' });
  matricula_familiares.hasMany(pqrs, { as: 'pqrs', foreignKey: 'id_familiar' });

  return {
    SequelizeMeta,
    acd_elementos,
    acf_actas,
    acf_actas_detalle,
    acf_areas,
    acf_areas_responsables,
    acf_bajas,
    acf_bajas_detalle,
    acf_categoria,
    acf_componentes,
    acf_equipos,
    acf_herramientas,
    acf_herramientas_categorias,
    acf_herramientas_responsables,
    acf_inventario,
    acf_inventario_detalle,
    acf_movimientos,
    acf_movimientos_detalle,
    acf_plan_mantenimiento,
    acf_solicitudes,
    acf_solicitudes_detalle,
    acf_solicitudes_evaluacion,
    acf_solicitudes_evaluacion_criterios,
    acf_solicitudes_ordenes,
    acf_solicitudes_ordenes_detalle,
    acf_traslados,
    acf_traslados_detalle,
    acf_ubicaciones,
    actualizar_pagos,
    adm_arl,
    adm_bancos,
    adm_barrios,
    adm_cargos,
    adm_cargos_plataformas,
    adm_ciudades,
    adm_contratos_funciones,
    adm_contratos_modelos,
    adm_contratos_tipos,
    adm_departamentos,
    adm_dependencias,
    adm_email_plantillas,
    adm_email_plantillas_resp,
    adm_empleados,
    adm_empleados_contrato,
    adm_empleados_contrato_anexos,
    adm_empleados_estudios,
    adm_empleados_plataformas,
    adm_eps,
    adm_eventos_generales,
    adm_fondo_pensiones,
    adm_funciones,
    adm_funciones_cargos,
    adm_grupos,
    adm_grupos_integrantes,
    adm_insumos_inventarios,
    adm_insumos_invetarios_detalle,
    adm_insumos_lugares,
    adm_insumos_lugares_responsable,
    adm_insumos_movimientos,
    adm_insumos_movimientos_detalle,
    adm_insumos_ordenes,
    adm_insumos_ordenes_detalle,
    adm_insumos_productos,
    adm_insumos_productos_categorias,
    adm_insumos_productos_lugares,
    adm_paises,
    adm_plataformas,
    adm_sedes,
    biz_filtros,
    biz_filtros_categorias,
    biz_opciones,
    biz_roles,
    biz_roles_opciones,
    biz_usuarios,
    biz_usuarios_areas,
    biz_usuarios_opciones,
    calendario,
    calendario_categorias,
    config_anios,
    config_ciudades,
    config_periodo,
    config_tipos_ident,
    crm_productos,
    crm_productos_responsables,
    crm_propuestas_responsables,
    crm_suscripciones_productos,
    ctb_caja_menor,
    ctb_caja_menor_egresos,
    ctb_caja_menor_ingresos,
    ctb_caja_menor_responsables,
    ctb_compras_ordenes,
    ctb_compras_ordenes_entrega,
    ctb_compras_ordenes_entrega_detalle,
    ctb_compras_solicitudes,
    ctb_compras_solicitudes_detalle,
    ctb_doc_electronicos,
    ctb_doc_electronicos_productos,
    ctb_doc_electronicos_productos_componentes,
    ctb_doc_electronicos_productos_rutas_aprendizaje,
    ctb_documento_contable,
    ctb_festivos_anios,
    ctb_medios_pago,
    ctb_novedad_cambios,
    ctb_novedad_control_creditos,
    ctb_novedad_tipos,
    ctb_novedad_user,
    ctb_novedades_nom,
    ctb_pagos_cuentas,
    ctb_pagos_lugar,
    ctb_pagos_tarjetas,
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
    evl_autempleados,
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
    permisos_api_opciones,
    permisos_api_opciones_usuarios,
    pevl_criterios,
    pevl_evaluacion,
    pevl_evaluacion_criterio,
    pevl_evaluacion_grupos,
    pevl_evaluacion_indicador,
    pevl_evaluacion_integrante,
    pevl_evaluacion_programacion,
    pevl_evaluacion_programacion_grupo,
    plan_negocio_archivos,
    pqrs,
    pqrs_respuesta,
    pqrs_tipo_perfil,
    pqrs_tipo_solicitud,
    test_actividades,
    test_actividades_configuracion,
    test_actividades_progreso_usuarios,
    test_actividades_recursos,
    test_categorias,
    test_cerebros,
    test_general,
    test_general_preguntas,
    test_general_roles,
    test_habilidades,
    test_opciones,
    test_preguntas,
    test_preguntas_categorias,
    test_preguntas_opciones,
    test_prsexterno,
    test_recomendaciones,
    test_recomendaciones_detalle,
    test_resdetalle,
    test_resgeneral,
    test_session_reportes,
    test_session_reportes_cerebros,
    test_session_reportes_enganches,
    test_tipo,
    test_tipo_users,
    usuarios,
    usuarios_departamentos,
    usuarios_opciones,
    usuarios_perfil,
    usuarios_perfil_opciones,
    usuarios_permisos_opciones,
    web_certificados,
    web_certificados_firmas,
    web_certificados_logos,
    web_certificados_patrocinadores,
    web_componentes,
    web_componentes_categorias,
    web_curriculos,
    web_curriculos_categorias,
    web_curriculos_documentos,
    web_curriculos_evaluaciones,
    web_curriculos_evaluaciones_resdetalle,
    web_curriculos_evaluaciones_resgeneral,
    web_curriculos_grupos,
    web_curriculos_grupos_ventas,
    web_curriculos_modulos,
    web_curriculos_modulos_lecciones,
    web_curriculos_modulos_lecciones_materiales,
    web_curriculos_modulos_lecciones_periodos,
    web_curriculos_progreso_grupo,
    web_curriculos_sedes,
    web_cursos,
    web_cursos_categorias,
    web_cursos_certificados,
    web_cursos_comunidad,
    web_cursos_comunidad_comentarios,
    web_cursos_comunidad_likes,
    web_cursos_instructores,
    web_cursos_modulos,
    web_cursos_modulos_lecciones,
    web_cursos_modulos_lecciones_materiales,
    web_cursos_modulos_lecciones_parrafos,
    web_cursos_modulos_lecciones_respreguntas,
    web_cursos_progreso_empresa_usuarios,
    web_cursos_progreso_usuarios,
    web_cursos_progreso_usuarios_historial,
    web_cursos_quiz,
    web_cursos_quiz_resdetalle,
    web_cursos_quiz_resgeneral,
    web_cursos_rating,
    web_empresas,
    web_empresas_areas,
    web_empresas_asesores,
    web_empresas_publicidad,
    web_empresas_roles,
    web_empresas_test_pruebas,
    web_empresas_test_recomendaciones,
    web_eventos,
    web_eventos_asistencias,
    web_eventos_categorias,
    web_eventos_recursos,
    web_filtros_intervalos,
    web_formularios,
    web_formularios_areas,
    web_formularios_roles,
    web_formularios_suscripciones,
    web_imagenes,
    web_imagenes_rutas,
    web_instructores,
    web_instructores_estudios,
    web_instructores_experiencias,
    web_niveles,
    web_notificaciones,
    web_notificaciones_categorias,
    web_planes_estudio,
    web_planes_estudio_cursos,
    web_programas_formacion,
    web_programas_formacion_categoria,
    web_programas_formacion_modulos,
    web_programas_formacion_modulos_capsulas,
    web_propuestas_planes_pago,
    web_propuestas_planes_pago_cuotas,
    web_propuestas_planes_pago_seguimiento,
    web_redes_sociales,
    web_retos,
    web_retos_actividades,
    web_retos_asignacion,
    web_retos_cursos,
    web_retos_iteracion,
    web_retos_progreso_usuarios,
    web_rutas_aprendizaje,
    web_rutas_aprendizaje_categorias,
    web_rutas_aprendizaje_cursos,
    web_rutas_aprendizaje_cursos_empresa_usuarios,
    web_rutas_aprendizaje_cursos_usuarios,
    web_rutas_aprendizaje_niveles,
    web_rutas_aprendizajes_sugerencias,
    web_suscripcion_notificaciones,
    web_suscripciones,
    web_suscripciones_certificados,
    web_suscripciones_componentes,
    web_suscripciones_curriculos,
    web_suscripciones_curriculos_ciclos,
    web_suscripciones_curriculos_docentes,
    web_suscripciones_curriculos_estudiantes,
    web_suscripciones_curriculos_grupos,
    web_suscripciones_curriculos_grupos_asistencias,
    web_suscripciones_curriculos_grupos_cronograma,
    web_suscripciones_curriculos_periodos,
    web_suscripciones_eventos,
    web_suscripciones_eventos_categorias,
    web_suscripciones_lineas,
    web_suscripciones_programas_calendario,
    web_suscripciones_programas_calendario_detalle,
    web_suscripciones_programas_formacion,
    web_suscripciones_propuestas,
    web_suscripciones_propuestas_historial,
    web_suscripciones_rutas_aprendizaje,
    web_suscripciones_test,
    web_suscripciones_test_habilidades,
    web_suscripciones_test_reportes,
    web_usuarios,
    web_usuarios_empresas,
    web_usuarios_empresas_historial,
    web_usuarios_felicitaciones,
    web_usuarios_lista_deseos,
    web_usuarios_niveles,
    web_usuarios_notificaciones,
    web_usuarios_puntos,
    web_usuarios_redes,
    web_usuarios_suscripciones,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
