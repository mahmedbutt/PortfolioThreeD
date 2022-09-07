import * as THREE from "three";
import React, { useState } from "react";
import { gsap } from "gsap";
// import GUI from "lil-gui";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { propTypes } from "react-bootstrap/esm/Image";
import { init } from "@emailjs/browser";

const Computer3DModel = (props) => {
  const threeDSpaceContainerRef = useRef();
  // const [ref, setRef] = useState(true);
  // const ref = useRef();
  // const sceneref = useRef();

  let scene;
  let camera;
  let light;
  let pointLight;
  let model;
  let screenMesh;
  let renderer;
  let controls;
  let screenVector = new THREE.Vector3();
  let screenBoundingBox = new THREE.Box3();

  // function init() {
  //   if (!props.theme) {
  //     debugger;
  //     sceneref.current.background.set(0x202020);
  //   } else if (props.theme) {
  //     sceneref.current.background.set(0xf6d4b1);
  //   }
  // }

  function modelAnimation(event) {
    // if (event.wheelDelta > 0 && event.wheelDelta < 10) {
    // gsap.to(camera.position, {
    //   z: 0,
    //   duration: 10,
    //   onUpdate: function () {
    //     camera.lookAt(0, 0, 0);
    //   },
    // });
    // gsap.to(camera.position, {
    //   x: 10,
    //   duration: 10,
    //   onUpdate: function () {
    //     camera.lookAt(0, 0, 0);
    //   },
    // });
    // } else if (event.wheelDelta < 0 && event.wheelDelta > -10) {
    gsap.to(camera.position, {
      z: 14,
      duration: 10,
      onUpdate: function () {
        camera.lookAt(0, 0, 0);
      },
    });
    gsap.to(camera.position, {
      x: -10,
      duration: 10,
      onUpdate: function () {
        camera.lookAt(0, 0, 0);
      },
    });
    // props.setAnimationState(false);

    // }
  }
  // console.log(props.theme);

  useEffect(() => {
    scene = new THREE.Scene();
    // sceneref.current = scene;
    scene.background = new THREE.Color(0xf6d4b1);

    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight
    );
    scene.add(camera);
    camera.position.set(0, 1, 1);

    light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
    pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(1.5, 8, 0.5);
    pointLight.intensity = 2;
    scene.add(pointLight);

    // const guiFunc = {
    //   camPos: () => {
    //     console.log(camera.position);
    //   },
    // };

    // const gui = new GUI();
    // gui.add(guiFunc, "camPos").name("Position");

    console.log(screenBoundingBox);
    // camera.position.set(screenVector);

    const bbox = new THREE.Box3Helper(screenBoundingBox);
    scene.add(bbox);

    const path = "modelComputer.glb";

    const loader = new GLTFLoader();
    loader.load(path, function (gltf) {
      model = gltf.scene;
      scene.add(model);
      // parseModel();
      model.traverse(function (obj) {
        if (obj instanceof THREE.Mesh) {
          if (obj.name.toLowerCase().includes("mesh_0")) {
            screenMesh = obj;
            screenBoundingBox.setFromObject(screenMesh, true);
            screenBoundingBox.getCenter(screenVector);
          }
        }
      });
    });

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    console.log(renderer.domElement);
    threeDSpaceContainerRef.current.appendChild(renderer.domElement);

    init();
    render();

    // controls = new OrbitControls(camera, renderer.domElement);
    // controls.minDistance = 2;
    // controls.maxDistance = 10;
    // controls.target.set(0, 0, -0.2);
    // controls.update();

    window.addEventListener("resize", onWindowResize);

    window.addEventListener("wheel", modelAnimation);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

      render();
    }

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
  }, []);

  return <div ref={threeDSpaceContainerRef} id="gui"></div>;
};

export default Computer3DModel;
