# Redux Feedback Loop


This is an app to create simple feedback entries in a database 
with a seperate view for each feedback criteria. The criteria are:
feeling, understanding of material, support, and additional comments.

There is also and admin view to see the entries and delete them.
 
### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

A multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- How are you feeling today?
![feeling](wireframes/page-one.png)
- How well are you understanding the content?
![understanding](wireframes/page-two.png)
- How well are you being supported?
![support](wireframes/page-three.png)
- Any comments you want to leave?
![comments](wireframes/page-four.png)

While there is no nav bar, each part of the form has its own route. Clicking next should move the user to the appropriate step in the process.

 When the form is complete the submission is saved in database. The user should see a submission success page.
 ![understanding](wireframes/page-five.png)

### DISPLAY FEEDBACK

Existing feedback is displayed at the route `/admin`. The most recently added feedback appears at the top of the list. the user can delete existing feedback. The user is prompted to confirm prior to deleting the feedback from the database.

![display feedback](wireframes/admin.png)

## STRETCH GOALS

- Add the ability to flag an existing feedback entry for further review on the /admin view
