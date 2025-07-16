const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveFile: (dataURL) => ipcRenderer.invoke('save-file', dataURL),
  updateRPC: (state, details, largeText) => ipcRenderer.invoke('update-rpc', state, details, largeText)
});
