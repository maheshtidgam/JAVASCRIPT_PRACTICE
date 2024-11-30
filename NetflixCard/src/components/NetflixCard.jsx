import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./seriesCard";
// import "../App.css";
const NetfixSeries = () => {
  return (
    <ul>
      {seriesData.map((currEl) => {
        return(
        <SeriesCard key={currEl.id} currEl={currEl}/>
        ) 
      })}
    </ul>
  );
};

export default NetfixSeries;
