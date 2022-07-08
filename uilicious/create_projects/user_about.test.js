I.click("#dashboard_user_about_link");
I.wait(5);
//I.click("user_public_name");
I.wait(3);
I.fill("user_public_name","Time Produto Catarse");
I.upload('Imagem do perfil','assets/profile.jpg');
I.click(".redactor-box");
I.type("Descrição-user-about");
I.fill("user[facebook_link]","link-facebook-do-user");
I.fill("user[twitter]","link-twitter-do-user");
I.click("Salvar");
I.wait(5);
I.click(".thumb-project-dashboard");
UI.context("#user-card", function(){
	I.see("Time Produto Catarse");
	I.see("Perfil no Facebook");
	I.see("Perfil no twitter");
})
