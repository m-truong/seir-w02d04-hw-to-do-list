[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# TO DO LIST

![todo](https://1.bp.blogspot.com/-ALyHmkrwZEE/Xsatc9771bI/AAAAAAAACZA/oAqoQCm2Qv8Ee2vTQPPJVYcMgpZcb3NhACLcBGAsYHQ/s640/custom%2B%25E2%2580%2593%2B1.png)

---

Title: To-Do List 
Type: Homework

---


Build a To-Do list app with two columns: one for things to do, and another for things that have been done. Use JavaScript to give your app functionality.

### User Stories
Your user should be able to:

* Enter a 'todo' item in the input box, and click the 'add' button to have the todo item render in the to-do-list column.

* Click on a button within the to-do-item to move that item over to a 'completed' column.

* Click that same button, after it's been moved to 'completed', to remove the todo item from the page.

## Commits

- Make sure to commit after each block of code that you create. Give an appropriate comment.

---
# Getting Started


## :pencil: Part One


1. Make a folder called `to_do_list`. Inside of this folder add an `index.html` file and a `style.css` file
  - make a list of the ids, classes, and elements that are styled in the css, so you can match it and use the styles

2. Complete this assignment using JavaScript


Remember the general flow of what is happening. The user makes an action, you run some code in order to process this action, the results of the action are rendered to the page, and then you wait until another action takes place.

## :pencil: Part 2

When the user clicks the `add` button, the input box value should be added to their to-do list as an item in the list.

## :pencil: Part 3
When the user clicks the `add` button, the input should display nicely rather than just text that keeps joining on the same line.

* Hint: consider adding the new information into an array of to-dos and display all of the items in that array.

**The user should be able to see all of the todos that they have created.**

## :pencil: Part 4

The user should be able to click 'done' on a todo and have it move to the completed column.

* When you create the todo item, add a button that says 'COMPLETED' to it that has an event listener and handler. Yes! You can include an event listener inside another event handler . . .

* The handler on this 'COMPLETED' button should append the todo item to the completed column.

* When the button 'COMPLETED' is clicked, set the background color of the target to-do-item to `#ED6495`


## :pencil: Part 5 - Delete

The user should be able to delete a to-do item from the completed list.

* When the to-do-item moves to the completed list, the text of the 'COMPLETED' button should change to 'REMOVE'
* When the 'REMOVE' button is clicked, the target to-do-item should be removed from the DOM  


<hr>
# :fireworks: Celebrate! You are done! :fireworks:

<hr>

### Hungry for More

#### Local Storage

The browser has something called [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage). This allows us to cache data in the browser. Using local storage, make this application remember the to-dos that have already been entered in, even if the page is closed.

#### Edit
Can you make it so that a user would be able to edit a To Do Item?


## Deliverables

1. All your work in the working To Do List webpage. 

## Technical Requirements

Your JavaScript files MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
