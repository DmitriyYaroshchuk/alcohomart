import JustValidate from 'just-validate';
import Inputmask from "inputmask";


function validateForm(selectorForm) {
    const validate = new JustValidate(selectorForm);

    let phoneSelector = document.querySelector('[name="tel"]');
    

    const nameField = document.querySelector('[name="name"]');
    if(nameField) {
        validate.addField('[name="name"]',[
            {
                rule: 'required',
                errorMessage: "Заповніть поле",
            },
            {
                rule: 'minLength',
                value: 3,
            },
            {
                rule: 'maxLength',
                value: 15,
            },
        ]);
    }
    
    const surnameField = document.querySelector('[name="surname"]');
    if(surnameField) {
        validate.addField('[name="surname"]',[
            {
                rule: 'required',
                errorMessage: "Заповніть поле",
            },
            {
                rule: 'minLength',
                value: 3,
            },
            {
                rule: 'maxLength',
                value: 15,
            },
        ]);
    }

    const messageField = document.querySelector('[name="message"]');
    if(messageField) {
        validate.addField('[name="message"]', [
            {
              validator: (value) => {
                return value !== undefined && value.length > 3;
              },
              errorMessage: 'Повідомлення має містити більше 3 літер.',
            },
        ]);
    }
    

    if(phoneSelector) {
        let im = new Inputmask('+38 (999) 999-99-99');
        im.mask(phoneSelector);

        validate.addField('[name="tel"]',[
            {
                validator: (value) => {
                    const phone = phoneSelector.inputmask.unmaskedvalue()
                    return Boolean(Number(phone) && phone.length > 0)
                },
                errorMessage: 'Заповніть поле'
            },
            {
                validator: (value) => {
                    const phone = phoneSelector.inputmask.unmaskedvalue()
                    return Boolean(Number(phone) && phone.length === 10)
                },
                errorMessage: 'Заповніть поле повністю'
            }
        ]);
    }

    validate.onSuccess(() => {
        document.querySelector('.order').classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}

export default validateForm;