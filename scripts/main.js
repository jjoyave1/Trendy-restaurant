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
// START  News & Special
var newsTemplate = _.template($('#newsTemplate').text());

$.getJSON("http://private-anon-d51db0770-restaurantapi.apiary-mock.com/news/latest", function(blog){
  processNews(blog);
});
function processNews(news){
  var $element = newsTemplate(news);
  $('.news').append($element);
};

// $.getJSON("http://private-anon-d51db0770-restaurantapi.apiary-mock.com/menu/special",
//   function(items){});

var dailySpecial;

$.getJSON("http://private-anon-d51db0770-restaurantapi.apiary-mock.com/menu/special"
, function(spec){
  dailySpecial = spec.menu_item_id;
});

$.getJSON("http://private-anon-d51db0770-restaurantapi.apiary-mock.com/menu-1",
  function(spec){
  spec.entrees.forEach(function(entree){
    console.log(dailySpecial)
    if (entree.id == dailySpecial) {
      $('.special').html('<h3>Our Daily Special</h3><br/><br/>' + '<p>'+ entree.item + '</p><br/><br/>' + '<p>' + entree.price + '</p><br/>' + '<p>' + entree.description + '</p>')
    }
  });
});






