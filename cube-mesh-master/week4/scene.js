            // Empty script section
            // Set some camera attributes.
            const VIEW_ANGLE = 45;              
            const NEAR = 1;
            const FAR = 10000;
            const WIDTH = 1080;
            const HEIGHT = 720;
            const ASPECT = WIDTH / HEIGHT;
            const camera =
                new THREE.PerspectiveCamera(
                    VIEW_ANGLE,
                    ASPECT,
                    NEAR,
                    FAR
                );
                const renderer = new THREE.WebGLRenderer();
            const scene = new THREE.Scene();
            const container =
                document.querySelector('#container');
            const cubeMaterial =
                new THREE.MeshStandardMaterial({
                    color: 0xff0051
                })
            const cube =
                    new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), cubeMaterial)
            
            const material = new THREE.MeshToonMaterial({
                    color: "#dadada",
                    wireframe: true,
                    transparent: true
                })
            var geometry = new THREE.SphereGeometry( 2, 32, 32 );
            var materialS = new THREE.MeshNormalMaterial( {color: 0x2194ce} );
            var sphere = new THREE.Mesh( geometry, materialS );
            const pointLight =
                new THREE.PointLight(0xFFFFFF, 0.5);
            const ambientLight = new THREE.AmbientLight(0xffff44, 1.2);
            t = 0
            
    // **********************************************************************
    
            function init (){
            scene.add(camera)
            renderer.setSize(WIDTH, HEIGHT);           
            controls = new THREE.OrbitControls(camera, renderer.domElement)

            container.appendChild(renderer.domElement);
            camera.position.set(0,20,100)
            controls.update()

            scene.add(cube)
            renderer.render(scene, camera)
            scene.add(ambientLight);
            pointLight.position.set(50,100,0)
            scene.add(pointLight);
            renderer.render(scene, camera)
            renderer.render(scene, camera)
            scene.add(sphere)
            console.log(camera.position);
            controls.update()
            scene.add(new THREE.GridHelper(100, 10, new THREE.Color(0x00ff00),new THREE.Color(0xffffff)));
            renderer.render(scene, camera)
            

            }
            let offset = 0.2
            let offset2 = 0.2
            function animate() {
                
                requestAnimationFrame(animate)  
                t += 0.01
                controls.update()
                cube.rotation.x += 0.03;
                cube.rotation.y += 0.03;
                sphere.rotation.x -= 0.02;
                sphere.rotation.y -= 0.02;
                
                if (cube.position.x > 10 || cube.position.x < -10) {
                    offset = -offset;
                }
                cube.position.x += offset;
                
                sphere.position.x = 10*Math.cos(t);
                sphere.position.z = 10*Math.sin(t); 
                
                renderer.render(scene, camera)
                }
                
            init()
            animate()