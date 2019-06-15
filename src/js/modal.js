$(document).ready(function () {
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function () {
        modal.addClass('modal_active');
    });

    close.on('click', function () {
        modal.removeClass('modal_active');
    });

    var btn = $('#btntop');

    $(this).click(function() {
        $("html, body").animate({scrollTop: 0}, "slow")
    })
});
