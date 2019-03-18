
$(document).ready (() => {


    function main() {
    



    $('#grow-me').addClass('big');
    $('#shrink-me').removeClass('big');
    console.log($('li'));
    $('.link').attr('href', 'https://www.example.com');
    $('.link').text('somewhere');
    $('#hide-me').css('display', 'none');
    $('#show-me').css('display', 'block');

    $('#name').insertBefore('Welcome');
    
}$("#action").on("click", main);
    

});    