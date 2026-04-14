# Browsely - Interactive Data Explorer

Browsely is a responsive single-page web application that allows users to explore, search, and filter products using data fetched from an external API.

## Live Demo

https://browsely-app.vercel.app/

## Repository

https://github.com/medhavi-cmd/Browsely-App.git

## Features
Responsive product grid layout
Real-time search functionality
Category-based filtering
Loading state handling
Error handling for API failures
Empty state for no results
Fully responsive design
Screenshots

### Homepage
![Homepage](public/screenshots/HomePage.png)

Displays the main product grid along with the navigation and overall layout.

### Search Functionality
![Search](public/screenshots/Search.png)

Shows real-time filtering of products based on user input.

### Category Filtering
![Filter](public/screenshots/Filter.png)

Demonstrates filtering based on selected category.

### Empty State
![Empty](public/screenshots/Empty.png)

Displays a message when no products match the search.

### Mobile View
![Mobile](public/screenshots/Mobile1.png)
![Mobile](public/screenshots/Mobile2.png)

Shows the responsive layout on smaller screens.

Technologies Used
React (Vite)
Tailwind CSS
JavaScript (ES6+)
Axios
Framer Motion
API Used

## Fake Store API
https://fakestoreapi.com/products


## Key Architectural Decisions

Component-Based Structure
The application is divided into reusable components such as Navbar, Searchbar, ProductCard, Loader, Error, and Footer.

State Management
React hooks (useState, useEffect) are used to manage data and UI state.

Client-Side Filtering
Filtering is handled on the client side to improve performance and responsiveness.

User Experience Handling
Loading, error, and empty states are implemented to enhance usability.

Responsive Design
The layout is designed to adapt across different screen sizes using Tailwind CSS.

## Project Structure
src/ <br>
 ├── components/ <br>
 │    ├── Navbar.jsx  <br>
 │    ├── Searchbar.jsx  <br>
 │    ├── ProductCard.jsx <br>
 │    ├── Loader.jsx <br>
 │    ├── Error.jsx <br>
 │    └── Footer.jsx <br>
 ├── App.jsx <br>
 └── main.jsx <br>


## Setup Instructions
Setup Instructions
git clone https://github.com/your-username/browsely.git  <br>
cd browsely
<br>
npm install
<br>
npm run dev


## Author
Medhavi Singh
