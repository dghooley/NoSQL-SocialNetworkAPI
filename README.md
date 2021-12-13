# NoSQL-SocialNetworkAPI

This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. 

## Description
When the User enters the command to invoke the application, the server is started and Mongoose models are synced to the MongoDB database. When the User opens API GET routes in Insomnia for 'users' and 'thoughts', the data for each of these routes is displayed in a formatted JSON. When the User tests API 'POST', 'PUT' and 'DELETE' routes in Insomnia, then they are able to successfully create, update and delete users and thoughts in the database. When the User tests API 'POST' and 'DELETE' routes in Insomnia, then they are able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list.

### Dependencies

* Express.js
* MongoDB




### Executing program

```
npm start
```
```
node server.js
```

## Screencastify 

https://watch.screencastify.com/v/Ca5SEKGP6oVEDwI8PXiN

