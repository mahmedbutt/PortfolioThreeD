import * as THREE from "three";
import React from "react";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Computer3DModel = (props) => {
  const threeDSpaceContainerRef = useRef();
  let scene;
  let camera;
  let light;
  let pointLight;
  let model;
  let renderer;
  let controls;

  // function parseModel() {
  //   model.traverse(function (obj) {
  //     if (obj.isMesh) {
  //       if (obj.name.toLowerCase().includes("floor")) {
  //         modelDict.levelBoundingBox.setFromObject(obj, true);
  //         modelDict.floors.push(obj);
  //       }
  //     }
  //   });
  //   if (levelArray.length > 0) {
  //     modelState = true;
  //   }
  // }

  // function onSpaceLoaded() {
  //   parseModel();
  //   // props.setLevelArray(levelArray);
  //   if (modelState) {
  //     state = true;
  //     initCameras();
  //     // initEventHandlers();
  //     guiComponents();
  //   } else {
  //     state = false;
  //   }
  // }

  // function guiComponents() {
  //   const uniforms = sky.material.uniforms;
  //   uniforms["turbidity"].value = effectController.turbidity;
  //   uniforms["rayleigh"].value = effectController.rayleigh;
  //   uniforms["mieCoefficient"].value = effectController.mieCoefficient;
  //   uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

  //   const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
  //   const theta = THREE.MathUtils.degToRad(effectController.azimuth);

  //   sun.setFromSphericalCoords(1, phi, theta);

  //   uniforms["sunPosition"].value.copy(sun);

  //   renderer.toneMappingExposure = effectController.exposure;
  // }

  useEffect(() => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf6d4b1);

    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight
    );
    scene.add(camera);

    light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
    pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(1.5, 8, 0.5);
    pointLight.intensity = 2;
    scene.add(pointLight);

    // camera.position.set(
    //   18.55458700638743,
    //   4.676879722783437,
    //   0.09360238192941853
    // );
    // cam = camera;

    const path = "modelComputer.glb";

    const loader = new GLTFLoader();
    loader.load(path, function (gltf) {
      model = gltf.scene;
      console.log(model);
      scene.add(model);
      // onSpaceLoaded();
    });

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    threeDSpaceContainerRef.current.appendChild(renderer.domElement);

    render();

    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render); // use if there is no animation loop
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.target.set(0, 0, -0.2);
    controls.update();

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);

      // controls.update();
    }
  }, []);

  return <div ref={threeDSpaceContainerRef} id="gui"></div>;
};

export default Computer3DModel;
