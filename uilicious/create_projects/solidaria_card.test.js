// solidaria_card

//Checar validação
I.click("Próximo")
I.wait(2)
I.see("A imagem do projeto não pode ficar em branco")
I.see("A frase de efeito do projeto não pode ficar em branco")

//Preencher dados
I.upload('Imagem do projeto', 'assets/thumb.jpg');
I.wait(3);
I.fill("Frase de efeito", "text-blurb");
I.wait(3);
I.count("text-blurb", 2);
I.click("Próximo");