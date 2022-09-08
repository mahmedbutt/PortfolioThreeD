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
  // const [ref, setRef] = useState(props.theme);
  const ref = useRef();
  const sceneref = useRef();

  let scene;
  let camera;
  let light;
  let pointLight;
  let model;
  let screenMesh;
  let renderer;
  let controls;
  let screenVector = new THREE.Vector3();

  ref.current = props.theme;

  function setTheme(value) {
    if (!value) {
      sceneref.current.background.set(0x202020);
    } else {
      sceneref.current.background.set(0xf6d4b1);
    }
  }

  function modelAnimation(event) {
    if (event.wheelDelta > 0) {
      gsap.to(model.rotation, {
        y: 0,
        duration: 1,
      });
      gsap.to(camera.position, {
        z: 0,
        duration: 2,
        onComplete: () => {
          props.setAnimationState(true);
        },
      });
    } else if (event.wheelDelta < 0) {
      gsap.to(model.rotation, {
        y: 1,
        duration: 2,
        onComplete: () => {
          props.setAnimationState(false);
        },
      });
      gsap.to(camera.position, {
        z: 8,
        duration: 5,
      });
    }
  }

  useEffect(() => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf6d4b1);
    sceneref.current = scene;

    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight
    );
    scene.add(camera);
    // camera.position.set(0, 1, 1);

    light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
    pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(1.5, 8, 0.5);
    pointLight.intensity = 2;
    scene.add(pointLight);

    const path = "modelComputer.glb";

    const loader = new GLTFLoader();
    loader.load(path, function (gltf) {
      model = gltf.scene;
      scene.add(model);
      model.traverse(function (obj) {
        if (obj instanceof THREE.Mesh) {
          if (obj.name.toLowerCase().includes("mesh_0")) {
            screenMesh = obj;
            screenMesh.getWorldPosition(screenVector);
            var boundingBox = new THREE.Box3();
            var mesh = screenMesh;
            mesh.updateMatrixWorld(true);
            boundingBox.copy(mesh.geometry.boundingBox);
            boundingBox.applyMatrix4(mesh.matrixWorld);
            boundingBox.getCenter(screenVector);
            camera.position.set(
              screenVector.x,
              screenVector.y,
              screenVector.z + 1.5
            );
          }
        }
      });
    });

    setTimeout(function () {
      props.setLoading(false);
    }, 3000);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    threeDSpaceContainerRef.current.appendChild(renderer.domElement);

    init();
    render();

    // controls = new OrbitControls(camera, renderer.domElement);
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

  useEffect(() => {
    setTheme(ref.current);
  }, [ref.current]);

  return (
    <div style={{ width: 100 }} ref={threeDSpaceContainerRef} id="gui"></div>
  );
};

export default Computer3DModel;
