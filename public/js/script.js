var panorama, viewer, container, infospot, infospot2, infospot3, infospot4, infospot5, infospot6, textureLoader, tex1, tex2, text3, text4, text5, text6;

container = document.querySelector( '#container' );
panorama = new PANOLENS.ImagePanorama( 'https://i.imgur.com/EYWDJeT.jpg' );

//https://i.imgur.com/T98sSqs.jpg

// Custom infospot 1
infospot2 = new PANOLENS.Infospot( 
  2500, 
  "https://i.imgur.com/Ewehq4b.png", false
);

infospot2.position.set( -1029.00, 1880.83, 5000 );
infospot2.addEventListener( "click", function(){
  window.open('https://open.spotify.com/album/4ta4Dij4CAYTuDSVfJWfdS?si=J24jdwbaShuYrkYsYlTeIw');
  this.focus();
} );

// Custom infospot 4
infospot4 = new PANOLENS.Infospot( 
  2800, 
  "https://i.imgur.com/GNLhwIA.png", false
);

infospot4.position.set( 2817.87, 2014.13, 5000 );
infospot4.addEventListener( "click", function(){
  window.open('https://open.spotify.com/album/3odzHPzW330FvBRPW0OURc?si=-gJBOMufRoaCvLrpMgkivg');
  this.focus();
} );

// Custom infospot 5
infospot5 = new PANOLENS.Infospot( 
  800, 
  "https://i.imgur.com/O8sikuJ.png", false
);

infospot5.position.set( 1724.71, 1839.45, -5000.00 );
infospot5.addEventListener( "click", function(){

  window.open('http://youtu.be/FQ1K8ZeLbkg');
  this.focus();
} );

// Custom infospot 6
infospot6 = new PANOLENS.Infospot( 
  1000, 
  "https://i.imgur.com/xLdcg8Y.png", false
);

infospot6.position.set( 471.30, -5000.00, 1878.51 );
infospot6.addEventListener( "click", function(){
  window.open('https://instagram.com/spz_essepizeta')
  this.focus();
} );

panorama.add( infospot, infospot2, infospot3, infospot4, infospot5, infospot6 );

viewer = new PANOLENS.Viewer( { container: container, cameraFov: 90, autoRotate: true, autoRotateSpeed: 1, autoRotateActivationDuration: 1000, controlBar: false, output: "console", autoHideInfospot: false } );
viewer.add( panorama );