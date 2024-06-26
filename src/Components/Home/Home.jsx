import React, { useEffect } from 'react'
import './Home.css'
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import moonImage from "../../images/moon.jpg"
import venusImage from "../../images/venus.jpg"
import spaceImage from "../../images/space.jpg"
import { Typography } from "@mui/material"
import TimeLine from '../TimeLine/TimeLine';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({timelines, youtubes, skills}) => {

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // camera.position.set(0.5, 1, 20);
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    // venus.position.set(6, 3.5, 5);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 60);
    const pointLight2 = new THREE.PointLight(0xffffff, 2);

    pointLight.position.set(8, 5, 5);
    pointLight.position.z = 4;
    pointLight2.position.set(-8, -5, -5);

    // const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    camera.position.z = 10;
    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if(skillsBox){
        if (window.scrollY > 1500) {
          skillsBox.style.animationName = "homeskillsBoxAnimationOn";
        } else {
          skillsBox.style.animationName = "homeskillsBoxAnimationOff";
        }
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>Y</p>
          <p>A</p>
          <p>S</p>
          <p>H</p>
          <p>V</p>
          <p>E</p>
          <p>N</p>
          <p>D</p>
          <p>R</p>
          <p>A</p>
        </Typography>

        <div className="homeCanvasBox">
          {/* <Typography variant="h2">DESIGNER</Typography> */}
          <Typography variant="h2">FULL STACK DEVELOPER</Typography>
          <Typography variant="h2">FRONTEND DEVELOPER</Typography>
          <Typography variant="h2">iOS DEVELOPER</Typography>
          <Typography variant="h2">BACKEND DEVELOPER</Typography>
          <Typography variant="h2">ANDROID DEVELOPER</Typography>
          {/* <Typography variant="h2">TEACHER</Typography>
          <Typography variant="h2">CONTENT CREATOR</Typography> */}
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        {/* <TimeLine timelines={[1, 2, 3, 4]} /> */}
        <TimeLine timelines={timelines && timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills && skills.image1.url} alt="Face1" />
            {/* <img src="https://w.forfun.com/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg?w=300" alt="Face1" /> */}
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills && skills.image2.url} alt="Face2" />
            {/* <img src="https://w.forfun.com/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg?w=300" alt="Face1" /> */}
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills && skills.image3.url} alt="Face3" />
            {/* <img src="https://w.forfun.com/fetch/6f/6f59f50f49aafa9a10360c6b3a01021a.jpeg?w=300" alt="Face3" /> */}
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills && skills.image4.url} alt="Face4" />
            {/* <img src="https://w.forfun.com/fetch/6b/6b47d1aacc58d7dacce1324d78f060d3.jpeg?w=300" alt="Face4" /> */}
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills && skills.image5.url} alt="Face5" />
            {/* <img src="https://w.forfun.com/fetch/b4/b4d430320229744245679e19e50b6f03.jpeg?w=300" alt="Face5" /> */}
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills && skills.image6.url} alt="Face6" />
            {/* <img src="https://w.forfun.com/fetch/b8/b8a9586dd1f767ede1a9e0b6970d5296.jpeg?w=300" alt="Face6" /> */}
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>

      {/* <div className="homeYoutube">
        <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

        <div className="homeYoutubeWrapper">
          {youtubes && youtubes.map((item) => (
            <YoutubeCard
              image="https://w.forfun.com/fetch/b4/b4d430320229744245679e19e50b6f03.jpeg?w=300"
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
            ))}
        </div>
      </div> */}
    </div>
  )
}

export default Home
