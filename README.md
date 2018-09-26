13: Single Resource Mongo and Express API
===

## Configuration
Using port 3000 for server and MONGODB_URI=mongodb://localhost:27017/ for mongo database use. 

### Testing and Verification
Using 'POSTMAN'

GET - localhost:3000/api/v1/students
 expect -  will receive ALL inputted data for students.  

GET - localhost:3000/api/v1/students/id
 expect - will receive ONE ID data. 

POST - localhost:3000/api/v1/students
  input -  send text string: {"name": "name text", "gradeLevel":number, "isPassing":boolean}
  expect -  will post the new data in the database. 

PUT - localhost:3000/api/v1/students
  input -  send text string which may include any of the following: {"name": "name text", "gradeLevel":number, "isPassing":boolean} to update
  expect -  will update the document selected by id with new data sent. 

DELETE - localhost:3000/api/v1/students/id
expect - the document with the ID inputted, will be deleted. 



## Server Endpoints
### `/api/v1/resource-name`
* `POST` request
  * should pass data as stringifed JSON in the body of a post request to create a new resource
### `api/v1/resource-name`
* `GET` request
* Fetch all resources
### `/api/v1/resource-name/:id`
* `GET` request
  * should pass the id of a resource through the url endpoint to get a resource
    * **this should use `req.params`, not querystring parameters**
* `PUT` request
  * should pass data as stringifed JSON in the body of a put request to overwrite a pre-existing resource
* `DELETE` request
  * should pass the id of a resource though the url endpoint to delete a resource
    * **this should use `req.params`**
