const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        }
    });
    
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    mainWindow.menuBarVisible = false;
});

