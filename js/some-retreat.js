$(document).ready(function() {
  // var map;
  function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 19.016060, lng: -99.178194},
      zoom: 8,
    });

    var anchor = '../img/icon/icon-anchor.png';
    /* position marker*/
    var companyPos = new google.maps.LatLng(19.016060, -99.178194);
    companyMarker = new google.maps.Marker({
      map: map,
      icon: anchor,
      animation: google.maps.Animation.DROP,
      position: companyPos,
      title: "Yawanawa"
    });
  }
  // window.onload = initMap;
});
