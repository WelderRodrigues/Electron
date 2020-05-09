const { app, BrowserWindow } = require("electron");

function createWindow() {
  let window = new BrowserWindow({
    width: 400,
    height: 300,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("index.html");

  //window.webContents.openDevTools();
}

app.whenReady().then(createWindow);
