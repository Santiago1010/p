var DataTypes = require("sequelize").DataTypes;
var _acd_areas = require("./acd_areas");
var _acd_asig_grp = require("./acd_asig_grp");
var _acd_asignaturas = require("./acd_asignaturas");
var _acd_elementos = require("./acd_elementos");
var _acd_escinscritos = require("./acd_escinscritos");
var _acd_escuelas = require("./acd_escuelas");
var _acd_escuelas_fechas = require("./acd_escuelas_fechas");
var _acd_escuelas_imagenes = require("./acd_escuelas_imagenes");
var _acd_escuelas_instructores = require("./acd_escuelas_instructores");
var _acd_escuelas_motivos = require("./acd_escuelas_motivos");
var _acd_escuelas_sedes = require("./acd_escuelas_sedes");
var _acd_escuelas_uniformes = require("./acd_escuelas_uniformes");
var _acd_escuelas_uniformes_fechas = require("./acd_escuelas_uniformes_fechas");
var _acd_ortcategorias = require("./acd_ortcategorias");
var _acd_ortcategoriasgrados = require("./acd_ortcategoriasgrados");
var _acd_ortcategoriasidiomas = require("./acd_ortcategoriasidiomas");
var _acd_ortdetalle = require("./acd_ortdetalle");
var _acd_ortelementos = require("./acd_ortelementos");
var _acd_ortgeneral = require("./acd_ortgeneral");
var _acd_solicitud_asignacion = require("./acd_solicitud_asignacion");
var _acd_solicitud_historial = require("./acd_solicitud_historial");
var _acd_solicitud_motivo = require("./acd_solicitud_motivo");
var _acd_solicitud_retiro = require("./acd_solicitud_retiro");
var _acd_solicitud_retiro_motivo = require("./acd_solicitud_retiro_motivo");
var _acd_solicitud_tipo = require("./acd_solicitud_tipo");
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
var _admision_aspirantes = require("./admision_aspirantes");
var _admision_aspirantes_anio = require("./admision_aspirantes_anio");
var _admision_aspirantes_documentos = require("./admision_aspirantes_documentos");
var _admision_aspirantes_entrevistas = require("./admision_aspirantes_entrevistas");
var _admision_aspirantes_entrevistas_compromisos = require("./admision_aspirantes_entrevistas_compromisos");
var _admision_aspirantes_examen = require("./admision_aspirantes_examen");
var _admision_aspirantes_examen_ingles = require("./admision_aspirantes_examen_ingles");
var _admision_aspirantes_examen_ingles_compro = require("./admision_aspirantes_examen_ingles_compro");
var _admision_aspirantes_familiares = require("./admision_aspirantes_familiares");
var _admision_config = require("./admision_config");
var _admision_config_documentos = require("./admision_config_documentos");
var _admision_config_entrevistas = require("./admision_config_entrevistas");
var _admision_config_examen_ingles = require("./admision_config_examen_ingles");
var _admision_config_examen_ingles_compro = require("./admision_config_examen_ingles_compro");
var _admision_config_examen_ingles_tipos_recurs = require("./admision_config_examen_ingles_tipos_recurs");
var _admision_familiares = require("./admision_familiares");
var _admision_formulario = require("./admision_formulario");
var _admision_formulario_caja = require("./admision_formulario_caja");
var _admision_procesos_usuarios = require("./admision_procesos_usuarios");
var _admision_visitas = require("./admision_visitas");
var _calendario = require("./calendario");
var _calendario_categorias = require("./calendario_categorias");
var _config_anios = require("./config_anios");
var _config_ciudades = require("./config_ciudades");
var _config_data_formulario = require("./config_data_formulario");
var _config_data_opciones = require("./config_data_opciones");
var _config_data_preguntas = require("./config_data_preguntas");
var _config_data_preguntas_formulario = require("./config_data_preguntas_formulario");
var _config_data_preguntas_opciones = require("./config_data_preguntas_opciones");
var _config_documentos = require("./config_documentos");
var _config_empresas = require("./config_empresas");
var _config_empresas_tranferencia = require("./config_empresas_tranferencia");
var _config_entrevistas = require("./config_entrevistas");
var _config_entrevistas_empleados = require("./config_entrevistas_empleados");
var _config_grados = require("./config_grados");
var _config_grados_apps = require("./config_grados_apps");
var _config_grados_conceptos = require("./config_grados_conceptos");
var _config_grados_contratos = require("./config_grados_contratos");
var _config_grados_cupos = require("./config_grados_cupos");
var _config_grados_grupos_anios = require("./config_grados_grupos_anios");
var _config_grupos = require("./config_grupos");
var _config_modalidad = require("./config_modalidad");
var _config_periodo = require("./config_periodo");
var _config_tipos_familiares = require("./config_tipos_familiares");
var _config_tipos_ident = require("./config_tipos_ident");
var _control_contratos = require("./control_contratos");
var _control_contratos_grados = require("./control_contratos_grados");
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
var _ctb_proveedores = require("./ctb_proveedores");
var _ctb_proveedores_correos = require("./ctb_proveedores_correos");
var _ctb_proveedores_detalles = require("./ctb_proveedores_detalles");
var _ctb_proveedores_pagos = require("./ctb_proveedores_pagos");
var _ctb_proveedores_recordatorio = require("./ctb_proveedores_recordatorio");
var _ctb_proveedores_respons = require("./ctb_proveedores_respons");
var _ctb_proveedores_tipos_ident = require("./ctb_proveedores_tipos_ident");
var _departamentos = require("./departamentos");
var _departamentos_opciones = require("./departamentos_opciones");
var _enc_categoria = require("./enc_categoria");
var _enc_configuracion = require("./enc_configuracion");
var _enc_opcionespreg = require("./enc_opcionespreg");
var _enc_perfil_encuesta = require("./enc_perfil_encuesta");
var _enc_preguntas = require("./enc_preguntas");
var _enc_preguntas_encuesta = require("./enc_preguntas_encuesta");
var _enc_resultados = require("./enc_resultados");
var _enc_tipo_preguntas = require("./enc_tipo_preguntas");
var _epayco_cis = require("./epayco_cis");
var _evl_asig_evaluaciones = require("./evl_asig_evaluaciones");
var _evl_autempleados = require("./evl_autempleados");
var _evl_autestudiantes = require("./evl_autestudiantes");
var _evl_configuracion = require("./evl_configuracion");
var _evl_evalempleados = require("./evl_evalempleados");
var _evl_evalestudiantes = require("./evl_evalestudiantes");
var _evl_evaluadores = require("./evl_evaluadores");
var _evl_preg_habilidades = require("./evl_preg_habilidades");
var _evl_preguntas = require("./evl_preguntas");
var _evl_res_habilidades = require("./evl_res_habilidades");
var _evl_valoresgenerales = require("./evl_valoresgenerales");
var _gnr_parametros = require("./gnr_parametros");
var _gnr_parametros_perfiles = require("./gnr_parametros_perfiles");
var _gnr_parametros_usuarios = require("./gnr_parametros_usuarios");
var _matricula_apps = require("./matricula_apps");
var _matricula_config = require("./matricula_config");
var _matricula_consecutivos = require("./matricula_consecutivos");
var _matricula_contratos = require("./matricula_contratos");
var _matricula_control = require("./matricula_control");
var _matricula_estudiantes = require("./matricula_estudiantes");
var _matricula_estudiantes_anio = require("./matricula_estudiantes_anio");
var _matricula_estudiantes_apps = require("./matricula_estudiantes_apps");
var _matricula_estudiantes_codeudor = require("./matricula_estudiantes_codeudor");
var _matricula_estudiantes_contratos = require("./matricula_estudiantes_contratos");
var _matricula_estudiantes_contratos_codigos = require("./matricula_estudiantes_contratos_codigos");
var _matricula_estudiantes_datosmedicos = require("./matricula_estudiantes_datosmedicos");
var _matricula_estudiantes_desistimiento = require("./matricula_estudiantes_desistimiento");
var _matricula_estudiantes_documentos = require("./matricula_estudiantes_documentos");
var _matricula_estudiantes_familiares = require("./matricula_estudiantes_familiares");
var _matricula_familiares = require("./matricula_familiares");
var _matricula_meses = require("./matricula_meses");
var _matricula_referidos = require("./matricula_referidos");
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
var _terceros = require("./terceros");
var _test_administracion = require("./test_administracion");
var _test_asig_ejercicios = require("./test_asig_ejercicios");
var _test_asig_ejercicios_resp = require("./test_asig_ejercicios_resp");
var _test_cerebros = require("./test_cerebros");
var _test_ejer_actividad = require("./test_ejer_actividad");
var _test_fecha_publicacion = require("./test_fecha_publicacion");
var _test_general = require("./test_general");
var _test_menusconfig = require("./test_menusconfig");
var _test_permisos_opc = require("./test_permisos_opc");
var _test_preguntas = require("./test_preguntas");
var _test_prsexterno = require("./test_prsexterno");
var _test_recom_actividad = require("./test_recom_actividad");
var _test_resdetalle = require("./test_resdetalle");
var _test_resgeneral = require("./test_resgeneral");
var _test_val_actividad = require("./test_val_actividad");
var _tienda_bodegas = require("./tienda_bodegas");
var _tienda_bodegas_ajustes = require("./tienda_bodegas_ajustes");
var _tienda_bodegas_ajustes_productos = require("./tienda_bodegas_ajustes_productos");
var _tienda_bodegas_movimientos = require("./tienda_bodegas_movimientos");
var _tienda_bodegas_movimientos_productos = require("./tienda_bodegas_movimientos_productos");
var _tienda_bodegas_usuarios = require("./tienda_bodegas_usuarios");
var _tienda_bonos = require("./tienda_bonos");
var _tienda_categorias = require("./tienda_categorias");
var _tienda_categorias_contratos = require("./tienda_categorias_contratos");
var _tienda_compras = require("./tienda_compras");
var _tienda_compras_productos = require("./tienda_compras_productos");
var _tienda_consecutivos = require("./tienda_consecutivos");
var _tienda_cuenta_empresas = require("./tienda_cuenta_empresas");
var _tienda_cupon_autoriza = require("./tienda_cupon_autoriza");
var _tienda_cupones = require("./tienda_cupones");
var _tienda_cupones_concepto = require("./tienda_cupones_concepto");
var _tienda_cupones_concepto_producto = require("./tienda_cupones_concepto_producto");
var _tienda_cupones_controlacademic = require("./tienda_cupones_controlacademic");
var _tienda_cupones_estudiantes = require("./tienda_cupones_estudiantes");
var _tienda_cupones_excel = require("./tienda_cupones_excel");
var _tienda_cupones_general = require("./tienda_cupones_general");
var _tienda_datos_corregir = require("./tienda_datos_corregir");
var _tienda_medios_pago = require("./tienda_medios_pago");
var _tienda_medios_pago_tarjetas = require("./tienda_medios_pago_tarjetas");
var _tienda_pagos_cuentas = require("./tienda_pagos_cuentas");
var _tienda_pagos_documentos = require("./tienda_pagos_documentos");
var _tienda_pagos_lugar = require("./tienda_pagos_lugar");
var _tienda_pagos_tarjetas = require("./tienda_pagos_tarjetas");
var _tienda_parametros = require("./tienda_parametros");
var _tienda_planes_acciones = require("./tienda_planes_acciones");
var _tienda_planes_acciones_reg = require("./tienda_planes_acciones_reg");
var _tienda_planes_acciones_resp = require("./tienda_planes_acciones_resp");
var _tienda_procesos = require("./tienda_procesos");
var _tienda_productos = require("./tienda_productos");
var _tienda_productos_bodega = require("./tienda_productos_bodega");
var _tienda_productos_codigos = require("./tienda_productos_codigos");
var _tienda_productos_compuesto = require("./tienda_productos_compuesto");
var _tienda_productos_imagenes = require("./tienda_productos_imagenes");
var _tienda_productos_relacion = require("./tienda_productos_relacion");
var _tienda_productos_seguimiento = require("./tienda_productos_seguimiento");
var _tienda_resoluciones = require("./tienda_resoluciones");
var _tienda_ventas = require("./tienda_ventas");
var _tienda_ventas_anio_anterior = require("./tienda_ventas_anio_anterior");
var _tienda_ventas_caja = require("./tienda_ventas_caja");
var _tienda_ventas_caja_venta = require("./tienda_ventas_caja_venta");
var _tienda_ventas_comentarios = require("./tienda_ventas_comentarios");
var _tienda_ventas_comentarios_categ = require("./tienda_ventas_comentarios_categ");
var _tienda_ventas_comentarios_visto = require("./tienda_ventas_comentarios_visto");
var _tienda_ventas_cupones = require("./tienda_ventas_cupones");
var _tienda_ventas_cxc = require("./tienda_ventas_cxc");
var _tienda_ventas_cxc_abonos = require("./tienda_ventas_cxc_abonos");
var _tienda_ventas_cxc_comparacion = require("./tienda_ventas_cxc_comparacion");
var _tienda_ventas_productos = require("./tienda_ventas_productos");
var _usuarios = require("./usuarios");
var _usuarios_departamentos = require("./usuarios_departamentos");
var _usuarios_opciones = require("./usuarios_opciones");
var _usuarios_perfil = require("./usuarios_perfil");
var _usuarios_perfil_opciones = require("./usuarios_perfil_opciones");
var _usuarios_permisos_opciones = require("./usuarios_permisos_opciones");

