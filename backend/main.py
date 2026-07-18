from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from fastapi import UploadFile, File


app = FastAPI(title="AI Janmitra API")

@app.post("/ocr")
async def mock_ocr(file: UploadFile = File(...)):

    return {
        "success": True,
        "data": {
            "name": "Ganesh Lanka",
            "age": 22,
            "gender": "Male",
            "state": "Andhra Pradesh",
            "occupation": "Student",
            "income": 150000,
            "category": "OBC"
        }
    }

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load cleaned dataset
df = pd.read_csv("../data/clean_schemes.csv")
df = df.fillna("Not Available")


# Home API
@app.get("/")
def home():
    return {"message": "AI Janmitra Backend Running Successfully"}

@app.get("/schemes")
def get_all_schemes():
    return df.to_dict(orient="records")

@app.get("/scheme/{name}")
def get_scheme(name: str):

    result = df[
        df["scheme_name"].str.lower() == name.lower()
    ]

    if result.empty:
        return {"message": "Scheme not found"}

    return result.to_dict(orient="records")[0]

@app.get("/search")
def search(keyword: str):

    keyword = keyword.lower()

    result = df[
        df["scheme_name"].str.lower().str.contains(keyword, na=False)
        |
        df["brief_description"].str.lower().str.contains(keyword, na=False)
        |
        df["beneficiary_type"].str.lower().str.contains(keyword, na=False)
        |
        df["categories"].str.lower().str.contains(keyword, na=False)
        |
        df["tags"].str.lower().str.contains(keyword, na=False)
    ]

    return result.to_dict(orient="records")

@app.get("/states")
def states():

    states = sorted(df["state"].dropna().unique().tolist())

    return states

@app.get("/categories")
def categories():

    return sorted(df["categories"].dropna().unique().tolist())

@app.get("/ministries")
def ministries():

    ministries = sorted(df["ministry"].dropna().unique().tolist())

    return ministries

@app.get("/compare")
def compare(name1: str, name2: str):

    scheme1 = df[
        df["scheme_name"].str.lower() == name1.lower()
    ]

    scheme2 = df[
        df["scheme_name"].str.lower() == name2.lower()
    ]

    return {
        "scheme1": scheme1.to_dict(orient="records"),
        "scheme2": scheme2.to_dict(orient="records")
    }

@app.get("/dashboard")
def dashboard():

    return {

        "total_schemes": len(df),

        "total_states": df["state"].nunique(),

        "total_ministries": df["ministry"].nunique(),

        "categories": df["categories"].value_counts().head(10).to_dict()
    }

from pydantic import BaseModel

class User(BaseModel):

    age:int

    gender:str

    state:str

    occupation:str

    income:int

    category:str


@app.post("/eligibility")
def eligibility(user: User):

    result = df[

        df["state"].str.contains(user.state,case=False,na=False)

        |

        df["beneficiary_type"].str.contains(user.occupation,case=False,na=False)

    ]

    return result.head(10).to_dict(orient="records")

@app.post("/chat")
def chatbot(message: dict):

    return {

        "reply":"Gemini response comes here"

    }

@app.get("/statistics")
def statistics():

    return {

        "total_schemes": len(df),

        "states": df["state"].nunique(),

        "ministries": df["ministry"].nunique(),

        "categories": df["categories"].nunique(),

        "beneficiary_types": df["beneficiary_type"].nunique()

    }

@app.get("/recommend")
def recommend():

    return df.sample(5).to_dict(orient="records")

from fastapi import UploadFile, File

@app.post("/ocr")
async def mock_ocr(file: UploadFile = File(...)):
    return {
        "success": True,
        "data": {
            "name": "Ganesh Lanka",
            "age": 22,
            "gender": "Male",
            "state": "Andhra Pradesh",
            "occupation": "Student",
            "income": 150000,
            "category": "OBC"
        }
    }

@app.get("/dashboard/stats")
def dashboard_stats():

    return {
        "total_schemes": len(df),
        "states": df["state"].nunique(),
        "ministries": df["ministry"].nunique(),
        "categories": df["categories"].nunique(),
    }

@app.get("/dashboard/categories")
def category_distribution():

    data = (
        df["categories"]
        .value_counts()
        .head(10)
        .to_dict()
    )

    return data

@app.get("/dashboard/states")
def state_distribution():

    data = (
        df["state"]
        .value_counts()
        .head(10)
        .to_dict()
    )

    return data

@app.get("/dashboard/latest")
def latest_schemes():

    latest = df.head(10)

    return latest.to_dict(orient="records")

@app.get("/dashboard/ministries")
def top_ministries():

    data = (
        df["ministry"]
        .value_counts()
        .head(10)
        .to_dict()
    )

    return data