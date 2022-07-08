// Ir para o Historico de apoio
TEST.run('./sub_back_history_credit_card');
I.see("As alterações destacadas entrarão em vigor na próxima cobrança");
I.count(".fa-arrow-right", 3);
I.count(".badge-attention", 3);
I.see("R$ 15");
I.see("recompensa-titulo-sub-15");
I.see("Boleto");


