# WAF Lab – Assignment 5 (18 Programs)

This folder contains all 18 assignment programs separated into individual runnable projects.

## Requirements
- Node.js and npm installed.
- A web browser for the React programs.
- Internet access the first time you run `npm install` to download dependencies.

## How to run a program
1. Open this folder in VS Code.
2. Open the specific `program-XX-...` folder for the program you need.
3. Open a terminal in that program folder.
4. Follow that folder's `README.md`.

**Node/Express programs:** run `npm install` if that folder lists dependencies, then `npm start`.
**React programs:** run `npm install`, then `npm run dev`, and open the localhost URL Vite prints.

Each program is independent. Do not paste all programs into the same `App.jsx` or server file. Only run the specific program you need. Programs using port 5000 should be stopped before starting another program that also uses port 5000.

## Program map
- **1. BASIC NODEJS HTTP SERVER** — `program-01-basic-nodejs-http-server/` (Node.js HTTP)
- **2. NODEJS MODULES AND FILE HANDLING** — `program-02-nodejs-modules-and-file-handling/` (Node.js module example)
- **3. BASIC EXPRESSJS SERVER** — `program-03-basic-expressjs-server/` (Node.js / Express)
- **4. EXPRESSJS ROUTING** — `program-04-expressjs-routing/` (Node.js / Express)
- **5. EXPRESSJS MIDDLEWARE** — `program-05-expressjs-middleware/` (Node.js / Express)
- **6. ROUTE-SPECIFIC MIDDLEWARE** — `program-06-route-specific-middleware/` (Node.js / Express)
- **7. REST API FOR STUDENT MANAGEMENT** — `program-07-rest-api-for-student-management/` (Node.js / Express)
- **8. REST API WITH PUT AND DELETE** — `program-08-rest-api-with-put-and-delete/` (Node.js / Express)
- **9. EXPRESSJS API WITH MULTIPLE ROUTES AND MIDDLEWARE** — `program-09-expressjs-api-with-multiple-routes-and-middleware/` (Node.js / Express)
- **10. MINI REST API – PRODUCT MANAGEMENT** — `program-10-mini-rest-api-product-management/` (Node.js / Express)
- **11. REACTJS REUSABLE STUDENT COMPONENT** — `program-11-reactjs-reusable-student-component/` (React + Vite)
- **12. REACTJS COUNTER USING useState** — `program-12-reactjs-counter-using-usestate/` (React + Vite)
- **13. REACTJS useState AND useEffect – PRODUCT LIST** — `program-13-reactjs-usestate-and-useeffect-product-list/` (React + Vite)
- **14. NODEJS EXPRESS SERVER – HOME, ABOUT, CONTACT** — `program-14-nodejs-express-server-home-about-contact/` (Node.js / Express)
- **15. REACTJS EMPLOYEE MANAGEMENT** — `program-15-reactjs-employee-management/` (React + Vite)
- **16. REACTJS COURSE REGISTRATION USING CONTEXT API** — `program-16-reactjs-course-registration-using-context-api/` (React + Vite)
- **17. NODEJS + EXPRESSJS STUDENT MANAGEMENT REST API** — `program-17-nodejs-expressjs-student-management-rest-api/` (Node.js / Express)
- **18. ONLINE EVENT MANAGEMENT REST API** — `program-18-online-event-management-rest-api/` (Node.js / Express)

## Notes
- Program 2 requires both `app.js` and `mathModule.js`; they are included.
- Programs 11–13, 15 and 16 each have their own React/Vite scaffolding (`package.json`, `index.html`, `src/main.jsx`, `src/App.jsx`, and `src/style.css`).
- The Node/Express programs use in-memory sample data where applicable. Data resets when the server restarts; this follows the assignment examples.
- The programs are kept independent so they can be demonstrated one at a time.
