# User Registration Portal

This project is a modern and professional frontend for a user registration form, built with React and Vite. It demonstrates best practices for building clean, realistic, and user-friendly forms in a production-like environment.

## Features

- **Clean & Responsive UI**: A modern design that looks great on both desktop and mobile devices.
- **Light & Dark Mode**: Automatically detects the user's system preference and provides a toggle to switch between light and dark themes.
- **Role-Based Routing**: Redirects users to a dedicated dashboard (`/admin` or `/user`) after a successful registration based on their selected role.
- **Complete Form Fields**: Includes all essential fields for user registration: Full Name, Email, Password, Confirm Password, Phone Number, Role Selection, and Terms & Conditions.
- **Advanced Validation**: Provides instant feedback to users only after a field has been interacted with, and prevents submission of invalid data.
- **User-Friendly Phone Validation**: Accepts phone numbers with common formatting characters.
- **Submission Simulation**: Simulates an API request with a loading spinner and prevents multiple submissions while processing.
- **Password Visibility Toggle**: Allows users to show or hide their password for better usability.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling client-side routing and navigation.
- **Vite**: A fast and modern build tool for web development.
- **JavaScript (ES6+)**: The core programming language.
- **CSS3**: For styling the application with a clean, responsive design, using CSS variables for theming.

## How to Run Locally

To get this project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system (which includes npm).

### Installation & Setup

1. **Clone the repository** (or download the source code) to your local machine.

2. **Navigate to the project directory**:
   ```bash
   cd path/to/user-registration-portal
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:5173` to see the application in action.
