I.wait(10);
I.fill("Name on the credit card", DATA.credit_card_international_owner);
I.fill("Credit card number", DATA.credit_card_international);
I.select(DATA.credit_card_international_month);
I.select(DATA.credit_card_international_year);
I.fill("credit-card-cvv", "");
I.fill("credit-card-cvv", DATA.credit_card_international_cvv);