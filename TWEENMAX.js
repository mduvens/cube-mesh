const VIEW_ANGLE = 45;              
const NEAR = 1;
const FAR = 10000;
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const ASPECT = window.innerWidth / window.innerHeight;
const camera =
    new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
    );

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#000000")
const scene = new THREE.Scene();
const container = document.querySelector('#container');
const ambientLight = new THREE.AmbientLight(0xffffff, 1 , 500);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var dodecaG = new THREE.BoxGeometry(5,5,5)
texture1 = new THREE.TextureLoader().load('disc.jpg')
var dodecaM = new THREE.MeshLambertMaterial({color: 0xFF0000, map: texture1})

// **********************************************************************

function init (){
    
    scene.add(camera)
    for(i=0; i<100; i++){
        cube = new THREE.Mesh(dodecaG, dodecaM)
        scene.add(cube)
        cube.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100,Math.random() * 200 - 100)
    }
    scene.add(ambientLight)
    
    renderer.setSize(window.innerWidth, window.innerHeight);           
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    container.appendChild(renderer.domElement);
        //adjust window size
    window.addEventListener('resize', () =>{
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })
    camera.position.set(0,00,100)
    
    controls.update()
    

console.log(camera.position);
controls.update()
renderer.render(scene, camera)
}

function animate() {  
    
    requestAnimationFrame(animate)    
    controls.update()
    
    renderer.render(scene, camera)
}

let offset = Math.PI/2

function onMouseMove(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 -1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children);
    for(var i = 0; i< intersects.length; i++){
        tl = new TimelineMax()
        tl.to(intersects[i].object.rotation, 1,{z: offset})
    }
    offset += Math.PI/2;
    if (offset > 2*Math.PI){
        offset = Math.PI/2
    }
} 
let offsetS = 1
function onMouseClick(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 -1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children);
    for(var i = 0; i< intersects.length; i++){
        tl = new TimelineMax()
        tl.to(intersects[i].object.scale, 1,{x: offsetS})
    }
    offsetS++
    if (offsetS>5){offsetS=1}
} 
window.addEventListener('mousemove' , onMouseMove);
window.addEventListener('click' , onMouseClick);
init()
animate()


