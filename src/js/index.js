const submit = document.getElementById("submit");
const nomeCompleto = document.getElementById("nome-completo");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const mensagemInput = document.getElementById("mensagem");


function botaoEnviar() {
   const campoObrigatorioNome = document.getElementById("campo-obrigatorio-nome");
   const campoObrigatorioEmail = document.getElementById("campo-obrigatorio-email");
   const campoObrigatorioTelefone = document.getElementById("campo-obrigatorio-telefone");
   const campoObrigatorioMensagem = document.getElementById("campo-obrigatorio-mensagem");

   event.preventDefault();

   if(nomeCompleto.value === "") {
      campoObrigatorioNome.style.display = "block";
      nomeCompleto.style.border = "1px solid #F52E2E";
   } else {
      nomeCompleto.style.borderColor = "#00C22B";
      campoObrigatorioNome.style.display = "none"
   };

   if(emailInput.value === "") {
      campoObrigatorioEmail.style.display = "block";
      emailInput.style.border = "1px solid #F52E2E";
   } else {
      emailInput.style.borderColor = "#00C22B";
      campoObrigatorioEmail.style.display = "none";
   };

   if(telefoneInput.value === "") {
      campoObrigatorioTelefone.style.display = "block";
      telefoneInput.style.border = "1px solid #F52E2E";
   } else {
      telefoneInput.style.borderColor = "#00C22B";
      campoObrigatorioTelefone.style.display = "none";
   };

   if(mensagemInput.value === "") {
      campoObrigatorioMensagem.style.display = "block";
      mensagemInput.style.border = "1px solid #F52E2E";
   } else {
      mensagemInput.style.borderColor = "#00C22B";
      campoObrigatorioMensagem.style.display = "none";
   };
};