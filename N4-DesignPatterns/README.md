![TBZ Logo](../x_gitres/tbz_logo.png)

# Software-Design-Patterns (Entwurfsmuster)


---
## Lernziele: 
* Ich kenne den Begriff *Entwurfsmuster" und kann die Kategorien erklären
* Ich kenne mind. drei bekannte Entwurfsmuster und kann Ihre Funktion erklären

-- 

## Einführung

**Entwurfsmuster (Design Patterns)** sind **wiederverwendbare Lösungen** für häufig auftretende Probleme in der Softwareentwicklung.  
Sie wurden besonders durch das Buch *“Design Patterns: Elements of Reusable Object-Oriented Software”* (Gamma, Helm, Johnson, Vlissides – „Gang of Four“) bekannt.

**Ziele:**
- Bewährte Lösungsansätze bereitstellen  
- Code lesbarer, flexibler und wartbarer machen  
- Kommunikation im Team vereinfachen („Wir nutzen hier das Strategy-Pattern“)

---

## 🔹 Kategorien von Design Patterns

Die „Gang of Four“ teilt Design Patterns in **drei Hauptkategorien** ein:

---

### 1. 🏗️ Erzeugungsmuster (Creational Patterns)

➡️ Beschreiben, **wie Objekte erstellt werden**, um Flexibilität und Wiederverwendbarkeit zu erhöhen.

| Muster | Beschreibung | Beispiel |
|--------|---------------|----------|
| **Singleton** | Stellt sicher, dass es **nur eine Instanz** einer Klasse gibt und bietet einen globalen Zugriffspunkt. | Logger, Konfigurationsmanager |
| **Factory Method** | Delegiert die **Objekterzeugung an Unterklassen**, statt sie direkt im Code zu instanziieren. | GUI-Framework, das verschiedene Button-Typen erzeugt |
| **Abstract Factory** | Erzeugt **Familien von verwandten Objekten**, ohne deren konkrete Klassen zu kennen. | Betriebssystem-spezifische GUI-Komponenten |
| **Builder** | Trennt die **Konstruktion komplexer Objekte** von ihrer Repräsentation. | Erstellen von HTML- oder SQL-Abfragen |
| **Prototype** | Erzeugt neue Objekte durch **Klonen eines vorhandenen Prototyps**. | Kopieren von Formularen oder Dokumenten |

---

### 2. 🧱 Strukturmuster (Structural Patterns)

➡️ Beschreiben, **wie Klassen und Objekte zusammengesetzt** werden, um größere Strukturen zu bilden.

| Muster | Beschreibung | Beispiel |
|--------|---------------|----------|
| **Adapter** | Übersetzt eine Schnittstelle in eine andere, sodass inkompatible Klassen zusammenarbeiten können. | Adapter für unterschiedliche Steckertypen |
| **Bridge** | Trennt **Abstraktion von Implementierung**, damit beide unabhängig variieren können. | Grafik-API und verschiedene Render-Engines |
| **Composite** | Behandelt **Objekte und Objektgruppen gleichartig**. | Dateisystem (Datei vs. Ordner) |
| **Decorator** | Fügt einem Objekt **dynamisch zusätzliche Funktionalität** hinzu, ohne dessen Klasse zu ändern. | InputStream → BufferedInputStream |
| **Facade** | Bietet eine **vereinfachte Schnittstelle** zu einem komplexen Subsystem. | Datenbankzugriff, Framework-API |
| **Flyweight** | Spart Speicher, indem **gemeinsame Objekte wiederverwendet** werden. | Text-Rendering (gemeinsame Zeichenobjekte) |
| **Proxy** | Stellt einen **Stellvertreter** für ein anderes Objekt bereit, um Zugriff zu steuern. | Remote Proxy, Virtual Proxy, Security Proxy |

---

### 3. ⚙️ Verhaltensmuster (Behavioral Patterns)

➡️ Beschreiben die **Kommunikation und Interaktion zwischen Objekten**.

| Muster | Beschreibung | Beispiel |
|--------|---------------|----------|
| **Chain of Responsibility** | Leitet eine Anfrage entlang einer **Kette von Handlern**, bis einer sie bearbeitet. | Event-Handling, Logging |
| **Command** | Kapselt eine **Anfrage als Objekt**, um sie zu speichern, rückgängig zu machen oder zu protokollieren. | Undo/Redo in Editoren |
| **Interpreter** | Definiert eine **Grammatik** und interpretiert Sätze dieser Sprache. | SQL-, Regex- oder Script-Interpreter |
| **Iterator** | Ermöglicht den **sequenziellen Zugriff auf Elemente**, ohne deren interne Struktur offenzulegen. | foreach-Schleife |
| **Mediator** | Kapselt die Kommunikation zwischen Objekten, um **direkte Abhängigkeiten zu vermeiden**. | Chatroom, GUI-Dialogsteuerung |
| **Memento** | Speichert und stellt den **Zustand eines Objekts** wieder her (ohne Kapselung zu verletzen). | Spielstände, Undo |
| **Observer** | Benachrichtigt **mehrere abhängige Objekte**, wenn sich der Zustand eines Subjekts ändert. | EventListener, GUI-Komponenten |
| **State** | Erlaubt einem Objekt, **sein Verhalten zu ändern**, wenn sich sein interner Zustand ändert. | Zustandsautomat |
| **Strategy** | Kapselt **austauschbare Algorithmen** und wählt sie zur Laufzeit aus. | Sortierstrategien |
| **Template Method** | Definiert den **Rahmen eines Algorithmus**, wobei Unterklassen einzelne Schritte anpassen. | Lebenszyklus-Methoden |
| **Visitor** | Trennt einen **Algorithmus von der Objektstruktur**, auf der er arbeitet. | AST-Verarbeitung, Compiler |

---

## 🧠 Zusammenfassung

| Kategorie | Fokus | Typische Anwendung |
|------------|--------|--------------------|
| **Erzeugungsmuster** | Objekt-Erzeugung | Flexibles Instanziieren |
| **Strukturmuster** | Klassen-/Objektaufbau | Wiederverwendung und Erweiterung |
| **Verhaltensmuster** | Kommunikation & Kontrolle | Dynamisches Verhalten und Zusammenarbeit |

---

## Empfohlene Quelle und weiterführende Links:
* Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides – “Design Patterns: Elements of Reusable Object-Oriented Software”, 1994.

* Eine gute Übersicht (inkl. Code-Beispiele) befindet sich hier:https://refactoring.guru/design-patterns
