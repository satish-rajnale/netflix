
 # The Ultimate Netflix Clone <img src="https://user-images.githubusercontent.com/76589507/113987811-70207f80-986c-11eb-804e-df35d501f0f6.png" width="30px" height="30px" alt="netflixLogo" />

In this project I have used styled-components, react, react-router-dom, firebase, fuse.js, normalize.css to create a responsive netflix webapp.  

<img src="https://github.com/satish-rajnale/netflix/blob/master/netflix.gif" width="1000px" height="500px" />

## 🚀 Getting Started

### Prerequisites
- Node.js 21 or higher
- npm or yarn
- Firebase project

### Environment Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd netflix
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Firebase configuration values

```bash
cp .env.example .env
```

4. Update the `.env` file with your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

5. Start the development server:
```bash
npm start
# or
yarn start
```

### Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Create a Firestore database
4. Get your Firebase configuration from Project Settings > General > Your apps
5. Add the configuration values to your `.env` file

### Sign In page:
![signin](https://user-images.githubusercontent.com/76589507/113990097-c0004600-986e-11eb-984f-5033247d8a42.PNG)

<div align="right">
    <b><a href="#table-of-contents">↥ Back To Top</a></b>
</div>

### Sign Up page:
![signup](https://user-images.githubusercontent.com/76589507/113990160-cee6f880-986e-11eb-8426-207f4dfc99c7.PNG)
Also, sign up validation, i.e until all the fields are filled the sign up/in button will be disabled.
![signupvalidation](https://user-images.githubusercontent.com/76589507/113990419-11a8d080-986f-11eb-9675-6762087045ed.PNG)

## Randomly generate user logo after authentication through firebase.
![whoswatdhing](https://user-images.githubusercontent.com/76589507/113990553-356c1680-986f-11eb-8665-90c4b135a6b0.PNG)

##Main Page
![1](https://user-images.githubusercontent.com/76589507/113991107-c5aa5b80-986f-11eb-828c-dea55e7bec59.PNG)
## Responsive -
![respo](https://user-images.githubusercontent.com/76589507/113991899-8c262000-9870-11eb-9db0-692ea8751a1c.PNG)
## FAQ
![5](https://user-images.githubusercontent.com/76589507/113992185-d14a5200-9870-11eb-8aa4-53c2a376f252.PNG)

## Footer
![6](https://user-images.githubusercontent.com/76589507/113992237-de674100-9870-11eb-9b74-e183b3464f0c.PNG)


