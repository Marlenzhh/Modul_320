![TBZ Logo](../../x_gitres/tbz_logo.png)



# Kompetenznachweis für M1

### Lernziele:

* Ich kann aus einer Beschreibung ein UML-Klassendiagramm erstellen mit Fokus auf HAT-Beziehungen (ohne autom. Generieren)
* Ich kann aus einer Beschreibung die Beziehungen zwischen den Klassen ableiten. Auch kann ich eine Komposition als Beziehung erkennen.
* Ich kenne die einzelnen Elemente um eine Klasse als Diagram umzusetzen (Aufbau Attribute und Methoden)
* Ich kenne die Symbole für public, private und protected
* Ich kenne die Symbole für die Beziehungen (Assoziation, Aggregation, Komposition)

### Ziel:

Mit Hilfe von **KI** und den **Unterrichtsinhalten** arbeiten Sie sich **selbstständig** in die beschriebenen Themenbereiche ein. Sie suchen sich weiterführende Informationen und lassen sich Details von der KI oder der Lehrperson erklären, so dass Sie sich ein umfangreiches Wissen aneignen. 

### Auftrag:

Wählen Sie eines der Beschreibungen aus und zeichnen Sie ein entsprechendes Klassendiagramm.
Der Fokus liegt auf:
- Klassen und Attributen
- HAT-Beziehungen zwischen Klassen
- Assoziationen
- Aggregationen
- Kompositionen
- Multiplizitäten

#### Szenario 1: Hotelverwaltung

Ein Hotel möchte seine Zimmer und deren Ausstattung verwalten.

Ein **Hotel** besitzt einen Namen, eine Adresse und eine Anzahl Sterne. Zu einem Hotel gehören mehrere **Zimmer**. Jedes Zimmer hat eine eindeutige Zimmernummer, eine Etage und einen Preis pro Nacht.

Ein Zimmer existiert im System nur als Bestandteil eines bestimmten Hotels. Wird das Hotel aus dem System gelöscht, sollen auch alle zugehörigen Zimmer gelöscht werden.

Jedes Zimmer besitzt genau ein **Badezimmer**. Ein Badezimmer enthält Angaben dazu, ob es über eine Dusche, eine Badewanne und ein WC verfügt. Das Badezimmer gehört fest zu einem Zimmer und kann nicht unabhängig von diesem Zimmer existieren.

Zusätzlich können Zimmer verschiedene **Ausstattungsgegenstände** besitzen, beispielsweise einen Fernseher, einen Kühlschrank oder eine Kaffeemaschine. Ein Ausstattungsgegenstand besitzt eine Bezeichnung und eine Seriennummer.

Ein Ausstattungsgegenstand kann grundsätzlich von einem Zimmer entfernt und später einem anderen Zimmer zugeordnet werden. Er existiert also auch unabhängig vom Zimmer.

Ein Hotel beschäftigt ausserdem mehrere **Mitarbeitende**. Ein Mitarbeiter besitzt eine Personalnummer, einen Namen und eine Funktion.

Ein Mitarbeiter kann auch dann weiterhin im System gespeichert bleiben, wenn das Hotel gelöscht wird, beispielsweise weil die Person später einem anderen Hotel zugewiesen werden könnte.

---

#### Arbeitsauftrag

Erstellen Sie aus der Beschreibung ein **UML-Klassendiagramm**.

Berücksichtigen Sie dabei:

1. Welche Klassen werden benötigt?
2. Welche Attribute besitzen die Klassen?
3. Welche Klassen stehen miteinander in Beziehung?
4. Welche Multiplizitäten sind sinnvoll?
5. Bei welchen Beziehungen handelt es sich um eine **Komposition**?
6. Wo handelt es sich lediglich um eine **Assoziation oder Aggregation**?
7. Begründe insbesondere deine Entscheidungen bezüglich der Kompositionen.


#### Szenario 2: Online Shop

Ein Online-Shop ermöglicht registrierten Kunden, Produkte zu bestellen.

Ein **Kunde** besitzt eine Kundennummer, einen Namen und eine E-Mail-Adresse. Ein Kunde kann beliebig viele Bestellungen aufgeben.

Eine **Bestellung** besitzt eine Bestellnummer, ein Bestelldatum und einen Status. Jede Bestellung gehört genau zu einem Kunden.

Eine Bestellung besteht aus mindestens einer **Bestellposition**. Eine Bestellposition enthält die bestellte Menge und den zum Zeitpunkt der Bestellung gültigen Einzelpreis.

Eine Bestellposition kann nicht unabhängig von einer Bestellung existieren. Wird eine Bestellung gelöscht, werden auch sämtliche Bestellpositionen gelöscht.

Jede Bestellposition verweist auf genau ein **Produkt**. Ein Produkt besitzt eine Produktnummer, einen Namen, einen aktuellen Preis und einen Lagerbestand.

Produkte existieren unabhängig von Bestellungen. Wenn eine Bestellung gelöscht wird, darf das Produkt nicht gelöscht werden.

Zu jeder Bestellung gehört genau eine **Lieferadresse**. Die Lieferadresse enthält Strasse, Hausnummer, Postleitzahl, Ort und Land.

Die Lieferadresse wird beim Erstellen der Bestellung als eigener Bestandteil der Bestellung gespeichert. Wird die Bestellung gelöscht, wird auch diese gespeicherte Lieferadresse gelöscht.

Eine Bestellung kann ausserdem eine **Zahlung** besitzen. Eine Zahlung enthält einen Betrag, ein Zahlungsdatum und den Zahlungsstatus.

Eine Bestellung kann zunächst noch keine Zahlung besitzen, später aber höchstens eine.

Eine Zahlung gehört immer genau zu einer Bestellung und soll nicht unabhängig davon existieren.

---

### Arbeitsauftrag

Erstellen Sie für das beschriebene System ein vollständiges **UML-Klassendiagramm**.

Das Diagramm soll enthalten:

- Klassen
- Attribute
- Beziehungen
- Multiplizitäten
- Kompositionen
- normale Assoziationen bzw. Aggregationen

### Fragen zum Thema:

* Müssen getter und setter-Methoden auch im Diagramm abgebildet werden?
* Gehört die Klasse mit der main-Methode auch zum Diagramm?
* Wann macht eine bidirektionale Beziehung Sinn?
* Reicht es, wenn eine Assoziation ohne Pfeil dargestellt wird?

