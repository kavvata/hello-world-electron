const {app, BrowserWindow} = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow ({
        width: 600,
        height: 800,
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})
