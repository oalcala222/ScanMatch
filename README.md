ScanMatch

ScanMatch is a full stack web application that allows users to audit their digital database against their physical inventory. Prepared for SoftMouse Inc. The user can log in or register. After logging in the user can use the QR code scanner to keep track of their physical inventory. Then the user can go to the upload page to add an excel spreedsheet of their digital inventory. On the upload page once the excel spreedsheet is uploaded the user can make changes to the form before submitting it to the database. On the audit page the user will be notified of any discrepances between the digital and physical data. 


Heroku deployed app link: https://intense-stream-50784.herokuapp.com/

Issues: 
1.) Heroku link will recieve internal server error once user attempts to interact with the backend. Backend functionalty is in progress. 
2.) POST requests not completed. Functionality is in progress. 
3.) GET requests for audit / compare collections not completed. Functionality is in progress. 


Home page
![Screenshot_1](client/public/img/Screenshot_1.png)


Log in
![Screenshot_2](client/public/img/Screenshot_2.png)


Register
![Screenshot_3](client/public/img/Screenshot_3.png)


QR Scanner (works on mobile device)
![Screenshot_4](client/public/img/Screenshot_4.png)


Upload page 
![Screenshot_5](client/public/img/Screenshot_5.png)


Upload page with data 
![Screenshot_6](client/public/img/Screenshot_6.png)


Audit page (in progress)
![Screenshot_7](client/public/img/Screenshot_7.png)


Tech Used: 

    1. Node.js 
    2. Express.js 
    3. React.js
    4. React-Excel-Renderer 
    5. React-Qr-Reader
    6. Mongoose / MongoDB 
    7. Cheerio 
    8. Axios 
    9. Passport
    10. Heroku

Built With: 

    VS Code 

Authors: 
 
    Omar Alcala
    Andrew Farag
    Ryan Fogle 
    Vlad Neri 
    Nick Tuso
