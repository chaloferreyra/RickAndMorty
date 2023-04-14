export const validate = (inputs) =>{

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = /[0-9]+/;
    const errors = {};

    if (inputs.username === '') {
      errors.username = 'El usuario no puede estar vacío';
    } else if (!regexEmail.test(inputs.username)) {
        errors.username = 'Debe ser un correo electrónico válido';
    }
    if(inputs.username.length > 35){
        errors.username = 'No puede contener más de 35 caracteres';
    }
    if (!inputs.password) {
      errors.password = 'La contraseña no puede estar vacía';
    } else if (inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password = 'Longitud de la contraseña inválida';
    } else if (!regexPass.test(inputs.password)){
        errors.password = 'La contraseña debe contener al menos 1 numero';
    }

    return errors;
  }

