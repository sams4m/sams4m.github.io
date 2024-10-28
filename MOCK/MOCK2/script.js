let sheets = [
  { name: 'one'},
  { name: 'two', id: 'Cookie Book'},
  { name: 'three', id: 'Chocolate chip cookies:'},
  { name: 'four'},
  { name: 'five' },
  { name: 'six' },
];

let ongoingSheet = 0,
changing = false;

cons controlButton = document.querySelector(".controls");

controlButton.addEventListener("click", function() => {
change($(this).prop('class'));
});

function change(flip) {
if (changing) return;
  
if (flip != 'next' && flip != 'back') return;  
let next_sheet = (flip == 'next'),
    switch_left_data = next_sheet ? sheets[ongoingSheet + 2] : sheets[ongoingSheet - 2],
    switch_right_data = next_sheet ? sheets[ongoingSheet + 3] : sheets[ongoingSheet - 1];
  
if (!switch_left_data && !switch_right_data) return;
  
changing = true;
let $ong_left = $('.cookie-book .ongoing.left.sheet'),
  $ong_right = $('.cookie-book .ongoing.right.sheet'),
  $switch_left = $('<div class="left sheet ' + flip + '" />'),
  $switch_right = $('<div class="right sheet ' + flip + '" />');
  
  if (switch_left_data) {
      $switch_left.addClass(switch_left_data.name);
      $switch_left.html(switch_left_data.id);
  }
  
  if (switch_right_data) {
      $switch_right.addClass(switch_right_data.name); 
      $switch_right.html(switch_right_data.id);
  }  
  
  $('.cookie-book').prepend($switch_left);
  $('.cookie-book').prepend($switch_right);
  
  $ong_left.addClass('to_remove');
  $ong_right.addClass('to_remove');
  
  setTimeout(function(){
      if (next_sheet) {
          $ong_right.addClass('move');
          $switch_left.addClass('move');
      }
      else {
          $ong_left.addClass('move');
          $switch_right.addClass('move');
      }
      
      $switch_left.addClass('ongoing');
      $switch_right.addClass('ongoing');
      
  }, 100);
  
  setTimeout(function(){
      $('.cookie-book .sheet.to_remove').remove();
      $('.cookie-book .sheet').removeClass('move next back'); 
      changing = false;        
  }, 500);
  
  ongoingSheet = next_sheet ? (ongoingSheet + 2) : (ongoingSheet - 2);
}


