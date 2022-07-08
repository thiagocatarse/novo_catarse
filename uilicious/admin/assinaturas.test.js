TEST.run('./user_menu');
UI.context("#user-menu-dropdown", function(){
	I.click("Admin assinaturas");
});
I.see("#admin-contributions-list");
I.click("Filtros avançados");
I.see("#advanced-search");
I.click(".w-input.text-field.positive.medium");
I.type("Thiago Machado");
I.click("Buscar");
I.dontSee(".card-error");
I.see(".results-admin-items");

//Logout
TEST.run('login/logout')