/*
* @author Florian Maxim Brüggemann / https://florianmaxim.com
*/

import {WebGLRenderer,
                Scene,
    PerspectiveCamera,
        PlaneGeometry,
       SphereGeometry,
                 Mesh,
    MeshPhongMaterial,
             Object3D,
           PointLight,
                Clock,
              DoubleSide}
from "../lib/three/three.modules";

var CLOCK = new Clock();
var scene, camera, controls, renderer;
var geometry, material, mesh, lightContainer;
var light1, light2, light3, light4, light5, light6;

init();
animate();

function init() {

    document.body.style.margin = 0;

    renderer = new WebGLRenderer({antialias:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    scene = new Scene();

    camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    scene.add(camera)

    geometry = new SphereGeometry( 10, 32, 32 );
    material = new MeshPhongMaterial( { color: 0xffffff, wireframe: false, side: DoubleSide } );

    mesh = new Mesh( geometry, material );
    mesh.receiveShadow = true;
    mesh.position.set(0,0,0)
    mesh.rotation.x = 2

    mesh.scale.set(-1,-1,-1)

    scene.add( mesh );

    lightContainer = new Object3D();

		light1 = new PointLight( 0xff0040, 5, 50 );
    light1.position.set(-50,0,0);

		lightContainer.add( light1 );

		light2 = new PointLight( 0x0040ff, 5, 50 );
    light2.position.set(50,0,0);

		lightContainer.add( light2 );

		light3 = new PointLight( 0x80ff80, 5, 50 );
    light3.position.set(0,50,0);

		lightContainer.add( light3 );

    light4 = new PointLight( 0x800080, 5, 50 );
    light4.position.set(0,-50,0);

		lightContainer.add( light4 );

    light5 = new PointLight( 0x800080, 5, 50 );
    light5.position.set(0,0,-50);

		lightContainer.add( light5 );

    light6 = new PointLight( 0x80ee80, 5, 50 );
    light6.position.set(0,0,50);

		lightContainer.add( light6 );

    scene.add(lightContainer)
}

function animate() {

    var TIME = CLOCK.getElapsedTime();

    requestAnimationFrame( animate );
/*

    lightContainer.rotation.x += Math.sin(TIME)/TIME;
    lightContainer.rotation.y += -Math.cos(TIME)/TIME;
    lightContainer.rotation.z -= Math.sin(TIME)/TIME;


    mesh.rotation.y += Math.sin(TIME)+TIME;
    mesh.rotation.x += Math.cos(TIME)+TIME;
    mesh.rotation.z += Math.sin(TIME)+TIME;

    
    mesh.scale.y = Math.sin(TIME+TIME);
    mesh.scale.x = Math.cos(TIME+TIME);
    mesh.scale.z = Math.sin(TIME+TIME);


    camera.rotation.z = Math.sin(TIME)-TIME;
    camera.rotation.y = Math.sin(TIME)-TIME;
    camera.rotation.z = Math.cos(TIME)-TIME;

*/

    light1.intensity = Math.sin(CLOCK.getElapsedTime()+.5)*10
    light2.intensity = Math.sin(CLOCK.getElapsedTime()-5)*10
    light3.intensity = Math.sin(CLOCK.getElapsedTime()+3)*10
    light4.intensity = Math.sin(CLOCK.getElapsedTime()-20)*10
    light5.intensity = Math.sin(CLOCK.getElapsedTime()+.1)*10
    light6.intensity = Math.sin(CLOCK.getElapsedTime()-9)*10


    renderer.render( scene, camera );
}

addEventListener('resize', function(){
  renderer.setSize( window.innerWidth, window.innerHeight );
})
