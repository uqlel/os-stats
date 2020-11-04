const { app, BrowserWindow, ipcMain} = require('electron')
var osu = require('node-os-utils')
function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  win.loadFile('index.html')
}

ipcMain.on('get-stats', function(event) {
  osu.cpu.usage()
  .then(cpuPercentage => {
      global.cpu = cpuPercentage
  })
  osu.mem.info()
  .then(info => {
      global.ram = 100 - Number(info.freeMemPercentage)
  })
  global.cpuModel = osu.cpu.model()
  global.cpuCount = osu.cpu.count()
});

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
