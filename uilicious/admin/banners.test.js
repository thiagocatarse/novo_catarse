TEST.run('./user_menu');
UI.context("#user-menu-dropdown", function(){
	I.click("Banners");
});
//Gerar diferentes títulos, subtítulos e CTAs
let title_id_1 = SAMPLE.first();
let subtitle_id_1 = SAMPLE.first();
let cta_id_1 = SAMPLE.first();
let title_id_2 = SAMPLE.first();
let subtitle_id_2 = SAMPLE.first();
let cta_id_2 = SAMPLE.first();
let title_id_3 = SAMPLE.first();
let subtitle_id_3 = SAMPLE.first();
let cta_id_3 = SAMPLE.first();
let title_id_4 = SAMPLE.first();
let subtitle_id_4 = SAMPLE.first();
let cta_id_4 = SAMPLE.first();
let title_id_5 = SAMPLE.first();
let subtitle_id_5 = SAMPLE.first();
let cta_id_5 = SAMPLE.first();
let title_id_6 = SAMPLE.first();
let subtitle_id_6 = SAMPLE.first();
let cta_id_6 = SAMPLE.first();
let title_id_7 = SAMPLE.first();
let subtitle_id_7 = SAMPLE.first();
let cta_id_7 = SAMPLE.first();
let title_id_8 = SAMPLE.first();
let subtitle_id_8 = SAMPLE.first();
let cta_id_8 = SAMPLE.first();

//Apaga todas os campos
I.doubleClick("#title_id_1");
I.press("Backspace");
I.doubleClick("#subtitle_id_1");
I.press("Backspace");
I.doubleClick("#cta_id_1");
I.press("Backspace");
I.doubleClick("#link_id_1");
I.press("Backspace");
I.doubleClick("#image_id_1");
I.press("Backspace");

I.doubleClick("#title_id_2");
I.press("Backspace");
I.doubleClick("#subtitle_id_2");
I.press("Backspace");
I.doubleClick("#cta_id_2");
I.press("Backspace");
I.doubleClick("#link_id_2");
I.press("Backspace");
I.doubleClick("#image_id_2");
I.press("Backspace");

I.doubleClick("#title_id_3");
I.press("Backspace");
I.doubleClick("#subtitle_id_3");
I.press("Backspace");
I.doubleClick("#cta_id_3");
I.press("Backspace");
I.doubleClick("#link_id_3");
I.press("Backspace");
I.doubleClick("#image_id_3");
I.press("Backspace");

I.doubleClick("#title_id_4");
I.press("Backspace");
I.doubleClick("#subtitle_id_4");
I.press("Backspace");
I.doubleClick("#cta_id_4");
I.press("Backspace");
I.doubleClick("#link_id_4");
I.press("Backspace");
I.doubleClick("#image_id_4");
I.press("Backspace");

I.doubleClick("#title_id_5");
I.press("Backspace");
I.doubleClick("#subtitle_id_5");
I.press("Backspace");
I.doubleClick("#cta_id_5");
I.press("Backspace");
I.doubleClick("#link_id_5");
I.press("Backspace");
I.doubleClick("#image_id_5");
I.press("Backspace");

I.doubleClick("#title_id_6");
I.press("Backspace");
I.doubleClick("#subtitle_id_6");
I.press("Backspace");
I.doubleClick("#cta_id_6");
I.press("Backspace");
I.doubleClick("#link_id_6");
I.press("Backspace");
I.doubleClick("#image_id_6");
I.press("Backspace");

I.doubleClick("#title_id_7");
I.press("Backspace");
I.doubleClick("#subtitle_id_7");
I.press("Backspace");
I.doubleClick("#cta_id_7");
I.press("Backspace");
I.doubleClick("#link_id_7");
I.press("Backspace");
I.doubleClick("#image_id_7");
I.press("Backspace");

I.doubleClick("#title_id_8");
I.press("Backspace");
I.doubleClick("#subtitle_id_8");
I.press("Backspace");
I.doubleClick("#cta_id_8");
I.press("Backspace");
I.doubleClick("#link_id_8");
I.press("Backspace");
I.doubleClick("#image_id_8");
I.press("Backspace");


// Preenche a primeira posição
I.fill("#title_id_1", title_id_1);
I.fill("#subtitle_id_1", subtitle_id_1);
I.fill("#link_id_1", "https://www.catarse.me/oprimeiro");
I.fill("#cta_id_1", cta_id_1);
I.fill("#image_id_1", "https://s3.amazonaws.com/cdn.catarse/assets/banner-home-prediosdobrasil.jpg");

