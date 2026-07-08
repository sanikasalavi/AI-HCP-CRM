# AI CRM HCP Module

## Project Overview

This project is an AI-powered CRM system for Healthcare Professionals (HCPs). It enables medical representatives to log doctor interactions, generate AI summaries using Groq LLM, and store the data in PostgreSQL.

## Technologies Used

- React
- FastAPI
- PostgreSQL
- LangGraph
- Groq LLM
- SQLAlchemy

## Features

- Log doctor interactions
- AI-generated meeting summaries
- PostgreSQL database integration
- REST APIs with FastAPI
- LangGraph workflow

## Project Structure

```
backend/
frontend/
```

## Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Documentation

```
http://127.0.0.1:8000/docs
```
