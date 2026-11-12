![TBZ Logo](../x_gitres/tbz_logo.png)



[TOC]

# Generics

---
### Lernziel: 
* Ich kenne den Begriff Generics und kann Beispiele aufzeigen 

-- 

## Idee von Generics

*It would be much easier if programmers could express their intention to use specific types and the compiler ensured the correctness of such types. This is the core idea behind generics.* (Baeldung)

Sie haben das Prinzip von generischen Datentypen bereits angewendet, wenn Sie z.Bsp. bei einer *ArrayList* angeben, mit welchem Datentyp gearbeitet wird.
```
ArrayList<Integer> al = new ArrayList<Integer>()
al.add("Hallo"); // Compilerfehler
```
In diesem Beispiel wird der Compiler einen Fehler ausgeben, da wir versuchen, einen String in eine Liste hinzuzufügen, welche nur Integer akzeptiert.

Der generische Datentyp wurde eingeführt, damit wir als Programmierer nicht das Casting von Datentypen benötigen. 

Beispiel:
```
List list = new LinkedList();
list.add(new Integer(1)); 
Integer i = list.iterator().next();
```
Hier arbeiten wir mit einer LinkedList *ohne generischen* Datentyp.
Wenn wir so arbeiten, dann müssen wir beim Auslesen der Elemente explizit angeben, um welchen Datentyp es sich handelt, da wir sonst eine Casting-Exception zur Laufzeit haben:
```
Integer i = (Integer) list.iterator.next();
```
Das macht die Arbeit mühsamer. Wir müssen auch achten, dass wir das Casting nicht vergessen.


## Diamond operator <> auch bei eigenen Klassen

Somit arbeiten wir mit dem <> Operator, um einen generischen Datentypen festzulegen.
Wir können das auch ausbauen, indem wir z.bsp. unsere eigenen Klassen generisch halten:

```
public class Rechner<E> {
    private E num1;
    private E num2;
    
    public Rechner() {      
    }
    
    public void setNum1(E e) {
        num1 = e;
    }
    
    public void setNum2(E e) {
        num2 = e;
    }
    //...
}

```
In diesem Beispiel wird erst bei der Verwendung von *Rechner* festgelegt, ob für die enthaltenen Variablen ein Typ *Double*, *Integer* oder ein anderer passender numerischer Typ Verwendung finden soll.

### Mehrere Datentypen akzeptieren

Wird für eine oder mehrere Variablen nur ein Datentyp verwendet, reicht wie oben die einfache Nennung eines einzigen Typparameters. Sollen in der Klasse jedoch *verschiedene Typen* Verwendung finden, so werden diese als einfache Komma-separierte Liste hinter dem Klassenbezeichner angegeben. In diesem Fall besteht dann die Möglichkeit, diebeiden Variablen später mit Werten unterschiedlicher Datentypen zu belegen.

Beispiel:

```
public class Rechner<E, F> {
    ///
    }

```

Und ein Aufruf würde so aussehen:
```
Rechner<Integer, Float> rechner = new Rechner<Integer, Float>();
rechner.setNum1(17);
rechner.setNum2(0.5f);
```

Die Verwendung von Generics stellt somit sicher, dass der Compiler die beim Consumer aufgeführten  Datentypen prüft und entsprechend ersetzt und somit die Sicherstellung der Typsicherheit *vor der Laufzeit* gewährleistet. 

## Auftrag: Anwendung von Generics

Zeigen Sie in Ihrem Projekt oder in einer Aufgabe die Anwendung von *eigenen Klassen* mit Generics. Erklären Sie der Lehrperson, was der Vorteil dieser Anwendung ist.



### Quellen und Beispiele:

* Basics of Generics: https://www.baeldung.com/java-generics
* https://javabeginners.de/Klassen_und_Interfaces/Generics/Was_sind_Generics.php
* https://javabeginners.de/Klassen_und_Interfaces/Generics/Erzeugung_einer_generischen_Klasse.php
