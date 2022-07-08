//Carregar projeto de assinaturas
I.goTo(DATA.site_catarse + "/pt/login");
TEST.run('login/login_normal_user');
I.goTo(DATA.project_aon_01_url);

//Carregar aba novidades
I.click("#dashboard_posts_link");
I.wait(15);
I.see("Todo mundo (apoiadores e não apoiadores)");
I.see("Todos os apoiadores");
I.see("Somente apoiadores de algumas recompensas.");
I.see("#post_title");
I.see(".redactor-editor");
I.see("Novidades já enviadas");
I.see(".table-outer");
I.see(".table-row");
I.wait(15);

//Enviar novidades para Todo Mundo
var titulo_novidade_todo_mundo_aon = SAMPLE.id(10);
var conteudo_novidade_todo_mundo_aon = SAMPLE.id(20);
I.fill("#post_title", titulo_novidade_todo_mundo_aon);
I.click(".redactor-editor");
I.type(conteudo_novidade_todo_mundo_aon);
I.click("Pré-visualizar");
I.see("Revise sua novidade antes de enviar!");
I.see(titulo_novidade_todo_mundo_aon);
I.see(conteudo_novidade_todo_mundo_aon);
I.see("A novidade acima será enviada por email para todos os apoiadores e ficará visível publicamente na plataforma.");
I.click("Enviar");
I.refreshPage();
I.see(titulo_novidade_todo_mundo_aon);
I.click(titulo_novidade_todo_mundo_aon);
I.see(titulo_novidade_todo_mundo_aon);
I.see(conteudo_novidade_todo_mundo_aon);
I.closeTab();
UI.context(".table-row", function(){ 
  I.see("Destinatários:");
	I.see("Todo mundo (apoiadores e não apoiadores)");
})


//Enviar novidades para Todos os apoiadores
var titulo_novidade_todos_apoiadores = SAMPLE.id(10);
var conteudo_novidade_todos_apoiadores = SAMPLE.id(20);
I.select("Todos os apoiadores");
I.fill("#post_title", titulo_novidade_todos_apoiadores);
I.click(".redactor-editor");
I.type(conteudo_novidade_todos_apoiadores);
I.click("Pré-visualizar");
I.see("Revise sua novidade antes de enviar!");
I.see(titulo_novidade_todos_apoiadores);
I.see(conteudo_novidade_todos_apoiadores);
I.see("A novidade acima será enviada por email para todos os apoiadores e ficará visível somente para esses na plataforma.");
I.click("Enviar");
I.wait(3);
I.refreshPage();
I.see(titulo_novidade_todos_apoiadores);
I.click(titulo_novidade_todos_apoiadores);
I.see(titulo_novidade_todos_apoiadores);
I.see(conteudo_novidade_todos_apoiadores);
I.closeTab();
UI.context(".table-row", function(){ 
  I.see("Destinatários:");
	I.see("Todos os apoiadores");
})
I.wait(2);

//Enviar novidades para somente alguns apoiadores
var titulo_novidade_alguns_apoiadores = SAMPLE.id(10);
var conteudo_novidade_alguns_apoiadores = SAMPLE.id(20);
I.select("Somente apoiadores de algumas recompensas.");
I.select("R$10 - recompensa-titulo-10");
I.select("R$20 - recompensa-titulo-20");
I.see("R$30 - recompensa-titulo-30");
I.fill("#post_title", titulo_novidade_alguns_apoiadores);
I.click(".redactor-editor");
I.type(conteudo_novidade_alguns_apoiadores);
I.click("Pré-visualizar");
I.see("Revise sua novidade antes de enviar!");
I.see(titulo_novidade_alguns_apoiadores);
I.see(conteudo_novidade_alguns_apoiadores);
I.see("A novidade acima será enviada por email para os apoiadores de");
I.see("R$10 - recompensa-titulo-10");
I.see("R$20 - recompensa-titulo-20");
I.see("e ficará visível na plataforma somente para esses apoiadores.");
I.click("Enviar");
I.wait(3);
I.refreshPage();
I.see(titulo_novidade_alguns_apoiadores);
I.click(titulo_novidade_alguns_apoiadores);
I.see(titulo_novidade_alguns_apoiadores);
I.see(conteudo_novidade_alguns_apoiadores);
I.closeTab();
UI.context(".table-row", function(){ 
  I.see("Destinatários: Apoiadores de");
	I.see("R$20 - recompensa-titulo-20");
	I.see("R$10 - recompensa-titulo-10");
})
I.wait(2);

//Logout
TEST.run('login/logout')

//Checar se novidades estão com visualização correta para não apoiadores
I.goTo(DATA.project_aon_01_url + "#posts");
I.see(".card-message");
I.see(titulo_novidade_todo_mundo_aon);
I.see(conteudo_novidade_todo_mundo_aon);
I.see(titulo_novidade_todos_apoiadores);
I.dontSee(conteudo_novidade_todos_apoiadores)
I.see(titulo_novidade_alguns_apoiadores);
I.dontSee(conteudo_novidade_alguns_apoiadores);
I.see("Post exclusivo para apoiadores de");
I.see("R$20 - recompensa-titulo-20");
I.see("R$10 - recompensa-titulo-10");
I.see("Post exclusivo para apoiadores");


//Logout
TEST.run('login/logout')

//Carregar projeto de assinaturas
I.goTo(DATA.site_catarse + "/pt/login");
TEST.run('login/login_normal_user');
I.goTo(DATA.project_aon_01_url);

//Carregar aba novidades e deletar novidades
I.click("#dashboard_posts_link");
I.wait(3);
I.click(".fa-trash");
I.wait(2);
I.click(".fa-trash");
I.wait(2);
I.click(".fa-trash");
I.wait(2);

//Logout
TEST.run('login/logout')

//Checar emails (somente em produção)
I.goTo(DATA.site_catarse);
if(I.amAt$("https://www.catarse.me")){
	I.goTo("https://www.mailinator.com/v3/#/#inboxpane");
	I.fill("#inbox_field","qa-prod-catarse-novidade");
	I.click("#go_inbox");
	I.wait(30);
	I.click("qa_prod - Novidade: " + titulo_novidade_todo_mundo_aon);
	I.click("#trash_but");
	I.acceptAlert()
	I.click("qa_prod - Novidade: " + titulo_novidade_todos_apoiadores);
	I.click("#trash_but");
	I.acceptAlert()
}
