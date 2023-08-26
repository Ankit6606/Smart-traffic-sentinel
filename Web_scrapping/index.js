const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const url = "https://parivahan.gov.in/parivahan//en/content/vehicle-related-services#";
const port = process.env.port || 3000;
const values =[];
const fetchData = async()=>{
    try{
        const result = await axios.get(url);
        let $ = await cheerio.load(result.data);
        $(
            "body > div.logo-header-section > div > div:nth-child(2)"
        ).each((i,e)=>{
            values.push($(e).text().trim());
        }
        )        
    }catch(err){
        console.log(err);
    }
};
fetchData();
app.get("/",(req,res)=>{
    res.send(values);
});
app.listen(port,()=>{
    console.log("Server is running at "+port);
});