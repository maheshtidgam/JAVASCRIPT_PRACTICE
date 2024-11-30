
import { useState, useEffect } from "react";

// import { TodoDate } from "./TodoDate";
export const TodoDate=()=>{
    const [dateTime, setDateTime] = useState("");

      //DAte and Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate}-${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return(
        <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
    )
}