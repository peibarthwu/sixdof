'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import LoadingOverlay from '../components/LoadingOverlay';

const ThreeScene = (props) => {
  console.log("init three scene")
  const path = props.path;
  const cameraPosX = props.cameraPosX ?? 0; //left right
  const cameraPosY = props.cameraPosY ?? 20; //up down
  const cameraPosZ = props.cameraPosZ ?? 30; //foward backward

  const [loading, setLoading] = useState(true);

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

    const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    scene.add(light);
    scene.background = new THREE.Color(0x000000);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.keys = {
      LEFT: 'ArrowLeft', //left arrow
      UP: 'ArrowUp', // up arrow
      RIGHT: 'ArrowRight', // right arrow
      BOTTOM: 'ArrowDown', // down arrow
    };

    camera.position.set(cameraPosX, cameraPosY, cameraPosZ);
    controls.target = new THREE.Vector3(cameraPosX, 10, 0); //left up forward

    // camera.lookAt(new THREE.Vector3(-13, 15, 0));
    controls.update();

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      setLoading(false); // Hide the loading overlay
    };
    // Load GLTF Model
    const loader = new GLTFLoader(loadingManager);
    loader.load(
      path,
      (gltf) => {
        gltf.scene.scale.set(10, 10, 10); // Adjust scale as needed
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model', error);
      }
    );

    console.log(camera.position);

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();

      renderer.render(scene, camera);
    };

    animate();


    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update camera aspect ratio and renderer size
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);

      // Optionally re-center the canvas if needed
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '50%';
      renderer.domElement.style.left = '50%';
      renderer.domElement.style.transform = 'translate(-50%, -50%)';
    };

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cameraPosX, cameraPosY, cameraPosZ, path]);

  return (
    <>
      {loading && <LoadingOverlay />}
      
      <div ref={sceneRef} className="fixed top-0 left-0 w-screen h-screen" />
    </>
  );
};

export default ThreeScene;
