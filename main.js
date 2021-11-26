const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const btnEnviar = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

btnEnviar.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("incorrecto");
        resultado.classList.remove("correcto");
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente!";
        resultado.classList.add("correcto");
        resultado.classList.remove("incorrecto");
    }

})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es inválido"
        return error;
    }  else if ( email.value.length < 5 ||
                email.value.length > 40 ||
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El email es inválido";
        return error;
    } else if (materia.value.length < 4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "Inválida";
    }

    error[0] = false;
    return error;
}