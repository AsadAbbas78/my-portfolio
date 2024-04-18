import Image from "next/image";

import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Brand from "./components/brand";
import Client from "./components/client";
import Work from "./components/work";
import Skill from "./components/skill";
import Achive from "./components/achive";
import Contact from "./components/contact";



export default function Home() {
  return (
   <div>
    
    <Hero/>
    <About/>
    <Project/>
    <Brand/>
    <Client/>
    <Work/>
    <Skill/>
    <Achive/>
    <Contact/>
    
   </div>
  );
}
