![TBZ Logo](../x_gitres/tbz_logo.png)

[TOC]

# Other Data Structures and Algorithms

---
### Learning Goal: 
* I know other data structures such as Map, Stack and Graph
* I can implement other data structures in my own classes
* I can implement interfaces suche as Iterator or Comparable

---

# Collection Classes in Java

Java provides a rich set of *collection classes* to store, organize, and manipulate data efficiently.  
While arrays or lists are the most common data structures, there are many others designed for different purposes.

For a general overview of Java collections, see:  
👉 [Java Collections Overview – javatpoint.com](https://www.javatpoint.com/collections-in-java)

In this section, we’ll look at some key collection classes and common **algorithms** that can be applied to them.

---

## 🗺️ Map Class

A **Map** stores data in key–value pairs, similar to a dictionary or phone book — where each *key* maps to a *value*.  
Java provides the `Map` interface with several implementations, such as `HashMap`, `TreeMap`, and `LinkedHashMap`.

### Example
```java
import java.util.*;

public class ExampleMap {
    public static void main(String args[]) {
        Map<Integer, String> map = new HashMap<>();
        map.put(100, "Amit");
        map.put(101, "Vijay");
        map.put(102, "Rahul");

        // Elements can traverse in any order
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
    }
}
```

### Rules to Remember
* Each key is **unique** within the map.  
* If a key already exists, adding the same key replaces its value.

See more about Maps here:  
👉 [Map Interface in Java – GeeksforGeeks](https://www.geeksforgeeks.org/java-map-interface-in-java/)

---

### 🧮 Algorithms using Map

#### 1. Lookup by Key
Quickly access data using its key:
```java
String name = map.get(101);
System.out.println("Name with key 101: " + name);
```

#### 2. Frequency Count (Word Count)
A common use of `Map` is to count occurrences:
```java
Map<String, Integer> wordCount = new HashMap<>();
String text = "to be or not to be";

for (String word : text.split(" ")) {
    wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
}

for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

#### 3. Sorting by Key or Value
```java
map.entrySet().stream()
   .sorted(Map.Entry.comparingByValue())
   .forEach(System.out::println);
```

---

## 🧱 Stack Class

A **Stack** is a data structure that follows the **LIFO (Last In, First Out)** principle —  
the last item added is the first one to be removed.

You can think of it like a stack of plates: you add (push) to the top, and remove (pop) from the top.

### Main Operations
* `push()` – add an element  
* `pop()` – remove the top element  
* `peek()` – look at the top element without removing it  

See more about stacks here:  
👉 [Stack Data Structure – GeeksforGeeks](https://www.geeksforgeeks.org/stack-data-structure/)

---

### Example
```java
import java.util.*;

public class ExampleStack {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();
        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");

        System.out.println("Top element: " + stack.peek());
        System.out.println("Removed: " + stack.pop());
        System.out.println("Now top element: " + stack.peek());
    }
}
```

---

### ⚙️ Algorithms using Stack

#### 1. Reverse a String
```java
Stack<Character> stack = new Stack<>();
String input = "hello";

for (char c : input.toCharArray()) stack.push(c);
StringBuilder reversed = new StringBuilder();
while (!stack.isEmpty()) reversed.append(stack.pop());

System.out.println(reversed.toString());
```

#### 2. Balanced Parentheses Check
```java
Stack<Character> stack = new Stack<>();
String expr = "((a+b)*c)";
boolean balanced = true;

for (char ch : expr.toCharArray()) {
    if (ch == '(') stack.push(ch);
    else if (ch == ')') {
        if (stack.isEmpty()) { balanced = false; break; }
        stack.pop();
    }
}
if (!stack.isEmpty()) balanced = false;

System.out.println("Balanced: " + balanced);
```

#### 3. Depth-First Search (DFS) using Stack
```java
Stack<Integer> stack = new Stack<>();
Set<Integer> visited = new HashSet<>();
Map<Integer, List<Integer>> graph = new HashMap<>();

graph.put(1, Arrays.asList(2, 3));
graph.put(2, Arrays.asList(4));
graph.put(3, Arrays.asList(5));

stack.push(1);
while (!stack.isEmpty()) {
    int node = stack.pop();
    if (!visited.contains(node)) {
        visited.add(node);
        System.out.print(node + " ");
        for (int neighbor : graph.getOrDefault(node, List.of())) {
            stack.push(neighbor);
        }
    }
}
```

---

## 🔗 Graph Class

A **Graph** represents relationships between objects.  
It consists of **vertices (nodes)** and **edges (connections)** between them.

Graphs are used to model networks — for example:
* Social networks (friends/followers)
* Transportation systems (routes and stops)
* The internet (webpages and links)

Each edge can have attributes like *distance*, *cost*, or *capacity*.

Learn more about graphs:  
👉 [Graphs – dev.to](https://dev.to/tamerlang/data-structures-graphs-2960)

---

### Example Representation in Java
```java
Map<Integer, List<Integer>> graph = new HashMap<>();
graph.put(0, Arrays.asList(1, 2));
graph.put(1, Arrays.asList(2));
graph.put(2, Arrays.asList(0, 3));
graph.put(3, Arrays.asList(3));
```

---

### 🧠 Algorithms using Graphs

#### 1. Breadth-First Search (BFS)
```java
Queue<Integer> queue = new LinkedList<>();
Set<Integer> visited = new HashSet<>();
queue.add(2);

while (!queue.isEmpty()) {
    int node = queue.poll();
    if (!visited.contains(node)) {
        visited.add(node);
        System.out.print(node + " ");
        for (int neighbor : graph.getOrDefault(node, List.of())) {
            queue.add(neighbor);
        }
    }
}
```

#### 2. Depth-First Search (DFS)
```java
Set<Integer> visited = new HashSet<>();
dfs(graph, 0, visited);

static void dfs(Map<Integer, List<Integer>> graph, int node, Set<Integer> visited) {
    if (visited.contains(node)) return;
    visited.add(node);
    System.out.print(node + " ");
    for (int neighbor : graph.getOrDefault(node, List.of())) {
        dfs(graph, neighbor, visited);
    }
}
```

#### 3. Dijkstra’s Algorithm (Shortest Path)
> Used to find the shortest distance between nodes in a weighted graph.  
> (Implementation beyond this course’s basics, but useful to mention as an application.)

---

## 🧩 Summary Table

| Collection Type | Structure | Access Principle | Typical Algorithms |
|-----------------|------------|------------------|--------------------|
| **Map** | Key–Value pairs | Direct access by key | Lookup, word count, sorting |
| **Stack** | Linear (LIFO) | Last In, First Out | Reverse string, parentheses check, DFS |
| **Graph** | Nodes + Edges | Connected network | BFS, DFS, shortest path |

---

## Further Exercises / Challenges

Select one of these tasks and show your result to your teacher.
Ask AI for help but try to figure out your own solution.

1. Implement a **word frequency counter** using a `HashMap`.  
2. Write a **Stack program** to reverse a sentence.  
3. Use a **Graph** structure to represent your class’s friendship network.  
4. Modify the Graph code to perform both **BFS** and **DFS** traversals.

---

*This content was enhanced with ChatGPT, Oct. 2025.*