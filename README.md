# Blog API

---

## Overview

This is a RESTful Blog API built with NestJS and documented using Swagger. It allows users to register, authenticate, manage profiles, create and manage articles, and interact with tags.

---

## Features

- User registration and login
- User profile management
- Article CRUD (Create, Read, Update, Delete)
- Tag retrieval
- Follow/unfollow users
- Favorite/unfavorite articles
- Feed of articles from followed users

---

## Authorization

Most endpoints require authorization via a JWT token, passed in the `Authorization` header as `Bearer <token>`.

---

## Environment Variables

Create a `.env` file in the project root with the following content:

```env
JWT_SECRET=your_jwt_secret_key_here
---

## Documentation

The API documentation is available through Swagger UI at the path:

```

/api

```

This provides interactive testing and detailed information on all endpoints, request parameters, and response schemas.

---

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Configure environment variables for database and JWT secrets
4. Run the app with `npm run start`
5. Open your browser and visit `http://localhost/api` to explore the API via Swagger UI

---

If you want me to add usage examples, setup instructions, or anything else, just say!
```
