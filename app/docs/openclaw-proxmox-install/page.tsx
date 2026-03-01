import Link from 'next/link'

export default function OpenClawInstallPage() {
  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#0a0a0f',
      color: '#e0e0e0',
      lineHeight: 1.6,
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ 
          textAlign: 'center', 
          padding: '40px 0', 
          borderBottom: '2px solid #00d4aa',
          marginBottom: '40px'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#00d4aa', marginBottom: '10px' }}>∞ Dos Aguas</div>
          <div style={{ color: '#888', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Consulting</div>
          <h1 style={{ color: '#fff', fontSize: '1.8rem', marginTop: '20px' }}>OpenClaw Installation in Proxmox VM</h1>
        </header>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00d4aa', fontSize: '1.4rem', margin: '40px 0 20px', paddingBottom: '10px', borderBottom: '1px solid rgba(0, 212, 170, 0.3)' }}>Überblick</h2>
          
          <p style={{ marginBottom: '15px', color: '#b0b0b0' }}>Diese Anleitung beschreibt die einfachste Methode, OpenClaw in einer Proxmox VM zu installieren.</p>
          
          <div style={{ 
            background: 'rgba(0, 212, 170, 0.1)', 
            border: '1px solid rgba(0, 212, 170, 0.3)',
            padding: '20px',
            borderRadius: '8px',
            margin: '20px 0'
          }}>
            <strong style={{ color: '#00d4aa' }}>Voraussetzungen:</strong><br/>
            • Proxmox VE<br/>
            • Mindestens 4 GB RAM<br/>
            • 20 GB freier Speicherplatz<br/>
            • Internetverbindung
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00d4aa', fontSize: '1.4rem', margin: '40px 0 20px', paddingBottom: '10px', borderBottom: '1px solid rgba(0, 212, 170, 0.3)' }}>Schritt 1: VM erstellen</h2>
          
          <ol style={{ margin: '15px 0 15px 25px', color: '#b0b0b0' }}>
            <li style={{ marginBottom: '8px' }}>Im Proxmox Dashboard auf <code style={{ background: 'rgba(0, 212, 170, 0.1)', color: '#00d4aa', padding: '2px 6px', borderRadius: '4px' }}>Create VM</code> klicken</li>
            <li style={{ marginBottom: '8px' }}>Ubuntu 22.04 LTS als Betriebssystem wählen</li>
            <li style={{ marginBottom: '8px' }}>Ressourcen zuweisen: 2 CPU Kerne, 4 GB RAM, 20 GB Storage</li>
            <li style={{ marginBottom: '8px' }}>Netzwerk konfigurieren (DHCP oder statische IP)</li>
          </ol>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00d4aa', fontSize: '1.4rem', margin: '40px 0 20px', paddingBottom: '10px', borderBottom: '1px solid rgba(0, 212, 170, 0.3)' }}>Schritt 2: Ubuntu vorbereiten</h2>
          
          <p style={{ marginBottom: '15px', color: '#b0b0b0' }}>Mit SSH verbinden und System aktualisieren:</p>
          
          <pre style={{ 
            background: '#1a1a2e',
            border: '1px solid rgba(0, 212, 170, 0.2)',
            borderRadius: '8px',
            padding: '20px',
            overflowX: 'auto',
            margin: '15px 0'
          }}><code style={{ color: '#e0e0e0' }}>sudo apt update && sudo apt upgrade -y

sudo apt install -y curl git nodejs npm docker.io docker-compose</code></pre>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00d4aa', fontSize: '1.4rem', margin: '40px 0 20px', paddingBottom: '10px', borderBottom: '1px solid rgba(0, 212, 170, 0.3)' }}>Schritt 3: OpenClaw installieren</h2>
          
          <pre style={{ 
            background: '#1a1a2e',
            border: '1px solid rgba(0, 212, 170, 0.2)',
            borderRadius: '8px',
            padding: '20px',
            overflowX: 'auto',
            margin: '15px 0'
          }}><code style={{ color: '#e0e0e0' }}># Node.js 22 installieren
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# OpenClaw global installieren
sudo npm install -g openclaw

# OpenClaw initialisieren
openclaw init</code></pre>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00d4aa', fontSize: '1.4rem', margin: '40px 0 20px', paddingBottom: '10px', borderBottom: '1px solid rgba(0, 212, 170, 0.3)' }}>Schritt 4: Als Service einrichten</h2>
          
          <pre style={{ 
            background: '#1a1a2e',
            border: '1px solid rgba(0, 212, 170, 0.2)',
            borderRadius: '8px',
            padding: '20px',
            overflowX: 'auto',
            margin: '15px 0'
          }}><code style={{ color: '#e0e0e0' }}># Systemd Service erstellen
sudo tee /etc/systemd/system/openclaw.service > /dev/null <<EOF
[Unit]
Description=OpenClaw Gateway
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$HOME/.openclaw
ExecStart=/usr/bin/openclaw gateway start
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# Service aktivieren und starten
sudo systemctl daemon-reload
sudo systemctl enable openclaw
sudo systemctl start openclaw</code></pre>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00d4aa', fontSize: '1.4rem', margin: '40px 0 20px', paddingBottom: '10px', borderBottom: '1px solid rgba(0, 212, 170, 0.3)' }}>Schritt 5: Zugriff testen</h2>
          
          <p style={{ marginBottom: '15px', color: '#b0b0b0' }}>OpenClaw ist nun erreichbar unter:</p>
          
          <pre style={{ 
            background: '#1a1a2e',
            border: '1px solid rgba(0, 212, 170, 0.2)',
            borderRadius: '8px',
            padding: '20px',
            overflowX: 'auto',
            margin: '15px 0'
          }}><code style={{ color: '#e0e0e0' }}>http://VM-IP-ADDRESS:8080</code></pre>
        </div>

        <footer style={{ 
          textAlign: 'center', 
          padding: '40px 0', 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '60px'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00d4aa', marginBottom: '15px' }}>∞ Dos Aguas</div>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>© 2026 Dos Aguas Consulting. Alle Rechte vorbehalten.</p>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>Erstellt von: Luis | Odoo & ERP Spezialist</p>
        </footer>
      </div>
    </div>
  )
}
