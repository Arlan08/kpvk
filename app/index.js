const path = require('path')
const url  = require('url')
const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    win = new BrowserWindow({
       width: 1050,
       height: 700,
       icon: __dirname + "/img/iconkpvk.png"
    });

    win.setMenu(null);

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
    }));

    // win.webContents.openDevTools();

    win.on('close', () => {
        win = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
   app.quit();
});