# 🍞 Bakery App – Auto1 Frontend Challenge

Thanks for the opportunity! I really enjoyed working on this project.

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
   - Increment is disabled when the selected quantity reaches the product's stock.

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
   - Direct URL navigation is not encouraged but supported.

9. **Error Handling**  
   - Graceful display of fallback error messages from API failures.

## 🛠 Tech Stack

- **React** with **TypeScript**
- **SCSS** for styles
- **Bootstrap 5** for layout and components

## 🗂 Folder Structure

client/
├── public/
│ └── images/ # Static image assets
├── src/
│ ├── components/
│ │ ├── Menu/ # Menu and menu item components
│ │ └── UI/ # Reusable UI elements
│ ├── constants/ # Route path constants
│ ├── hooks/ # backed functions
│ ├── layout/ # Layout components (e.g., HomeLayout)
│ ├── pages/
│ │ ├── HomePage/
│ │ ├── OrderPage/
│ │ └── SuccessPage/
│ ├── store/ # Order context & reducer logic
│ ├── styles/ # Global SCSS & mixins
│ ├── types/ # TypeScript types
│ └── App.tsx # Main entry point with routing


## Pages Overview

- **Home Page**  
  Intro screen with a button to start an order.

- **Order Page**  
  List of products with interactive quantity controls and total price.

- **Success Page**  
  Confirmation screen after a successful order, with an option to order again.



## Thanks Again!

This was a great challenge that combined UX thinking with frontend implementation.  
Looking forward to any feedback!
