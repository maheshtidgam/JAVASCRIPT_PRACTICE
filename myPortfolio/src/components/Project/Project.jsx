import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";
const projects = [
  {
    name: "WatchCraft.com",
    img: "watchcraft.png",
    link: "https://lucent-frangipane-e62ae6.netlify.app/",
    git: "https://github.com/AbhishekMandal1997/Federalism-Frontend_016-",
    about:
      " This is E-commerce website which provide all types of watches. This was a team project where I with my teammates had created.My task was to create footer and add animations and making it responsive,I  helped in the css part and some js functionality part.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      // <SiChakraui className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiHtml5/>HTML</p>,
      <p className={styles.stackIcon}><SiCss3/>CSS</p>,
      <p className={styles.stackIcon}><SiJavascript/>JAVASCRIPT</p>,
      

    ],
  },
  {
    name: "Taskmentor.com",
    img: "image.png",
    link: "https://66d484bf6274264bbbaf07c2--elaborate-cascaron-4f6cb5.netlify.app/#testimonials",
    git: "https://github.com/rampravesh9991/Server-Strikers_024",
    about:
      "It is an task management and time management website  to improve productivity. This was a team project where I with my teammates had created.My task was to do digital circular stopwatch timer  and time set  functionality, helped in the css part and some js functionality part",
    stacks: [
      ,
      <p className={styles.stackIcon}><SiHtml5/>HTML</p>,
      <p className={styles.stackIcon}><SiCss3/>CSS</p>,
      <p className={styles.stackIcon}><SiJavascript/>JAVASCRIPT</p>,
    ],
  },
  {
    name: "VisionBoard.com",
    img: "whiteboard.png",
    link: "https://unit4project.netlify.app/",
    git: "https://github.com/manojRawat5/Green-Coders_002",
    about:
    "This is online whiteboard website.This was a team project where I with my teammates had created.My task was to do add diffrent drawing shapes and their  functionality in whiteboard and help in the css part. ",
    stacks: [
      // <SiHtml5 className={styles.stackIcon} />,
      // <SiJavascript className={styles.stackIcon} />,
      // <SiCss3 className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiHtml5/>HTML</p>,
      <p className={styles.stackIcon}><SiCss3/>CSS</p>,
      <p className={styles.stackIcon}><SiJavascript/>JAVASCRIPT</p>,
    ],
  },
 
];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <Text as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
          Projects
        </Text>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
