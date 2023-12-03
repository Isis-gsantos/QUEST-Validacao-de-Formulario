const submit = document.getElementById("submit");
const nomeCompleto = document.getElementById("nome-completo");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const mensagemInput = document.getElementById("mensagem");


function botaoEnviar() {
   const campoObrigatorioNome = document.getElementById("campo-obrigatorio-nome");
   const campoObrigatorioEmail = document.getElementById("campo-obrigatorio-email");
   const campoObrigatorioTelefone = document.getElementById("campo-obrigatorio-telefone")
   const campoObrigatorioMensagem = document.getElementById("campo-obrigatorio-mensagem");

   if(nomeCompleto.value === ""){
      campoObrigatorioNome.style.display = "block";
      nomeCompleto.style.border = "1px solid #F52E2E";
   } else {
      nomeCompleto.style.border = "border: 1px solid #00C22B";
   }

   // const validacaoEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

   // if(validacaoEmail(emailInput.value)) {
   //    campoObrigatorioEmail.style.display = "block";
   //    emailInput.style.border = "1px solid #F52E2E";
   // } else {
   //    emailInput.style.border = "border: 1px solid #00C22B";
   //    console.log("mensagem verde");
   // }

   if(mensagemInput.value === "") {
      campoObrigatorioMensagem.style.display = "block";
      mensagemInput.style.border = "1px solid #F52E2E";
   } else {
      mensagemInput.style.border = "border: 1px solid #00C22B";
      console.log("mensagem verde");
   };

};