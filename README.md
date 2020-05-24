# CRUD API
This is an API which demonstrates basic CRUD operations on MongoDb
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. Install [Node.js version 10 or greater] (https://nodejs.org/en/download/)
2. Clone this repository:
```
git clone https://github.com/SwapnilRSharma/crud-api.git
```

### How to run a sample

1. Change directory to one of the sample folders, e.g. crud-api:


```
cd crud-api/
```

2. Install the dependencies :

```
npm install
```

3. Run the sample:

```
npm run start
```

### Guide

1. Create a user

```
POST /users
```
2. Read user

```
GET /users/:id
```

3. Read Users

```
GET /users
```
4. Update user

```
PATCH /users/:id
```
5. Delete user

```
DELETE /users/:id
```