// import { Text } from "@chakra-ui/react";
// import React from "react";
// import { Fade } from "react-awesome-reveal";
// import GitHubCalendar from "react-github-calendar";
// import styles from "./GithubStat.module.css";
// const GithubStat = () => {
//   return (
//     <div className={styles.gitBox} >
//       <Fade bottom>
//         <Text color="#383874" textAlign={"center"} mb={10} fontSize={{ base: "xl", md: "3xl" }}>Github Calender and Stats</Text>
//       <div className={styles.Github}>
//         <GitHubCalendar username="maheshtidgam" className="calender" />
//       </div>
//       {/* <div className={styles.Github}>
//         <a href="https://github.com/maheshtidgam" rel="noreferrer" target="_blank">
//           <img
//             alt="7oSkaaa's Github Stats"
//             src="https://github-readme-stats.vercel.app/api?username=chetantidgam123&show_icons=true&count_private=true&theme=outrun"
//             height="192px"
//           />
//         </a>
//       </div> */}
//       </Fade>
//     </div>
//   );
// };

// export default GithubStat;

import { Text } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import GitHubCalendar from "react-github-calendar";
import styles from "./GithubStat.module.css";

const GithubStat = () => {
  const username = "maheshtidgam"; // Make sure this is the correct GitHub username

  return (
    <div className={styles.gitBox}>
      <Fade bottom>
        <Text color="#383874" textAlign={"center"} mb={10} fontSize={{ base: "xl", md: "3xl" }}>
          Github Calendar and Stats
        </Text>
        
        {/* GitHub Contribution Calendar */}
        <div className={styles.Github}>
          <GitHubCalendar
            username={username}
            className="calendar"
            blockSize={15} // Adjust the block size if needed
            blockMargin={5} // Adjust the block margin if needed
            colorScheme="dark" // Customize the color scheme
          />
        </div>

        {/* Optional: GitHub Stats */}
        {/* <div className={styles.Github}>
          <a href={`https://github.com/${username}`} rel="noreferrer" target="_blank">
            <img
              alt={`${username}'s Github Stats`}
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&theme=outrun`}
              height="192px"
              loading="lazy"
            />
          </a>
        </div> */}
      </Fade>
    </div>
  );
};

export default GithubStat;
