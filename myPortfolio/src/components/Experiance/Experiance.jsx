import { Ecard } from "./Ecard";
import styles from "./Experiance.module.css";
import { SiAngular, SiBootstrap, SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";
const projects = [
  {
    name: "Shipyaari.com",
    img: "shipyaari.JPG",
    link: "https://client.shipyaari.com",
    git: "access denied because of privecy policy",
    about:
      " This is Logistic website which provide platform of multiple delivery courier services. This is a live project where my responsibility ont this ia all the frontend developement using Angular Fremwork.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      // <SiChakraui className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiAngular />Angular</p>,
      <p className={styles.stackIcon}><SiBootstrap/>Bootstrap UI</p>,
      

    ],
  },
  {
    name: "Polymeds.com",
    img: "polymed.JPG",
    link: "https://polymed.totalytics.in",
    git: "access denied because of privecy policy",
    about:
      "It is an Website of Mentaining record and appointment of tour and visit. This is a live project where my responsibility ont this ia all the frontend developement using Angular Fremwork.",
    stacks: [
      ,
      <p className={styles.stackIcon}><SiAngular />Angular</p>,
      <p className={styles.stackIcon}><SiBootstrap/>Bootstrap UI</p>,
    ],
  },
  
];
export function ExperianceSection() {
  // return (
  //   <div className={styles.projectsSectionCont} id="experiance">
  //     <Fade bottom>
  //       <Text as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
  //         Live Projects
  //       </Text>
  //     </Fade>
  //     <div className={styles.projectGrid}>
  //       {projects.map((project) => (
  //         <Fade bottom>
  //           <Ecard {...project} />
  //         </Fade>
  //       ))}
  //     </div>
  //   </div>
  // );
}
