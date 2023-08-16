$('body').on('click', '#active-buttle', function(e){
    document.location.href = 'active.html';
}
)
$('body').on('click', '#mint', function(e){
    document.location.href = 'detox.html';
}
)
$('body').on('click', '#immuno-buttle', function(e){
    document.location.href = 'immuno.html';
}
)
$('body').on('click', '.header__logo', function(e){
    document.location.href = 'index.html';
}
)

//fadeout logo scroll

$(document).ready(function(){  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.header__logo').fadeOut();
        } else {
            $('.header__logo').fadeIn();
        }
    });
});

    