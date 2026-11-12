![TBZ Logo](../x_gitres/tbz_logo.png)



[TOC]

# Delegation

---
### Lernziel: 
* Ich weiss was Delegation heisst und kann es im Code anwenden
* Ich kenne die verschiedenen Formen wie man Objekte registriert, damit diese verwendet werden können
* Ich verstehe Delegation als Form von HAT-Beziehungen 

-- 

### Begriff und Definition von Delegation

Wie in der richtigen Welt geht es darum, die Arbeit an jemanden anders zu *delegieren*, frei nach dem Motto "Wieso soll ich die Arbeit ausführen, wenn du es besser machen kannst?".

Auf die OO-Programmierung angewandt, heisst das dass **eine Klasse ihre Operationen um äquivalente Methoden aus einer anderen Klasse erweitert.** 

Allgemein: Eine Methode *tuWas()* in einem Objekt a wird derart implementiert, indem es
die entsprechende Methode *tuWasAehnliches()* in einem bereits vorhandenen Objekt b
aufruft.

---

### Interaktion

Damit unser Objekt a mit einem Objekt b interagieren kann, muss Objekt a eine **Referenz**
auf das Objekt b kennen. Mit Hilfe dieser Referenz kann das Objekt a nun Methoden
auf dem Objekt b aufrufen.
In Java wird dies mit dem Punkt **.-Operator** bewerkstelligt:

Hier ist eine schematische Code-Darstellung:

```
class A {
    // Attribut , Parameter oder lokale Variable :
    B objectB = ...;
    public void tuWasAehnliches () {
        objectB.tuWas ();   //hier rufen wir nun das andere Objekt auf
    }
}

class B {
    public void tuWas () { ... }
}

```
Diese Art der Interaktion nennen wir Delegation. Durch eine HAT-Beziehung zu einer anderen Klasse, **erweitern wir die Funktionalitäten** der ersten Klasse.
Es geht aber auch darum, eine neue Datenstruktur um **eine bestehende Struktur zu erweitern** (aus bestehenden Datenstrukturen zu komponieren) und im zugehörigen bestehenden Modul Funktionen aufzurufen, die eng mit der bestehenden Struktur verbunden sind.
Programmiert wird das, indem zunächst jede Klasse einzeln programmiert wird, doch danach
wird ein Objekt (mittels Referenzvariable) Teil des anderen Objektes


### Einsatz von Referenzvariablen

In der Delegation wird Code wiederverwendet, ohne dass wir hier die Vererbung brauchen. Wir fügen  Objekte hinzu, welche wir für unseren eigenen Gebrauch benötigen.

Beispiel:

```
public class Picture
{
    private Square wall;
    private Square window;
    private Triangle roof;
    private Circle sun;
    

```

Damit die *Picture* Klasse ein Bild erzeugen kann, benötigt sie die Elemente wie *Square*, *Triangle*, *Person*, etc..

Entsprechend wird das Bild dann in einer eigenen Methode erzeugt, in dem wir die Methoden dieser Elemente verwenden:

```
/**
     * Draw this picture.
     */
    public void draw()
    {
        wall = new Square();
        wall.moveHorizontal(-140);
        wall.moveVertical(20);
        wall.changeSize(120);
        wall.makeVisible();
        
        window = new Square();
        window.changeColor("blue");
        window.moveHorizontal(-120);
        window.moveVertical(40);
        window.changeSize(40);
        window.makeVisible();

        etc.

    }
}
```

---

### Registrieren von Objekten

Es gibt vier verschiedene Varianten wie man Objekte registrieren kann.

#### Variante 1: Objekt direkt bei der Deklaration instanziieren

Das Attribut wird direkt bei der Deklaration instanziiert. Dies heisst aber auch, dass z.Bsp. Default-Werte gleich gesetzt werden - was man vielleicht nicht unbedingt möchte.

```
public class Picture {

    Square wall = new Square(120);
    
}
```

#### Variante 2: Objekt wird im Konstruktor als Parameter übergeben oder instanziiert

Diese Variante ist die übliche und wir haben diese Variante schon angetroffen, wenn es um HAT-Beziehungen geht. Hier gibt es zwei Möglichkeiten:

a)	Das Objekt existiert bereits und wird als Parameter dem Konstruktor übergeben:

```
public Picture(Square s)
    {
        this.wall = s
    }

```
Als HAT-Beziehung wäre das eine *Aggregation*.


b)	Das Objekt wird im Konstruktor instanziiert:

```
public Picture()
    {
        wall = new Square();
    }

```
Als HAT-Beziehung wäre das eine *Komposition*.


#### Variante 3: Objekt wird mittels setter-Methoden gesetzt

Das Objekt wird durch den Aufruf einer setter-Methode als Parameter übergeben.
*Hinweis: Mittlerweile können setter-Methodes in jeder IDE automatisiert generiert werden.*


#### Variante 4: In einer Methode nur bei Bedarf erzeugen

Dies ist eine interessante Variante, wo überprüft wird, ob ich das Objekt überhaupt benötige. Nur dann wird es instanziiert. Dies ist die sog. *lazy initialisation* Variante:

```
public void addPerson() {
    	if (null == this.person) {
    		this.person = new Person();
    	}
    	this.person.changeColor("blue");
        this.person.makeVisible();
    }
```

Es wird zuerst überprüft, ob es das Person objekt schon gibt. 

#### Weitere Variante der Delegation beim Interface

Wenn wir Interfaces kennenlernen, werden wir sehen, dass auch dort die Delegation angewendet wird. So können wir die Arbeit an ein Interface delegieren (und müssen uns nicht darum kümmern, welche implementierende Klasse die Methode effektiv ausführt).


### Kleine Übung: eigene Stack Klasse schreiben

Implementieren Sie eine Klasse, welche die Datenstruktur *Stack* abbildet.

Machen Sie sich zuerst schlau, um was es beim Stack überhaupt geht, und was die wesentlichen Funktionen sind.
Z.Bsp. hier: https://de.wikipedia.org/wiki/Stapelspeicher

Ihre Klasse soll dabei *nicht die bereits existierende Java-Klasse Stack verwenden*. Sie schreiben die entsprechenden Methoden selbst.

Überlegen Sie sich welche Art von Datenstruktur Ihr Stack braucht, um die Elemente abzuspeichern. Diese Datenstruktur werden Sie verwenden und die existierenden Methoden aufrufen. Sie wenden somit Delegation an. 



# Checkpoint
* Ich habe das Prinzip der Delegation verstanden und kann es anhand eines Beispiels erklären
* Ich kenne die verschiedenen Formen wie man Objekte für die Delegation registriert
* Ich kann Delegation im Zusammenhang mit HAT-Beziehungen erklären
* Ich verstehe Delegation als eine Form von Code-Wiederverwendung
