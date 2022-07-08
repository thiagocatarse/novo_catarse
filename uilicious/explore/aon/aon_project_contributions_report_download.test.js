I.click("Baixar relatórios");
I.see("Baixar relatórios");
I.see("Atenção: Ao realizar o download desses dados, você se compromete a armazená-los em local seguro e respeitar o direitos dos usuários conforme o que está previsto nos Termos de Uso e na política de privacidade do Catarse.");
I.see("Apoiadores confirmados");
I.see("Apoiadores que não selecionaram recompensa");
I.see("Apoios cancelados após o pagamento");
I.count(".alt-link", 8);
I.click(".alt-link");
I.dontSee("Desculpe, estamos com problemas");
