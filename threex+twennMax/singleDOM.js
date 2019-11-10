let renderer, camera, scene;
let viewAngle = 45,
    near = 1,
    far = 10000,
    width = window.innerWidth,
    height = window.innerHeight,
    aspect = width / height;
camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far)
renderer = new THREE.WebGLRenderer();
scene = new THREE.Scene();
aLight = new THREE.AmbientLight(0xffffff, 0.5)

var domEvents = new THREEx.DomEvents(camera,renderer.domElement)

var sphereGeo = new THREE.SphereGeometry(4,10,10)
var sphereM = new THREE.MeshNormalMaterial({wireframe: true})
var sphere = []
//********************/
for(var i = 0; i<5; i++){
sphere[i] = new THREE.Mesh(sphereGeo, sphereM)
}
let tl = new TimelineMax()

//********************/

function init(){
    renderer.setSize(width, height)
    document.body.appendChild(renderer.domElement)
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.maxDistance = 400
    controls.minDistance = 2
    scene.add(camera)
    camera.position.set(20,0,30)
    scene.add(aLight)
    for(var j = -30, i =0; i<5; i++, j += 15){
        scene.add(sphere[i])
        sphere[i].position.set(j, 0 ,0)
    } 
    // **** DOM EVENTS ( THREEx + TWEENMAX) ******
    /* for(i=0;i<5; i++){
    domEvents.bind(sphere[i], 'mouseover', function(){
         tl.to(sphere[i].scale , 1 , { z: 2, x: 2, y: 2})
     })
    domEvents.bind(sphere[i], 'mouseout', function(){
        tl.to(sphere[i].scale , 1 , { z: 1, x: 1, y: 1})
    })
    }*/
    domEvents.addEventListener(sphere[0], 'click', event => {
        tl.to(sphere[0].scale , 1 , { z: 2.5, x: 2.5, y: 2.50}).to(sphere[0].rotation , 1 , { x: 60}, "-=1").to(sphere[0].rotation , .7 , { x: 0.01}).to(sphere[0].scale , 1 , { z: 1, x: 1, y: 1},"-=.7")
    })
    domEvents.bind(sphere[1], 'click', function(){          // .bind ... function() == .addEventListener... event =>
        tl.to(sphere[1].scale , 0.5 , { z: 2, x: 2, y: 2}).to(sphere[1].scale , 1 , { z: 1, x: 1, y: 1})
    })
    domEvents.bind(sphere[2], 'click', function(){
        tl.to(sphere[2].position , .5 , {y: 40 }).to(sphere[2].position, .5 , {x:40, y:40}).to(sphere[2].position, .5 , {x:40, y:-40}).to(sphere[2].position, .5 , {x:0, y:-40}).to(sphere[2].position, .5 , {x:0, y:0})
    })
    /*domEvents.bind(sphere[2], 'click', function(){
        tl.to(sphere[2].scale , 1 , { z: 1, x: 1, y: 1})
    })*/
    domEvents.bind(sphere[3], 'click', function(){
        tl.to(sphere[3].scale , .5 , { z: 2, x: 2, y: 2}).to(sphere[3].scale , .5 , { z: 1, x: 1, y: 1})
    })

    domEvents.bind(sphere[4], 'click', function(){
        tl.to(sphere[4].scale , .5 , { z: 2, x: 2, y: 2}).to(sphere[4].position , .7 , { x: 60}).to(sphere[4].position , 1 , { x: 30}).to(sphere[4].scale, 1, {z:1,x:1,y:1})
    })
    
    controls.update()
    window.addEventListener('resize', () =>{
        renderer.setSize(window.innerWidth , window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix()
    })
    renderer.render(scene,camera)
}
let offset = 0.01
function animate(){
    requestAnimationFrame(animate)
    for(i=0; i<5; i++){
        sphere[i].rotation.z += offset
        sphere[i].rotation.x += offset
    }
    controls.update()
    renderer.render(scene, camera)
}
init()
animate()