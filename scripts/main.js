// START OF TAB BOX FUNCTIONS

$('.tabTitleMenu').on('click', function(){
  $('#menu-tab').removeClass('hide');
  $('#history-tab').addClass('hide');
  $('#drinks-tab').addClass('hide');
  $('#story-tab').addClass('hide');

  $('.tabTitleMenu').addClass('selected');
  $('.tabTitleHistory').removeClass('selected');
  $('.tabTitleDrinks').removeClass('selected');
  $('.tabTitleStory').removeClass('selected');
});

$('.tabTitleStory').on('click', function(){

  $('#menu-tab').addClass('hide');
  $('#history-tab').addClass('hide');
  $('#drinks-tab').addClass('hide');
  $('#story-tab').removeClass('hide');

  $('.tabTitleMenu').removeClass('selected');
  $('.tabTitleHistory').removeClass('selected');
  $('.tabTitleDrinks').removeClass('selected');
  $('.tabTitleStory').addClass('selected');

});

$('.tabTitleHistory').on('click', function(){

  $('#history-tab').removeClass('hide');
  $('#menu-tab').addClass('hide');
  $('#drinks-tab').addClass('hide');
  $('#story-tab').addClass('hide');

  $('.tabTitleMenu').removeClass('selected');
  $('.tabTitleHistory').addClass('selected');
  $('.tabTitleDrinks').removeClass('selected');
  $('.tabTitleStory').removeClass('selected');

});

$('.tabTitleDrinks').on('click', function(){

  $('#history-tab').addClass('hide');
  $('#menu-tab').addClass('hide');
  $('#story-tab').addClass('hide');
  $('#drinks-tab').removeClass('hide');

  $('.tabTitleMenu').removeClass('selected');
  $('.tabTitleHistory').removeClass('selected');
  $('.tabTitleDrinks').addClass('selected');
  $('.tabTitleStory').removeClass('selected');

});

// END TAB BOX FUNCTIONS
