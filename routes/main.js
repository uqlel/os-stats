var express = require("express");
var router = express.Router();
var osu = require('node-os-utils')
cpu = ""
ram = ""
router.get("/", async function(req,res){
    osu.cpu.usage()
    .then(cpuPercentage => {
    cpu = cpuPercentage
    })
    osu.mem.info()
    .then(info => {
        ram = 100 - Number(info.freeMemPercentage)
    })
    res.render("index", {
        CPU: cpu,
        RAM: ram
    });
});
module.exports = router;