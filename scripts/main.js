
//Pulls appetizers from API
 var appTemplate = _.template($('#app-template').text());
 var entreeTemplate = _.template($('#entree-template').text());
 var sideTemplate = _.template($('#side-template').text());


 $.getJSON("http://private-anon-60601716e-restaurantapi.apiary-mock.com/menu-1", function(items){
   processApps(items.appetizers);
   });

 function processApps(items) {
   items.forEach(function(app){
     var $element = appTemplate(app);
     $('#apps-tab').append($element);
   });
 }

  $.getJSON("http://private-anon-60601716e-restaurantapi.apiary-mock.com/menu-1", function(items){
   processEntrees(items.entrees);
   });

 function processEntrees(items) {
   items.forEach(function(entree){
     var $element = entreeTemplate(entree);
     $('#entrees-tab').append($element);
   });
 }

  $.getJSON("http://private-anon-60601716e-restaurantapi.apiary-mock.com/menu-1", function(items){
   processSides(items.appetizers);
   });

 function processSides(items) {
   items.forEach(function(side){
     var $element = sideTemplate(side);
     $('#sides-tab').append($element);
   });
 }


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
<<<<<<< HEAD

// END TAB BOX FUNCTIONS

// MENU TAB BOX FUNCTIONS

$('.tabTitleApps').on('click', function(){
  $('#apps-tab').removeClass('menuHide');
  $('#entrees-tab').addClass('menuHide');
  $('#sides-tab').addClass('menuHide');


  $('.tabTitleApps').addClass('sel');
  $('.tabTitleEntrees').removeClass('sel');
  $('.tabTitleSides').removeClass('sel');

});

$('.tabTitleEntrees').on('click', function(){

  $('#apps-tab').addClass('menuHide');
  $('#entrees-tab').removeClass('menuHide');
  $('#sides-tab').addClass('menuHide');

  $('.tabTitleApps').removeClass('sel');
  $('.tabTitleEntrees').addClass('sel');
  $('.tabTitleSides').removeClass('sel');

});

$('.tabTitleSides').on('click', function(){

  $('#apps-tab').addClass('menuHide');
  $('#entrees-tab').addClass('menuHide');
  $('#sides-tab').removeClass('menuHide');

  $('.tabTitleApps').removeClass('sel');
  $('.tabTitleEntrees').removeClass('sel');
  $('.tabTitleSides').addClass('sel');

});

