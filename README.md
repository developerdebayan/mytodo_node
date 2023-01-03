
# Todo API

## Getting Started

### Register API

Method : POST

https://odd-erin-mackerel-tux.cyclic.app/users/register


Request (JSON Body) : 


    "name" : "Debayan Chowdhury",
    "email" : "debayan@gmail.com",
    "password" : "123456"


Response 

    "statusCode": 201,
    "status": 1,
    "message": "Registration Successful",
    "user": {
        "_id": "63b4489f2140e2ac11153e9e",
        "name": "Debayan Chowdhury",
        "email": "debayan@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQ0ODlmMjE0MGUyYWMxMTE1M2U5ZSIsImlhdCI6MTY3Mjc1OTQ1NSwiZXhwIjoxNjcyNzYzMDU1fQ.2lHtLdu0ihfrQy90FFX-JFBd5h3flkOztG9dtOTe4CU"
    }


### Login API

Method : POST

https://odd-erin-mackerel-tux.cyclic.app/users/login


Request (JSON Body) : 

    "email" : "debayan@gmail.com",
    "password" : "123456"

Response 


    "statusCode": 200,
    "status": 1,
    "message": "Login Successful",
    "user": {
        "_id": "63b4489f2140e2ac11153e9e",
        "name": "Debayan Chowdhury",
        "email": "debayan@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQ0ODlmMjE0MGUyYWMxMTE1M2U5ZSIsImlhdCI6MTY3Mjc1OTU2NCwiZXhwIjoxNjcyNzYzMTY0fQ.rPmqiGcamN05ne8Q2UAoeZhk25iIb5B2CCpJoMIAH1A"
    }


### Refresh Token API

Method : GET

https://odd-erin-mackerel-tux.cyclic.app/auth/refreshToken

Request (Header) : 

    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQyOTNjY2U5MWRkODBiMDRjOTZjNiIsImlhdCI6MTY3Mjc1Nzc4OCwiZXhwIjoxNjcyNzYxMzg4fQ.ChvNajGbEs6hxfm0nfeUqibnEItY9tGpsLqFULShEnY

Response 

    "statusCode": 200,
    "status": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQ0ODlmMjE0MGUyYWMxMTE1M2U5ZSIsImlhdCI6MTY3Mjc2MjE0MywiZXhwIjoxNjcyNzY1NzQzfQ.DK6HcxSSnb5UMwOpSyDpWtOZEduNHsxlDoOo2VOfFqQ"



### Add Todo API

Method : POST

https://odd-erin-mackerel-tux.cyclic.app/todo/addTodo


Request (FORM DATA) : 

    title:Do Work
    description:Work to do
    dateTime:12/02/2023 11:00 AM
    priority:High

Request (Header) : 

    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQyOTNjY2U5MWRkODBiMDRjOTZjNiIsImlhdCI6MTY3Mjc1Nzc4OCwiZXhwIjoxNjcyNzYxMzg4fQ.ChvNajGbEs6hxfm0nfeUqibnEItY9tGpsLqFULShEnY

Response 

    "statusCode": 200,
    "status": 1,
    "message": "Added successfully",
    "data": {
        "_id": "63b450163d6393183975b04b",
        "title": "Do Work",
        "description": "Work to do",
        "dateTime": "12/02/2023 11:00 AM",
        "priority": "High"
    }

### Todo List API

Method : GET

https://odd-erin-mackerel-tux.cyclic.app/todo/todoList

Request (Header) : 

    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQyOTNjY2U5MWRkODBiMDRjOTZjNiIsImlhdCI6MTY3Mjc1Nzc4OCwiZXhwIjoxNjcyNzYxMzg4fQ.ChvNajGbEs6hxfm0nfeUqibnEItY9tGpsLqFULShEnY

Response 

    "statusCode": 200,
    "status": 1,
    "message": "",
    "data": [
        {
            "_id": "63b450163d6393183975b04b",
            "title": "Do Work",
            "description": "Work to do",
            "dateTime": "12/02/2023 11:00 AM",
            "priority": "High"
        }
    ]

### Update Todo API

Method : POST

https://odd-erin-mackerel-tux.cyclic.app/todo/updateTodo

Request (FORM DATA) : 

    todoId:63b450163d6393183975b04b
    title:Do Work 1
    description:Work to do
    dateTime:12/02/2023 11:00 AM
    priority:High

Request (Header) : 

    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQyOTNjY2U5MWRkODBiMDRjOTZjNiIsImlhdCI6MTY3Mjc1Nzc4OCwiZXhwIjoxNjcyNzYxMzg4fQ.ChvNajGbEs6hxfm0nfeUqibnEItY9tGpsLqFULShEnY

Response


    "statusCode": 200,
    "status": 1,
    "message": "Updated successfully",
    "data": {
        "id": "63b450163d6393183975b04b",
        "title": "Do Work 1",
        "description": "Work to do",
        "dateTime": "12/02/2023 11:00 AM",
        "priority": "High"
    }


### Delete Todo API

Method : POST

https://odd-erin-mackerel-tux.cyclic.app/todo/deleteTodo

Request (FORM DATA) : 

    todoId:63b450163d6393183975b04b

Request (Header) : 

    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQyOTNjY2U5MWRkODBiMDRjOTZjNiIsImlhdCI6MTY3Mjc1Nzc4OCwiZXhwIjoxNjcyNzYxMzg4fQ.ChvNajGbEs6hxfm0nfeUqibnEItY9tGpsLqFULShEnY

Response


    "statusCode": 200,
    "status": 1,
    "message": "Deleted successfully"
