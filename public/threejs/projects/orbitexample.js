


			if ( WEBGL.isWebGLAvailable() === false ) {
				document.body.appendChild( WEBGL.getWebGLErrorMessage() );
			}
      var loader = new THREE.GLTFLoader();


			var camera, controls, scene, renderer;
			init();
			//render(); // remove when using next line for animation loop (requestAnimationFrame)
			animate();

			function init() {






				scene = new THREE.Scene();

				//scene.fog = new THREE.FogExp2( 0xcccccc, 0.001);
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
				camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 200000 );
				camera.position.set(10, 10, 10 );

				// controls
				controls = new THREE.OrbitControls( camera, renderer.domElement );
				//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
				controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
				controls.dampingFactor = 0.25;
				controls.screenSpacePanning = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.08;
				controls.minDistance = 10;
				controls.target.set( 0, 10, 0 );
				controls.maxDistance = 80;
				controls
				controls.maxPolarAngle = Math.PI / 2;
				// world


				/*
				var geometry = new THREE.CylinderBufferGeometry( 0, 14, 280, 14, 140 );
				var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
				for ( var i = 0; i < 1000; i ++ ) {
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = Math.random() * 1600 - 800;
					mesh.position.y = -30;
					mesh.position.z = Math.random() * 1600 - 800;
					mesh.updateMatrix();
					mesh.matrixAutoUpdate = false;
					scene.add( mesh );
				}
*/
      /*  loader.load( 'threejs/basketballcourt/scene.gltf', function ( gltf ) {
        const root = gltf.scene;
        root.scale.set(4000, 4000, 4000);
        root.position.y = 2200;
				root.position.x = 0;
				root.position.z = 0;
        	scene.add( root);

        }, undefined, function ( error ) {

        	console.error( error );

        } );
				*/

				loader.load( 'threejs/bballcourt-western/bballcourt-western.gltf', function ( gltf ) {
					const root = gltf.scene;
					root.scale.set(130, 130, 130);
					root.position.y = 0;
					root.position.x = 0;
					root.position.z = 0;
						scene.add( root);

					}, undefined, function ( error ) {

						console.error( error );

					} );

					loader.load( 'threejs/Western/Western.gltf', function ( gltf ) {
	        const root1 = gltf.scene;
	        root1.scale.set(25, 25, 25);
	        root1.position.y = 1;
					root1.position.x = 0;
					root1.position.z = 0;
					degreeY = 0;
					root1.rotateY(THREE.Math.degToRad(degreeY));

	        	scene.add( root1);

	        }, undefined, function ( error ) {

	        	console.error( error );

	        } );
					/*
				loader.load( 'threejs/Western/Western.gltf', function ( gltf ) {
        const root1 = gltf.scene;
        root1.scale.set(300, 300, 300);
        root1.position.y = 2200;
				root1.position.x = 0;
				root1.position.z = 0;
				degreeY = 300;
				root1.rotateY(THREE.Math.degToRad(degreeY));

        	scene.add( root1);

        }, undefined, function ( error ) {

        	console.error( error );

        } );
*/

				// lights
				/*
				var light1 = new THREE.DirectionalLight( 0xcccccc );
				light1.position.set( -5, -5, -5 );
				scene.add( light1 );
				var light2 = new THREE.DirectionalLight( 0xcccccc );
				light2.position.set( 5, 5, 5);
				scene.add( light2 );
				*/
				var amblight = new THREE.AmbientLight(0x404040);
				amblight.intensity = .5;
				scene.add(amblight);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set( 0, 20, 0 );
spotLight.distance = 40;
spotLight.decay = 2;
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );
        var light3 = new THREE.PointLight( 0xcccccc, 1, 100 );
         light3.position.set( 400, 200,1 );
        scene.add( light3 );



				window.addEventListener( 'resize', onWindowResize, false );



			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function animate() {
				requestAnimationFrame( animate );
				controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

				render();
			}
			function render() {

        renderer.gammaOutput = true;
         renderer.gammaFactor = 2.2;

				renderer.render( scene, camera );

			}
