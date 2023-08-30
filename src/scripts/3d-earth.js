import * as THREE from "three";

// setup the canvas for rendering 3d earth
const canvasContainer = document.querySelector(".webgl-container");
const canvas = document.querySelector(".webgl");

//customised GLSL shader using json format
const EarthShader = {
  vertexShader: [
    "varying vec2 vertexUV;",
    "varying vec3 vertexNormal;",

    "void main() {",

    "vertexUV = uv;",
    "vertexNormal = normalize(normalMatrix * normal);",
    "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);",
    "}",
  ].join("\n"),

  fragmentShader: [
    "uniform sampler2D globeTexture;",

    "varying vec2 vertexUV;",
    "varying vec3 vertexNormal;",

    "void main() {",

    "float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));",
    "vec3 atomosphere = vec3(0.0, 0.0, 0.3) * pow(intensity, 1.5); // first parameter determines the ambient color",

    "gl_FragColor = vec4(atomosphere + texture2D(globeTexture, vertexUV).xyz, 1.0 );",
    "}",
  ].join("\n"),
};

const AtomosphereShader = {
  vertexShader: [
    "varying vec3 vertexNormal;",

    "void main() {",
    "vertexNormal = normalize(normalMatrix * normal);",
    "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);",
    "}",
  ].join("\n"),

  fragmentShader: [
    "varying vec3 vertexNormal;",

    "void main() {",
    "float intensity = pow(0.4 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);",
    "gl_FragColor = vec4(0.6,0.6,1.0,1.0) * intensity;",
    "}",
  ].join("\n"),
};

// scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
// camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  canvasContainer.offsetWidth / canvasContainer.offsetHeight,
  0.1,
  1000
);
camera.position.z = 10; //position camera in appropriate distance
// renderer setup
const renderer = new THREE.WebGLRenderer({
  canvas: canvas, // choose the canvas to render this mesh
  antialias: true, // turn on antialias to smooth the edges
});
renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// create a sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader: EarthShader.vertexShader,
    fragmentShader: EarthShader.fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader().load("./src/images/earth-uv-map.webp"),
      },
    },
  })
);

// create an atomosphere
const atomosphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader: AtomosphereShader.vertexShader,
    fragmentShader: AtomosphereShader.fragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  })
);
atomosphere.scale.set(1.1, 1.1, 1.1);

// add the atomosphere to the scene
scene.add(atomosphere);

const group = new THREE.Group();
group.add(sphere);
scene.add(group);
//set up automatic rotation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.004;
  //gsap.to() is used to animate the globe
  gsap.to(group.rotation, {
    x: mouse.y * 0.5,
    y: mouse.x * 0.7,
    duration: 2,
  });
}
//set up mouse to read it's movement
const mouse = {
  x: undefined,
  y: undefined,
};
addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  mouse.y = (event.clientY / innerHeight) * 2 - 1;
  // console.log(mouse);
});
animate();
