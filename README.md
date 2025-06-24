# 📝 To-Do List Web App (Flask + JavaScript)

This is a simple web-based To-Do List application built using:
- 🐍 Python Flask (Backend)
- 🖥 HTML/CSS + JavaScript (Frontend)

## 🚀 Features
- Add tasks with a single click.
- Mark tasks as completed ✅
- Delete tasks 🗑
- Sleek and centered UI layout.
- Shareable via local network (IPv4) or deploy online.

## 🔧 How to Run Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/Shreyagc24/todo-flask-app.git
   cd todo-flask-app

2.Create and activate a virtual environment:
    python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

3.Install dependencies:
pip install -r requirements.txt

⚙️ Deployment Notes
This app uses gunicorn for production WSGI server. Render or any other hosting provider can run:
gunicorn app:app

