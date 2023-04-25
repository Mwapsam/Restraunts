# Restaurant Ratings App
This is a simple React.js app that displays a grid of restaurants and allows users to navigate into each restaurant to see its ratings. The app is built using the Strapi headless CMS to manage restaurant and rating data.

## Getting Started
To get started, clone this repository and install the necessary dependencies using `npm install`. You will also need to set up a Strapi instance and create two content types: Restaurant and Rating, with the appropriate fields. Once you have created and populated your Strapi instance with data, you can start the app using `npm run dev`.

## To Run an API
Enter the following commands in your terminal;

`cd api`

`yarn install`

`yarn run develop`

## Architecture
  - restaurants:
      - name (string)
      - address (string)
      - image (string)
      - rating (foreign key)
      - id (primary key)
      
  - ratings:
      - description (string)
      - rating (string)
      - restaurant_id (integer)
      - user_id (integer)
      
  - users: 
      - username (string)
      - email (string)
      - password (string)
     

## Features
- Displays a grid of restaurants on the home page
- Allows users to click on a restaurant to navigate into its details page
- Displays the restaurant's name, address, and ratings on its details page
- Displays the rating's description and rating value on the ratings page
- Uses state management to efficiently update the UI
- Organizes code in a clean and orderly manner
- Implements navigation using React Router
- Implements API calls using Axios
## Technologies Used
- React.js
- Strapi CMS
- React Router
- Axios

## Testing
To test the code open your terminal and change directory to the root folder of the app. enter the following command;

`npx jest`

### Contributing
Contributions are welcome! To contribute, fork this repository and submit a pull request with your changes.

### License
This project is licensed under the MIT License.
