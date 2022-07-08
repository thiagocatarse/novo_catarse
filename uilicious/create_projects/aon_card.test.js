I.click("#card_link");
UI.context("#card-tab", function(){
	I.upload('Imagem do projeto', 'assets/thumb.png');
	I.wait(3);
	I.fill("Frase de efeito", "text-blurb");
	I.wait(3);
	I.click("Salvar");
})