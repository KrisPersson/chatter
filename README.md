# Chatter

A full-stack web chat using React, Redux, Node.js, Socket.io, Express, AWS, and MongoDb.

https://chatter.se


---

### Built with

* Figma for design and layout.
* React.js + Redux and Styled Components for the Front-end UI.
* Node.js and AWS Beanstalk for hosting and running the Back-end.
* Express for API-routing and handling requests.
* MongoDb for relient, scalable, fast, and persistent data storage.
* Socket.io for instant communication between users.
* Typescript on FE and BE for type-checking and added type saftey during development.


### Installation

If you prefer to try the App out locally on your own machine, you can follow the steps below! Keep in mind you will need use your own MongoDb-account and cluster.

**Backend**

1. Clone this repo using 
    ```
    git clone https://github.com/krispersson/chatter.git
    ```
2. Open up the two folders `backend` and `frontend` in separate terminal-instances.
3. In the root of the backend-folder, create a `.env` file and paste the following and then replace with your own values:
   ```
   DATABASE_URL=REPLACE_THIS_WITH_YOUR_OWN_MONGO_DB_URL
   JWT_SECRET=REPLACE_THIS_WITH_A_RANDOM_STRING
   PORT=8000
   ```
4. In the `backend` terminal, run
   ```
   npm install
   ```
   and then start up the server locally with
   ```
   npm run start
   ```

**Frontend**

1. Open `frontend/src/api/index.ts` in your code editor and change `const BASE_URL` to equal `LOCAL_URL`:
   ```
   export const BASE_URL = LOCAL_URL;
   ```
2. In the `frontend`-terminal, run
   ```
   npm run install
   ```
   and then
   ```
   npm run dev
   ```
