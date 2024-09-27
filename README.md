# User Dashboard Application

This project is a **User Dashboard** built with **React**, **TypeScript**, and **SCSS**. The dashboard provides a comprehensive interface to manage user data, view user details, and filter users based on various criteria. It is styled using **SCSS** for a modern and responsive design.

## Features

- **User List Table**: Displays users with details like name, email, status, registration date, and activity.
- **User Filters**: Provides options to filter users by organization, email, phone number, or status.
- **User Details Page**: Displays extensive user details such as personal information, education, employment, social media links, and guarantor details.
- **Mock Data**: Utilizes mock data for users, including randomly generated profile pictures, loan amounts, savings, and account information.

## Technology Stack

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript, providing static typing.
- **SCSS**: A CSS preprocessor that allows the use of variables, nesting, and more to style the components efficiently.

### Data:
- The mock data was generated using JSON with fields including:
  - Full name
  - User tier (represented by stars)
  - Account balance and details
  - Personal and employment information
  - Social media links
  - Guarantor information
  - Randomized profile pictures from [randomuser.me](https://randomuser.me)

## Application Structure

1. **Login Page**: Basic login form allowing users to authenticate.
2. **Dashboard**: The main user interface displaying:
   - **User statistics**: Total users, active users, users with loans, etc.
   - **User List**: A table that displays the user's essential details.
   - **Filters**: Allows users to filter based on organization, email, phone number, or user status.
3. **User Details Page**: 
   - Displays detailed information about a specific user.
   - Includes personal, educational, employment, and social media details.
   - Displays information about the user's guarantor(s).
   - Tabs for **Documents**, **Bank Details**, **Loans**, **Savings**, and **App/System Information**.

## Getting Started

### Prerequisites:
- Node.js and npm installed.

### Installation:

1. Clone the repository:
   ```bash
   git clone <repo-url>
