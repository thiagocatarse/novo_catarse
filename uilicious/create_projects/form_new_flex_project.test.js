I.goTo(DATA.create_aon_project);
if(I.see$("Protected Page")){
  I.fill("password", "123mudar");
	I.click("Submit");
}

let flex_project_name = SAMPLE.id(12);

UI.context("#form-create-projects", ()=>{ 
  I.fill("project[name]", flex_project_name)
  I.select("project[category_id]", "Artes")
	I.click("Comece seu rascunho")
})