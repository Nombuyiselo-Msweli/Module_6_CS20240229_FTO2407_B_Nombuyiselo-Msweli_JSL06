// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuDiv = document.getElementById('menu'); 
    // Loop through each category and its items in the menu object
        // Create an element to represent the category
        // Set the text content of the category element to the category name
        // Append the category element to the menu container
    

        //=== ATTEMPT 2 AT GETTING KEYS AS HEADINGS ===
        let menuCategoryElement = document.createElement('h1');
        for (let x in menu) {
          menuCategoryElement.textContent += menu[x] + "<br>"
        }
        menuDiv.appendChild(menuCategoryElement);

        //=== ATTEMPT 1 AT GETTING KEYS AS HEADINGS ====
        //let menuCategoryElement = document.createElement('h1');
        //menuCategoryElement.textContent = Object.keys(menu);
        //menuDiv.appendChild(menuCategoryElement);

        // Create an element to represent a list of items
        let itemsList = document.getElementById("order-items"); 
        // Append a list of items element to the menu container
        menuDiv.appendChild(itemsList); 
        // Loop through the items in the category and create list items
            // Create a list item element
            // Set the text content of the list item element to the item name
            // Attach a click event listener to the list item to add it to the order
            // Append the list item to the list of items

            let menuItemElement = document.createElement('li');
            menuItemElement.textContent = Object.values(menu) ;
            itemsList.appendChild(menuItemElement);


}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
