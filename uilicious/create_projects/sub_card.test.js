I.click("#card_link");
UI.context("#card-tab", function(){
  I.upload('Imagem de fundo (opcional)', 'assets/background.jpg');
  I.upload('Imagem do projeto', 'assets/thumb.jpg');
	I.fill("Frase de efeito", "text-blurb");
	I.click("Salvar");
})