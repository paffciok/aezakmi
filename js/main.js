var isLoaded = false;

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    e.preventDefault();

    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 800);
});

$(document).ready ( function () {

    if(isLoaded == false) 
        $("#content").load('./content.html');

    isLoaded = true;

    $(document).on ("click", "#reportExecute", function () {
        $("#reportContent").load('./report.html');
    });
});

$(window).bind('mousewheel DOMMouseScroll', function(event){
    var scrolled_val = $(document).scrollTop().valueOf();
    if(scrolled_val > 1130) 
    {
        reply_click('contactItem');
    }
    else
    {
        reply_click('homeItem');
    }
});

function reply_click(clicked_id)
{
    if(clicked_id == 'homeItem')
    {
        $('#homeItem').addClass('active');
        $('#contactItem').removeClass('active');
    }

    else if(clicked_id == 'contactItem')
    {
        $('#homeItem').removeClass('active');
        $('#contactItem').addClass('active');       
    }
}

$('body').on('mouseenter mouseleave','.dropdown',function(e){
    var _d=$(e.target).closest('.dropdown');_d.addClass('show');
    setTimeout(function(){
      _d[_d.is(':hover')?'addClass':'removeClass']('show');
    },300);
  });

jQuery(function($)
{
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 17,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);
});
