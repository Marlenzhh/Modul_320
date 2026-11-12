# Modul 320 - Objektorientiert Programmieren

Arbeitsrepo fuer das TBZ-Modul m320. Die Unterlagen stammen aus dem Schul-Repo https://gitlab.com/ch-tbz-it/Stud/m320 (ohne Verlauf uebernommen, abgelegt in `Anforderungen/`).

> **Hinweis:** Diese Datei wird von mehreren Personen genutzt. Hier gehoeren nur allgemeine Modul- und Projektinfos hinein, keine persoenlichen Angaben (Namen, Mailadressen, Zugangsdaten, private Einstellungen). Persoenliche Anweisungen gehoeren in die eigene `CLAUDE.local.md` oder in die Benutzereinstellungen.

## Modulbeschreibung

Applikationen und Schnittstellen objektorientiert modellieren, implementieren, testen und dokumentieren:

1. Anwendungsprobleme analysieren
2. OO-Programme modellieren und dokumentieren
3. OO-Design implementieren
4. Implementierung auf Korrektheit und Qualitaet pruefen

Sprache im Modul: Java.

## Repo-Struktur

Alle Unterlagen liegen im Ordner `Anforderungen/`. Die Ordnernamen unten sind relativ dazu.

| Ordner | Inhalt |
|---|---|
| `N0-OOP_Basics` | Einfuehrung, Setup |
| `N1-*` | Grundlagen: Klassen/Konstruktoren/Methoden, Vererbung (Intro), Repetition (M319), UML-Klassendiagramm |
| `N2-*` | Zentrale Themen: JavaDoc/Konventionen, HAT-Beziehungen, Vererbung/Overload/Overwrite, UML-Sequenzdiagramm |
| `N3-*` | Abstrakte Klassen/Interfaces, Datenstrukturen und Algorithmen, Delegation, Generics |
| `N4-*` | Abstraktionen, Clean Code, Design Patterns |
| `Kompetenzen` | Aufgaben je Kompetenz (`KN-D1`, `KN-M1`, ...) und das PDF "LB Kompetenzraster 320 V1.0" |
| `Code` | Beispielcode (`house`) |
| `Knowledge_Library` | Nachschlagewerk |
| `x_gitres` | Bilder fuer die READMEs |

## Kompetenzraster

4 Bereiche (Zeilen) x 4 Niveaus (Spalten). Sterne = Gewichtung/Schwierigkeit laut Raster.

### M - Objektorientiertes Design erstellen und modellieren (mittels UML)

- **M1 (\*):** Elemente eines einfachen Klassendiagramms kennen. Die HAT-Beziehungen unterscheiden und darstellen (Aggregation vs. Komposition). Auftrag steht auf GitLab.
- **M2 (\*\*):** Delegation mittels UML darstellen, indem ein Sequenzdiagramm erstellt wird. Aus einem spezifischen Use Case ein Sequenzdiagramm ableiten.
- **M3 (\*\*):** Vererbung mittels UML-Klassendiagramm darstellen. Elemente fuer Interfaces und abstrakte Klassen kennen und darstellen.
- **M4 (\*\*):** Fuer die eigene Aufgabenstellung Abstraktionen (Interfaces, abstrakte Klassen) mit den noetigen UML-Artefakten abbilden und sinnvolle UML-Diagramme erstellen. Details in der InfoBox (groessere Arbeit).

### D - Objektorientiert implementieren (Fokus Delegation)

- **D1 (\*\*):** Klassen mit Konstruktoren und Methoden definieren, Objekte instanziieren. Objekte kommunizieren miteinander (Methodenaufruf, Parameteruebergabe). Attribute kapseln (Getter/Setter). Aufzeigen, wie sich der Zustand eines Objekts veraendert.
- **D2 (\*\*\*):** Die verschiedenen HAT-Beziehungen (ein- und zweiseitig) gemaess Diagramm oder Beschreibung implementieren. Aggregation und Komposition im Code unterscheiden. Konzept Delegation kennen.
- **D3 (\*\*\*):** Anhand einer eigenen Beschreibung Delegation sinnvoll umsetzen (z.B. Trennung von Benutzerschnittstelle und Logik). Konzept der Exceptions kennen, fehlerhafte Eingaben abfangen, eigene Exception-Klasse einsetzen. Einzelarbeit: Idee der Lehrperson kurz zeigen, bevor der Code umgesetzt wird.
- **D4 (\*\*\*):** Eigene Aufgabenstellung zeigt Delegation (klare Trennung Benutzerschnittstelle/Logik). Eigene Exceptions fangen fehlerhafte Eingaben ab. Generics wird im eigenen Code eingesetzt (eigene Klasse).

### V - Objektorientiert implementieren (Fokus Vererbung / Interfaces)

