// import "../App.css"
export const SeriesCard=(props)=>{
  const color=props.currEl.rating >=8.5?"green":"red";
    return(
        <li key={props.id}>
          <div>
            <img src={props.currEl.img_url} alt="" width="40%" height="40%" />
          
          <h2>Name:{props.currEl.name}</h2>
          <h3 >Rating: <span style={{color}}>{props.currEl.rating }</span> </h3>
          {/* console.log(props.currEl.rating ) */}
          
          <p>Summery: {props.currEl.description}</p>
          <p>Genre:{props.currEl.genre}</p>
          <p>Cast:{props.currEl.cast}</p>
          <a href={props.currEl.watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
          </div>
        </li>
        )
     
}