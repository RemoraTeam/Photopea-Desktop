# Photopea-Desktop
Makes Photopea an app (requires internet)

  <h1>📦 Instrukcja: Photopea Desktop (Electron)</h1>

  <p>Ta aplikacja pozwala uruchomić Photopea jako natywną aplikację desktopową z obsługą Discord Rich Presence oraz zapisem do pliku.</p>

  <h2>🛠️ Wymagania wstępne</h2>
  <ul>
    <li>Node.js (zalecana wersja 18 lub wyższa)</li>
    <li>npm (zazwyczaj instalowany z Node.js)</li>
    <li>Git (opcjonalnie do pobrania repozytorium)</li>
  </ul>

  <h2>📁 Krok 1: Instalacja projektu</h2>
  <pre><code>git clone https://twoje-repo.git
cd photopea-electron
npm install</code></pre>

  <p>Lub jeśli masz tylko paczkę ZIP, rozpakuj ją i przejdź do folderu projektu:</p>

  <pre><code>cd photopea-electron
npm install</code></pre>

  <h2>▶️ Krok 2: Uruchomienie aplikacji</h2>
  <p>Wystartuj aplikację w trybie deweloperskim:</p>
  <pre><code>npm start</code></pre>

  <h2>🏗️ Krok 3: Budowanie aplikacji</h2>
  <p>Budowanie aplikacji dla systemu, na którym aktualnie jesteś:</p>
  <pre><code>npm run build</code></pre>

  <p>Wyniki znajdziesz w folderze <code>dist/</code>.</p>

  <h2>💡 Informacje o ikonach</h2>
  <ul>
    <li><strong>Windows:</strong> <code>ikona.ico</code></li>
    <li><strong>macOS:</strong> <code>ikona.icns</code></li>
    <li><strong>Linux:</strong> <code>icon.png</code></li>
  </ul>

  <h2>🌍 Budowanie dla różnych systemów</h2>
  <p>
    Aby zbudować aplikację na inne systemy operacyjne:
  </p>
  <ul>
    <li><strong>Windows ➜ Linux:</strong> możliwe</li>
    <li><strong>Windows ➜ macOS:</strong> ❌ niemożliwe bez macOS (Apple restrykcje)</li>
    <li><strong>macOS ➜ Windows/Linux:</strong> możliwe</li>
    <li><strong>Linux ➜ Windows:</strong> wymaga Wine</li>
  </ul>

  <p>Dla pełnego multi-platformowego buildowania użyj GitHub Actions (CI/CD) lub Docker.</p>

  <h2>📂 Struktura projektu</h2>
  <pre><code>photopea-electron/
├── main.js
├── preload.js
├── ikona.ico
├── package.json
├── node_modules/
└── dist/ (tworzony po buildzie)</code></pre>

  <h2>📬 Masz pytania?</h2>
  <p>Skontaktuj się z nami na <a href="https://dc.gg/matisio">Discordzie</a> lub na maila <a href="mailto:iammatisio@gmail.com">iammatisio@gmail.com</a></p>
