# Original Gap Log
## Commandeur Consulting – Website Rebuild

**Erstellt:** 2026-04-26  
**Zweck:** Verbindliche Quelldokumentation für den 1:1-Nachbau des Originals. Kein Builder-Dokument – nur Maßstab.

---

## 1. Zieldefinition

**Ziel:** 1:1-Kopie der bestehenden Website commandeurconsulting.de  
**Keine freie Interpretation.** Kein eigenes Design, keine „Verbesserungen" ohne explizite Freigabe.

### Paritätskriterien

| Kriterium | Verbindlich |
|---|---|
| Farbwelt | Ja – Dark/Blue Corporate, tiefdunkler Hintergrund, Blautöne |
| Layout-Struktur | Ja – Sektionsaufbau, Reihenfolge, Proportionen |
| Bildsektionen | Ja – große Vollbild- oder Halbbildsektionen mit echten Fotos |
| Overlay-Karten | Ja – Karten, die über Bildabschnitte gelegt sind |
| Blaue Panels | Ja – Sektionen mit farbigem Hintergrund (blau/dunkelblau) |
| Portrait / Person | Ja – Veronika Commandeur mit Foto und Titel |
| Typografie / Abstände | Ja – Proportionen und Weißraum entsprechen Original |
| Mobile Layout | Ja – Stacking, Schriftgrößen, Abstände für Mobile |
| Navigation | Ja – Aufbau, Links, Kontaktinfos im Header |
| Footer | Ja – 3-Spalten-Struktur, Inhalte, Markierung |
| 3D-Hero-Geometrie | Wird zuletzt umgesetzt (separater Effektblock) |
| Scroll-/Slideshow-Effekte | Werden zuletzt umgesetzt (separater Effektblock) |

---

## 2. Globale Gaps

### 2.1 Hero / Header

- **Original:** Hero-Bereich mit animierter 3D-/geometrischer Slideshow (drehende oder gleitende Formen, sichtbar beim Laden und Scrollen)
- **Rebuild:** Rein textlicher Hero ohne visuelle Tiefe oder Bewegung
- **Status:** Bewusst zurückgestellt – wird in GG-029-BUILD umgesetzt

### 2.2 Bildsektionen

- **Original:** Mehrere Sektionen mit großen Hintergrundfotos oder eingebetteten Bildern (Büro, Stadt, Portrait)
- **Rebuild:** Keine Bilder in Sektionen außer Logo/Brand-Assets – keine Bildsektionen vorhanden
- **Gap:** Fehlend auf allen Seiten

### 2.3 Overlay-Karten

- **Original:** Karten oder Info-Blöcke, die über oder neben Bildbereiche gesetzt sind (halbtransparent oder mit Rahmen auf Bildhintergrund)
- **Rebuild:** Karten sind normale CSS-Boxen auf einfarbigem Hintergrund
- **Gap:** Overlay-Mechanik fehlt vollständig

### 2.4 Blaue Panels / Farbige Sektionen

- **Original:** Sektionen mit deutlich unterschiedlichem Hintergrund (tiefes Blau, dunkleres Panel) als Kontrast zu den dunklen Standardsektionen
- **Rebuild:** Alle Sektionen verwenden denselben dunkelblauen Hintergrund ohne klare visuelle Trennung
- **Gap:** Panel-Differenzierung fehlt

### 2.5 Portrait / Über uns

- **Original:** Foto von Veronika Commandeur prominently eingebunden mit Name, Titel, ggf. Zitat
- **Rebuild:** Nur Text, kein Bild eingebunden (obwohl Asset `veronika-commandeur.jpg` vorhanden)
- **Gap:** Foto-Sektion fehlt

### 2.6 Mobile Proportionen

- **Original:** Mobile-Darstellung mit angepassten Abständen, gestackten Spalten, verkleinerten Headings
- **Rebuild:** Responsive Basics vorhanden, aber noch nicht auf Original-Proportionen kalibriert
- **Gap:** Mobile-Feinabstimmung fehlt

### 2.7 Scroll- und Slideshow-Effekte

- **Original:** Scroll-basierte Übergänge, Hero-Slideshow, ggf. Parallax-Elemente
- **Rebuild:** Kein Scroll-Effekt implementiert
- **Status:** Bewusst zurückgestellt – wird in GG-029-BUILD umgesetzt

---

## 3. Seitenweise Gap-Liste

---

### 3.1 Startseite (index.html)

