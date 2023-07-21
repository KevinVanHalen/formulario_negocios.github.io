// URL to send data to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0JC2n99K07kN-znWdY-ANK2cxA9Y50506YJ1tUazJRI1RzvZjwDTYcqa8jITCNEeq/exec'

const inputs = document.querySelectorAll('#formulario-contacto input.required')
const textareas = document.querySelectorAll('#formulario-contacto textarea.required')
const selects = document.querySelectorAll('#formulario-contacto select.required')

const campos = {
    email: false,
    nombre_tienda: false,
    modelo_negocio: true,
    industria: false,
    ventas_hace_tres_meses: false,
    ventas_hace_dos_meses: false,
    ventas_mes_pasado: false,
    redes_sociales: false,
    formato_publicidad: false,
    difusion: false,
    publicidad_pautada: true,
    publicidad_no_digital: true,
    objetivo_ventas: false,
    herramientas_email: true,
    flujos_correo: true,
    meses_ventas_altas: false,
    meses_ventas_bajas: false,
    atencion_cliente: true,
    atencion_cliente_digitales: true,
    otros_medios_tradicionales: true,
    otros_datos_usuarios_almacenados: true,
}

const campos_json = {
    email: '',
    nombre_tienda: '',
    modelo_negocio: '',
    otros_modelos_texto: '',
    industria: '',
    otros_industrias_texto: '',
    ventas_hace_tres_meses: '',
    ventas_hace_dos_meses: '',
    ventas_mes_pasado: '',
    redes_sociales: [],
    otros_redes_sociales_texto: '',
    formato_publicidad: [],
    otros_formatos_texto: '',
    difusion: [],
    otros_difusion_texto: '',
    publicidad_pautada: '',
    publicidad_digitales: [],
    presupuesto_marketing: '',
    publicidad_no_digital: '',
    publicidad_tradicionales: [],
    otros_publicidad_tradicional: '',
    equipo_desarrollo: '',
    equipo_administracion: '',
    objetivo_ventas: '',
    base_datos: '',
    usuarios_base_datos: '',
    datos_usuarios: [],
    otros_datos_usuarios: '',
    herramientas_email: '',
    herramienta_email_utilizada: '',
    flujos_correo: '',
    plataformas_carritos: '',
    meses_ventas_altas: '',
    meses_ventas_bajas: '',
    atencion_cliente: '',
    otros_atencion_cliente: '',
    atencion_cliente_digitales: [],
    otros_atencion_cliente_digitales: '',
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

        case "meses_ventas_altas":
            validarCampo(e.target, 'meses_ventas_altas')
            break
        case "meses_ventas_bajas":
            validarCampo(e.target, 'meses_ventas_bajas')
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

// VALIDAR CHECK REDES SOCIALES
function checkFormatosPublicidad() {
    if (document.getElementById('otros_formatos').checked == true) {
        document.querySelector(`#grupo__formato_publicidad .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__formato_publicidad`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__formato_publicidad .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__formato_publicidad`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoOtrosFormatosPublicidad() {
    if (document.getElementById('otros_formatos_texto').value == '') {
        document.querySelector(`#grupo__formato_publicidad .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__formato_publicidad`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__formato_publicidad .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__formato_publicidad`).classList.remove('formulario__grupo-incorrecto')
    }
}

// VALIDAR CHECK DIFUSION
function checkDifusion() {
    if (document.getElementById('otros_difusion').checked == true) {
        document.querySelector(`#grupo__difusion .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__difusion`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__difusion .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__difusion`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoOtrosDifusion() {
    if (document.getElementById('otros_difusion_texto').value == '') {
        document.querySelector(`#grupo__difusion .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__difusion`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__difusion .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__difusion`).classList.remove('formulario__grupo-incorrecto')
    }
}

// VALIDAR CHECK PUBLICIDAD TRADICIONALES
function checkPublicidadTradicionales() {
    if (document.getElementById('publicidad_otros_tradicionales').checked == true) {
        document.querySelector(`#grupo__publicidad_tradicionales .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__publicidad_tradicionales`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__publicidad_tradicionales .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__publicidad_tradicionales`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoOtrosDatosPublicidadTradicionales() {
    if (document.getElementById('publicidad_otros_tradicionales_texto').value == '') {
        document.querySelector(`#grupo__publicidad_tradicionales .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__publicidad_tradicionales`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__publicidad_tradicionales .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__publicidad_tradicionales`).classList.remove('formulario__grupo-incorrecto')
    }
}

// VALIDAR CHECK DATOS USUARIOS
function checkDatosUsuarios() {
    if (document.getElementById('datos_usuarios_otros_datos').checked == true) {
        document.querySelector(`#grupo__datos_usuarios .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__datos_usuarios`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__datos_usuarios .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__datos_usuarios`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoOtrosDatosUsuarios() {
    if (document.getElementById('otros_datos_usuarios_texto').value == '') {
        document.querySelector(`#grupo__datos_usuarios .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__datos_usuarios`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__datos_usuarios .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__datos_usuarios`).classList.remove('formulario__grupo-incorrecto')
    }
}

// INICIO VALIDAR CHECKBOX ATENCION CLIENTE
function checkAtencionCliente() {
    if (document.getElementById('atencion_cliente_otros').checked == true) {
        document.getElementById('atencion_cliente_otros_texto').removeAttribute('hidden')

        document.querySelector(`#grupo__atencion_cliente .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__atencion_cliente`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.getElementById('atencion_cliente_otros_texto').setAttribute("hidden", true)

        document.querySelector(`#grupo__atencion_cliente .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__atencion_cliente`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoOtroAtencionCliente() {
    if (document.getElementById('atencion_cliente_otros_texto').value == '') {
        document.querySelector(`#grupo__atencion_cliente .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__atencion_cliente`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__atencion_cliente .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__atencion_cliente`).classList.remove('formulario__grupo-incorrecto')
    }
}
// FIN VALIDAR CHECKBOX ATENCION CLIENTE

// VALIDAR CHECK ATENCION CLIENTE DIGITALES
function checkAtencionClientesDigitales() {
    if (document.getElementById('atencion_clientes_otros').checked == true) {
        document.querySelector(`#grupo__atencion_cliente_digitales .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__atencion_cliente_digitales`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__atencion_cliente_digitales .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__atencion_cliente_digitales`).classList.remove('formulario__grupo-incorrecto')
    }
}

function validarCampoOtrosDatosAtencionClientesDigitales() {
    if (document.getElementById('atencion_clientes_otros_texto').value == '') {
        document.querySelector(`#grupo__atencion_cliente_digitales .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__atencion_cliente_digitales`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__atencion_cliente_digitales .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__atencion_cliente_digitales`).classList.remove('formulario__grupo-incorrecto')
    }
}

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

// INICIO VALIDAR CHECK REDES SOCIALES
function checkRedesSociales() {
    if (document.getElementById('otros_redes_sociales').checked == true) {
        document.querySelector(`#grupo__redes_sociales .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__redes_sociales`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__redes_sociales .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__redes_sociales`).classList.remove('formulario__grupo-incorrecto')
    }
    document.getElementById('select_redes_required').setAttribute('hidden', 1)
}

function validarCampoOtrasRedesSociales() {
    if (document.getElementById('otros_redes_sociales_texto').value == '') {
        document.querySelector(`#grupo__redes_sociales .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__redes_sociales`).classList.add('formulario__grupo-incorrecto')
    } else {
        document.querySelector(`#grupo__redes_sociales .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__redes_sociales`).classList.remove('formulario__grupo-incorrecto')
    }
}
// FIN VALIDAR CHECK REDES SOCIALES

// Campos a validar
const email = document.getElementById('email')
const nombre_tienda = document.getElementById('nombre_tienda')
const industria = document.getElementById('industria')
const ventas_hace_tres_meses = document.getElementById('ventas_hace_tres_meses')
const ventas_hace_dos_meses = document.getElementById('ventas_hace_dos_meses')
const ventas_mes_pasado = document.getElementById('ventas_mes_pasado')
const objetivo_ventas = document.getElementById('objetivo_ventas')
const meses_ventas_altas = document.getElementById('meses_ventas_altas')
const meses_ventas_bajas = document.getElementById('meses_ventas_bajas')

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

        case "meses_ventas_altas":
            validarCampo(e.target, 'meses_ventas_altas')
            break
        case "meses_ventas_bajas":
            validarCampo(e.target, 'meses_ventas_bajas')
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
ventas_hace_tres_meses.addEventListener('keyup', validarInput)
ventas_hace_tres_meses.addEventListener('blur', validarInput)
ventas_hace_dos_meses.addEventListener('keyup', validarInput)
ventas_hace_dos_meses.addEventListener('blur', validarInput)
ventas_mes_pasado.addEventListener('keyup', validarInput)
ventas_mes_pasado.addEventListener('blur', validarInput)
objetivo_ventas.addEventListener('keyup', validarInput)
objetivo_ventas.addEventListener('blur', validarInput)
meses_ventas_altas.addEventListener('keyup', validarInput)
meses_ventas_altas.addEventListener('blur', validarInput)
meses_ventas_bajas.addEventListener('keyup', validarInput)
meses_ventas_bajas.addEventListener('blur', validarInput)

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
    let industria = document.getElementById('industria')
    let otros_industrias_texto = document.getElementById('otros_industrias_texto')
    let avanzar = true

    if (otros_modelos_check.checked && otros_modelos_texto.value == '') {
        avanzar = false
    }

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
        let checkboxes_modelo_negocio = document.querySelectorAll('input[name="modelo_negocio"]:checked')
        campos_json.modelo_negocio = checkboxes_modelo_negocio[0].value
        campos_json.otros_modelos_texto = document.getElementById('otros_modelos_texto').value

        let select_industria = document.getElementById('industria')
        campos_json.industria = select_industria.options[select_industria.selectedIndex].text
        campos_json.otros_industrias_texto = document.getElementById('otros_industrias_texto').value

        document.getElementById('form_2').setAttribute('hidden', 1)
        document.getElementById('form_3').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '4'
    }
}

function previous_1() {
    document.getElementById('form_2').setAttribute('hidden', 1)
    document.getElementById('form_1').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '0'
}



function next_3() {
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

        document.getElementById('form_3').setAttribute('hidden', 1)
        document.getElementById('form_4').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '7'
    }
}

function previous_2() {
    document.getElementById('form_3').setAttribute('hidden', 1)
    document.getElementById('form_2').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '2'
}



function next_4() {
    let checkboxes_redes_sociales = document.querySelectorAll('input[name="redes_sociales[]"]:checked')
    let avanzar = true
    if (checkboxes_redes_sociales.length > 0) {
        if (document.getElementById('otros_redes_sociales').checked) {
            if (document.getElementById('otros_redes_sociales_texto').value != '') {
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

        campos_json.otros_redes_sociales_texto = document.getElementById('otros_redes_sociales_texto').value

        document.getElementById('form_4').setAttribute('hidden', 1)
        document.getElementById('form_5').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '8'
    }
}

function previous_3() {
    document.getElementById('form_4').setAttribute('hidden', 1)
    document.getElementById('form_3').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '4'
}

function next_5() {
    let checkboxes_formato_publicidad = document.querySelectorAll('input[name="formato_publicidad[]"]:checked')
    let avanzar = true
    if (checkboxes_formato_publicidad.length > 0) {
        if (document.getElementById('otros_formatos').checked) {
            if (document.getElementById('otros_formatos_texto').value != '') {
                // campos.redes_sociales = true
            } else {
                // campos.redes_sociales = false
                avanzar = false
            }
            document.getElementById('select_formato_publicidad_required').setAttribute('hidden', 1)
        } else {
            // campos.redes_sociales = true
            document.getElementById('select_formato_publicidad_required').setAttribute('hidden', 1)
        }
    } else {
        document.getElementById('select_formato_publicidad_required').removeAttribute('hidden')
        avanzar = false
    }

    if (avanzar) {
        campos_json.formato_publicidad = []

        let checkboxes_formato_publicidad = document.querySelectorAll('input[name="formato_publicidad[]"]:checked')
        checkboxes_formato_publicidad.forEach(e => {
            campos_json.formato_publicidad.push(e.value)
        })

        campos_json.otros_formatos_texto = document.getElementById('otros_formatos_texto').value

        document.getElementById('form_5').setAttribute('hidden', 1)
        document.getElementById('form_6').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '9'
    }
}

function previous_4() {
    document.getElementById('form_5').setAttribute('hidden', 1)
    document.getElementById('form_4').removeAttribute('hidden')
    
    document.getElementById('span_number_questions_form_2').textContent = '7'
}

function next_6() {
    let checkboxes_difusion = document.querySelectorAll('input[name="difusion[]"]:checked')
    let avanzar = true
    if (checkboxes_difusion.length > 0) {
        if (document.getElementById('otros_difusion').checked) {
            if (document.getElementById('otros_difusion_texto').value != '') {
                // campos.redes_sociales = true
            } else {
                // campos.redes_sociales = false
                avanzar = false
            }
            document.getElementById('select_difusion_required').setAttribute('hidden', 1)
        } else {
            // campos.redes_sociales = true
            document.getElementById('select_difusion_required').setAttribute('hidden', 1)
        }
    } else {
        document.getElementById('select_difusion_required').removeAttribute('hidden')
        avanzar = false
    }

    if (avanzar) {
        campos_json.difusion = []

        let checkboxes_difusion = document.querySelectorAll('input[name="difusion[]"]:checked')
        checkboxes_difusion.forEach(e => {
            campos_json.difusion.push(e.value)
        })

        campos_json.otros_difusion_texto = document.getElementById('otros_difusion_texto').value
        
        document.getElementById('form_6').setAttribute('hidden', 1)
        document.getElementById('form_7').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '10'
    }
}

function previous_5() {
    document.getElementById('form_6').setAttribute('hidden', 1)
    document.getElementById('form_5').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '8'
}

function next_7() {
    let checkboxes_publicidad_pautada = document.querySelectorAll('input[name="publicidad_pautada"]:checked')
    campos_json.publicidad_pautada = checkboxes_publicidad_pautada[0].value

    campos_json.publicidad_digitales = []
    let checkboxes_publicidad_digitales = document.querySelectorAll('input[name="publicidad_digitales[]"]:checked')
    checkboxes_publicidad_digitales.forEach(e => {
        campos_json.publicidad_digitales.push(e.value)
    })

    document.getElementById('form_7').setAttribute('hidden', 1)
    document.getElementById('form_8').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '12'
}

function previous_6() {
    document.getElementById('form_7').setAttribute('hidden', 1)
    document.getElementById('form_6').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '9'
}

function next_8() {
    let avanzar = true 
    if (document.getElementById('publicidad_otros_tradicionales').checked == true) {
        if (document.getElementById('publicidad_otros_tradicionales_texto').value == '') {
            avanzar = false
        }
    }

    if (avanzar) {
        campos_json.presupuesto_marketing = document.getElementById('presupuesto_marketing').value
        
        let checkboxes_publicidad_no_digital = document.querySelectorAll('input[name="publicidad_no_digital"]:checked')
        campos_json.publicidad_no_digital = checkboxes_publicidad_no_digital[0].value

        campos_json.publicidad_tradicionales = []
        let checkboxes_publicidad_tradicionales = document.querySelectorAll('input[name="publicidad_tradicionales[]"]:checked')
        checkboxes_publicidad_tradicionales.forEach(e => {
            campos_json.publicidad_tradicionales.push(e.value)
        })

        campos_json.publicidad_otros_tradicionales_texto = document.getElementById('publicidad_otros_tradicionales_texto').value

        document.getElementById('form_8').setAttribute('hidden', 1)
        document.getElementById('form_9').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '15'
    }
}

function previous_7() {
    document.getElementById('form_8').setAttribute('hidden', 1)
    document.getElementById('form_7').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '10'
}

function next_9() {
    let checkboxes_equipo_desarrollo = document.querySelectorAll('input[name="equipo_desarrollo"]:checked')
    campos_json.equipo_desarrollo = checkboxes_equipo_desarrollo[0] ? checkboxes_equipo_desarrollo[0].value : ''

    let checkboxes_equipo_administracion = document.querySelectorAll('input[name="equipo_administracion"]:checked')
    campos_json.equipo_administracion = checkboxes_equipo_administracion[0] ? checkboxes_equipo_administracion[0].value : ''

    document.getElementById('form_9').setAttribute('hidden', 1)
    document.getElementById('form_10').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '17'
}

function previous_8() {
    document.getElementById('form_9').setAttribute('hidden', 1)
    document.getElementById('form_8').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '12'
}

function next_10() {
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

        document.getElementById('form_10').setAttribute('hidden', 1)
        document.getElementById('form_11').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '18'
    }
}

function previous_9() {
    document.getElementById('form_10').setAttribute('hidden', 1)
    document.getElementById('form_9').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '15'
}

function next_11() {
    let checkboxes_base_datos = document.querySelectorAll('input[name="base_datos"]:checked')
    campos_json.base_datos = checkboxes_base_datos[0] ? checkboxes_base_datos[0].value : ''

    campos_json.usuarios_base_datos = document.getElementById('usuarios_base_datos').value

    document.getElementById('form_11').setAttribute('hidden', 1)
    document.getElementById('form_12').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '20'
}

function previous_10() {
    document.getElementById('form_11').setAttribute('hidden', 1)
    document.getElementById('form_10').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '17'
}

function next_12() {
    let avanzar = true 
    if (document.getElementById('datos_usuarios_otros_datos').checked == true) {
        if (document.getElementById('otros_datos_usuarios_texto').value == '') {
            avanzar = false
        }
    }

    if (avanzar) {
        campos_json.datos_usuarios = []
        let checkboxes_datos_usuarios = document.querySelectorAll('input[name="datos_usuarios[]"]:checked')
        checkboxes_datos_usuarios.forEach(e => {
            campos_json.datos_usuarios.push(e.value)
        })

        campos_json.otros_datos_usuarios = document.getElementById('otros_datos_usuarios_texto').value

        document.getElementById('form_12').setAttribute('hidden', 1)
        document.getElementById('form_13').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '21'
    }
}

function previous_11() {
    document.getElementById('form_12').setAttribute('hidden', 1)
    document.getElementById('form_11').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '18'
}

function next_13() {
    let checkboxes_herramientas_email = document.querySelectorAll('input[name="herramientas_email"]:checked')
    campos_json.herramientas_email = checkboxes_herramientas_email[0].value

    campos_json.herramienta_email_utilizada = document.getElementById('herramienta_email_utilizada').value

    document.getElementById('form_13').setAttribute('hidden', 1)
    document.getElementById('form_14').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '23'
}

function previous_12() {
    document.getElementById('form_13').setAttribute('hidden', 1)
    document.getElementById('form_12').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '20'
}

function next_14() {
    let checkboxes_flujos_correo = document.querySelectorAll('input[name="flujos_correo"]:checked')
    campos_json.flujos_correo = checkboxes_flujos_correo[0].value

    campos_json.plataformas_carritos = document.getElementById('plataformas_carritos').value

    document.getElementById('form_14').setAttribute('hidden', 1)
    document.getElementById('form_15').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '25'
}

function previous_13() {
    document.getElementById('form_14').setAttribute('hidden', 1)
    document.getElementById('form_13').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '21'
}

function next_15() {
    let meses_ventas_altas = document.getElementById('meses_ventas_altas')
    let meses_ventas_bajas = document.getElementById('meses_ventas_bajas')
    let avanzar = true

    if (meses_ventas_altas.value == '') {
        document.querySelector(`#grupo__meses_ventas_altas .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__meses_ventas_altas`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__meses_ventas_altas .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__meses_ventas_altas`).classList.remove('formulario__grupo-incorrecto')
    }

    if (meses_ventas_bajas.value == '') {
        document.querySelector(`#grupo__meses_ventas_bajas .formulario__input-error`).classList.add('formulario__input-error-activo')
        document.getElementById(`grupo__meses_ventas_bajas`).classList.add('formulario__grupo-incorrecto')
        avanzar = false
    } else {
        document.querySelector(`#grupo__meses_ventas_bajas .formulario__input-error`).classList.remove('formulario__input-error-activo')
        document.getElementById(`grupo__meses_ventas_bajas`).classList.remove('formulario__grupo-incorrecto')
    }

    if (avanzar) {
        campos_json.meses_ventas_altas = document.getElementById('meses_ventas_altas').value
        campos_json.meses_ventas_bajas = document.getElementById('meses_ventas_bajas').value

        document.getElementById('form_15').setAttribute('hidden', 1)
        document.getElementById('form_16').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '27'
    }
}

function previous_14() {
    document.getElementById('form_15').setAttribute('hidden', 1)
    document.getElementById('form_14').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '23'
}

function next_16() {
    let atencion_cliente_otros = document.getElementById('atencion_cliente_otros')
    let atencion_cliente_otros_texto = document.getElementById('atencion_cliente_otros_texto')
    let checkboxes_atencion_cliente_digitales = document.querySelectorAll('input[name="atencion_cliente_digitales[]"]:checked')
    let avanzar = true

    if (atencion_cliente_otros.checked && atencion_cliente_otros_texto.value == '') {
        avanzar = false
    }

    if (checkboxes_atencion_cliente_digitales.length > 0) {
        if (document.getElementById('atencion_clientes_otros').checked) {
            if (document.getElementById('atencion_clientes_otros_texto').value != '') {
                // campos.redes_sociales = true
            } else {
                // campos.redes_sociales = false
                avanzar = false
            }
            document.getElementById('select_atencion_cliente_digitales_required').setAttribute('hidden', 1)
        } else {
            // campos.redes_sociales = true
            document.getElementById('select_atencion_cliente_digitales_required').setAttribute('hidden', 1)
        }
    } else {
        document.getElementById('select_atencion_cliente_digitales_required').removeAttribute('hidden')
        avanzar = false
    }

    if (avanzar) {
        let checkboxes_atencion_cliente = document.querySelectorAll('input[name="atencion_cliente"]:checked')
        campos_json.atencion_cliente = checkboxes_atencion_cliente[0].value

        campos_json.otros_atencion_cliente = document.getElementById('atencion_cliente_otros_texto').value

        campos_json.atencion_cliente_digitales = []
        let checkboxes_atencion_cliente_digitales = document.querySelectorAll('input[name="atencion_cliente_digitales[]"]:checked')
        checkboxes_atencion_cliente_digitales.forEach(e => {
            campos_json.atencion_cliente_digitales.push(e.value)
        })

        campos_json.otros_atencion_cliente_digitales = document.getElementById('atencion_clientes_otros_texto').value

        const button_loading = document.getElementById('save_button')
        document.getElementById('save_button').setAttribute('disabled', '')
        button_loading.innerHTML = "<div class='loader'></div>"

        document.getElementById('previous_button_15').setAttribute('hidden', 1)

        document.getElementById('span_number_questions_form_2').textContent = '29'

        /**
         * Send data to google sheets
         */
        const formData = new FormData()

        formData.append('email', campos_json.email)
        formData.append('nombre_tienda', campos_json.nombre_tienda)
        formData.append('modelo_negocio', campos_json.modelo_negocio)
        formData.append('otros_modelos_texto', campos_json.otros_modelos_texto)
        formData.append('industria', campos_json.industria)
        formData.append('otros_industrias_texto', campos_json.otros_industrias_texto)
        formData.append('ventas_hace_tres_meses', campos_json.ventas_hace_tres_meses)
        formData.append('ventas_hace_dos_meses', campos_json.ventas_hace_dos_meses)
        formData.append('ventas_mes_pasado', campos_json.ventas_mes_pasado)
        formData.append('redes_sociales', campos_json.redes_sociales)
        formData.append('otros_redes_sociales_texto', campos_json.otros_redes_sociales_texto)
        formData.append('formato_publicidad', campos_json.formato_publicidad)
        formData.append('otros_formatos_texto', campos_json.otros_formatos_texto)
        formData.append('difusion', campos_json.difusion)
        formData.append('otros_difusion_texto', campos_json.otros_difusion_texto)
        formData.append('publicidad_pautada', campos_json.publicidad_pautada)
        formData.append('publicidad_digitales', campos_json.publicidad_digitales)
        formData.append('presupuesto_marketing', campos_json.presupuesto_marketing)
        formData.append('publicidad_no_digital', campos_json.publicidad_no_digital)
        formData.append('publicidad_tradicionales', campos_json.publicidad_tradicionales)
        formData.append('otros_publicidad_tradicional', campos_json.publicidad_otros_tradicionales_texto)
        formData.append('equipo_desarrollo', campos_json.equipo_desarrollo)
        formData.append('equipo_administracion', campos_json.equipo_administracion)
        formData.append('objetivo_ventas', campos_json.objetivo_ventas)
        formData.append('base_datos', campos_json.base_datos)
        formData.append('usuarios_base_datos', campos_json.usuarios_base_datos)
        formData.append('datos_usuarios', campos_json.datos_usuarios)
        formData.append('otros_datos_usuarios', campos_json.otros_datos_usuarios)
        formData.append('herramientas_email', campos_json.herramientas_email)
        formData.append('herramienta_email_utilizada', campos_json.herramienta_email_utilizada)
        formData.append('flujos_correo', campos_json.flujos_correo)
        formData.append('plataformas_carritos', campos_json.plataformas_carritos)
        formData.append('meses_ventas_altas', campos_json.meses_ventas_altas)
        formData.append('meses_ventas_bajas', campos_json.meses_ventas_bajas)
        formData.append('atencion_cliente', campos_json.atencion_cliente)
        formData.append('otros_atencion_cliente', campos_json.otros_atencion_cliente)
        formData.append('atencion_cliente_digitales', campos_json.atencion_cliente_digitales)
        formData.append('otros_atencion_cliente_digitales', campos_json.otros_atencion_cliente_digitales)

        fetch(scriptURL, {
            method: 'POST', 
            body: formData
        })
        .then(response => {
            // console.log('Success!', response)

            document.getElementById('form_16').setAttribute('hidden', 1)
            document.getElementById('div-last-form').removeAttribute('hidden')
            document.getElementById('form_17').removeAttribute('hidden')

            document.getElementById('div_count_questions').setAttribute('hidden', 1)
            // alert("Gracias! Tu información fue cargada correctamente." )
        })
        .catch(error => {
            // console.error('Error!', error.message)
            button_loading.innerHTML = "<span>Enviar</span>"
            alert("Error! No se pudo cargar la información correctamente." )
        })
    }
}

function previous_15() {
    document.getElementById('form_16').setAttribute('hidden', 1)
    document.getElementById('form_15').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '25'
}

