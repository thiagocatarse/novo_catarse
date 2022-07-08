UI.COOKIE.deleteAll()
I.refreshPage()

I.goTo(DATA.site_catarse);
I.goTo(DATA.project_aon_01_url);

//checar se tem recompensa na página de projeto
I.see("R$ 10 ou mais");
I.see("R$ 20 ou mais");
I.see("R$ 30 ou mais");
I.count("recompensa-titulo-10",2);
I.count("recompensa-titulo-20",2);
I.count("recompensa-titulo-30",2);

//avançar para contributions new pelo botão de apoiar e checar se vê recompensas
I.click("#contribute_project_form");
I.see("R$ 10 ou mais");
I.see("R$ 20 ou mais");
I.see("R$ 30 ou mais");
I.count("recompensa-titulo-10",2);
I.count("recompensa-titulo-20",2);
I.count("recompensa-titulo-30",2);
I.select("R$ 10 ou mais");
I.click("Continuar");