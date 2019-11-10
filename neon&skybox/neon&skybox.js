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
var red = new THREE.Color(0xff0000);
var green = new THREE.Color(0x00ff00);
var blue = new THREE.Color(0x0000ff);
var dodecaG = new THREE.BoxGeometry(5,5,5)
texture1 = new THREE.TextureLoader().load('smile.jpg')
var dodecaM = new THREE.MeshLambertMaterial({color: 0xFFFFFF, map: texture1})
helper = new THREE.GridHelper(200, 20, blue, red)
var pointLight= new THREE.PointLight(0xFFFFFF, 1, 1)
pointLight.position.set(0,0,0)
/*let materialArray = []
    let texture_ft = new THREE.TextureLoader().load('corona_ft.png')
    let texture_bk = new THREE.TextureLoader().load('corona_bk.png')
    let texture_up = new THREE.TextureLoader().load('corona_up.png')
    let texture_dn = new THREE.TextureLoader().load('corona_dn.png')
    let texture_rt = new THREE.TextureLoader().load('corona_rt.png')
    let texture_lf = new THREE.TextureLoader().load('corona_lf.png')
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))
    for(let i= 0; i<6; i++){
        materialArray[i].side = THREE.BackSide;
    }
    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000)
    let skybox = new THREE.Mesh(skyboxGeo, materialArray)
    */
// **********************************************************************

function init (){
    
    scene.add(camera)
    camera.position.set(0,00,100) 
    //cubos
    for(i=0; i<100; i++){
        cube = new THREE.Mesh(dodecaG, dodecaM)
        scene.add(cube)
        cube.position.set(Math.random() * 300 - 150, Math.random() * 300 - 150 ,Math.random() * 300 - 150)
    }
    scene.add(ambientLight)
    //..scene.add(helper);
    renderer.setSize(window.innerWidth, window.innerHeight);           
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    container.appendChild(renderer.domElement);
    //adjust window size
    window.addEventListener('resize', () =>{
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })
    
    //scene.add(skybox)
    renderer.render(scene, camera)
}

function animate() {  
    
    requestAnimationFrame(animate)    
    controls.update()
    renderer.render(scene, camera)
}

let offset = Math.PI/2
let offsetX = 30
let offsetY = 40

function onMouseMove(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 -1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children);
    for(var i = 0; i< intersects.length; i++){
        tl = new TimelineMax()
        tl.to(intersects[i].object.rotation, 1,{z: offset, x: offset}).to(intersects[i].object.position, 1, {x: offsetX, y: offsetY})
    }
    offset += Math.PI/2;
    if (offset > 2*Math.PI){
        offset = Math.PI/2
    }
    offsetX += 4
    if (offsetX > 200){
        offsetX = Math.random() * 200 - 100
    }
    offsetY += 3
    if (offsetY > 200){
        offsetY = Math.random() * 200 - 100
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
//window.addEventListener('click' , onMouseClick);
init()
animate()


