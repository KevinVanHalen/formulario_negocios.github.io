// URL to send data to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0JC2n99K07kN-znWdY-ANK2cxA9Y50506YJ1tUazJRI1RzvZjwDTYcqa8jITCNEeq/exec'

const inputs = document.querySelectorAll('#formulario-contacto input.required')
const textareas = document.querySelectorAll('#formulario-contacto textarea.required')
const selects = document.querySelectorAll('#formulario-contacto select.required')

const campos = {
    nombre_tienda: false,
    email: false,
    modelo_negocio: true,
    industria: false,
    redes_sociales: false,
    mes_venta_alta: false,
    mes_venta_baja: false,
    ventas_hace_tres_meses: false,
    ventas_hace_dos_meses: false,
    ventas_mes_pasado: false,
    objetivo_ventas: false,
    aplicaciones_integraciones_anterior: false,
    medios_publicidad_pautada: false,
    presupuesto_mensual_publicidad_pautada: false,
    plataforma_base_datos_usuarios: false,
    usuarios_base_datos: false,
    plataforma_email_utilizada: false,
}

const campos_json = {
    nombre_tienda: '',
    email: '',
    modelo_negocio: '',
    otros_modelos_texto: '',
    industria: '',
    otros_industrias_texto: '',
    plataforma_ecommerce: '',
    otros_plataforma_ecommerce_texto: '',
    aplicaciones_integraciones_anterior: '',
    redes_sociales: [],
    otras_redes_sociales_texto: '',
    publicidad_pautada: '',
    medios_publicidad_pautada: '',
    presupuesto_mensual_publicidad_pautada: '',
    equipo_desarrollo: '',
    base_datos: '',
    plataforma_base_datos_usuarios: '',
    usuarios_base_datos: '',
    herramientas_email: '',
    plataforma_email_utilizada: '',
    mes_venta_alta: '',
    mes_venta_baja: '',
    ventas_hace_tres_meses: '',
    ventas_hace_dos_meses: '',
    ventas_mes_pasado: '',
    objetivo_ventas: '',
}

/**
 * ====================================================================================================
 * ================== Validaciones =========================
 * ====================================================================================================
 */

const validarFormularioInputsTextareas = (e) => {
    switch (e.target.name) {
        case "email":
            validarCampo(e.target, 'email')
            break
        case "nombre_tienda":
            validarCampo(e.target, 'nombre_tienda')
            break

        case "industria":
            validarCampo(e.target, 'industria')
            break

        case "ventas_hace_tres_meses":
            validarCampo(e.target, 'ventas_hace_tres_meses')
            break
        case "ventas_hace_dos_meses":
            validarCampo(e.target, 'ventas_hace_dos_meses')
            break
        case "ventas_mes_pasado":
            validarCampo(e.target, 'ventas_mes_pasado')
            break

        case "objetivo_ventas":
            validarCampo(e.target, 'objetivo_ventas')
            break

        case "mes_venta_alta":
            validarCampo(e.target, 'mes_venta_alta')
            break
        case "mes_venta_baja":
            validarCampo(e.target, 'mes_venta_baja')
            break

        case "aplicaciones_integraciones_anterior":
            validarCampo(e.target, 'aplicaciones_integraciones_anterior')
            break
        case "medios_publicidad_pautada":
            validarCampo(e.target, 'medios_publicidad_pautada')
            break
        case "presupuesto_mensual_publicidad_pautada":
            validarCampo(e.target, 'presupuesto_mensual_publicidad_pautada')
            break
        case "plataforma_base_datos_usuarios":
            validarCampo(e.target, 'plataforma_base_datos_usuarios')
            break
        case "usuarios_base_datos":
            validarCampo(e.target, 'usuarios_base_datos')
            break
        case "plataforma_email_utilizada":
            validarCampo(e.target, 'plataforma_email_utilizada')
            break
    }
}

const validarCampo = (input, campo) => {
    if (input.value == '') {
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        campos[campo] = false
    } else {
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        campos[campo] = true
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormularioInputsTextareas)
    input.addEventListener('blur', validarFormularioInputsTextareas)
})

textareas.forEach((textarea) => {
    textarea.addEventListener('keyup', validarFormularioInputsTextareas)
    textarea.addEventListener('blur', validarFormularioInputsTextareas)
})

selects.forEach((select) => {
    select.addEventListener('blur', validarFormularioInputsTextareas)
    select.addEventListener('change', validarFormularioInputsTextareas)
})

