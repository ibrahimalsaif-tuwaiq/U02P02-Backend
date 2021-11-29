# TRAVELLERS

This a soical media website where travelers can share their photos and memories of spots they been to, and you can create your own timeline by following some travelers, and also each user have his/her own likes.

Heroku Link: https://u02p02-backend.herokuapp.com/

While running locally: http://localhost:5000

## Getting Started

### Installing Dependencies

#### Node js

Follow instructions to install the latest version of Node js for your platform in the [Node js docs](https://nodejs.org/en/).

#### NPM Dependencies

Once you have the project in your local machine, install dependencies by running:

```bash
npm install
```

This will install all of the required packages.

##### Key Dependencies

- [Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- [mongoose](https://mongoosejs.com/) is an elegant mongodb object modeling for node.js.

- [cors](https://www.npmjs.com/package/cors) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

- [morgan](https://www.npmjs.com/package/morgan) is a HTTP request logger middleware for node.js

#### Setting up the variables

You have to set up some variables in the `.env` file, for the app to run properly.

```
PORT=5000
DB_URL=`Your MongoDB DB URL`
```

## Running the server

To run the server, execute:

```bash
npm run dev
```

For running the server in development mode, and execute:

```bash
npm run start
```

To run the server on production mode.

## API Reference

## Getting Started

Base URL: This application can be run locally on the http:/localhost:5000, or you can use the hosted version at `https://u02p02-backend.herokuapp.com/`.

## Error Handling

Errors are returned as JSON objects depend on the error.

The API will return two error types when requests fail:

- 400: Bad Request
- 404: Not Found

## Endpoints

### Users

#### GET /users

- General

  - gets the list of all the users.

- Sample Request
  - `https://u02p02-backend.herokuapp.com/users`

<details>
<summary>Response</summary>

```
[
  {
    "_id": "619ac0e3ae4036a4acbb7d33",
    "username": "ibrahim",
    "email": "ibrahim@gmail.com",
    "password": "111",
    "about": "hello",
    "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
    "followers": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      },
      {
        "_id": "61a303699b2dea651f400f0c",
        "username": "mo",
        "email": "mo@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a303019b2dea651f400ea6",
          "61a302a09b2dea651f400e82",
          "61a303339b2dea651f400eac",
          "61a3102d9b2dea651f4010b4"
        ],
        "created": "2021-11-28T04:19:53.309Z",
        "__v": 0
      }
    ],
    "following": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      }
    ],
    "likes": [
      {
        "_id": "61a3023a9b2dea651f400e72",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1687626-623217107.jpg?alt=media&token=b499bb8f-920b-4ee3-b337-45844195ed02",
        "location": "AL-ULA, Saudi Arabia",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a3039c9b2dea651f400f58",
            "created": "2021-11-28T04:20:44.285Z"
          }
        ],
        "created": "2021-11-28T04:14:50.390Z",
        "__v": 0
      },
      {
        "_id": "61a303339b2dea651f400eac",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2Fgettyimages-688899881-1519413300.jpg?alt=media&token=95495fa2-59c4-4580-a0d9-829c0699ee87",
        "location": "New York, USA",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "61a3016f9b2dea651f400e53",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a303919b2dea651f400f34",
            "created": "2021-11-28T04:20:33.825Z"
          }
        ],
        "created": "2021-11-28T04:18:59.566Z",
        "__v": 0
      },
      {
        "_id": "61a302a09b2dea651f400e82",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1421841-1985003692.jpg?alt=media&token=e0eb2cbd-1418-476d-a5f4-d1945e6ec9db",
        "location": "Riyadh, Saudi Arabia",
        "likes": [
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a3016f9b2dea651f400e53",
            "_id": "61a302d49b2dea651f400e95",
            "created": "2021-11-28T04:17:24.344Z"
          },
          {
            "comment": "Hello ",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a309a89b2dea651f401093",
            "created": "2021-11-28T04:46:32.731Z"
          }
        ],
        "created": "2021-11-28T04:16:32.211Z",
        "__v": 0
      }
    ],
    "created": "2021-11-21T21:57:55.937Z",
    "__v": 0
  },
  {
    "_id": "61a3016f9b2dea651f400e53",
    "username": "alex",
    "email": "alex@gmail.com",
    "password": "1",
    "about": "",
    "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "followers": [
      {
        "_id": "619ac0e3ae4036a4acbb7d33",
        "username": "ibrahim",
        "email": "ibrahim@gmail.com",
        "password": "111",
        "about": "hello",
        "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
        "followers": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c"
        ],
        "following": [
          "61a3016f9b2dea651f400e53"
        ],
        "likes": [
          "619b471d25a1a70eddbf9f50",
          "619e40cc1c713025f89adbc6",
          "619b472525a1a70eddbf9f52",
          "619b388148b4ae058284d491",
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac",
          "61a302a09b2dea651f400e82"
        ],
        "created": "2021-11-21T21:57:55.937Z",
        "__v": 0
      }
    ],
    "following": [
      {
        "_id": "619ac0e3ae4036a4acbb7d33",
        "username": "ibrahim",
        "email": "ibrahim@gmail.com",
        "password": "111",
        "about": "hello",
        "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
        "followers": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c"
        ],
        "following": [
          "61a3016f9b2dea651f400e53"
        ],
        "likes": [
          "619b471d25a1a70eddbf9f50",
          "619e40cc1c713025f89adbc6",
          "619b472525a1a70eddbf9f52",
          "619b388148b4ae058284d491",
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac",
          "61a302a09b2dea651f400e82"
        ],
        "created": "2021-11-21T21:57:55.937Z",
        "__v": 0
      }
    ],
    "likes": [
      {
        "_id": "61a3023a9b2dea651f400e72",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1687626-623217107.jpg?alt=media&token=b499bb8f-920b-4ee3-b337-45844195ed02",
        "location": "AL-ULA, Saudi Arabia",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a3039c9b2dea651f400f58",
            "created": "2021-11-28T04:20:44.285Z"
          }
        ],
        "created": "2021-11-28T04:14:50.390Z",
        "__v": 0
      },
      {
        "_id": "61a303339b2dea651f400eac",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2Fgettyimages-688899881-1519413300.jpg?alt=media&token=95495fa2-59c4-4580-a0d9-829c0699ee87",
        "location": "New York, USA",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "61a3016f9b2dea651f400e53",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a303919b2dea651f400f34",
            "created": "2021-11-28T04:20:33.825Z"
          }
        ],
        "created": "2021-11-28T04:18:59.566Z",
        "__v": 0
      }
    ],
    "created": "2021-11-28T04:11:27.315Z",
    "__v": 0
  },
 ]
```

</details>

#### GET /posts

- General

  - get a list of all posts

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts`

<details>
<summary>Response</summary>

```
[
  {
    "_id": "61a3023a9b2dea651f400e72",
    "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1687626-623217107.jpg?alt=media&token=b499bb8f-920b-4ee3-b337-45844195ed02",
    "location": "AL-ULA, Saudi Arabia",
    "likes": [
      "61a3016f9b2dea651f400e53",
      "619ac0e3ae4036a4acbb7d33"
    ],
    "creator": {
      "_id": "619ac0e3ae4036a4acbb7d33",
      "username": "ibrahim",
      "email": "ibrahim@gmail.com",
      "password": "111",
      "about": "hello",
      "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
      "followers": [
        "61a3016f9b2dea651f400e53",
        "61a303699b2dea651f400f0c"
      ],
      "following": [
        "61a3016f9b2dea651f400e53"
      ],
      "likes": [
        "619b471d25a1a70eddbf9f50",
        "619e40cc1c713025f89adbc6",
        "619b472525a1a70eddbf9f52",
        "619b388148b4ae058284d491",
        "61a3023a9b2dea651f400e72",
        "61a303339b2dea651f400eac",
        "61a302a09b2dea651f400e82"
      ],
      "created": "2021-11-21T21:57:55.937Z",
      "__v": 0
    },
    "comments": [
      {
        "comment": "hello",
        "postedBy": {
          "_id": "61a303699b2dea651f400f0c",
          "username": "mo",
          "email": "mo@gmail.com",
          "password": "1",
          "about": "",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          "followers": [],
          "following": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "likes": [
            "61a303019b2dea651f400ea6",
            "61a302a09b2dea651f400e82",
            "61a303339b2dea651f400eac",
            "61a3102d9b2dea651f4010b4"
          ],
          "created": "2021-11-28T04:19:53.309Z",
          "__v": 0
        },
        "_id": "61a3039c9b2dea651f400f58",
        "created": "2021-11-28T04:20:44.285Z"
      }
    ],
    "created": "2021-11-28T04:14:50.390Z",
    "__v": 0
  },
  {
    "_id": "61a302a09b2dea651f400e82",
    "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1421841-1985003692.jpg?alt=media&token=e0eb2cbd-1418-476d-a5f4-d1945e6ec9db",
    "location": "Riyadh, Saudi Arabia",
    "likes": [
      "61a303699b2dea651f400f0c",
      "619ac0e3ae4036a4acbb7d33"
    ],
    "creator": {
      "_id": "619ac0e3ae4036a4acbb7d33",
      "username": "ibrahim",
      "email": "ibrahim@gmail.com",
      "password": "111",
      "about": "hello",
      "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
      "followers": [
        "61a3016f9b2dea651f400e53",
        "61a303699b2dea651f400f0c"
      ],
      "following": [
        "61a3016f9b2dea651f400e53"
      ],
      "likes": [
        "619b471d25a1a70eddbf9f50",
        "619e40cc1c713025f89adbc6",
        "619b472525a1a70eddbf9f52",
        "619b388148b4ae058284d491",
        "61a3023a9b2dea651f400e72",
        "61a303339b2dea651f400eac",
        "61a302a09b2dea651f400e82"
      ],
      "created": "2021-11-21T21:57:55.937Z",
      "__v": 0
    },
    "comments": [
      {
        "comment": "hello",
        "postedBy": {
          "_id": "61a3016f9b2dea651f400e53",
          "username": "alex",
          "email": "alex@gmail.com",
          "password": "1",
          "about": "",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          "followers": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "following": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "likes": [
            "61a3023a9b2dea651f400e72",
            "61a303339b2dea651f400eac"
          ],
          "created": "2021-11-28T04:11:27.315Z",
          "__v": 0
        },
        "_id": "61a302d49b2dea651f400e95",
        "created": "2021-11-28T04:17:24.344Z"
      },
      {
        "comment": "Hello ",
        "postedBy": {
          "_id": "61a303699b2dea651f400f0c",
          "username": "mo",
          "email": "mo@gmail.com",
          "password": "1",
          "about": "",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          "followers": [],
          "following": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "likes": [
            "61a303019b2dea651f400ea6",
            "61a302a09b2dea651f400e82",
            "61a303339b2dea651f400eac",
            "61a3102d9b2dea651f4010b4"
          ],
          "created": "2021-11-28T04:19:53.309Z",
          "__v": 0
        },
        "_id": "61a309a89b2dea651f401093",
        "created": "2021-11-28T04:46:32.731Z"
      }
    ],
    "created": "2021-11-28T04:16:32.211Z",
    "__v": 0
  }
]
```

</details>

#### GET /posts/user/{user_id}

- General

  - get a list of a user posts

- Sample Request
  - `https://u02p02-backend.herokuapp.com/user/61a3016f9b2dea651f400e53`

<details>
<summary>Response</summary>

```
[
  {
    "_id": "61a303019b2dea651f400ea6",
    "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2FNew_york_times_square-terabass.jpg?alt=media&token=6c6a1142-3d1b-438f-ac67-9acedd3ff6d5",
    "location": "New York, USA",
    "likes": [
      {
        "_id": "61a303699b2dea651f400f0c",
        "username": "mo",
        "email": "mo@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a303019b2dea651f400ea6",
          "61a302a09b2dea651f400e82",
          "61a303339b2dea651f400eac",
          "61a3102d9b2dea651f4010b4"
        ],
        "created": "2021-11-28T04:19:53.309Z",
        "__v": 0
      },
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac",
          "61a303019b2dea651f400ea6"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      }
    ],
    "creator": {
      "_id": "61a3016f9b2dea651f400e53",
      "username": "alex",
      "email": "alex@gmail.com",
      "password": "1",
      "about": "",
      "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
      "followers": [
        "619ac0e3ae4036a4acbb7d33"
      ],
      "following": [
        "619ac0e3ae4036a4acbb7d33"
      ],
      "likes": [
        "61a3023a9b2dea651f400e72",
        "61a303339b2dea651f400eac",
        "61a303019b2dea651f400ea6"
      ],
      "created": "2021-11-28T04:11:27.315Z",
      "__v": 0
    },
    "comments": [
      {
        "comment": "hello",
        "postedBy": {
          "_id": "61a3016f9b2dea651f400e53",
          "username": "alex",
          "email": "alex@gmail.com",
          "password": "1",
          "about": "",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          "followers": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "following": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "likes": [
            "61a3023a9b2dea651f400e72",
            "61a303339b2dea651f400eac",
            "61a303019b2dea651f400ea6"
          ],
          "created": "2021-11-28T04:11:27.315Z",
          "__v": 0
        },
        "_id": "61a303419b2dea651f400ebf",
        "created": "2021-11-28T04:19:13.307Z"
      },
      {
        "comment": "hello this a new comment",
        "postedBy": {
          "_id": "61a3016f9b2dea651f400e53",
          "username": "alex",
          "email": "alex@gmail.com",
          "password": "1",
          "about": "",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          "followers": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "following": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "likes": [
            "61a3023a9b2dea651f400e72",
            "61a303339b2dea651f400eac",
            "61a303019b2dea651f400ea6"
          ],
          "created": "2021-11-28T04:11:27.315Z",
          "__v": 0
        },
        "_id": "61a5155d890a44fcb55990aa",
        "created": "2021-11-29T18:01:01.497Z"
      }
    ],
    "created": "2021-11-28T04:18:09.533Z",
    "__v": 0
  }
]
```

</details>

#### GET /posts/likes/{user_id}

- General

  - get a list of user liked posts

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts/likes/61a303699b2dea651f400f0c`

<details>
<summary>Response</summary>

```
[
  {
    "_id": "61a302a09b2dea651f400e82",
    "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1421841-1985003692.jpg?alt=media&token=e0eb2cbd-1418-476d-a5f4-d1945e6ec9db",
    "location": "Riyadh, Saudi Arabia",
    "likes": [
      {
        "_id": "61a303699b2dea651f400f0c",
        "username": "mo",
        "email": "mo@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a303019b2dea651f400ea6",
          "61a302a09b2dea651f400e82",
          "61a303339b2dea651f400eac",
          "61a3102d9b2dea651f4010b4"
        ],
        "created": "2021-11-28T04:19:53.309Z",
        "__v": 0
      },
      {
        "_id": "619ac0e3ae4036a4acbb7d33",
        "username": "ibrahim",
        "email": "ibrahim@gmail.com",
        "password": "111",
        "about": "hello",
        "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
        "followers": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c"
        ],
        "following": [
          "61a3016f9b2dea651f400e53"
        ],
        "likes": [
          "619b471d25a1a70eddbf9f50",
          "619e40cc1c713025f89adbc6",
          "619b472525a1a70eddbf9f52",
          "619b388148b4ae058284d491",
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac",
          "61a302a09b2dea651f400e82"
        ],
        "created": "2021-11-21T21:57:55.937Z",
        "__v": 0
      }
    ],
    "creator": {
      "_id": "619ac0e3ae4036a4acbb7d33",
      "username": "ibrahim",
      "email": "ibrahim@gmail.com",
      "password": "111",
      "about": "hello",
      "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
      "followers": [
        "61a3016f9b2dea651f400e53",
        "61a303699b2dea651f400f0c"
      ],
      "following": [
        "61a3016f9b2dea651f400e53"
      ],
      "likes": [
        "619b471d25a1a70eddbf9f50",
        "619e40cc1c713025f89adbc6",
        "619b472525a1a70eddbf9f52",
        "619b388148b4ae058284d491",
        "61a3023a9b2dea651f400e72",
        "61a303339b2dea651f400eac",
        "61a302a09b2dea651f400e82"
      ],
      "created": "2021-11-21T21:57:55.937Z",
      "__v": 0
    },
    "comments": [
      {
        "comment": "hello",
        "postedBy": {
          "_id": "61a3016f9b2dea651f400e53",
          "username": "alex",
          "email": "alex@gmail.com",
          "password": "1",
          "about": "",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          "followers": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "following": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "likes": [
            "61a3023a9b2dea651f400e72",
            "61a303339b2dea651f400eac",
            "61a303019b2dea651f400ea6"
          ],
          "created": "2021-11-28T04:11:27.315Z",
          "__v": 0
        },
        "_id": "61a302d49b2dea651f400e95",
        "created": "2021-11-28T04:17:24.344Z"
      },
      {
        "comment": "Hello ",
        "postedBy": {
          "_id": "61a303699b2dea651f400f0c",
          "username": "mo",
          "email": "mo@gmail.com",
          "password": "1",
          "about": "",
          "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          "followers": [],
          "following": [
            "619ac0e3ae4036a4acbb7d33"
          ],
          "likes": [
            "61a303019b2dea651f400ea6",
            "61a302a09b2dea651f400e82",
            "61a303339b2dea651f400eac",
            "61a3102d9b2dea651f4010b4"
          ],
          "created": "2021-11-28T04:19:53.309Z",
          "__v": 0
        },
        "_id": "61a309a89b2dea651f401093",
        "created": "2021-11-28T04:46:32.731Z"
      }
    ],
    "created": "2021-11-28T04:16:32.211Z",
    "__v": 0
  }
]
```

</details>

#### GET /posts/{post_id}

- General

  - get a post

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts/61a302a09b2dea651f400e82`

<details>
<summary>Response</summary>

```
{
  "_id": "61a302a09b2dea651f400e82",
  "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1421841-1985003692.jpg?alt=media&token=e0eb2cbd-1418-476d-a5f4-d1945e6ec9db",
  "location": "Riyadh, Saudi Arabia",
  "likes": [
    {
      "_id": "61a303699b2dea651f400f0c",
      "username": "mo",
      "email": "mo@gmail.com",
      "password": "1",
      "about": "",
      "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
      "followers": [],
      "following": [
        "619ac0e3ae4036a4acbb7d33"
      ],
      "likes": [
        "61a303019b2dea651f400ea6",
        "61a302a09b2dea651f400e82",
        "61a303339b2dea651f400eac",
        "61a3102d9b2dea651f4010b4"
      ],
      "created": "2021-11-28T04:19:53.309Z",
      "__v": 0
    },
    {
      "_id": "619ac0e3ae4036a4acbb7d33",
      "username": "ibrahim",
      "email": "ibrahim@gmail.com",
      "password": "111",
      "about": "hello",
      "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
      "followers": [
        "61a3016f9b2dea651f400e53",
        "61a303699b2dea651f400f0c"
      ],
      "following": [
        "61a3016f9b2dea651f400e53"
      ],
      "likes": [
        "619b471d25a1a70eddbf9f50",
        "619e40cc1c713025f89adbc6",
        "619b472525a1a70eddbf9f52",
        "619b388148b4ae058284d491",
        "61a3023a9b2dea651f400e72",
        "61a303339b2dea651f400eac",
        "61a302a09b2dea651f400e82"
      ],
      "created": "2021-11-21T21:57:55.937Z",
      "__v": 0
    }
  ],
  "creator": {
    "_id": "619ac0e3ae4036a4acbb7d33",
    "username": "ibrahim",
    "email": "ibrahim@gmail.com",
    "password": "111",
    "about": "hello",
    "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
    "followers": [
      "61a3016f9b2dea651f400e53",
      "61a303699b2dea651f400f0c"
    ],
    "following": [
      "61a3016f9b2dea651f400e53"
    ],
    "likes": [
      "619b471d25a1a70eddbf9f50",
      "619e40cc1c713025f89adbc6",
      "619b472525a1a70eddbf9f52",
      "619b388148b4ae058284d491",
      "61a3023a9b2dea651f400e72",
      "61a303339b2dea651f400eac",
      "61a302a09b2dea651f400e82"
    ],
    "created": "2021-11-21T21:57:55.937Z",
    "__v": 0
  },
  "comments": [
    {
      "comment": "hello",
      "postedBy": {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac",
          "61a303019b2dea651f400ea6"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      },
      "_id": "61a302d49b2dea651f400e95",
      "created": "2021-11-28T04:17:24.344Z"
    },
    {
      "comment": "Hello ",
      "postedBy": {
        "_id": "61a303699b2dea651f400f0c",
        "username": "mo",
        "email": "mo@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a303019b2dea651f400ea6",
          "61a302a09b2dea651f400e82",
          "61a303339b2dea651f400eac",
          "61a3102d9b2dea651f4010b4"
        ],
        "created": "2021-11-28T04:19:53.309Z",
        "__v": 0
      },
      "_id": "61a309a89b2dea651f401093",
      "created": "2021-11-28T04:46:32.731Z"
    }
  ],
  "created": "2021-11-28T04:16:32.211Z",
  "__v": 0
}
```

</details>

#### GET /users/{user_id}

- General

  - get a user

- Sample Request
  - `https://u02p02-backend.herokuapp.com/users/619ac0e3ae4036a4acbb7d33`

<details>
<summary>Response</summary>

```
{
    "_id": "619ac0e3ae4036a4acbb7d33",
    "username": "ibrahim",
    "email": "ibrahim@gmail.com",
    "password": "112233",
    "about": "hello",
    "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
    "followers": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      },
      {
        "_id": "61a303699b2dea651f400f0c",
        "username": "mo",
        "email": "mo@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a303019b2dea651f400ea6",
          "61a302a09b2dea651f400e82",
          "61a303339b2dea651f400eac",
          "61a3102d9b2dea651f4010b4"
        ],
        "created": "2021-11-28T04:19:53.309Z",
        "__v": 0
      }
    ],
    "following": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      }
    ],
    "likes": [
      {
        "_id": "61a3023a9b2dea651f400e72",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1687626-623217107.jpg?alt=media&token=b499bb8f-920b-4ee3-b337-45844195ed02",
        "location": "AL-ULA, Saudi Arabia",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a3039c9b2dea651f400f58",
            "created": "2021-11-28T04:20:44.285Z"
          }
        ],
        "created": "2021-11-28T04:14:50.390Z",
        "__v": 0
      },
      {
        "_id": "61a303339b2dea651f400eac",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2Fgettyimages-688899881-1519413300.jpg?alt=media&token=95495fa2-59c4-4580-a0d9-829c0699ee87",
        "location": "New York, USA",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "61a3016f9b2dea651f400e53",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a303919b2dea651f400f34",
            "created": "2021-11-28T04:20:33.825Z"
          }
        ],
        "created": "2021-11-28T04:18:59.566Z",
        "__v": 0
      },
      {
        "_id": "61a302a09b2dea651f400e82",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1421841-1985003692.jpg?alt=media&token=e0eb2cbd-1418-476d-a5f4-d1945e6ec9db",
        "location": "Riyadh, Saudi Arabia",
        "likes": [
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a3016f9b2dea651f400e53",
            "_id": "61a302d49b2dea651f400e95",
            "created": "2021-11-28T04:17:24.344Z"
          },
          {
            "comment": "Hello ",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a309a89b2dea651f401093",
            "created": "2021-11-28T04:46:32.731Z"
          }
        ],
        "created": "2021-11-28T04:16:32.211Z",
        "__v": 0
      }
    ],
    "created": "2021-11-21T21:57:55.937Z",
    "__v": 0
  }
```

</details>

#### POST /signup

- General

  - creates a new user

- Request Body

  - username
  - email
  - password

- Sample Request
  - `https://u02p02-backend.herokuapp.com/signup`
  - Request Body

```
{
    "username":"ibrahiim",
    "email":"ibrahiim@gamil.com",
    "password":"123456"
}
```

<details>
<summary>Response</summary>

```
{
  "message": "Signup success!"
}
```

</details>

#### POST /login

- General

  - login a user

- Request Body

  - identifier
  - password

- Sample Request
  - `https://u02p02-backend.herokuapp.com/login`
  - Request Body

```
{
    "identifier":"ibrahiim",
    "password":"123456"
}
```

<details>
<summary>Response</summary>

```
{
  "_id": "61a51297890a44fcb5599099",
  "username": "ibrahiim",
  "email": "ibrahiim@gamil.com",
  "password": "123456",
  "about": "",
  "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  "followers": [],
  "following": [],
  "likes": [],
  "created": "2021-11-29T17:49:11.420Z",
  "__v": 0
}
```

</details>

#### POST /posts

- General

  - create a new post

- Request Body

  - image
  - location
  - creator

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts`
  - Request Body

```
{
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Al-Riyad.jpg/1200px-Al-Riyad.jpg",
    "location":"Riyadh, Saudi Arabia",
    "creator":"61a3016f9b2dea651f400e53"
}
```

<details>
<summary>Response</summary>

```
{
  "message": "Post added successfully"
}
```

</details>

#### POST /posts/addComment

- General

  - add a new comment to a post

- Request Body

  - comment
  - postedBy
  - postId

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts/addComment`
  - Request Body

```
{
    "comment":"hello this a new comment",
    "postedBy":"61a3016f9b2dea651f400e53",
    "postId":"61a303019b2dea651f400ea6"
}
```

<details>
<summary>Response</summary>

```
{
  "_id": "61a303019b2dea651f400ea6",
  "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2FNew_york_times_square-terabass.jpg?alt=media&token=6c6a1142-3d1b-438f-ac67-9acedd3ff6d5",
  "location": "New York, USA",
  "likes": [
    {
      "_id": "61a303699b2dea651f400f0c",
      "username": "mo",
      "email": "mo@gmail.com",
      "password": "1",
      "about": "",
      "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
      "followers": [],
      "following": [
        "619ac0e3ae4036a4acbb7d33"
      ],
      "likes": [
        "61a303019b2dea651f400ea6",
        "61a302a09b2dea651f400e82",
        "61a303339b2dea651f400eac",
        "61a3102d9b2dea651f4010b4"
      ],
      "created": "2021-11-28T04:19:53.309Z",
      "__v": 0
    }
  ],
  "creator": "61a3016f9b2dea651f400e53",
  "comments": [
    {
      "comment": "hello",
      "postedBy": {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      },
      "_id": "61a303419b2dea651f400ebf",
      "created": "2021-11-28T04:19:13.307Z"
    },
    {
      "comment": "hello this a new comment",
      "postedBy": {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      },
      "_id": "61a5155d890a44fcb55990aa",
      "created": "2021-11-29T18:01:01.497Z"
    }
  ],
  "created": "2021-11-28T04:18:09.533Z",
  "__v": 0
}
```

</details>

#### PUT /users/resetPassword/{user_id}

- General

  - reset the user password

- Request Body

  - password

- Sample Request
  - `https://u02p02-backend.herokuapp.com/resetPassword/619ac0e3ae4036a4acbb7d33`
  - Request Body

```
{
    "password":"112233",
}
```

<details>
<summary>Response</summary>

```
{
    "_id": "619ac0e3ae4036a4acbb7d33",
    "username": "ibrahim",
    "email": "ibrahim@gmail.com",
    "password": "112233",
    "about": "hello",
    "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
    "followers": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      },
      {
        "_id": "61a303699b2dea651f400f0c",
        "username": "mo",
        "email": "mo@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a303019b2dea651f400ea6",
          "61a302a09b2dea651f400e82",
          "61a303339b2dea651f400eac",
          "61a3102d9b2dea651f4010b4"
        ],
        "created": "2021-11-28T04:19:53.309Z",
        "__v": 0
      }
    ],
    "following": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      }
    ],
    "likes": [
      {
        "_id": "61a3023a9b2dea651f400e72",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1687626-623217107.jpg?alt=media&token=b499bb8f-920b-4ee3-b337-45844195ed02",
        "location": "AL-ULA, Saudi Arabia",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a3039c9b2dea651f400f58",
            "created": "2021-11-28T04:20:44.285Z"
          }
        ],
        "created": "2021-11-28T04:14:50.390Z",
        "__v": 0
      },
      {
        "_id": "61a303339b2dea651f400eac",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2Fgettyimages-688899881-1519413300.jpg?alt=media&token=95495fa2-59c4-4580-a0d9-829c0699ee87",
        "location": "New York, USA",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "61a3016f9b2dea651f400e53",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a303919b2dea651f400f34",
            "created": "2021-11-28T04:20:33.825Z"
          }
        ],
        "created": "2021-11-28T04:18:59.566Z",
        "__v": 0
      },
      {
        "_id": "61a302a09b2dea651f400e82",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1421841-1985003692.jpg?alt=media&token=e0eb2cbd-1418-476d-a5f4-d1945e6ec9db",
        "location": "Riyadh, Saudi Arabia",
        "likes": [
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a3016f9b2dea651f400e53",
            "_id": "61a302d49b2dea651f400e95",
            "created": "2021-11-28T04:17:24.344Z"
          },
          {
            "comment": "Hello ",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a309a89b2dea651f401093",
            "created": "2021-11-28T04:46:32.731Z"
          }
        ],
        "created": "2021-11-28T04:16:32.211Z",
        "__v": 0
      }
    ],
    "created": "2021-11-21T21:57:55.937Z",
    "__v": 0
  }
```

</details>

#### PUT /users/changeAbout/{user_id}

- General

  - change the user bio

- Request Body

  - about

- Sample Request
  - `https://u02p02-backend.herokuapp.com/changeAbout/619ac0e3ae4036a4acbb7d33`
  - Request Body

```
{
    "about":"hello new bio",
}
```

<details>
<summary>Response</summary>

```
{
    "_id": "619ac0e3ae4036a4acbb7d33",
    "username": "ibrahim",
    "email": "ibrahim@gmail.com",
    "password": "112233",
    "about": "hello new bio",
    "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
    "followers": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      },
      {
        "_id": "61a303699b2dea651f400f0c",
        "username": "mo",
        "email": "mo@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a303019b2dea651f400ea6",
          "61a302a09b2dea651f400e82",
          "61a303339b2dea651f400eac",
          "61a3102d9b2dea651f4010b4"
        ],
        "created": "2021-11-28T04:19:53.309Z",
        "__v": 0
      }
    ],
    "following": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      }
    ],
    "likes": [
      {
        "_id": "61a3023a9b2dea651f400e72",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1687626-623217107.jpg?alt=media&token=b499bb8f-920b-4ee3-b337-45844195ed02",
        "location": "AL-ULA, Saudi Arabia",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a3039c9b2dea651f400f58",
            "created": "2021-11-28T04:20:44.285Z"
          }
        ],
        "created": "2021-11-28T04:14:50.390Z",
        "__v": 0
      },
      {
        "_id": "61a303339b2dea651f400eac",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2Fgettyimages-688899881-1519413300.jpg?alt=media&token=95495fa2-59c4-4580-a0d9-829c0699ee87",
        "location": "New York, USA",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "61a3016f9b2dea651f400e53",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a303919b2dea651f400f34",
            "created": "2021-11-28T04:20:33.825Z"
          }
        ],
        "created": "2021-11-28T04:18:59.566Z",
        "__v": 0
      },
      {
        "_id": "61a302a09b2dea651f400e82",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1421841-1985003692.jpg?alt=media&token=e0eb2cbd-1418-476d-a5f4-d1945e6ec9db",
        "location": "Riyadh, Saudi Arabia",
        "likes": [
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a3016f9b2dea651f400e53",
            "_id": "61a302d49b2dea651f400e95",
            "created": "2021-11-28T04:17:24.344Z"
          },
          {
            "comment": "Hello ",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a309a89b2dea651f401093",
            "created": "2021-11-28T04:46:32.731Z"
          }
        ],
        "created": "2021-11-28T04:16:32.211Z",
        "__v": 0
      }
    ],
    "created": "2021-11-21T21:57:55.937Z",
    "__v": 0
  }
```

</details>

#### PUT /users/changeAvatar/{user_id}

- General

  - change the user avatar

- Request Body

  - avatar

- Sample Request
  - `https://u02p02-backend.herokuapp.com/changeAvatar/619ac0e3ae4036a4acbb7d33`
  - Request Body

```
{
    "avatar":"https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?dfg0bd4bfdfg43-490e-dfgb",
}
```

<details>
<summary>Response</summary>

```
{
    "_id": "619ac0e3ae4036a4acbb7d33",
    "username": "ibrahim",
    "email": "ibrahim@gmail.com",
    "password": "112233",
    "about": "hello",
    "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?dfg0bd4bfdfg43-490e-dfgb",
    "followers": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      },
      {
        "_id": "61a303699b2dea651f400f0c",
        "username": "mo",
        "email": "mo@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a303019b2dea651f400ea6",
          "61a302a09b2dea651f400e82",
          "61a303339b2dea651f400eac",
          "61a3102d9b2dea651f4010b4"
        ],
        "created": "2021-11-28T04:19:53.309Z",
        "__v": 0
      }
    ],
    "following": [
      {
        "_id": "61a3016f9b2dea651f400e53",
        "username": "alex",
        "email": "alex@gmail.com",
        "password": "1",
        "about": "",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "followers": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "following": [
          "619ac0e3ae4036a4acbb7d33"
        ],
        "likes": [
          "61a3023a9b2dea651f400e72",
          "61a303339b2dea651f400eac"
        ],
        "created": "2021-11-28T04:11:27.315Z",
        "__v": 0
      }
    ],
    "likes": [
      {
        "_id": "61a3023a9b2dea651f400e72",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1687626-623217107.jpg?alt=media&token=b499bb8f-920b-4ee3-b337-45844195ed02",
        "location": "AL-ULA, Saudi Arabia",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a3039c9b2dea651f400f58",
            "created": "2021-11-28T04:20:44.285Z"
          }
        ],
        "created": "2021-11-28T04:14:50.390Z",
        "__v": 0
      },
      {
        "_id": "61a303339b2dea651f400eac",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2Fgettyimages-688899881-1519413300.jpg?alt=media&token=95495fa2-59c4-4580-a0d9-829c0699ee87",
        "location": "New York, USA",
        "likes": [
          "61a3016f9b2dea651f400e53",
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "61a3016f9b2dea651f400e53",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a303919b2dea651f400f34",
            "created": "2021-11-28T04:20:33.825Z"
          }
        ],
        "created": "2021-11-28T04:18:59.566Z",
        "__v": 0
      },
      {
        "_id": "61a302a09b2dea651f400e82",
        "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1421841-1985003692.jpg?alt=media&token=e0eb2cbd-1418-476d-a5f4-d1945e6ec9db",
        "location": "Riyadh, Saudi Arabia",
        "likes": [
          "61a303699b2dea651f400f0c",
          "619ac0e3ae4036a4acbb7d33"
        ],
        "creator": "619ac0e3ae4036a4acbb7d33",
        "comments": [
          {
            "comment": "hello",
            "postedBy": "61a3016f9b2dea651f400e53",
            "_id": "61a302d49b2dea651f400e95",
            "created": "2021-11-28T04:17:24.344Z"
          },
          {
            "comment": "Hello ",
            "postedBy": "61a303699b2dea651f400f0c",
            "_id": "61a309a89b2dea651f401093",
            "created": "2021-11-28T04:46:32.731Z"
          }
        ],
        "created": "2021-11-28T04:16:32.211Z",
        "__v": 0
      }
    ],
    "created": "2021-11-21T21:57:55.937Z",
    "__v": 0
  }
```

</details>

#### PUT /users/followUser

- General

  - follow a user

- Request Body

  - userId
  - otherUserId

- Sample Request
  - `https://u02p02-backend.herokuapp.com/followUser`
  - Request Body

```
{
    "userId":"619ac0e3ae4036a4acbb7d33",
    "otherUserId":"61a3016f9b2dea651f400e53"
}
```

<details>
<summary>Response</summary>

```
{
    message: "User followed successfully"
}
```

</details>

#### PUT /users/unFollowUser

- General

  - unfollow a user

- Request Body

  - userId
  - otherUserId

- Sample Request
  - `https://u02p02-backend.herokuapp.com/unFollowUser`
  - Request Body

```
{
    "userId":"619ac0e3ae4036a4acbb7d33",
    "otherUserId":"61a3016f9b2dea651f400e53"
}
```

<details>
<summary>Response</summary>

```
{
    message: "User unfollowed successfully"
}
```

</details>

#### PUT /posts/addLike

- General

  - add a post your likes

- Request Body

  - userId
  - postId

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts/addLike`
  - Request Body

```
{
    "userId":"61a3016f9b2dea651f400e53",
    "postId":"61a303019b2dea651f400ea6"
}
```

<details>
<summary>Response</summary>

```
{
  "Post have been liked"
}
```

</details>

#### PUT /posts/deleteLike

- General

  - delete a post from your likes

- Request Body

  - userId
  - postId

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts/deleteLike`
  - Request Body

```
{
    "userId":"61a3016f9b2dea651f400e53",
    "postId":"61a303019b2dea651f400ea6"
}
```

<details>
<summary>Response</summary>

```
{
  "like have been removed from post"
}
```
</details>

#### PUT /posts/followingPosts/{user_id}

- General

  - get a list of post of a user following

- Request Body

  - userFollowing

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts/followingPosts/61a303699b2dea651f400f0c`
  - Request Body

```
{
    "userFollowing":["619ac0e3ae4036a4acbb7d33"]
}
```

<details>
<summary>Response</summary>

```
[
  {
    "_id": "61a3023a9b2dea651f400e72",
    "image": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F1687626-623217107.jpg?alt=media&token=b499bb8f-920b-4ee3-b337-45844195ed02",
    "location": "AL-ULA, Saudi Arabia",
    "likes": [
      "61a3016f9b2dea651f400e53",
      "619ac0e3ae4036a4acbb7d33"
    ],
    "creator": {
      "_id": "619ac0e3ae4036a4acbb7d33",
      "username": "ibrahim",
      "email": "ibrahim@gmail.com",
      "password": "111",
      "about": "hello",
      "avatar": "https://firebasestorage.googleapis.com/v0/b/u02p02-c76cc.appspot.com/o/images%2F3922545-sl-456.jpg?alt=media&token=070bd4bf-a043-490e-b00e-4e4ac780759b",
      "followers": [
        "61a3016f9b2dea651f400e53",
        "61a303699b2dea651f400f0c"
      ],
      "following": [
        "61a3016f9b2dea651f400e53"
      ],
      "likes": [
        "619b471d25a1a70eddbf9f50",
        "619e40cc1c713025f89adbc6",
        "619b472525a1a70eddbf9f52",
        "619b388148b4ae058284d491",
        "61a3023a9b2dea651f400e72",
        "61a303339b2dea651f400eac",
        "61a302a09b2dea651f400e82"
      ],
      "created": "2021-11-21T21:57:55.937Z",
      "__v": 0
    },
    "comments": [
      {
        "comment": "hello",
        "postedBy": "61a303699b2dea651f400f0c",
        "_id": "61a3039c9b2dea651f400f58",
        "created": "2021-11-28T04:20:44.285Z"
      }
    ],
    "created": "2021-11-28T04:14:50.390Z",
    "__v": 0
  }
]
```

</details>

#### PUT /posts/{user_id}

- General

  - delete a post

- Sample Request
  - `https://u02p02-backend.herokuapp.com/posts/61a3023a9b2dea651f400e72`

<details>
<summary>Response</summary>

```
{
    message: "Post deleted successfully"
}
```

</details>
