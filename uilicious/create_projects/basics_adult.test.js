I.click("#basics_link");
UI.context("#basics-tab", function(){
  I.fill("Local do projeto", "A");
  I.wait(5);
	I.click("Abadia de Goiás - GO");
	I.select("#content_rating_id", "Sim");
	I.fill("Link para o seu projeto no Catarse", aon_project_name);
	I.click("Salvar");
})