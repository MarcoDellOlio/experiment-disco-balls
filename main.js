
function generateBoard () {
for (column = 0; column < 162; column++) {
    $('<div></div>').addClass('square').appendTo($('.wrapper'));
  }
}


function generateProject () {
  $('.square:eq(68)').append('<i class="fa fa-code" aria-hidden="true"></i>');
  $('.square:eq(68)').removeClass('super');
  $('.square:eq(68)').addClass('button');
  $(document).mouseover(function(event) {
    if ($(event.target).attr("class")==='square button')
    $(event.target).hover(function () {
        $(this).addClass("bigbutton");
      },
      function () {
        $(this).removeClass("bigbutton");
      }
    );
  })
}






function discoDisco () {
  $(document).mouseover(function(event) {
   if ($(event.target).attr("class")==='square')
      $(event.target).addClass('super');
      setTimeout(function() {
        $(event.target).removeClass('super');
    }, 1500);
      
    
  })
}













//######INVOKING ZONE###################
$( document ).ready(function() {
  console.log( "ready!" );
  generateBoard();
  discoDisco();
  generateProject();



});
