$(document).ready(function() {

    $('#us').append(
        '<h2 class="hello">Встречайте утро в LightBar!</h2>'+
        '<p class="text">«Лайтбар» – это одно из лучших мест в Москве для чашечки горячего кофе или ароматного чая, дополненной свежей выпечкой и легкими фруктовыми десертами.</p>' +
        '<p class="text">Он расположился под стеклянными сводами, на первом этаже пятизвездочного отеля «Swissotel Красные Холмы Москва», в непосредственной близости от Садового кольца и ведущих бизнес-центров столицы.</p>' +
        '<p class="text">Название идеально передает легкую, наполненную солнцем и воздухом атмосферу бара. Сочетание стеклянных поверхностей и мягких тканей обивки создает ощущение легкости и комфорта.</p>' +
        '<p class="text">Благодаря стеклянному потолку и стенам, утром и вечером бар залит солнечным светом, который, многократно отражаясь, создает радужные блики и солнечные зайчики.</p>' +
        '<p class="text">Небольшие кофейные столики окружены креслами и уютными диванами, удобными для проведения и деловых встреч, и дружеских посиделок.</p>'
    );

    var options = [
        ['images/loyalty.png', 
        'Программа лояльности',
        'Система скидок и поощрений для постоянных гостей'],
        ['images/dish.png', 
        'Основное меню',
        'Блюда русской и европейской кухни в авторском исполнении'],
        ['images/bar.png', 
        'Барная карта',
        'Авторские коктейли и классичекие напитки'],
        ['images/write.png', 
        'Обратная связь',
        'Отзывы наших гостей'], 
        ['images/time.png', 
        'Время работы',
        'Пн-вс 07:00-23:00'], 
        ['images/road.png', 
        'Как добраться',
        'Схема проезда, парковка для гостей'],    
    ];
    
    options.forEach(function(options_item){
        $('.options').append(
            '<div class="options-item">'+
            '<img src="' + options_item[0] + '" alt="#" class="a">' +
            '<h3>' + options_item[1] + '</h3>' +
            '<div class="arrow"></div>'+
            '<p>' + options_item[2] + '</p>'+
            '</div>'
        );
    }); 

    $('.arrow').click(function() {
        var ans = $(this).next(); 
        var display = ans.css('display');
            if (display == 'none') {
                ans.slideDown(500);
                // $(this).text('Скрыть ответ');
            } else {
                ans.slideUp(500);
                // $(this).text('Показать ответ');
            }
    }); 

    $('.tous').click(function(){
        var yus = $('#us')[0].getBoundingClientRect().top;
        $('html,body').animate({scrollTop: yus}, 1000);
     });

     $('.footer-main').click(function(){
        var ytop = $('#top')[0].getBoundingClientRect().top;
        $('html,body').animate({scrollTop: ytop}, 1000);
     });

    $('#sink').append(
        '<div id="sink-wind">'+
            '<div class="phgd">'+
                '<div class="phone">'+
                    '<div class="good1"></div>'+
                '</div>'+
            '</div>'+
            '<div class="descr">'+
                '<h3>Хотите забронировать столик?</h3>'+
                '<h3>Позвоните нам или закажите обратный звонок!</h3>'+
                '<h3>+7(495)221-54-52</h3>'+
            '</div>'+
            '<div class="exitline">'+
                '<div class="exit"></div>'+
            '</div>'+
        '</div>'
    );

    var wind = setInterval(function(){
        $('#sink').animate({opacity:1, width:'1200px',height:'500px',padding:'100px 200px'}, 500, function(){}); 
    }, 3000);
    
    var id = setInterval(function(){
        $('.good1').css('backgroundImage','url(images/good0.png');
            $('.good1').animate({opacity:1}, 700, function(){
            $('.good1').css('backgroundImage','url(images/good1.png');
                $('.good1').animate({opacity:1}, 800, function(){
                $('.good1').css('backgroundImage','url(images/good2.png');
                    $('.good1').animate({opacity:1}, 900, function(){
                    $('.good1').css('backgroundImage','url(images/good3.png');
                        $('.good1').animate({opacity:1}, 1000, function(){  
                        });
                     });
                });
            });
    }, 3450);
    
    
    $('.exit').click(function(){
        $('#sink').animate({opacity: 0,width:'0px',height:'0px',padding:'0px'}, 1000);
        clearInterval(wind, 100);
        clearInterval(id, 100);
    });

});
