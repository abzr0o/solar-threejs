import * as three from "https://unpkg.com/three/build/three.module.js";

import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

function init() {
	const suntexture = new three.TextureLoader().load(
		"https://i.ibb.co/bv9w0C7/sun.jpg"
	);
	const suntexturenormal = new three.TextureLoader().load(
		"https://i.ibb.co/pRkJFx3/sun-normal.jpg"
	);
	const murcurytexture = new three.TextureLoader().load(
		"https://i.ibb.co/Df8TQyn/mercury.png"
	);
	const murcurynormal = new three.TextureLoader().load(
		"https://i.ibb.co/M8m8f2V/murcury-normal.png"
	);

	const venustexture = new three.TextureLoader().load(
		"https://i.ibb.co/zGMYtdP/venus.jpg"
	);
	const venusnormal = new three.TextureLoader().load(
		"https://i.ibb.co/M8m8f2V/murcury-normal.png"
	);
	const earthtexture = new three.TextureLoader().load(
		"https://i.ibb.co/Cw7jxNZ/earth.png"
	);
	const earthnormal = new three.TextureLoader().load(
		"https://i.ibb.co/0J69TBK/earth-normal.png"
	);
	const marstexture = new three.TextureLoader().load(
		"https://i.ibb.co/r3LLzCW/mars.jpg"
	);
	const marsnormal = new three.TextureLoader().load(
		"https://i.ibb.co/1Zstypd/mars-normal.png"
	);
	const jeptexture = new three.TextureLoader().load(
		"https://i.ibb.co/M1RHX79/jep.jpg"
	);
	const jepnormal = new three.TextureLoader().load(
		"https://i.ibb.co/M8m8f2V/murcury-normal.png"
	);
	const sattexture = new three.TextureLoader().load(
		"https://i.ibb.co/NCwj33C/sat.png"
	);
	const satnormal = new three.TextureLoader().load(
		"https://i.ibb.co/ZhPfHfj/sat-normal.jpg"
	);
	const moontexture = new three.TextureLoader().load(
		"https://i.ibb.co/028sCqr/moon.jpg"
	);
	const moonnormal = new three.TextureLoader().load(
		"https://i.ibb.co/0ZDz5TL/moon-normal.png"
	);
	const ringtexture = new three.TextureLoader().load(
		"https://i.ibb.co/dc2hfhD/ring.png"
	);

	const secne = new three.Scene();

	const camera = new three.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	const renderer = new three.WebGL1Renderer({
		canvas: document.querySelector("#bg"),
	});

	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.position.setZ(30);

	function addstart() {
		const stars = new three.Mesh(
			new three.SphereGeometry(0.35),
			new three.MeshBasicMaterial({ color: 0xfffffff })
		);

		const [x, y, z] = Array(3)
			.fill()
			.map(() => three.MathUtils.randFloatSpread(500));
		stars.position.set(x, y, z);
		secne.add(stars);
	}

	Array(300).fill().forEach(addstart);

	renderer.render(secne, camera);
	//sun

	const sun = new three.Mesh(
		new three.SphereGeometry(20, 32, 32),
		new three.MeshStandardMaterial({
			emissive: 0xd14009,
			map: suntexture,
			normalMap: suntexturenormal,
		})
	);

	secne.add(sun);

	const venus = new three.Mesh(
		new three.SphereGeometry(0.9, 32, 32),
		new three.MeshStandardMaterial({
			map: venustexture,
			normalMap: venusnormal,
		})
	);
	secne.add(venus);

	venus.position.set(0, 0, 25);

	const earth = new three.Mesh(
		new three.SphereGeometry(1, 32, 32),
		new three.MeshStandardMaterial({
			map: earthtexture,
			normalMap: earthnormal,
		})
	);
	secne.add(earth);

	earth.position.set(0, 0, 28);

	const mars = new three.Mesh(
		new three.SphereGeometry(1, 32, 32),
		new three.MeshStandardMaterial({
			map: marstexture,
			normalMap: marsnormal,
		})
	);
	secne.add(mars);

	mars.position.set(0, 0, 33);

	secne.rotation.y = 30;

	const jep = new three.Mesh(
		new three.SphereGeometry(3, 32, 32),
		new three.MeshStandardMaterial({
			map: jeptexture,
			normalMap: jepnormal,
		})
	);

	secne.add(jep);

	jep.position.set(0, 0, 40);

	const saturn = new three.Mesh(
		new three.SphereGeometry(2.8, 32, 32),
		new three.MeshStandardMaterial({
			map: sattexture,
			normalMap: satnormal,
		})
	);

	const ring = new three.Mesh(
		new three.TorusGeometry(4.5, 1, 2, 200),
		new three.MeshStandardMaterial({
			map: ringtexture,
		})
	);
	secne.add(ring);
	secne.add(saturn);
	ring.rotation.x = 20;

	saturn.position.set(0, 0, 50);
	ring.position.set(0, 0, 50);
	const murcury = new three.Mesh(
		new three.SphereGeometry(0.3, 32, 32),
		new three.MeshStandardMaterial({
			map: murcurytexture,
			normalMap: murcurynormal,
		})
	);
	const moon = new three.Mesh(
		new three.SphereGeometry(0.3, 32, 32),
		new three.MeshStandardMaterial({
			map: moontexture,
			normalMap: moonnormal,
		})
	);

	secne.add(moon);
	moon.position.set(1.5, 0, 28);
	secne.add(murcury);

	murcury.position.set(0, 0, 23.2);

	const light = new three.SpotLight(0xfffffff, 0.8);
	const light2 = new three.SpotLight(0xfffffff, 0.8);
	const light3 = new three.SpotLight(0xfffffff, 0.8);
	const light4 = new three.SpotLight(0xfffffff, 0.8);
	const light5 = new three.SpotLight(0xfffffff, 0.8);
	const light6 = new three.SpotLight(0xfffffff, 0.8);

	secne.add(light);
	secne.add(light2);
	secne.add(light3);
	secne.add(light4);
	secne.add(light5);
	secne.add(light6);

	light.position.x = 30;
	light2.position.x = -30;
	light3.position.z = -30;
	light4.position.z = 30;
	light5.position.y = 30;
	light6.position.y = -30;

	const controls = new OrbitControls(camera, renderer.domElement);
	let t = 0;
	function animate() {
		requestAnimationFrame(animate);
		t += 0.01;
		murcury.position.x = 23.2 * Math.cos(t) + 0;
		murcury.position.z = 23.2 * Math.sin(t) + 0; // These to strings make it work
		earth.position.x = -28 * Math.cos(t * 2) + 0;
		earth.position.z = 28 * Math.sin(t * 2) + 0; // These to strings make it work
		venus.position.x = -25 * Math.cos(t / 2) + 0;
		venus.position.z = 25 * Math.sin(t / 2) + 0; // These to strings make it work
		mars.position.x = -33 * Math.cos(t / 5) + 0;
		mars.position.z = 33 * Math.sin(t / 5) + 0; // These to strings make it work
		jep.position.x = -40 * Math.cos(t / 1.1) + 0;
		jep.position.z = 40 * Math.sin(t / 1.1) + 0; // These to strings make it work
		saturn.position.x = -50 * Math.cos(t * 1.1) + 0;
		saturn.position.z = 50 * Math.sin(t * 1.1) + 0; // These to strings make it work
		moon.position.z = 28 * Math.sin(t * 2) + Math.cos(t * 2) + 2; // These to strings make it work
		moon.position.x = -28 * Math.cos(t * 2) - Math.sin(t * 2) + 2; // These to strings make it work
		moon.position.y = 1 * Math.sin(t * 2); // These to strings make it work
		ring.position.x = -50 * Math.cos(t * 1.1) + 0;
		ring.position.z = 50 * Math.sin(t * 1.1) + 0; // These to strings make it work
		murcury.rotation.x += 0.01;
		murcury.rotation.y += 0.01;
		ring.rotation.z += 0.01;
		sun.rotation.x += 0.002;
		sun.rotation.y += 0.001;
		earth.rotation.x += 0.02;
		earth.rotation.z += 0.01;
		earth.rotation.y += 0.001;
		saturn.rotation.x += 0.002;
		saturn.rotation.y += 0.001;
		jep.rotation.x += 0.002;
		jep.rotation.y += 0.001;
		mars.rotation.x += 0.002;
		mars.rotation.y += 0.001;
		venus.rotation.x += 0.002;
		venus.rotation.y += 0.001;
		moon.rotation.x += 0.002;
		moon.rotation.y += 0.001;

		controls.update();
		renderer.render(secne, camera);
	}
	animate();
}

init();
