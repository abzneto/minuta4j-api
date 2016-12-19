; (function($) {
    'use strict';

    var index = {
        init : function() {
            $('#userName').text(sessionStorage.getItem('minuta4j.userName'));

            index.handlerButtons();
        },

        handlerButtons: function() {
            $('#buttonLogout').click(function() {
                sessionStorage.clear();

                location.href = 'index.html';
            });
        }
    };

    $(document)
        .ready(function() {
            index.init();
        });
}(jQuery));
