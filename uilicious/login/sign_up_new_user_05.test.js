/*
let email_05 = SAMPLE.id(10);
I.fill("email", "qa_prod+" + email_05 + "@catarse.me");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");
*/
let email_05 = SAMPLE.id(10);
I.fill("email", email_05 + "@mailinator.com");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");
