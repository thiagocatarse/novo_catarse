UI.COOKIE.deleteAll()
I.refreshPage()


//entrar no sandbox, acessar projeto e selecionar recompensa
I.goTo(DATA.site_catarse);
I.goTo(DATA.project_sub_01_url);
I.wait(3);

//checar se tem recompensa na página de projeto
I.see("R$ 5 ou mais por mês");
I.see("R$ 6 ou mais por mês");
I.see("R$ 15 ou mais por mês");
// I.count("recompensa-titulo-sub-5",2);
I.count("recompensa-titulo-sub-6",2);
I.count("recompensa-titulo-sub-15",2);

I.click("#contribute_project_form");
I.see("R$ 5 ou mais por mês");
I.see("R$ 6 ou mais por mês");
I.see("R$ 15 ou mais por mês");
// I.count("recompensa-titulo-sub-5",2);
I.count("recompensa-titulo-sub-6",2);
I.count("recompensa-titulo-sub-15",2);
I.select("R$ 5 ou mais por mês");
I.click("Continuar");