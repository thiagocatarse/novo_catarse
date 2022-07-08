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
I.see("#contribute_project_form");
UI.context(".project-nav", function(){
	I.see("Sobre");
	I.see("Novidades");
	// I.see("Assinantes");
	I.see("Comentários");
});
I.see("Meta-título-200");
I.see("Meta-descrição-200");
I.see("Lorem-ipsum-description-project");
I.see("Denunciar este projeto ao Catarse");
I.see("#rewards");
I.see(".card-reward");
I.see("Recompensa-título-10");
I.see("Recompensa-descrição-10");