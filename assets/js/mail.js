$(document).ready(function () {
    var form = $('‪#contactForm');
    form.submit(function (event) {
        event.preventDefault();
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'subject': $('input[name=subject]').val(),
            'message': $('‪#message‬').val()
        };
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: $(this).attr('action'), // the url where we want to POST
            data: formData, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
            beforeSend: function () {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            },
            complete: function () {
                $('.form_status').html('<p>An Email has been sent</p>');
                $('input[name=name]').val('');
                $('input[name=email]').val('');
                $('input[name=subject]').val('');
                $('#message').val('');
            }
        }).success(function (data) {
            console.log("success");
            $('.form_status').html('<p>Email has been sent</p>');
        });
    });

    /*help page*/
    var form = $('‪#helpForm');
    form.submit(function (event) {
        event.preventDefault();
        var formData = {
            'subject': $('input[name=subject]').val(),
            'message': $('‪#message‬').val()
        };
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: $(this).attr('action'), // the url where we want to POST
            data: formData, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
            beforeSend: function () {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            },
            complete: function () {
                $('.form_status').html('<p>An Email has been sent</p>');
                $('input[name=subject]').val('');
                $('#message').val('');
            }
        }).success(function (data) {
            console.log("success");
            $('.form_status').html('<p>Email has been sent</p>');
        });
    });
}):