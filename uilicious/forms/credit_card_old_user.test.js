I.wait(10);
I.fill("Nome completo do titular do cartão", DATA.credit_card_owner_old_user);
// I.fill("CPF/CPNJ do titular", DATA.credit_card_document_old_user);
I.fill("Número do cartão de crédito", DATA.credit_card_number_old_user);
I.select(DATA.credit_card_month_old_user);
I.select(DATA.credit_card_year_old_user);
I.fill("credit-card-cvv", "");
I.fill("credit-card-cvv", DATA.credit_card_cvv_old_user);