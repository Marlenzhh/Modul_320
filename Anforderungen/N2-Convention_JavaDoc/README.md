![TBZ Logo](../x_gitres/tbz_logo.png)
![m319 Picto](../x_gitres/m320_picto.png)

[TOC]

# Code Convention und JavaDoc

---

### Lernziel:
* Was ist eine "Code Convention"? 
* Quelltext Konvention TBZ-IT
* Quelltext Formatierung mit IntelliJ

---

# Von "Clean Code" und "Code Convention"

Einführung "Clean Code": (ab 2:20)

![Video:](../x_gitressourcen/Video.png) 11min [![Tutorial](https://img.youtube.com/vi/UjhX2sVf0eg/0.jpg)](https://www.youtube.com/watch?v=UjhX2sVf0eg)

Die folgende Seite befasst sich mit dem Thema "Clean Code":
[Professionalität in der SW-Entwicklung](https://clean-code-developer.de/)

Für uns ist wohl die Quelltextformatierung (Code Conventions) ein erster Schritt in die richtige Richtung: [Quelltextformatierung](https://de.wikipedia.org/wiki/Quelltextformatierung)

Ganz praktisch:
[Namenskonventionen](https://mein-javablog.de/java-namenskonventionen/)

---
---

## Quelltext Konvention TBZ-IT

Wir wollen uns in unseren Projekten an folgende Konvention halten:

> *	Sauberes, einheitliches **Einrücken** der Kontrollstrukturen (mind. 4 Zeichen)
> *	Saubere **Abstände** bei Ausdrücken und Berechnungen (Leerschlag)
> *	Variablennamen **selbstsprechend** (*kein* x, var, temp)
>    - **boolean** Variablen &#8594; "ist" oder "is" voranstellen: **ist**Hungrig
>    - *Optional Variablennamen mit primitiven Datentypen: Typenkürzel voranstellen (**s**Name, **d**SeiteA, **i**Anzahl, ...)*
> 
> *	Einheitliche Gross- / Kleinschreibweise: 
>    - **Variabeln** und **Methoden** beginnen **k**lein, 
>    - **Klassen** beginnen **G**ross 
>    - und Rest des Bezeichners in **CamelCase**. 
>   - **Konstanten** alle Buchstaben **GROSS_CONST** mit Underscore.

> *	Programme und Funktionen werden mit "**Header**" versehen (Zweck, Input, Output &#8594; JavaDoc)
> *	Abschnittskommentare sind "**Überschriften** zum Algorithmus"
> *	Spezifischer Linien-Kommentar ist die Antwort auf "**WOZU?**"
> 
> *	**Einheitliche Sprache** (z.B. Code und Variablen &#8594; English / Kommentar &#8594; Deutsch)

---
---

Wenn's interessiert: [Google Code Convention Java](https://google.github.io/styleguide/javaguide.html)


---

# JavaDoc mit IntelliJ

Die ???


---

![ToDo](../x_gitressourcen/ToDo.png) Do To:
Testen Sie die obigen Möglichkeiten an ihrem Quelltext aus!

---

# Checkpoint
* Kenne den Nutzen einer "**Code Convention**"
* Kenne die "**Quelltext Konvention TBZ-IT**" und weiss sie umzusetzen!
* Kann in der IDE die **JavaDoc** aufsetzen und anzeigen.
* Mein Quellcode Kommentar ist mit JavaDoc umgesetzt.


