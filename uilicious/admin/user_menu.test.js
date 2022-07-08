// Checar que links para área de admin estão corretos
I.goTo(DATA.site_catarse + "pt/login");
TEST.run('../login/login_admin');
I.click("#user-menu");
UI.context("#user-menu-dropdown", function(){
	I.see("Usuários");
	I.see("Apoios");
	I.see("Saques");
	I.see("Admin projetos");
	I.see("Admin assinaturas");
	I.see("Admin notificações");
	I.see("Banners");
});