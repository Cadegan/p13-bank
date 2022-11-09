![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](http://forthebadge.com)
[![SASS](https://img.shields.io/badge/Sass-hotpink.svg?style=for-the-badge&logo=sass&logoColor=white)](http://forthebadge.com)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

# Argent Bank - Personnal bank app

![Argent Bank](./src/assets/argentBankLogo.png)

SportSee is an application designed to manage and coach physical activity.

## 1. Technologies

- Javascript
- SASS
- React
- React Router
- React Hook Form
- Redux
- Axios

## 2. Author

- [Jean-Charles Maurice](https://github.com/Cadegan/)
- Version : 1.0

## 3. Project

### 3.1 Prerequisites

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### 3.2 Installing and launching Back-End

1. Fork the repository of ArgentBank back-end:
   [`git clone https://github.com/Cadegan/Project-10-Bank-API.git`](https://github.com/Cadegan/Project-10-Bank-API.git)
1. Clone it on your computer.
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://localhost:3001/ and you will now have two users in your MongoDB database!

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### 3.3 Installing and launching Front-End

1. Fork the repository of Argent Bank Front-end:
   [`git clone https://github.com/Cadegan/p13-bank.git`](https://github.com/Cadegan/p13-bank.git)
1. Clone it on your computer.

1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install or yarn

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db

# Launch the application
npm start or yarn start
```

## 4. Endpoints

### 4.1 Possible endpoints

- `http://localhost:3000/` - Displays the home page
- `http://localhost:3000/login` - Displays the login page

### 4.2 Examples of queries

- `http://localhost:3000/profile` - Displays the profile page when user is logged in
