/*
Task :
1. Create a database named 'test.db' .
2. Create a collection named 'users' with fields 'name' and 'email'.
3. Write a script that connects to the 'test.db' database.
4. Perform the following CRUD operations:
    a. Create: Insert a new document into the 'users' collection.
    b. Read: Retrieve all documents from the 'users' collection.
    c. Update: Update a user's email in the 'users' collection.
    d. Delete: Delete a document from the 'users' collection.
*/

const {MongoClient} = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const databaseName = 'testdb';

const client = new MongoClient(uri);

const main = async () => {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB");

        const db = client.db(databaseName);

        const userCollection = db.collection('users');

        //create
        const user1 = {
            name : "Gojo Satoru",
            email : "gojosatoru21@gmail.com"
        }
        await userCollection.insertOne(user1);

        //read
        const userDetails = await userCollection.find().toArray() ;
        console.log("All users details : " , userDetails);

        //update
        await userCollection.updateOne(
            {name:"Gojo Satoru"},
            {$set : {email : "gojothegoat@gmail.com"}}
        );

        //read updated data
        const updatedUser = await userCollection.findOne(
            { name : "Gojo Satoru"}
        )
        console.log("Updated user : ", updatedUser);

        //delete
        await userCollection.deleteOne(
            {name : "Gojo Satoru"}
        );
        
        //read all data after deleting 
        let users = await userCollection.find().toArray() ;
        if (users != [] ) {
            console.log("All users details : " , users);
        }
        else{
            console.log("Empty");
        }   
    }
    catch (err){
        console.error(err);
    }
}

main();