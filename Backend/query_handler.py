from sqlalchemy.orm import Session
from models import Product
from database import SessionLocal

async def query_database(query: str):
    session = SessionLocal()
    try:
        if "products under brand" in query.lower():
            brand_name = query.split("brand")[-1].strip()
            products = session.query(Product).filter(Product.brand.ilike(f"%{brand_name}%")).all()
            return [
                {
                    "name": product.name,
                    "price": product.price,
                    "category": product.category
                }
                for product in products
            ]
        else:
            return {"error": "Query not understood"}
    finally:
        session.close()