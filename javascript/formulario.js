// URL to send data to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0JC2n99K07kN-znWdY-ANK2cxA9Y50506YJ1tUazJRI1RzvZjwDTYcqa8jITCNEeq/exec'

const inputs = document.querySelectorAll('#contact-form input.required')
const textareas = document.querySelectorAll('#contact-form textarea.required')
const selects = document.querySelectorAll('#contact-form select.required')

const campos = {
    store_name: false,
    email: false,
    business_model: true,
    industry: false,
    social_networks: false,
    highest_sales_month: false,
    lowest_sales_month: false,
    three_months_ago_sales: false,
    two_months_ago_sales: false,
    last_month_sales: false,
    sales_target: false,
    previous_applications_integrations: false,
    advertising_media: false,
    monthly_advertising_budget: false,
    user_database_platform: false,
    user_database: false,
    email_tools_platform: false,
}

const json_fields = {
    store_name: '',
    email: '',
    business_model: '',
    other_models_text: '',
    industry: '',
    other_industries_text: '',
    ecommerce_platform: '',
    another_ecommerce_platform_text: '',
    previous_applications_integrations: '',
    social_networks: [],
    other_social_networks_text: '',
    scheduled_advertising: '',
    advertising_media: '',
    monthly_advertising_budget: '',
    development_team: '',
    database_user: '',
    user_database_platform: '',
    user_database: '',
    email_tools: '',
    email_tools_platform: '',
    highest_sales_month: '',
    lowest_sales_month: '',
    three_months_ago_sales: '',
    two_months_ago_sales: '',
    last_month_sales: '',
    sales_target: '',
}

