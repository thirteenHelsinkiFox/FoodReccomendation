# Food Reccomandation
-------------------------------------------------

# USER

## 1. POST /users/register

register new user

### -- Request Header --

tidak dibutuhkan

### -- Request Body --

- email
- password

### -- Response 201 --

```js
{
    "message": "Register success",
    "id": 7,
    "email": "rizkicandra@ecampuz.com"
}

```

### -- Error Response --

- 400 uniqe email
- 500 internal server error

## 2. POST /users/login

login user

### -- Request Header --

tidak dibutuhkan

### -- Request Body --

- email
- password

### -- Response 200 --

```js
{
    "access_token": "<token>"
}

```

### -- Error Response --

- 400 Invalid email or password
- 500 internal server error

## ERROR RESPONSE DETAIL

### -- 400 Unique data --

```js
{
    "message": [
        "email must be unique"
    ]
}
```

### -- 400 Invalid Email or Password --

```js
{
    "message": [
        "Invalid email or password"
    ]
}
```

### -- 500 internal server error --

```js
{ 
    'message': "internal server error"
}
```