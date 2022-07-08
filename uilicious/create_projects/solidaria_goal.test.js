// solidaria_goal

//Checar validação
I.click("Próximo")
I.see("O valor da meta não pode ficar em branco")
I.see("A descrição do projeto não pode ficar em branco")
I.see("Local do projeto não pode ficar em branco")

//Preencher valor
I.click("0,00");
I.see("Dicas do Rafa, nosso especialista")
I.fill("Valor do projeto", "50000")

//Preencher descrição
I.click(".redactor-editor");
I.see("Dicas do Rafa, nosso especialista")
I.type("Lorem-ipsum-description-project")

//Preencher local do projeto
I.fill("Local do projeto", "A");
I.wait(5);
I.click("Abadia de Goiás - GO");

//Checar validação novamente
I.click("Salvar")
I.dontSee("O valor da meta não pode ficar em branco")
I.dontSee("A descrição do projeto não pode ficar em branco")
I.dontSee("Local do projeto não pode ficar em branco")

//Checar preview da página
I.click("Ver página")
I.see("Modo de pré-visualização")

UI.context(".modal-dialog-inner", ()=>{ 
	// I.see(solidaria_project_name);
	I.see("Lorem-ipsum-description-project")
	I.see("text-blurb");
	I.see("Abadia de Goiás, GO");
	I.see("Este projeto é apenas um rascunho e ainda não pode receber apoios.")
	I.see("Sugestões de apoio parcele em até 6x");
	I.see("Lorem-ipsum-description-project");
	I.see("Denunciar este projeto ao Catarse");
	I.click(".modal-close")
})
I.dontSee(".modal-backdrop")
I.click("Próximo")