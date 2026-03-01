# Task für Hector

## Aufgabe: Dos Aguas CI anpassen

Die Intranet-Konzept HTML-Datei muss korrekt in die Website eingebunden werden.

### Problem:
- Die Datei `intranet-konzept.html` ist nicht korrekt erreichbar
- 404 Fehler beim Aufruf

### Datei:
- Quelle: `/public/docs/intranet-konzept.html`
- Ziel: Soll unter `https://dos-aguas.consulting/docs/intranet-konzept.html` erreichbar sein

### Aktueller Status:
- Die Datei liegt im `public/docs/` Ordner
- Der Link auf der Docs-Seite zeigt auf `/de/docs/intranet-konzept.html`
- Vercel Deployment läuft erfolgreich durch
- Aber die Datei ist nicht erreichbar (404)

### Mögliche Lösungen:
1. Prüfen, ob die Datei im Build-Output (.next) vorhanden ist
2. Eventuell muss die Datei in einen anderen Ordner verschoben werden
3. Oder der Link muss angepasst werden

### Ziel:
- Die HTML-Datei soll beim Klick auf "Intranet-Konzept ↗" in der Docs-Übersicht korrekt im neuen Fenster geöffnet werden
- Das Dos Aguas CI muss korrekt angewendet werden (Farben, Fonts, etc.)

### Datei liegt bereit unter:
`/root/.openclaw/workspace/website/public/docs/intranet-konzept.html`

Bitte analysieren und korrigieren.
