# SMIT_BATCH_18_CLASS_37_PROTOTYPE_INHERITENCE_-_OBJECT_SEAL_AND_FREEZE

# SMIT Batch 18 - Class 37  
## Prototype Inheritance & Object.seal() and Object.freeze()

This repository covers important JavaScript concepts including **Prototype Inheritance**, **Object.seal()**, and **Object.freeze()**.  
It demonstrates how objects inherit properties through the prototype chain and how object modification can be controlled for safer and more predictable applications.

---

## 📌 Project Objective

The main goal of this project is to:

- Understand Prototype Inheritance in JavaScript
- Learn how the prototype chain works
- Explore Object.seal() functionality
- Explore Object.freeze() functionality
- Compare normal, sealed, and frozen objects
- Practice object behavior control

---

## 🧠 Concepts Covered

---

### 1️⃣ Prototype Inheritance

JavaScript follows a **prototype-based inheritance** model.

- Every object has an internal reference to another object called its prototype.
- Objects inherit properties and methods from their prototype.
- Functions have a `.prototype` property.
- Helps in memory optimization because methods are shared.

### 🔹 Example:

```javascript
function Student(name, course) {
  this.name = name;
  this.course = course;
}

Student.prototype.getDetails = function () {
  return `${this.name} is enrolled in ${this.course}`;
};

const student1 = new Student("Abdullah", "JavaScript");
console.log(student1.getDetails());
2️⃣ Object.seal()
Object.seal() restricts modifications:

✔ You can update existing properties
❌ You cannot add new properties
❌ You cannot delete properties

🔹 Example:
const user = {
  name: "Ali",
  age: 22
};

Object.seal(user);

user.age = 23;      // ✅ Allowed
user.city = "Karachi"; // ❌ Not Allowed
delete user.name;     // ❌ Not Allowed
3️⃣ Object.freeze()
Object.freeze() makes the object completely immutable:

❌ Cannot add properties
❌ Cannot delete properties
❌ Cannot update properties

🔹 Example:
const admin = {
  name: "Ahmed",
  role: "Admin"
};

Object.freeze(admin);

admin.role = "User"; // ❌ Not Allowed
admin.city = "Lahore"; // ❌ Not Allowed
delete admin.name; // ❌ Not Allowed
🔍 Difference Between seal() and freeze()
Feature	Normal Object	Object.seal()	Object.freeze()
Add Property	✅ Yes	❌ No	❌ No
Delete Property	✅ Yes	❌ No	❌ No
Update Property	✅ Yes	✅ Yes	❌ No
💻 Technologies Used
HTML (Structure)

JavaScript (Core Logic)

Browser Console for Testing

🚀 How to Run the Project
Clone or download the repository

Open project folder

Open index.html in browser

Open Developer Console (F12)

Test object behaviors

📂 Project Structure
SMIT_BATCH_18_CLASS_37_PROTOTYPE_INHERITENCE_&_OBJECT_SEAL_AND_FREEZE
│
├── index.html
├── script.js
└── README.md
🎯 Learning Outcomes
After completing this class, you will:

Understand prototype chain deeply

Know how inheritance works internally

Control object behavior using seal() and freeze()

Improve JavaScript OOP concepts

Write safer and optimized code

👨‍💻 Author
M. Abdullah Anwar
SMIT Batch 18 – JavaScript

⭐ Support
If this project helped you in understanding JavaScript concepts, give it a ⭐ star and share with your classmates.

