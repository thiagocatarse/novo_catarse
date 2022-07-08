// solidaria_user_info

//Checar validação


//Preencher perfil público
UI.context("#public-profile-form-id", function() {
	I.fill("#public-name-id","Time Produto Catarse");
	I.upload('Imagem do perfil','assets/profile.jpg');
	I.click("Adicionar link")
	I.fill("link-0","link-facebook-do-user");
	I.click("Adicionar link")
	I.fill("link-1","link-twitter-do-user");
});

//Preencher dados cadastrais
I.select("Pessoa física");
I.fill("Nome completo", "QA Criar projeto");
I.fill("CPF", "");
I.fill("CPF", "10528190792");
I.fill("user[birth_date]", "03081984");
TEST.run('forms/address_project');
I.click("Próximo");
