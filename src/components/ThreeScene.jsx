'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import LoadingOverlay from '../components/LoadingOverlay';

const ThreeScene = (props) => {
  const path = props.path;
  const cameraPosX = props.cameraPosX ?? 0;
  const cameraPosY = props.cameraPosY ?? 20;
  const cameraPosZ = props.cameraPosZ ?? 30;

  const [loading, setLoading] = useState(true);
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    sceneRef.current.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0x000000);
    const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.2);
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.keys = {
      LEFT: 'ArrowLeft',
      UP: 'ArrowUp',
      RIGHT: 'ArrowRight',
      BOTTOM: 'ArrowDown',
    };

    camera.position.set(cameraPosX, cameraPosY, cameraPosZ);
    controls.target = new THREE.Vector3(cameraPosX, 10, 0);
    controls.update();

    // Post-processing setup
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Grayscale shader
    const grayscaleShader = {
      uniforms: {
        tDiffuse: { value: null },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
          gl_FragColor = vec4(10. * vec3(gray), color.a);
        }
      `
    };

    const grayscalePass = new ShaderPass(grayscaleShader);
    composer.addPass(grayscalePass);

    // const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 1.4, 0.01);
    // composer.addPass(bloomPass);


    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      setLoading(false);
    };

    const loader = new GLTFLoader(loadingManager);
    loader.load(
      path,
      (gltf) => {
        gltf.scene.scale.set(10, 10, 10);
        gltf.scene.position.set(0, 0, 0);

        const model = gltf.scene;
        model.scale.set(10, 10, 10);
        model.position.set(0, 0, 0);

        scene.add(gltf.scene);

        
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      composer.render();
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);

      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '50%';
      renderer.domElement.style.left = '50%';
      renderer.domElement.style.transform = 'translate(-50%, -50%)';
    };

    window.addEventListener('resize', handleResize);

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
