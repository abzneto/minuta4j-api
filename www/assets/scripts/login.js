; (function($) {
    'use strict';
    
    var url = 'http://minuta4j.herokuapp.com/api/';
    
    var login = {
        form: undefined,

        init : function() {
            login.form = $("#formLogin");

            login.handlerButtons();

            sessionStorage.clear();
        },

        handlerButtons: function() {
            login.form.find("#buttonLogin")
                .click(function(event) {
                    event.preventDefault();

                    var variables = '?grant_type=password'
                        + '&username=' + login.form.find("#username").val()
                        + '&password=' + login.form.find("#password").val();

                    var fullURL = url + variables;

                    minuta4j.postJSON(fullURL, {
                        success: function(result) {
                            if ( result ) {
                                if ( result.access_token ) {
                                    sessionStorage.setItem('minuta4j.userToken', result.access_token);
                                    sessionStorage.setItem('minuta4j.userName', result.perfil.name);

                                    window.location.href = "./index2.html";

                                    return;
                                } else if ( result.error ) {
                                    alert( result.error );

                                    return;
                                }
                            }

                            alert( "Usuário e/ou senha inválido(s)!!!");
                        },

                        error: function(jqXHR) {
                            alert("Usuário e/ou senha inválido(s)!!!");

                            console.log("ajax error " + jqXHR.status);
                        }
                    });
                });
        }
    };

    $(document)
        .ready(function() {
            login.init();
        });
}(jQuery));

