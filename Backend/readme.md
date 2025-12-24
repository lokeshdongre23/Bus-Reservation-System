## Bus Reservation System

# followiing is the api end points

---

1. "/" :GET-> home page
2. "/buses"
   :GET-> view alll buses
   :POST -> create new bus
   Request type (JSON)

   sample JSON

```
   {
   "busName": "Super Express",
   "busNum": "SE1234",
   "totalSeat": 50,
   "source": "City A",
   "destination": "City B"
   }

```

3. "/booking"
   : GET -> view Bus Bookings
   : POST -> make booking
   Request type JSON

   Sample JSON

```
{
  "busNumber": "SE1234",
  "numOfSeats": 2
}
```

### `.env` struncture

```
MONGO_DB_URI=Mongo_DB_Connection_Link
PORT=3000

```

### Dependencies

1. npm i
2. npm install express
3. npm install -D typescript ts-node nodemon @types/node @types/express
4. npm i nodemon
5. npm install dotenv
6. npm i mongoose

### to Run

`npm run dev`

### Local host Port

`http://localhost:<YOUR_PORT>`

### Sample package.json file

```
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "server.ts",
  "scripts": {
    "dev": "nodemon src/server.ts"
  },
  "dependencies": {
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "mongoose": "^9.0.2"
  },
  "devDependencies": {
    "@types/express": "^5.0.6",
    "@types/node": "^25.0.3",
    "nodemon": "^3.1.11",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  }
}

```
