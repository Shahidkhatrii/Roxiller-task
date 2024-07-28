# Transaction Dashboard

A React application to display transaction data, including a searchable table, statistics, and a bar chart. Built using React, Tailwind CSS, node.js, express.js.

## Features

- List transactions in a paginated table.
- Search transactions by title, description, or price.
- Filter transactions by month.
- Display statistics for total sales, total sold items, and total not sold items.
- Display a bar chart of item counts within specific price ranges.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shahidkhatrii/roxiller-task.git
   cd roxiller-task/client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

## Backend API

Ensure your backend API is set up with the following endpoints:

- **GET /initializeDb**
  - Description: Initializes the database with seed data. This endpoint should be called once to populate the database with initial data.
- **GET /transactions**

  - Query Parameters: `page`, `perPage`, `search`, `month`
  - Description: Fetches a list of transactions with pagination and search functionality.

- **GET /statistics/:month**

  - Description: Fetches total sales amount, total sold items, and total not sold items for the selected month.

- **GET /barChart/:month**

  - Description: Fetches item counts within specific price ranges for the selected month.

- **GET /pieChart/:month**

  - Description: Fetches unique categories and the number of items in each category for the selected month.

- **GET /combinedData/:month**
  - Description: Fetches combined data from the above APIs for the selected month.

## Usage

1. **Install dependencies:**

   ```bash
   cd roxiller-task/server
   npm install
   ```

2. **Start the backend server:**

   ```bash
   node server.js
   ```

**Access the application:**

Open your browser and navigate to `http://localhost:5173`.

## License

This project is licensed under the MIT License.
