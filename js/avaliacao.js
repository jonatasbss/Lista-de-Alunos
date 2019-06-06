function myFunction(){

    var form = document.getElementById('form-horizontal');
    var name = document.getElementById('name');
    var idade = document.getElementById('idade');
    var email = document.getElementById('email');


    form.addEventListener('submit', function(e){

        document.getElementById('nome').innerHTML = name.value;
        document.getElementById('anos').innerHTML = idade.value;
        document.getElementById('e-mail').innerHTML = email.value;
        document.getElementById("resultado").style.visibility = "visible";

        e.preventDefault();

        

    });
    
    

}
