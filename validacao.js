$(document).ready(function () {
            $('#first_form').submit(function (e) {
                        e.preventDefault();
                        var first_name = $('#first_name').val();
                        var last_name = $('#last_name').val();
                        var email = $('#email').val();
                        var password = $('#password').val();
                        $(".error").remove();
                        if (first_name.length < 1) {
                            $('#first_name').after('<span class="error">O preenchimento do Nome é Obrigatório! </span>');
                            }
                            if (last_name.length < 1) {
                                $('#last_name').after('<span class="error">O preenchimento do Sobrenome é Obrigatório! </span>');}
                                    if (email.length < 1) {
                                        $('#email').after('<span class="error">O preenchimento do Email é Obrigatório! </span>');
                                        }
                                        else {
                                            var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9 - ] { 1, 63 }\.) { 1, 125 } [A - Z] { 2, 63 } $ / ;
                                    var validEmail = regEx.test(email);
                                    if (!validEmail) {
                                        $('#email').after('<span class="error">O preenchimento da Senha é Obrigatória! < /span>');
                                        }
                                    }
                                    if (password.length < 8) {
                                        $('#password').after('<span class="error">A Senha tem de ter no mínimo 8 caracteres  </span>');
                                        }
                                    });
                            });


$('form[id="second_form"]').validate(
    {rules: {
        fname: 'required',
        lname: 'required',
        user_email: {
            required: true,
            email: true,},
            psword: {
                required: true,
                minlength: 8,}},
                messages: {
                    fname: 'O preenchimento do Nome é Obrigatório!',
                    lname: 'O preenchimento do Sobrenome é Obrigatório!',
                    user_email: 'O preenchimento do Email é Obrigatório!',
                    psword: {minlength: 'A Senha tem de ter no mínimo 8 caracteres '}},
                    submitHandler: function(form) {form.submit();
                    }
                }
                );