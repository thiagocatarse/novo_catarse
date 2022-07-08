//Checar se tem projetos carregados no explore e se o botão Carregar mais funciona
I.count(".card-project", 9);
I.click("Carregar mais");
I.wait(3);
I.count(".card-project", 18);