//Efeito
function recebe_id(parametro) {
    let id_retorno = '#' + parametro

    if (id_retorno == '#expprof') {
        $(id_retorno).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.timeline').toggle(1000);
    } else if (id_retorno == '#foracad') {
        $(id_retorno).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.formaca').toggleClass('ocultar geral');
    } else if (id_retorno == '#forcomp') {
        $(id_retorno).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.formcom').toggleClass('ocultar geral');
    } else if (id_retorno == '#certf') {
        $(id_retorno).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        $('.certifi').toggleClass('ocultar geral');
    } else {
        console.log('Sem Registro')
    }

}


$(document).ready(function() {
    $('h2 i').click(function() {
        let id_h2 = $(this).parent().attr('id')
        recebe_id(id_h2)
    })
});


//Scroll
function goTo(element, speed) {
    let id_h2 = '#' + element.attr('id');
    let top = $(id_h2).offset().top;
    $("html, body").animate({ scrollTop: top }, speed)
}

$(function() {
    $("h2").click(function(e) {
        e.preventDefault();
        goTo($(this), 1000);
    });
});


$(document).ready(function() {
    // Exibe ou oculta o botão
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.voltar-ao-topo').fadeIn(200);
        } else {
            $('.voltar-ao-topo').fadeOut(200);
        }
    });

    // Faz animação para subir
    $('.voltar-ao-topo').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1500);
    })
});