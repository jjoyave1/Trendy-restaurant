//FLICKR PICS
// var foodpicsTemplate = _.template($('#foodTemplate').text());


var flickrKeyCode = '849c1dd07ac410f7ffc69b61a1e44400';
var url = 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=' + flickrKeyCode + '&gallery_id=5704-72157653593281981&format=json&extras=url_m&callback=jsonFlickrApi';

var images = [];

$.ajax(url, {
  dataType: 'jsonp',
  jsonpCallback: 'jsonFlickrApi',
  success: function(data) {
    var photos = data.photos.photo;
    // processFlickr(photos);
    images.push(photos);


  _.each(images, function(image) {

    console.log(image.url_m);
    $('.flickrPics').append('<img src="' + image.url_m + '">');
    });

  }
});



// function processFlickr(pics) {
//   pics.forEach(function(pic) {
//     var $element = foodpicsTemplate(pic);
//     $('.flickrPics').append($element);

//   });
// };

// var imgSlider = new SimpleSlider(document.getElementById('myslider'));

// console.log(imgSlider);







var appTemplate = _.template($('#app-template').text());
var entreeTemplate = _.template($('#entree-template').text());
var sideTemplate = _.template($('#side-template').text());
var drinkTemplate = _.template($('#drink-template').text());

$.getJSON("http://private-anon-60601716e-restaurantapi.apiary-mock.com/menu-1", function(items){
  processApps(items.appetizers);
});

function processApps(items) {
  items.forEach(function(app) {
  var $element = appTemplate(app);
  $('#apps-tab').append($element);
  if (app.allergies == 1 || app.favorite == 1 || app.spicy == 1 || app.vegan == 1){
  $('#apps-tab').append("<div class='alertWrapApps alertBoxWrap'></div>")
  }
  if (app.allergies == 1) {$('.alertWrapApps').append("<div class='alertBox'><img src='images/allergies-icon.png'class='allergyIconImg'></div>")}
  else if (app.favorite == 1) {$('.alertWrapApps').append("<div class='alertBox'><img src='images/favorites-icon.png' class='favIconImg'></div>")}
  else if (app.spicy == 1) {$('.alertWrapApps').append("<div class='alertBox'><img src='images/spicy-icon.jpg' class='spicyIconImg'></div>")}
  else if (app.vegan == 1) {$('.alertWrapApps').append("<div class='alertBox'><img src='images/vegan-icon.png' class='veganIconImg'></div>")}
  });
};

$.getJSON("http://private-anon-60601716e-restaurantapi.apiary-mock.com/menu-1", function(items){
  processEntrees(items.entrees);
});
function processEntrees(items) {
  items.forEach(function(entree) {
  var $element = entreeTemplate(entree);
  $('#entrees-tab').append($element);
  if (entree.allergies == 1 || entree.favorite == 1 || entree.spicy == 1 || entree.vegan == 1){
  $('#entrees-tab').append("<div class='alertWrapEntrees alertBoxWrap'></div>")
  }
  if (entree.allergies == 1) {$('.alertWrapEntrees').append("<div class='alertBox'><img src='images/allergies-icon.png'class='allergyIconImg'></div>")}
  else if (entree.favorite == 1) {$('.alertWrapEntrees').append("<div class='alertBox'><img src='images/favorites-icon.png' class='favIconImg'></div>")}
  else if (entree.spicy == 1) {$('.alertWrapEntrees').append("<div class='alertBox'><img src='images/spicy-icon.jpg' class='spicyIconImg'></div>")}
  else if (entree.vegan == 1) {$('.alertWrapEntrees').append("<div class='alertBox'><img src='images/vegan-icon.png' class='veganIconImg'></div>")}
  });
};
$.getJSON("http://private-anon-60601716e-restaurantapi.apiary-mock.com/menu-1", function(items){
  processSides(items.sides);
});
function processSides(items) {
  items.forEach(function(side){
  var $element = sideTemplate(side);
  $('#sides-tab').append($element);
  if (side.allergies == 1 || side.favorite == 1 || side.spicy == 1 || side.vegan == 1) {
  $('#sides-tab').append("<div class='alertWrapSides alertBoxWrap'></div>")
  }
  if (side.allergies == 1) {$('.alertWrapSides').append("<div class='alertBox'><img src='images/allergies-icon.png'class='allergyIconImg'></div>")}
  else if (side.favorite == 1) {$('.alertWrapSides').append("<div class='alertBox'><img src='images/favorites-icon.png' class='favIconImg'></div>")}
  else if (side.spicy == 1) {$('.alertWrapSides').append("<div class='alertBox'><img src='images/spicy-icon.jpg' class='spicyIconImg'></div>")}
  else if (side.vegan == 1) {$('.alertWrapSides').append("<div class='alertBox'><img src='images/vegan-icon.png' class='veganIconImg'></div>")}
  });
};

