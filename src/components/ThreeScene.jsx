"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const ThreeScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.HemisphereLight( 0xffffFF, 0xFFFFFF, 1 );
    scene.add( light );
    scene.background = new THREE.Color( 0x888888)

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed  = 0.6;
    controls.keys = {
      LEFT: 'ArrowLeft', //left arrow
      UP: 'ArrowUp', // up arrow
      RIGHT: 'ArrowRight', // right arrow
      BOTTOM: 'ArrowDown' // down arrow
    }




    camera.position.set( -18, 16, 3 );
    controls.target = new THREE.Vector3(-13, 15,0)

    camera.lookAt(new THREE.Vector3(-13, 15,0))
    controls.update()



    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      "owensharleen.gltf",
      (gltf) => {
        gltf.scene.scale.set(10, 10, 10); // Adjust scale as needed
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model", error);
      }
    );

    console.log(camera.position)

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update()
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={sceneRef} className="absolute top-0 left-0 w-screen h-screen" />
  );
};

export default ThreeScene;
