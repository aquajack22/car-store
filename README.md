React ⚛ + Typescript + Styled Component 💅 + React-Query(hooks) + Material-UI + Spring Boot + REST API +  MongoDB 
A simple car store where you can select the car you want and add it to your shopping cart.

Instructions

Setting up the MongoDB or wiremock :
In the application.properties, mention the port you want to start the backend server on, 
and also specify the mongodb url where you have placed the warehouse.json 
If you have mongodb installed, browse and upload the warehouse.json in cardb bucket of connection warehouse.

Alternatively in car-store/src/test/resources/wiremocks/
you can find the wiremock files if you dont have a db to connect to.
Just place the wiremock jar in the same path, edit the batch file and start it.
It would run on port 8096 and you can access it locally through http://localhost:8096/SHC/api/v1/cars/info
It will mock the warehouse.json

Starting the frontend:
Start the npm server on the front end UI library present at the root of the project.

Starting of npm server

$ car-store-ui > npm run start

This will kick start the front end UI.

Starting the backend:
Next open another terminal and on the root folder where you have your pom.xml, 
start your spring boot project.

The spring boot project will kickstart the getAPI that will call the mongodb repository whose URL is mentioned in the 
application.properties.

This api is fetched inside the front end App.tsx which will render the page with the warehouse details.

The page is build with Material UI framework using Grids and other features of material UI like Badge and AddShoppingCart

Once you click on the Add to cart button, the selected car will get added to the shopping cart which shows up on the left side
panel with the price of the car, the amount of car added and the total price.

You can use the + and - buttons to add more or remove any entries completely.

The project is built using Maven and uses a dependency called frontend-maven-plugin to create a jar packaged with both front end
and backend.






