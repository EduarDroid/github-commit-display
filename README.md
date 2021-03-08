# github-commit-display

This challenge is intended to display all github commits from this repository

As a first decision this was suposed to use the MERN stack and the reason is this: In order to get github commits I choose octokit library which needed an auth token. So, to not commiting the auth token in a public repo I thought about storing it encrypted in mongoDB atlas, create a node js application to expose endpoints ,and then access this endpoints in the front end so I can finally display the github commits. 

However octokit library was giving me some issues and at the end I was allowed to get the commits by just using the url without an auth token. 

This is it, the backend and frontend are working. but only the front end matters for this challenge. 

When you clone/download this project. make sure to run this commands in the front folder: 

## npm install

## npm start

If you are interested in running the backend, this are the commands allowed: 

## npm install

## npm run app
