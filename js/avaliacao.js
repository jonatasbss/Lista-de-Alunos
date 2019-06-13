function myFunction() {

    let form = document.getElementById('form-horizontal');
    let name = document.getElementById('name');
    let idade = document.getElementById('idade');
    let email = document.getElementById('email');

    let resultado = document.getElementById("resultado")
    let formName = document.getElementById('nome')
    let formAge = document.getElementById('anos')
    let formEmail = document.getElementById('e-mail')
    
    
    form.addEventListener('submit', function (e) {


        formName.innerHTML = name.value;
        formAge.innerHTML = idade.value;
        formEmail.innerHTML = email.value;

        let info = resultado.style.visibility = "visible";
        if (info == "hidden" ) {
            formName.innerHTML = name.value;
            formAge.innerHTML = idade.value;
            formEmail.innerHTML = email.value;
        }else{
            name.value = "";
            idade.value = "";
            email.value = "";
        }

        e.preventDefault();
        

    });

  
}