**Original sieht so aus:**
- Hero-Bereich mit 3D-geometrischer Animation/Slideshow im Hintergrund
- Firmenname + Tagline + Einleitungstext + CTA-Button
- Darunter 4 Service-Karten (Titel + Icon + Beschreibungstext)
- Statement-/Zitat-Block (dunkleres Panel, zentriert)
- Kontaktformular-Sektion

**Aktueller Stand weicht so ab:**
- Hero ist rein textlich, kein visueller Hintergrund / keine Bewegung
- Service-Karten vorhanden, aber kein bildlicher Kontext dahinter
- Statement-Block vorhanden, aber kein differenzierter Panel-Hintergrund erkennbar
- Kontaktformular strukturell vorhanden

**Was konkret geändert werden muss:**

| Element | Änderung | Priorität | Task |
|---|---|---|---|
| Hero Hintergrund | Visuelle Tiefe / Bild oder Panel hinter Text-Hero | MUSS | GG-024 |
| Service-Karten Sektion | Panel-Hintergrund (blau/dunkel) hinzufügen | MUSS | GG-024 |
| Statement-Block | Klaren Kontrast-Panel-Hintergrund setzen | MUSS | GG-024 |
| Hero 3D-Geometrie | Animierte Geometrie-Slideshow | OPTIONAL (letzter Block) | GG-029 |

---

### 3.2 Leistungen (leistungen.html)

**Original sieht so aus:**
- Hero mit H1 „Commandeur Consulting" (eyebrow) + H2 Headline + Leadtext
- 3 Leit-Karten mit Titel UND Absatztext darunter
- 5 Leistungs-Detailblöcke: Titel + 2 Absätze + CTA-Button „Sprechen Sie uns an"
- Kontakt-CTA-Sektion am Seitenende
- Ggf. Bildbegleitung oder geteilte Bild-/Text-Sektionen bei Leistungsblöcken

**Aktueller Stand weicht so ab:**
- Leit-Karten vorhanden, aber Absatztext unter Kartentitel fehlt laut original-content.md
- CTA-Buttons in Leistungsblöcken lauten „Kontakt aufnehmen" statt „Sprechen Sie uns an"
- Keine Bildbegleitung bei Leistungsblöcken
- Sektions-Trennung und Panel-Differenzierung fehlt

**Was konkret geändert werden muss:**

| Element | Änderung | Priorität | Task |
|---|---|---|---|
| Leit-Karten | Absatztext unter Kartentitel ergänzen | MUSS | GG-025 |
| CTA-Buttons | Text auf „Sprechen Sie uns an" korrigieren | MUSS | GG-025 |
| Panel-Hintergründe | Sektionstrennungen durch Farbwechsel | MUSS | GG-025 |
| Bildbegleitung | Bild-/Text-Splits bei Leistungsblöcken prüfen | SOLLTE | GG-025 |

---

### 3.3 Recruiting-Prozess (recruiting-prozess.html)

**Original sieht so aus:**
- Hero mit H1 + 2 Absätze Einleitungstext
- 3 Leit-Karten mit Titel UND Absatztext
- Prozessschritte (01–06) mit Nummerierung, Titel und Text
- Kontakt-CTA-Sektion am Seitenende
- Sektionskopf „Maßgeschneiderte Talente – Unser Recruiting-Prozess" korrekt vorhanden

**Aktueller Stand weicht so ab:**
- Leit-Karten vorhanden, aber Absatztext fehlt laut original-content.md
- Prozessschritte strukturell vorhanden
- Panel-Differenzierung und Bildakzente fehlen
- Mobile Proportionen der Prozessschritte nicht kalibriert

**Was konkret geändert werden muss:**

| Element | Änderung | Priorität | Task |
|---|---|---|---|
| Leit-Karten | Absatztext unter Kartentitel ergänzen | MUSS | GG-026 |
| Prozessschritte | Visuelle Differenzierung / abwechselnde Panels | SOLLTE | GG-026 |
| Bildbegleitung | Bildabschnitt für Hero oder Sektion prüfen | SOLLTE | GG-026 |
| Mobile | Prozessschritte mobile kalibrieren | MUSS | GG-028 |

---

### 3.4 Über uns (ueber-uns.html)

**Original sieht so aus:**
- Hero mit H1 + Untertitel
- Statement-Block: Hauptaussage + Detailtext
- Portrait-Sektion: Foto Veronika Commandeur + Name + Titel „Geschäftsführerin"
- Grundsätze (Verbindlichkeit, Transparenz, Diskretion, Fokus, Langfristige Partnerschaften) mit Beschreibungstext
- CTA-Button „Erfahren Sie mehr"
- Abschluss-Zitat „Zusammenarbeit ist eine Entscheidung."

