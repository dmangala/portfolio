import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Works from '@/components/Works';
import {About}  from '@/components/About';
import  sg  from "../assets/sg.svg";
import  mazarine  from "../assets/mazarine.png";
import  koska  from "../assets/koska.jpg";
import  pop  from "../assets/pop.png";
/*
import test2 from '../fonts/60a11f286cce9b1be7c7fa18_PlusJakartaSans-Medium.woff';
import test3 from '../fonts/60a11f286cce9bf805c7fa19_PlusJakartaSans-Regular.woff';*/


const inter = Inter({ subsets: ['latin'] });

console.log(mazarine);
 

export default function Home() {
  return (
    <>
    <main className='main'>
      <div className="content">
        <div className="content-img --me animate__animated animate__backInLeft"><img src="img/me.png" /></div>
        <div className="content-txt animate__animated animate__backInRight">
          <h1 className='me'> Developpeur <br/> FullStack <span>.</span></h1>
          <h2>Passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises.<br /> <br />
         <span className='service'> Vous souhaitez créer un site web ou une plateforme sur-mesure, et recherchez un développeur
            full-stack expérimenté et proactif pour vous accompagner de la conception à la mise en ligne ?</span>
          </h2>
        </div>
      </div>  

        <div className={styles.center}>
          
          <div className={styles.thirteen}>
            Ils m'ont fait confiance
          </div>
        </div>

        <div className={styles.grid}>
          <a
           
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >

           <img src={sg.src} />
          </a>

          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >

            <img src={mazarine.src} />
          </a>

          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={koska.src} />
          </a>

          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
  
            <img src={pop.src} />
          </a>
        </div>
        </main>
        <div className="relative z-0 about ">
            <About />
        </div>
        <div className="relative z-0 experience">
            <Experience />
        </div>
        <div className="relative z-0 work">
            <Works />
        </div>
        <div className="relative z-0 contact">
            <Contact />
        </div>
        
    </>
  )
}
