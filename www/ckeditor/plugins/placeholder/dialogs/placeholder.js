﻿CKEDITOR.dialog.add("placeholder",function(a){var b=a.lang.placeholder;a=a.lang.common.generalTab;return{title:b.title,minWidth:300,minHeight:80,contents:[{id:"info",label:a,title:a,elements:[{id:"name",type:"select",items : [ [ 'NOME TAB' ], [ 'CNPJ TAB' ], [ 'CODIGO TAB' ], [ 'TELEFONE TAB' ], [ 'NOME CLIENTE' ], [ 'CPF CLIENTE' ], [ 'TELEFONE CLIENTE' ], [ 'CELULAR CLIENTE' ], [ 'DATA NASCIMENTO CLIENTE' ], [ 'E-MAIL CLIENTE' ], [ 'NOME AVALISTA' ], [ 'DATA NASCIMENTO AVALISTA' ], [ 'CPF AVALISTA' ], [ 'TELEFONE AVALISTA' ], [ 'NUMERO BANCO' ], [ 'NUMERO AGENCIA' ], [ 'DIGITO AGENCIA' ], [ 'NUMERO CONTA' ], [ 'DIGITO CONTA' ], [ 'VALOR BEM' ], [ 'DATA PRIMEIRO VENCIMENTO' ], [ 'QTDE. PARCELAS' ], [ 'VALOR PARCELA' ], [ 'LOCAL E DATA' ], [ 'PROPOSTA ADP' ], [ 'CODIGO DE BARRAS' ] ],style:"width: 100%;",label:b.name,"default":"NOME",required:!0,validate:CKEDITOR.dialog.validate.regex(/^[^\[\]<>]+$/,b.invalidName),setup:function(a){this.setValue(a.data.name)},commit:function(a){a.setData("name",this.getValue())}}]}]}});