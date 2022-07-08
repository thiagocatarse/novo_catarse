/*
let email_02 = SAMPLE.id(10);
I.fill("email", "qa_prod+" + email_02 + "@catarse.me");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");
*/
let email_02 = SAMPLE.id(10);
I.fill("email", email_02 + "@mailinator.com");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");