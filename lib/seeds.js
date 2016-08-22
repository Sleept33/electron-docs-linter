module.exports = [
  {
    name: 'clipboard',
    process: {main: true, renderer: true}
  },
  {
    name: 'crashReporter',
    process: {main: true, renderer: true}
  },
  {
    name: 'nativeImage',
    process: {main: true, renderer: true}
  },
  {
    name: 'NativeImage',
    process: {main: true, renderer: true},
    parentDoc: 'native-image'
  },
  {
    name: 'shell',
    process: {main: true, renderer: true}
  },
  {
    name: 'app',
    process: {main: true, renderer: false}
  },
  {
    name: 'autoUpdater',
    process: {main: true, renderer: false}
  },
  {
    name: 'BrowserWindow',
    process: {main: true, renderer: false}
  },
  {
    name: 'contentTracing',
    process: {main: true, renderer: false}
  },
  {
    name: 'dialog',
    process: {main: true, renderer: false}
  },
  {
    name: 'ipcMain',
    process: {main: true, renderer: false}
  },
  {
    name: 'globalShortcut',
    process: {main: true, renderer: false}
  },
  {
    name: 'Menu',
    process: {main: true, renderer: false}
  },
  {
    name: 'MenuItem',
    process: {main: true, renderer: false}
  },
  {
    name: 'powerMonitor',
    process: {main: true, renderer: false}
  },
  {
    name: 'powerSaveBlocker',
    process: {main: true, renderer: false}
  },
  {
    name: 'protocol',
    process: {main: true, renderer: false}
  },
  {
    name: 'screen',
    process: {main: true, renderer: true}
  },
  {
    name: 'session',
    process: {main: true, renderer: false}
  },
  {
    name: 'Session',
    process: {main: true, renderer: false},
    parentDoc: 'session'
  },
  {
    name: 'Cookies',
    process: {main: true, renderer: false},
    parentDoc: 'session'
  },
  {
    name: 'WebRequest',
    process: {main: true, renderer: false},
    parentDoc: 'session'
  },
  {
    name: 'systemPreferences',
    process: {main: true, renderer: false}
  },
  {
    name: 'Tray',
    process: {main: true, renderer: false}
  },
  {
    name: 'webContents',
    process: {main: true, renderer: false}
  },
  {
    name: 'WebContents',
    process: {main: true, renderer: false},
    parentDoc: 'web-contents'
  },
  {
    name: 'Debugger',
    process: {main: true, renderer: false},
    parentDoc: 'web-contents'
  },
  {
    name: 'process',
    process: {main: true, renderer: false}
  },
  {
    name: 'desktopCapturer',
    process: {main: false, renderer: true}
  },
  {
    name: 'ipcRenderer',
    process: {main: false, renderer: true}
  },
  {
    name: 'remote',
    process: {main: false, renderer: true}
  },
  {
    name: 'webFrame',
    process: {main: false, renderer: true}
  },
  {
    name: 'BrowserWindowProxy',
    process: {main: false, renderer: true},
    parentDoc: 'window-open'
  }
]