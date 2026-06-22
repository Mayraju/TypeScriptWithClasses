# TypeScriptWithClasses

This is a TypeScript project for implementing the Express framework using object-oriented principles, classes, and objects.

## 🚀 Setup & Installation Guide

Run these commands in order inside your terminal to initialize and configure the project:

### 1. Initialize the Node.js Project
```bash
npm init
```
* **Why:** Creates your project's `package.json` file, which tracks metadata, dependencies, and execution scripts.

### 2. Install Development Dependencies
```bash
npm install typescript ts-node @types/node @types/express @types/cors --save-dev
```
* **Why:** 
  * `typescript`: The compiler that translates your TypeScript code into JavaScript.
  * `ts-node`: Allows you to run `.ts` files directly in development without compiling first.
  * `@types/...`: Provides type definitions for autocomplete and compile-time error checking.

### 3. Install Production Dependencies
```bash
npm install express cors
```
* **Why:**
  * `express`: The core web framework used to build your backend server and APIs.
  * `cors`: Middleware that allows your server to safely accept requests from different origins/domains.

### 4. Initialize TypeScript Configuration
```bash
tsc --init
```
* **Why:** Creates the `tsconfig.json` file, which sets the compiler rules (like pointing your code output to the `build/` folder).

---

## 🏃 Execution Script

To compile your TypeScript and spin up the server in one go, run:

```bash
npm run start
```
* **Why:** This triggers the configuration script inside `package.json`. It builds the project using the TypeScript compiler (`tsc`) and then immediately executes the compiled JavaScript file using Node (`node build/server.js`).

---

## 📁 Project Structure

* **`src/`**: Core directory containing object-oriented TypeScript (`.ts`) modules.
* **`build/`**: The folder where the compiled production JavaScript (`.js`) code lives.
* **`server.ts`**: The main application entry point that initializes your Express server.
* **`tsconfig.json`**: TypeScript configuration rules.
* **`package.json`**: Application scripts and tracking file for installed modules.
