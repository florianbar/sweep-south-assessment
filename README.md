This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tech

### React Router
I did not use Next.js, as I'm unfamiliar with it, but I know it's used for server-side rendering.
Instead I used React Router to emulate the look and feel of multiple pages.

### State Management
For managing the state it made sense to use the Context API instead of Redux, as it is a small application and Redux would have introduced more complexity.

### HTTP Requests
For HTTP requests I used a library called Axios.

## Trade-offs
- If there was more time I would have used TypeScript to document the code better and what types are expected.
- Also the naming convention I used for the CSS follows the BEM methodology. I have used this a lot in the past with great success, but am not sure if it's usefull with styled components.
