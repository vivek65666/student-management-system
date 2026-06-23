# Student Management System

A responsive web-based **Student Management System** developed using **HTML, CSS, JavaScript, and MySQL concepts**. The application enables users to manage student records through **CRUD operations (Create, Read, Update, Delete)** with search functionality, validation, and Local Storage data persistence.

---

## Features

- Add Student Records
- Edit Student Information
- Delete Student Records
- Search Students by Name, ID, or Course
- Duplicate Student ID Validation
- Client-side Form Validation
- Delete Confirmation Popup
- Responsive User Interface
- Local Storage Data Persistence
- MySQL Database Design & CRUD Queries
- Git & GitHub Version Control

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage
- MySQL
- SQL
- Git
- GitHub

---

## Screenshots

### Dashboard

![Dashboard](Screenshots/dashboard.png)

### Student Records

![Student Records](Screenshots/student-records.png)

### Search Functionality

![Search Functionality](Screenshots/search-functionality.png)

### Duplicate ID Validation

![Duplicate ID Validation](Screenshots/duplicate-id-validation.png)

### Database Creation & Insert Operation

![Database Creation](Screenshots/Database-Creation-and-Insert.png)

### SQL CRUD Operations

![CRUD Operations](Screenshots/CRUD-Operations.png)

---

## Database Schema

```sql
CREATE TABLE students (
    student_id VARCHAR(20) PRIMARY KEY,
    student_name VARCHAR(100),
    email VARCHAR(100),
    department VARCHAR(50)
);
