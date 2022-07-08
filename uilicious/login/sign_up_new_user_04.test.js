/*
let email_04 = SAMPLE.id(10);
I.fill("email", "qa_prod+" + email_04 + "@catarse.me");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");
*/
let email_04 = SAMPLE.id(10);
I.fill("email", email_04 + "@mailinator.com");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");