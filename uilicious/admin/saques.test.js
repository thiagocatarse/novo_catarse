TEST.run('./user_menu');
UI.context("#user-menu-dropdown", function(){
	I.click("Saques");
});
I.wait(20)
I.see("#admin-contributions-list");
I.click("Filtros avançados");
I.see("#advanced-search");
I.select("Pendente");
I.click("Buscar");
I.count(".results-admin-items", 9);
I.select(".w-checkbox-input");
I.click("Marcar como");
I.click("Aprovada");
I.see("Nome");
I.see("Valor");
I.see("Solicitado em")
I.see("Total");
UI.context(".modal-dialog-content", function(){ 
	I.count("R$", 2);
})
I.click("Aprovar");
I.see("#admin-contributions-list");

//Logout
TEST.run('login/logout')