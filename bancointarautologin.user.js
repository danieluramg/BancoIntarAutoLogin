/*

Preencha o número de suas contas PF e PJ (MEI) nas linhas 28 e 29 (Entre as ' ')
Se não tiver uma conta PJ pode deixar em branco o campo correspondente, assim não irá aparecer a popup e será
preenchido automaticamente com o número de sua conta PF

Para se logar automaticamente usando o script acesse https://intarnetbanking.bancointar.com.br/comum/home.jsf
Quando surgir o teclado numérico, repare que acima dele existe um campo "digitável" para a senha, digite alí sua senha e
clique em "Entrar" (não clique no "Confirmar"), que o script irá simular os clique em cada caractére

*/
// ==UserScript==
// @name	Banco Intar AutoLogin
// @author	Daniel Plácido (daniel.uramg@gmail.com)
// @website https://github.com/danieluramg/BancoIntarAutoLogin/
// @description	Injeta na página uma popup jQuery para escolher entre conta PF e PJ (MEI) para preencher automaticamente os campos e injeta um campo de senha Digitável, que simula os cliques no teclado numérico.
// @version	2.0
// @downloadURL	https://github.com/danieluramg/BancoIntarAutoLogin/raw/master/bancointarautologin.user.js
// @updateURL	https://github.com/danieluramg/BancoIntarAutoLogin/raw/master/bancointarautologin.user.js
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @require     https://code.jquery.com/ui/1.12.1/jquery-ui.js
// @match	https://intarnetbanking.bancointar.com.br/login.jsf
// @grant GM_addStyle
// ==/UserScript==
GM_addStyle('@import "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css";');

//Digite o número de suas contas
pf = '234'; //Pessoa Física
pj = ''; //Pessoa Jurídica (MEI)

$(document).ready(function(){

    //Se existir a conta PJ exibe a popup
    if(pj != 0){
        //Se 'h1 a' for nulo é porque está na página que pede a conta, então injeta a popup jquery na página
        if($('h1 a').html() == null){
            $('body').append('<div id="dialog-confirm" title="Tipo de conta:"> <p><span class="ui-icon ui-icon-alert" style="float:left; margin:12px 12px 20px 0;"></span>Em qual conta você deseja se autenticar?</p></div>');
        }
        //Se não for nulo é porque já está na segunda etapa, para injetar o campo de senha
        else{
            $('h1 a').click(); //Clica no nome pra abrir o teclado virtual
            setTimeout(function(){ //Aguarda 500ms para injetar o campo de senha digitável
                $('#tecladoNormal').before('<input type="password" id="xyzpass"><h1><a href="#" id="xyzauth" placeholder="Digite sua senha">Entrar</a><h1>');
            },500);
        }
    }
    //Se não existir a conta PJ loga na PF direto
    else{
        autenticar(pf);
        $('h1 a').click(); //Clica no nome pra abrir o teclado virtual
        setTimeout(function(){ //Aguarda 500ms para injetar o campo de senha digitável
            $('#tecladoNormal').before('<input type="password" id="xyzpass"><h1><a href="#" id="xyzauth" placeholder="Digite sua senha">Entrar</a><h1>');
        },500);
    }

    //Função executada quando escolhe a conta
    function autenticar(conta){
        $('#loginv20170605').attr('value', conta); //preenche numero da conta
        $('input[value="Avançar"]').click(); //Clica em Avançar
    }

    //Função do popup jquery
    $(function() {
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Pessoa Física": function() {
                    autenticar(pf);
                    $(this).dialog("close");
                },
                "Pessoa Jurídica": function() {
                    autenticar(pj);
                    $(this).dialog("close");
                }
            }
        });
    });

    //Função para clicar na senha que foi digitada
    $(document).on('click', '#xyzauth', function funcauth(){
        var s = $('#xyzpass').val(); //Define a variável de senha com o valor digitado no campo
        var t = s.length; //conta quantos caractéres contém a variável
        var i = 0; //define a variável de referência numérica
        while (i < t){
            l = s.substr(i,1);
            $('input[value="'+ l +'"]').click(); //clica em cada letra ou número correspondente a senha
            i++;
        }
        $('input[value="CONFIRMAR"]').click(); //Clica em confirmar pra autenticar
    });

});
