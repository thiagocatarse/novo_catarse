I.see("#project-header");
I.see(".project-name");
I.see("text-blurb");
I.see("Abadia de Goiás, GO");
I.see(".project-share");
UI.context("#user-card", function(){
	I.see("Time Produto Catarse");
	I.see("Perfil no Facebook");
	I.see("Perfil no twitter");
})
I.see("Este projeto é apenas um rascunho e ainda não pode receber apoios.");
I.see("Avise-me do lançamento!");
I.see(".fa-bookmark-o");
UI.context(".project-nav", function(){
	I.see("Sobre");
	I.see("Novidades");
	I.see("Apoiadores");
	I.see("Comentários");
});
I.see("Sugestões de apoio parcele em até 6x");
I.see("Lorem-ipsum-description-project");
I.see("Lorem-ipsum-budget-project");
I.see("Denunciar este projeto ao Catarse");