// TYPE HEADER //
$(document).ready(function() {
  $(function(){
      $(".typed").typed({
        strings: ["Saúde,", "Bem-estar,", "Qualidade de vida."],
        typeSpeed: 300,
        loop : true,
      });
  });
});

// CARROUSEL //
$(document).ready(function() {
  lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel' : "Imagem %1 de %2",
      'positionFromTop' : 150
    })

  $("#slide").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      slideSpeed : 1000,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      autoPlay : true,
      lazyLoad : true,
      pagination : false,
      navigation : false

  });

  var owl = $("#slide");

  owl.owlCarousel();

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })

});

// FEED INSTAGRAM //
$(document).ready(function() {
  var userFeed = new Instafeed({
    get: 'user',
    userId: '3620885687',
    accessToken: '3620885687.dbb5681.80910016c2214f55b2779cfa9005edb8',
    template: '<a href="{{link}} "target="_blank"><img src="{{image}}" /></a>'
  });
  userFeed.run();
});

// TESTIMONAIS //
$(document).ready(function() {
$(".main-gallery").owlCarousel({

      navigation : false, // Show next and prev buttons
      pagination : true,
      slideSpeed : 1000,
      autoPlay : true,
      paginationSpeed : 400,
      singleItem:true,
      items : 2,
      itemsMobile : 1,

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
});
var owl = $(".main-gallery");

  owl.owlCarousel();

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })

});
// GOOGLE MAPS //
$(document).ready(function() {
  var myCenter=new google.maps.LatLng(-5.747750205214936,-35.2663214);

  function initialize() {
  var mapProp = {
    center:myCenter,
    mapTypeControl:false,
    zoom:18,
    mapTypeId:google.maps.MapTypeId.ROADMAP

    };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker=new google.maps.Marker({
    position:myCenter,
    icon:'img/pin.png'
    });

  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content:"New Fitness Academia Unid. 2 <br> Av. José Luiz da Silva, 720, Natal/RN."
    });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    });

  }

  google.maps.event.addDomListener(window, 'load', initialize);
});

// TOGGLE PRICING //
$(document).ready(function(){
  $("#toggle-pricing").click(function(){
    $(".alert-danger").toggle("slow");
  });
});

// TOGGLE PHONE //
$(document).ready(function(){
  $(".number-phone").hide();

  $("#button-contact").click(function(){
    $(".number-phone").toggle(300);
  });
});

// SCROLL HREF //
$(document).ready(function(){
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
});