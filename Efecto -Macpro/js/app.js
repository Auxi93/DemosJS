//Meter el vídeo y cambiar el tiempo del vídeo

$(window).scroll(function(){


    let pixel = $(window).scrollTop()
  
    // let tiempoV = 47
    // let alturaBody = tiempoV * 1000

    
    $('#macpro')[0].currentTime = pixel / 1000
    

    if( pixel >= 1000 && pixel <= 2000){
        $('.info1').addClass('ver')
      
    }else(
        $('.info1').removeClass('ver')
    )

    if( pixel >= 3000 && pixel <= 4000){
        $('.info2').addClass('ver')
      
    }else(
        $('.info2').removeClass('ver')
    )

    if( pixel >= 6000 && pixel <= 7000){
        $('.info3').addClass('ver')
      
    }else(
        $('.info3').removeClass('ver')
    )

})
