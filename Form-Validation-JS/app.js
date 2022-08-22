//be sure to set event listeners for each input field (email, zip code, etc) that is checking the validity
//disable the submit button until every field is valid.
//each field will likely require their own specific function

let passwordVar = null;
let confirmedPasswordVar = null;

const validators = (() => {

    //email validator function
    const email = (target) => {
        if (target.validity.typeMismatch) {
            target.setCustomValidity('use a proper email address!');
            target.setAttribute('isvalid', 'false')
        } else {
            target.setCustomValidity('');
            target.setAttribute('isvalid', 'true')

        }
        target.reportValidity();
        console.log(target)
    }
    //country validator function
    const country = (target) => {
        if (target.validity.patternMismatch) {
            target.setCustomValidity('letters a-z only')
        } else {
            target.setCustomValidity('');
        }
        target.reportValidity();

    }
    //zip code validator function
    const zipCode = (target) => {
        if (target.validity.patternMismatch) {
            target.setCustomValidity('5 digits of numbers only')
        } else {
            target.setCustomValidity('');
        }
        target.reportValidity();
    }
    //password validator function
    const password = (target) => {
        passwordVar = target.value;
        if (target.value != confirmedPasswordVar) {
            target.setCustomValidity('passwords do not match!');
        } else {
            target.setCustomValidity('')
            document.getElementById('password-confirmation').setCustomValidity('');
        }
        target.reportValidity();
    }
    //password confirmation validator function
    const passwordConfirmation = (target) => {
        confirmedPasswordVar = target.value;
        if (target.value != passwordVar) {
            target.setCustomValidity('passwords do not match!');
        } else {
            target.setCustomValidity('');
            document.getElementById('password').setCustomValidity('');
        }
        target.reportValidity();
    }
    //submit function
    const submit = () => {
        let truthyArr = document.querySelectorAll('input');
        let validForm = null;
        console.log(document.querySelectorAll('input'))

        for (i = 0; i < truthyArr.length; i++) {
            if (truthyArr[i].validity.valid != true) {
                validForm = false;
                break;
            } else {
                validForm = true;
            }
        }

        if (validForm != true) {
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