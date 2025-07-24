const menuItems = [
    {
        title: 'Introduction to core java',
        description: `
Core Java is the foundation for all Java platforms. It covers the basics needed for developing general-purpose applications.

**Key Concepts:**
- What is Java?
- JDK, JRE, JVM
- Features of Java (Platform Independent, Object-Oriented, Secure, etc.)

**Example:**
Java is used in desktop, web, and Android development.

**Why Learn Core Java?**
Understanding Core Java is essential before moving into advanced frameworks like Spring or Android development.
    `.trim()
    },
    {
        title: 'Java Language',
        description: `
This topic covers the syntax and structure of the Java language.

**Topics Covered:**
- Basic syntax and structure
- Data types (int, float, boolean, etc.)
- Control statements (if, for, while)
- Operators (arithmetic, logical, relational)

**Sample Code:**
\`\`\`java
int a = 10;
if (a > 5) {
  System.out.println("A is greater than 5");
}
\`\`\`

Java is statically typed, making it robust and less prone to runtime errors.
    `.trim()
    },
    {
        title: 'Array',
        description: `
Arrays in Java are used to store multiple values of the same type.

**Key Points:**
- Declaration and Initialization
- Iteration using loops
- Multidimensional arrays

**Example:**
\`\`\`java
int[] nums = {1, 2, 3, 4};
for (int num : nums) {
  System.out.println(num);
}
\`\`\`

Arrays are fixed in size; for dynamic collections, use ArrayList.
    `.trim()
    },
    {
        title: 'OOPS',
        description: `
Object-Oriented Programming is the backbone of Java.

**4 Pillars of OOP:**
1. **Encapsulation** - hiding internal state via access modifiers.
2. **Inheritance** - extending one class from another.
3. **Polymorphism** - ability to take many forms.
4. **Abstraction** - hiding complex implementation.

**Example:**
\`\`\`java
class Animal {
  void sound() { System.out.println("Generic sound"); }
}
class Dog extends Animal {
  void sound() { System.out.println("Bark"); }
}
\`\`\`
    `.trim()
    },
    {
        title: 'Package',
        description: `
Packages in Java are used for grouping related classes and interfaces.

**Why Use Packages?**
- Avoid name conflicts
- Easier code organization
- Access control

**Example:**
\`\`\`java
package com.myapp.utils;
\`\`\`

You can import other packages using the \`import\` statement.
    `.trim()
    },
    {
        title: 'java.lang package',
        description: `
The \`java.lang\` package is automatically imported in every Java program.

**Important Classes:**
- String
- Object
- Math
- System

**Example:**
\`\`\`java
System.out.println(Math.sqrt(16));  // 4.0
\`\`\`

This package forms the core language functionality in Java.
    `.trim()
    },
    {
        title: 'Wrapper Class',
        description: `
Wrapper classes provide a way to use primitive types as objects.

**Primitive to Object:**
- int → Integer
- double → Double

**Auto-boxing & Unboxing:**
\`\`\`java
Integer num = 10;  // Auto-boxing
int x = num;       // Unboxing
\`\`\`

Used in collections (e.g., \`List<Integer>\`) where primitives are not allowed.
    `.trim()
    },
    {
        title: 'Exception Handling',
        description: `
Java provides a powerful mechanism to handle runtime errors.

**Keywords:**
- \`try\`, \`catch\`, \`finally\`
- \`throw\`, \`throws\`

**Example:**
\`\`\`java
try {
  int a = 5 / 0;
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero");
} finally {
  System.out.println("Cleanup");
}
\`\`\`

Custom exceptions can be created by extending the Exception class.
    `.trim()
    }
];


type MenuItem = {
    title: string,
    description: string
}

interface TutorialSidenavProps {
    onSelect: (value: MenuItem) => void;
}

const TutorialSidenav = ({ onSelect }: TutorialSidenavProps) => {
    return (
        <aside className="w-56 h-[100vh] bg-white hidden lg:block sticky top-0 border border-indigo-300 p-4 space-y-3">
            {menuItems.map((item, index) => (
                <button key={index} onClick={() => onSelect(item)} className="block cursor-pointer text-left w-full text-lg font-semibold hover:text-blue-600">{item.title}</button>
            ))}
        </aside>
    )
}

export default TutorialSidenav