//Carregar projeto de assinaturas
I.goTo(DATA.site_catarse + "/pt/login");
TEST.run('login/login_normal_user');
I.goTo(DATA.project_sub_01_url);

//Carregar aba novidades
I.click("#dashboard_posts_link");
I.wait(3);
I.see("Todo mundo (assinantes e não assinantes)");
I.see("Todos os assinantes");
I.see("Somente assinantes de algumas recompensas.");
I.see("#post_title");
I.see(".redactor-editor");
I.see("Novidades já enviadas");
I.see(".table-outer");
I.see(".table-row");
I.wait(2);

//Enviar novidades para Todo Mundo
var titulo_novidade_todo_mundo = SAMPLE.id(10);
var conteudo_novidade_todo_mundo = SAMPLE.id(20);
I.fill("#post_title", titulo_novidade_todo_mundo);
I.click(".redactor-editor");
I.type(conteudo_novidade_todo_mundo);
I.click("Pré-visualizar");
I.see("Revise sua novidade antes de enviar!");
I.see(titulo_novidade_todo_mundo);
I.see(conteudo_novidade_todo_mundo);
I.see("A novidade acima será enviada por email para todos os assinantes e ficará visível publicamente na plataforma.");
I.click("Enviar");
I.refreshPage();
I.see(titulo_novidade_todo_mundo);
I.click(titulo_novidade_todo_mundo);
I.see(titulo_novidade_todo_mundo);
I.see(conteudo_novidade_todo_mundo);
I.closeTab();
UI.context(".table-row", function(){ 
  I.see("Destinatários:");
	I.see("Todo mundo (assinantes e não assinantes)");
})


//Enviar novidades para Todos os assinantes
var titulo_novidade_todos_assinantes = SAMPLE.id(10);
var conteudo_novidade_todos_assinantes = SAMPLE.id(20);
I.select("Todos os assinantes");
I.fill("#post_title", titulo_novidade_todos_assinantes);
I.click(".redactor-editor");
I.type(conteudo_novidade_todos_assinantes);
I.click("Pré-visualizar");
I.see("Revise sua novidade antes de enviar!");
I.see(titulo_novidade_todos_assinantes);
I.see(conteudo_novidade_todos_assinantes);
I.see("A novidade acima será enviada por email para todos os assinantes e ficará visível somente para esses na plataforma.");
I.click("Enviar");
I.refreshPage();
I.see(titulo_novidade_todos_assinantes);
I.click(titulo_novidade_todos_assinantes);
I.see(titulo_novidade_todos_assinantes);
I.see(conteudo_novidade_todos_assinantes);
I.closeTab();
UI.context(".table-row", function(){ 
  I.see("Destinatários:");
	I.see("Todos os assinantes");
})
I.wait(2);

//Enviar novidades para somente alguns assinantes
var titulo_novidade_alguns_assinantes = SAMPLE.id(10);
var conteudo_novidade_alguns_assinantes = SAMPLE.id(20);
I.select("Somente assinantes de algumas recompensas.");
I.see("R$5 - recompensa-titulo-sub-5");
I.see("R$6 - recompensa-titulo-sub-6");
I.click("R$5 - recompensa-titulo-sub-5");
I.click("R$6 - recompensa-titulo-sub-6");
I.fill("#post_title", titulo_novidade_alguns_assinantes);
I.click(".redactor-editor");
I.type(conteudo_novidade_alguns_assinantes);
I.click("Pré-visualizar");
I.see("Revise sua novidade antes de enviar!");
I.see(titulo_novidade_alguns_assinantes);
I.see(conteudo_novidade_alguns_assinantes);
I.see("A novidade acima será enviada por email para os assinantes de");
I.see("R$5 - recompensa-titulo-sub-5");
I.see("R$6 - recompensa-titulo-sub-6");
I.see("e ficará visível na plataforma somente para esses assinantes.");
I.click("Enviar");
I.refreshPage();
I.see(titulo_novidade_alguns_assinantes);
I.click(titulo_novidade_alguns_assinantes);
I.see(titulo_novidade_alguns_assinantes);
I.see(conteudo_novidade_alguns_assinantes);
I.closeTab();
UI.context(".table-row", function(){ 
  I.see("Destinatários: Assinantes de");
	I.see("R$6 - recompensa-titulo-sub-6");
	I.see("R$5 - recompensa-titulo-sub-5");
});

I.wait(2);

//Logout
TEST.run('login/logout')

//Checar se novidades estão com visualização correta para não apoiadores
I.goTo(DATA.project_sub_01_url + "#posts");
I.count(".card-message", 2);
I.see(titulo_novidade_todo_mundo);
I.see(conteudo_novidade_todo_mundo);
I.see(titulo_novidade_todos_assinantes);
I.dontSee(conteudo_novidade_todos_assinantes)
I.see(titulo_novidade_alguns_assinantes);
I.dontSee(conteudo_novidade_alguns_assinantes);
I.see("Post exclusivo para assinantes de");
I.see("R$6 - recompensa-titulo-sub-6");
I.see("R$5 - recompensa-titulo-sub-5");
I.see("Post exclusivo para assinantes");

//Logout
TEST.run('login/logout')

//Carregar projeto de assinaturas
I.goTo(DATA.site_catarse + "/pt/login");
TEST.run('login/login_normal_user');
I.goTo(DATA.project_sub_01_url);

//Carregar aba novidades e deletar novidades
I.click("#dashboard_posts_link");
I.wait(3);
I.click(".fa-trash");
I.wait(2);
I.click(".fa-trash");
I.wait(2);
I.click(".fa-trash");

//Logout
TEST.run('login/logout')

//Checar emails (somente em produção)
I.goTo(DATA.site_catarse);
if(I.amAt$("https://www.catarse.me")){
	I.goTo("https://www.mailinator.com/v3/#/#inboxpane");
	I.fill("#inbox_field","qa-prod-catarse-novidade");
	I.click("#go_inbox");
	I.wait(30);
	I.click("oprimeiro - Novidade: " + titulo_novidade_todo_mundo);
	I.click("#trash_but");
	I.acceptAlert()
	I.click("oprimeiro - Novidade: " + titulo_novidade_todos_assinantes);
	I.click("#trash_but");
	I.acceptAlert()
}