const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const RPC = require('discord-rpc');

// Discord RPC
const CLIENT_ID = '1383776567901159494';
RPC.register(CLIENT_ID);
const rpc = new RPC.Client({ transport: 'ipc' });

let win;
let currentLang = 'en';

// Język systemowy
function getLanguage() {
  const lang = (Intl.DateTimeFormat().resolvedOptions().locale || 'en').toLowerCase();
  return lang.startsWith('pl') ? 'pl' : 'en';
}

// Tłumaczenia
const translations = {
  pl: {
    editing: "Projekt:",
    details: "Używa Photopea",
    largeText: "Edytor Photopea"
  },
  en: {
    editing: "Project:",
    details: "Using Photopea",
    largeText: "Photopea Editor"
  }
};

// Utwórz okno
function createWindow() {
  win = new BrowserWindow({
    width: 1150,
    height: 700,
    icon: path.join(__dirname, 'ikona.ico'), // ścieżka do ikony
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  win.loadURL('https://www.photopea.com');
  win.setMenu(null);

  win.on('closed', () => {
    win = null;
  });

  // Obsługa F11 do fullscreen
  win.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      event.preventDefault();
    }
  });
}

// Aktualizacja statusu Discord RPC
function updatePresence(title = 'project') {
  const t = translations[currentLang];
  if (!win || win.isDestroyed()) return;

  rpc.setActivity({
    state: `${t.editing} ${title}`,
    details: t.details,
    largeImageKey: 'photopea',
    largeImageText: t.largeText,
    instance: false
  });
}

// Inicjalizacja RPC
function initRPC() {
  currentLang = getLanguage();

  rpc.on('ready', () => {
    updatePresence("Photopea");

    setInterval(() => {
      if (!win || win.isDestroyed() || !win.webContents) return;

      win.webContents.executeJavaScript(`
        (function() {
          const el = document.querySelector('.panelhead .active');
          return el ? el.getAttribute('title') : "project";
        })()
      `).then((title) => {
        updatePresence(title);
      }).catch(console.error);
    }, 10000);
  });

  rpc.login({ clientId: CLIENT_ID }).catch(console.error);
}

// Start aplikacji
app.whenReady().then(() => {
  createWindow();
  initRPC();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Zamknięcie aplikacji
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
