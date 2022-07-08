I.wait(10);
I.fill("Nome completo do titular do cartão", DATA.credit_card_owner);
I.fill("#credit-card-document", DATA.credit_card_document);
I.fill("Número do cartão de crédito", DATA.credit_card_number);
I.select(DATA.credit_card_month);
I.select(DATA.credit_card_year);
I.fill("credit-card-cvv", "");
I.fill("credit-card-cvv", DATA.credit_card_cvv);