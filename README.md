# AI-powered-chatbot
AI-Powered Chatbot for Supplier and Product Information using FastAPI and React.






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
