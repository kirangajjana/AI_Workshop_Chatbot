# 🧠 AI Notes Summarizer

## ✨ Overview

The **AI Notes Summarizer** is a powerful full-stack application designed to streamline your study and information processing. It leverages cutting-edge AI (GPT-4) to summarize notes, answer questions, and extract information from PDF documents. With integrated **speech-to-text**, **text-to-speech**, and **email functionality**, it offers a versatile and accessible learning companion.

---

## 🚀 Key Features

- **🧠 Intelligent Q&A & Summarization**  
  Interact with GPT-4 to get concise answers and summaries from your input text or uploaded documents.

- **🎙️ Voice Input (Speech-to-Text)**  
  Dictate your queries or notes directly using the Web Speech API for hands-free interaction.

- **🔊 Auditory Responses (Text-to-Speech)**  
  Listen to the AI's responses, enhancing accessibility and allowing for multi-modal learning.

- **📄 PDF Document Processing**  
  Upload PDF files, and the application will extract text content, which can then be used as input for the AI.

- **📧 Email Integration**  
  Send your questions and the AI's generated responses directly to any email address for easy archiving or sharing.

- **🖥️ Modern UI**  
  A clean, responsive, and visually appealing user interface built with React and Tailwind CSS.

---

## 🛠️ Tech Stack

### Frontend

- **React** – Component-based JavaScript library for building user interfaces.
- **Tailwind CSS** – Utility-first CSS framework for fast, custom designs.
- **pdfjs-dist** – Client-side PDF parsing and text extraction.
- **Web Speech API** – Native browser API for speech recognition and synthesis.

### Backend

- **Flask** – Lightweight Python web framework.
- **OpenAI Python SDK** – For seamless interaction with GPT-4.
- **python-dotenv** – For managing environment variables securely.
- **smtplib & email.mime.text** – Native Python email libraries.
- **flask-cors** – To handle Cross-Origin Resource Sharing.

---

## ⚙️ Setup & Installation

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- Python 3.9+
- `pip` (Python package manager)
- An OpenAI API Key – [Get it here](https://platform.openai.com/account/api-keys)
- SMTP credentials (e.g., Gmail account with [App Password](https://support.google.com/accounts/answer/185833))

---

### 📥 1. Clone the Repository

```bash
git clone <your-repo-url>

