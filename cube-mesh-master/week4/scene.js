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
                    color: 0xff0051, wireframe:true
                })
            const pointLight =
            new THREE.PointLight(0xFFFFFF, 0.5);
            const ambientLight = new THREE.AmbientLight(0xffff44, 1.2);
            t1 = t2 = t3 = t4 = t5 = t6 = t7 = t8 = 0


                // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++PLANETS++++++++++++++++++++++++++++

            var geometry = new THREE.SphereGeometry( 20, 8, 8 );
            var material = new THREE.MeshBasicMaterial( {color: 0xEC8A11} );
            var sun = new THREE.Mesh( geometry, material );

            var geometry0 = new THREE.SphereGeometry( 0.5, 32, 32 );
            var material0 = new THREE.MeshBasicMaterial( {color: 0x2194ce} );
            var mercury = new THREE.Mesh( geometry0, material0 );

            var geometry1 = new THREE.SphereGeometry( 1, 32, 32 );
            var material1 = new THREE.MeshBasicMaterial( {color: 0x2194ce} );
            var venus = new THREE.Mesh( geometry1, material1 );

            var geometry2 = new THREE.SphereGeometry( 1.5, 32, 32 );
            var material2 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
            var terra = new THREE.Mesh( geometry2, material2 );

            var geometry3 = new THREE.SphereGeometry( 0.8, 32, 32 );
            var material3 = new THREE.MeshBasicMaterial( {color: 0x2194ce} );
            var marte = new THREE.Mesh( geometry3, material3 );

            var geometry4 = new THREE.SphereGeometry( 5, 68, 68 );
            var material4 = new THREE.MeshBasicMaterial( {color: 0x2194ce} );
            var jupiter = new THREE.Mesh( geometry4, material4 );

            var geometry5 = new THREE.SphereGeometry( 3, 32, 32 );
            var material5 = new THREE.MeshBasicMaterial( {color: 0x2194ce} );
            var saturno = new THREE.Mesh( geometry5, material5 );

            var geometry6 = new THREE.SphereGeometry( 2, 32, 32 );
            var material6 = new THREE.MeshBasicMaterial( {color: 0x2194ce} );
            var urano = new THREE.Mesh( geometry6, material6 );

            var geometry7 = new THREE.SphereGeometry( 1.8, 32, 32 );
            var material7 = new THREE.MeshBasicMaterial( {color: 0x2194ce} );
            var neptuno = new THREE.Mesh( geometry7, material7 );

            var geometryR = new THREE.RingGeometry( 1, 5, 32 );
            var materialR = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
            var ring = new THREE.Mesh( geometryR, materialR );
            
    // **********************************************************************
    
            function init (){
            scene.add(camera)
            renderer.setSize(WIDTH, HEIGHT);           
            controls = new THREE.OrbitControls(camera, renderer.domElement)

            container.appendChild(renderer.domElement);
            camera.position.set(0,20,100)
            controls.update()
           
            scene.add(sun)
            renderer.render(scene, camera)
            scene.add(ambientLight);
            pointLight.position.set(50,100,0)
            scene.add(pointLight);
            renderer.render(scene, camera)
            renderer.render(scene, camera)
            scene.add(mercury)
            scene.add(venus)
            scene.add(terra)
            scene.add(marte)
            scene.add(jupiter)
            scene.add(saturno)
            scene.add(urano)
            scene.add(neptuno)
            scene.add(ring);
            ring.rotation.x = Math.PI/2;
            console.log(camera.position);
            controls.update()
            
            renderer.render(scene, camera)
            

            }
            let offset = 0.2
            let offset2 = 0.2
            function animate() {
                
                requestAnimationFrame(animate)  
                t1 += 0.011
                t2 += 0.015
                t3 += 0.007
                t4 += 0.008
                t5 += 0.004
                t6 += 0.006
                t7 += 0.01
                t8 += 0.005
                controls.update()
                sun.rotation.x += 0.03;
                sun.rotation.y += 0.03;
                mercury.rotation.x -= 0.02;
                mercury.rotation.y -= 0.02;
                
                
                
                mercury.position.x = 30*Math.cos(t1);
                mercury.position.z = 30*Math.sin(t1); 
                venus.position.x = 35*Math.cos(t2);
                venus.position.z = 35*Math.sin(t2); 
                terra.position.x = 40*Math.cos(t3);
                terra.position.z = 40*Math.sin(t3); 
                marte.position.x = 45*Math.cos(t4);
                marte.position.z = 45*Math.sin(t4); 
                jupiter.position.x = 55*Math.cos(t5);
                jupiter.position.z = 55*Math.sin(t5); 
                saturno.position.x = 65*Math.cos(t6);
                saturno.position.z = 65*Math.sin(t6); 
                ring.position.x = 65*Math.cos(t6);
                ring.position.z = 65*Math.sin(t6); 
                urano.position.x = 75*Math.cos(t7);
                urano.position.z = 75*Math.sin(t7);
                neptuno.position.x = 85*Math.cos(t8);
                neptuno.position.z = 85*Math.sin(t8); 
                 
                renderer.render(scene, camera)
                }
                
            init()
            animate()