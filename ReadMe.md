# Restful Refactor: <span style="color:green">Google</span> <span style="color:blue">Books</span

### **Description:**

[Google Books](https://github.com/SmithCray/RestfulRefactor) is a fully functioning [API](https://en.wikipedia.org/wiki/API) search engine built with a RESTful API using the [MERN stack](https://www.mongodb.com/mern-stack) and a [React](https://reactjs.org/) front end, [MongoDB](https://www.mongodb.com/) database, and [Node.js/Express.js](https://expressjs.com/) server and API. Which allows users to save book searches to the back end, sign-in and out, and query Books data all while being presenting with a high-quality responsive and enjoyable user experience via our friend _**"React"**_. Our users are presented with a menu containing the options Search for Books and Login/Signup, as well as a input field to search for books. Google Books presents several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site.

<br>

### **Our Mission:**

We are working to refactor Gooogle Books API and incorperate new performant technologies including [Apollo Servers](https://www.apollographql.com/docs/apollo-server/getting-started/) and [GraphQL](https://en.wikipedia.org/wiki/GraphQL) replacing the existing restful API currently used. In addition we will Modify the existing authentication middleware so that it works in the correct context in GraphQL API. Last we will need to create an Apollo Provider so that requests can communicate with an Apollo Server.

<br>

<span style="color:orange">**Initial Issues and Diclaimer:**</span>

We are currrently experiencing a bug within our starting structure that is causing issues with the deployed product. We are working to fix this issue and have not been able to determine the a solution and are working around the clock to de-bug and determine the root of the issue.

In addition to the initial struggles with Heroku during deployment we struggled with alot of error and trouble shooting while learning how to use _graphQl_ and _mongodb_ as well as working with [apollo/react-hooks](https://www.apollographql.com/docs/react/api/react/hooks/).

While we are still working to resolve issues and moving forward solving errors one at a time, this line of code from **"heroku logs --tail"** has been a recurring issue.

                2022-02-04T07:16:15.935108+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/"

After recent success we are happy to move on to the next issue at hand which appears to be a login issue after post, we plan to continue to work on the product's functionality behind the scenes and re-establish its original operations.

<br>

<span style="color:green">**Updates:**</span>

Heroku deployment fixed, issue was cause by initial build pack that was intended for a static single page application. By removing current status buildpack and running a react/heroku default build as well as backend mongo atlas verification fixed.

In addition to Heroku's original success with the help of the a few tutors and TA's we were able to start building out our [mutations and typeDefs](https://graphql.org/learn/queries/) as well as connect to our mongoDb Atlas creating a google books collection containing users. While we are working on addition features the api functionality is working properly now as well.

Overall the ability to use _graphQl_ and _heroku logs_ working together helped alot to solve issues within my _mutations_ and _typedefs_. in addition alot of initial problems were created during the building of the code in terms of spelling or case errors. _"Never code when you are tired"._

<br>

**Deployment:**

<br>

- [Heroku](https://dashboard.heroku.com/apps)

- [MongoDB](https://www.mongodb.com/) Database

- [Apollo Servers](https://www.apollographql.com/docs/apollo-server/getting-started/)

<br>

**Development/Working environment:**

        npm run develop

<br>

### **Web Preview:**

![Restful Refactor: Google Books-PreviewB.](./client/src/assets/RestfulRefactorPreB.png)

<br>

![Restful Refactor: Google Books-PreviewA.](./client/src/assets/googlebooksSaved.png)

<br>

### **Mongo Atlas:**

![Restful Refactor: Google Books-PreviewB.](./client/src/assets/googlebooksAtlas.png)

<br>

### **Links:**

#

Heroku deployed:
<br>
https://restfulrefactor.herokuapp.com/

GitHub repo:
<br>
https://github.com/SmithCray/RestfulRefactor

<br>

## **Author:**

#

### <span style="color:orange">**Cray Smith**</span>

<img src="./client/src/assets\p2cray.png" alt="Cray Smith GitHub" width="150px">

GitHub Link:
<br>
https://github.com/SmithCray

Email:
<br>
cmsmith004@gmail.com

<br>

## <span style="color:orange"> Copyright (c) [2021] </span> <span style="color:green"> [Cray Smith] </span>

#

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
