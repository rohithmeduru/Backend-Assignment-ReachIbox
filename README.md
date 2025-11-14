# ReachInBox Assignment

## Server
The assignment is to build a tool that will parse and check the emails in a Google and Outlook email ID, and
respond to the e-mails based on the context using AI. Use BullMQ as the tasks scheduler
This is a server-based application built with Node.js and Express. It uses various packages such as  `openai` for AI functionalities, `googleapis` for Google APIs, and `axios` for HTTP requests and `bullMQ` to process queues.



## deployed links :
frontend : [Link](https://dk-reachinbox-assignment.vercel.app/)
<br>
Backend : [Link](https://dk-reachinbox-assignment.onrender.com)




# technologies used:
- Node.js
- Express.js
- OpenAI
- Google APIs
- Microsoft Graph API
# npm packages used
- dotenv
- Axios
- bullMQ
- google-auth-library
- ioredis
- @microsoft/microsoft-graph-client
- @azure/msal-node

<br>

## Installation setup
1. Clone the repository to your local machine
```bash
git clone https://github.com/rohithkumar/Backend-Assignment
```
2. Navigate to the root directory of the project directory :
```bash 
cd server
```
3. Run `npm install` to install all the dependencies
4. Create a `.env` file in the root directory with the same IDs as specified in the documentation.

## Running the server
1. To start the server, run the following command in your terminal
```bash
npm start
```
*This will start the server at localhost:5000 (or whatever port you have specified).*
or we can use backend deployed link also.

2. To start the worker.js file, run the following command in your terminal
```bash
npm run server
```

## API Endpoints

### For Google's OAuth2.0:
- `https://dk-reachinbox-assignment.onrender.com/auth/google` - GET for google authentication
- `https://dk-reachinbox-assignment.onrender.com/api/mail/userInfo/:email` - GET request to view user profile
- `https://dk-reachinbox-assignment.onrender.com/api/mail/allDrafts/:email` - GET request to view all drafts mail.
- `https://dk-reachinbox-assignment.onrender.com/api/mail/read/:email/message/:message` - GET request to read a specific email(using id).
- `https://dk-reachinbox-assignment.onrender.com/api/mail/list/:email` - GET request to get a list of mails.
- `https://dk-reachinbox-assignment.onrender.com/api/mail/sendMail` - POST request send mail with label.
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com",
    "label":"interested/not-interested/more-information"
}
```
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com"
}
```
- - 
{
    "from":"sendersmail@gmail.com",
    "to":["demo@gmail.com","demo@gmail.com", "demo@gmail.com"]
}
```

### For microsoft azur's OAuth2.0:

- `https://dk-reachinbox-assignment.onrender.com/outlook/signin` - GET for micosoft azur authentication for outlook
- `https://dk-reachinbox-assignment.onrender.com/outlook/callbak` - GET for micosoft azur getting access token
- `https://dk-reachinbox-assignment.onrender.com/outlook/profile` - GET request to get profile data for particular user
- `https://dk-reachinbox-assignment.onrender.com/outlook/all-Mails/{email}` - GET request for get ist of all mails of outllok user
- `https://dk-reachinbox-assignment.onrender.com/outlook/{email}/read-Msg/{:message}` = GET request to read partivcular mail using messange id
- `https://dk-reachinbox-assignment.onrender.com/outlook/{email}/send-Mail` - post request for sending mail to another user using outlook
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com"
     "label":"interested/not-interested/more-information"
}
```
- `https://dk-reachinbox-assignment.onrender.com/outlook/sendone/:email/:id` - post request for sending mail to another user using outlook using `bullmq`
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com"
}
```

## Sample .env sample:
```
PORT = ***
GOOGLE_CLIENT_ID = ***
GOOGLE_CLIENT_SECRET = ***
GOOGLE_REDIRECT_URI = ***
GOOGLE_REFRESH_TOKEN = ***
OPENAI_SECRECT_KEY = ***
redis_port = ***
redis_host = ***
redis_pass = ***
AZURE_CLIENT_ID = ***
AZURE_CLIENT_SECRET = *** 
AZURE_TENANT_ID = ***
```
