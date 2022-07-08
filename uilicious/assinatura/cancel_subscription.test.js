I.click("Cancelar assinatura");
I.see(".modal-dialog-inner");
UI.context(".modal-dialog-inner", function(){ 
  I.click("Cancelar assinatura")
})
I.see("🙁");
I.see("Sua assinatura será cancelada no dia");
I.click(".fa-close");
I.refreshPage();
