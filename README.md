# Online strore (Ruby on Rails + React)

This project is an online store that utilizes Ruby on Rails to create an API and React for the frontend. 

It allows users to register, login, and logout, edit their own information, search for products, view, add to cart, 
create and review their orders.

Additionally, it features an administrator role, granting privileges to add, edit, and delete products, 
view all users, edit their information, and delete them as well.

Backend repository: https://github.com/Kozatskiy-Artem/rails-react-store-api

## Getting Started

### Clone the repository:
```
git clone https://github.com/Kozatskiy-Artem/rails-react-store-front.git
```
OR
```
git clone git@github.com:Kozatskiy-Artem/rails-react-store-front.git
```

### Install dependencies:
Ensure you have Node.js installed. Then run:
```
npm install
```

### Running the Server
To start the React server use the following command:
```
npm run server
```

Open your web browser and navigate to http://localhost:3000/
Or if the backend server is already running on port 3000, navigate to http://localhost:3001/

## Start with Docker

### Run
Make sure you have Docker installed on your system.

Build Docker image:
```
docker build . -t react-image
```

Run container:
```
docker run -p 3001:3000 -d react-image
```

Open your web browser and navigate to http://localhost:3001/.

### Shutdown
```
docker stop
```

### © Project Author: Artem Kozatskyi