const validarNegativos = (e) => {
    if (e.value < 0) {
        e.value = 0
    }
}



// Campos a validar
const email = document.getElementById('email')
const nombre_tienda = document.getElementById('nombre_tienda')
const industria = document.getElementById('industria')
const ventas_hace_tres_meses = document.getElementById('ventas_hace_tres_meses')
const ventas_hace_dos_meses = document.getElementById('ventas_hace_dos_meses')
const ventas_mes_pasado = document.getElementById('ventas_mes_pasado')
const objetivo_ventas = document.getElementById('objetivo_ventas')
const mes_venta_alta = document.getElementById('mes_venta_alta')
const mes_venta_baja = document.getElementById('mes_venta_baja')
const aplicaciones_integraciones_anterior = document.getElementById('aplicaciones_integraciones_anterior')
const medios_publicidad_pautada = document.getElementById('medios_publicidad_pautada')
const presupuesto_mensual_publicidad_pautada = document.getElementById('presupuesto_mensual_publicidad_pautada')
const plataforma_base_datos_usuarios = document.getElementById('plataforma_base_datos_usuarios')
const usuarios_base_datos = document.getElementById('usuarios_base_datos')
const plataforma_email_utilizada = document.getElementById('plataforma_email_utilizada')

// Validar input
const validarInput = (e) => {
    switch (e.target.name) {
        case "email":
            validarCampo(e.target, 'email')
            break
        case "nombre_tienda":
            validarCampo(e.target, 'nombre_tienda')
            break

        case "industria":
            validarCampo(e.target, 'industria')
            break

        case "ventas_hace_tres_meses":
            validarCampo(e.target, 'ventas_hace_tres_meses')
            validarNegativos(e.target)
            break
        case "ventas_hace_dos_meses":
            validarCampo(e.target, 'ventas_hace_dos_meses')
            validarNegativos(e.target)
            break
        case "ventas_mes_pasado":
            validarCampo(e.target, 'ventas_mes_pasado')
            validarNegativos(e.target)
            break

        case "objetivo_ventas":
            validarCampo(e.target, 'objetivo_ventas')
            break

        case "mes_venta_alta":
            validarCampo(e.target, 'mes_venta_alta')
            break
        case "mes_venta_baja":
            validarCampo(e.target, 'mes_venta_baja')
            break

        case "aplicaciones_integraciones_anterior":
            validarCampo(e.target, 'aplicaciones_integraciones_anterior')
            break
        case "medios_publicidad_pautada":
            validarCampo(e.target, 'medios_publicidad_pautada')
            break
        case "presupuesto_mensual_publicidad_pautada":
            validarCampo(e.target, 'presupuesto_mensual_publicidad_pautada')
            break
        case "plataforma_base_datos_usuarios":
            validarCampo(e.target, 'plataforma_base_datos_usuarios')
            break
        case "usuarios_base_datos":
            validarCampo(e.target, 'usuarios_base_datos')
            break
        case "plataforma_email_utilizada":
            validarCampo(e.target, 'plataforma_email_utilizada')
            break
    }
}

// Eventos a escuchar para validar
email.addEventListener('keyup', validarInput)
email.addEventListener('blur', validarInput)
nombre_tienda.addEventListener('keyup', validarInput)
nombre_tienda.addEventListener('blur', validarInput)
industria.addEventListener('keyup', validarInput)
industria.addEventListener('blur', validarInput)
aplicaciones_integraciones_anterior.addEventListener('keyup', validarInput)
aplicaciones_integraciones_anterior.addEventListener('blur', validarInput)
medios_publicidad_pautada.addEventListener('keyup', validarInput)
medios_publicidad_pautada.addEventListener('blur', validarInput)
presupuesto_mensual_publicidad_pautada.addEventListener('keyup', validarInput)
presupuesto_mensual_publicidad_pautada.addEventListener('blur', validarInput)
plataforma_base_datos_usuarios.addEventListener('keyup', validarInput)
plataforma_base_datos_usuarios.addEventListener('blur', validarInput)
usuarios_base_datos.addEventListener('keyup', validarInput)
usuarios_base_datos.addEventListener('blur', validarInput)
plataforma_email_utilizada.addEventListener('keyup', validarInput)
plataforma_email_utilizada.addEventListener('blur', validarInput)
mes_venta_alta.addEventListener('keyup', validarInput)
mes_venta_alta.addEventListener('blur', validarInput)
mes_venta_baja.addEventListener('keyup', validarInput)
mes_venta_baja.addEventListener('blur', validarInput)
ventas_hace_tres_meses.addEventListener('keyup', validarInput)
ventas_hace_tres_meses.addEventListener('blur', validarInput)
ventas_hace_dos_meses.addEventListener('keyup', validarInput)
ventas_hace_dos_meses.addEventListener('blur', validarInput)
ventas_mes_pasado.addEventListener('keyup', validarInput)
ventas_mes_pasado.addEventListener('blur', validarInput)
objetivo_ventas.addEventListener('keyup', validarInput)
objetivo_ventas.addEventListener('blur', validarInput)

