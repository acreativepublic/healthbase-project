// create and set up the scene, etc
			 var width = window.innerWidth;
			 var height = window.innerHeight;
			 var scene = new THREE.Scene();
			 var camera = new THREE.PerspectiveCamera(35, width / height, 1, 1500);
			 var renderer = new THREE.WebGLRenderer({antialias:true});
			 var time = 0;
			 var ORIGIN = new THREE.Vector3();

			 // urls of the images,
			 // one per half axis
			 var urls = [
	'/threejs/canary/pos-x.png',
	'/threejs/canary/neg-x.png',
	'/threejs/canary/pos-y.png',
	'/threejs/canary/neg-y.png',
	'/threejs/canary/pos-z.png',
	'/threejs/canary/neg-z.png'
];


			 // wrap it up into the object that we need
			 var cubemap = THREE.ImageUtils.loadTextureCube(urls);

			 // set the format, likely RGB
			 // unless you've gone crazy
			 cubemap.format = THREE.RGBFormat;

			 // following code from https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_cubemap.html
			 var shader = THREE.ShaderLib[ "cube" ];
			 shader.uniforms[ "tCube" ].texture = cubemap;

			 var material = new THREE.ShaderMaterial( {

				 fragmentShader: shader.fragmentShader,
				 vertexShader: shader.vertexShader,
				 uniforms: shader.uniforms,
				 depthWrite: false,
				 side: THREE.BackSide

			 });

			 var skybox = new THREE.Mesh( new THREE.CubeGeometry( 1000, 1000, 1000 ), material );

			 var ambient = new THREE.AmbientLight( 0xffffff );
			 scene.add(ambient);

			 var pointLight = new THREE.PointLight( 0xffffff, 2 );
			 scene.add( pointLight );

			 var reflectionMaterial = new THREE.MeshBasicMaterial({
				 color: 0xcccccc,
				 envMap: cubemap
			 });

			 var torus = new THREE.Mesh(
				 new THREE.TorusKnotGeometry(60,20,100),
				 reflectionMaterial
			 );

			 scene.add(torus);
			 scene.add(camera);
			 scene.add(skybox);

			 renderer.setSize(width, height);
			 document.body.appendChild(renderer.domElement);

			 function animate() {

				 time += 0.005;

				 camera.position.x = Math.sin(time) * 400;
				 camera.position.z = Math.cos(time) * 400;
				 camera.lookAt(ORIGIN);

				 renderer.render(scene,camera);
				 requestAnimationFrame(animate);
			 }

			 requestAnimationFrame(animate);
