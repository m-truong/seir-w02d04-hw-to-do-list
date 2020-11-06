// cached DOM nodes 
const form = document.querySelector("form");
const input = document.querySelector("input");
const toDoList = document.querySelector("#to-do-list");
const completedList = document.querySelector("#completed-list");

/** 
 * I was able to add button-elements with event-handlers to each individual li-element,
 * but I couldn't get the "click" event to work correctly. Every time a "completed" button was clicked,
 * all the "to-do" li-elements would disappear, and only one li-element would appear in the 
 * completed column. I tried using the stopPropagation() method on the event object, 
 * but that didn't work either. 
 */

// form eventListener
form.addEventListener("submit", (evt) => {
    // prevent default page refresh
    evt.preventDefault();
    // assign input.value
    let userInput = input.value;
    // create <li> element
    let li = document.createElement("li");
    // assign textContent
    li.textContent = userInput;
    // append to toDoList
    toDoList.appendChild(li);   
    // create button element
    let button = document.createElement("button");
    // change button.innerText to "completed"
    button.innerText = "Completed";
    // add eventListener to the button 
    button.addEventListener("click", (evt) => {
        // evt.stopPropagation; 

        // remove the li from toDoList
        toDoList.remove(li);
        // change the button.innerText to "Remove"
        button.innerText = "Remove"
        // change the text-color to #ED6495 
        li.style.color = "#ED6495";
        // then append the li to the completedList
        completedList.appendChild(li); 

        // add another event listener that removes the buttom 
        button.addEventListener("click", () => {
            completedList.remove(li);
        });
    });
    // append the button to the li
    li.appendChild(button);
    input.value = "";
})
