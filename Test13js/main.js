import './style.css'

import * as THREE from 'three';
import { PerspectiveCamera, WebGLRenderer } from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
/*import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';*/

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera
( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.setZ(30);

renderer.render( scene, camera );

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshStandardMaterial( { color: 'seagreen' } );

const torus = new THREE.Mesh( geometry, material );

scene.add(torus)

const controls = new OrbitControls(camera,renderer.domElement);

function animate () {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    renderer.render( scene, camera );

}

animate();

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambientLight)

/*const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper,gridHelper);*/

function addStar ()
{
    const geometry = new THREE.SphereGeometry(.025, 24, 24);
    const material = new THREE.MeshStandardMaterial( { color:(0xffffff) } )
    const star = new THREE.Mesh( geometry, material );

    const [x, y, z] = Array(3).fill()
    .map( () => THREE.MathUtils.randFloatSpread( 100 ) )

    star.position.set(x, y, z);
    scene.add(star);
}

Array(1000).fill().forEach(addStar)


const spaceTexture = new THREE.TextureLoader().load('universe.jpg');
scene.background = spaceTexture;

/*const randyTexture = new THREE.TextureLoader().load('randy.jpg');

const randy = new THREE.Mesh(
     new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial( { map: randyTexture } )
)

scene.add(randy)*/

/*const libraTexture = new THREE.TextureLoader().load('libra.jpg');

const libra = new THREE.Mesh(
    new THREE.SphereGeometry( 5, 32, 32),
    new THREE.MeshStandardMaterial( {
        map: libraTexture,
    } )
);

scene.add(libra)*/

const pulaTexture = new THREE.TextureLoader().load('pula.jpg');

const pula = new THREE.Mesh(
    new THREE.SphereGeometry( 5, 32, 32),
    new THREE.MeshStandardMaterial( {
        map: pulaTexture,
    } )
);

scene.add(pula)