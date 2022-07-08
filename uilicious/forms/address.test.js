I.wait(10);
I.fill("Nome Completo", "Nacional QA");
I.fill("CPF/CNPJ", "10528190792");
I.fill("CEP","22245070");
I.click("Número");
I.fill("Número", "560");
I.fill("Telefone", "2125563986");
UI.context(".main-header", function(){ // the following commands runs on the login form on
  I.dontSee("Login");
});