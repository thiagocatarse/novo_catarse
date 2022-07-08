I.goTo(DATA.site_catarse);

//checar se a busca está funcionando
I.fill("pg-search", aon_project_name);
I.pressEnter();
I.count(".card-project", 1);
I.see("+18");
I.click(".card-project-thumb");
I.see("✋Você precisa ser maior de 18 anos para acessar esta página");
I.click("Sim. Tenho mais de 18 anos");

