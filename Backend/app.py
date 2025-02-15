from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from query_handler import query_database

app = FastAPI()

class QueryRequest(BaseModel):
    query: str

@app.post("/chatbot/query")
async def chatbot_query(request: QueryRequest):
    query = request.query
    db_response = await query_database(query)
    return {"query": query, "response": db_response}