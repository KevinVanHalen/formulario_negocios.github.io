// URL to send data to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0JC2n99K07kN-znWdY-ANK2cxA9Y50506YJ1tUazJRI1RzvZjwDTYcqa8jITCNEeq/exec'

const inputs = document.querySelectorAll('#contact-form input.required')
const textareas = document.querySelectorAll('#contact-form textarea.required')
const selects = document.querySelectorAll('#contact-form select.required')

const campos = {
    email: false,
    store_name: false,
    business_model: true,
    industry: false,
    three_months_ago_sales: false,
    two_months_ago_sales: false,
    last_month_sales: false,
    social_networks: false,
    formato_publicidad: false,
    difusion: false,
    scheduled_advertising: true,
    publicidad_no_digital: true,
    sales_target: false,
    email_tools: true,
    flujos_correo: true,
    meses_ventas_altas: false,
    meses_ventas_bajas: false,
    atencion_cliente: true,
    atencion_cliente_digitales: true,
    otros_medios_tradicionales: true,
    otros_datos_usuarios_almacenados: true,
}

const json_fields = {
    email: '',
    store_name: '',
    business_model: '',
    other_models_text: '',
    industry: '',
    other_industries_text: '',
    three_months_ago_sales: '',
    two_months_ago_sales: '',
    last_month_sales: '',
    social_networks: [],
    otros_social_networks_texto: '',
    formato_publicidad: [],
    otros_formatos_texto: '',
    difusion: [],
    otros_difusion_texto: '',
    scheduled_advertising: '',
    publicidad_digitales: [],
    presupuesto_marketing: '',
    publicidad_no_digital: '',
    publicidad_tradicionales: [],
    otros_publicidad_tradicional: '',
    development_team: '',
    equipo_administracion: '',
    sales_target: '',
    database_user: '',
    user_database: '',
    datos_usuarios: [],
    otros_datos_usuarios: '',
    email_tools: '',
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

const validateFormInputsTextareasSelects = (e) => {
    switch (e.target.name) {
        case "email":
            validateField(e.target, 'email')
            break
        case "store_name":
            validateField(e.target, 'store_name')
            break

        case "industry":
            validateField(e.target, 'industry')
            break

        case "three_months_ago_sales":
            validateField(e.target, 'three_months_ago_sales')
            break
        case "two_months_ago_sales":
            validateField(e.target, 'two_months_ago_sales')
            break
        case "last_month_sales":
            validateField(e.target, 'last_month_sales')
            break

        case "sales_target":
            validateField(e.target, 'sales_target')
            break

        case "meses_ventas_altas":
            validateField(e.target, 'meses_ventas_altas')
            break
        case "meses_ventas_bajas":
            validateField(e.target, 'meses_ventas_bajas')
            break
    }
}

const validateField = (input, campo) => {
    if (input.value == '') {
        document.querySelector(`#group__${campo} .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__${campo}`).classList.add('form__group-wrong')
        campos[campo] = false
    } else {
        document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__${campo}`).classList.remove('form__group-wrong')
        campos[campo] = true
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateFormInputsTextareasSelects)
    input.addEventListener('blur', validateFormInputsTextareasSelects)
})

textareas.forEach((textarea) => {
    textarea.addEventListener('keyup', validateFormInputsTextareasSelects)
    textarea.addEventListener('blur', validateFormInputsTextareasSelects)
})

selects.forEach((select) => {
    select.addEventListener('blur', validateFormInputsTextareasSelects)
    select.addEventListener('change', validateFormInputsTextareasSelects)
})

const validateNegatives = (e) => {
    if (e.value < 0) {
        e.value = 0
    }
}

// VALIDAR CHECK REDES SOCIALES
function checkFormatosPublicidad() {
    if (document.getElementById('otros_formatos').checked == true) {
        document.querySelector(`#grupo__formato_publicidad .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__formato_publicidad`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__formato_publicidad .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__formato_publicidad`).classList.remove('form__group-wrong')
    }
}

function validateFieldOtrosFormatosPublicidad() {
    if (document.getElementById('otros_formatos_texto').value == '') {
        document.querySelector(`#grupo__formato_publicidad .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__formato_publicidad`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__formato_publicidad .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__formato_publicidad`).classList.remove('form__group-wrong')
    }
}

// VALIDAR CHECK DIFUSION
function checkDifusion() {
    if (document.getElementById('otros_difusion').checked == true) {
        document.querySelector(`#grupo__difusion .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__difusion`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__difusion .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__difusion`).classList.remove('form__group-wrong')
    }
}

function validateFieldOtrosDifusion() {
    if (document.getElementById('otros_difusion_texto').value == '') {
        document.querySelector(`#grupo__difusion .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__difusion`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__difusion .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__difusion`).classList.remove('form__group-wrong')
    }
}

// VALIDAR CHECK PUBLICIDAD TRADICIONALES
function checkPublicidadTradicionales() {
    if (document.getElementById('publicidad_otros_tradicionales').checked == true) {
        document.querySelector(`#grupo__publicidad_tradicionales .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__publicidad_tradicionales`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__publicidad_tradicionales .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__publicidad_tradicionales`).classList.remove('form__group-wrong')
    }
}

function validateFieldOtrosDatosPublicidadTradicionales() {
    if (document.getElementById('publicidad_otros_tradicionales_texto').value == '') {
        document.querySelector(`#grupo__publicidad_tradicionales .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__publicidad_tradicionales`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__publicidad_tradicionales .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__publicidad_tradicionales`).classList.remove('form__group-wrong')
    }
}

// VALIDAR CHECK DATOS USUARIOS
function checkDatosUsuarios() {
    if (document.getElementById('datos_usuarios_otros_datos').checked == true) {
        document.querySelector(`#grupo__datos_usuarios .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__datos_usuarios`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__datos_usuarios .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__datos_usuarios`).classList.remove('form__group-wrong')
    }
}

function validateFieldOtrosDatosUsuarios() {
    if (document.getElementById('otros_datos_usuarios_texto').value == '') {
        document.querySelector(`#grupo__datos_usuarios .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__datos_usuarios`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__datos_usuarios .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__datos_usuarios`).classList.remove('form__group-wrong')
    }
}

// INICIO VALIDAR CHECKBOX ATENCION CLIENTE
function checkAtencionCliente() {
    if (document.getElementById('atencion_cliente_otros').checked == true) {
        document.getElementById('atencion_cliente_otros_texto').removeAttribute('hidden')

        document.querySelector(`#grupo__atencion_cliente .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__atencion_cliente`).classList.add('form__group-wrong')
    } else {
        document.getElementById('atencion_cliente_otros_texto').setAttribute("hidden", true)

        document.querySelector(`#grupo__atencion_cliente .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__atencion_cliente`).classList.remove('form__group-wrong')
    }
}

function validateFieldOtroAtencionCliente() {
    if (document.getElementById('atencion_cliente_otros_texto').value == '') {
        document.querySelector(`#grupo__atencion_cliente .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__atencion_cliente`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__atencion_cliente .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__atencion_cliente`).classList.remove('form__group-wrong')
    }
}
// FIN VALIDAR CHECKBOX ATENCION CLIENTE

// VALIDAR CHECK ATENCION CLIENTE DIGITALES
function checkAtencionClientesDigitales() {
    if (document.getElementById('atencion_clientes_otros').checked == true) {
        document.querySelector(`#grupo__atencion_cliente_digitales .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__atencion_cliente_digitales`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__atencion_cliente_digitales .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__atencion_cliente_digitales`).classList.remove('form__group-wrong')
    }
}

function validateFieldOtrosDatosAtencionClientesDigitales() {
    if (document.getElementById('atencion_clientes_otros_texto').value == '') {
        document.querySelector(`#grupo__atencion_cliente_digitales .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__atencion_cliente_digitales`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#grupo__atencion_cliente_digitales .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__atencion_cliente_digitales`).classList.remove('form__group-wrong')
    }
}

// INICIO VALIDAR CHECKBOX MODELO NEGOCIOS
function checkBusinessModel() {
    if (document.getElementById('other_models').checked == true) {
        document.getElementById('other_models_text').removeAttribute('hidden')

        document.querySelector(`#group__business_model .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__business_model`).classList.add('form__group-wrong')
    } else {
        document.getElementById('other_models_text').setAttribute("hidden", true)

        document.querySelector(`#group__business_model .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__business_model`).classList.remove('form__group-wrong')
    }
}

function validateFiledAnotherBusinessModel() {
    if (document.getElementById('other_models_text').value == '') {
        document.querySelector(`#group__business_model .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__business_model`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#group__business_model .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__business_model`).classList.remove('form__group-wrong')
    }
}
// FIN VALIDAR CHECKBOX MODELO NEGOCIOS

// INICIO VALIDAR SELECT industry
function checkIndustry() {
    if (document.getElementById('industry').value == '') {
        document.querySelector(`#group__industry .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__industry`).classList.add('form__group-wrong')
        campos[industry] = false
    } else {
        document.querySelector(`#group__industry .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__industry`).classList.remove('form__group-wrong')
        campos[industry] = true
    }

    if (document.getElementById('industry').value == 'Otros') {
        document.getElementById('other_industries_text').removeAttribute('hidden')

        document.querySelector(`#group__industry .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__industry`).classList.add('form__group-wrong')
    } else {
        document.getElementById('other_industries_text').setAttribute("hidden", true)

        document.querySelector(`#group__industry .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__industry`).classList.remove('form__group-wrong')
    }
}

function validateFieldIndustry() {
    if (document.getElementById('other_industries_text').value == '') {
        document.querySelector(`#group__industry .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__industry`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#group__industry .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__industry`).classList.remove('form__group-wrong')
    }
}
// FIN VALIDAR SELECT industry

// INICIO VALIDAR CHECK REDES SOCIALES
function checkSocialNetworks() {
    if (document.getElementById('otros_social_networks').checked == true) {
        document.querySelector(`#group__social_networks .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__social_networks`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#group__social_networks .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__social_networks`).classList.remove('form__group-wrong')
    }
    document.getElementById('select_redes_required').setAttribute('hidden', 1)
}

function validateFieldOtherSocialNetworks() {
    if (document.getElementById('otros_social_networks_texto').value == '') {
        document.querySelector(`#group__social_networks .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__social_networks`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#group__social_networks .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__social_networks`).classList.remove('form__group-wrong')
    }
}
// FIN VALIDAR CHECK REDES SOCIALES

// Campos a validar
const email = document.getElementById('email')
const store_name = document.getElementById('store_name')
const industry = document.getElementById('industry')
const three_months_ago_sales = document.getElementById('three_months_ago_sales')
const two_months_ago_sales = document.getElementById('two_months_ago_sales')
const last_month_sales = document.getElementById('last_month_sales')
const sales_target = document.getElementById('sales_target')
const meses_ventas_altas = document.getElementById('meses_ventas_altas')
const meses_ventas_bajas = document.getElementById('meses_ventas_bajas')

// Validar input
const validateInput = (e) => {
    switch (e.target.name) {
        case "email":
            validateField(e.target, 'email')
            break
        case "store_name":
            validateField(e.target, 'store_name')
            break

        case "industry":
            validateField(e.target, 'industry')
            break

        case "three_months_ago_sales":
            validateField(e.target, 'three_months_ago_sales')
            validateNegatives(e.target)
            break
        case "two_months_ago_sales":
            validateField(e.target, 'two_months_ago_sales')
            validateNegatives(e.target)
            break
        case "last_month_sales":
            validateField(e.target, 'last_month_sales')
            validateNegatives(e.target)
            break

        case "sales_target":
            validateField(e.target, 'sales_target')
            break

        case "meses_ventas_altas":
            validateField(e.target, 'meses_ventas_altas')
            break
        case "meses_ventas_bajas":
            validateField(e.target, 'meses_ventas_bajas')
            break
    }
}

// Eventos a escuchar para validar
email.addEventListener('keyup', validateInput)
email.addEventListener('blur', validateInput)
store_name.addEventListener('keyup', validateInput)
store_name.addEventListener('blur', validateInput)
industry.addEventListener('keyup', validateInput)
industry.addEventListener('blur', validateInput)
three_months_ago_sales.addEventListener('keyup', validateInput)
three_months_ago_sales.addEventListener('blur', validateInput)
two_months_ago_sales.addEventListener('keyup', validateInput)
two_months_ago_sales.addEventListener('blur', validateInput)
last_month_sales.addEventListener('keyup', validateInput)
last_month_sales.addEventListener('blur', validateInput)
sales_target.addEventListener('keyup', validateInput)
sales_target.addEventListener('blur', validateInput)
meses_ventas_altas.addEventListener('keyup', validateInput)
meses_ventas_altas.addEventListener('blur', validateInput)
meses_ventas_bajas.addEventListener('keyup', validateInput)
meses_ventas_bajas.addEventListener('blur', validateInput)

function validateEmail() {
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
 * ================== Funciones para los botones band_continue, retroceder y enviar =========================
 * ====================================================================================================
 */

function next_1() {
    let email = document.getElementById('email')
    let store_name = document.getElementById('store_name')
    let band_continue = true

    let text_email_invalid = document.getElementById('text_email_invalid')
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email.value == '') {
        document.querySelector(`#group__email .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__email`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        if (validEmail.test(email.value)) {
            // alert('Email valido')
            document.getElementById('text_email_invalid').setAttribute('hidden', 1)
        } else {
            // alert('Email invalido')
            // document.getElementById('text_email_invalid').setAttribute('hidden', 1)
            document.getElementById('text_email_invalid').removeAttribute('hidden')
            band_continue = false
        }
        document.querySelector(`#group__email .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__email`).classList.remove('form__group-wrong')
    }


    if (store_name.value == '') {
        document.querySelector(`#group__store_name .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__store_name`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#group__store_name .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__store_name`).classList.remove('form__group-wrong')
    }
    
    if (band_continue) {
        json_fields.email = document.getElementById('email').value
        json_fields.store_name = document.getElementById('store_name').value

        document.getElementById('form_1').setAttribute('hidden', 1)
        document.getElementById('form_2').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '2'
    }
}



function next_2() {
    let other_models_check = document.getElementById('other_models')
    let other_models_text = document.getElementById('other_models_text')
    let industry = document.getElementById('industry')
    let other_industries_text = document.getElementById('other_industries_text')
    let band_continue = true

    if (other_models_check.checked && other_models_text.value == '') {
        band_continue = false
    }

    if (industry.value == '') {
        document.querySelector(`#group__industry .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__industry`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        if (industry.value == 'Otros') {
            if (other_industries_text.value == '') {
                document.querySelector(`#group__industry .form__input-error`).classList.add('form__input-error-active')
                document.getElementById(`group__industry`).classList.add('form__group-wrong')
                band_continue = false
            } else {
                document.querySelector(`#group__industry .form__input-error`).classList.remove('form__input-error-active')
                document.getElementById(`group__industry`).classList.remove('form__group-wrong')
            }
        } else {
            document.querySelector(`#group__industry .form__input-error`).classList.remove('form__input-error-active')
            document.getElementById(`group__industry`).classList.remove('form__group-wrong')
        }
    }

    if (band_continue) {
        let checkboxes_business_model = document.querySelectorAll('input[name="business_model"]:checked')
        json_fields.business_model = checkboxes_business_model[0].value
        json_fields.other_models_text = document.getElementById('other_models_text').value

        let select_industry = document.getElementById('industry')
        json_fields.industry = select_industry.options[select_industry.selectedIndex].text
        json_fields.other_industries_text = document.getElementById('other_industries_text').value

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
    let three_months_ago_sales = document.getElementById('three_months_ago_sales')
    let two_months_ago_sales = document.getElementById('two_months_ago_sales')
    let last_month_sales = document.getElementById('last_month_sales')
    let band_continue = true

    if (three_months_ago_sales.value == '') {
        document.querySelector(`#group__three_months_ago_sales .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__three_months_ago_sales`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#group__three_months_ago_sales .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__three_months_ago_sales`).classList.remove('form__group-wrong')
    }

    if (two_months_ago_sales.value == '') {
        document.querySelector(`#group__two_months_ago_sales .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__two_months_ago_sales`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#group__two_months_ago_sales .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__two_months_ago_sales`).classList.remove('form__group-wrong')
    }

    if (last_month_sales.value == '') {
        document.querySelector(`#group__last_month_sales .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__last_month_sales`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#group__last_month_sales .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__last_month_sales`).classList.remove('form__group-wrong')
    }
    
    if (band_continue) {
        json_fields.three_months_ago_sales = document.getElementById('three_months_ago_sales').value
        json_fields.two_months_ago_sales = document.getElementById('two_months_ago_sales').value
        json_fields.last_month_sales = document.getElementById('last_month_sales').value

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
    let checkboxes_social_networks = document.querySelectorAll('input[name="social_networks[]"]:checked')
    let band_continue = true
    if (checkboxes_social_networks.length > 0) {
        if (document.getElementById('otros_social_networks').checked) {
            if (document.getElementById('otros_social_networks_texto').value != '') {
                // campos.social_networks = true
            } else {
                // campos.social_networks = false
                band_continue = false
            }
            document.getElementById('select_redes_required').setAttribute('hidden', 1)
        } else {
            // campos.social_networks = true
            document.getElementById('select_redes_required').setAttribute('hidden', 1)
        }
    } else {
        document.getElementById('select_redes_required').removeAttribute('hidden')
        band_continue = false
    }

    if (band_continue) {
        json_fields.social_networks = []

        let checkboxes_social_networks = document.querySelectorAll('input[name="social_networks[]"]:checked')
        checkboxes_social_networks.forEach(e => {
            json_fields.social_networks.push(e.value)
        })

        json_fields.otros_social_networks_texto = document.getElementById('otros_social_networks_texto').value

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
    let band_continue = true
    if (checkboxes_formato_publicidad.length > 0) {
        if (document.getElementById('otros_formatos').checked) {
            if (document.getElementById('otros_formatos_texto').value != '') {
                // campos.social_networks = true
            } else {
                // campos.social_networks = false
                band_continue = false
            }
            document.getElementById('select_formato_publicidad_required').setAttribute('hidden', 1)
        } else {
            // campos.social_networks = true
            document.getElementById('select_formato_publicidad_required').setAttribute('hidden', 1)
        }
    } else {
        document.getElementById('select_formato_publicidad_required').removeAttribute('hidden')
        band_continue = false
    }

    if (band_continue) {
        json_fields.formato_publicidad = []

        let checkboxes_formato_publicidad = document.querySelectorAll('input[name="formato_publicidad[]"]:checked')
        checkboxes_formato_publicidad.forEach(e => {
            json_fields.formato_publicidad.push(e.value)
        })

        json_fields.otros_formatos_texto = document.getElementById('otros_formatos_texto').value

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
    let band_continue = true
    if (checkboxes_difusion.length > 0) {
        if (document.getElementById('otros_difusion').checked) {
            if (document.getElementById('otros_difusion_texto').value != '') {
                // campos.social_networks = true
            } else {
                // campos.social_networks = false
                band_continue = false
            }
            document.getElementById('select_difusion_required').setAttribute('hidden', 1)
        } else {
            // campos.social_networks = true
            document.getElementById('select_difusion_required').setAttribute('hidden', 1)
        }
    } else {
        document.getElementById('select_difusion_required').removeAttribute('hidden')
        band_continue = false
    }

    if (band_continue) {
        json_fields.difusion = []

        let checkboxes_difusion = document.querySelectorAll('input[name="difusion[]"]:checked')
        checkboxes_difusion.forEach(e => {
            json_fields.difusion.push(e.value)
        })

        json_fields.otros_difusion_texto = document.getElementById('otros_difusion_texto').value
        
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
    let checkboxes_scheduled_advertising = document.querySelectorAll('input[name="scheduled_advertising"]:checked')
    json_fields.scheduled_advertising = checkboxes_scheduled_advertising[0].value

    json_fields.publicidad_digitales = []
    let checkboxes_publicidad_digitales = document.querySelectorAll('input[name="publicidad_digitales[]"]:checked')
    checkboxes_publicidad_digitales.forEach(e => {
        json_fields.publicidad_digitales.push(e.value)
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
    let band_continue = true 
    if (document.getElementById('publicidad_otros_tradicionales').checked == true) {
        if (document.getElementById('publicidad_otros_tradicionales_texto').value == '') {
            band_continue = false
        }
    }

    if (band_continue) {
        json_fields.presupuesto_marketing = document.getElementById('presupuesto_marketing').value
        
        let checkboxes_publicidad_no_digital = document.querySelectorAll('input[name="publicidad_no_digital"]:checked')
        json_fields.publicidad_no_digital = checkboxes_publicidad_no_digital[0].value

        json_fields.publicidad_tradicionales = []
        let checkboxes_publicidad_tradicionales = document.querySelectorAll('input[name="publicidad_tradicionales[]"]:checked')
        checkboxes_publicidad_tradicionales.forEach(e => {
            json_fields.publicidad_tradicionales.push(e.value)
        })

        json_fields.publicidad_otros_tradicionales_texto = document.getElementById('publicidad_otros_tradicionales_texto').value

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
    let checkboxes_development_team = document.querySelectorAll('input[name="development_team"]:checked')
    json_fields.development_team = checkboxes_development_team[0] ? checkboxes_development_team[0].value : ''

    let checkboxes_equipo_administracion = document.querySelectorAll('input[name="equipo_administracion"]:checked')
    json_fields.equipo_administracion = checkboxes_equipo_administracion[0] ? checkboxes_equipo_administracion[0].value : ''

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
    let sales_target = document.getElementById('sales_target')
    let band_continue = true

    if (sales_target.value == '') {
        document.querySelector(`#group__sales_target .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__sales_target`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#group__sales_target .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__sales_target`).classList.remove('form__group-wrong')
    }

    if (band_continue) {
        json_fields.sales_target = document.getElementById('sales_target').value

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
    let checkboxes_database_user = document.querySelectorAll('input[name="database_user"]:checked')
    json_fields.database_user = checkboxes_database_user[0] ? checkboxes_database_user[0].value : ''

    json_fields.user_database = document.getElementById('user_database').value

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
    let band_continue = true 
    if (document.getElementById('datos_usuarios_otros_datos').checked == true) {
        if (document.getElementById('otros_datos_usuarios_texto').value == '') {
            band_continue = false
        }
    }

    if (band_continue) {
        json_fields.datos_usuarios = []
        let checkboxes_datos_usuarios = document.querySelectorAll('input[name="datos_usuarios[]"]:checked')
        checkboxes_datos_usuarios.forEach(e => {
            json_fields.datos_usuarios.push(e.value)
        })

        json_fields.otros_datos_usuarios = document.getElementById('otros_datos_usuarios_texto').value

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
    let checkboxes_email_tools = document.querySelectorAll('input[name="email_tools"]:checked')
    json_fields.email_tools = checkboxes_email_tools[0].value

    json_fields.herramienta_email_utilizada = document.getElementById('herramienta_email_utilizada').value

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
    json_fields.flujos_correo = checkboxes_flujos_correo[0].value

    json_fields.plataformas_carritos = document.getElementById('plataformas_carritos').value

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
    let band_continue = true

    if (meses_ventas_altas.value == '') {
        document.querySelector(`#grupo__meses_ventas_altas .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__meses_ventas_altas`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#grupo__meses_ventas_altas .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__meses_ventas_altas`).classList.remove('form__group-wrong')
    }

    if (meses_ventas_bajas.value == '') {
        document.querySelector(`#grupo__meses_ventas_bajas .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`grupo__meses_ventas_bajas`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#grupo__meses_ventas_bajas .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`grupo__meses_ventas_bajas`).classList.remove('form__group-wrong')
    }

    if (band_continue) {
        json_fields.meses_ventas_altas = document.getElementById('meses_ventas_altas').value
        json_fields.meses_ventas_bajas = document.getElementById('meses_ventas_bajas').value

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
    let band_continue = true

    if (atencion_cliente_otros.checked && atencion_cliente_otros_texto.value == '') {
        band_continue = false
    }

    if (checkboxes_atencion_cliente_digitales.length > 0) {
        if (document.getElementById('atencion_clientes_otros').checked) {
            if (document.getElementById('atencion_clientes_otros_texto').value != '') {
                // campos.social_networks = true
            } else {
                // campos.social_networks = false
                band_continue = false
            }
            document.getElementById('select_atencion_cliente_digitales_required').setAttribute('hidden', 1)
        } else {
            // campos.social_networks = true
            document.getElementById('select_atencion_cliente_digitales_required').setAttribute('hidden', 1)
        }
    } else {
        document.getElementById('select_atencion_cliente_digitales_required').removeAttribute('hidden')
        band_continue = false
    }

    if (band_continue) {
        let checkboxes_atencion_cliente = document.querySelectorAll('input[name="atencion_cliente"]:checked')
        json_fields.atencion_cliente = checkboxes_atencion_cliente[0].value

        json_fields.otros_atencion_cliente = document.getElementById('atencion_cliente_otros_texto').value

        json_fields.atencion_cliente_digitales = []
        let checkboxes_atencion_cliente_digitales = document.querySelectorAll('input[name="atencion_cliente_digitales[]"]:checked')
        checkboxes_atencion_cliente_digitales.forEach(e => {
            json_fields.atencion_cliente_digitales.push(e.value)
        })

        json_fields.otros_atencion_cliente_digitales = document.getElementById('atencion_clientes_otros_texto').value

        const button_loading = document.getElementById('save_button')
        document.getElementById('save_button').setAttribute('disabled', '')
        button_loading.innerHTML = "<div class='loader'></div>"

        document.getElementById('previous_button_15').setAttribute('hidden', 1)

        document.getElementById('span_number_questions_form_2').textContent = '29'

        /**
         * Send data to google sheets
         */
        const formData = new FormData()

        formData.append('email', json_fields.email)
        formData.append('store_name', json_fields.store_name)
        formData.append('business_model', json_fields.business_model)
        formData.append('other_models_text', json_fields.other_models_text)
        formData.append('industry', json_fields.industry)
        formData.append('other_industries_text', json_fields.other_industries_text)
        formData.append('three_months_ago_sales', json_fields.three_months_ago_sales)
        formData.append('two_months_ago_sales', json_fields.two_months_ago_sales)
        formData.append('last_month_sales', json_fields.last_month_sales)
        formData.append('social_networks', json_fields.social_networks)
        formData.append('otros_social_networks_texto', json_fields.otros_social_networks_texto)
        formData.append('formato_publicidad', json_fields.formato_publicidad)
        formData.append('otros_formatos_texto', json_fields.otros_formatos_texto)
        formData.append('difusion', json_fields.difusion)
        formData.append('otros_difusion_texto', json_fields.otros_difusion_texto)
        formData.append('scheduled_advertising', json_fields.scheduled_advertising)
        formData.append('publicidad_digitales', json_fields.publicidad_digitales)
        formData.append('presupuesto_marketing', json_fields.presupuesto_marketing)
        formData.append('publicidad_no_digital', json_fields.publicidad_no_digital)
        formData.append('publicidad_tradicionales', json_fields.publicidad_tradicionales)
        formData.append('otros_publicidad_tradicional', json_fields.publicidad_otros_tradicionales_texto)
        formData.append('development_team', json_fields.development_team)
        formData.append('equipo_administracion', json_fields.equipo_administracion)
        formData.append('sales_target', json_fields.sales_target)
        formData.append('database_user', json_fields.database_user)
        formData.append('user_database', json_fields.user_database)
        formData.append('datos_usuarios', json_fields.datos_usuarios)
        formData.append('otros_datos_usuarios', json_fields.otros_datos_usuarios)
        formData.append('email_tools', json_fields.email_tools)
        formData.append('herramienta_email_utilizada', json_fields.herramienta_email_utilizada)
        formData.append('flujos_correo', json_fields.flujos_correo)
        formData.append('plataformas_carritos', json_fields.plataformas_carritos)
        formData.append('meses_ventas_altas', json_fields.meses_ventas_altas)
        formData.append('meses_ventas_bajas', json_fields.meses_ventas_bajas)
        formData.append('atencion_cliente', json_fields.atencion_cliente)
        formData.append('otros_atencion_cliente', json_fields.otros_atencion_cliente)
        formData.append('atencion_cliente_digitales', json_fields.atencion_cliente_digitales)
        formData.append('otros_atencion_cliente_digitales', json_fields.otros_atencion_cliente_digitales)

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