/**
 * ====================================================================================================
 * =========================================== Validations ============================================
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

        case "highest_sales_month":
            validateField(e.target, 'highest_sales_month')
            break
        case "lowest_sales_month":
            validateField(e.target, 'lowest_sales_month')
            break

        case "previous_applications_integrations":
            validateField(e.target, 'previous_applications_integrations')
            break
        case "advertising_media":
            validateField(e.target, 'advertising_media')
            break
        case "monthly_advertising_budget":
            validateField(e.target, 'monthly_advertising_budget')
            break
        case "user_database_platform":
            validateField(e.target, 'user_database_platform')
            break
        case "user_database":
            validateField(e.target, 'user_database')
            break
        case "email_tools_platform":
            validateField(e.target, 'email_tools_platform')
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

// Fields to validate
const email = document.getElementById('email')
const store_name = document.getElementById('store_name')
const industry = document.getElementById('industry')
const three_months_ago_sales = document.getElementById('three_months_ago_sales')
const two_months_ago_sales = document.getElementById('two_months_ago_sales')
const last_month_sales = document.getElementById('last_month_sales')
const sales_target = document.getElementById('sales_target')
const highest_sales_month = document.getElementById('highest_sales_month')
const lowest_sales_month = document.getElementById('lowest_sales_month')
const previous_applications_integrations = document.getElementById('previous_applications_integrations')
const advertising_media = document.getElementById('advertising_media')
const monthly_advertising_budget = document.getElementById('monthly_advertising_budget')
const user_database_platform = document.getElementById('user_database_platform')
const user_database = document.getElementById('user_database')
const email_tools_platform = document.getElementById('email_tools_platform')

// Validate input
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

        case "highest_sales_month":
            validateField(e.target, 'highest_sales_month')
            break
        case "lowest_sales_month":
            validateField(e.target, 'lowest_sales_month')
            break

        case "previous_applications_integrations":
            validateField(e.target, 'previous_applications_integrations')
            break
        case "advertising_media":
            validateField(e.target, 'advertising_media')
            break
        case "monthly_advertising_budget":
            validateField(e.target, 'monthly_advertising_budget')
            break
        case "user_database_platform":
            validateField(e.target, 'user_database_platform')
            break
        case "user_database":
            validateField(e.target, 'user_database')
            break
        case "email_tools_platform":
            validateField(e.target, 'email_tools_platform')
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
previous_applications_integrations.addEventListener('keyup', validateInput)
previous_applications_integrations.addEventListener('blur', validateInput)
advertising_media.addEventListener('keyup', validateInput)
advertising_media.addEventListener('blur', validateInput)
monthly_advertising_budget.addEventListener('keyup', validateInput)
monthly_advertising_budget.addEventListener('blur', validateInput)
user_database_platform.addEventListener('keyup', validateInput)
user_database_platform.addEventListener('blur', validateInput)
user_database.addEventListener('keyup', validateInput)
user_database.addEventListener('blur', validateInput)
email_tools_platform.addEventListener('keyup', validateInput)
email_tools_platform.addEventListener('blur', validateInput)
highest_sales_month.addEventListener('keyup', validateInput)
highest_sales_month.addEventListener('blur', validateInput)
lowest_sales_month.addEventListener('keyup', validateInput)
lowest_sales_month.addEventListener('blur', validateInput)
three_months_ago_sales.addEventListener('keyup', validateInput)
three_months_ago_sales.addEventListener('blur', validateInput)
two_months_ago_sales.addEventListener('keyup', validateInput)
two_months_ago_sales.addEventListener('blur', validateInput)
last_month_sales.addEventListener('keyup', validateInput)
last_month_sales.addEventListener('blur', validateInput)
sales_target.addEventListener('keyup', validateInput)
sales_target.addEventListener('blur', validateInput)

function validateEmail() {
    let email = document.getElementById('email')
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email.value == '') {
        document.getElementById('text_email_invalid').setAttribute('hidden', 1)
    } else if (validEmail.test(email.value)) {
        document.getElementById('text_email_invalid').setAttribute('hidden', 1)
    } else {
        document.getElementById('text_email_invalid').removeAttribute('hidden')
    }
}

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

// INICIO VALIDAR CHECKBOX MODELO NEGOCIOS
function checkEcommercePlatform() {
    if (document.getElementById('another_ecommerce_platform').checked == true) {
        document.getElementById('another_ecommerce_platform_text').removeAttribute('hidden')

        document.querySelector(`#group__ecommerce_platform .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__ecommerce_platform`).classList.add('form__group-wrong')
    } else {
        document.getElementById('another_ecommerce_platform_text').setAttribute("hidden", true)

        document.querySelector(`#group__ecommerce_platform .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__ecommerce_platform`).classList.remove('form__group-wrong')
    }

    if (document.getElementById('no_ecommerce_platform').checked == false) {
        document.getElementById('group__previous_applications_integrations').removeAttribute('hidden')
    } else {
        document.getElementById('group__previous_applications_integrations').setAttribute("hidden", true)
        document.getElementById('previous_applications_integrations').value = ''
    }
}

function validateFieldAnotherEcommercePlatform() {
    if (document.getElementById('another_ecommerce_platform_text').value == '') {
        document.querySelector(`#group__ecommerce_platform .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__ecommerce_platform`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#group__ecommerce_platform .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__ecommerce_platform`).classList.remove('form__group-wrong')
    }
}
// FIN VALIDAR CHECKBOX MODELO NEGOCIOS

// INICIO VALIDAR CHECK REDES SOCIALES
function checkSocialNetworks() {
    if (document.getElementById('other_social_networks').checked == true) {
        document.querySelector(`#group__social_networks .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__social_networks`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#group__social_networks .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__social_networks`).classList.remove('form__group-wrong')
    }
    document.getElementById('select_redes_required').setAttribute('hidden', 1)
}

function validateFieldOtherSocialNetworks() {
    if (document.getElementById('other_social_networks_text').value == '') {
        document.querySelector(`#group__social_networks .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__social_networks`).classList.add('form__group-wrong')
    } else {
        document.querySelector(`#group__social_networks .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__social_networks`).classList.remove('form__group-wrong')
    }
}
// FIN VALIDAR CHECK REDES SOCIALES

// INICIO VALIDAR CHECKBOX PUBLICIDAD PAUTADA
function checkScheduledAdvertising() {
    if (document.getElementById('scheduled_advertising_yes').checked == true) {
        document.getElementById('group__advertising_media').removeAttribute('hidden')
        document.getElementById('group__monthly_advertising_budget').removeAttribute('hidden')
    } else {
        document.getElementById('group__advertising_media').setAttribute("hidden", true)
        document.getElementById('group__monthly_advertising_budget').setAttribute("hidden", true)
    }
}
// FIN VALIDAR CHECKBOX PUBLICIDAD PAUTADA

// INICIO VALIDAR CHECKBOX BASE DE DATOS DE USUARIOS
function checkUserDatabase() {
    if (document.getElementById('database_yes').checked == true) {
        document.getElementById('group__user_database_platform').removeAttribute('hidden')
        document.getElementById('group__user_database').removeAttribute('hidden')
    } else {
        document.getElementById('group__user_database_platform').setAttribute("hidden", true)
        document.getElementById('group__user_database').setAttribute("hidden", true)
    }
}
// FIN VALIDAR CHECKBOX BASE DE DATOS DE USUARIOS

// INICIO VALIDAR CHECKBOX PLATAFORMA DE EMAIL
function checkEmailPlatform() {
    if (document.getElementById('email_tools_yes').checked == true) {
        document.getElementById('group__email_tools_platform').removeAttribute('hidden')
    } else {
        document.getElementById('group__email_tools_platform').setAttribute("hidden", true)
    }
}
// FIN VALIDAR CHECKBOX PLATAFORMA DE EMAIL

function checkNoSocialNetwork() {
    if (document.getElementById('ninguna').checked) {
        document.getElementById('facebook').setAttribute('disabled', '')
        document.getElementById('instagram').setAttribute('disabled', '')
        document.getElementById('twitter').setAttribute('disabled', '')
        document.getElementById('tiktok').setAttribute('disabled', '')
        document.getElementById('pinterest').setAttribute('disabled', '')
        document.getElementById('youtube').setAttribute('disabled', '')
        document.getElementById('reddit').setAttribute('disabled', '')
        document.getElementById('other_social_networks').setAttribute('disabled', '')
        document.getElementById('other_social_networks_text').setAttribute('disabled', '')
        
        document.getElementById('facebook').checked = false
        document.getElementById('instagram').checked = false
        document.getElementById('twitter').checked = false
        document.getElementById('tiktok').checked = false
        document.getElementById('pinterest').checked = false
        document.getElementById('youtube').checked = false
        document.getElementById('reddit').checked = false
        document.getElementById('other_social_networks').checked = false
        document.getElementById('other_social_networks_text').value = ''
    } else {
        document.getElementById('facebook').removeAttribute('disabled', '')
        document.getElementById('instagram').removeAttribute('disabled', '')
        document.getElementById('twitter').removeAttribute('disabled', '')
        document.getElementById('tiktok').removeAttribute('disabled', '')
        document.getElementById('pinterest').removeAttribute('disabled', '')
        document.getElementById('youtube').removeAttribute('disabled', '')
        document.getElementById('reddit').removeAttribute('disabled', '')
        document.getElementById('other_social_networks').removeAttribute('disabled', '')
        document.getElementById('other_social_networks_text').removeAttribute('disabled', '')
    }
}

/**
 * ====================================================================================================
 * ========================= Functions for next, previous and send buttons ============================
 * ====================================================================================================
 */

