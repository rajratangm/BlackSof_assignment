# Supreme Group Clone

This project is a clone of Supreme Group built using React.js, TypeScript, and Tailwind CSS. It replicates the core UI and functionality of the original webpage with a responsive and optimized design.

## Tech Stack

- Frontend: React.js, TypeScript
- Styling: Tailwind CSS

## Deployment Link
- deployed on versel
- https://black-sof-assignment-alpha.vercel.app/

## Project Setup Instructions

- Clone the repository:
- 
- Navigate to the project directory:

- cd supreme-group-clone

- Install dependencies:

- npm install
- Start the development server:


- npm run dev

**Component Architecture Overview**

The project follows a modular component-based structure:


- /src
 ├── components   # Reusable UI components
 ├── pages        # Page-level components
 ├── assets       # Images, icons, and other static files
 ├── hooks        # Custom React hooks
 ├── styles       # Global styles and Tailwind configuration
 ├── utils        # Utility functions
 ├── App.tsx      # Main application entry point
 ├── main.tsx     # ReactDOM rendering

**Responsive Design Strategy**

- Utilized Tailwind CSS breakpoints for mobile-first responsiveness.

- Implemented flexbox and grid layouts for adaptive designs.

- Ensured consistency across devices using relative units (rem, %) instead of px.

**Performance Optimization Techniques**

- Lazy loading implemented for images and assets.
- React.memo() used to prevent unnecessary re-renders.
- Code splitting via React’s dynamic import().
- Used Tailwind JIT mode to generate only required styles.

**Accessibility Considerations**

- ARIA attributes added for better screen reader support.
- Keyboard navigability ensured across components.
- Used semantic HTML tags to improve readability.

##  Third-Party Libraries Used

This project is built with .

- React Router for page navigation.
- Framer Motion (optional) for animations.
- React Icons for scalable SVG icons.

## Assumptions & Decisions Taken

- Focused on replicating UI instead of backend functionalities.
- Used Tailwind CSS utility classes instead of separate CSS files.
- Chose TypeScript for type safety and maintainability.

## Suggested Upcoming Features

- Implementing backend for dynamic data fetching.
- Adding dark mode support.
- Optimizing SEO with metadata and Open Graph tags.
