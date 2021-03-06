var panorama, viewer, container, infospot, infospot2, infospot3, infospot4, textureLoader, tex1, tex2, text3, text4;

container = document.querySelector( '#container' );
textureLoader = new THREE.TextureLoader();
tex1 = textureLoader.load( 'https://i.imgur.com/Ewehq4b.png' );
tex2 = textureLoader.load( 'https://i.imgur.com/Ewehq4b.png' );
tex3 = textureLoader.load( 'https://i.imgur.com/GNLhwIA.png' );
tex4 = textureLoader.load( 'https://i.imgur.com/GNLhwIA.png' );


panorama = new PANOLENS.ImagePanorama( 'https://i.imgur.com/mKc1jnl.jpg' );



// Default infospot 1
infospot = new PANOLENS.Infospot( 
  2500, 
  "https://i.imgur.com/Ewehq4b.png"
);

infospot.position.set( -1029.00, 1880.83, 5000 );
infospot.addEventListener( "click", function(){
    //console.log('clicked on infospot');
    window.open("https://open.spotify.com/album/4ta4Dij4CAYTuDSVfJWfdS?si=J24jdwbaShuYrkYsYlTeIw&nd=1")
} );

infospot.addEventListener('hoverenter', e => {
    this.focus();
})

// Custom infospot 1
infospot2 = new PANOLENS.Infospot( 
  2500, 
  "https://i.imgur.com/Ewehq4b.png", false
);

infospot2.position.set( -1029.00, 1880.83, 5000 );
infospot2.addEventListener( "click", function(){
    console.log('info spot 2');
  this.focus();
} );
infospot2.addEventListener( 'hoverenter', function( event ){
  this.material.opacity = 0.6;
  this.material.color.set( 0x00ff00 * Math.random() );
  this.material.map = tex2;
  this.scale.x *= 2;
  this.scale.y *= 2;
} );
infospot2.addEventListener( 'hoverleave', function( event ){
  this.material.opacity = 1;
  this.material.color.set( 0xffffff );
  this.material.map = tex1;
  this.scale.x /= 2;
  this.scale.y /= 2;
} );

// Default infospot 3
infospot3 = new PANOLENS.Infospot( 
  2800, 
  "https://i.imgur.com/GNLhwIA.png"
);

infospot3.position.set( 2817.87, 2014.13, 5000 );
infospot3.addEventListener( "click", function(){
    // console.log('clicked on infospot3');
    window.open('https://open.spotify.com/album/3odzHPzW330FvBRPW0OURc?si=-gJBOMufRoaCvLrpMgkivg')
} );

// Custom infospot 4
infospot4 = new PANOLENS.Infospot( 
  2800, 
  "https://i.imgur.com/GNLhwIA.png", false
);

infospot4.position.set( 2817.87, 2014.13, 5000 );
infospot4.addEventListener( "click", function(){
    console.log('clicked on info spot 4')
  this.focus();
} );
infospot4.addEventListener( 'hoverenter', function( event ){
  this.material.opacity = 0.6;
  this.material.color.set( 0x00ff00 * Math.random() );
  this.material.map = tex2;
  this.scale.x *= 2;
  this.scale.y *= 2;
} );
infospot4.addEventListener( 'hoverleave', function( event ){
  this.material.opacity = 1;
  this.material.color.set( 0xffffff );
  this.material.map = tex1;
  this.scale.x /= 2;
  this.scale.y /= 2;
} );

panorama.add( infospot, infospot2, infospot3, infospot4 );

viewer = new PANOLENS.Viewer( { container: container, cameraFov: 90, autoRotate: true, autoRotateSpeed: 1, autoRotateActivationDuration: 1000, controlBar: false, output: "console", autoHideInfospot: false } );
viewer.add( panorama );