function next_1() {
    let email = document.getElementById('email')
    let store_name = document.getElementById('store_name')
    let band_continue = true

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
    let band_continue = true

    if (other_models_check.checked && other_models_text.value == '') {
        band_continue = false
    }

    if (band_continue) {
        let checkboxes_business_model = document.querySelectorAll('input[name="business_model"]:checked')
        json_fields.business_model = checkboxes_business_model[0].value
        json_fields.other_models_text = document.getElementById('other_models_text').value

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
    let industry = document.getElementById('industry')
    let other_industries_text = document.getElementById('other_industries_text')
    let band_continue = true

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
        let select_industry = document.getElementById('industry')
        json_fields.industry = select_industry.options[select_industry.selectedIndex].text
        json_fields.other_industries_text = document.getElementById('other_industries_text').value

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
    let another_ecommerce_platform_check = document.getElementById('another_ecommerce_platform')
    let another_ecommerce_platform_text = document.getElementById('another_ecommerce_platform_text')
    let previous_applications_integrations = document.getElementById('previous_applications_integrations')
    let band_continue = true


    if (another_ecommerce_platform_check.checked && another_ecommerce_platform_text.value == '') {
        band_continue = false
    }

    if (document.getElementById('no_ecommerce_platform').checked == false){
        if (previous_applications_integrations.value == '') {
            document.querySelector(`#group__previous_applications_integrations .form__input-error`).classList.add('form__input-error-active')
            document.getElementById(`group__previous_applications_integrations`).classList.add('form__group-wrong')
            band_continue = false
        } else {
            document.querySelector(`#group__previous_applications_integrations .form__input-error`).classList.remove('form__input-error-active')
            document.getElementById(`group__previous_applications_integrations`).classList.remove('form__group-wrong')
        }
    }

    if (band_continue) {
        let checkboxes_ecommerce_platform = document.querySelectorAll('input[name="ecommerce_platform"]:checked')
        json_fields.ecommerce_platform = checkboxes_ecommerce_platform[0].value
        json_fields.another_ecommerce_platform_text = document.getElementById('another_ecommerce_platform_text').value

        json_fields.previous_applications_integrations = document.getElementById('previous_applications_integrations').value

        document.getElementById('form_4').setAttribute('hidden', 1)
        document.getElementById('form_6').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '5'
    }
}

function previous_3() {
    document.getElementById('form_4').setAttribute('hidden', 1)
    document.getElementById('form_3').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '3'
}

function next_6() {
    let checkboxes_social_networks = document.querySelectorAll('input[name="social_networks[]"]:checked')
    let band_continue = true
    if (checkboxes_social_networks.length > 0) {
        if (document.getElementById('other_social_networks').checked) {
            if (document.getElementById('other_social_networks_text').value != '') {
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

        json_fields.other_social_networks_text = document.getElementById('other_social_networks_text').value

        document.getElementById('form_6').setAttribute('hidden', 1)
        document.getElementById('form_7').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '6'
    }
}

function previous_5() {
    document.getElementById('form_6').setAttribute('hidden', 1)
    document.getElementById('form_4').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '4'
}

function next_7() {
    let checkboxes_scheduled_advertising = document.querySelectorAll('input[name="scheduled_advertising"]:checked')
    json_fields.scheduled_advertising = checkboxes_scheduled_advertising[0].value

    let advertising_media = document.getElementById('advertising_media')
    let monthly_advertising_budget = document.getElementById('monthly_advertising_budget')
    let band_continue = true

    if (document.getElementById('scheduled_advertising_yes').checked == true){
        if (advertising_media.value == '') {
            document.querySelector(`#group__advertising_media .form__input-error`).classList.add('form__input-error-active')
            document.getElementById(`group__advertising_media`).classList.add('form__group-wrong')
            band_continue = false
        } else {
            document.querySelector(`#group__advertising_media .form__input-error`).classList.remove('form__input-error-active')
            document.getElementById(`group__advertising_media`).classList.remove('form__group-wrong')
        }
    
        if (monthly_advertising_budget.value == '') {
            document.querySelector(`#group__monthly_advertising_budget .form__input-error`).classList.add('form__input-error-active')
            document.getElementById(`group__monthly_advertising_budget`).classList.add('form__group-wrong')
            band_continue = false
        } else {
            document.querySelector(`#group__monthly_advertising_budget .form__input-error`).classList.remove('form__input-error-active')
            document.getElementById(`group__monthly_advertising_budget`).classList.remove('form__group-wrong')
        }
    } else {
        document.getElementById('advertising_media').value = ''
        document.getElementById('monthly_advertising_budget').value = ''
    }

    if (band_continue) {
        json_fields.advertising_media = document.getElementById('advertising_media').value
        json_fields.monthly_advertising_budget = document.getElementById('monthly_advertising_budget').value

        document.getElementById('form_7').setAttribute('hidden', 1)
        document.getElementById('form_8').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '7'
    }
}

function previous_6() {
    document.getElementById('form_7').setAttribute('hidden', 1)
    document.getElementById('form_6').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '5'
}

function next_8() {
    let checkboxes_development_team = document.querySelectorAll('input[name="development_team"]:checked')
    json_fields.development_team = checkboxes_development_team[0] ? checkboxes_development_team[0].value : ''

    document.getElementById('form_8').setAttribute('hidden', 1)
    document.getElementById('form_9').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '8'
}

function previous_7() {
    document.getElementById('form_8').setAttribute('hidden', 1)
    document.getElementById('form_7').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '6'
}

function next_9() {
    let checkboxes_database_user = document.querySelectorAll('input[name="database_user"]:checked')
    json_fields.database_user = checkboxes_database_user[0] ? checkboxes_database_user[0].value : ''
    
    let user_database_platform = document.getElementById('user_database_platform')
    let user_database = document.getElementById('user_database')
    let band_continue = true

    if (document.getElementById('database_yes').checked == true){
        if (user_database_platform.value == '') {
            document.querySelector(`#group__user_database_platform .form__input-error`).classList.add('form__input-error-active')
            document.getElementById(`group__user_database_platform`).classList.add('form__group-wrong')
            band_continue = false
        } else {
            document.querySelector(`#group__user_database_platform .form__input-error`).classList.remove('form__input-error-active')
            document.getElementById(`group__user_database_platform`).classList.remove('form__group-wrong')
        }
    
        if (user_database.value == '') {
            document.querySelector(`#group__user_database .form__input-error`).classList.add('form__input-error-active')
            document.getElementById(`group__user_database`).classList.add('form__group-wrong')
            band_continue = false
        } else {
            document.querySelector(`#group__user_database .form__input-error`).classList.remove('form__input-error-active')
            document.getElementById(`group__user_database`).classList.remove('form__group-wrong')
        }
    } else {
        document.getElementById('user_database_platform').value = ''
        document.getElementById('user_database').value = ''
    }

    if (band_continue) {
        json_fields.user_database_platform = document.getElementById('advertising_media').value
        json_fields.user_database = document.getElementById('user_database').value

        document.getElementById('form_9').setAttribute('hidden', 1)
        document.getElementById('form_10').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '9'
    }
}

function previous_8() {
    document.getElementById('form_9').setAttribute('hidden', 1)
    document.getElementById('form_8').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '7'
}

function next_10() {
    let checkboxes_email_tools = document.querySelectorAll('input[name="email_tools"]:checked')
    json_fields.email_tools = checkboxes_email_tools[0].value

    let email_tools_platform = document.getElementById('email_tools_platform')
    let band_continue = true

    if (document.getElementById('email_tools_yes').checked == true){
        if (email_tools_platform.value == '') {
            document.querySelector(`#group__email_tools_platform .form__input-error`).classList.add('form__input-error-active')
            document.getElementById(`group__email_tools_platform`).classList.add('form__group-wrong')
            band_continue = false
        } else {
            document.querySelector(`#group__email_tools_platform .form__input-error`).classList.remove('form__input-error-active')
            document.getElementById(`group__email_tools_platform`).classList.remove('form__group-wrong')
        }
    } else {
        document.getElementById('email_tools_platform').value = ''
    }

    if (band_continue) {
        json_fields.email_tools_platform = document.getElementById('email_tools_platform').value

        document.getElementById('form_10').setAttribute('hidden', 1)
        document.getElementById('form_11').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '10'
    }
}

function previous_9() {
    document.getElementById('form_10').setAttribute('hidden', 1)
    document.getElementById('form_9').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '8'
}

function next_11() {
    let highest_sales_month = document.getElementById('highest_sales_month')
    let lowest_sales_month = document.getElementById('lowest_sales_month')
    let band_continue = true

    if (highest_sales_month.value == '') {
        document.querySelector(`#group__highest_sales_month .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__highest_sales_month`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#group__highest_sales_month .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__highest_sales_month`).classList.remove('form__group-wrong')
    }

    if (lowest_sales_month.value == '') {
        document.querySelector(`#group__lowest_sales_month .form__input-error`).classList.add('form__input-error-active')
        document.getElementById(`group__lowest_sales_month`).classList.add('form__group-wrong')
        band_continue = false
    } else {
        document.querySelector(`#group__lowest_sales_month .form__input-error`).classList.remove('form__input-error-active')
        document.getElementById(`group__lowest_sales_month`).classList.remove('form__group-wrong')
    }

    if (band_continue) {
        json_fields.highest_sales_month = document.getElementById('highest_sales_month').value
        json_fields.lowest_sales_month = document.getElementById('lowest_sales_month').value

        document.getElementById('form_11').setAttribute('hidden', 1)
        document.getElementById('form_12').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '11'
    }
}

function previous_10() {
    document.getElementById('form_11').setAttribute('hidden', 1)
    document.getElementById('form_10').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '9'
}

function next_12() {
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

        document.getElementById('form_12').setAttribute('hidden', 1)
        document.getElementById('form_13').removeAttribute('hidden')

        document.getElementById('span_number_questions_form_2').textContent = '12'
    }
}

function previous_11() {
    document.getElementById('form_12').setAttribute('hidden', 1)
    document.getElementById('form_11').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '10'
}

function next_13() {
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

        const button_loading = document.getElementById('save_button')
        document.getElementById('save_button').setAttribute('disabled', '')
        button_loading.innerHTML = "<div class='loader'></div>"

        document.getElementById('previous_button_12').setAttribute('hidden', 1)

        /**
         * Send data to google sheets
         */
        const formData = new FormData()

        formData.append('store_name', json_fields.store_name)
        formData.append('email', json_fields.email)
        formData.append('business_model', json_fields.business_model)
        formData.append('other_business_model', json_fields.other_models_text)
        formData.append('industry', json_fields.industry)
        formData.append('other_industry', json_fields.other_industries_text)
        formData.append('ecommerce_platform', json_fields.ecommerce_platform)
        formData.append('another_ecommerce_platform', json_fields.another_ecommerce_platform_text)
        formData.append('previous_applications_integrations', json_fields.previous_applications_integrations)
        formData.append('social_networks', json_fields.social_networks)
        formData.append('other_social_networks', json_fields.other_social_networks_text)
        formData.append('scheduled_advertising', json_fields.scheduled_advertising)
        formData.append('advertising_media', json_fields.advertising_media)
        formData.append('monthly_advertising_budget', json_fields.monthly_advertising_budget)
        formData.append('development_team', json_fields.development_team)
        formData.append('database_user', json_fields.database_user)
        formData.append('user_database_platform', json_fields.user_database_platform)
        formData.append('number_users', json_fields.user_database)
        formData.append('email_tools', json_fields.email_tools)
        formData.append('email_tools_platform', json_fields.email_tools_platform)
        formData.append('highest_sales_month', json_fields.highest_sales_month)
        formData.append('lowest_sales_month', json_fields.lowest_sales_month)
        formData.append('three_months_ago_sales', json_fields.three_months_ago_sales)
        formData.append('two_months_ago_sales', json_fields.two_months_ago_sales)
        formData.append('last_month_sales', json_fields.last_month_sales)
        formData.append('sales_target', json_fields.sales_target)

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

        document.getElementById('span_number_questions_form_2').textContent = '12'
    }
}

function previous_12() {
    document.getElementById('form_13').setAttribute('hidden', 1)
    document.getElementById('form_12').removeAttribute('hidden')

    document.getElementById('span_number_questions_form_2').textContent = '11'
}