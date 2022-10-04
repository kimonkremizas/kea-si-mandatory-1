from fastapi import FastAPI
from datetime import datetime
import requests

app = FastAPI()

@app.get("/python-time")
def read_root():
    node_time = requests.get('http://127.0.0.1:8080/node-time')
    return {"Python time": datetime.now(), "Node time": node_time.text}