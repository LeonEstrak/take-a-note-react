# Take-A-Note!

A React App made using Redux and Typescript with Google OAuth for Authentication

- Uses Google OAuth for quick Sign-In
- Keeps list of Notes persistent across sessions
- Keeps data in Sync across devices

**Codebase:**
- Used Typescript for maintainability and scalabality of codebase
- Used Firebase for a Serverless Backend Solution
- Used [Redux](https://redux.js.org/) for centralized and consistent application state
- Used [Redux Thunks](https://github.com/reduxjs/redux-thunk) for Asynchronous API calls to Firebase
- Used [Styled-Components](https://styled-components.com/) styling without CSS dependency
- Used Material UI for a clean look 
  
# Usage

If you want use this as a front-end with your own Firebase Application then,

    git clone https://github.com/LeonEstrak/take-a-note-react
    cd take-a-note-react/src

    #Create a file to save your firebase config
    touch firebaseConfig.ts

Create a new Firebase Project and copy the config files into `firebaseConfig.ts` after which you can,

    #install dependencies
    npm i

    #start development server
    npm start

The `firebaseConfig.ts` should look like this,

    export const firebaseConfig = {
      apiKey: "string",
      authDomain: "string",
      projectId: "string",
      storageBucket: "string",
      messagingSenderId: "string",
      appId: "string",
      measurementId: "string",
    };


# Screenshots
<p style="float:left">
  <img src="https://i.imgur.com/fz6Wuix.png" width=40%>
  <img src="https://i.imgur.com/GXBNNcu.png" width=40%>
  <img src="https://i.imgur.com/fiBx8hR.png" width=40%>
  <img src="https://i.imgur.com/SNkDf3k.png" width=40%>
</p>
