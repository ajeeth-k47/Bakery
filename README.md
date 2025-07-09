# 🍞 Bakery App 

This application allows the users to order bakery items

## Implemented Features

1. **Product Listing**  
   Displayed all bakery items in a responsive card layout.

2. **Product Details**  
   Each product card shows:
   - Name
   - Thumbnail
   - Price
   - Available stock

3. **Ordering Functionality**  
   - Added **increment** and **decrement** buttons to select item quantity.
   - Decrement is disabled at `0` quantity.
   - Increment is disabled when the selected quantity reaches the product's max stock.

4. **Total Price Display**  
   Total amount is dynamically calculated and shown at the bottom of the order card.

5. **Out-of-Stock Handling**  
   - Products with `0` stock are visually disabled and cannot be selected.

6. **Order Submission**  
   - Displays a success page upon order submission.
   - Includes a **"Submit another order"** button to restart the flow.

7. **Cancel Order**  
   - Users can cancel an order from the Order page.
   - Resets quantities and navigates back to Home.

8. **Navigation Flow**  
   - Home → Order → Success, all controlled via buttons.

9. **Error Handling**  
   - Graceful display of fallback error messages from API failures.

## 🛠 Tech Stack

- **React** with **TypeScript**
- **SCSS** for styles
- **Bootstrap 5** for layout and components

## 🗂 Folder Structure

![Folder structure](/assets/images/folderstructure.png)


## Pages Overview

- **Home Page**  
  Intro screen with a button to start an order.

- **Order Page**  
  List of products with interactive quantity controls and total price.

- **Success Page**  
  Confirmation screen after a successful order, with an option to order again.




