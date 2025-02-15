# AI-powered-chatbot
AI-Powered Chatbot for Supplier and Product Information using FastAPI and React.


# AI-Powered Chatbot for Supplier and Product Information

## Overview
This project is a chatbot that allows users to query a product and supplier database using natural language. It uses FastAPI for the backend, React for the frontend, and a PostgreSQL database.

## Features
- Query product and supplier information
- Summarize results using an open-source LLM
- User-friendly React interface

## Installation

### Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the FastAPI server:
   ```bash
   uvicorn app:app --reload
   ```

### Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

### Database
1. Create a PostgreSQL database.
2. Run `schema.sql` to create tables.
3. Run `seed_data.sql` to populate the database with sample data.

## Usage
- Open `http://localhost:3000` to access the chatbot interface.
- Enter natural language queries to interact with the database.

## License
This project is licensed under the MIT License.
```

### `.gitignore`

```text
.env
__pycache__/
node_modules/
dist/
build/
*.log
```

This structure is now fully aligned with the GitHub project requirements.













ai-powered-chatbot
├── backend
│   ├── app.py               # Main FastAPI application
│   ├── database.py          # Database connection and models
│   ├── models.py            # SQLAlchemy models for Product and Supplier
│   ├── query_handler.py     # Functions to handle different query types
│   ├── requirements.txt     # Backend dependencies
│   └── .env                 # Environment variables (e.g., database URL, API keys)
│
├── frontend
│   ├── public               # Static files (e.g., favicon, index.html)
│   ├── src
│   │   ├── App.js           # Main React component
│   │   ├── index.js         # Entry point for the React app
│   │   ├── components       # React components (e.g., ChatBox, HistoryList)
│   │   └── styles.css       # Tailwind CSS styles (optional customizations)
│   ├── package.json         # Frontend dependencies
│   └── tailwind.config.js   # Tailwind CSS configuration
│
├── database
│   ├── schema.sql           # Database schema creation script
│   ├── seed_data.sql        # Sample data to populate the database
│
├── .gitignore               # Files and folders to ignore in Git
├── README.md                # Project documentation
└── LICENSE                  # (Optional) License for your project
```



File Descriptions:
backend/app.py:
This is the main file for the backend, running the FastAPI server.
backend/database.py:
Establishes database connection and creates tables.
backend/models.py:
Defines the Product and Supplier SQLAlchemy models.
backend/query_handler.py:
Contains functions to process chatbot queries and fetch data.
frontend/src/App.js:
Main component for the React-based chatbot UI.
database/schema.sql:
SQL script for creating tables in MySQL/PostgreSQL.
database/seed_data.sql:
Script to populate the database with sample data.
README.md:
Add clear instructions for setting up, running, and using the project.
