# Ctrl-Alt-Defeat-Frontend

## Demo ##

![image](https://github.com/ShamillFazal/Ctrl-Alt-Defeat-Frontend/assets/94766229/6b18fcc7-9804-4405-b66c-595845b2d80f)


### Brief ###

- Create a full stack app that solves a real problem.
- Additional info - You will be working in a team of 6 over a period of 5 weeks and will need to do everything from start to finish including;

    - Ideation
    - User research
    - Planning and preparation
    - Low and Hi-fidelity wireframes
    - Research and selection of tech stacks & frameworks
    - Team manifesto and organization of workload
    - Trello
    - Coding both front and back end including styling and responsiveness
    - Daily stand-ups, retros, and weekly presentations
    - Testing of the app
    - Deployment
    - Final presentation and Demo day
 
### Idea ###

We decided to create a full-stack app that lets travelers experience authentic holidays just like locals. Locals can upload guides about activities or venues in their hometown and users can search/filter through the guides in preparation for their holiday. We did have stretch goals to be able to take guides from different users and add them to our own itinerary but time was finite 😅.


## Tech Stack ##


![image](https://github.com/ShamillFazal/Ctrl-Alt-Defeat-Frontend/assets/94766229/ec5c1c08-804f-4a6e-9feb-54c88be727cd)


### How it works ###

Utilizing a MERN stack (MongoDB, Express, React, and Node.js), here's an outline detailing its functionality:

- User Query Input: The user engages with the front-end (React.js) by entering a search query into an input field or form.

- Fetch Request to Backend (Hosted on Render): The front-end dispatches an HTTP request to the backend server through a fetch request, incorporating the user's provided 
  search query.

- Backend Processing and MongoDB Interaction: The backend server (Node.js with Express.js) takes in the incoming HTTP request. It then processes, validates, and executes the 
  search logic, interacting with the MongoDB database to retrieve data associated with the search query.

- JSON Data Delivery to Front-End (Hosted on Netlify): Upon successfully fetching the relevant database data, the backend constructs a JSON object containing the search 
  outcomes. This JSON object is transmitted as a response to the initial front-end request.

- Conversion of HTTP Response to JavaScript Object: On the front-end, the fetch request acquires the HTTP response from the backend. The JSON response is transformed from a 
  string into a workable JavaScript object.

- Rendering of JavaScript Object on Screen: To conclude, the JavaScript object, housing the search results, is rendered on the screen through React.js, offering a visual 
  representation of the outcomes.










