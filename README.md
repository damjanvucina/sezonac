﻿# Sezonac

Web app for searching seasonal jobs.

### Features

- Easily register and publish seasonal jobs ads
- Anyone can search job advertisments using powerful filtering system

## Technology of choice

| Side   | Technologies                  | Noteworthy libraries                       |
| ------ | ----------------------------- | ------------------------------------------ |
| Server | Node.js, Express              | bcryptjs, jsonwebtoken, passport, mongoose |
| Client | React.js, Redux, React-Router | axios, redux-thunk, moment                 |

## App preview

![App video](https://github.com/damjanvucina/sezonac/blob/master/preview.gif)

<p align="center"><em>How it works?</em></p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You need to have [npm](https://www.npmjs.com/get-npm "Click here to install npm. ") installed.

### Quick start


Step | Command | Explanation
--- | --- | ---
0 |      | *Clone the project and extract it. In the config folder create "keys_dev.js" file. In that file paste the code given below this table.*
1 |      | *Open terminal in the project root*
2 | `npm install` | *Install server dependencies*
3 | `cd client` | *Open "client" folder*
4 | `npm install` | *Install client dependencies*
5 | `cd ..` | *Go back to the project's root folder*
6 | `npm run dev` | *Run the server and the client simultaneously.*
7 |      | *Paste "localhost:3000" in the URL. Client runs on port 3000, server on port 5000.*

Code that needs to be pasted in the keys_dev.js file as described in step 0:

`module.exports = {
    mongoURI:
        "mongodb+srv://fakeuserforgithubpurposes:fakeuserforgithubpurposes@cluster0-awywm.mongodb.net/test?retryWrites=true",
    secretOrKey: "secret"
};`

## Author

- [Damjan Vučina](https://github.com/damjanvucina)

## License

This project is licensed under the Apache License 2.0 License - see the [LICENSE.md](https://github.com/damjanvucina/bsc-thesis/blob/master/LICENSE) file for details
