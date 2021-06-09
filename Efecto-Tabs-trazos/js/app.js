const $tab = $('.tab')

$tab.on('click', function(){
      let i = $tab.index($(this))
      $tab.addClass('oculto')
      $tab.eq(i).removeClass('oculto')
})





