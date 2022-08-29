


var btnFaleconosco = document.getElementById("btn-faleconosco");
var btnEmpresa = document.getElementById("btn-empresa");
var formVisible = document.querySelector(".form-visible")
var empresaVisible = document.querySelector(".empresa-visible")

btnFaleconosco.addEventListener("click", function(){
    formVisible.classList.toggle("form-visible");
})

btnEmpresa.addEventListener("click", function(){
    empresaVisible.classList.toggle("empresa-visible");
})



