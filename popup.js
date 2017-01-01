$(function() {
    $(".color-box").on("click", function() {
        let options = {}; // this object has options for Please.js make_color function
        let color;
        
        $('input[type="checkbox"]').each(function(index) {
            if ($(this).is(':checked')) {
                let property = $(this).attr('id');
                if (property === 'full_random') {
                    options['golden'] = false;
                }
                options[property] = true;
            }
        });
        color = Please.make_color(options);
        $(this).css('background-color', color);
        $(this).find('span').text(color);
    });
});