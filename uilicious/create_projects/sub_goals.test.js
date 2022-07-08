I.click("#goals_link");

//checar se erros de salvar meta em branco estão corretos
UI.context("#arrecadacao", function(){
	I.click("Salvar");
  I.see("A meta deve ser igual ou superior a R$10");
	I.see("Título não pode ficar em branco.");
	I.see("Descrição não pode ficar em branco.");
	I.fill("Meta", "100");
	I.fill("Título", "Meta-título-100");
	I.fill("Descrição da meta", "Meta-descrição-100");
	I.click("Salvar");
	I.see("Meta: R$100");
	I.see("Meta-título-100");
	I.see("Meta-descrição-100");
})

//checar se é possível deletar uma meta
I.click(".fa-edit");
I.wait(5);
I.click(".btn.btn-inline.btn-no-border.btn-small.btn-terciary.fa.fa-lg.fa-trash");
I.acceptAlert();
I.dontSee("Meta: R$100");
I.dontSee("Meta-título-100");
I.dontSee("Meta-descrição-100");

//checar se é possível adicionar uma nova meta
I.click("Adicionar meta mensal");
UI.context("#arrecadacao", function(){
	I.fill("Meta", "200");
	I.fill("Título", "Meta-título-200");
	I.fill("Descrição da meta", "Meta-descrição-200");
	I.click("Salvar");
})
I.click("Adicionar meta mensal");
UI.context("#arrecadacao", function(){
	I.fill("Meta", "300");
	I.fill("Título", "Meta-título-300");
	I.fill("Descrição da meta", "Meta-Descrição-300");
	I.click("Salvar");
})