function validarEmail() {
    let email = document.getElementById('email')
    let text_email_invalid = document.getElementById('text_email_invalid')
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email.value == '') {
        document.getElementById('text_email_invalid').setAttribute('hidden', 1)
    } else if (validEmail.test(email.value)) {
        document.getElementById('text_email_invalid').setAttribute('hidden', 1)
    } else {
        document.getElementById('text_email_invalid').removeAttribute('hidden')
    }
}

// INICIO VALIDAR SELECT INDUSTRIA
function checkIndustria() {
    if (document.getElementById('industria').value == '') {
        document.querySelector(`#grupo__industria .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__industria`).classList.add('formulario__grupo-incorrecto')
        campos[industria] = false
    } else {
        document.querySelector(`#grupo__industria .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__industria`).classList.remove('formulario__grupo-incorrecto')
        campos[industria] = true
    }

    if (document.getElementById('industria').value == 'Otros') {
        document.getElementById('otros_industrias_texto').removeAttribute('hidden')

        document.querySelector(`#grupo__industria .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__industria`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.getElementById('otros_industrias_texto').setAttribute("hidden", true)

        document.querySelector(`#grupo__industria .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__industria`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoIndustria() {
    if (document.getElementById('otros_industrias_texto').value == '') {
        document.querySelector(`#grupo__industria .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__industria`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__industria .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__industria`).classList.remove('formulario__grupo-incorrecto')
    }
}
// FIN VALIDAR SELECT INDUSTRIA

// INICIO VALIDAR CHECKBOX MODELO NEGOCIOS
function checkModeloNegocios() {
    if (document.getElementById('otros_modelos').checked == true) {
        document.getElementById('otros_modelos_texto').removeAttribute('hidden')

        document.querySelector(`#grupo__modelo_negocio .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__modelo_negocio`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.getElementById('otros_modelos_texto').setAttribute("hidden", true)

        document.querySelector(`#grupo__modelo_negocio .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__modelo_negocio`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoOtroModeloNegocios() {
    if (document.getElementById('otros_modelos_texto').value == '') {
        document.querySelector(`#grupo__modelo_negocio .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__modelo_negocio`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__modelo_negocio .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__modelo_negocio`).classList.remove('formulario__grupo-incorrecto')
    }
}
// FIN VALIDAR CHECKBOX MODELO NEGOCIOS

// INICIO VALIDAR CHECKBOX MODELO NEGOCIOS
function checkPlataformaEcommerce() {
    if (document.getElementById('otros_plataforma_ecommerce').checked == true) {
        document.getElementById('otros_plataforma_ecommerce_texto').removeAttribute('hidden')

        document.querySelector(`#grupo__plataforma_ecommerce .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__plataforma_ecommerce`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.getElementById('otros_plataforma_ecommerce_texto').setAttribute("hidden", true)

        document.querySelector(`#grupo__plataforma_ecommerce .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__plataforma_ecommerce`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoOtroPlataformaEcommerce() {
    if (document.getElementById('otros_plataforma_ecommerce_texto').value == '') {
        document.querySelector(`#grupo__plataforma_ecommerce .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__plataforma_ecommerce`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__plataforma_ecommerce .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__plataforma_ecommerce`).classList.remove('formulario__grupo-incorrecto')
    }
}
// FIN VALIDAR CHECKBOX MODELO NEGOCIOS

// INICIO VALIDAR CHECK REDES SOCIALES
function checkRedesSociales() {
    if (document.getElementById('otras_redes_sociales').checked == true) {
        document.querySelector(`#grupo__redes_sociales .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__redes_sociales`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__redes_sociales .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__redes_sociales`).classList.remove('formulario__grupo-incorrecto')
    }
    document.getElementById('select_redes_required').setAttribute('hidden', 1)
}

function validarCampoOtrasRedesSociales() {
    if (document.getElementById('otras_redes_sociales_texto').value == '') {
        document.querySelector(`#grupo__redes_sociales .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__redes_sociales`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__redes_sociales .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__redes_sociales`).classList.remove('formulario__grupo-incorrecto')
    }
}
// FIN VALIDAR CHECK REDES SOCIALES

// INICIO VALIDAR CHECKBOX PUBLICIDAD PAUTADA
function checkPublicidadPautada() {
    if (document.getElementById('publicidad_pautada_si').checked == true) {
        document.getElementById('grupo__medios_publicidad_pautada').removeAttribute('hidden')
        document.getElementById('grupo__presupuesto_mensual_publicidad_pautada').removeAttribute('hidden')
    } else {
        document.getElementById('grupo__medios_publicidad_pautada').setAttribute("hidden", true)
        document.getElementById('grupo__presupuesto_mensual_publicidad_pautada').setAttribute("hidden", true)
    }
}
// FIN VALIDAR CHECKBOX PUBLICIDAD PAUTADA

// INICIO VALIDAR CHECKBOX BASE DE DATOS DE USUARIOS
function checkBaseDatosUsuarios() {
    if (document.getElementById('base_datos_si').checked == true) {
        document.getElementById('grupo__plataforma_base_datos_usuarios').removeAttribute('hidden')
        document.getElementById('grupo__usuarios_base_datos').removeAttribute('hidden')
    } else {
        document.getElementById('grupo__plataforma_base_datos_usuarios').setAttribute("hidden", true)
        document.getElementById('grupo__usuarios_base_datos').setAttribute("hidden", true)
    }
}
// FIN VALIDAR CHECKBOX BASE DE DATOS DE USUARIOS

// INICIO VALIDAR CHECKBOX PLATAFORMA DE EMAIL
function checkPlataformaEmail() {
    if (document.getElementById('herramientas_email_si').checked == true) {
        document.getElementById('grupo__plataforma_email_utilizada').removeAttribute('hidden')
    } else {
        document.getElementById('grupo__plataforma_email_utilizada').setAttribute("hidden", true)
    }
}
// FIN VALIDAR CHECKBOX PLATAFORMA DE EMAIL

/**
 * ====================================================================================================
 * ================== Funciones para los botones avanzar, retroceder y enviar =========================
 * ====================================================================================================
 */

function next_1() {
    let email = document.getElementById('email')
    let nombre_tienda = document.getElementById('nombre_tienda')
    let avanzar = true

    let text_email_invalid = document.getElementById('text_email_invalid')
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email.value == '') {
        document.querySelector(`#grupo__email .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__email`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        if (validEmail.test(email.value)) {
            // alert('Email valido')
            document.getElementById('text_email_invalid').setAttribute('hidden', 1)
        } else {
            // alert('Email invalido')
            // document.getElementById('text_email_invalid').setAttribute('hidden', 1)
            document.getElementById('text_email_invalid').removeAttribute('hidden')
            avanzar = false
        }
        document.querySelector(`#grupo__email .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__email`).classList.remove('formulario__grupo-incorrecto')
    }


    if (nombre_tienda.value == '') {
        document.querySelector(`#grupo__nombre_tienda .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__nombre_tienda`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__nombre_tienda .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__nombre_tienda`).classList.remove('formulario__grupo-incorrecto')
    }
    
    if (avanzar) {
        campos_json.email = document.getElementById('email').value
        campos_json.nombre_tienda = document.getElementById('nombre_tienda').value

        document.getElementById('form_1').setAttribute('hidden', 1)
        document.getElementById('form_2').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '2'
    }
}

function next_2() {
    let otros_modelos_check = document.getElementById('otros_modelos')
    let otros_modelos_texto = document.getElementById('otros_modelos_texto')
    let avanzar = true

    if (otros_modelos_check.checked && otros_modelos_texto.value == '') {
        avanzar = false
    }

    if (avanzar) {
        let checkboxes_modelo_negocio = document.querySelectorAll('input[name="modelo_negocio"]:checked')
        campos_json.modelo_negocio = checkboxes_modelo_negocio[0].value
        campos_json.otros_modelos_texto = document.getElementById('otros_modelos_texto').value

        document.getElementById('form_2').setAttribute('hidden', 1)
        document.getElementById('form_3').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '3'
    }
}

function previous_1() {
    document.getElementById('form_2').setAttribute('hidden', 1)
    document.getElementById('form_1').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '1'
}

function next_3() {
    let industria = document.getElementById('industria')
    let otros_industrias_texto = document.getElementById('otros_industrias_texto')
    let avanzar = true

    if (industria.value == '') {
        document.querySelector(`#grupo__industria .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__industria`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        if (industria.value == 'Otros') {
            if (otros_industrias_texto.value == '') {
                document.querySelector(`#grupo__industria .formulario__input-error`).classList.add('formulario__input-error-activo')
                document.getElementById(`grupo__industria`).classList.add('formulario__grupo-incorrecto')
                avanzar = false
            } else {
                document.querySelector(`#grupo__industria .formulario__input-error`).classList.remove('formulario__input-error-activo')
                document.getElementById(`grupo__industria`).classList.remove('formulario__grupo-incorrecto')
            }
        } else {
            document.querySelector(`#grupo__industria .formulario__input-error`).classList.remove('formulario__input-error-activo')
            document.getElementById(`grupo__industria`).classList.remove('formulario__grupo-incorrecto')
        }
    }

    if (avanzar) {
        let select_industria = document.getElementById('industria')
        campos_json.industria = select_industria.options[select_industria.selectedIndex].text
        campos_json.otros_industrias_texto = document.getElementById('otros_industrias_texto').value

        document.getElementById('form_3').setAttribute('hidden', 1)
        document.getElementById('form_4').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '4'
    }
}

function previous_2() {
    document.getElementById('form_3').setAttribute('hidden', 1)
    document.getElementById('form_2').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '2'
}

function next_4() {
    let otros_plataforma_ecommerce_check = document.getElementById('otros_plataforma_ecommerce')
    let otros_plataforma_ecommerce_texto = document.getElementById('otros_plataforma_ecommerce_texto')
    let avanzar = true

    if (otros_plataforma_ecommerce_check.checked && otros_plataforma_ecommerce_texto.value == '') {
        avanzar = false
    }

    if (avanzar) {
        let checkboxes_plataforma_ecommerce = document.querySelectorAll('input[name="plataforma_ecommerce"]:checked')
        campos_json.plataforma_ecommerce = checkboxes_plataforma_ecommerce[0].value
        campos_json.otros_plataforma_ecommerce_texto = document.getElementById('otros_plataforma_ecommerce_texto').value

        document.getElementById('form_4').setAttribute('hidden', 1)
        document.getElementById('form_5').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '5'
    }
}

function previous_3() {
    document.getElementById('form_4').setAttribute('hidden', 1)
    document.getElementById('form_3').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '3'
}

function next_5() {
    let aplicaciones_integraciones_anterior = document.getElementById('aplicaciones_integraciones_anterior')
    let avanzar = true

    if (aplicaciones_integraciones_anterior.value == '') {
        document.querySelector(`#grupo__aplicaciones_integraciones_anterior .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__aplicaciones_integraciones_anterior`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__aplicaciones_integraciones_anterior .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__aplicaciones_integraciones_anterior`).classList.remove('formulario__grupo-incorrecto')
    }

    if (avanzar) {
        campos_json.aplicaciones_integraciones_anterior = document.getElementById('aplicaciones_integraciones_anterior').value

        document.getElementById('form_5').setAttribute('hidden', 1)
        document.getElementById('form_6').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '6'
    }
}

function previous_4() {
    document.getElementById('form_5').setAttribute('hidden', 1)
    document.getElementById('form_4').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '4'
}

function next_6() {
    let checkboxes_redes_sociales = document.querySelectorAll('input[name="redes_sociales[]"]:checked')
    let avanzar = true
    if (checkboxes_redes_sociales.length > 0) {
        if (document.getElementById('otras_redes_sociales').checked) {
            if (document.getElementById('otras_redes_sociales_texto').value != '') {
                // campos.redes_sociales = true
            } else {
                // campos.redes_sociales = false
                avanzar = false
            }
            document.getElementById('select_redes_required').setAttribute('hidden', 1)
        } else {
            // campos.redes_sociales = true
            document.getElementById('select_redes_required').setAttribute('hidden', 1)
        }
    } else {
        document.getElementById('select_redes_required').removeAttribute('hidden')
        avanzar = false
    }

    if (avanzar) {
        campos_json.redes_sociales = []

        let checkboxes_redes_sociales = document.querySelectorAll('input[name="redes_sociales[]"]:checked')
        checkboxes_redes_sociales.forEach(e => {
            campos_json.redes_sociales.push(e.value)
        })

        campos_json.otras_redes_sociales_texto = document.getElementById('otras_redes_sociales_texto').value

        document.getElementById('form_6').setAttribute('hidden', 1)
        document.getElementById('form_7').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '7'
    }
}

function previous_5() {
    document.getElementById('form_6').setAttribute('hidden', 1)
    document.getElementById('form_5').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '5'
}

function next_7() {
    let checkboxes_publicidad_pautada = document.querySelectorAll('input[name="publicidad_pautada"]:checked')
    campos_json.publicidad_pautada = checkboxes_publicidad_pautada[0].value

    let medios_publicidad_pautada = document.getElementById('medios_publicidad_pautada')
    let presupuesto_mensual_publicidad_pautada = document.getElementById('presupuesto_mensual_publicidad_pautada')
    let avanzar = true

    if (document.getElementById('publicidad_pautada_si').checked == true){
        if (medios_publicidad_pautada.value == '') {
            document.querySelector(`#grupo__medios_publicidad_pautada .formulario__input-error`).classList.add('formulario__input-error-activo')
            document.getElementById(`grupo__medios_publicidad_pautada`).classList.add('formulario__grupo-incorrecto')
            avanzar = false
        } else {
            document.querySelector(`#grupo__medios_publicidad_pautada .formulario__input-error`).classList.remove('formulario__input-error-activo')
            document.getElementById(`grupo__medios_publicidad_pautada`).classList.remove('formulario__grupo-incorrecto')
        }
    
        if (presupuesto_mensual_publicidad_pautada.value == '') {
            document.querySelector(`#grupo__presupuesto_mensual_publicidad_pautada .formulario__input-error`).classList.add('formulario__input-error-activo')
            document.getElementById(`grupo__presupuesto_mensual_publicidad_pautada`).classList.add('formulario__grupo-incorrecto')
            avanzar = false
        } else {
            document.querySelector(`#grupo__presupuesto_mensual_publicidad_pautada .formulario__input-error`).classList.remove('formulario__input-error-activo')
            document.getElementById(`grupo__presupuesto_mensual_publicidad_pautada`).classList.remove('formulario__grupo-incorrecto')
        }
    } else {
        document.getElementById('medios_publicidad_pautada').value = ''
        document.getElementById('presupuesto_mensual_publicidad_pautada').value = ''
    }

    if (avanzar) {
        campos_json.medios_publicidad_pautada = document.getElementById('medios_publicidad_pautada').value
        campos_json.presupuesto_mensual_publicidad_pautada = document.getElementById('presupuesto_mensual_publicidad_pautada').value

        document.getElementById('form_7').setAttribute('hidden', 1)
        document.getElementById('form_8').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '8'
    }
}

function previous_6() {
    document.getElementById('form_7').setAttribute('hidden', 1)
    document.getElementById('form_6').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '6'
}

function next_8() {
    let checkboxes_equipo_desarrollo = document.querySelectorAll('input[name="equipo_desarrollo"]:checked')
    campos_json.equipo_desarrollo = checkboxes_equipo_desarrollo[0] ? checkboxes_equipo_desarrollo[0].value : ''

    document.getElementById('form_8').setAttribute('hidden', 1)
    document.getElementById('form_9').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '9'
}

function previous_7() {
    document.getElementById('form_8').setAttribute('hidden', 1)
    document.getElementById('form_7').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '7'
}

function next_9() {
    let checkboxes_base_datos = document.querySelectorAll('input[name="base_datos"]:checked')
    campos_json.base_datos = checkboxes_base_datos[0] ? checkboxes_base_datos[0].value : ''
    
    let plataforma_base_datos_usuarios = document.getElementById('plataforma_base_datos_usuarios')
    let usuarios_base_datos = document.getElementById('usuarios_base_datos')
    let avanzar = true

    if (document.getElementById('base_datos_si').checked == true){
        if (plataforma_base_datos_usuarios.value == '') {
            document.querySelector(`#grupo__plataforma_base_datos_usuarios .formulario__input-error`).classList.add('formulario__input-error-activo')
            document.getElementById(`grupo__plataforma_base_datos_usuarios`).classList.add('formulario__grupo-incorrecto')
            avanzar = false
        } else {
            document.querySelector(`#grupo__plataforma_base_datos_usuarios .formulario__input-error`).classList.remove('formulario__input-error-activo')
            document.getElementById(`grupo__plataforma_base_datos_usuarios`).classList.remove('formulario__grupo-incorrecto')
        }
    
        if (usuarios_base_datos.value == '') {
            document.querySelector(`#grupo__usuarios_base_datos .formulario__input-error`).classList.add('formulario__input-error-activo')
            document.getElementById(`grupo__usuarios_base_datos`).classList.add('formulario__grupo-incorrecto')
            avanzar = false
        } else {
            document.querySelector(`#grupo__usuarios_base_datos .formulario__input-error`).classList.remove('formulario__input-error-activo')
            document.getElementById(`grupo__usuarios_base_datos`).classList.remove('formulario__grupo-incorrecto')
        }
    } else {
        document.getElementById('plataforma_base_datos_usuarios').value = ''
        document.getElementById('usuarios_base_datos').value = ''
    }

    if (avanzar) {
        campos_json.plataforma_base_datos_usuarios = document.getElementById('medios_publicidad_pautada').value
        campos_json.usuarios_base_datos = document.getElementById('presupuesto_mensual_publicidad_pautada').value

        document.getElementById('form_9').setAttribute('hidden', 1)
        document.getElementById('form_10').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '10'
    }
}

function previous_8() {
    document.getElementById('form_9').setAttribute('hidden', 1)
    document.getElementById('form_8').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '8'
}

function next_10() {
    let checkboxes_herramientas_email = document.querySelectorAll('input[name="herramientas_email"]:checked')
    campos_json.herramientas_email = checkboxes_herramientas_email[0].value

    let plataforma_email_utilizada = document.getElementById('plataforma_email_utilizada')
    let avanzar = true

    if (document.getElementById('herramientas_email_si').checked == true){
        if (plataforma_email_utilizada.value == '') {
            document.querySelector(`#grupo__plataforma_email_utilizada .formulario__input-error`).classList.add('formulario__input-error-activo')
            document.getElementById(`grupo__plataforma_email_utilizada`).classList.add('formulario__grupo-incorrecto')
            avanzar = false
        } else {
            document.querySelector(`#grupo__plataforma_email_utilizada .formulario__input-error`).classList.remove('formulario__input-error-activo')
            document.getElementById(`grupo__plataforma_email_utilizada`).classList.remove('formulario__grupo-incorrecto')
        }
    } else {
        document.getElementById('plataforma_email_utilizada').value = ''
    }

    if (avanzar) {
        campos_json.plataforma_email_utilizada = document.getElementById('plataforma_email_utilizada').value

        document.getElementById('form_10').setAttribute('hidden', 1)
        document.getElementById('form_11').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '11'
    }
}

function previous_9() {
    document.getElementById('form_10').setAttribute('hidden', 1)
    document.getElementById('form_9').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '9'
}

function next_11() {
    let mes_venta_alta = document.getElementById('mes_venta_alta')
    let mes_venta_baja = document.getElementById('mes_venta_baja')
    let avanzar = true

    if (mes_venta_alta.value == '') {
        document.querySelector(`#grupo__mes_venta_alta .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__mes_venta_alta`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__mes_venta_alta .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__mes_venta_alta`).classList.remove('formulario__grupo-incorrecto')
    }

    if (mes_venta_baja.value == '') {
        document.querySelector(`#grupo__mes_venta_baja .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__mes_venta_baja`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__mes_venta_baja .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__mes_venta_baja`).classList.remove('formulario__grupo-incorrecto')
    }

    if (avanzar) {
        campos_json.mes_venta_alta = document.getElementById('mes_venta_alta').value
        campos_json.mes_venta_baja = document.getElementById('mes_venta_baja').value

        document.getElementById('form_11').setAttribute('hidden', 1)
        document.getElementById('form_12').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '12'
    }
}

function previous_10() {
    document.getElementById('form_11').setAttribute('hidden', 1)
    document.getElementById('form_10').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '10'
}

function next_12() {
    let ventas_hace_tres_meses = document.getElementById('ventas_hace_tres_meses')
    let ventas_hace_dos_meses = document.getElementById('ventas_hace_dos_meses')
    let ventas_mes_pasado = document.getElementById('ventas_mes_pasado')
    let avanzar = true

    if (ventas_hace_tres_meses.value == '') {
        document.querySelector(`#grupo__ventas_hace_tres_meses .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__ventas_hace_tres_meses`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__ventas_hace_tres_meses .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__ventas_hace_tres_meses`).classList.remove('formulario__grupo-incorrecto')
    }

    if (ventas_hace_dos_meses.value == '') {
        document.querySelector(`#grupo__ventas_hace_dos_meses .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__ventas_hace_dos_meses`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__ventas_hace_dos_meses .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__ventas_hace_dos_meses`).classList.remove('formulario__grupo-incorrecto')
    }

    if (ventas_mes_pasado.value == '') {
        document.querySelector(`#grupo__ventas_mes_pasado .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__ventas_mes_pasado`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__ventas_mes_pasado .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__ventas_mes_pasado`).classList.remove('formulario__grupo-incorrecto')
    }
    
    if (avanzar) {
        campos_json.ventas_hace_tres_meses = document.getElementById('ventas_hace_tres_meses').value
        campos_json.ventas_hace_dos_meses = document.getElementById('ventas_hace_dos_meses').value
        campos_json.ventas_mes_pasado = document.getElementById('ventas_mes_pasado').value

        document.getElementById('form_12').setAttribute('hidden', 1)
        document.getElementById('form_13').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '13'
    }
}

function previous_11() {
    document.getElementById('form_12').setAttribute('hidden', 1)
    document.getElementById('form_11').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '11'
}

function next_13() {
    let objetivo_ventas = document.getElementById('objetivo_ventas')
    let avanzar = true

    if (objetivo_ventas.value == '') {
        document.querySelector(`#grupo__objetivo_ventas .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__objetivo_ventas`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__objetivo_ventas .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__objetivo_ventas`).classList.remove('formulario__grupo-incorrecto')
    }

    if (avanzar) {
        campos_json.objetivo_ventas = document.getElementById('objetivo_ventas').value

        const button_loading = document.getElementById('save_button')
        document.getElementById('save_button').setAttribute('disabled', '')
        button_loading.innerHTML = "<div class='loader'></div>"

        document.getElementById('previous_button_12').setAttribute('hidden', 1)

        /**
         * Send data to google sheets
         */
        const formData = new FormData()

        formData.append('nombre_tienda', campos_json.nombre_tienda)
        formData.append('email', campos_json.email)
        formData.append('modelo_negocio', campos_json.modelo_negocio)
        formData.append('otros_modelos_texto', campos_json.otros_modelos_texto)
        formData.append('industria', campos_json.industria)
        formData.append('otros_industrias_texto', campos_json.otros_industrias_texto)
        formData.append('plataforma_ecommerce', campos_json.plataforma_ecommerce)
        formData.append('otros_plataforma_ecommerce_texto', campos_json.otros_plataforma_ecommerce_texto)
        formData.append('aplicaciones_integraciones_anterior', campos_json.aplicaciones_integraciones_anterior)
        formData.append('redes_sociales', campos_json.redes_sociales)
        formData.append('otras_redes_sociales_texto', campos_json.otras_redes_sociales_texto)
        formData.append('publicidad_pautada', campos_json.publicidad_pautada)
        formData.append('medios_publicidad_pautada', campos_json.medios_publicidad_pautada)
        formData.append('presupuesto_mensual_publicidad_pautada', campos_json.presupuesto_mensual_publicidad_pautada)
        formData.append('equipo_desarrollo', campos_json.equipo_desarrollo)
        formData.append('base_datos', campos_json.base_datos)
        formData.append('plataforma_base_datos_usuarios', campos_json.plataforma_base_datos_usuarios)
        formData.append('usuarios_base_datos', campos_json.usuarios_base_datos)
        formData.append('herramientas_email', campos_json.herramientas_email)
        formData.append('plataforma_email_utilizada', campos_json.plataforma_email_utilizada)
        formData.append('mes_venta_alta', campos_json.mes_venta_alta)
        formData.append('mes_venta_baja', campos_json.mes_venta_baja)
        formData.append('ventas_hace_tres_meses', campos_json.ventas_hace_tres_meses)
        formData.append('ventas_hace_dos_meses', campos_json.ventas_hace_dos_meses)
        formData.append('ventas_mes_pasado', campos_json.ventas_mes_pasado)
        formData.append('objetivo_ventas', campos_json.objetivo_ventas)

        fetch(scriptURL, {
            method: 'POST', 
            body: formData
        })
        .then(response => {
            // console.log('Success!', response)

            document.getElementById('form_13').setAttribute('hidden', 1)
            document.getElementById('div-last-form').removeAttribute('hidden')
            document.getElementById('form_14').removeAttribute('hidden')

            document.getElementById('div_count_questions').setAttribute('hidden', 1)

            // alert("Gracias! Tu información fue cargada correctamente." )
        })
        .catch(error => {
            // console.error('Error!', error.message)
            button_loading.innerHTML = "<span>Enviar</span>"
            alert("Error! No se pudo cargar la información correctamente." )
        })

        document.getElementById('span_number_questions_form_2').textContent = '13'
    }
}

function previous_12() {
    document.getElementById('form_13').setAttribute('hidden', 1)
    document.getElementById('form_12').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '12'
}