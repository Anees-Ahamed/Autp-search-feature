To create an auto-search feature, similar to the one on maccosmetics.com, that searches the Node server and displays the response as you type, you will need to follow these general steps:

Create a text input field in the HTML file for users to enter their search term
Create a function in app/scripts/main.js that will make an API call to the Node server every time a user enters a character in the search input field
Use the response from the server to dynamically display matching search results to the user in the HTML file
Add styles to the search input field and search results to match the styling of the maccosmetics.com search bar

Here is a more detailed explanation of how to accomplish each step:

Create a text input field in the HTML file for users to enter their search term
Add an input element to the HTML file, like this: 

<input type="text" id="search-input" placeholder="Search" />


Create a function in app/scripts/main.js that will make an API call to the Node server every time a user enters a character in the search input field
Create an event listener on the search input field that will call a function every time a user enters a character. The function should make an API call to the Node server with the current value of the search input field.

This code adds an event listener to the search input field that listens for "input" events, which occur every time the user enters a character. When an input event occurs, the function gets the current value of the search input field and makes an API call to the Node server with the search term. The response from the server is logged to the console.

Use the response from the server to dynamically display matching search results to the user in the HTML file
Create an HTML element to display the search results, and use the response from the server to populate it with the matching results.

This code creates an empty div element with the id "search-results" to hold the search results. The event listener for the search input field now populates this div with matching results. The code first clears the existing results from the div using searchResults.innerHTML = "", then it loops through the data from the server and creates a new div element for each result, adding the result's name as text to the div element. Finally, the new div elements are added to the search results div.

Add styles to the search input field and search results to match the styling of the maccosmetics.com search bar
Add CSS styles to the app/sass/_search.scss file to style the search input field and search results to match the maccosmetics.com search bar.