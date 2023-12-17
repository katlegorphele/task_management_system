#!/usr/bin/env python3

'''
Task management app using Python and FastAPI
'''

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}