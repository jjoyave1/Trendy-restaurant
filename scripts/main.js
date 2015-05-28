var foodpicsTemplate = _.template($('#foodTemplate').text());

var flickrKeyCode = '849c1dd07ac410f7ffc69b61a1e44400';

var url = 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=' + flickrKeyCode + '&gallery_id=5704-72157653593281981&format=json&extras=url_m&callback=jsonFlickrApi';


$.ajax(url, {
  dataType: 'jsonp',
  jsonpCallback: 'jsonFlickrApi',
  success: function(data) {
    var photos = data.photos.photo;
    processFlickr(photos);
  }
})



function processFlickr(pics) {

    pics.forEach(function(pic) {

    var $element = foodpicsTemplate(pic);
    $('.foodPics').append($element);

    });
};

$(window).bind("load", function() {
    $("div#basic").slideViewerPro();
});










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
