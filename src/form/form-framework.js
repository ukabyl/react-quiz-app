export const formFramework = (config, validation) => {
    return {
        ...config,
        validation,
        valid: !validation,
        value: '',
        touched: false
    }   
}

export function validate(value, validation = null) {
    if ( !validation ) {
        return true
    }

    let isValid = true;

    if ( validation.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    return isValid;
}

export function validateForm(formControls) {

    let isValid = true;

    for (let control in formControls) {
        if ( formControls.hasOwnProperty(control) ) {
            isValid = formControls[control].valid === true && isValid;
        }
    }
    

    return isValid;
}