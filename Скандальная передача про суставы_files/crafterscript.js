$(document).ready(function(){


        //Выводим текущую дату в элемент с классом js-date
        d = new Date();
        p = new Date(d.getTime() - 10 * 86400000);
        var yr = d.getFullYear();
        montha = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
        date_html = p.getDate() + '.' + montha[p.getMonth()] + '.' + yr;
        p0 = new Date(d.getTime() - 0 * 86400000);
        date_html0 = p0.getDate() + '.' + montha[p0.getMonth()] + '.' + yr;
        $('.js-date').html(date_html0);

        //Выводим город в элемент с классом js-city
        $.getScript('https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU', function(){
            ymaps.ready(init);
            function init() {
            var geolocation = ymaps.geolocation;
            if (geolocation) {
                $('.js-city').html(geolocation.city);
            }}
        })


        //Добавляем попап при уводе мышки



        function moveItem() {

                  $('body').append('<div class="screenLock" style="display: none;">'+
                      '<div class="msg">'+
                          '<div style="text-align:right; cursor:pointer" class="close">X</div>'+
                         ' <h1 class="msg-title">'+msgText+'</h1>'+

                             '<center>'+
                                  '<a href="'+lnkUrl+'" target="_blank" class="submit-popup">'+lnkTxt+'</a>'+
                              '</center>'+

                          '</div>'+
                      '</div>'
                  );

};
setInterval(moveItem, 1000);
    $('.screenLock').css({height : $(document).height() + "px",
                            "position" : "fixed",
                            "z-index" : "999999",
                            "top":"0",
                            "left":"0",
                            "width":"100%",
                            "background" : "rgba(0,0,0,0.7)"
                        }
    );

    $('.msg').css({
                "position":"absolute",
                "width":"600px",
                "height":"300px",
                "background":"#713FE9",
                "top":"0px",
                "left":"50%",
                "margin-left":"-300px",
                "display":"none",
                "border-style" : "solid",
                "border-color": "#fff",
                "border-width":"2px",
                "border-radius":"7px",
                "padding":"7px"
            }
    );

    $('.msg-title').css({
                    "font-size" : "40px",
                    "font-family" : "Arial",
                    "text-align" : "center",
                    "color" : "#fff",
                    "font-weight":"bold",
                    "margin-bottom" : "30px",
                    "margin-top" : "20px"
                })

    $('.submit-popup').css({
                        "margin-top":"30px",
                        "text-transform":"uppercase",
                        "font-size" : "30px",
                        "font-family" : "Verdana, Arial",
                        "font-weight": "bold",
                        "color" : "#fff",
                        "display" : "inline-block",
                        "background":"#c00",
                        "border-style" : "solid",
                        "border-color": "#fff",
                        "border-width":"1px",
                        })


    $('.close').click(function(){
        $('.screenLock').fadeOut(300);
    })
    var flag = true;
    $(window).mouseout(function(e){
      if(e.pageY - $(window).scrollTop() < 1 && flag == true){
        $('.screenLock').fadeIn(100, function(){
            $('.msg').fadeIn(300).animate({"top":"150px"},300);
        });
        flag = false;
      }
    })


    //открываем витрину на месте проклы + Цель на клик
        $('a').on('click', function(){
            $(this).attr('target', '_blank');
            try{
                yaCounter44058804.reachGoal('lend');// <-- ЗАМЕНИТЬ КОД СЧЕТЧИКА
            } catch(e){
                window.console.log(e);
            }
            setTimeout(function(){
                window.location.href = vitrina;
            }, 2000)
        });


    //scroll- название цели в метрике для замера прокрутки
    var scrl_flag = true;
    $(document).scroll(function(){
        if (scrl_flag) {
            scrl_flag = false;
            try{
                yaCounter44058804.reachGoal('scroll');// <-- ЗАМЕНИТЬ КОД СЧЕТЧИКА
            } catch(e){
                window.console.log(e);
            }

        }
    })


    //time- название цели в метрике для замера времени
    //30000 = 30секунд
    setTimeout(function(){
        try{
                yaCounter44058804.reachGoal('time');// <-- ЗАМЕНИТЬ КОД СЧЕТЧИКА
            } catch(e){
                window.console.log(e);
            }

    },30000)


})
