window.onload = () =>
{
    const loginform= document.querySelector('#login-form');
    loginform.addEventListener('submit', event =>
    {
        event.preventDefault();
        const email = document.querySelector('#login-input-email');

        if (email.value !== '')
        {
            const validacionEmail = validacion(email.value);
            if (validacionEmail === true)
            {
                //Falta código de envío de información
                window.location.href = "home.html"
            }
            else
            {
                errorMessage.innerHTML = "La estructura del correo es" +
                "erronea. Por favor, revise el correo.";
            }
        }
        else
        {
            errorMessage.innerHTML = "Rellene por favor el campo";
            email.classList.add('error');
        }
    })
}
function validacion(email)
{
    var rev = /\S+@\S+\.\S+/;
    return rev.test(email);
}