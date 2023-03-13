import express from "express";
import { client } from "./db.js";

const app = express();


app.use(express.static("public"));
app.use((req,res,next)=>{
    console.log(req.url);
    next();
});

app.get("/api/Planet",async (req,res)=> {
    const result = await (await client.query("SELECT * FROM planet"))
    res.send(result.rows);
})

app.listen(3000, ()=>{
    console.log("berhasil jalan");
});