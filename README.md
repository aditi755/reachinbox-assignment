The assignment is about implementing the login and dashboard page UI and data fetching with the help of reachinbox api endpoints.

The UI is not pixel perfect as some assets are not given in the figma design file. But, I tried to make it look decent by implementing decent layout and UI. 

Deployed Link : https://reachinbox-assignment-lihc.vercel.app/
Functionalities : 
- Login page has sign up with google button, by clicking on it user will be redirected to the dashboard page of my frontend.
- Dashboard page has a header, sidenav and main layout.
- Then if the get request to the reachinbox api email is successful, then it would show me the fetched emails in the UI. Otherwise failed to fetch emails.
- If you click on any specific email then a get request will be sent to the get route of the particular email threadId and you will see the complete email thread in the UI.
- There is a delete button also that will delete the respective email.
- If user would click on R button is the keyboard then the reply custom editor would open and by clicking on send reply button a reply would be sent to the respective email.
-  Light and dark mode toggle (need some color fixes).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, fork the repo and then clone it in your machine using command 
```
git clone <Project_URL>
```
Then, in root folder run the command 
```
npm i 
```
to install all the dependencies and run the development server:

```bash
next  dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
