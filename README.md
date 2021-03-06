# Median Prime

### TouchBistro Full Stack Challenge - Summer 2019

Full stack application with Node.js and Express back-end and React front-end allowing user to retrieve median prime number(s) given an upper limit.

![Screenshot](https://github.com/abhay-vaidya/touchbistro-full-stack-s19/blob/develop/screenshot.png)

## Setup

```bash
# Clone the repository
git clone https://github.com/abhay-vaidya/touchbistro-full-stack-s19

# Navigate inside directory
cd touchbistro-full-stack-s19

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The development server will run the API on `localhost:8080` and the React app on `localhost:3000`.

### Production

```bash
# Build for production
npm run build

# Start production server (runs build prior to starting)
npm start
```

The production server will run the API on `localhost:8080/api` and the React app on `localhost:8080`.

### Tests

```bash
# Run all tests
npm t
```

## API

#### Get median prime(s)

Returns an array of size 1 or 2 containing median primes given the upper limit. If the limit is not a valid number, endpoint returns error `400`.

**Endpoint:** `GET: /api/median-prime`  
**Query Params:**

- `limit`
  - type: `number`
  - required: `true`

**Sample Request:**

`http://localhost:8080/api/median-prime?limit=10`

**Sample Response:**

```json
{
  "medianPrime": [7]
}
```
