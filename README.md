# user-auth-and-user-management
authentication using facebook api and user management( CRUD )

## Development server

Run `node app.js 'or' nodemon app.js` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Program Stacks 
    1. Node: 12.18.3

## Credentials of twitter
    1. Make an account on facebook.
    2. Make developer account on twitter : https://developers.facebook.com/ ->Exploring the API -> Next -> proceed according your choice
    3. After all of this you will get :-
        CLIENTID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
        CALLBACK_URL=http://localhost:3000/authenticate/facebook/callback
    4. Done.

## How To Setup user-auth-and-user-management
    1. Download (clone / download as zip) the repository using 
        i.>Run : clone git clone  https://github.com/puneetkumar054/user-auth-and-user-management
            OR
        ii.> download as zip by going on repository and extract the zip on system

    2. Go into the directory by - Run: cd user-auth-and-user-management 'OR' cd user-auth-and-user-management-master.

    3.Install all the dependency by- Run: npm i 

    4. Set all twitter credentials in .env file on going in project folder        
            SERVER_HOST=localhost
            SERVER_PORT=3000
            CLIENTID=XXXXXXXXXXXXXXXXXXXXXXX
            CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            CALLBACK_URL=http://localhost:3000/authenticate/facebook/callback
            ENABLE_PROOF=true
            DATABASE_PROVIDER=mongodb
            DATABASE_HOST=localhost
            DATABASE_NAME=user_management

    5.Run the project by - 
        i.> Run on local by - Run: node app.js 'OR' nodemon app.js

    6. Goto any browser and hit the url : http:// hostname : port
        i.> for local: http://localhost:3000