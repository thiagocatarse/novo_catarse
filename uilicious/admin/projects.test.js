TEST.run('./user_menu');
UI.context("#user-menu-dropdown", function(){
	I.click("Admin projetos");
});
I.see("#admin-contributions-list");
I.click("Filtros avançados");
I.see("#advanced-search");
I.select("Draft");
I.click(".w-input.text-field.positive.medium");
I.type("Thiago");
I.click("Buscar");
I.dontSee(".card-error");
I.see(".results-admin-items");

//Logout
TEST.run('login/logout')