- **V1 (\*\*):** Einfache Vererbung (simple Hierarchie) implementieren und aufzeigen, dass der Code besser erweitert werden kann (neue Anforderungen). Eigene Klassen unter Nutzung von Interfaces und abstrakten Klassen aus Bibliotheken implementieren (z.B. AbstractList, Iterator). Auftraege sind auf Papier.
- **V2 (\*\*):** Anhand eines Diagramms eine Vererbungshierarchie implementieren. Sub-Klassen mit Methoden ergaenzen oder ueberschreiben und damit Polymorphismus aufzeigen. Unterschied zwischen Ueberladen und Ueberschreiben erklaeren und aufzeigen.
- **V3 (\*\*\*):** Eigene Klassen mit Interfaces gemaess Beschreibung oder Entwurf implementieren. Aufzeigen, wie Interfaces den Code flexibel halten (im Gegensatz zu Vererbung). Polymorphismus fuer Interfaces im Code-Beispiel aufzeigen.
- **V4 (\*\*\*):** Eigene Aufgabenstellung demonstriert Vererbung oder Interfaces fuer eine komplexe Problemstellung. Polymorphie wird angewendet. Design Patterns werden angewendet.

### Q - Qualitaetssicherung, Testing, Dokumentation, Basiswissen

- **Q1 (\*):** Wichtigste Themen aus M319 repetiert. Grundkenntnisse zu Klassen und Objekten (u.a. Datenkapselung, Information Hiding). Unterschied zwischen primitiven Datentypen und Referenztypen. Access Modifiers kennen.
- **Q2 (\*\*):** Code verwendet ein Software-Dokumentationswerkzeug (JavaDoc), ist kommentiert und entspricht den Code-Konventionen. Auftrag: eigenen Code von Niveau 2 korrekt kommentieren und JavaDoc der Lehrperson zeigen.
- **Q3 (\*\*\*):** Andere Datenstrukturen aus der Collections-Bibliothek verwenden (Stack, Graph, LinkedList) und dabei auch Algorithmen wie die Suche einsetzen. Ideen im Repo (`N3-Data Structures Algorithms`).
- **Q4 (\*\*\*):** Kommentare in einer Software hinterfragen und Verbesserungen vorschlagen (Kommentare durch bessere Struktur vermeiden, Clean-Code-Regeln anwenden). Clean-Code-Regeln auf das eigene Projekt anwenden (siehe `N4-CleanCode`).

### Zuordnung Kompetenz zu Ordner

| Kompetenz | Ordner |
|---|---|
| M1 | `N1-UML_Class_Diagramm`, `N2-HAS_Relations` |
| M2 | `N2-UML_Sequence_Diagramm` |
| M3, M4 | `N3-AbstractClass_Interface`, `N4-Abstractions` |
| D1 | `N1-Class_Constructor_Methods` |
| D2 | `N2-HAS_Relations` |
| D3, D4 | `N3-Delegation`, `N3-Generics` |
| V1 | `N1-Inheritance_Intro` |
| V2 | `N2-Inheritance_Overload_Overwrite` |
| V3, V4 | `N3-AbstractClass_Interface`, `N4-DesignPatterns` |
| Q1 | `N1-Repetition` |
| Q2 | `N2-Convention_JavaDoc` |
| Q3 | `N3-Data Structures Algorithms` |
| Q4 | `N4-CleanCode` |

Die Zuordnung ist aus den Ordnernamen abgeleitet. Die genauen Auftraege stehen in `Kompetenzen/KN-*`.

### Auftraege auf Papier

Laut Kompetenzraster sind nur die Auftraege von **V1** auf Papier. Im Repo gibt es dazu keinen Text, `Kompetenzen/KN-V1/README.md` enthaelt nur die digitale Aufgabe (zwei Implementationen mit KI zeigen). Die Papier-Auftraege gibt die Lehrperson im Unterricht aus. Alle anderen Felder haben keinen Papier-Hinweis.

Hinweis zum Raster: Fuer Q1, Q2, Q4, D4 und V4 gibt es keinen Ordner `KN-*`. Das sind eigene Arbeiten oder Projekte (Pfeil-Symbol im Raster).

## Arbeitsweise

- Im Kompetenzraster wird von links nach rechts gearbeitet, also Niveau 1, dann 2, 3 und 4.
- Teamarbeit: Die Themen ab Niveau 2 sind laut Modul-README im Team umzusetzen.
- Antworten und Texte auf Deutsch, knapp und praxisnah. Code und Bezeichner auf Englisch.
- Pushen nur auf Anfrage.

## Webseite (GitHub Pages)

- `index.html` im Root ist die Startseite mit dem Kompetenzraster. Pro Aufgabe gibt es eine Seite in `aufgaben/` (`m1.html`, `d1.html`, ...), Stil in `css/styles.css`, Skript in `js/app.js`.
- Visuell zu erledigen sind die UML-Aufgaben M1 bis M4 (Klassen- und Sequenzdiagramme). Die Diagramme sind Mermaid-Code in den HTML-Seiten und dienen als Lösungsvorschlag zum Vergleichen.
- Die Reihenfolge der Seiten folgt dem Raster von links nach rechts: M1, D1, V1, M2, D2, V2, M3, D3, V3, Q3, M4.
- Lokal testen: `python -m http.server 4320` im Repo-Ordner, dann http://localhost:4320 öffnen.
- Pages einschalten: Repo-Einstellungen, Pages, Branch `main`, Ordner `/ (root)`. `.nojekyll` verhindert die Jekyll-Verarbeitung.
