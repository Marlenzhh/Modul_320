![TBZ Logo](../x_gitres/tbz_logo.png)


# Clean Code

---
## Lernziele: 
* Ich kenne den Begriff CleanCode und kann mind. drei Eigenschaften davon erklären
* Ich kann CleanCode auf meine eigenen Arbeiten anwenden und diese auch erläutern 

-- 
## Grund für CleanCode

Bei CleanCode geht es darum, seinen Code sowie die Kommentare möglichst einfach und verständlich zu halten.
Dadurch werden Programme einfacher wartbar und die Entwicklungszeit verkürzt sich bei Erweiterungen oder Fehlerbehebungen.

## Naming Conventions

Der Name einer Variable, Methode oder Klasse sollte aufzeigen, warum sie existiert, was sie macht und wie sie verwendet wird.
Sobald ein Name einen Kommentar benötigt, dann ist der Name falsch gewählt

Beispiel:

schlecht:
`
int d; //elapsed time in day
`

besser:
`
int elapsedTimeDay;
`

## Hard Coding

Keine **Literale** verwenden, sondern **Konstante** oder **enums**.
Ansonsten entstehen Duplikate. Dadurch werden Anpassungen erschwert, weil man explizite Werte ändern muss (und diese eventuell auch mehrmals im Code vorkommen).
Dies kann zu unerwünschtem Verhalten führen.

Beispiel:

schlecht:
`
int storeClosureDay = 7;
`

besser:
`
int storeClosureDay = DayOfWeek.SUNDAY.getValue();
`

## Kommentare

In der Dokumentation verwenden wir JavaDoc. Das Zielpublikum sind die Programmierer, welche den Code erweitern oder anpassen müssen. Die Details hier sind in der Regel implementierungsfrei und konzentrieren sich mehr auf die Spezifikation

Im Code selber verwenden wir Blockkommentare. Es werden nur komplexere Methoden kommentiert.
Setter/Getter Methoden werden nicht kommentiert.

## Klassen

"Uncle Bob" sagt zu den Klassen und Klassengrösse:
*«The first rule of classes is that they should be small. The second rule of classes is that they should be smaller than that.»*

Dieses Zitat sagt eigentlich schon alles zum Thema gutes Design und wie Klassen aufgebaut werden sollten.

Grösse einer Klasse wird nicht anhand Codezeilen gemesssen, sondern nach ihren Verantwortlichkeiten (responsibility). Stichwort dazu ist das sog. **SRP (Single Responsibility Principle)**.
Eine Klasse sollte nur *eine Verantwortlichkeit* wahrnehmen, demnach sollte es auch nur *einen Grund* für Veränderungen haben.

## Methoden

Dasselbe gilt auch für Methoden. Die Grösse einer Funktion wird anhand von Codezeilen gemesssen.</br>
Uncle bob’s Empfehlung: 3-4 Zeilen.</br>
Zeileneinzug if/ else/ while: nicht mehr als zwei</br>
**DO ONE THING**:
*Functions should do one thing. They should do it well. They should do it only.*

---

# Checkpoint
* Ich kenne die Namenskonventionen im Code
* Ich kann Konstanten und Enums im Code anwenden
* Ich kenne den Begriff SRP und kann das erklären

# Quellen und weiterführende Links:
* Eine gute Übersicht gibt es hier: https://blog.codacy.com/what-is-clean-code
* Wikipedia: https://de.wikipedia.org/wiki/Clean_Code
* zum Thema SRP: https://de.wikipedia.org/wiki/Single-Responsibility-Prinzip


