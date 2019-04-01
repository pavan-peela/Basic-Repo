console.log("JS Loaded")

$(document).ready(function() {
    $('#first_drop').bind('change', function() {
        // hide all the elements
        var elements = $('div.container').children().hide();
        // get current value
        var value = $(this).val();

        if (value.length)
        { 
            // Display our selection sub tree
            elements.filter('.' + value).show();
        }
    }).trigger('change');
});