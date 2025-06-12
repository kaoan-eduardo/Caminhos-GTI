function validar(){
    let nome = formulario.nome
    let email = formulario.email
    let assunto = formulario.assunto
    let mensagem = formulario.mensagem

    if(nome.value == ""){
        alert("Nome não pode ser vazio")

        nome.focus()
    }

    if(email.value == "" || !email.value.includes ("@") || !email.value.includes (".")){
        alert("E-mail inválido")

        email.focus()
    }

    if(assunto.value == ""){
        alert("Assunto não pode ser vazio")

        assunto.focus()
    }

    if(mensagem.value == ""){
        alert("Mensagem precisa ser preenchida")

        assunto.focus()
    }
}