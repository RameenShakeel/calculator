$(document).ready(function(){

    $('.ac').click(function(){
        $('.result').val(' ');
    });
    $('.del').click(function(){
        $('.result').val('')
    });
    $('.sev').click(function(){
        var result= $('.result').val();
        var display=result+7;
        $('.result').val(display)
    });

    $('.eight').click(function(){
        var result= $('.result').val();
        var display=result+8;
        $('.result').val(display)
    });
    $('.nine').click(function(){
        var result= $('.result').val();
        var display=result+9;
        $('.result').val(display)
    });
    $('.zero').click(function(){
        var result= $('.result').val();
        var display=result+0;
        $('.result').val(display)
    });
    $('.one').click(function(){
        var result= $('.result').val();
        var display=result+1;
        $('.result').val(display)
    });
    $('.two').click(function(){
        var result= $('.result').val();
        var display=result+2;
        $('.result').val(display)
    });
    $('.three').click(function(){
        var result= $('.result').val();
        var display=result+3;
        $('.result').val(display)
    });
    $('.four').click(function(){
        var result= $('.result').val();
        var display=result+4;
        $('.result').val(display)
    });
    $('.five').click(function(){
        var result= $('.result').val();
        var display=result+5;
        $('.result').val(display)
    });
    $('.six').click(function(){
        var result= $('.result').val();
        var display=result+6;
        $('.result').val(display)
    });
    $('.plus').click(function(){
        var result= $('.result').val();
        var display= result + '+';
        $('.result').val(display)
    });
    $('.sub').click(function(){
        var result= $('.result').val();
        var display= result + '-';
        $('.result').val(display)
    });
    $('.mul').click(function(){
        var result= $('.result').val();
        var display= result + '*';
        $('.result').val(display)
    });
    $('.div').click(function(){
        var result= $('.result').val();
        var display= result + '/';
        $('.result').val(display)
    });

    $('.equal').click(function(){
        var result = $('.result').val();
        $('.result').val(eval(result));
    });
});