# This message will self-destruct

A NodeJS programming challenge.

The goal here is to create a simple web application that allows someone to create a message, view that message at a unique URL, and destroy the message upon viewing it. Just like the title states, this message will self-destruct!

## Step 1: Installation

Fork this repository, clone it, install dependencies, and run it.

```bash
git clone {{your_fork_url_here}}
npm install
node app.js
```

## Step 2: Complete the Requirements

Complete the following requirements by using any database engine of your choice. Update this readme by checking the following boxes as you go.

- [ x ] As a user, I should see a form to create a new message on the homepage.
- [ x ] As a user, I should see a list of links for all created messages below the 'new message' form on the homepage.
- [ x ] As a user, when I click a link in the message list, I should be able to view the message at a unique URL.
- [ x ] As a user, when I open a message, the message should self-destruct (delete from the database).
- [ x ] As a user, I should no longer see messages on the homepage that have been viewed.

Bonus points for making it look pretty :sparkles:

## Step 3: Submit

When you are finished, [deploy your app to Heroku](https://devcenter.heroku.com/articles/git) and send an email with a link to the Heroku app and a link to your fork. Thanks!

DEV NOTES
This is by no means a polished finished app. With the time restraints I have completed Step 2 though I know this small application needs work. See some notes below:

1.  Need to put something in for when the list is empty.
2.  making the input boxes bigger to see more text at the same time.
3.  make the character limit larger for the message input.
4.  obvious that visuals need some work, but should be easier now that a general working has been completed
5.  Pagenation or some sort of more organization to the message list would be a great input
6.  Though the message deletes from the DB upon clicking on the message, I used local storage which means that the deleted message page may be refreshed without losing the message. This does not deviate from the request, though I could find this an issue in the future.
7.  I would not want to delete any message in the future. I put a column in the DB to have the opportunity to not delete but request to hide a message via a boolean column. Keeping data is good, yea? though I know we are here to test knowledge.
8.  I have tried unsuccessfully to deploy this on heroku. I have tried many times with another application using the same frameworks and DB types to no avail so I did not try here. I know I require a Procfile and such.
9.  there a warning pointing to the reducer telling me a variable is not used used but declared. This is to mutate another variable in that block of code.
