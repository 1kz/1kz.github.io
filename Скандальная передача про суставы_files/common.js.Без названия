setTimeout(function () {




$(document).ready(function(){
if (typeof popup == 'boolean') {
    return;
}

//Function Change Prices
    var country_code = $('#user_country').val();
    console.log(country_code.toLowerCase());
    
    if(country_code.length == 2){
        country_code = country_code.toLowerCase();
    }
    
/*    function change_prices(code){
        if (prices[code] == undefined) {
            code = 'ru';
            if (prices[code] == undefined) {
                code = 'ua';
                if (prices[code] == undefined) {
                    var res = [];
                    for (var i in prices) {
                        res.push(i);
                    }

                    code = res[0];
                }
            }
        }
        var price_txt;
        var country_txt;
        var flag;
        
        switch(code){
            case 'BLR':
            case 'by':
                price_txt = ' бел.руб'; country_txt = 'Беларуси!'; flag='country-blr'; break;
            case 'RUS':
            case 'ru':
                price_txt = ' руб'; country_txt = 'России!'; flag='country-rus'; break;
            case 'KAZ':
            case 'kz':
                price_txt = ' тенге'; country_txt = 'Казахстану!'; flag='country-kaz'; break;
            case 'UKR':
            case 'ua':
                price_txt = ' грн.'; country_txt = 'Украине!'; flag='country-ua'; break;
            case 'MDA':
            case 'md':
                price_txt = ' лей'; country_txt = 'Молдове!'; flag='country-md'; break;
            case 'AZE':
            case 'az':
                price_txt = ' manat'; country_txt = 'Азербайджану!'; flag='country-az'; break;
            case 'USA':
            case 'us':
                price_txt = ' $'; country_txt = 'США!'; flag='country-usa'; break;
            case 'KGZ':
            case 'kg':
                price_txt = ' сом'; country_txt = 'Кыргызстану!'; flag='country-kg'; break;
            case 'GEO':
            case 'ge':
                price_txt = ' lari'; country_txt = 'Грузии!'; flag='country-ge'; break;
            case 'EST':
            case 'ee':
                price_txt = ' euro'; country_txt = 'Эстонии!'; flag='country-ee'; break;
            case 'DEU':
            case 'de':
                price_txt = ' euro'; country_txt = 'Германии!'; flag='country-de'; break;
            case 'ITA':
            case 'it':
                price_txt = ' euro'; country_txt = 'Италии!'; flag='country-it'; break;
            case 'AUT':
            case 'at':
                price_txt = ' euro'; country_txt = 'Австрии!'; flag='country-at'; break;
            case 'POL':
            case 'pl':
                price_txt = ' злот.'; country_txt = 'Польше!'; flag='country-pl'; break;
            case 'LVA':
            case 'lv':
                price_txt = ' euro'; country_txt = 'Латвии!'; flag='country-lv'; break;
            case 'LTU':
            case 'lt':
                price_txt = ' euro'; country_txt = 'Литве!'; flag='country-lt'; break;
            case 'GBR':
            case 'gb':
                price_txt = ' фунтов'; country_txt = 'Англии!'; flag='country-gb'; break;
            case 'NLD':
            case 'nl':
                price_txt = ' euro'; country_txt = 'Голландии!'; flag='country-nl'; break;
            case 'FRA':
            case 'fr':
                price_txt = ' euro'; country_txt = 'Франции!'; flag='country-fr'; break;
            case 'HUN':
            case 'hu':
                price_txt = ' форинт'; country_txt = 'Венгрии!'; flag='country-hu'; break;
            case 'SVK':
            case 'sk':
                price_txt = ' euro'; country_txt = 'Словакии!'; flag='country-sk'; break;
            case 'CZE':
            case 'cz':
                price_txt = ' крон'; country_txt = 'Чехии!'; flag='country-cz'; break;
            case 'CYP':
            case 'cy':
                price_txt = ' euro'; country_txt = 'Кипру!'; flag='country-cy'; break;
            case 'ESP':
            case 'es':
                price_txt = ' euro'; country_txt = 'Испании!'; flag='country-es'; break;
            case 'PRT':
            case 'pt':
                price_txt = ' euro'; country_txt = 'Португалии!'; flag='country-pt'; break;
            case 'ROU':
            case 'ro':
                price_txt = ' лей'; country_txt = 'Румынии!'; flag='country-ro'; break;
            case 'GRC':
            case 'gr':
                price_txt = ' euro'; country_txt = 'Греции!'; flag='country-gr'; break;
            case 'UZB':
            case 'uz':
                price_txt = ' sum'; country_txt = 'Узбекистану!'; flag='country-uz'; break;
            case 'BEL':
            case 'be':
                price_txt = ' euro'; country_txt = 'Бельгии!'; flag='country-be'; break;
            case 'BGR':
            case 'bg':
                price_txt = ' лев'; country_txt = 'Болгарии!'; flag='country-bg'; break;
            case 'LUX':
            case 'lu':
                price_txt = ' euro'; country_txt = 'Люксембургу!'; flag='country-lu'; break;
            case 'POR':
            case 'pt':
                price_txt = ' euro'; country_txt = 'Португалии!'; flag='country-pt'; break;
            case 'SVN':
            case 'si':
                price_txt = ' euro'; country_txt = 'Словении!'; flag='country-si'; break;
                
            case 'HRV':
            case 'hr':
                price_txt = ' hrk'; country_txt = 'Хорватии!'; flag='country-hr'; break;
            case 'SWE':
            case 'se':
                price_txt = ' cron'; country_txt = 'Швеции!'; flag='country-se'; break;
            case 'CHE':
            case 'ch':
                price_txt = ' chf'; country_txt = 'Чехии!'; flag='country-ch'; break;
                
            case 'ARM':
            case 'am':
                price_txt = ' dram';country_txt = 'Армении!'; flag='country-am'; break;
            default: code="RUS"; country_code = "RUS"; price_txt = ' руб'; country_txt = 'России!'; flag='country-rus'; prices[code] = basePrice; break;
        }
        $('.pop-up-wrap .country-img').addClass(flag);
        $('.pop-up-wrap .country-label_txt .bold').html(country_txt);
        $('.tot-amount').html('<span class="init_price-num">' + prices[code] + '</span>')
        $('.init_price-txt').text(price_txt);
        if(oldPrices[country_code] == 0 || !oldPrices[country_code]){
            $('.old-amount').html('<span class="init_price-num">' + prices[code]*2 + '</span>');
        } else {
            $('.old-amount').html('<span class="init_price-num">' + oldPrices[code] + '</span>');
        }
    }
    change_prices(country_code);
*/
  
//SHOW POP-UP

    var counter_mouse = 1;
    
    $('body').mouseout(function(e) {
    
        if (e.pageY - $(window).scrollTop() <= 1){
            $('.pop-up-wrap, .pop-up-leave').addClass('active');
            $('body').addClass('up');
         }
    });

//END of SHOW POP-UP
//SLIDE CARDS
    $('.btn_1').click(function(){

        var this_card = $(this).closest('.leave_step');

        if($(this_card).hasClass('st-1') == true){

            $('.leave_step').addClass('normal-transition');
            $(this_card).removeClass('st-1');
            
                $('.st-2').toggleClass('st-2 st-1').addClass('slide-down');
                $('.st-3').toggleClass('st-3 st-2');
                $(this_card).prev().addClass('active');

            setTimeout(function(){
                $('.leave_step-3').toggleClass('st-2 st-1');
            }, 1600);
            setTimeout(function(){
                $('.leave_step-2').addClass('disabled');
            }, 2600);
        }

        $(this_card).addClass('disabled');

        var cards = $('.leave_step');
        var disabled_cards = $('.leave_step.disabled');
        var enabled_cards_length = cards.length - disabled_cards.length;

        console.log('enabled cards: ' + enabled_cards_length + ' || disabled cards: ' + disabled_cards.length);
    });
//END of SLIDE CARDS
//INPUT ON-FOCUS
    (function(){
        var this_input;
        $('.pop-up-leave input').focus(function(){
            $(this).closest('div').addClass('disabled');
        });
        $('.pop-up-leave input').blur(function(){
            if($(this).val().length >= 1){
                return;
            }
            $(this).closest('div').removeClass('disabled');
        });
    }());
//END of INPUT ON-FOCUS

var $document = $(document);
var lastScrollTop = 0;
 
function onScroll (e) {
    var dh =$(document).height();
    var pop = $('.pop-up-wrap').height();
    var top = $document.scrollTop();
    if ((lastScrollTop < top) && ($document.scrollTop() + pop >= dh)) {
        $('.pop-up-wrap, .pop-up-leave').addClass('active');
        $('body').addClass('up');
    }
    lastScrollTop = top;
}
 
$document.on('scroll', onScroll); 

 $('.banner-coin-3, .banner-coin-2, .banner-coin-1, .banner-face, .banner-bank, .banner-shadow, .banner-logo').addClass('anim');

    $('.pop-up-leave .cancel, .pop-up-leave .close').click(function(){
        $('.pop-up-wrap').removeClass('active');
        $('body').removeClass('up');
    });
$('.pop-up-leave .btn').mousedown(function(){
    $(this).addClass('btn-hover');
}).mouseleave(function(){
    $(this).removeClass('btn-hover');
});

});
}, 30000)