
console.log("script ejecutado desde front.js")

function validateForm() {

    const password = document.forms["loginForm"]["pass"].value;
    if (password === "") {
        alert("Password must be filled out");
        return false;
    }
}

const parrafo = document.getElementById("descripcion")


console.log("parrafo")
console.log(parrafo.innerText)