function initModels(sequelize) {
  var acd_areas = _acd_areas(sequelize, DataTypes);
  var acd_asig_grp = _acd_asig_grp(sequelize, DataTypes);
  var acd_asignaturas = _acd_asignaturas(sequelize, DataTypes);
  var acd_elementos = _acd_elementos(sequelize, DataTypes);
  var acd_escinscritos = _acd_escinscritos(sequelize, DataTypes);
  var acd_escuelas = _acd_escuelas(sequelize, DataTypes);
  var acd_escuelas_fechas = _acd_escuelas_fechas(sequelize, DataTypes);
  var acd_escuelas_imagenes = _acd_escuelas_imagenes(sequelize, DataTypes);
  var acd_escuelas_instructores = _acd_escuelas_instructores(sequelize, DataTypes);
  var acd_escuelas_motivos = _acd_escuelas_motivos(sequelize, DataTypes);
  var acd_escuelas_sedes = _acd_escuelas_sedes(sequelize, DataTypes);
  var acd_escuelas_uniformes = _acd_escuelas_uniformes(sequelize, DataTypes);
  var acd_escuelas_uniformes_fechas = _acd_escuelas_uniformes_fechas(sequelize, DataTypes);
  var acd_ortcategorias = _acd_ortcategorias(sequelize, DataTypes);
  var acd_ortcategoriasgrados = _acd_ortcategoriasgrados(sequelize, DataTypes);
  var acd_ortcategoriasidiomas = _acd_ortcategoriasidiomas(sequelize, DataTypes);
  var acd_ortdetalle = _acd_ortdetalle(sequelize, DataTypes);
  var acd_ortelementos = _acd_ortelementos(sequelize, DataTypes);
  var acd_ortgeneral = _acd_ortgeneral(sequelize, DataTypes);
  var acd_solicitud_asignacion = _acd_solicitud_asignacion(sequelize, DataTypes);
  var acd_solicitud_historial = _acd_solicitud_historial(sequelize, DataTypes);
  var acd_solicitud_motivo = _acd_solicitud_motivo(sequelize, DataTypes);
  var acd_solicitud_retiro = _acd_solicitud_retiro(sequelize, DataTypes);
  var acd_solicitud_retiro_motivo = _acd_solicitud_retiro_motivo(sequelize, DataTypes);
  var acd_solicitud_tipo = _acd_solicitud_tipo(sequelize, DataTypes);
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
  var admision_aspirantes = _admision_aspirantes(sequelize, DataTypes);
  var admision_aspirantes_anio = _admision_aspirantes_anio(sequelize, DataTypes);
  var admision_aspirantes_documentos = _admision_aspirantes_documentos(sequelize, DataTypes);
  var admision_aspirantes_entrevistas = _admision_aspirantes_entrevistas(sequelize, DataTypes);
  var admision_aspirantes_entrevistas_compromisos = _admision_aspirantes_entrevistas_compromisos(sequelize, DataTypes);
  var admision_aspirantes_examen = _admision_aspirantes_examen(sequelize, DataTypes);
  var admision_aspirantes_examen_ingles = _admision_aspirantes_examen_ingles(sequelize, DataTypes);
  var admision_aspirantes_examen_ingles_compro = _admision_aspirantes_examen_ingles_compro(sequelize, DataTypes);
  var admision_aspirantes_familiares = _admision_aspirantes_familiares(sequelize, DataTypes);
  var admision_config = _admision_config(sequelize, DataTypes);
  var admision_config_documentos = _admision_config_documentos(sequelize, DataTypes);
  var admision_config_entrevistas = _admision_config_entrevistas(sequelize, DataTypes);
  var admision_config_examen_ingles = _admision_config_examen_ingles(sequelize, DataTypes);
  var admision_config_examen_ingles_compro = _admision_config_examen_ingles_compro(sequelize, DataTypes);
  var admision_config_examen_ingles_tipos_recurs = _admision_config_examen_ingles_tipos_recurs(sequelize, DataTypes);
  var admision_familiares = _admision_familiares(sequelize, DataTypes);
  var admision_formulario = _admision_formulario(sequelize, DataTypes);
  var admision_formulario_caja = _admision_formulario_caja(sequelize, DataTypes);
  var admision_procesos_usuarios = _admision_procesos_usuarios(sequelize, DataTypes);
  var admision_visitas = _admision_visitas(sequelize, DataTypes);
  var calendario = _calendario(sequelize, DataTypes);
  var calendario_categorias = _calendario_categorias(sequelize, DataTypes);
  var config_anios = _config_anios(sequelize, DataTypes);
  var config_ciudades = _config_ciudades(sequelize, DataTypes);
  var config_data_formulario = _config_data_formulario(sequelize, DataTypes);
  var config_data_opciones = _config_data_opciones(sequelize, DataTypes);
  var config_data_preguntas = _config_data_preguntas(sequelize, DataTypes);
  var config_data_preguntas_formulario = _config_data_preguntas_formulario(sequelize, DataTypes);
  var config_data_preguntas_opciones = _config_data_preguntas_opciones(sequelize, DataTypes);
  var config_documentos = _config_documentos(sequelize, DataTypes);
  var config_empresas = _config_empresas(sequelize, DataTypes);
  var config_empresas_tranferencia = _config_empresas_tranferencia(sequelize, DataTypes);
  var config_entrevistas = _config_entrevistas(sequelize, DataTypes);
  var config_entrevistas_empleados = _config_entrevistas_empleados(sequelize, DataTypes);
  var config_grados = _config_grados(sequelize, DataTypes);
  var config_grados_apps = _config_grados_apps(sequelize, DataTypes);
  var config_grados_conceptos = _config_grados_conceptos(sequelize, DataTypes);
  var config_grados_contratos = _config_grados_contratos(sequelize, DataTypes);
  var config_grados_cupos = _config_grados_cupos(sequelize, DataTypes);
  var config_grados_grupos_anios = _config_grados_grupos_anios(sequelize, DataTypes);
  var config_grupos = _config_grupos(sequelize, DataTypes);
  var config_modalidad = _config_modalidad(sequelize, DataTypes);
  var config_periodo = _config_periodo(sequelize, DataTypes);
  var config_tipos_familiares = _config_tipos_familiares(sequelize, DataTypes);
  var config_tipos_ident = _config_tipos_ident(sequelize, DataTypes);
  var control_contratos = _control_contratos(sequelize, DataTypes);
  var control_contratos_grados = _control_contratos_grados(sequelize, DataTypes);
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
  var ctb_proveedores = _ctb_proveedores(sequelize, DataTypes);
  var ctb_proveedores_correos = _ctb_proveedores_correos(sequelize, DataTypes);
  var ctb_proveedores_detalles = _ctb_proveedores_detalles(sequelize, DataTypes);
  var ctb_proveedores_pagos = _ctb_proveedores_pagos(sequelize, DataTypes);
  var ctb_proveedores_recordatorio = _ctb_proveedores_recordatorio(sequelize, DataTypes);
  var ctb_proveedores_respons = _ctb_proveedores_respons(sequelize, DataTypes);
  var ctb_proveedores_tipos_ident = _ctb_proveedores_tipos_ident(sequelize, DataTypes);
  var departamentos = _departamentos(sequelize, DataTypes);
  var departamentos_opciones = _departamentos_opciones(sequelize, DataTypes);
  var enc_categoria = _enc_categoria(sequelize, DataTypes);
  var enc_configuracion = _enc_configuracion(sequelize, DataTypes);
  var enc_opcionespreg = _enc_opcionespreg(sequelize, DataTypes);
  var enc_perfil_encuesta = _enc_perfil_encuesta(sequelize, DataTypes);
  var enc_preguntas = _enc_preguntas(sequelize, DataTypes);
  var enc_preguntas_encuesta = _enc_preguntas_encuesta(sequelize, DataTypes);
  var enc_resultados = _enc_resultados(sequelize, DataTypes);
  var enc_tipo_preguntas = _enc_tipo_preguntas(sequelize, DataTypes);
  var epayco_cis = _epayco_cis(sequelize, DataTypes);
  var evl_asig_evaluaciones = _evl_asig_evaluaciones(sequelize, DataTypes);
  var evl_autempleados = _evl_autempleados(sequelize, DataTypes);
  var evl_autestudiantes = _evl_autestudiantes(sequelize, DataTypes);
  var evl_configuracion = _evl_configuracion(sequelize, DataTypes);
  var evl_evalempleados = _evl_evalempleados(sequelize, DataTypes);
  var evl_evalestudiantes = _evl_evalestudiantes(sequelize, DataTypes);
  var evl_evaluadores = _evl_evaluadores(sequelize, DataTypes);
  var evl_preg_habilidades = _evl_preg_habilidades(sequelize, DataTypes);
  var evl_preguntas = _evl_preguntas(sequelize, DataTypes);
  var evl_res_habilidades = _evl_res_habilidades(sequelize, DataTypes);
  var evl_valoresgenerales = _evl_valoresgenerales(sequelize, DataTypes);
  var gnr_parametros = _gnr_parametros(sequelize, DataTypes);
  var gnr_parametros_perfiles = _gnr_parametros_perfiles(sequelize, DataTypes);
  var gnr_parametros_usuarios = _gnr_parametros_usuarios(sequelize, DataTypes);
  var matricula_apps = _matricula_apps(sequelize, DataTypes);
  var matricula_config = _matricula_config(sequelize, DataTypes);
  var matricula_consecutivos = _matricula_consecutivos(sequelize, DataTypes);
  var matricula_contratos = _matricula_contratos(sequelize, DataTypes);
  var matricula_control = _matricula_control(sequelize, DataTypes);
  var matricula_estudiantes = _matricula_estudiantes(sequelize, DataTypes);
  var matricula_estudiantes_anio = _matricula_estudiantes_anio(sequelize, DataTypes);
  var matricula_estudiantes_apps = _matricula_estudiantes_apps(sequelize, DataTypes);
  var matricula_estudiantes_codeudor = _matricula_estudiantes_codeudor(sequelize, DataTypes);
  var matricula_estudiantes_contratos = _matricula_estudiantes_contratos(sequelize, DataTypes);
  var matricula_estudiantes_contratos_codigos = _matricula_estudiantes_contratos_codigos(sequelize, DataTypes);
  var matricula_estudiantes_datosmedicos = _matricula_estudiantes_datosmedicos(sequelize, DataTypes);
  var matricula_estudiantes_desistimiento = _matricula_estudiantes_desistimiento(sequelize, DataTypes);
  var matricula_estudiantes_documentos = _matricula_estudiantes_documentos(sequelize, DataTypes);
  var matricula_estudiantes_familiares = _matricula_estudiantes_familiares(sequelize, DataTypes);
  var matricula_familiares = _matricula_familiares(sequelize, DataTypes);
  var matricula_meses = _matricula_meses(sequelize, DataTypes);
  var matricula_referidos = _matricula_referidos(sequelize, DataTypes);
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
  var terceros = _terceros(sequelize, DataTypes);
  var test_administracion = _test_administracion(sequelize, DataTypes);
  var test_asig_ejercicios = _test_asig_ejercicios(sequelize, DataTypes);
  var test_asig_ejercicios_resp = _test_asig_ejercicios_resp(sequelize, DataTypes);
  var test_cerebros = _test_cerebros(sequelize, DataTypes);
  var test_ejer_actividad = _test_ejer_actividad(sequelize, DataTypes);
  var test_fecha_publicacion = _test_fecha_publicacion(sequelize, DataTypes);
  var test_general = _test_general(sequelize, DataTypes);
  var test_menusconfig = _test_menusconfig(sequelize, DataTypes);
  var test_permisos_opc = _test_permisos_opc(sequelize, DataTypes);
  var test_preguntas = _test_preguntas(sequelize, DataTypes);
  var test_prsexterno = _test_prsexterno(sequelize, DataTypes);
  var test_recom_actividad = _test_recom_actividad(sequelize, DataTypes);
  var test_resdetalle = _test_resdetalle(sequelize, DataTypes);
  var test_resgeneral = _test_resgeneral(sequelize, DataTypes);
  var test_val_actividad = _test_val_actividad(sequelize, DataTypes);
  var tienda_bodegas = _tienda_bodegas(sequelize, DataTypes);
  var tienda_bodegas_ajustes = _tienda_bodegas_ajustes(sequelize, DataTypes);
  var tienda_bodegas_ajustes_productos = _tienda_bodegas_ajustes_productos(sequelize, DataTypes);
  var tienda_bodegas_movimientos = _tienda_bodegas_movimientos(sequelize, DataTypes);
  var tienda_bodegas_movimientos_productos = _tienda_bodegas_movimientos_productos(sequelize, DataTypes);
  var tienda_bodegas_usuarios = _tienda_bodegas_usuarios(sequelize, DataTypes);
  var tienda_bonos = _tienda_bonos(sequelize, DataTypes);
  var tienda_categorias = _tienda_categorias(sequelize, DataTypes);
  var tienda_categorias_contratos = _tienda_categorias_contratos(sequelize, DataTypes);
  var tienda_compras = _tienda_compras(sequelize, DataTypes);
  var tienda_compras_productos = _tienda_compras_productos(sequelize, DataTypes);
  var tienda_consecutivos = _tienda_consecutivos(sequelize, DataTypes);
  var tienda_cuenta_empresas = _tienda_cuenta_empresas(sequelize, DataTypes);
  var tienda_cupon_autoriza = _tienda_cupon_autoriza(sequelize, DataTypes);
  var tienda_cupones = _tienda_cupones(sequelize, DataTypes);
  var tienda_cupones_concepto = _tienda_cupones_concepto(sequelize, DataTypes);
  var tienda_cupones_concepto_producto = _tienda_cupones_concepto_producto(sequelize, DataTypes);
  var tienda_cupones_controlacademic = _tienda_cupones_controlacademic(sequelize, DataTypes);
  var tienda_cupones_estudiantes = _tienda_cupones_estudiantes(sequelize, DataTypes);
  var tienda_cupones_excel = _tienda_cupones_excel(sequelize, DataTypes);
  var tienda_cupones_general = _tienda_cupones_general(sequelize, DataTypes);
  var tienda_datos_corregir = _tienda_datos_corregir(sequelize, DataTypes);
  var tienda_medios_pago = _tienda_medios_pago(sequelize, DataTypes);
  var tienda_medios_pago_tarjetas = _tienda_medios_pago_tarjetas(sequelize, DataTypes);
  var tienda_pagos_cuentas = _tienda_pagos_cuentas(sequelize, DataTypes);
  var tienda_pagos_documentos = _tienda_pagos_documentos(sequelize, DataTypes);
  var tienda_pagos_lugar = _tienda_pagos_lugar(sequelize, DataTypes);
  var tienda_pagos_tarjetas = _tienda_pagos_tarjetas(sequelize, DataTypes);
  var tienda_parametros = _tienda_parametros(sequelize, DataTypes);
  var tienda_planes_acciones = _tienda_planes_acciones(sequelize, DataTypes);
  var tienda_planes_acciones_reg = _tienda_planes_acciones_reg(sequelize, DataTypes);
  var tienda_planes_acciones_resp = _tienda_planes_acciones_resp(sequelize, DataTypes);
  var tienda_procesos = _tienda_procesos(sequelize, DataTypes);
  var tienda_productos = _tienda_productos(sequelize, DataTypes);
  var tienda_productos_bodega = _tienda_productos_bodega(sequelize, DataTypes);
  var tienda_productos_codigos = _tienda_productos_codigos(sequelize, DataTypes);
  var tienda_productos_compuesto = _tienda_productos_compuesto(sequelize, DataTypes);
  var tienda_productos_imagenes = _tienda_productos_imagenes(sequelize, DataTypes);
  var tienda_productos_relacion = _tienda_productos_relacion(sequelize, DataTypes);
  var tienda_productos_seguimiento = _tienda_productos_seguimiento(sequelize, DataTypes);
  var tienda_resoluciones = _tienda_resoluciones(sequelize, DataTypes);
  var tienda_ventas = _tienda_ventas(sequelize, DataTypes);
  var tienda_ventas_anio_anterior = _tienda_ventas_anio_anterior(sequelize, DataTypes);
  var tienda_ventas_caja = _tienda_ventas_caja(sequelize, DataTypes);
  var tienda_ventas_caja_venta = _tienda_ventas_caja_venta(sequelize, DataTypes);
  var tienda_ventas_comentarios = _tienda_ventas_comentarios(sequelize, DataTypes);
  var tienda_ventas_comentarios_categ = _tienda_ventas_comentarios_categ(sequelize, DataTypes);
  var tienda_ventas_comentarios_visto = _tienda_ventas_comentarios_visto(sequelize, DataTypes);
  var tienda_ventas_cupones = _tienda_ventas_cupones(sequelize, DataTypes);
  var tienda_ventas_cxc = _tienda_ventas_cxc(sequelize, DataTypes);
  var tienda_ventas_cxc_abonos = _tienda_ventas_cxc_abonos(sequelize, DataTypes);
  var tienda_ventas_cxc_comparacion = _tienda_ventas_cxc_comparacion(sequelize, DataTypes);
  var tienda_ventas_productos = _tienda_ventas_productos(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var usuarios_departamentos = _usuarios_departamentos(sequelize, DataTypes);
  var usuarios_opciones = _usuarios_opciones(sequelize, DataTypes);
  var usuarios_perfil = _usuarios_perfil(sequelize, DataTypes);
  var usuarios_perfil_opciones = _usuarios_perfil_opciones(sequelize, DataTypes);
  var usuarios_permisos_opciones = _usuarios_permisos_opciones(sequelize, DataTypes);

  acd_escuelas.belongsToMany(enc_preguntas, { as: 'codpreg_enc_pregunta', through: evl_preg_habilidades, foreignKey: "codmat", otherKey: "codpreg" });
  adm_cargos.belongsToMany(adm_funciones, { as: 'idfuncion_adm_funciones', through: adm_funciones_cargos, foreignKey: "idcargo", otherKey: "idfuncion" });
  adm_empleados.belongsToMany(ctb_novedad_tipos, { as: 'codnov_ctb_novedad_tipos', through: ctb_novedad_user, foreignKey: "codusr", otherKey: "codnov" });
  adm_funciones.belongsToMany(adm_cargos, { as: 'idcargo_adm_cargos', through: adm_funciones_cargos, foreignKey: "idfuncion", otherKey: "idcargo" });
  config_data_opciones.belongsToMany(config_data_preguntas_formulario, { as: 'id_config_config_data_preguntas_formularios', through: config_data_preguntas_opciones, foreignKey: "id_opcion", otherKey: "id_config" });
  config_data_preguntas_formulario.belongsToMany(config_data_opciones, { as: 'id_opcion_config_data_opciones', through: config_data_preguntas_opciones, foreignKey: "id_config", otherKey: "id_opcion" });
  ctb_novedad_tipos.belongsToMany(adm_empleados, { as: 'codusr_adm_empleados', through: ctb_novedad_user, foreignKey: "codnov", otherKey: "codusr" });
  enc_preguntas.belongsToMany(acd_escuelas, { as: 'codmat_acd_escuelas', through: evl_preg_habilidades, foreignKey: "codpreg", otherKey: "codmat" });
  gnr_parametros.belongsToMany(test_ejer_actividad, { as: 'codactv_test_ejer_actividads', through: test_val_actividad, foreignKey: "codevl", otherKey: "codactv" });
  test_ejer_actividad.belongsToMany(gnr_parametros, { as: 'codevl_gnr_parametros', through: test_val_actividad, foreignKey: "codactv", otherKey: "codevl" });
  acd_asig_grp.belongsTo(acd_asignaturas, { as: "codasigrp_acd_asignatura", foreignKey: "codasigrp"});
  acd_asignaturas.hasMany(acd_asig_grp, { as: "acd_asig_grps", foreignKey: "codasigrp"});
  evl_autestudiantes.belongsTo(acd_asignaturas, { as: "codasig_acd_asignatura", foreignKey: "codasig"});
  acd_asignaturas.hasMany(evl_autestudiantes, { as: "evl_autestudiantes", foreignKey: "codasig"});
  evl_configuracion.belongsTo(acd_elementos, { as: "codevl_acd_elemento", foreignKey: "codevl"});
  acd_elementos.hasMany(evl_configuracion, { as: "evl_configuracions", foreignKey: "codevl"});
  evl_evaluadores.belongsTo(acd_elementos, { as: "tipevl_acd_elemento", foreignKey: "tipevl"});
  acd_elementos.hasMany(evl_evaluadores, { as: "evl_evaluadores", foreignKey: "tipevl"});
  gnr_parametros_usuarios.belongsTo(acd_elementos, { as: "tipo_acd_elemento", foreignKey: "tipo"});
  acd_elementos.hasMany(gnr_parametros_usuarios, { as: "gnr_parametros_usuarios", foreignKey: "tipo"});
  acd_escinscritos.belongsTo(acd_escuelas, { as: "codesc_acd_escuela", foreignKey: "codesc"});
  acd_escuelas.hasMany(acd_escinscritos, { as: "acd_escinscritos", foreignKey: "codesc"});
  acd_escuelas_imagenes.belongsTo(acd_escuelas, { as: "codesc_acd_escuela", foreignKey: "codesc"});
  acd_escuelas.hasMany(acd_escuelas_imagenes, { as: "acd_escuelas_imagenes", foreignKey: "codesc"});
  acd_escuelas_sedes.belongsTo(acd_escuelas, { as: "codesc_acd_escuela", foreignKey: "codesc"});
  acd_escuelas.hasMany(acd_escuelas_sedes, { as: "acd_escuelas_sedes", foreignKey: "codesc"});
  acd_escuelas_uniformes.belongsTo(acd_escuelas, { as: "codesc_acd_escuela", foreignKey: "codesc"});
  acd_escuelas.hasMany(acd_escuelas_uniformes, { as: "acd_escuelas_uniformes", foreignKey: "codesc"});
  calendario.belongsTo(acd_escuelas, { as: "codesc_acd_escuela", foreignKey: "codesc"});
  acd_escuelas.hasMany(calendario, { as: "calendarios", foreignKey: "codesc"});
  evl_preg_habilidades.belongsTo(acd_escuelas, { as: "codmat_acd_escuela", foreignKey: "codmat"});
  acd_escuelas.hasMany(evl_preg_habilidades, { as: "evl_preg_habilidades", foreignKey: "codmat"});
  evl_res_habilidades.belongsTo(acd_escuelas, { as: "codmat_acd_escuela", foreignKey: "codmat"});
  acd_escuelas.hasMany(evl_res_habilidades, { as: "evl_res_habilidades", foreignKey: "codmat"});
  acd_escuelas_sedes.belongsTo(acd_escuelas_instructores, { as: "id_instructor_acd_escuelas_instructore", foreignKey: "id_instructor"});
  acd_escuelas_instructores.hasMany(acd_escuelas_sedes, { as: "acd_escuelas_sedes", foreignKey: "id_instructor"});
  tienda_ventas.belongsTo(acd_escuelas_uniformes_fechas, { as: "entrega_fecha_cierre_acd_escuelas_uniformes_fecha", foreignKey: "entrega_fecha_cierre"});
  acd_escuelas_uniformes_fechas.hasMany(tienda_ventas, { as: "tienda_venta", foreignKey: "entrega_fecha_cierre"});
  acd_ortcategoriasgrados.belongsTo(acd_ortcategorias, { as: "categoria_acd_ortcategoria", foreignKey: "categoria"});
  acd_ortcategorias.hasMany(acd_ortcategoriasgrados, { as: "acd_ortcategoriasgrados", foreignKey: "categoria"});
  acd_ortcategoriasidiomas.belongsTo(acd_ortcategorias, { as: "categoria_acd_ortcategoria", foreignKey: "categoria"});
  acd_ortcategorias.hasMany(acd_ortcategoriasidiomas, { as: "acd_ortcategoriasidiomas", foreignKey: "categoria"});
  acd_ortdetalle.belongsTo(acd_ortcategorias, { as: "id_categoria_acd_ortcategoria", foreignKey: "id_categoria"});
  acd_ortcategorias.hasMany(acd_ortdetalle, { as: "acd_ortdetalles", foreignKey: "id_categoria"});
  acd_ortdetalle.belongsTo(acd_ortgeneral, { as: "id_ints_acd_ortgeneral", foreignKey: "id_ints"});
  acd_ortgeneral.hasMany(acd_ortdetalle, { as: "acd_ortdetalles", foreignKey: "id_ints"});
  acd_solicitud_retiro_motivo.belongsTo(acd_solicitud_motivo, { as: "id_motivo_acd_solicitud_motivo", foreignKey: "id_motivo"});
  acd_solicitud_motivo.hasMany(acd_solicitud_retiro_motivo, { as: "acd_solicitud_retiro_motivos", foreignKey: "id_motivo"});
  acd_solicitud_historial.belongsTo(acd_solicitud_retiro, { as: "id_solicitud_acd_solicitud_retiro", foreignKey: "id_solicitud"});
  acd_solicitud_retiro.hasMany(acd_solicitud_historial, { as: "acd_solicitud_historials", foreignKey: "id_solicitud"});
  acd_solicitud_retiro_motivo.belongsTo(acd_solicitud_retiro, { as: "id_solicitud_acd_solicitud_retiro", foreignKey: "id_solicitud"});
  acd_solicitud_retiro.hasMany(acd_solicitud_retiro_motivo, { as: "acd_solicitud_retiro_motivos", foreignKey: "id_solicitud"});
  acd_solicitud_asignacion.belongsTo(acd_solicitud_tipo, { as: "cod_servicio_acd_solicitud_tipo", foreignKey: "cod_servicio"});
  acd_solicitud_tipo.hasMany(acd_solicitud_asignacion, { as: "acd_solicitud_asignacions", foreignKey: "cod_servicio"});
  acd_solicitud_motivo.belongsTo(acd_solicitud_tipo, { as: "id_tipo_acd_solicitud_tipo", foreignKey: "id_tipo"});
  acd_solicitud_tipo.hasMany(acd_solicitud_motivo, { as: "acd_solicitud_motivos", foreignKey: "id_tipo"});
  acd_solicitud_retiro.belongsTo(acd_solicitud_tipo, { as: "cod_servicio_acd_solicitud_tipo", foreignKey: "cod_servicio"});
  acd_solicitud_tipo.hasMany(acd_solicitud_retiro, { as: "acd_solicitud_retiros", foreignKey: "cod_servicio"});
  adm_empleados.belongsTo(adm_bancos, { as: "banco_adm_banco", foreignKey: "banco"});
  adm_bancos.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "banco"});
  ctb_proveedores.belongsTo(adm_bancos, { as: "banco_adm_banco", foreignKey: "banco"});
  adm_bancos.hasMany(ctb_proveedores, { as: "ctb_proveedores", foreignKey: "banco"});
  ctb_proveedores_pagos.belongsTo(adm_bancos, { as: "banco_adm_banco", foreignKey: "banco"});
  adm_bancos.hasMany(ctb_proveedores_pagos, { as: "ctb_proveedores_pagos", foreignKey: "banco"});
  admision_aspirantes.belongsTo(adm_barrios, { as: "barrio_adm_barrio", foreignKey: "barrio"});
  adm_barrios.hasMany(admision_aspirantes, { as: "admision_aspirantes", foreignKey: "barrio"});
  adm_cargos_plataformas.belongsTo(adm_cargos, { as: "idcargo_adm_cargo", foreignKey: "idcargo"});
  adm_cargos.hasMany(adm_cargos_plataformas, { as: "adm_cargos_plataformas", foreignKey: "idcargo"});
  adm_contratos_funciones.belongsTo(adm_cargos, { as: "codcrg_adm_cargo", foreignKey: "codcrg"});
  adm_cargos.hasMany(adm_contratos_funciones, { as: "adm_contratos_funciones", foreignKey: "codcrg"});
  adm_empleados.belongsTo(adm_cargos, { as: "cargo_adm_cargo", foreignKey: "cargo"});
  adm_cargos.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "cargo"});
  adm_funciones_cargos.belongsTo(adm_cargos, { as: "idcargo_adm_cargo", foreignKey: "idcargo"});
  adm_cargos.hasMany(adm_funciones_cargos, { as: "adm_funciones_cargos", foreignKey: "idcargo"});
  acd_ortdetalle.belongsTo(adm_ciudades, { as: "pago_id_ciudad_adm_ciudade", foreignKey: "pago_id_ciudad"});
  adm_ciudades.hasMany(acd_ortdetalle, { as: "acd_ortdetalles", foreignKey: "pago_id_ciudad"});
  adm_empleados.belongsTo(adm_ciudades, { as: "ciudad_nacimiento_adm_ciudade", foreignKey: "ciudad_nacimiento"});
  adm_ciudades.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "ciudad_nacimiento"});
  admision_aspirantes.belongsTo(adm_ciudades, { as: "ident_ciudad_adm_ciudade", foreignKey: "ident_ciudad"});
  adm_ciudades.hasMany(admision_aspirantes, { as: "admision_aspirantes", foreignKey: "ident_ciudad"});
  admision_aspirantes.belongsTo(adm_ciudades, { as: "ciudad_nacimiento_adm_ciudade", foreignKey: "ciudad_nacimiento"});
  adm_ciudades.hasMany(admision_aspirantes, { as: "ciudad_nacimiento_admision_aspirantes", foreignKey: "ciudad_nacimiento"});
  admision_formulario.belongsTo(adm_ciudades, { as: "id_ciudad_adm_ciudade", foreignKey: "id_ciudad"});
  adm_ciudades.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_ciudad"});
  ctb_proveedores.belongsTo(adm_ciudades, { as: "ciudad_adm_ciudade", foreignKey: "ciudad"});
  adm_ciudades.hasMany(ctb_proveedores, { as: "ctb_proveedores", foreignKey: "ciudad"});
  matricula_estudiantes.belongsTo(adm_ciudades, { as: "ciu_nacimiento_adm_ciudade", foreignKey: "ciu_nacimiento"});
  adm_ciudades.hasMany(matricula_estudiantes, { as: "matricula_estudiantes", foreignKey: "ciu_nacimiento"});
  matricula_estudiantes.belongsTo(adm_ciudades, { as: "ciu_residencia_adm_ciudade", foreignKey: "ciu_residencia"});
  adm_ciudades.hasMany(matricula_estudiantes, { as: "ciu_residencia_matricula_estudiantes", foreignKey: "ciu_residencia"});
  matricula_familiares.belongsTo(adm_ciudades, { as: "ciudad_adm_ciudade", foreignKey: "ciudad"});
  adm_ciudades.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "ciudad"});
  adm_empleados_contrato.belongsTo(adm_contratos_modelos, { as: "mod_contrato_confidencialidad_adm_contratos_modelo", foreignKey: "mod_contrato_confidencialidad"});
  adm_contratos_modelos.hasMany(adm_empleados_contrato, { as: "adm_empleados_contratos", foreignKey: "mod_contrato_confidencialidad"});
  acd_ortdetalle.belongsTo(adm_departamentos, { as: "pago_id_dpto_adm_departamento", foreignKey: "pago_id_dpto"});
  adm_departamentos.hasMany(acd_ortdetalle, { as: "acd_ortdetalles", foreignKey: "pago_id_dpto"});
  adm_ciudades.belongsTo(adm_departamentos, { as: "id_departamento_adm_departamento", foreignKey: "id_departamento"});
  adm_departamentos.hasMany(adm_ciudades, { as: "adm_ciudades", foreignKey: "id_departamento"});
  admision_aspirantes.belongsTo(adm_departamentos, { as: "ident_dpto_adm_departamento", foreignKey: "ident_dpto"});
  adm_departamentos.hasMany(admision_aspirantes, { as: "admision_aspirantes", foreignKey: "ident_dpto"});
  admision_aspirantes.belongsTo(adm_departamentos, { as: "dpto_nacimiento_adm_departamento", foreignKey: "dpto_nacimiento"});
  adm_departamentos.hasMany(admision_aspirantes, { as: "dpto_nacimiento_admision_aspirantes", foreignKey: "dpto_nacimiento"});
  admision_formulario.belongsTo(adm_departamentos, { as: "id_dpto_adm_departamento", foreignKey: "id_dpto"});
  adm_departamentos.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_dpto"});
  matricula_estudiantes.belongsTo(adm_departamentos, { as: "dep_nacimiento_adm_departamento", foreignKey: "dep_nacimiento"});
  adm_departamentos.hasMany(matricula_estudiantes, { as: "matricula_estudiantes", foreignKey: "dep_nacimiento"});
  matricula_estudiantes.belongsTo(adm_departamentos, { as: "dep_residencia_adm_departamento", foreignKey: "dep_residencia"});
  adm_departamentos.hasMany(matricula_estudiantes, { as: "dep_residencia_matricula_estudiantes", foreignKey: "dep_residencia"});
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
  config_entrevistas_empleados.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(config_entrevistas_empleados, { as: "config_entrevistas_empleados", foreignKey: "codemp"});
  config_grados_grupos_anios.belongsTo(adm_empleados, { as: "id_gerente_adm_empleado", foreignKey: "id_gerente"});
  adm_empleados.hasMany(config_grados_grupos_anios, { as: "config_grados_grupos_anios", foreignKey: "id_gerente"});
  config_grados_grupos_anios.belongsTo(adm_empleados, { as: "id_coordinador_adm_empleado", foreignKey: "id_coordinador"});
  adm_empleados.hasMany(config_grados_grupos_anios, { as: "id_coordinador_config_grados_grupos_anios", foreignKey: "id_coordinador"});
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
  evl_asig_evaluaciones.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(evl_asig_evaluaciones, { as: "evl_asig_evaluaciones", foreignKey: "codemp"});
  evl_asig_evaluaciones.belongsTo(adm_empleados, { as: "codevaludo_adm_empleado", foreignKey: "codevaludo"});
  adm_empleados.hasMany(evl_asig_evaluaciones, { as: "codevaludo_evl_asig_evaluaciones", foreignKey: "codevaludo"});
  evl_autempleados.belongsTo(adm_empleados, { as: "codevld_adm_empleado", foreignKey: "codevld"});
  adm_empleados.hasMany(evl_autempleados, { as: "evl_autempleados", foreignKey: "codevld"});
  gnr_parametros_usuarios.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(gnr_parametros_usuarios, { as: "gnr_parametros_usuarios", foreignKey: "codemp"});
  pqrs.belongsTo(adm_empleados, { as: "id_empleado_adm_empleado", foreignKey: "id_empleado"});
  adm_empleados.hasMany(pqrs, { as: "pqrs", foreignKey: "id_empleado"});
  test_asig_ejercicios.belongsTo(adm_empleados, { as: "id_empleado_adm_empleado", foreignKey: "id_empleado"});
  adm_empleados.hasMany(test_asig_ejercicios, { as: "test_asig_ejercicios", foreignKey: "id_empleado"});
  test_asig_ejercicios_resp.belongsTo(adm_empleados, { as: "id_empleado_adm_empleado", foreignKey: "id_empleado"});
  adm_empleados.hasMany(test_asig_ejercicios_resp, { as: "test_asig_ejercicios_resps", foreignKey: "id_empleado"});
  test_asig_ejercicios_resp.belongsTo(adm_empleados, { as: "id_resp_empleado_adm_empleado", foreignKey: "id_resp_empleado"});
  adm_empleados.hasMany(test_asig_ejercicios_resp, { as: "id_resp_empleado_test_asig_ejercicios_resps", foreignKey: "id_resp_empleado"});
  test_permisos_opc.belongsTo(adm_empleados, { as: "codempl_adm_empleado", foreignKey: "codempl"});
  adm_empleados.hasMany(test_permisos_opc, { as: "test_permisos_opcs", foreignKey: "codempl"});
  test_resgeneral.belongsTo(adm_empleados, { as: "id_empleado_adm_empleado", foreignKey: "id_empleado"});
  adm_empleados.hasMany(test_resgeneral, { as: "test_resgenerals", foreignKey: "id_empleado"});
  usuarios.belongsTo(adm_empleados, { as: "codemp_adm_empleado", foreignKey: "codemp"});
  adm_empleados.hasMany(usuarios, { as: "usuarios", foreignKey: "codemp"});
  adm_contratos_funciones.belongsTo(adm_empleados_contrato, { as: "codcontrato_adm_empleados_contrato", foreignKey: "codcontrato"});
  adm_empleados_contrato.hasMany(adm_contratos_funciones, { as: "adm_contratos_funciones", foreignKey: "codcontrato"});
  adm_empleados.belongsTo(adm_empleados_contrato, { as: "contratos_adm_empleados_contrato", foreignKey: "contratos"});
  adm_empleados_contrato.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "contratos"});
  matricula_estudiantes_datosmedicos.belongsTo(adm_eps, { as: "Seguro_EPS_adm_ep", foreignKey: "Seguro_EPS"});
  adm_eps.hasMany(matricula_estudiantes_datosmedicos, { as: "matricula_estudiantes_datosmedicos", foreignKey: "Seguro_EPS"});
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
  acd_ortdetalle.belongsTo(adm_paises, { as: "pago_id_pais_adm_paise", foreignKey: "pago_id_pais"});
  adm_paises.hasMany(acd_ortdetalle, { as: "acd_ortdetalles", foreignKey: "pago_id_pais"});
  adm_ciudades.belongsTo(adm_paises, { as: "paises_Codigo_adm_paise", foreignKey: "paises_Codigo"});
  adm_paises.hasMany(adm_ciudades, { as: "adm_ciudades", foreignKey: "paises_Codigo"});
  adm_departamentos.belongsTo(adm_paises, { as: "id_pais_adm_paise", foreignKey: "id_pais"});
  adm_paises.hasMany(adm_departamentos, { as: "adm_departamentos", foreignKey: "id_pais"});
  adm_empleados.belongsTo(adm_paises, { as: "pais_nacimiento_adm_paise", foreignKey: "pais_nacimiento"});
  adm_paises.hasMany(adm_empleados, { as: "adm_empleados", foreignKey: "pais_nacimiento"});
  admision_aspirantes.belongsTo(adm_paises, { as: "ident_pais_adm_paise", foreignKey: "ident_pais"});
  adm_paises.hasMany(admision_aspirantes, { as: "admision_aspirantes", foreignKey: "ident_pais"});
  admision_aspirantes.belongsTo(adm_paises, { as: "pais_nacimiento_adm_paise", foreignKey: "pais_nacimiento"});
  adm_paises.hasMany(admision_aspirantes, { as: "pais_nacimiento_admision_aspirantes", foreignKey: "pais_nacimiento"});
  admision_formulario.belongsTo(adm_paises, { as: "id_pais_adm_paise", foreignKey: "id_pais"});
  adm_paises.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_pais"});
  ctb_proveedores.belongsTo(adm_paises, { as: "pais_adm_paise", foreignKey: "pais"});
  adm_paises.hasMany(ctb_proveedores, { as: "ctb_proveedores", foreignKey: "pais"});
  matricula_estudiantes.belongsTo(adm_paises, { as: "pais_nacimiento_adm_paise", foreignKey: "pais_nacimiento"});
  adm_paises.hasMany(matricula_estudiantes, { as: "matricula_estudiantes", foreignKey: "pais_nacimiento"});
  matricula_estudiantes.belongsTo(adm_paises, { as: "pais_residencia_adm_paise", foreignKey: "pais_residencia"});
  adm_paises.hasMany(matricula_estudiantes, { as: "pais_residencia_matricula_estudiantes", foreignKey: "pais_residencia"});
  matricula_familiares.belongsTo(adm_paises, { as: "pais_adm_paise", foreignKey: "pais"});
  adm_paises.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "pais"});
  adm_cargos_plataformas.belongsTo(adm_plataformas, { as: "idPlataforma_adm_plataforma", foreignKey: "idPlataforma"});
  adm_plataformas.hasMany(adm_cargos_plataformas, { as: "adm_cargos_plataformas", foreignKey: "idPlataforma"});
  adm_empleados_plataformas.belongsTo(adm_plataformas, { as: "idPlataforma_adm_plataforma", foreignKey: "idPlataforma"});
  adm_plataformas.hasMany(adm_empleados_plataformas, { as: "adm_empleados_plataformas", foreignKey: "idPlataforma"});
  acd_asig_grp.belongsTo(adm_sedes, { as: "codsed_adm_sede", foreignKey: "codsed"});
  adm_sedes.hasMany(acd_asig_grp, { as: "acd_asig_grps", foreignKey: "codsed"});
  acd_escuelas_fechas.belongsTo(adm_sedes, { as: "codsed_adm_sede", foreignKey: "codsed"});
  adm_sedes.hasMany(acd_escuelas_fechas, { as: "acd_escuelas_fechas", foreignKey: "codsed"});
  acd_escuelas_sedes.belongsTo(adm_sedes, { as: "codsed_adm_sede", foreignKey: "codsed"});
  adm_sedes.hasMany(acd_escuelas_sedes, { as: "acd_escuelas_sedes", foreignKey: "codsed"});
  adm_dependencias.belongsTo(adm_sedes, { as: "depsed_adm_sede", foreignKey: "depsed"});
  adm_sedes.hasMany(adm_dependencias, { as: "adm_dependencia", foreignKey: "depsed"});
  admision_aspirantes_entrevistas.belongsTo(adm_sedes, { as: "sede_adm_sede", foreignKey: "sede"});
  adm_sedes.hasMany(admision_aspirantes_entrevistas, { as: "admision_aspirantes_entrevista", foreignKey: "sede"});
  admision_visitas.belongsTo(adm_sedes, { as: "sede_adm_sede", foreignKey: "sede"});
  adm_sedes.hasMany(admision_visitas, { as: "admision_visita", foreignKey: "sede"});
  calendario.belongsTo(adm_sedes, { as: "codsed_adm_sede", foreignKey: "codsed"});
  adm_sedes.hasMany(calendario, { as: "calendarios", foreignKey: "codsed"});
  config_grados.belongsTo(adm_sedes, { as: "codsed_adm_sede", foreignKey: "codsed"});
  adm_sedes.hasMany(config_grados, { as: "config_grados", foreignKey: "codsed"});
  ctb_proveedores_pagos.belongsTo(adm_sedes, { as: "codsed_adm_sede", foreignKey: "codsed"});
  adm_sedes.hasMany(ctb_proveedores_pagos, { as: "ctb_proveedores_pagos", foreignKey: "codsed"});
  pqrs.belongsTo(adm_sedes, { as: "sede_adm_sede", foreignKey: "sede"});
  adm_sedes.hasMany(pqrs, { as: "pqrs", foreignKey: "sede"});
  admision_aspirantes_anio.belongsTo(admision_aspirantes, { as: "id_aspirante_admision_aspirante", foreignKey: "id_aspirante"});
  admision_aspirantes.hasMany(admision_aspirantes_anio, { as: "admision_aspirantes_anios", foreignKey: "id_aspirante"});
  admision_aspirantes_entrevistas.belongsTo(admision_aspirantes, { as: "id_aspirante_info_admision_aspirante", foreignKey: "id_aspirante_info"});
  admision_aspirantes.hasMany(admision_aspirantes_entrevistas, { as: "admision_aspirantes_entrevista", foreignKey: "id_aspirante_info"});
  admision_aspirantes_familiares.belongsTo(admision_aspirantes, { as: "id_aspirante_admision_aspirante", foreignKey: "id_aspirante"});
  admision_aspirantes.hasMany(admision_aspirantes_familiares, { as: "admision_aspirantes_familiares", foreignKey: "id_aspirante"});
  admision_formulario.belongsTo(admision_aspirantes, { as: "id_aspirante_admision_aspirante", foreignKey: "id_aspirante"});
  admision_aspirantes.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_aspirante"});
  admision_aspirantes_documentos.belongsTo(admision_aspirantes_anio, { as: "id_admision_admision_aspirantes_anio", foreignKey: "id_admision"});
  admision_aspirantes_anio.hasMany(admision_aspirantes_documentos, { as: "admision_aspirantes_documentos", foreignKey: "id_admision"});
  admision_aspirantes_entrevistas.belongsTo(admision_aspirantes_anio, { as: "id_aspirante_admision_aspirantes_anio", foreignKey: "id_aspirante"});
  admision_aspirantes_anio.hasMany(admision_aspirantes_entrevistas, { as: "admision_aspirantes_entrevista", foreignKey: "id_aspirante"});
  admision_aspirantes_examen.belongsTo(admision_aspirantes_anio, { as: "id_aspirante_admision_aspirantes_anio", foreignKey: "id_aspirante"});
  admision_aspirantes_anio.hasOne(admision_aspirantes_examen, { as: "admision_aspirantes_examen", foreignKey: "id_aspirante"});
  admision_aspirantes_examen_ingles.belongsTo(admision_aspirantes_anio, { as: "id_aspirante_admision_aspirantes_anio", foreignKey: "id_aspirante"});
  admision_aspirantes_anio.hasOne(admision_aspirantes_examen_ingles, { as: "admision_aspirantes_examen_ingle", foreignKey: "id_aspirante"});
  admision_formulario.belongsTo(admision_aspirantes_anio, { as: "id_admision_admision_aspirantes_anio", foreignKey: "id_admision"});
  admision_aspirantes_anio.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_admision"});
  test_resgeneral.belongsTo(admision_aspirantes_anio, { as: "id_aspirante_admision_aspirantes_anio", foreignKey: "id_aspirante"});
  admision_aspirantes_anio.hasMany(test_resgeneral, { as: "test_resgenerals", foreignKey: "id_aspirante"});
  admision_aspirantes_entrevistas_compromisos.belongsTo(admision_aspirantes_entrevistas, { as: "id_entrevista_admision_aspirantes_entrevista", foreignKey: "id_entrevista"});
  admision_aspirantes_entrevistas.hasMany(admision_aspirantes_entrevistas_compromisos, { as: "admision_aspirantes_entrevistas_compromisos", foreignKey: "id_entrevista"});
  admision_aspirantes_examen_ingles.belongsTo(admision_aspirantes_entrevistas, { as: "id_entrevista_admision_aspirantes_entrevista", foreignKey: "id_entrevista"});
  admision_aspirantes_entrevistas.hasMany(admision_aspirantes_examen_ingles, { as: "admision_aspirantes_examen_ingles", foreignKey: "id_entrevista"});
  admision_aspirantes_examen_ingles_compro.belongsTo(admision_aspirantes_examen_ingles, { as: "id_examen_admision_aspirantes_examen_ingle", foreignKey: "id_examen"});
  admision_aspirantes_examen_ingles.hasMany(admision_aspirantes_examen_ingles_compro, { as: "admision_aspirantes_examen_ingles_compros", foreignKey: "id_examen"});
  admision_formulario.belongsTo(admision_config, { as: "id_admision_config_admision_config", foreignKey: "id_admision_config"});
  admision_config.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_admision_config"});
  admision_aspirantes_examen_ingles.belongsTo(admision_config_examen_ingles, { as: "id_examen_admision_config_examen_ingle", foreignKey: "id_examen"});
  admision_config_examen_ingles.hasMany(admision_aspirantes_examen_ingles, { as: "admision_aspirantes_examen_ingles", foreignKey: "id_examen"});
  admision_aspirantes_examen_ingles_compro.belongsTo(admision_config_examen_ingles_compro, { as: "id_compromiso_admision_config_examen_ingles_compro", foreignKey: "id_compromiso"});
  admision_config_examen_ingles_compro.hasMany(admision_aspirantes_examen_ingles_compro, { as: "admision_aspirantes_examen_ingles_compros", foreignKey: "id_compromiso"});
  admision_aspirantes_examen_ingles.belongsTo(admision_config_examen_ingles_tipos_recurs, { as: "nivelacion_recurso_admision_config_examen_ingles_tipos_recur", foreignKey: "nivelacion_recurso"});
  admision_config_examen_ingles_tipos_recurs.hasMany(admision_aspirantes_examen_ingles, { as: "admision_aspirantes_examen_ingles", foreignKey: "nivelacion_recurso"});
  admision_aspirantes_familiares.belongsTo(admision_familiares, { as: "id_familiar_admision_familiare", foreignKey: "id_familiar"});
  admision_familiares.hasMany(admision_aspirantes_familiares, { as: "admision_aspirantes_familiares", foreignKey: "id_familiar"});
  test_resgeneral.belongsTo(admision_familiares, { as: "id_asp_familiar_admision_familiare", foreignKey: "id_asp_familiar"});
  admision_familiares.hasMany(test_resgeneral, { as: "test_resgenerals", foreignKey: "id_asp_familiar"});
  admision_formulario_caja.belongsTo(admision_formulario, { as: "id_formulario_admision_formulario", foreignKey: "id_formulario"});
  admision_formulario.hasMany(admision_formulario_caja, { as: "admision_formulario_cajas", foreignKey: "id_formulario"});
  admision_aspirantes_entrevistas.belongsTo(admision_visitas, { as: "id_visita_admision_visita", foreignKey: "id_visita"});
  admision_visitas.hasMany(admision_aspirantes_entrevistas, { as: "admision_aspirantes_entrevista", foreignKey: "id_visita"});
  calendario.belongsTo(calendario_categorias, { as: "id_categoria_calendario_categoria", foreignKey: "id_categoria"});
  calendario_categorias.hasMany(calendario, { as: "calendarios", foreignKey: "id_categoria"});
  acd_escinscritos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(acd_escinscritos, { as: "acd_escinscritos", foreignKey: "id_anio"});
  acd_escuelas_fechas.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(acd_escuelas_fechas, { as: "acd_escuelas_fechas", foreignKey: "id_anio"});
  acd_escuelas_sedes.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(acd_escuelas_sedes, { as: "acd_escuelas_sedes", foreignKey: "id_anio"});
  acd_ortdetalle.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(acd_ortdetalle, { as: "acd_ortdetalles", foreignKey: "id_anio"});
  acd_ortgeneral.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(acd_ortgeneral, { as: "acd_ortgenerals", foreignKey: "id_anio"});
  acd_solicitud_retiro.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(acd_solicitud_retiro, { as: "acd_solicitud_retiros", foreignKey: "id_anio"});
  adm_grupos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(adm_grupos, { as: "adm_grupos", foreignKey: "id_anio"});
  admision_aspirantes_anio.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(admision_aspirantes_anio, { as: "admision_aspirantes_anios", foreignKey: "id_anio"});
  admision_config.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(admision_config, { as: "admision_configs", foreignKey: "id_anio"});
  admision_config_documentos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(admision_config_documentos, { as: "admision_config_documentos", foreignKey: "id_anio"});
  config_grados_conceptos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(config_grados_conceptos, { as: "config_grados_conceptos", foreignKey: "id_anio"});
  config_grados_cupos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(config_grados_cupos, { as: "config_grados_cupos", foreignKey: "id_anio"});
  config_grados_grupos_anios.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(config_grados_grupos_anios, { as: "config_grados_grupos_anios", foreignKey: "id_anio"});
  config_periodo.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(config_periodo, { as: "config_periodos", foreignKey: "id_anio"});
  control_contratos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(control_contratos, { as: "control_contratos", foreignKey: "id_anio"});
  evl_asig_evaluaciones.belongsTo(config_anios, { as: "anio_config_anio", foreignKey: "anio"});
  config_anios.hasMany(evl_asig_evaluaciones, { as: "evl_asig_evaluaciones", foreignKey: "anio"});
  matricula_config.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(matricula_config, { as: "matricula_configs", foreignKey: "id_anio"});
  matricula_config.belongsTo(config_anios, { as: "id_anio_ant_config_anio", foreignKey: "id_anio_ant"});
  config_anios.hasMany(matricula_config, { as: "id_anio_ant_matricula_configs", foreignKey: "id_anio_ant"});
  matricula_contratos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(matricula_contratos, { as: "matricula_contratos", foreignKey: "id_anio"});
  matricula_estudiantes_anio.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(matricula_estudiantes_anio, { as: "matricula_estudiantes_anios", foreignKey: "id_anio"});
  matricula_meses.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(matricula_meses, { as: "matricula_meses", foreignKey: "id_anio"});
  matricula_referidos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(matricula_referidos, { as: "matricula_referidos", foreignKey: "id_anio"});
  test_asig_ejercicios.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(test_asig_ejercicios, { as: "test_asig_ejercicios", foreignKey: "id_anio"});
  test_asig_ejercicios_resp.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(test_asig_ejercicios_resp, { as: "test_asig_ejercicios_resps", foreignKey: "id_anio"});
  tienda_cupones.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(tienda_cupones, { as: "tienda_cupones", foreignKey: "id_anio"});
  tienda_cupones_concepto_producto.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(tienda_cupones_concepto_producto, { as: "tienda_cupones_concepto_productos", foreignKey: "id_anio"});
  tienda_cupones_general.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(tienda_cupones_general, { as: "tienda_cupones_generals", foreignKey: "id_anio"});
  tienda_productos_bodega.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(tienda_productos_bodega, { as: "tienda_productos_bodegas", foreignKey: "id_anio"});
  tienda_ventas_productos.belongsTo(config_anios, { as: "id_anio_config_anio", foreignKey: "id_anio"});
  config_anios.hasMany(tienda_ventas_productos, { as: "tienda_ventas_productos", foreignKey: "id_anio"});
  admision_familiares.belongsTo(config_ciudades, { as: "ident_expedicion_config_ciudade", foreignKey: "ident_expedicion"});
  config_ciudades.hasMany(admision_familiares, { as: "admision_familiares", foreignKey: "ident_expedicion"});
  admision_familiares.belongsTo(config_ciudades, { as: "lugar_nacimiento_config_ciudade", foreignKey: "lugar_nacimiento"});
  config_ciudades.hasMany(admision_familiares, { as: "lugar_nacimiento_admision_familiares", foreignKey: "lugar_nacimiento"});
  matricula_estudiantes.belongsTo(config_ciudades, { as: "ident_expedicion_config_ciudade", foreignKey: "ident_expedicion"});
  config_ciudades.hasMany(matricula_estudiantes, { as: "matricula_estudiantes", foreignKey: "ident_expedicion"});
  matricula_familiares.belongsTo(config_ciudades, { as: "ident_expedicion_config_ciudade", foreignKey: "ident_expedicion"});
  config_ciudades.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "ident_expedicion"});
  matricula_familiares.belongsTo(config_ciudades, { as: "lugar_nacimiento_config_ciudade", foreignKey: "lugar_nacimiento"});
  config_ciudades.hasMany(matricula_familiares, { as: "lugar_nacimiento_matricula_familiares", foreignKey: "lugar_nacimiento"});
  config_data_preguntas_formulario.belongsTo(config_data_formulario, { as: "id_formulario_config_data_formulario", foreignKey: "id_formulario"});
  config_data_formulario.hasMany(config_data_preguntas_formulario, { as: "config_data_preguntas_formularios", foreignKey: "id_formulario"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "genero_config_data_opcione", foreignKey: "genero"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "admision_aspirantes", foreignKey: "genero"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "estrato_config_data_opcione", foreignKey: "estrato"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "estrato_admision_aspirantes", foreignKey: "estrato"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "idioma_habla_casa_config_data_opcione", foreignKey: "idioma_habla_casa"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "idioma_habla_casa_admision_aspirantes", foreignKey: "idioma_habla_casa"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "idioma_habla_estudiante_config_data_opcione", foreignKey: "idioma_habla_estudiante"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "idioma_habla_estudiante_admision_aspirantes", foreignKey: "idioma_habla_estudiante"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "numero_hermanos_config_data_opcione", foreignKey: "numero_hermanos"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "numero_hermanos_admision_aspirantes", foreignKey: "numero_hermanos"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "puesto_entre_hermanos_config_data_opcione", foreignKey: "puesto_entre_hermanos"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "puesto_entre_hermanos_admision_aspirantes", foreignKey: "puesto_entre_hermanos"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "estado_civil_padres_config_data_opcione", foreignKey: "estado_civil_padres"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "estado_civil_padres_admision_aspirantes", foreignKey: "estado_civil_padres"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "tipo_permanencia_config_data_opcione", foreignKey: "tipo_permanencia"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "tipo_permanencia_admision_aspirantes", foreignKey: "tipo_permanencia"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "tipo_sangre_config_data_opcione", foreignKey: "tipo_sangre"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "tipo_sangre_admision_aspirantes", foreignKey: "tipo_sangre"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "religion_config_data_opcione", foreignKey: "religion"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "religion_admision_aspirantes", foreignKey: "religion"});
  admision_aspirantes.belongsTo(config_data_opciones, { as: "tipo_vivienda_config_data_opcione", foreignKey: "tipo_vivienda"});
  config_data_opciones.hasMany(admision_aspirantes, { as: "tipo_vivienda_admision_aspirantes", foreignKey: "tipo_vivienda"});
  admision_familiares.belongsTo(config_data_opciones, { as: "tipo_trabajo_config_data_opcione", foreignKey: "tipo_trabajo"});
  config_data_opciones.hasMany(admision_familiares, { as: "admision_familiares", foreignKey: "tipo_trabajo"});
  admision_familiares.belongsTo(config_data_opciones, { as: "industria_empresa_config_data_opcione", foreignKey: "industria_empresa"});
  config_data_opciones.hasMany(admision_familiares, { as: "industria_empresa_admision_familiares", foreignKey: "industria_empresa"});
  admision_familiares.belongsTo(config_data_opciones, { as: "vive_con_aspirante_config_data_opcione", foreignKey: "vive_con_aspirante"});
  config_data_opciones.hasMany(admision_familiares, { as: "vive_con_aspirante_admision_familiares", foreignKey: "vive_con_aspirante"});
  admision_familiares.belongsTo(config_data_opciones, { as: "exalumno_config_data_opcione", foreignKey: "exalumno"});
  config_data_opciones.hasMany(admision_familiares, { as: "exalumno_admision_familiares", foreignKey: "exalumno"});
  config_data_preguntas_opciones.belongsTo(config_data_opciones, { as: "id_opcion_config_data_opcione", foreignKey: "id_opcion"});
  config_data_opciones.hasMany(config_data_preguntas_opciones, { as: "config_data_preguntas_opciones", foreignKey: "id_opcion"});
  config_data_preguntas_formulario.belongsTo(config_data_preguntas, { as: "id_pregunta_config_data_pregunta", foreignKey: "id_pregunta"});
  config_data_preguntas.hasMany(config_data_preguntas_formulario, { as: "config_data_preguntas_formularios", foreignKey: "id_pregunta"});
  config_data_preguntas_opciones.belongsTo(config_data_preguntas_formulario, { as: "id_config_config_data_preguntas_formulario", foreignKey: "id_config"});
  config_data_preguntas_formulario.hasMany(config_data_preguntas_opciones, { as: "config_data_preguntas_opciones", foreignKey: "id_config"});
  admision_aspirantes_documentos.belongsTo(config_documentos, { as: "id_documento_config_documento", foreignKey: "id_documento"});
  config_documentos.hasMany(admision_aspirantes_documentos, { as: "admision_aspirantes_documentos", foreignKey: "id_documento"});
  admision_config_documentos.belongsTo(config_documentos, { as: "id_documento_config_documento", foreignKey: "id_documento"});
  config_documentos.hasMany(admision_config_documentos, { as: "admision_config_documentos", foreignKey: "id_documento"});
  config_empresas_tranferencia.belongsTo(config_empresas, { as: "id_empresa_config_empresa", foreignKey: "id_empresa"});
  config_empresas.hasMany(config_empresas_tranferencia, { as: "config_empresas_tranferencia", foreignKey: "id_empresa"});
  tienda_cuenta_empresas.belongsTo(config_empresas, { as: "id_empresa_config_empresa", foreignKey: "id_empresa"});
  config_empresas.hasMany(tienda_cuenta_empresas, { as: "tienda_cuenta_empresas", foreignKey: "id_empresa"});
  tienda_ventas.belongsTo(config_empresas, { as: "id_empresa_config_empresa", foreignKey: "id_empresa"});
  config_empresas.hasMany(tienda_ventas, { as: "tienda_venta", foreignKey: "id_empresa"});
  admision_aspirantes_entrevistas.belongsTo(config_entrevistas, { as: "id_entrevista_config_entrevista", foreignKey: "id_entrevista"});
  config_entrevistas.hasMany(admision_aspirantes_entrevistas, { as: "admision_aspirantes_entrevista", foreignKey: "id_entrevista"});
  admision_config_entrevistas.belongsTo(config_entrevistas, { as: "id_entrevista_config_entrevista", foreignKey: "id_entrevista"});
  config_entrevistas.hasMany(admision_config_entrevistas, { as: "admision_config_entrevista", foreignKey: "id_entrevista"});
  admision_config_entrevistas.belongsTo(config_entrevistas, { as: "depende_config_entrevista", foreignKey: "depende"});
  config_entrevistas.hasMany(admision_config_entrevistas, { as: "depende_admision_config_entrevista", foreignKey: "depende"});
  config_entrevistas_empleados.belongsTo(config_entrevistas, { as: "id_entrevista_config_entrevista", foreignKey: "id_entrevista"});
  config_entrevistas.hasMany(config_entrevistas_empleados, { as: "config_entrevistas_empleados", foreignKey: "id_entrevista"});
  acd_ortcategoriasgrados.belongsTo(config_grados, { as: "grado_config_grado", foreignKey: "grado"});
  config_grados.hasMany(acd_ortcategoriasgrados, { as: "acd_ortcategoriasgrados", foreignKey: "grado"});
  acd_ortdetalle.belongsTo(config_grados, { as: "grado_config_grado", foreignKey: "grado"});
  config_grados.hasMany(acd_ortdetalle, { as: "acd_ortdetalles", foreignKey: "grado"});
  acd_solicitud_asignacion.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(acd_solicitud_asignacion, { as: "acd_solicitud_asignacions", foreignKey: "id_grado"});
  admision_aspirantes.belongsTo(config_grados, { as: "familiares_grado_config_grado", foreignKey: "familiares_grado"});
  config_grados.hasMany(admision_aspirantes, { as: "admision_aspirantes", foreignKey: "familiares_grado"});
  admision_aspirantes_anio.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(admision_aspirantes_anio, { as: "admision_aspirantes_anios", foreignKey: "id_grado"});
  admision_aspirantes_anio.belongsTo(config_grados, { as: "id_grado_admitido_config_grado", foreignKey: "id_grado_admitido"});
  config_grados.hasMany(admision_aspirantes_anio, { as: "id_grado_admitido_admision_aspirantes_anios", foreignKey: "id_grado_admitido"});
  admision_config_documentos.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(admision_config_documentos, { as: "admision_config_documentos", foreignKey: "id_grado"});
  admision_config_entrevistas.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(admision_config_entrevistas, { as: "admision_config_entrevista", foreignKey: "id_grado"});
  admision_formulario.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_grado"});
  config_entrevistas_empleados.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(config_entrevistas_empleados, { as: "config_entrevistas_empleados", foreignKey: "id_grado"});
  config_grados_apps.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(config_grados_apps, { as: "config_grados_apps", foreignKey: "id_grado"});
  config_grados_conceptos.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(config_grados_conceptos, { as: "config_grados_conceptos", foreignKey: "id_grado"});
  config_grados_contratos.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(config_grados_contratos, { as: "config_grados_contratos", foreignKey: "id_grado"});
  config_grados_cupos.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(config_grados_cupos, { as: "config_grados_cupos", foreignKey: "id_grado"});
  config_grados_grupos_anios.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(config_grados_grupos_anios, { as: "config_grados_grupos_anios", foreignKey: "id_grado"});
  control_contratos_grados.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(control_contratos_grados, { as: "control_contratos_grados", foreignKey: "id_grado"});
  evl_autestudiantes.belongsTo(config_grados, { as: "codgrd_config_grado", foreignKey: "codgrd"});
  config_grados.hasMany(evl_autestudiantes, { as: "evl_autestudiantes", foreignKey: "codgrd"});
  matricula_referidos.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(matricula_referidos, { as: "matricula_referidos", foreignKey: "id_grado"});
  test_asig_ejercicios.belongsTo(config_grados, { as: "grado_config_grado", foreignKey: "grado"});
  config_grados.hasMany(test_asig_ejercicios, { as: "test_asig_ejercicios", foreignKey: "grado"});
  test_asig_ejercicios_resp.belongsTo(config_grados, { as: "grado_config_grado", foreignKey: "grado"});
  config_grados.hasMany(test_asig_ejercicios_resp, { as: "test_asig_ejercicios_resps", foreignKey: "grado"});
  test_fecha_publicacion.belongsTo(config_grados, { as: "grado_config_grado", foreignKey: "grado"});
  config_grados.hasMany(test_fecha_publicacion, { as: "test_fecha_publicacions", foreignKey: "grado"});
  tienda_cupones.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(tienda_cupones, { as: "tienda_cupones", foreignKey: "id_grado"});
  tienda_productos_bodega.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(tienda_productos_bodega, { as: "tienda_productos_bodegas", foreignKey: "id_grado"});
  tienda_ventas_productos.belongsTo(config_grados, { as: "id_grado_config_grado", foreignKey: "id_grado"});
  config_grados.hasMany(tienda_ventas_productos, { as: "tienda_ventas_productos", foreignKey: "id_grado"});
  acd_asig_grp.belongsTo(config_grados_grupos_anios, { as: "codgrdgrp_config_grados_grupos_anio", foreignKey: "codgrdgrp"});
  config_grados_grupos_anios.hasMany(acd_asig_grp, { as: "acd_asig_grps", foreignKey: "codgrdgrp"});
  matricula_estudiantes_anio.belongsTo(config_grados_grupos_anios, { as: "id_grado_config_grados_grupos_anio", foreignKey: "id_grado"});
  config_grados_grupos_anios.hasMany(matricula_estudiantes_anio, { as: "matricula_estudiantes_anios", foreignKey: "id_grado"});
  config_grados_grupos_anios.belongsTo(config_grupos, { as: "id_grupo_config_grupo", foreignKey: "id_grupo"});
  config_grupos.hasMany(config_grados_grupos_anios, { as: "config_grados_grupos_anios", foreignKey: "id_grupo"});
  admision_aspirantes_entrevistas.belongsTo(config_modalidad, { as: "id_modalidad_config_modalidad", foreignKey: "id_modalidad"});
  config_modalidad.hasMany(admision_aspirantes_entrevistas, { as: "admision_aspirantes_entrevista", foreignKey: "id_modalidad"});
  gnr_parametros.belongsTo(config_periodo, { as: "perevl_config_periodo", foreignKey: "perevl"});
  config_periodo.hasMany(gnr_parametros, { as: "gnr_parametros", foreignKey: "perevl"});
  admision_aspirantes_familiares.belongsTo(config_tipos_familiares, { as: "tipo_familiar_config_tipos_familiare", foreignKey: "tipo_familiar"});
  config_tipos_familiares.hasMany(admision_aspirantes_familiares, { as: "admision_aspirantes_familiares", foreignKey: "tipo_familiar"});
  matricula_estudiantes_familiares.belongsTo(config_tipos_familiares, { as: "tipo_familiar_config_tipos_familiare", foreignKey: "tipo_familiar"});
  config_tipos_familiares.hasMany(matricula_estudiantes_familiares, { as: "matricula_estudiantes_familiares", foreignKey: "tipo_familiar"});
  admision_aspirantes.belongsTo(config_tipos_ident, { as: "ident_tipo_config_tipos_ident", foreignKey: "ident_tipo"});
  config_tipos_ident.hasMany(admision_aspirantes, { as: "admision_aspirantes", foreignKey: "ident_tipo"});
  admision_familiares.belongsTo(config_tipos_ident, { as: "ident_tipo_config_tipos_ident", foreignKey: "ident_tipo"});
  config_tipos_ident.hasMany(admision_familiares, { as: "admision_familiares", foreignKey: "ident_tipo"});
  matricula_estudiantes.belongsTo(config_tipos_ident, { as: "ident_tipo_config_tipos_ident", foreignKey: "ident_tipo"});
  config_tipos_ident.hasMany(matricula_estudiantes, { as: "matricula_estudiantes", foreignKey: "ident_tipo"});
  matricula_familiares.belongsTo(config_tipos_ident, { as: "ident_tipo_config_tipos_ident", foreignKey: "ident_tipo"});
  config_tipos_ident.hasMany(matricula_familiares, { as: "matricula_familiares", foreignKey: "ident_tipo"});
  pqrs.belongsTo(config_tipos_ident, { as: "tipo_ident_config_tipos_ident", foreignKey: "tipo_ident"});
  config_tipos_ident.hasMany(pqrs, { as: "pqrs", foreignKey: "tipo_ident"});
  control_contratos_grados.belongsTo(control_contratos, { as: "id_contrato_control_contrato", foreignKey: "id_contrato"});
  control_contratos.hasMany(control_contratos_grados, { as: "control_contratos_grados", foreignKey: "id_contrato"});
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
  ctb_proveedores_pagos.belongsTo(ctb_proveedores, { as: "proveedor_ctb_proveedore", foreignKey: "proveedor"});
  ctb_proveedores.hasMany(ctb_proveedores_pagos, { as: "ctb_proveedores_pagos", foreignKey: "proveedor"});
  tienda_compras.belongsTo(ctb_proveedores, { as: "id_proveedor_ctb_proveedore", foreignKey: "id_proveedor"});
  ctb_proveedores.hasMany(tienda_compras, { as: "tienda_compras", foreignKey: "id_proveedor"});
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
  enc_preguntas.belongsTo(enc_categoria, { as: "codcategoria_enc_categorium", foreignKey: "codcategoria"});
  enc_categoria.hasMany(enc_preguntas, { as: "enc_pregunta", foreignKey: "codcategoria"});
  enc_perfil_encuesta.belongsTo(enc_configuracion, { as: "cod_encuenta_enc_configuracion", foreignKey: "cod_encuenta"});
  enc_configuracion.hasMany(enc_perfil_encuesta, { as: "enc_perfil_encuesta", foreignKey: "cod_encuenta"});
  enc_preguntas_encuesta.belongsTo(enc_configuracion, { as: "cod_encuesta_enc_configuracion", foreignKey: "cod_encuesta"});
  enc_configuracion.hasMany(enc_preguntas_encuesta, { as: "enc_preguntas_encuesta", foreignKey: "cod_encuesta"});
  enc_resultados.belongsTo(enc_configuracion, { as: "cod_encuentas_enc_configuracion", foreignKey: "cod_encuentas"});
  enc_configuracion.hasMany(enc_resultados, { as: "enc_resultados", foreignKey: "cod_encuentas"});
  enc_opcionespreg.belongsTo(enc_preguntas, { as: "codpreg_enc_pregunta", foreignKey: "codpreg"});
  enc_preguntas.hasMany(enc_opcionespreg, { as: "enc_opcionespregs", foreignKey: "codpreg"});
  enc_preguntas_encuesta.belongsTo(enc_preguntas, { as: "cod_pregunta_enc_pregunta", foreignKey: "cod_pregunta"});
  enc_preguntas.hasMany(enc_preguntas_encuesta, { as: "enc_preguntas_encuesta", foreignKey: "cod_pregunta"});
  enc_resultados.belongsTo(enc_preguntas, { as: "cod_pregunta_enc_pregunta", foreignKey: "cod_pregunta"});
  enc_preguntas.hasMany(enc_resultados, { as: "enc_resultados", foreignKey: "cod_pregunta"});
  evl_preg_habilidades.belongsTo(enc_preguntas, { as: "codpreg_enc_pregunta", foreignKey: "codpreg"});
  enc_preguntas.hasMany(evl_preg_habilidades, { as: "evl_preg_habilidades", foreignKey: "codpreg"});
  evl_res_habilidades.belongsTo(enc_preguntas, { as: "codpre_enc_pregunta", foreignKey: "codpre"});
  enc_preguntas.hasMany(evl_res_habilidades, { as: "evl_res_habilidades", foreignKey: "codpre"});
  enc_preguntas.belongsTo(enc_tipo_preguntas, { as: "tipo_pre_enc_tipo_pregunta", foreignKey: "tipo_pre"});
  enc_tipo_preguntas.hasMany(enc_preguntas, { as: "enc_pregunta", foreignKey: "tipo_pre"});
  evl_autempleados.belongsTo(gnr_parametros, { as: "codevl_gnr_parametro", foreignKey: "codevl"});
  gnr_parametros.hasMany(evl_autempleados, { as: "evl_autempleados", foreignKey: "codevl"});
  evl_autestudiantes.belongsTo(gnr_parametros, { as: "codevl_gnr_parametro", foreignKey: "codevl"});
  gnr_parametros.hasMany(evl_autestudiantes, { as: "evl_autestudiantes", foreignKey: "codevl"});
  evl_evaluadores.belongsTo(gnr_parametros, { as: "codevl_gnr_parametro", foreignKey: "codevl"});
  gnr_parametros.hasMany(evl_evaluadores, { as: "evl_evaluadores", foreignKey: "codevl"});
  evl_res_habilidades.belongsTo(gnr_parametros, { as: "codevl_gnr_parametro", foreignKey: "codevl"});
  gnr_parametros.hasMany(evl_res_habilidades, { as: "evl_res_habilidades", foreignKey: "codevl"});
  test_asig_ejercicios.belongsTo(gnr_parametros, { as: "cod_evld_gnr_parametro", foreignKey: "cod_evld"});
  gnr_parametros.hasMany(test_asig_ejercicios, { as: "test_asig_ejercicios", foreignKey: "cod_evld"});
  test_asig_ejercicios_resp.belongsTo(gnr_parametros, { as: "cod_evld_gnr_parametro", foreignKey: "cod_evld"});
  gnr_parametros.hasMany(test_asig_ejercicios_resp, { as: "test_asig_ejercicios_resps", foreignKey: "cod_evld"});
  test_fecha_publicacion.belongsTo(gnr_parametros, { as: "codevl_gnr_parametro", foreignKey: "codevl"});
  gnr_parametros.hasMany(test_fecha_publicacion, { as: "test_fecha_publicacions", foreignKey: "codevl"});
  test_resdetalle.belongsTo(gnr_parametros, { as: "codevl_gnr_parametro", foreignKey: "codevl"});
  gnr_parametros.hasMany(test_resdetalle, { as: "test_resdetalles", foreignKey: "codevl"});
  test_resgeneral.belongsTo(gnr_parametros, { as: "codevl_gnr_parametro", foreignKey: "codevl"});
  gnr_parametros.hasMany(test_resgeneral, { as: "test_resgenerals", foreignKey: "codevl"});
  test_val_actividad.belongsTo(gnr_parametros, { as: "codevl_gnr_parametro", foreignKey: "codevl"});
  gnr_parametros.hasMany(test_val_actividad, { as: "test_val_actividads", foreignKey: "codevl"});
  evl_configuracion.belongsTo(gnr_parametros_perfiles, { as: "perfil_gnr_parametros_perfile", foreignKey: "perfil"});
  gnr_parametros_perfiles.hasMany(evl_configuracion, { as: "evl_configuracions", foreignKey: "perfil"});
  gnr_parametros.belongsTo(gnr_parametros_perfiles, { as: "perfil_gnr_parametros_perfile", foreignKey: "perfil"});
  gnr_parametros_perfiles.hasMany(gnr_parametros, { as: "gnr_parametros", foreignKey: "perfil"});
  gnr_parametros_usuarios.belongsTo(gnr_parametros_perfiles, { as: "perfil_gnr_parametros_perfile", foreignKey: "perfil"});
  gnr_parametros_perfiles.hasMany(gnr_parametros_usuarios, { as: "gnr_parametros_usuarios", foreignKey: "perfil"});
  config_grados_apps.belongsTo(matricula_apps, { as: "id_app_matricula_app", foreignKey: "id_app"});
  matricula_apps.hasMany(config_grados_apps, { as: "config_grados_apps", foreignKey: "id_app"});
  matricula_estudiantes_apps.belongsTo(matricula_apps, { as: "id_apps_matricula_app", foreignKey: "id_apps"});
  matricula_apps.hasMany(matricula_estudiantes_apps, { as: "matricula_estudiantes_apps", foreignKey: "id_apps"});
  config_grados_contratos.belongsTo(matricula_contratos, { as: "id_contrato_matricula_contrato", foreignKey: "id_contrato"});
  matricula_contratos.hasMany(config_grados_contratos, { as: "config_grados_contratos", foreignKey: "id_contrato"});
  control_contratos.belongsTo(matricula_contratos, { as: "id_contrato_matricula_contrato", foreignKey: "id_contrato"});
  matricula_contratos.hasMany(control_contratos, { as: "control_contratos", foreignKey: "id_contrato"});
  matricula_estudiantes_contratos.belongsTo(matricula_contratos, { as: "id_contrato_matricula_contrato", foreignKey: "id_contrato"});
  matricula_contratos.hasMany(matricula_estudiantes_contratos, { as: "matricula_estudiantes_contratos", foreignKey: "id_contrato"});
  tienda_categorias_contratos.belongsTo(matricula_contratos, { as: "id_contrato_matricula_contrato", foreignKey: "id_contrato"});
  matricula_contratos.hasMany(tienda_categorias_contratos, { as: "tienda_categorias_contratos", foreignKey: "id_contrato"});
  acd_escinscritos.belongsTo(matricula_estudiantes, { as: "codest_matricula_estudiante", foreignKey: "codest"});
  matricula_estudiantes.hasMany(acd_escinscritos, { as: "acd_escinscritos", foreignKey: "codest"});
  acd_solicitud_retiro.belongsTo(matricula_estudiantes, { as: "cod_estudiante_matricula_estudiante", foreignKey: "cod_estudiante"});
  matricula_estudiantes.hasMany(acd_solicitud_retiro, { as: "acd_solicitud_retiros", foreignKey: "cod_estudiante"});
  matricula_estudiantes_anio.belongsTo(matricula_estudiantes, { as: "id_estudiante_matricula_estudiante", foreignKey: "id_estudiante"});
  matricula_estudiantes.hasMany(matricula_estudiantes_anio, { as: "matricula_estudiantes_anios", foreignKey: "id_estudiante"});
  matricula_estudiantes_familiares.belongsTo(matricula_estudiantes, { as: "id_estudiante_matricula_estudiante", foreignKey: "id_estudiante"});
  matricula_estudiantes.hasMany(matricula_estudiantes_familiares, { as: "matricula_estudiantes_familiares", foreignKey: "id_estudiante"});
  tienda_cupones_estudiantes.belongsTo(matricula_estudiantes, { as: "id_estudiante_matricula_estudiante", foreignKey: "id_estudiante"});
  matricula_estudiantes.hasMany(tienda_cupones_estudiantes, { as: "tienda_cupones_estudiantes", foreignKey: "id_estudiante"});
  tienda_cupones_excel.belongsTo(matricula_estudiantes, { as: "id_estudiante_matricula_estudiante", foreignKey: "id_estudiante"});
  matricula_estudiantes.hasMany(tienda_cupones_excel, { as: "tienda_cupones_excels", foreignKey: "id_estudiante"});
  tienda_ventas_productos.belongsTo(matricula_estudiantes, { as: "id_estudiante_matricula_estudiante", foreignKey: "id_estudiante"});
  matricula_estudiantes.hasMany(tienda_ventas_productos, { as: "tienda_ventas_productos", foreignKey: "id_estudiante"});
  acd_escuelas_motivos.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasOne(acd_escuelas_motivos, { as: "acd_escuelas_motivo", foreignKey: "id_matricula"});
  matricula_estudiantes_apps.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(matricula_estudiantes_apps, { as: "matricula_estudiantes_apps", foreignKey: "id_matricula"});
  matricula_estudiantes_codeudor.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasOne(matricula_estudiantes_codeudor, { as: "matricula_estudiantes_codeudor", foreignKey: "id_matricula"});
  matricula_estudiantes_contratos.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(matricula_estudiantes_contratos, { as: "matricula_estudiantes_contratos", foreignKey: "id_matricula"});
  matricula_estudiantes_contratos_codigos.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(matricula_estudiantes_contratos_codigos, { as: "matricula_estudiantes_contratos_codigos", foreignKey: "id_matricula"});
  matricula_estudiantes_desistimiento.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(matricula_estudiantes_desistimiento, { as: "matricula_estudiantes_desistimientos", foreignKey: "id_matricula"});
  matricula_estudiantes_documentos.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(matricula_estudiantes_documentos, { as: "matricula_estudiantes_documentos", foreignKey: "id_matricula"});
  matricula_referidos.belongsTo(matricula_estudiantes_anio, { as: "id_beneficiario_matricula_estudiantes_anio", foreignKey: "id_beneficiario"});
  matricula_estudiantes_anio.hasMany(matricula_referidos, { as: "matricula_referidos", foreignKey: "id_beneficiario"});
  test_asig_ejercicios.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(test_asig_ejercicios, { as: "test_asig_ejercicios", foreignKey: "id_matricula"});
  test_asig_ejercicios_resp.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(test_asig_ejercicios_resp, { as: "test_asig_ejercicios_resps", foreignKey: "id_matricula"});
  test_asig_ejercicios_resp.belongsTo(matricula_estudiantes_anio, { as: "id_resp_estudiante_matricula_estudiantes_anio", foreignKey: "id_resp_estudiante"});
  matricula_estudiantes_anio.hasMany(test_asig_ejercicios_resp, { as: "id_resp_estudiante_test_asig_ejercicios_resps", foreignKey: "id_resp_estudiante"});
  test_resgeneral.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(test_resgeneral, { as: "test_resgenerals", foreignKey: "id_matricula"});
  tienda_ventas_productos.belongsTo(matricula_estudiantes_anio, { as: "id_matricula_matricula_estudiantes_anio", foreignKey: "id_matricula"});
  matricula_estudiantes_anio.hasMany(tienda_ventas_productos, { as: "tienda_ventas_productos", foreignKey: "id_matricula"});
  matricula_estudiantes.belongsTo(matricula_estudiantes_datosmedicos, { as: "id_datos_medicos_matricula_estudiantes_datosmedico", foreignKey: "id_datos_medicos"});
  matricula_estudiantes_datosmedicos.hasMany(matricula_estudiantes, { as: "matricula_estudiantes", foreignKey: "id_datos_medicos"});
  acd_solicitud_retiro.belongsTo(matricula_familiares, { as: "cod_familiar_matricula_familiare", foreignKey: "cod_familiar"});
  matricula_familiares.hasMany(acd_solicitud_retiro, { as: "acd_solicitud_retiros", foreignKey: "cod_familiar"});
  matricula_estudiantes_contratos.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(matricula_estudiantes_contratos, { as: "matricula_estudiantes_contratos", foreignKey: "id_familiar"});
  matricula_estudiantes_familiares.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(matricula_estudiantes_familiares, { as: "matricula_estudiantes_familiares", foreignKey: "id_familiar"});
  matricula_referidos.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(matricula_referidos, { as: "matricula_referidos", foreignKey: "id_familiar"});
  pqrs.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(pqrs, { as: "pqrs", foreignKey: "id_familiar"});
  test_asig_ejercicios.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(test_asig_ejercicios, { as: "test_asig_ejercicios", foreignKey: "id_familiar"});
  test_asig_ejercicios_resp.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(test_asig_ejercicios_resp, { as: "test_asig_ejercicios_resps", foreignKey: "id_familiar"});
  test_asig_ejercicios_resp.belongsTo(matricula_familiares, { as: "id_resp_padre_madre_matricula_familiare", foreignKey: "id_resp_padre_madre"});
  matricula_familiares.hasMany(test_asig_ejercicios_resp, { as: "id_resp_padre_madre_test_asig_ejercicios_resps", foreignKey: "id_resp_padre_madre"});
  test_resgeneral.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(test_resgeneral, { as: "test_resgenerals", foreignKey: "id_familiar"});
  tienda_ventas.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(tienda_ventas, { as: "tienda_venta", foreignKey: "id_familiar"});
  tienda_ventas.belongsTo(matricula_familiares, { as: "entrega_tercero_matricula_familiare", foreignKey: "entrega_tercero"});
  matricula_familiares.hasMany(tienda_ventas, { as: "entrega_tercero_tienda_venta", foreignKey: "entrega_tercero"});
  tienda_ventas_caja.belongsTo(matricula_familiares, { as: "id_familiar_matricula_familiare", foreignKey: "id_familiar"});
  matricula_familiares.hasMany(tienda_ventas_caja, { as: "tienda_ventas_cajas", foreignKey: "id_familiar"});
  tienda_ventas_productos.belongsTo(matricula_meses, { as: "id_mes_matricula_mese", foreignKey: "id_mes"});
  matricula_meses.hasMany(tienda_ventas_productos, { as: "tienda_ventas_productos", foreignKey: "id_mes"});
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
  evl_autempleados.belongsTo(pelv_indicadores, { as: "codpreg_pelv_indicadore", foreignKey: "codpreg"});
  pelv_indicadores.hasMany(evl_autempleados, { as: "evl_autempleados", foreignKey: "codpreg"});
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
  evl_autempleados.belongsTo(pevl_evaluacion_grupos, { as: "codplanilla_pevl_evaluacion_grupo", foreignKey: "codplanilla"});
  pevl_evaluacion_grupos.hasMany(evl_autempleados, { as: "evl_autempleados", foreignKey: "codplanilla"});
  evl_evaluadores.belongsTo(pevl_evaluacion_grupos, { as: "idplanilla_pevl_evaluacion_grupo", foreignKey: "idplanilla"});
  pevl_evaluacion_grupos.hasMany(evl_evaluadores, { as: "evl_evaluadores", foreignKey: "idplanilla"});
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
  tienda_compras.belongsTo(terceros, { as: "id_tercero_tercero", foreignKey: "id_tercero"});
  terceros.hasMany(tienda_compras, { as: "tienda_compras", foreignKey: "id_tercero"});
  test_asig_ejercicios.belongsTo(test_cerebros, { as: "cer_dominante_test_cerebro", foreignKey: "cer_dominante"});
  test_cerebros.hasMany(test_asig_ejercicios, { as: "test_asig_ejercicios", foreignKey: "cer_dominante"});
  test_asig_ejercicios_resp.belongsTo(test_cerebros, { as: "cer_dominante_test_cerebro", foreignKey: "cer_dominante"});
  test_cerebros.hasMany(test_asig_ejercicios_resp, { as: "test_asig_ejercicios_resps", foreignKey: "cer_dominante"});
  test_asig_ejercicios.belongsTo(test_ejer_actividad, { as: "cod_ejercicio_test_ejer_actividad", foreignKey: "cod_ejercicio"});
  test_ejer_actividad.hasMany(test_asig_ejercicios, { as: "test_asig_ejercicios", foreignKey: "cod_ejercicio"});
  test_val_actividad.belongsTo(test_ejer_actividad, { as: "codactv_test_ejer_actividad", foreignKey: "codactv"});
  test_ejer_actividad.hasMany(test_val_actividad, { as: "test_val_actividads", foreignKey: "codactv"});
  test_permisos_opc.belongsTo(test_menusconfig, { as: "codmenu_test_menusconfig", foreignKey: "codmenu"});
  test_menusconfig.hasMany(test_permisos_opc, { as: "test_permisos_opcs", foreignKey: "codmenu"});
  test_administracion.belongsTo(test_preguntas, { as: "codpreg_test_pregunta", foreignKey: "codpreg"});
  test_preguntas.hasMany(test_administracion, { as: "test_administracions", foreignKey: "codpreg"});
  test_resdetalle.belongsTo(test_preguntas, { as: "codpre_test_pregunta", foreignKey: "codpre"});
  test_preguntas.hasMany(test_resdetalle, { as: "test_resdetalles", foreignKey: "codpre"});
  test_ejer_actividad.belongsTo(test_recom_actividad, { as: "cod_actividad_test_recom_actividad", foreignKey: "cod_actividad"});
  test_recom_actividad.hasMany(test_ejer_actividad, { as: "test_ejer_actividads", foreignKey: "cod_actividad"});
  test_resdetalle.belongsTo(test_resgeneral, { as: "id_resgeneral_test_resgeneral", foreignKey: "id_resgeneral"});
  test_resgeneral.hasMany(test_resdetalle, { as: "test_resdetalles", foreignKey: "id_resgeneral"});
  matricula_config.belongsTo(tienda_bodegas, { as: "id_bodega_tienda_bodega", foreignKey: "id_bodega"});
  tienda_bodegas.hasMany(matricula_config, { as: "matricula_configs", foreignKey: "id_bodega"});
  tienda_bodegas_usuarios.belongsTo(tienda_bodegas, { as: "id_bodega_tienda_bodega", foreignKey: "id_bodega"});
  tienda_bodegas.hasMany(tienda_bodegas_usuarios, { as: "tienda_bodegas_usuarios", foreignKey: "id_bodega"});
  tienda_productos_bodega.belongsTo(tienda_bodegas, { as: "id_bodega_tienda_bodega", foreignKey: "id_bodega"});
  tienda_bodegas.hasMany(tienda_productos_bodega, { as: "tienda_productos_bodegas", foreignKey: "id_bodega"});
  tienda_ventas.belongsTo(tienda_bodegas, { as: "id_bodega_tienda_bodega", foreignKey: "id_bodega"});
  tienda_bodegas.hasMany(tienda_ventas, { as: "tienda_venta", foreignKey: "id_bodega"});
  tienda_bodegas_ajustes_productos.belongsTo(tienda_bodegas_ajustes, { as: "id_ajustes_tienda_bodegas_ajuste", foreignKey: "id_ajustes"});
  tienda_bodegas_ajustes.hasMany(tienda_bodegas_ajustes_productos, { as: "tienda_bodegas_ajustes_productos", foreignKey: "id_ajustes"});
  tienda_bodegas_movimientos_productos.belongsTo(tienda_bodegas_movimientos, { as: "id_movimiento_tienda_bodegas_movimiento", foreignKey: "id_movimiento"});
  tienda_bodegas_movimientos.hasMany(tienda_bodegas_movimientos_productos, { as: "tienda_bodegas_movimientos_productos", foreignKey: "id_movimiento"});
  acd_solicitud_tipo.belongsTo(tienda_categorias, { as: "id_categoria_tienda_categoria", foreignKey: "id_categoria"});
  tienda_categorias.hasMany(acd_solicitud_tipo, { as: "acd_solicitud_tipos", foreignKey: "id_categoria"});
  config_grados_conceptos.belongsTo(tienda_categorias, { as: "id_concepto_categoria_tienda_categoria", foreignKey: "id_concepto_categoria"});
  tienda_categorias.hasMany(config_grados_conceptos, { as: "config_grados_conceptos", foreignKey: "id_concepto_categoria"});
  tienda_categorias_contratos.belongsTo(tienda_categorias, { as: "id_categoria_tienda_categoria", foreignKey: "id_categoria"});
  tienda_categorias.hasMany(tienda_categorias_contratos, { as: "tienda_categorias_contratos", foreignKey: "id_categoria"});
  tienda_productos.belongsTo(tienda_categorias, { as: "id_categoria_tienda_categoria", foreignKey: "id_categoria"});
  tienda_categorias.hasMany(tienda_productos, { as: "tienda_productos", foreignKey: "id_categoria"});
  tienda_productos_seguimiento.belongsTo(tienda_categorias, { as: "id_categoria_tienda_categoria", foreignKey: "id_categoria"});
  tienda_categorias.hasMany(tienda_productos_seguimiento, { as: "tienda_productos_seguimientos", foreignKey: "id_categoria"});
  tienda_compras_productos.belongsTo(tienda_compras, { as: "id_compra_tienda_compra", foreignKey: "id_compra"});
  tienda_compras.hasMany(tienda_compras_productos, { as: "tienda_compras_productos", foreignKey: "id_compra"});
  tienda_bodegas.belongsTo(tienda_consecutivos, { as: "id_consecutivo_tienda_consecutivo", foreignKey: "id_consecutivo"});
  tienda_consecutivos.hasMany(tienda_bodegas, { as: "tienda_bodegas", foreignKey: "id_consecutivo"});
  tienda_bodegas_ajustes.belongsTo(tienda_consecutivos, { as: "id_consecutivo_tienda_consecutivo", foreignKey: "id_consecutivo"});
  tienda_consecutivos.hasMany(tienda_bodegas_ajustes, { as: "tienda_bodegas_ajustes", foreignKey: "id_consecutivo"});
  tienda_bodegas_movimientos.belongsTo(tienda_consecutivos, { as: "id_consecutivo_tienda_consecutivo", foreignKey: "id_consecutivo"});
  tienda_consecutivos.hasMany(tienda_bodegas_movimientos, { as: "tienda_bodegas_movimientos", foreignKey: "id_consecutivo"});
  tienda_compras.belongsTo(tienda_consecutivos, { as: "id_consecutivo_tienda_consecutivo", foreignKey: "id_consecutivo"});
  tienda_consecutivos.hasMany(tienda_compras, { as: "tienda_compras", foreignKey: "id_consecutivo"});
  tienda_ventas.belongsTo(tienda_consecutivos, { as: "id_consecutivo_tienda_consecutivo", foreignKey: "id_consecutivo"});
  tienda_consecutivos.hasMany(tienda_ventas, { as: "tienda_venta", foreignKey: "id_consecutivo"});
  ctb_novedad_control_vc.belongsTo(tienda_cupon_autoriza, { as: "autoriza_tienda_cupon_autoriza", foreignKey: "autoriza"});
  tienda_cupon_autoriza.hasMany(ctb_novedad_control_vc, { as: "ctb_novedad_control_vcs", foreignKey: "autoriza"});
  tienda_cupones.belongsTo(tienda_cupon_autoriza, { as: "autorizado_tienda_cupon_autoriza", foreignKey: "autorizado"});
  tienda_cupon_autoriza.hasMany(tienda_cupones, { as: "tienda_cupones", foreignKey: "autorizado"});
  admision_formulario.belongsTo(tienda_cupones, { as: "id_cupon_tienda_cupone", foreignKey: "id_cupon"});
  tienda_cupones.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_cupon"});
  tienda_cupones_concepto.belongsTo(tienda_cupones, { as: "id_cupon_tienda_cupone", foreignKey: "id_cupon"});
  tienda_cupones.hasMany(tienda_cupones_concepto, { as: "tienda_cupones_conceptos", foreignKey: "id_cupon"});
  tienda_cupones_concepto_producto.belongsTo(tienda_cupones, { as: "id_cupon_tienda_cupone", foreignKey: "id_cupon"});
  tienda_cupones.hasMany(tienda_cupones_concepto_producto, { as: "tienda_cupones_concepto_productos", foreignKey: "id_cupon"});
  tienda_cupones_estudiantes.belongsTo(tienda_cupones, { as: "id_cupon_tienda_cupone", foreignKey: "id_cupon"});
  tienda_cupones.hasMany(tienda_cupones_estudiantes, { as: "tienda_cupones_estudiantes", foreignKey: "id_cupon"});
  tienda_cupones_excel.belongsTo(tienda_cupones, { as: "codigo_descuento_tienda_cupone", foreignKey: "codigo_descuento"});
  tienda_cupones.hasMany(tienda_cupones_excel, { as: "tienda_cupones_excels", foreignKey: "codigo_descuento"});
  tienda_ventas.belongsTo(tienda_cupones, { as: "id_cupon_tienda_cupone", foreignKey: "id_cupon"});
  tienda_cupones.hasMany(tienda_ventas, { as: "tienda_venta", foreignKey: "id_cupon"});
  tienda_ventas_cupones.belongsTo(tienda_cupones, { as: "id_cupon_tienda_cupone", foreignKey: "id_cupon"});
  tienda_cupones.hasMany(tienda_ventas_cupones, { as: "tienda_ventas_cupones", foreignKey: "id_cupon"});
  tienda_cupones.belongsTo(tienda_cupones_controlacademic, { as: "cupon_controlacademic_tienda_cupones_controlacademic", foreignKey: "cupon_controlacademic"});
  tienda_cupones_controlacademic.hasMany(tienda_cupones, { as: "tienda_cupones", foreignKey: "cupon_controlacademic"});
  tienda_cupones.belongsTo(tienda_cupones_general, { as: "id_cupon_general_tienda_cupones_general", foreignKey: "id_cupon_general"});
  tienda_cupones_general.hasMany(tienda_cupones, { as: "tienda_cupones", foreignKey: "id_cupon_general"});
  admision_formulario_caja.belongsTo(tienda_medios_pago, { as: "id_medio_pago_tienda_medios_pago", foreignKey: "id_medio_pago"});
  tienda_medios_pago.hasMany(admision_formulario_caja, { as: "admision_formulario_cajas", foreignKey: "id_medio_pago"});
  tienda_medios_pago_tarjetas.belongsTo(tienda_medios_pago, { as: "id_medio_pago_tienda_medios_pago", foreignKey: "id_medio_pago"});
  tienda_medios_pago.hasMany(tienda_medios_pago_tarjetas, { as: "tienda_medios_pago_tarjeta", foreignKey: "id_medio_pago"});
  tienda_ventas_caja.belongsTo(tienda_medios_pago, { as: "id_medio_pago_tienda_medios_pago", foreignKey: "id_medio_pago"});
  tienda_medios_pago.hasMany(tienda_ventas_caja, { as: "tienda_ventas_cajas", foreignKey: "id_medio_pago"});
  tienda_cuenta_empresas.belongsTo(tienda_pagos_cuentas, { as: "id_cuenta_tienda_pagos_cuenta", foreignKey: "id_cuenta"});
  tienda_pagos_cuentas.hasMany(tienda_cuenta_empresas, { as: "tienda_cuenta_empresas", foreignKey: "id_cuenta"});
  tienda_ventas_caja.belongsTo(tienda_pagos_cuentas, { as: "id_cuenta_tienda_pagos_cuenta", foreignKey: "id_cuenta"});
  tienda_pagos_cuentas.hasMany(tienda_ventas_caja, { as: "tienda_ventas_cajas", foreignKey: "id_cuenta"});
  config_empresas.belongsTo(tienda_pagos_documentos, { as: "documento_contable_tienda_pagos_documento", foreignKey: "documento_contable"});
  tienda_pagos_documentos.hasMany(config_empresas, { as: "config_empresas", foreignKey: "documento_contable"});
  tienda_ventas_caja.belongsTo(tienda_pagos_lugar, { as: "id_lugar_tienda_pagos_lugar", foreignKey: "id_lugar"});
  tienda_pagos_lugar.hasMany(tienda_ventas_caja, { as: "tienda_ventas_cajas", foreignKey: "id_lugar"});
  tienda_medios_pago_tarjetas.belongsTo(tienda_pagos_tarjetas, { as: "id_tarjeta_tienda_pagos_tarjeta", foreignKey: "id_tarjeta"});
  tienda_pagos_tarjetas.hasMany(tienda_medios_pago_tarjetas, { as: "tienda_medios_pago_tarjeta", foreignKey: "id_tarjeta"});
  tienda_ventas_caja.belongsTo(tienda_pagos_tarjetas, { as: "id_tarjeta_tienda_pagos_tarjeta", foreignKey: "id_tarjeta"});
  tienda_pagos_tarjetas.hasMany(tienda_ventas_caja, { as: "tienda_ventas_cajas", foreignKey: "id_tarjeta"});
  tienda_planes_acciones_reg.belongsTo(tienda_planes_acciones, { as: "id_accion_tienda_planes_accione", foreignKey: "id_accion"});
  tienda_planes_acciones.hasMany(tienda_planes_acciones_reg, { as: "tienda_planes_acciones_regs", foreignKey: "id_accion"});
  tienda_planes_acciones_reg.belongsTo(tienda_planes_acciones_resp, { as: "id_respuesta_tienda_planes_acciones_resp", foreignKey: "id_respuesta"});
  tienda_planes_acciones_resp.hasMany(tienda_planes_acciones_reg, { as: "tienda_planes_acciones_regs", foreignKey: "id_respuesta"});
  tienda_consecutivos.belongsTo(tienda_procesos, { as: "id_proceso_tienda_proceso", foreignKey: "id_proceso"});
  tienda_procesos.hasMany(tienda_consecutivos, { as: "tienda_consecutivos", foreignKey: "id_proceso"});
  acd_escuelas.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(acd_escuelas, { as: "acd_escuelas", foreignKey: "id_producto"});
  acd_escuelas_uniformes.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(acd_escuelas_uniformes, { as: "acd_escuelas_uniformes", foreignKey: "id_producto"});
  tienda_bodegas_ajustes_productos.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_bodegas_ajustes_productos, { as: "tienda_bodegas_ajustes_productos", foreignKey: "id_producto"});
  tienda_bodegas_movimientos_productos.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_bodegas_movimientos_productos, { as: "tienda_bodegas_movimientos_productos", foreignKey: "id_producto"});
  tienda_compras_productos.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_compras_productos, { as: "tienda_compras_productos", foreignKey: "id_producto"});
  tienda_cupones.belongsTo(tienda_productos, { as: "id_concepto_tienda_producto", foreignKey: "id_concepto"});
  tienda_productos.hasMany(tienda_cupones, { as: "tienda_cupones", foreignKey: "id_concepto"});
  tienda_cupones_concepto.belongsTo(tienda_productos, { as: "id_concepto_tienda_producto", foreignKey: "id_concepto"});
  tienda_productos.hasMany(tienda_cupones_concepto, { as: "tienda_cupones_conceptos", foreignKey: "id_concepto"});
  tienda_productos_bodega.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_productos_bodega, { as: "tienda_productos_bodegas", foreignKey: "id_producto"});
  tienda_productos_bodega.belongsTo(tienda_productos, { as: "id_talla_tienda_producto", foreignKey: "id_talla"});
  tienda_productos.hasMany(tienda_productos_bodega, { as: "id_talla_tienda_productos_bodegas", foreignKey: "id_talla"});
  tienda_productos_codigos.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_productos_codigos, { as: "tienda_productos_codigos", foreignKey: "id_producto"});
  tienda_productos_compuesto.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_productos_compuesto, { as: "tienda_productos_compuestos", foreignKey: "id_producto"});
  tienda_productos_compuesto.belongsTo(tienda_productos, { as: "id_producto_compuesto_tienda_producto", foreignKey: "id_producto_compuesto"});
  tienda_productos.hasMany(tienda_productos_compuesto, { as: "id_producto_compuesto_tienda_productos_compuestos", foreignKey: "id_producto_compuesto"});
  tienda_productos_imagenes.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_productos_imagenes, { as: "tienda_productos_imagenes", foreignKey: "id_producto"});
  tienda_productos_relacion.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_productos_relacion, { as: "tienda_productos_relacions", foreignKey: "id_producto"});
  tienda_productos_relacion.belongsTo(tienda_productos, { as: "id_producto_relacion_tienda_producto", foreignKey: "id_producto_relacion"});
  tienda_productos.hasMany(tienda_productos_relacion, { as: "id_producto_relacion_tienda_productos_relacions", foreignKey: "id_producto_relacion"});
  tienda_ventas_productos.belongsTo(tienda_productos, { as: "id_producto_tienda_producto", foreignKey: "id_producto"});
  tienda_productos.hasMany(tienda_ventas_productos, { as: "tienda_ventas_productos", foreignKey: "id_producto"});
  tienda_ventas_productos.belongsTo(tienda_productos, { as: "id_talla_tienda_producto", foreignKey: "id_talla"});
  tienda_productos.hasMany(tienda_ventas_productos, { as: "id_talla_tienda_ventas_productos", foreignKey: "id_talla"});
  tienda_bodegas_ajustes_productos.belongsTo(tienda_productos_bodega, { as: "bodega_tienda_productos_bodega", foreignKey: "bodega"});
  tienda_productos_bodega.hasMany(tienda_bodegas_ajustes_productos, { as: "tienda_bodegas_ajustes_productos", foreignKey: "bodega"});
  tienda_bodegas_movimientos_productos.belongsTo(tienda_productos_bodega, { as: "origen_tienda_productos_bodega", foreignKey: "origen"});
  tienda_productos_bodega.hasMany(tienda_bodegas_movimientos_productos, { as: "tienda_bodegas_movimientos_productos", foreignKey: "origen"});
  tienda_bodegas_movimientos_productos.belongsTo(tienda_productos_bodega, { as: "destino_tienda_productos_bodega", foreignKey: "destino"});
  tienda_productos_bodega.hasMany(tienda_bodegas_movimientos_productos, { as: "destino_tienda_bodegas_movimientos_productos", foreignKey: "destino"});
  tienda_consecutivos.belongsTo(tienda_resoluciones, { as: "id_resolucion_tienda_resolucione", foreignKey: "id_resolucion"});
  tienda_resoluciones.hasMany(tienda_consecutivos, { as: "tienda_consecutivos", foreignKey: "id_resolucion"});
  matricula_estudiantes_desistimiento.belongsTo(tienda_ventas, { as: "id_plan_tienda_venta", foreignKey: "id_plan"});
  tienda_ventas.hasMany(matricula_estudiantes_desistimiento, { as: "matricula_estudiantes_desistimientos", foreignKey: "id_plan"});
  tienda_bonos.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_bonos, { as: "tienda_bonos", foreignKey: "id_venta"});
  tienda_planes_acciones_reg.belongsTo(tienda_ventas, { as: "id_plan_tienda_venta", foreignKey: "id_plan"});
  tienda_ventas.hasMany(tienda_planes_acciones_reg, { as: "tienda_planes_acciones_regs", foreignKey: "id_plan"});
  tienda_ventas.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas, { as: "tienda_venta", foreignKey: "id_venta"});
  tienda_ventas_anio_anterior.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas_anio_anterior, { as: "tienda_ventas_anio_anteriors", foreignKey: "id_venta"});
  tienda_ventas_caja.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas_caja, { as: "tienda_ventas_cajas", foreignKey: "id_venta"});
  tienda_ventas_caja_venta.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas_caja_venta, { as: "tienda_ventas_caja_venta", foreignKey: "id_venta"});
  tienda_ventas_comentarios.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas_comentarios, { as: "tienda_ventas_comentarios", foreignKey: "id_venta"});
  tienda_ventas_cupones.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas_cupones, { as: "tienda_ventas_cupones", foreignKey: "id_venta"});
  tienda_ventas_cxc.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas_cxc, { as: "tienda_ventas_cxcs", foreignKey: "id_venta"});
  tienda_ventas_cxc_abonos.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas_cxc_abonos, { as: "tienda_ventas_cxc_abonos", foreignKey: "id_venta"});
  tienda_ventas_productos.belongsTo(tienda_ventas, { as: "id_venta_tienda_venta", foreignKey: "id_venta"});
  tienda_ventas.hasMany(tienda_ventas_productos, { as: "tienda_ventas_productos", foreignKey: "id_venta"});
  tienda_ventas_caja_venta.belongsTo(tienda_ventas_caja, { as: "id_caja_tienda_ventas_caja", foreignKey: "id_caja"});
  tienda_ventas_caja.hasMany(tienda_ventas_caja_venta, { as: "tienda_ventas_caja_venta", foreignKey: "id_caja"});
  tienda_ventas_cupones.belongsTo(tienda_ventas_caja, { as: "id_caja_tienda_ventas_caja", foreignKey: "id_caja"});
  tienda_ventas_caja.hasMany(tienda_ventas_cupones, { as: "tienda_ventas_cupones", foreignKey: "id_caja"});
  tienda_ventas_cxc_abonos.belongsTo(tienda_ventas_caja, { as: "id_caja_tienda_ventas_caja", foreignKey: "id_caja"});
  tienda_ventas_caja.hasMany(tienda_ventas_cxc_abonos, { as: "tienda_ventas_cxc_abonos", foreignKey: "id_caja"});
  tienda_ventas_comentarios_visto.belongsTo(tienda_ventas_comentarios, { as: "id_comentario_tienda_ventas_comentario", foreignKey: "id_comentario"});
  tienda_ventas_comentarios.hasMany(tienda_ventas_comentarios_visto, { as: "tienda_ventas_comentarios_vistos", foreignKey: "id_comentario"});
  tienda_ventas_comentarios.belongsTo(tienda_ventas_comentarios_categ, { as: "id_categoria_tienda_ventas_comentarios_categ", foreignKey: "id_categoria"});
  tienda_ventas_comentarios_categ.hasMany(tienda_ventas_comentarios, { as: "tienda_ventas_comentarios", foreignKey: "id_categoria"});
  tienda_ventas_cxc_abonos.belongsTo(tienda_ventas_cxc, { as: "id_cxc_tienda_ventas_cxc", foreignKey: "id_cxc"});
  tienda_ventas_cxc.hasMany(tienda_ventas_cxc_abonos, { as: "tienda_ventas_cxc_abonos", foreignKey: "id_cxc"});
  tienda_cupones_concepto_producto.belongsTo(tienda_ventas_productos, { as: "id_producto_tienda_ventas_producto", foreignKey: "id_producto"});
  tienda_ventas_productos.hasMany(tienda_cupones_concepto_producto, { as: "tienda_cupones_concepto_productos", foreignKey: "id_producto"});
  acd_solicitud_asignacion.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(acd_solicitud_asignacion, { as: "acd_solicitud_asignacions", foreignKey: "id_usuario"});
  acd_solicitud_historial.belongsTo(usuarios, { as: "add_user_usuario", foreignKey: "add_user"});
  usuarios.hasMany(acd_solicitud_historial, { as: "acd_solicitud_historials", foreignKey: "add_user"});
  acd_solicitud_retiro.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(acd_solicitud_retiro, { as: "acd_solicitud_retiros", foreignKey: "id_usuario"});
  adm_email_plantillas_resp.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(adm_email_plantillas_resp, { as: "adm_email_plantillas_resps", foreignKey: "id_usuario"});
  admision_aspirantes_documentos.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(admision_aspirantes_documentos, { as: "admision_aspirantes_documentos", foreignKey: "id_user"});
  admision_aspirantes_entrevistas.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(admision_aspirantes_entrevistas, { as: "admision_aspirantes_entrevista", foreignKey: "id_usuario"});
  admision_formulario.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(admision_formulario, { as: "admision_formularios", foreignKey: "id_user"});
  admision_procesos_usuarios.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(admision_procesos_usuarios, { as: "admision_procesos_usuarios", foreignKey: "id_usuario"});
  calendario.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(calendario, { as: "calendarios", foreignKey: "id_usuario"});
  matricula_estudiantes_contratos.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(matricula_estudiantes_contratos, { as: "matricula_estudiantes_contratos", foreignKey: "id_usuario"});
  notificaciones_users.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(notificaciones_users, { as: "notificaciones_users", foreignKey: "id_user"});
  tienda_bodegas_ajustes.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(tienda_bodegas_ajustes, { as: "tienda_bodegas_ajustes", foreignKey: "id_user"});
  tienda_bodegas_movimientos.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(tienda_bodegas_movimientos, { as: "tienda_bodegas_movimientos", foreignKey: "id_user"});
  tienda_bodegas_usuarios.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(tienda_bodegas_usuarios, { as: "tienda_bodegas_usuarios", foreignKey: "id_usuario"});
  tienda_compras.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(tienda_compras, { as: "tienda_compras", foreignKey: "id_user"});
  tienda_compras.belongsTo(usuarios, { as: "id_autoriza_usuario", foreignKey: "id_autoriza"});
  usuarios.hasMany(tienda_compras, { as: "id_autoriza_tienda_compras", foreignKey: "id_autoriza"});
  tienda_compras.belongsTo(usuarios, { as: "id_recibe_usuario", foreignKey: "id_recibe"});
  usuarios.hasMany(tienda_compras, { as: "id_recibe_tienda_compras", foreignKey: "id_recibe"});
  tienda_cupones.belongsTo(usuarios, { as: "user_add_usuario", foreignKey: "user_add"});
  usuarios.hasMany(tienda_cupones, { as: "tienda_cupones", foreignKey: "user_add"});
  tienda_planes_acciones_reg.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(tienda_planes_acciones_reg, { as: "tienda_planes_acciones_regs", foreignKey: "id_user"});
  tienda_productos_seguimiento.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(tienda_productos_seguimiento, { as: "tienda_productos_seguimientos", foreignKey: "id_usuario"});
  tienda_ventas.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(tienda_ventas, { as: "tienda_venta", foreignKey: "id_user"});
  tienda_ventas.belongsTo(usuarios, { as: "entrega_user_usuario", foreignKey: "entrega_user"});
  usuarios.hasMany(tienda_ventas, { as: "entrega_user_tienda_venta", foreignKey: "entrega_user"});
  tienda_ventas_caja.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(tienda_ventas_caja, { as: "tienda_ventas_cajas", foreignKey: "id_user"});
  tienda_ventas_comentarios.belongsTo(usuarios, { as: "id_user_usuario", foreignKey: "id_user"});
  usuarios.hasMany(tienda_ventas_comentarios, { as: "tienda_ventas_comentarios", foreignKey: "id_user"});
  tienda_ventas_comentarios_visto.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(tienda_ventas_comentarios_visto, { as: "tienda_ventas_comentarios_vistos", foreignKey: "id_usuario"});
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

  return {
    acd_areas,
    acd_asig_grp,
    acd_asignaturas,
    acd_elementos,
    acd_escinscritos,
    acd_escuelas,
    acd_escuelas_fechas,
    acd_escuelas_imagenes,
    acd_escuelas_instructores,
    acd_escuelas_motivos,
    acd_escuelas_sedes,
    acd_escuelas_uniformes,
    acd_escuelas_uniformes_fechas,
    acd_ortcategorias,
    acd_ortcategoriasgrados,
    acd_ortcategoriasidiomas,
    acd_ortdetalle,
    acd_ortelementos,
    acd_ortgeneral,
    acd_solicitud_asignacion,
    acd_solicitud_historial,
    acd_solicitud_motivo,
    acd_solicitud_retiro,
    acd_solicitud_retiro_motivo,
    acd_solicitud_tipo,
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
    admision_aspirantes,
    admision_aspirantes_anio,
    admision_aspirantes_documentos,
    admision_aspirantes_entrevistas,
    admision_aspirantes_entrevistas_compromisos,
    admision_aspirantes_examen,
    admision_aspirantes_examen_ingles,
    admision_aspirantes_examen_ingles_compro,
    admision_aspirantes_familiares,
    admision_config,
    admision_config_documentos,
    admision_config_entrevistas,
    admision_config_examen_ingles,
    admision_config_examen_ingles_compro,
    admision_config_examen_ingles_tipos_recurs,
    admision_familiares,
    admision_formulario,
    admision_formulario_caja,
    admision_procesos_usuarios,
    admision_visitas,
    calendario,
    calendario_categorias,
    config_anios,
    config_ciudades,
    config_data_formulario,
    config_data_opciones,
    config_data_preguntas,
    config_data_preguntas_formulario,
    config_data_preguntas_opciones,
    config_documentos,
    config_empresas,
    config_empresas_tranferencia,
    config_entrevistas,
    config_entrevistas_empleados,
    config_grados,
    config_grados_apps,
    config_grados_conceptos,
    config_grados_contratos,
    config_grados_cupos,
    config_grados_grupos_anios,
    config_grupos,
    config_modalidad,
    config_periodo,
    config_tipos_familiares,
    config_tipos_ident,
    control_contratos,
    control_contratos_grados,
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
    ctb_proveedores,
    ctb_proveedores_correos,
    ctb_proveedores_detalles,
    ctb_proveedores_pagos,
    ctb_proveedores_recordatorio,
    ctb_proveedores_respons,
    ctb_proveedores_tipos_ident,
    departamentos,
    departamentos_opciones,
    enc_categoria,
    enc_configuracion,
    enc_opcionespreg,
    enc_perfil_encuesta,
    enc_preguntas,
    enc_preguntas_encuesta,
    enc_resultados,
    enc_tipo_preguntas,
    epayco_cis,
    evl_asig_evaluaciones,
    evl_autempleados,
    evl_autestudiantes,
    evl_configuracion,
    evl_evalempleados,
    evl_evalestudiantes,
    evl_evaluadores,
    evl_preg_habilidades,
    evl_preguntas,
    evl_res_habilidades,
    evl_valoresgenerales,
    gnr_parametros,
    gnr_parametros_perfiles,
    gnr_parametros_usuarios,
    matricula_apps,
    matricula_config,
    matricula_consecutivos,
    matricula_contratos,
    matricula_control,
    matricula_estudiantes,
    matricula_estudiantes_anio,
    matricula_estudiantes_apps,
    matricula_estudiantes_codeudor,
    matricula_estudiantes_contratos,
    matricula_estudiantes_contratos_codigos,
    matricula_estudiantes_datosmedicos,
    matricula_estudiantes_desistimiento,
    matricula_estudiantes_documentos,
    matricula_estudiantes_familiares,
    matricula_familiares,
    matricula_meses,
    matricula_referidos,
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
    terceros,
    test_administracion,
    test_asig_ejercicios,
    test_asig_ejercicios_resp,
    test_cerebros,
    test_ejer_actividad,
    test_fecha_publicacion,
    test_general,
    test_menusconfig,
    test_permisos_opc,
    test_preguntas,
    test_prsexterno,
    test_recom_actividad,
    test_resdetalle,
    test_resgeneral,
    test_val_actividad,
    tienda_bodegas,
    tienda_bodegas_ajustes,
    tienda_bodegas_ajustes_productos,
    tienda_bodegas_movimientos,
    tienda_bodegas_movimientos_productos,
    tienda_bodegas_usuarios,
    tienda_bonos,
    tienda_categorias,
    tienda_categorias_contratos,
    tienda_compras,
    tienda_compras_productos,
    tienda_consecutivos,
    tienda_cuenta_empresas,
    tienda_cupon_autoriza,
    tienda_cupones,
    tienda_cupones_concepto,
    tienda_cupones_concepto_producto,
    tienda_cupones_controlacademic,
    tienda_cupones_estudiantes,
    tienda_cupones_excel,
    tienda_cupones_general,
    tienda_datos_corregir,
    tienda_medios_pago,
    tienda_medios_pago_tarjetas,
    tienda_pagos_cuentas,
    tienda_pagos_documentos,
    tienda_pagos_lugar,
    tienda_pagos_tarjetas,
    tienda_parametros,
    tienda_planes_acciones,
    tienda_planes_acciones_reg,
    tienda_planes_acciones_resp,
    tienda_procesos,
    tienda_productos,
    tienda_productos_bodega,
    tienda_productos_codigos,
    tienda_productos_compuesto,
    tienda_productos_imagenes,
    tienda_productos_relacion,
    tienda_productos_seguimiento,
    tienda_resoluciones,
    tienda_ventas,
    tienda_ventas_anio_anterior,
    tienda_ventas_caja,
    tienda_ventas_caja_venta,
    tienda_ventas_comentarios,
    tienda_ventas_comentarios_categ,
    tienda_ventas_comentarios_visto,
    tienda_ventas_cupones,
    tienda_ventas_cxc,
    tienda_ventas_cxc_abonos,
    tienda_ventas_cxc_comparacion,
    tienda_ventas_productos,
    usuarios,
    usuarios_departamentos,
    usuarios_opciones,
    usuarios_perfil,
    usuarios_perfil_opciones,
    usuarios_permisos_opciones,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
