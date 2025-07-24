'use client'
import TutorialSidenav from "@/components/TutorialSidenav";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

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
    title: string;
    description: string;
};

const TutorialDetail = () => {
    const params = useParams();
    const heading = typeof params.slug === "string" ? params.slug : "";
    const [selected, setSelected] = useState<MenuItem>(menuItems[0]);
    const [openSideNav, setOpenSideNav] = useState(false);
    const descriptionRef = useRef<HTMLDivElement>(null);

    const selectPrev = () => {
        const index = menuItems.findIndex(item => item.title === selected.title);
        if (index > 0) {
            setSelected(menuItems[index - 1]);
        }
        descriptionRef.current?.scrollIntoView({ behavior: 'smooth' })
    };


    const selectNext = () => {
        const index = menuItems.findIndex(item => item.title === selected.title);
        if (index < menuItems.length - 1) {
            setSelected(menuItems[index + 1]);
        }
        descriptionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <section>
            <aside className={`w-64 block absolute top-0 z-10 h-[100vh] lg:hidden transition-transform duration-300 ease-in-out shadow p-4 space-y-3 bg-white ${openSideNav ? 'translate-x-0' : '-translate-x-full'}`}>
                <RxCross2 onClick={() => setOpenSideNav(false)} />
                {menuItems.map((item, index) => (
                    <button key={index} onClick={() => setSelected(item)} className="block text-left w-full cursor-pointer text-lg font-semibold hover:text-blue-600">{item.title}</button>
                ))}
            </aside>
            <div className="flex  bg-gray-100">
                <TutorialSidenav onSelect={setSelected} />
                <div ref={descriptionRef} className="p-4 flex-1 flex flex-col min-h-[calc(100vh+60px)]">
                    <h1 className="flex items-center mb-5 lg:items-start gap-3 text-lg lg:text-3xl urbanist_bold"><RxHamburgerMenu className="lg:hidden" onClick={() => setOpenSideNav(true)} />{selected.title}</h1>
                    <p className="flex-1">{selected.description}</p>
                    <div className="flex items-center justify-between my-6 px-10">
                        <button onClick={() => selectPrev()} className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white py-2 px-3 rounded-md flex items-center gap-2"><FaAngleDoubleLeft />Previous</button>
                        <button onClick={() => selectNext()} className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white py-2 px-3 rounded-md flex items-center gap-2">Next<FaAngleDoubleRight /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TutorialDetail