**Aktueller Stand weicht so ab:**
- Portrait-Sektion fehlt vollständig (Asset `veronika-commandeur.jpg` vorhanden, aber nicht eingebunden)
- Statement-Block vorhanden, aber ohne Bild-Kontext oder Panel-Differenzierung
- Grundsätze-Sektion strukturell vorhanden
- Abschluss-Zitat fehlt oder ist nicht als eigener Block umgesetzt

**Was konkret geändert werden muss:**

| Element | Änderung | Priorität | Task |
|---|---|---|---|
| Portrait-Sektion | Foto Veronika Commandeur + Name + Titel einbinden | MUSS | GG-027 |
| Abschluss-Zitat | Als eigenen Block umsetzen | MUSS | GG-027 |
| Panel-Hintergründe | Sektionstrennungen differenzieren | MUSS | GG-027 |
| Statement-Block | Ggf. Bildbegleitung prüfen | SOLLTE | GG-027 |

---

### 3.5 Kontakt (kontakt.html)

**Original sieht so aus:**
- Hero: „Commandeur Consulting" (eyebrow) + H2 „Der nächste Schritt" + Einleitungstext + CTA „Anrufen"
- 3 Kontakt-Info-Karten: Persönliches Treffen / Anrufen / Schreiben
- Kontaktformular mit vollständigen Feldern inkl. Dateiupload und Datenschutz-Checkbox
- Bildabschnitt oder Panel im Hintergrund

**Aktueller Stand weicht so ab:**
- Struktur und Felder weitgehend vorhanden
- Kontakt-Info-Karten vorhanden
- Panel-Differenzierung fehlt
- Mobile Formular nicht vollständig kalibriert

**Was konkret geändert werden muss:**

| Element | Änderung | Priorität | Task |
|---|---|---|---|
| Mobile Formular | Felder, Abstände, Labels für Mobile kalibrieren | MUSS | GG-028 |
| Panel-Hintergründe | Sektionstrennungen differenzieren | MUSS | GG-028 |
| Info-Karten | Proportionen und Abstände prüfen | SOLLTE | GG-028 |

---

## 4. Korrigierte Umsetzungsreihenfolge

| Task-ID | Scope | Inhalt |
|---|---|---|
| GG-024-BUILD | Startseite | Layout 1:1 – Hero, Karten, Statement, Kontaktformular |
| GG-025-BUILD | Leistungen | Layout 1:1 – Leit-Karten mit Text, Leistungsblöcke, korrekte CTAs |
| GG-026-BUILD | Recruiting-Prozess | Layout 1:1 – Leit-Karten mit Text, Prozessschritte, Panels |
| GG-027-BUILD | Über uns | Layout 1:1 – Portrait Veronika, Grundsätze, Abschluss-Zitat |
| GG-028-BUILD | Kontakt + Mobile | Kontaktseite finalisieren + Mobile-Feinabstimmung alle Seiten |
| GG-029-BUILD | Effektblock | 3D-Geometrie, Hero-Slideshow, Scroll-Effekte – als finaler Block |

**Begründung Reihenfolge:**  
Statisches Layout muss zuerst auf allen Seiten 1:1 stimmen.  
Erst wenn alle Layouts korrekt sind, werden Animationen und Effekte aufgesetzt.  
So werden keine falschen Layouts animiert.

---

## 5. Assets-Inventar

| Asset | Pfad | Status |
|---|---|---|
| Logo | frontend/assets/brand/logo-commandeur-consulting.png | Vorhanden |
| Brand-Mark | frontend/assets/brand/brand-mark-cc.png | Vorhanden |
| Portrait Veronika | frontend/assets/images/veronika-commandeur.jpg | Vorhanden, noch nicht eingebunden |
| Icons (Services) | frontend/assets/icons/ | Vorhanden (SVG) |
| Bilder für Sektionen | frontend/assets/images/ | Zu prüfen – ggf. fehlen Foto-Assets |

---

## 6. Verbindliche Sperren

- **Keine freie Interpretation** – Abweichungen vom Original nur mit expliziter Freigabe
- **3D-Geometrie und Scroll-Effekte kommen zuletzt** (GG-029)
- **Mobile erst nach vollständigem Desktop-Layout** kalibrieren (GG-028)
- **Keine neuen Seiten**, kein erweiterter Scope ohne Master-Freigabe
