![TBZ Logo](../../x_gitres/tbz_logo.png)



# Kompetenznachweis für Q3

### Lernziele:

* Ich kenne andere Datenstrukturen wie Stack, Graph oder LinkedList
* Ich kann anhand einer Beschreibung eine sinnvolle Datenstruktur bestimmen
* Ich kann Algorithmen einsetzen, welche zu der gewählten Datenstruktur passen


### Ziel:

Mit Hilfe von KI und den Unterrichtsinhalten arbeiten Sie sich *selbstständig* in das Thema **Algorithmen und Datenstrukturen** ein. Sie suchen sich weiterführende Informationen und lassen sich Details von der KI oder der Lehrperson erklären.

### Auftrag:

Wählen Sie ein Thema, wo Sie mit einer anderen Datenstruktur statt Listen arbeiten.
Implementieren Sie Features wie Suche und Sortierung.

### Mögliche Ideen:

### 1. CSV File einlesen

Verwenden Sie eine passende Datenstruktur, um ein **Key-Value Paar** abzubilden. Dabei wird das CSV File "airports" eingelesen. Der Benutzer soll nach einem Flughafen suchen können und diese auch entfernen. Die Liste der Flughäfen kann auch sortiert werden. Alle Such-Aufrufe werden getrackt und können ausgegeben werden. Das File befindet sich [hier](https://gitlab.com/JulianKaser/javaressources/-/tree/main/files?ref_type=heads).

---

### 2. Mini-Suchmaschine (Dokumenten-Indexer)

Die Studierenden entwickeln eine einfache Suchmaschine für Textdokumente.  
Ziel ist es, Wörter effizient zu indexieren und Suchanfragen schnell zu beantworten. Dabei werden folgende Datenstrukturen verwendet:
- `HashMap<String, List<String>>` → Wort → Liste von Dokumenten
- `ArrayList` oder `Set` → Dokumente


Die Suchmaschine soll folgende Funktionen haben:
- Einlesen mehrerer Textdateien
- Zerlegen in Wörter (Tokenisierung)
- Aufbau eines Index (Wort → Dokumente)
- Verarbeitung von Suchanfragen (z. B. AND / OR)

- **Suche:**
  - Schneller Zugriff über HashMap
  - Filtern von Ergebnissen (z. B. AND/OR-Verknüpfungen)
- **Sortierung:**
  - Ergebnisse nach Relevanz sortieren (z. B. Häufigkeit eines Wortes)
  - Nutzung von `Collections.sort()` mit Comparator

---

### 3. Navigationssystem (Graph + Dijkstra)

Sie implementieren ein vereinfachtes Navigationssystem, bei dem Orte als Knoten und Straßen als Kanten modelliert werden. Dabei werden folgende Datenstrukturen verwendet:
- Graph als Adjazenzliste:
  
```java
  HashMap<String, List<Edge>>
```

- **Funktionen**
- Orte hinzufügen
- Verbindungen definieren
- Kürzesten Weg berechnen

- **Suche**
- Graph Traversal (breadth-first-search) BFS
- Kürzeste Verbindung anzeigen, wenn der Benutzer einen Ort eingibt


### 4. Undo/Redo Texteditor

Sie implementieren einen einfachen Texteditor mit **Undo- und Redo-Funktionalität**.  
Dabei wird das Prinzip von **Stacks (LIFO – Last In, First Out)** angewendet.
Folgende Funktionen sollen umgesetzt werden:
- Text hinzufügen
- Text löschen

- **Undo**
- Letzte Änderung rückgängig machen
- Zustand aus dem Undo-Stack wiederherstellen

- **Redo**
- Rückgängig gemachte Änderung erneut anwenden
- Zustand aus dem Redo-Stack wiederherstellen

- **Suche & Sortierung**
- Implementierung einer einfachen Textsuche:
  ```java
  text.indexOf("Suchbegriff");