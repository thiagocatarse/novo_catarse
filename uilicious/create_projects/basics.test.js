I.click("#basics_link");
UI.context("#basics-tab", function(){
  I.fill("Local do projeto", "A");
  I.wait(5);
	I.click("Abadia de Goiás - GO");
	I.click("Salvar");
	//I.click("Saiba o que pode e o que não pode.");
	//I.see("✅São permitidos:");
	//I.see("🚫Não são permitidos:");
	//I.click("Saiba o que pode e o que não pode.");
	//I.dontSee("✅São permitidos:");
	//I.dontSee("🚫Não são permitidos:");
	I.select("#content_rating_id", "Sim");
	I.see("✅São permitidos:");
	I.see("🚫Não são permitidos:");
	I.see("Ainda em dúvidas se o seu projeto é permitido?");
	I.select("#content_rating_id", "Não");
	I.click("Salvar");
})