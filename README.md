# BancoIntarAutoLogin
Script para facilitar o login no banco Intar
Para quem tem conta PJ e PJ (MEI), o script cria uma Popup para você escolher em qual das contas deseja se logar, 
assim ele preenche automaticamente o número da conta.
Caso possua somente conta PF a popup não é exibida, e sua conta PF já é preenchida automaticamente.

O script também cria um campo de senha "digitável", que simula os cliques de cada caractére no Teclado Virtual
_____________________________________________________________________________________________________________________


Injeta na página uma popup jQuery para escolher entre conta PF e PJ (MEI) para preencher automaticamente os campos
e injeta um campo de senha Digitável, que simula os cliques no teclado numérico.

![](http://www.ideias.pw/wp-content/uploads/2017/12/Internet-Banking-Banco-Inter-1.png)
![](http://www.ideias.pw/wp-content/uploads/2017/12/Internet-Banking-Banco-Inter.png)

## Instalação e uso:
- Primeiro instale o complemento Tampermonkey no Google Chrome: [https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Depois instale o Userscript do MercadoFacil: [https://github.com/danieluramg/BancoIntarAutoLogin/raw/master/bancointarautologin.user.js](https://github.com/danieluramg/BancoIntarAutoLogin/raw/master/bancointarautologin.user.js)

-Preencha o número de suas contas PF e PJ (MEI) nas linhas 28 e 29 (Entre as ' ')
Se não tiver uma conta PJ pode deixar em branco o campo correspondente, assim não irá aparecer a popup e será
preenchido automaticamente com o número de sua conta PF

-Para se logar automaticamente usando o script acesse https://intarnetbanking.bancointar.com.br/comum/home.jsf
Quando surgir o teclado numérico, repare que acima dele existe um campo "digitável" para a senha, digite alí sua senha e
clique em "Entrar" (não clique no "Confirmar"), que o script irá simular os clique em cada caractére
