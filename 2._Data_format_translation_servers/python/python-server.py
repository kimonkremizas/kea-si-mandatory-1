import pandas as pd
from fastapi import FastAPI

app = FastAPI(title="Python Server", description="Python Server", version="1.0.0")

@app.get("/csv")
async def get_data():
    weatherInJson = pd.read_json("../../0._Files/weather.json")
    weatherInCsv = weatherInJson.to_csv()
    return weatherInCsv