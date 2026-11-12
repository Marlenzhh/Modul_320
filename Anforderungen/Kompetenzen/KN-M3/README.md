# Kompetenznachweis für M3

### Lernziele:

* Ich kann aus einer Beschreibung ein Klassendiagramm ableiten und dabei eine starre Struktur (Hierarchie) von flexiblem Design (Interfaces) unterscheiden und aufzeigen.
* Ich kenne die wichtigsten Symbole, um Interfaces in einem UML Klassendiagramm darzustellen.
* Ich kann aufzeigen, wieso Interfaces die Erweiterung von Code flexibler macht.


### Ziel:

Mit Hilfe von KI und den Unterrichtsinhalten arbeiten Sie sich *selbstständig* in die beschriebenen Themenbereiche ein. Sie suchen sich weiterführende Informationen und lassen sich Details von der KI oder der Lehrperson erklären, so dass Sie sich ein umfangreiches Wissen aneignen.
Für die Darstellung von Klassendiagrammen eignet sich PlantUML. 
Beispiele inkl. Code: https://plantuml.com/class-diagram


### Auftrag:

* Wählen Sie eine Beschreibung aus. Identifizieren Sie dabei mögliche Klassen. Welche Bereiche  können als Interfaces gekapselt werden? Wo macht es Sinn, ein Interface zu verwenden (Stichwort: bessere Wartbarkeit, bessere Erweiterung bei neuen Anforderungen).
* Interfaces und Klassen werden korrekt im Detail dargestellt. Beziehungen zwischen den Klassen können schematisch dargestellt werden.
HAT und IST Beziehungen werden korrekt dargestellt (richtige Pfeile, etc.).


**Beschreibung A**
Die Applikation wird zur Bestellung von Kaffee-Sorten verwendet. Dabei kann der Benutzer angeben, welchen Kaffee er/sie möchte (z.bsp. Café misto, café latte, decaf, etc. ) und die Anzahl. Diese werden dann entsprechend aufgelistet, bevor der Benutzer diese bestätigt.
Anschliessend wählt der Benutzer die Zahlungsart (Kreditkarte oder Postfinance oder Debit Card). Je nach Wahl wird ein anderer Service aufgerufen und z.T. eine Gebühr zum Totalbetrag verrechnet.


**Beschreibung B**
Die Applikation wird zur Bestellung von Hamburger verwendet. Dabei kann der Benutzer zu einem Hamburger verschiedene Zutaten hinzufügen. Der Burger besteht aus einen Patty, aber dazu gibt es Extra Zwiebeln, Extra Sauce, Extra Bacon, etc.
Der User kann auch bestimmen, ob er nur den Burger möchte, oder ein Menu (mit Getränk und FrenchFries).
*Tipp*: Verwenden Sie das **Decorator-DesignPattern** als Lösung. Fragen Sie die KI oder recherchieren Sie dazu.


Zeigen Sie Ihre Lösung der Lehrperson und stellen Sie diese in Ihr Repo.


### Fragen beim Gespräch:
* Wieso sind Interfaces häufig besser als eine Vererbung?
* Was bedeutet der Begriff "Deadly Diamond of Death"?
* Wie stellen Sie sicher, dass der Code flexibel erweitert werden kann?