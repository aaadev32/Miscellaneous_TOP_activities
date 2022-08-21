//be sure to set event listeners for each input field (email, zip code, etc) that is checking the validity
//disable the submit button until every field is valid.
//each field will likely require their own specific function

let passwordVar = null;
let isValid = null;

const validators = (() => {

    //email validator function
    const email = (target) => {
        if (target.validity.typeMismatch) {
            target.setCustomValidity('use a proper email address!');
            target.className = 'invalid';
            target.setAttribute('isvalid', 'false')
        } else {
            target.setCustomValidity('');
            target.className = 'valid';
            target.setAttribute('isvalid', 'true')

            isValid = true;
        }
        target.reportValidity();
        console.log(target)
    }
    //country validator function
    const country = (target) => {
        if (target.validity.patternMismatch) {
            target.setCustomValidity('letters a-z only')
            target.className = 'invalid';
        } else {
            target.setCustomValidity('');
            target.className = 'valid';
            isValid = true;
        }
        target.reportValidity();

    }
    //zip code validator function
    const zipCode = (target) => {
        if (target.validity.patternMismatch) {
            target.setCustomValidity('5 digits of numbers only')
            target.className = 'invalid';
        } else {
            target.setCustomValidity('');
            target.className = 'valid';
            isValid = true;
        }
        target.reportValidity();
    }
    //password validator function
    const password = (target) => {
        passwordVar = target.value;
        target.reportValidity();
    }
    //password confirmation validator function
    const passwordConfirmation = (target) => {
        if (target.value != passwordVar) {
            target.setCustomValidity('passwords do not match!')
            target.className = 'invalid';
        } else {
            target.setCustomValidity('');
            target.className = 'valid';
            isValid = true;
        }
        target.reportValidity();
    }

    const submit = () => {
        if (isValid != true) {
            alert('you must properly fill fields according to their requirements to submit!');
        } else {
            alert('submitted!');
        }
    }
    return { email, country, zipCode, password, passwordConfirmation, submit };
})();

//set eventListeners 
document.getElementById('email').addEventListener('input', () => {
    validators.email(document.getElementById('email'));
});
document.getElementById('country').addEventListener('input', () => {
    validators.country(document.getElementById('country'));
});
document.getElementById('zip').addEventListener('input', () => {
    validators.zipCode(document.getElementById('zip'));
});
document.getElementById('password').addEventListener('input', () => {
    validators.password(document.getElementById('password'));
});
document.getElementById('password-confirmation').addEventListener('input', () => {
    validators.passwordConfirmation(document.getElementById('password-confirmation'));
});

document.getElementById('submit-button').onclick = function () {
    validators.submit();
}