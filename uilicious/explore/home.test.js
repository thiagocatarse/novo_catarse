//Visitar a home
I.goTo(DATA.site_catarse);

//Checar se o header está presente
I.see(".main-header");
I.see("#menu-components");
I.count(".header-link", 3);

//Checar se as seções com projetos estão presentes
I.see("Projetos que amamos");
I.see("Assinaturas");
I.see("Projetos COVID-19");
I.count(".card-project", 9);

//Checar se seção de conectar com facebook está presente
I.see("Conecte seu facebook");

//Checar se seção de Blog está presente
UI.context("#blog", function(){
	I.count(".link-hidden", 3)
});

//Checar se footer está presente
I.see(".main-footer");

//Visitar o explore
UI.context("#menu-components", function(){
	I.click("Explore");
});

//Checar se filtros do Explore estão presentes
I.see("#explore");
I.count(".explore-filter-wrapper", 4);
I.see("Todos os projetos");
I.see("Todas as categorias");
I.see("Populares");
I.see("Brasil");

//Checar se tem projetos carregados no explore e se o botão Carregar mais funciona
TEST.run('./count_projects');

//Checar se filtros do Explore estão funcionando
UI.context(".hero-search", function(){
	I.click("Todos os projetos");
	I.count(".explore-filter-link", 4);
	I.click("Projetos pontuais");
});

TEST.run('./count_projects');
I.refreshPage();
I.wait(2)

UI.context(".hero-search", function(){
I.click("Todas as categorias");
	I.count(".explore-filter-link", 20);
	I.click("Literatura");
});

TEST.run('./count_projects');
I.refreshPage();
I.wait(2)

UI.context(".hero-search", function(){
I.click("Populares");
	I.count(".explore-filter-link", 6);
	I.click("Finalizados");
});

TEST.run('./count_projects');

//checar se a busca está funcionando
I.fill("pg-search", DATA.project_aon_01_name);
I.pressEnter();
I.count(".card-project", 1);
I.click(".card-project-thumb");
I.see(DATA.project_aon_01_name);
I.see("Projeto para homologação em produção (time dev do Catarse)");



//Logout
TEST.run('login/logout')

