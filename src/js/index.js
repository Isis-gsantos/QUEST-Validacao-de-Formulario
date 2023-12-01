const submit = document.getElementById("submit");

submit.addEventListener("submit", () => {
    const nomeCompleto = document.getElementById("nome-completo");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const mensagem = document.getElementById("mensagem");

    // const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // if(isValidEmail(email.value)){
    //     email.style.border = "1px solid #00C22B";
    // } else {
    //     email.classList.remove(".validacao-confirmada")
    //     email.classList.add(".campo-obrigatorio")
    // }
});
