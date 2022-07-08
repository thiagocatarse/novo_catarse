TEST.log.info("🔻🔻🔻🔻🔻 INICIO ASSINATURA NOVO USUARIO BOLETO");

TEST.run('../assinatura/sub_new_user_boleto_national');

TEST.log.info("🔻🔻🔻🔻🔻 INICIO ASSINATURA NOVO USUARIO CARTAO NACIONAL");

TEST.run('../assinatura/sub_new_user_credit_card_national');

TEST.log.info("🔻🔻🔻🔻🔻 INICIO ASSINATURA NOVO USUARIO CARTAO INTERNACIONAL");

TEST.run('../assinatura/sub_new_user_credit_card_international');

// TEST.log.info("🔻🔻🔻🔻🔻 INICIO ASSINATURA USUARIO ANTIGO CARTAO NACIONAL");

// TEST.run('../assinatura/sub_old_user_credit_card_national');

// TEST.log.info("🔻🔻🔻🔻🔻 INICIO ASSINATURA USUARIO ANTIGO CARTAO INTERNACIONAL");

// TEST.run('../assinatura/sub_old_user_credit_card_international');
