![TBZ Logo](../../x_gitres/tbz_logo.png)



# Kompetenznachweis für V3

### Lernziele:

* Ich kann nach einer Beschreibung mögliche Interfaces identifizieren und diese im Code umsetzen
* Ich kann aufzeigen, wie Interfaces den Code flexibler gestalten
* Ich kann aufzeigen, wie Interfaces den Code *polymorph* machen


### Ziel:

Mit Hilfe von KI und den Unterrichtsinhalten arbeiten Sie sich *selbstständig* in die beschriebenen Themenbereiche ein. Sie suchen sich weiterführende Informationen und lassen sich Details von der KI oder der Lehrperson erklären, so dass Sie sich ein umfangreiches Wissen aneignen. 

### Auftrag:

Ihr Programm soll die beschriebenen Lernziele aufzeigen. Arbeiten Sie mit KI an möglichen Implementationen, welche diese Themen abbilden.

### Mögliche Ideen:

Hier gibt es mögliche Ideen um diese Kompetenz zu demonstrieren:

#### Portfolio von Aktien
Wir wollen ein Portfolio von Wertpapieren (Aktien) simulieren. Dabei soll das Portfolio eine entsprechende Börse aufrufen können, um die Preise der Aktien zu erhalten und den Wert des Portfolios zu berechnen.
Unsere Portfolio Klasse muss nicht wissen, welche konkrete Börse aufgerufen wird. Somit verwendet die Portfolio Klasse ein Interface *StockExchange*. Dieses Interface wird als Parameter dem Portfolio übergeben (z.Bsp. im Konstruktor oder in einer Methode).
Wir wollen als Effekt, dass sich hinter dem StockExchange verschiedene Börsen „verstecken“: z.Bsp. Zürich, London oder NY.
**Vorgehen**
Implementieren Sie die Struktur Portfolio – Liste von Aktien – Interface StockExchange mit zwei konkreten Implementationen (Börsenplätze).
Je nach Börsenplatz sind andere Aktien kotiert (registriert). Sie müssen somit dafür sorgen, dass jede Börse eine Liste von Aktien hat (z.Bsp. in Zürich: Nestlé, ABB, SwissRe, etc.). Die KI hilft Ihnen gerne beim Zusammenstellen von Aktien.
Setzen Sie die Preise für mehrere Aktien in den jeweiligen Börsen fest.
Ihre Testklasse (main-Klasse) ruft das Portfolio auf und übergibt eine Implementation der Börse als Parameter.
Erstellen Sie ein Benutzer-Menu, die es dem Benutzer ermöglicht, nach dem Wert des Portfolios zu fragen. Dabei kann der Benutzer eine Börse auswählen.
Der Benutzer kann auch den Kurs einer Aktie abfragen.

#### Rabattberechnung mit dem Strategy Pattern
Ein Online-Shop verkauft Produkte. Je nach Situation soll ein anderer Rabatt angewendet werden, zum Beispiel:
* kein Rabatt
* Studentenrabatt
* Black-Friday-Rabatt
* Treuerabatt
Die Klasse *ShoppingCart* soll nicht wissen, wie der Rabatt genau berechnet wird. Sie arbeitet nur mit einem Interface. Dadurch kann die Rabattlogik einfach ausgetauscht werden.
Erstellen Sie eine App, welche dem Benutzer ermöglicht, Produkte einzukaufen. Je nach Profil des Benutzers (oder je nach Zeitpunkt) wird eine andere Strategie für die Rabattberechnung angewendet.
Die App soll eine Benutzerschnittstelle haben.

#### Verhalten als Interface auslagern
Erweiterungen führen zu vielen neuen Klassen. Dies macht die Vererbung mühsam und schwierig zu warten. Viel besser ist es, ein Verhalten in Interfaces auszulagern, um den Code flexibler zu gestalten. Das Verhalten wird dann je nach Situation der Struktur hinzugefügt (Stichwort: Aggregation, Komposition)
Folgende Hierarchie soll umgebaut werden, so dass das dynamische Verhalten der Waffen nicht in einer Vererbung integriert ist:
[Figuren-Hierarchie](../../x_gitres/figur_hierarchie.png)
Ziel: Das Waffen-Verhalten soll ausgelagert werden in ein Interface. Wir können dann je nach Figur ein anderes Verhalten einsetzen.
Die Super-Klasse Figur hat das Interface WaffenVerhalten als Attribut. Jede konkrete Figur bekommt sein bestimmtes WaffenVerhalten.
**Vorgehen**
Erstellen Sie eine Menu-Klasse, welche den Benutzer auffordert, Figuren auszuwählen. Anschliessend wird kann der Benutzer ein Waffen-Verhalten für eine Figur ausgewählt. Der Benutzer kann eine Liste der Figuren ausgeben und das spezifische Waffen-Verhalten wird für jede Figur angezeigt.

