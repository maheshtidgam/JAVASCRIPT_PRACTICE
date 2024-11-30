const express = require("express");
const fs = require("fs")
const app = express();

app.get("/", (req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) {
            return res.send("error occurred");
        }

            return res.send(data);

        });
});

    app.post("/movies", (req, res) =>{

        res.send("Movie created");
    });

    // app.get("/movie", (req, res) => {
    //         res.send([1, 2, 3, 4, 5]);
    //     });

        // FIX THIS: GET MOVIE BY ID: 1234
        // imdb.com/movie/
        app.get("/movie/:id", (req, res) => {
            const movieid=req.params.id;
            console.log("sending movie with id ",movieid);
            fs.readFile("./db.json","utf-8", (err,data)=>{
                if(err){
                    return res.send({
                        status:404,
                        message:"Movie not found"
                    })
                } 
                const db=JSON.parse(data );
                const movie=db.filter((movie)=>movie.id===Number(movieid))
                res.json(movie)
            });


            // const data=fs.readFileSync("./db.json", "utf-8");
            // const movies=JSON.parse(data);
            // const movie=movies.find((movie)=>movie.id===parseInt(movieid))
            // if(movie){
            //     return res.send(movie)
            // }
            // return res.send("Movie not found  ");
        });

            // app.get("/search", (req, res) =>{
            //     res.send({
            //         id: 1,
            //         name: "Deadpool",

            //     });
            // })

                app.listen(5000, () => {
                    console.log("server started on http://localhost:5000");
});
