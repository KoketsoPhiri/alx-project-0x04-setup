# 🚀 Splash App: Next.js Boilerplate with State Management Explorations

Welcome to Splash App, a foundational Next.js project designed as a boilerplate for building modern web applications. This repository not only provides a robust starting point with core features like a shared layout and imperative routing, but also serves as a comparative study on state management patterns in Next.js, specifically exploring React Context API and Redux Toolkit (or just Redux if you didn't use Toolkit).

This project, serving as the setup for alx-project-0x03, showcases best practices for structuring a Next.js application using the App Router and delves into how different state management solutions can be applied and compared for a common use case: a simple counter.

# ✨ Features
Shared Layout (DRY Principle): Implements a reusable Layout component that wraps all pages, providing a consistent Header and Footer across the application, adhering to the Don't Repeat Yourself (DRY) principle.

Reusable Button Component: A highly customizable Button component with support for different sizes, background colors, and action handlers.

Google Fonts Integration: Globally imports and applies the "Montserrat" font from Google Fonts using Tailwind CSS, ensuring consistent and appealing typography throughout the application.

Imperative Routing: Demonstrates programmatically navigating between pages using the useRouter hook from next/navigation, particularly useful for navigation triggered by user interactions (e.g., button clicks).

Centralized Interfaces: All TypeScript interfaces (ButtonProps, LayoutProps, PageRouteProps) are consolidated into a single interface/index.ts file, promoting better code organization and maintainability.

Custom 404 Page: A custom and user-friendly "Page Not Found" (404) error page (app/not-found.tsx) to enhance the user experience for non-existent routes.

# 💡 State Management Explorations
This repository includes three distinct versions of the "Splash App", each showcasing a different approach to managing a simple global counter state. This allows for a direct comparison of implementation complexity, performance, and overall developer experience between basic React state, Context API, and Redux.

1. Original Boilerplate
Description: This is the baseline project as described above, using standard React state where appropriate for local component state, but without a dedicated global state management solution for the counter.

Location: This is the main branch/root directory of the repository.

2. Context API Version
Problem Addressed: The goal was to manage a simple global counter that could be incremented and decremented from various parts of the application without relying on prop drilling.

Implementation: This version integrates React's Context API to create a CounterContext and CounterProvider. Components needing access to the counter state or its update functions can consume the context directly, eliminating the need to pass props down through multiple levels of the component tree.

Benefits:

Reduced Prop Drilling: Components can access the counter directly, regardless of their nesting depth.

Simpler Setup for Localized Global State: For straightforward global state needs, Context API offers a relatively quick and easy setup.

[Add any other specific benefits you observed, e.g., "Good for UI-related global states"]

Location: [Specify branch name, e.g., 'context-api-branch'] or [Specify directory path, e.g., 'path/to/context-api-version']

3. Redux Version
Problem Addressed: Similar to the Context API version, this aimed to manage the simple global counter. This implementation allowed for a direct comparison of Redux's more structured approach against the Context API.

Implementation: This version utilizes Redux (or Redux Toolkit) to create a centralized store for the counter state. Actions are dispatched to modify the state, and reducers define how those actions update the state immutably. Components connect to the Redux store using react-redux hooks (useSelector, useDispatch).

Benefits:

Centralized and Predictable State: All global state is consolidated in a single store, making state changes predictable and traceable.

Enhanced Debugging: Tools like Redux DevTools provide powerful insights into state changes, actions, and their effects.

Scalability for Complex State: While a simple counter might not fully demonstrate it, Redux's patterns (actions, reducers, middlewares) provide a robust foundation for managing more complex and asynchronous global state as an application grows.

[Add any other specific benefits you observed, e.g., "Easier testing of state logic"]

Location: [Specify branch name, e.g., 'redux-version'] or [Specify directory path, e.g., 'path/to/redux-version']

# ⚖️ Comparison and Learnings
Through the implementation of the same "simple counter" use case with both Context API and Redux, I gained valuable insights into their respective strengths and weaknesses:

Context API for Simplicity: For managing genuinely simple, often UI-related global state (like theme preferences or a basic counter), Context API proved to be straightforward and required less boilerplate. It's ideal when you primarily need to avoid prop drilling for non-complex data.

Redux for Scalability and Predictability: While perhaps "overkill" for just a simple counter, Redux's structured approach with actions, reducers, and a single source of truth offers superior benefits for applications with more complex global state, asynchronous operations, and a need for predictable state changes across a larger codebase. The dev tools are a significant advantage for debugging.

# 🛠️ Technologies Used
Next.js 14+ (App Router): A React framework for production-ready applications.

React 18+: The core JavaScript library for building user interfaces.

TypeScript: A strongly typed superset of JavaScript that enhances code quality and developer experience.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

React Icons (react-icons/fa): A library for including popular icon packs in your React projects.


# 🚀 Getting Started
Follow these instructions to set up and run the project locally.

Prerequisites
Node.js (v20.x or higher recommended, as the project was initialized with v24.3.0 in mind)

npm (comes with Node.js)

Git

Installation
Clone the repository:

Bash

git clone https://github.com/YOUR_GITHUB_USERNAME/alx-project-0x03-setup.git # Replace with your actual repo URL
cd alx-project-0x03-setup/alx-project-0x03 # Navigate into the project directory
Note: The project structure is alx-project-0x03-setup/alx-project-0x03 as per the initial setup instructions.

Install dependencies:

Bash

npm install
Running the Development Server
To start the development server for the Original Boilerplate:

Bash

npm run dev
[Important: Add instructions for running the Context API and Redux versions here. For example:]

Running the Context API Version
To explore the Context API implementation:

Navigate to the specific branch or directory:

Bash

git checkout [context-api-branch-name] # If it's a branch
# OR
cd [path/to/context-api-version-directory] # If it's a directory
Install dependencies (if new to this directory/branch):

Bash

npm install
Run the development server:

Bash

npm run dev
Running the Redux Version
To explore the Redux implementation:

Navigate to the specific branch or directory:

Bash

git checkout [redux-version-branch-name] # If it's a branch
# OR
cd [path/to/redux-version-directory] # If it's a directory
Install dependencies (if new to this directory/branch):

Bash

npm install
Run the development server:

Bash

npm run dev