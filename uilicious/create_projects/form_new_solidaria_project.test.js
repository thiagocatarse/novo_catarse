// form_new_solidaria_no_reward_project

// Colocar senha
I.goTo(DATA.create_solidaria_project);
if(I.see$("Protected Page")){
  I.fill("password", "123mudar");
	I.click("Submit");
}

//Preencher dados do projeto
let solidaria_project_name_01 = SAMPLE.id(12);

UI.context("#form-create-projects", ()=>{ 
  I.fill("project[name]", solidaria_project_name_01)
  I.select("project[category_id]", "Artes")
	I.click("Próximo")
})

// Preencher taxa
UI.context("#slider", ()=>{
	I.fill("project[service_fee]", "0.085")
	I.click("Comece seu rascunho")
})