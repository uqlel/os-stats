var ipcRenderer = require('electron').ipcRenderer                   
var remote = require("electron").remote
ipcRenderer.send('get-stats')
var cpu = remote.getGlobal("cpu")
var ram = remote.getGlobal("ram") 
var cpuModel = remote.getGlobal("cpuModel")
var cpuCount = remote.getGlobal("cpuCount")