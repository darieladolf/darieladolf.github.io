$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones div').hide();
    $('.secciones div:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones div').hide();

        var activetab=$(this).attr('href');
        $(activetab).show();
        return false;
    })
});