$.getJSON("http://private-anon-60601716e-restaurantapi.apiary-mock.com/menu-3", function(x){
  processDrinks(x.Beer);
});
function processDrinks(x){
  x.forEach(function(drk){
  var $element = drinkTemplate(drk);
  $('#drinks-tab').append($element);
  });
};
// START OF TAB BOX FUNCTIONS

$('.tabTitleMenu').on('click', function(){
  $('#menu-tab').removeClass('hide');
  $('#reservations-tab').addClass('hide');
  $('#drinks-tab').addClass('hide');
  $('#story-tab').addClass('hide');

  $('.tabTitleMenu').addClass('selected');
  $('.tabTitleReservations').removeClass('selected');
  $('.tabTitleDrinks').removeClass('selected');
  $('.tabTitleStory').removeClass('selected');
});

$('.tabTitleStory').on('click', function(){
  $('#menu-tab').addClass('hide');
  $('#reservations-tab').addClass('hide');
  $('#drinks-tab').addClass('hide');
  $('#story-tab').removeClass('hide');

  $('.tabTitleMenu').removeClass('selected');
  $('.tabTitleReservations').removeClass('selected');
  $('.tabTitleDrinks').removeClass('selected');
  $('.tabTitleStory').addClass('selected');
});
$('.tabTitleReservations').on('click', function(){
  $('#reservations-tab').removeClass('hide');
  $('#menu-tab').addClass('hide');
  $('#drinks-tab').addClass('hide');
  $('#story-tab').addClass('hide');

  $('.tabTitleMenu').removeClass('selected');
  $('.tabTitleReservations').addClass('selected');
  $('.tabTitleDrinks').removeClass('selected');
  $('.tabTitleStory').removeClass('selected');
});

$('.tabTitleDrinks').on('click', function(){
  $('#reservations-tab').addClass('hide');
  $('#menu-tab').addClass('hide');
  $('#story-tab').addClass('hide');
  $('#drinks-tab').removeClass('hide');

  $('.tabTitleMenu').removeClass('selected');
  $('.tabTitleReservations').removeClass('selected');
  $('.tabTitleDrinks').addClass('selected');
  $('.tabTitleStory').removeClass('selected');
});
// END TAB BOX FUNCTIONS

// START News & Special
var newsTemplate = _.template($('#newsTemplate').text());
$.getJSON("http://private-anon-d51db0770-restaurantapi.apiary-mock.com/news/latest", function(blog){
processNews(blog);
});
function processNews(news){
var $element = newsTemplate(news);
$('.news').append($element);
};
// $.getJSON("http://private-anon-d51db0770-restaurantapi.apiary-mock.com/menu/special",
// function(items){});
var dailySpecial;
$.getJSON("http://private-anon-d51db0770-restaurantapi.apiary-mock.com/menu/special"
, function(spec){
dailySpecial = spec.menu_item_id;
});
$.getJSON("http://private-anon-d51db0770-restaurantapi.apiary-mock.com/menu-1",
function(spec){
spec.entrees.forEach(function(entree){
if (entree.id == dailySpecial) {
$('.special').html('<h3>Our Daily Special</h3>' + '<p>'+ entree.item + '<p>' +'Price $' + entree.price + '<p>' + entree.description + '</p>')
}
});
});
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
///alert box function
$('.alertBox').mouseover( function(){
  console.log("It's working!");
  $(this).append("<div class = 'popBox'></div>");
  $(this).mouseout( function(){
  $('.popBox').addClass('hide');
  });
});
////end alert buttons