// Preenche a segunda posição
I.fill("#title_id_2", title_id_2);
I.fill("#subtitle_id_2", subtitle_id_2);
I.fill("#link_id_1", "https://www.catarse.me/oprimeiro");
I.fill("#cta_id_2", cta_id_2);
I.fill("#image_id_2", "https://s3.amazonaws.com/cdn.catarse/assets/banner-home-prediosdobrasil.jpg");

// Preenche a terceira posição
I.fill("#title_id_3", title_id_3);
I.fill("#subtitle_id_3", subtitle_id_3);
I.fill("#link_id_3", "https://www.catarse.me/oprimeiro");
I.fill("#cta_id_3", cta_id_3);
I.fill("#image_id_3", "https://s3.amazonaws.com/cdn.catarse/assets/banner-home-prediosdobrasil.jpg");

// Preenche a quarta posição
I.fill("#title_id_4", title_id_4);
I.fill("#subtitle_id_4", subtitle_id_4);
I.fill("#link_id_4", "https://www.catarse.me/oprimeiro");
I.fill("#cta_id_4", cta_id_4);
I.fill("#image_id_4", "https://s3.amazonaws.com/cdn.catarse/assets/banner-home-prediosdobrasil.jpg");

// Preenche a quinta posição
I.fill("#title_id_5", title_id_5);
I.fill("#subtitle_id_5", subtitle_id_5);
I.fill("#link_id_5", "https://www.catarse.me/oprimeiro");
I.fill("#cta_id_5", cta_id_5);
I.fill("#image_id_5", "https://s3.amazonaws.com/cdn.catarse/assets/banner-home-prediosdobrasil.jpg");

// Preenche a sexta posição
I.fill("#title_id_6", title_id_6);
I.fill("#subtitle_id_6", subtitle_id_6);
I.fill("#link_id_6", "https://www.catarse.me/oprimeiro");
I.fill("#cta_id_6", cta_id_6);
I.fill("#image_id_6", "https://s3.amazonaws.com/cdn.catarse/assets/banner-home-prediosdobrasil.jpg");

// Preenche a sétima posição
I.fill("#title_id_7", title_id_7);
I.fill("#subtitle_id_7", subtitle_id_7);
I.fill("#link_id_7", "https://www.catarse.me/oprimeiro");
I.fill("#cta_id_7", cta_id_7);
I.fill("#image_id_7", "https://s3.amazonaws.com/cdn.catarse/assets/banner-home-prediosdobrasil.jpg");

// Preenche a oitava posição
I.fill("#title_id_8", title_id_8);
I.fill("#subtitle_id_8", subtitle_id_8);
I.fill("#link_id_8", "https://www.catarse.me/oprimeiro");
I.fill("#cta_id_8", cta_id_8);
I.fill("#image_id_8", "https://s3.amazonaws.com/cdn.catarse/assets/banner-home-prediosdobrasil.jpg");

//Salvar
I.click("Salvar");

//Checar se os banners estão na página inicial
I.goTo("https://sandbox.catarse.me");

// Checa os textos dos banners
I.see(title_id_1);
I.see(subtitle_id_1);
I.see(cta_id_1);
I.click("#slide-next");
I.see(title_id_2);
I.see(subtitle_id_2);
I.see(cta_id_2);
I.click("#slide-next");
I.see(title_id_3);
I.see(subtitle_id_3);
I.see(cta_id_3);
I.click("#slide-next");
I.see(title_id_4);
I.see(subtitle_id_4);
I.see(cta_id_4);
I.click("#slide-next");
I.see(title_id_5);
I.see(subtitle_id_5);
I.see(cta_id_5);
I.click("#slide-next");
I.see(title_id_6);
I.see(subtitle_id_6);
I.see(cta_id_6);
I.click("#slide-next");
I.see(title_id_7);
I.see(subtitle_id_7);
I.see(cta_id_7);
I.click("#slide-next");
I.see(title_id_8);
I.see(subtitle_id_8);
I.see(cta_id_8);

//Checar Link
I.click(".btn-large");
I.amAt("https://www.catarse.me/oprimeiro");
I.goTo("https://sandbox.catarse.me");

//Logout
TEST.run('login/logout')