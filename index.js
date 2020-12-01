const bodyParser = require('body-parser')
const express = require('express')
const userData = require('./User.json');
const app = express()
const port = 3000

app.use(bodyParser());

app.get('/',(request,response) => {
    console.log('This is the request body',request.body);
    response.send('This is the main user management system');
});

app.get('/login',(request,response) =>{
    console.log(request);
    

    response.json(userData)
})

app.post('/home',(request,response) =>{
    const requestBody = request.body
    console.log(requestBody)
    userData.push("id2","id3");
    response.send({action:"log in",message:"successful", body:requestBody})
})

app.delete('/home', (request,response) => {
    const userData = require('./user.json');
    const deleteUserData = userData.pop()
    response.send(deleteUserData)
})

app.listen(port,() => {
    console.log("My user management system is runnning on the server")
})