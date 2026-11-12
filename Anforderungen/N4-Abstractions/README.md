


[TOC]

# Abstraktionen - Abstrakte Klassen und Interfaces

---
### Lernziel: 
* Ich kenne den Unterschied zwischen Klassen und Abstrakten Klassen
* Ich weiss wie man Interfaces einsetzt und wie diese zu einem flexiblen Code beitragen
* Ich kenne das Problem der Mehrfachvererbung und weiss wie man das lösen kann

---

## Abstraktionen

Wir haben gesehen, wie wir eine **Vererbungs-Hierarchie** aufbauen können indem Klassen von anderen Klassen erben.
Und wenn wir Methoden von der Super-Klasse in den Subklassen **überschreiben** dann ändern wir auch das Verhalten in den Subklassen (Stichwort **Polymorphismus**).

Ein weiterer Schritt ist, wenn die Methoden in der Super-Klasse nicht implementiert sind, sondern nur noch als Vorgabe existieren. Wir haben nur eine Methoden-Definition, ohne ausführbaren Code. Solche Methoden sind dann **abstrakt** und der Programmierer entscheidet, wie diese Methode in den entsprechenden Subklassen implementiert wird. 

---

## Abstrakte Klassen

Eine Form davon, die aber weiterhin eine Vererbungs-Hierarchie abbildet, ist die **abstrakte Klasse**.

Bei einer abstrakten Klasse kann **kein Objekt** davon erzeugt werden. Die Klasse dient nur noch als Vorlage für die Subklassen.

*Definition Abstrakte Klasse: Sobald eine Methode **abstrakt** ist, ist die ganze Klasse abstrakt.*

Beispiel:

```
public abstract class Airplane {
	
	protected Integer registerNumber;
	
	
	//subclasses are forced to implement this
	abstract public void fly();
	
	public Integer showRegister(){
		return registerNumber;
	}

}

```
Die Methode *fly()* ist abstrakt und hat somit das Keyword *abstract*. Und somit muss auch die Klasse dieses Keyword haben.

## Wann macht es Sinn, abstrakte Klassen zu schreiben?

Abstrakte Klassen sind dann sinnvoll, wenn z.Bsp. die Superklasse gar nie als Objekt verwendet wird, weil sie nur als Vorlage für die Subklassen dient. Dabei wird dem Programmierer überlassen, wie die Methoden implementiert werden.
Beispiel: ich möchte einen Zoo mit Tieren abbilden. Dabei soll es von der Klasse *Tier* gar keine Objekte geben. Und ich möchte Methoden wie *essen()* oder *bewegen()* für die jeweilige Implementation in den konkreten Tieren offen lassen.

Auch wenn eine Klasse abstrakt ist, gibt sie doch eine Art *Protokoll* vor, indem die Methoden von der abstrakten Klasse in den Subklassen eingesetzt werden *müssen*.

## Kann ich einen Konstruktor in der abstrakten Klasse verwenden?

Auch wenn keine Objekte von abstrakten Klassen erzeugt werden können, kann man trotzdem Konstruktoren schreiben. Das mag auf den ersten Blick seltsam sein, macht aber durchaus Sinn.
Wenn eine abstrakte Klasse *Attribute* hat, dann möchte man diese beim Instanziieren von den Subklassen auch mit Werten belegen. 
Somit ruft dann die Subklasse den Konstruktor der abstrakten Klasse auf (Stichwort *super*) und übergibt die erforderlichen Parameter.

---

## Interfaces (Schnittstellen)

Die Idee, dass die Methoden abstrakt sind, wird in den Interfaces noch weiter geführt.
Hier handelt es sich nur noch um blosse Beschreibungen, welche Methoden das Interface hat. Die Implementation wird völlig dem Programmierer überlassen, wenn das Interface verwendet wird.

### Syntax eines Interfaces

Durch Verwendung des Keywords *interface* haben wir ein Interface statt eine Klasse. In den IDE's kann man das Interface direkt aufrufen, wenn wir ein neues Java-File erzeugen wollen.

Beispiel:

```

interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void run(); // interface method (does not have a body)
}

```

Wir haben nur noch **Deklarationen von Methoden**, jedoch keine Implementation.
Jede Klasse, welche nun *Animal* implementiert, ist gezwungen, diese Methoden zu implementieren:

```
class Sheep implements Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The sheep says: bah bah");
  }
  public void sleep() {
    // The body of sleep() is provided here
    System.out.println("Zzz");
  }
}

```
Die Klasse *Sheep* implementiert das Interface durch das Keyword *implements*.

### Verwendung von Attributen in Interfaces

Falls Attribute in einem Interface verwendet werden, sind diese automatisch *public*, *static* und *final* und somit als **Konstanten** deklariert.
Beispiel:

```
interface IValues {
	
	int MIN = 10;
	int MAX = 30;
	String errorMsg = "Boundary Error";
	
}
```

## Interfaces und Polymorphismus

Indem Methoden bei Interfaces nur noch abstrakt sind, ergibt sich automatisch der dynamische Polymorphismus. Jede Klasse, welche das Interface (und die Methoden) implementiert wird entsprechend ein eigenes Verhalten zur Laufzeit haben. (*zur Laufzeit* == deshalb *dynamischer Polymorphismus*) 


## Verwendung von mehreren Interfaces

Eine Klasse kann mehrere Interfaces implementieren und muss entsprechend diese Methoden umsetzen. Somit ist auch das Problem der **Mehrfachvererbung** gelöst. 
Schauen Sie dazu das Thema **Deadly Diamond of Death** an: https://www.youtube.com/watch?v=5Mpur57ikHM

---

## Kleine Übung

Wir wollen das Einkaufen in einem Supermarkt simulieren.
Dabei haben wir verschiedene Produkte wie Milch, Bananen, etc. 
Alle Produkte haben etwas gemeinsam, indem sie käuflich sind mit einem Preis.
Wir wollen somit ein Interface *iBuyable* mit der Methode *price()*.
Erstellen Sie entsprechende Klassen, welche das Interface implmentieren.
Wir wollen eine Liste der Produkte ausgeben welche wir eingekauft haben, als Quittung mit dem Preistotal.

---

# Checkpoint
* Ich kenne die Formen von Abstraktionen (Abstrakte Klassen und Interfaces) und ihre Syntax
* Ich kann Interfaces in meinem Code einsetzen
* Ich kenne das Problem der Mehrfachvererbung und kann es im Code lösen
