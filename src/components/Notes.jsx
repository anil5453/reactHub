import React, { useState } from "react";

const notesData = [
 



  {
    title: "React",
    content: `
What is React.js?
-	React is an open-source JavaScript library that is used for building user interface (UI) for a single page application
-	It is used for handling the view layers for web and mobile applications. React also allows us to create reusable UI components
-	React was first created by Jordan Walke (Facebook)
Why we use react?
-	Component based architecture
-	Uses virtual DOM for fast rendering 
-	Virtual DOM provides a mechanism that abstracts manual DOM manipulations away from the developer.
-	Easy to learn.
Advantage of React.js?
-	Easy to learn
-	Reusable component
-	Fast rendering
-	SEO Friendly (Search Engine Optimization)
-	Strong community support
-	Data binding
-	Virtual DOM
-	Great developer tools
Prerequisites
-	Html,css, js (functions,arrows,maps,classes and objects)
For creating react app we need:
-	Nodejs,vscode,npx create-react-app projectname
How to create react project:
npx create-react-app projectname
npm start





 
 


	


Components:
Components let you split the UI into independent ,reusable pieces, and think about each piece in isolation.
Components are independent and reusable bits of code. They serve the same purpose as javascript function ,but work in isolation and return HTML
When we want  createa component file with extension ‘.js’  ex:component.js

Component code:


Component code




App component
                                 Javascript file                                                 App.js

                                 



Component are two types:
1.stateless/ function component
2.stateful /class component
1.function component:

Javascript function

HTML(JSX)
A functional component in React is a JavaScript function that accepts properties (commonly referred to as props) as an argument and returns React elements (JSX) to define the user interface. Functional components are a simpler and more concise way to create components in React, compared to class components.

Properties
(props)






Syntax:
function  welcome(props){
Return <h1>Hello,{props.name}</h1>
}


Using Es6 arrow functions:
Import React from ‘react’;
Const demo=()=><h1>functional component</h1>
export default component
Example:
First we create component file with extension ‘.js’  ex:component.js
Import React from ‘react’;
function  functionname(){
    return   code
}
export   default   componentname
	After creating the component we  can import this component into app.js 
Import  componentname  from   componentpath;
Function App(){
Return(
      <div className=’’App”>
       <componentname/>
     </div>
);
}



Class component
A class component in React is a more traditional way of defining components using ES6 classes. Unlike functional components, class components have their own state and lifecycle methods, making them capable of handling more complex logic and interactions. They were widely used before the introduction of React Hooks but are less common in modern React development.
Syntax:
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default MyComponent;
why we export:
In React , we use export to make a component, function, or variable available for use in other files. Without exporting, the code in one file cannot be accessed or used in another file.
Types of Export:
1.	Default Export:
2.	Named Export:
1.Default export:
•	Allows exporting one value (component, function, or object) from a file.
•	Default exports can be imported without using curly braces.
Ex:
// Button.js
const Button = () => {
return <button>Click Me</button>;
};

export default Button;

// App.js
import Button from './Button'; // No curly braces needed
2. Named Export:
•	Allows exporting multiple values from a file.
•	Named exports must be imported using the exact names and require curly braces.
Example1:
               // Button.js
export const Button = () => {
return <button>Click Me</button>;
};



// App.js
import {Button} from './Button'; // curly braces needed

another example:
// utilities.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// App.js
import { add, subtract } from './utilities';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
difference between functional and class:
Feature	Functional Component	Class Component
Definition	A plain JavaScript function that returns JSX.	An ES6 class that extends React.Component.
Syntax	Simple and concise function syntax.	Requires a class with a render() method.
State Management	Uses React Hooks like useState.	Manages state using this.state and this.setState.
Props	Passed as a function argument (props).	Accessed via this.props.
Lifecycle Methods	Uses Hooks like useEffect.	Uses built-in methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
Performance	Generally faster due to less overhead.	Slightly slower due to more overhead.
Code Length	Shorter and more readable.	Longer due to the additional boilerplate.
Accessibility to Hooks	Fully supports React Hooks.	Hooks cannot be used directly.
Modern Usage	Recommended for most use cases.	Less commonly used in new React projects.
Reusability	Easy to reuse and modular.	Also reusable but with more boilerplate.



JSX (JavaScript XML)
o	JSX is an extension of JavaScript syntax that allows writing XML-like code to define elements and components in React.
o	It makes React code simpler and more elegant by providing a declarative syntax for creating UI elements.
2.	Features:
o	Allows writing XML-like tags for elements and components.
o	Tags in JSX include:
	A tag name (e.g., div, h1).
	Attributes (e.g., className, id).
	Components (e.g., <ComponentName />).
o	JSX is not required for writing React applications, but it is widely used for its simplicity.
JSX code is transpiled into JavaScript using tools like Babel.
This transpilation converts JSX into React.createElement() calls, which the browser can understand.
import React from 'react';
const Hello = () => {
  return (
    <div>
      <h1>USING JSX</h1>
    </div>
  );
};

export default Hello;

Without Using JSX:
React components can be written without JSX using the React.createElement() function. However, this approach is less readable and more verbose.
Example 1: Basic React.createElement()
jsx
Copy code
import React from 'react';

const Hello = () => {
  return React.createElement('h1', null, 'Hello Dinesh Kumar');
};

export default Hello;
Example 2: Nested Elements
jsx
Copy code
import React from 'react';

const Hello = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello Dinesh Kumar')
  );
};

export default Hello;
Example 3: With Key-Value Pairs (Attributes)
import React from 'react';
const Hello = () => {
  return React.createElement(
    'h1',
    { id: 'Hello', className: 'dummy' },
    'Hello Dinesh Kumar'
  );
};

export default Hello;
{Comparison Between JSX and Non-JSX:
Feature	JSX	Without JSX
Syntax	Simple, XML-like syntax.	Uses React.createElement() method.
Readability	Easier to read and write.	Complex and harder to understand.
Code Complexity	Less code; more elegant.	Verbose and requires nested calls for children.
Attributes	Similar to HTML attributes (e.g., className).	Pass attributes as key-value pairs in an object.
Reusability	Components can be reused easily in JSX.	Components are reusable but harder to manage.
Transpilation	Transpiled into React.createElement().	Directly uses React.createElement().



Props (Properties) in React
Definition:
Props (short for "properties") are a way to pass data from one component to another in React. They are read-only and enable communication between components.
________________________________________
Key Features of Props:
1.	Immutable:
o	Props are read-only and cannot be modified by the receiving component.
o	The parent component is responsible for providing and updating the props.
2.	Component Communication:
o	Props are mainly used for communication between parent and child components.
o	They allow dynamic customization of components.
3.	Dynamic Data:
o	Props enable passing dynamic data, such as variables or functions, to child components.
________________________________________
Usage of Props
1. Using Functional Components
Example:// App.js
import React from 'react';
import Demo from './Demo';
const App = () => {
  return (
    <div className="App">
      <Demo name="React" />
    </div>
  );
};

              export default App;
another example:
// Demo.js
import React from 'react';

const Demo = (props) => {
  return <h1>Hello {props.name}</h1>;
};

export default Demo;
2. Using Class Components
Example:
// App.js
import React from 'react';
import Demo1 from './Demo1';
const App = () => {
  return (
    <div className="App">
      <Demo1 name="React" />
    </div>
  );
};

export default App;

// Demo1.js
import React, { Component } from 'react';

class Demo1 extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default Demo1;
Explanation:
•	Similar to functional components, the name="React" prop is passed to <Demo1 /> in App.js.
•	In class components, props are accessed using the this.props keyword.
________________________________________
Key Differences in Props Usage
Feature	Functional Component	Class Component
Accessing Props	props.name	this.props.name
Syntax Simplicity	Easier and more concise.	Requires render() method and this.
Modern Usage	Preferred with React Hooks.	Still supported, but less common.
________________________________________
Key Notes About Props:
1.	Props Are Read-Only:
o	Props cannot be modified within the child component. If you need to modify data, consider using state.
2.	Reusable Components:
o	Props allow you to create reusable components by passing different values.
o	Example:
jsx
Copy code
<Demo name="React" />
<Demo name="Angular" />
<Demo name="Vue" />
3.	Default Props:
o	You can define default values for props if none are provided:
Demo.defaultProps = {
  name: "Default Name",
};
State in React
Definition:
State is an object in React that holds data or information about the component. Unlike props, state is mutable, meaning it can be changed during the component's lifecycle.
Key Features of State:
1.	Component-Specific:
o	State is local to the component where it is defined and cannot be directly accessed or modified by other components.
2.	Mutability:
o	Unlike props, state can be updated using the setState() method.
3.	Triggers Re-rendering:
o	When the state is updated, React automatically re-renders the component to reflect the changes.
________________________________________
Using State in Class Components
Example 1: Basic State Management
jsx
Copy code
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Message;
	To update the state we use setState()
The setState() method is used in React class components to update the component's state. It is essential for handling dynamic data and triggering re-renders of the component whenever the state changes.
Key Points About setState():
1.	Purpose:
o	Used to update the state and trigger a re-render of the component.
2.	Syntax:
this.setState({ propertyName: newValue });
3.	Asynchronous Behavior:
o	Updates to the state are asynchronous. To perform actions after a state update, use a callback:
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
State vs Props
Feature	State	Props
Definition	Holds data specific to the component.	Passes data from parent to child.
Mutability	Can be updated using setState().	Immutable (read-only).
Scope	Local to the component.	Available to child components.
Purpose	Manages dynamic data.	Facilitates component communication.
Access Syntax	this.state.propertyName	this.props.propertyName or props.propertyName


Destructuring Props & State in React:
Destructuring allows you to extract values from an object or array and assign them to variables. It simplifies the process of accessing values in an object or array, and is particularly useful when dealing with props and state in React.
Functional Component (using destructuring in parameters)
In functional components, you can directly destructure props inside the function parameters:
javascript
Copy code
import React from 'react'; 

const Demo = ({ name, city }) => {
    return (
        <h1>Hello {name} from {city}</h1>
    );
}

export default Demo;
This method extracts the name and city properties from the props object directly in the function parameter.
Another Way with Destructuring Inside the Function
Alternatively, you can destructure the props within the body of the function, like this:
javascript
Copy code
import React from 'react';

const Demo = (props) => {
    const { name, city } = props;
    return (
        <h1>Hello {name} from {city}</h1>
    );
}

export default Demo;
Here, we first accept the props object and then destructure it to extract name and city.
Class Component (Destructuring in render method)
In class components, you can destructure this.props within the render method to access the props:
javascript
Copy code
import React, { Component } from 'react';

class Demo1 extends Component {
    render() {
        const { name, city } = this.props;
        return (
            <h1>Hello {name} from {city}</h1>
        );
    }
}

export default Demo1;
This method works the same way as the functional component, but in a class component, you reference this.props instead.
Event Handling in Function Components
In a function component, you define an event handler function and assign it to an event, such as onClick.
javascript
Copy code
function functionClick() {
    function clickHandle() {
        console.log('Button clicked');
    }

    return (
        <button onClick={clickHandle}>Click me</button>
    );
}
•	The function clickHandle logs a message when the button is clicked. It's assigned to the onClick event of the button.
Event Handling in Class Components
In a class component, the event handler method is defined as a class method, and you must use this to refer to the component instance.
javascript
Copy code
class ClassClick extends React.Component {
    clickHandle() {
        console.log('Clicked the button');
    }

    render() {
        return (
            <button onClick={this.clickHandle}>Click me</button>
        );
    }
}
•	In this case, this.clickHandle is used to reference the clickHandle method within the class.
Event Binding
In class components, you might run into issues where this isn't automatically bound to the class instance inside the event handler. React provides several ways to handle this.
1st Approach: Using an Arrow Function in JSX
You can use an arrow function in the onClick prop to automatically bind this:
javascript
Copy code
<button onClick={() => this.logout()}>Logout</button>
•	Arrow functions automatically bind this, so this.logout() correctly refers to the class instance.
2nd Approach: Using .bind(this) in JSX
You can explicitly bind the method to the class instance using the bind() method in JSX:
javascript
Copy code
<button onClick={this.clickevent.bind(this)}>Click me</button>
•	this.clickevent.bind(this) binds the method to the class instance, ensuring that this refers to the component.
3rd Approach: Binding in the Constructor
You can bind the event handler method in the constructor to ensure it’s properly bound:
javascript
Copy code
import React, { Component } from "react";

class Sample2 extends Component {
    constructor() {
        super();
        this.clickevent = this.clickevent.bind(this);
    }

    clickevent() {
        console.log('Button clicked');
    }

    render() {
        return <button onClick={this.clickevent}>Click me</button>;
    }
}

export default Sample2;
•	Binding in the constructor ensures that the method is bound once when the component is created, and the handler is ready to be used in the render method.
Example of Using State with Event Handling
You can also use event handlers to update the component’s state, such as changing a message when a button is clicked:
javascript
Copy code
import React, { Component } from "react";

class Sample2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: 'Login successful'
        };
    }

    logout() {
        this.setState({
            Message: 'Logout successful'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.logout()}>Logout</button>
            </div>
        );
    }
}

export default Sample2;
conditional rendering:-
In React, conditional rendering refers to rendering elements or components based on certain conditions. There are several ways to handle conditional rendering in React. Here's an explanation of the four common approaches:
1. Using if and else Statements
You can use traditional if and else statements to decide which elements or components to render. However, since React requires the return statement to be a single expression, you typically use if statements outside of the render method or component return.
import React from 'react';
const ConditionalRender = (props) => {
    let content;
    if (props.isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return<h1>Please log in</h1>;
    }
};
export default ConditionalRender;
•	Here, we define a variable content that stores either the welcome message or the login prompt based on the isLoggedIn prop.
2. Using an Element Variable
You can also store the JSX element in a variable and render it conditionally. This is a simpler and more concise way to handle conditionals.
import React from 'react';
const ConditionalRender = (props) => {
    let content;
if (props.isLoggedIn) {
        content = <h1>Welcome back!</h1>;
    } else {
        content = <h1>Please log in</h1>;
    }

    return (
        <div>{content}</div>
    );
};

export default ConditionalRender;
•	This method uses the same logic as if-else, but the content variable stores the conditional JSX directly and is rendered inside the return statement.
3. Using the Ternary Conditional Operator
The ternary operator is a shorthand for if-else and can be used directly in JSX. It's concise and perfect for simple conditions.
import React from 'react';
const ConditionalRender = (props) => {
    return (
        <div>
            {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
        </div>
    );
};

export default ConditionalRender;
•	The ternary operator condition ? expr1 : expr2 evaluates condition, and if true, it renders expr1; otherwise, it renders expr2.
•	This approach is often used for simpler conditions in JSX.
4. Using the Short-Circuit (&&) Operator
The short-circuit operator (&&) is useful when you only want to render something if a condition is true. If the condition is false, nothing is rendered.
import React from 'react';
const ConditionalRender = (props) => {
    return (
        <div>
            {props.isLoggedIn && <h1>Welcome back!</h1>}
            {!props.isLoggedIn && <h1>Please log in</h1>}
        </div>
    );
};

export default ConditionalRender;
•	In the example above, the <h1>Welcome back!</h1> is rendered only if props.isLoggedIn is true. If props.isLoggedIn is false, it will skip rendering that element.
•	You can also use && to render just one element when the condition is true.
List rendering in React refers to the process of rendering a list of elements based on an array of data. It’s commonly used to display collections like items in a table, cards in a grid, or any other repetitive content in the UI. Here’s how to handle list rendering in React:
1. Rendering Lists Using map()
The most common way to render a list in React is by using the map() function, which allows you to iterate over an array and return an array of JSX elements.
import React from 'react';
const ListRendering = () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date'];
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListRendering;
•	The map() function takes each item in the items array, and for each item, a <li> element is returned.
•	Key Prop: The key prop is necessary for React to identify which items have changed, been added, or removed. In the above example, we use index as the key, but ideally, you should use a unique value from the data (like an ID) instead of the index.
2. Rendering Lists of Objects
If your array contains objects, you can extract properties from the objects to render the list.
import React from 'react';
const ListRendering = () => {
    const users = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
    ];
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </div>
    );
};

export default ListRendering;
•	In this example, each item in the users array is an object, and we extract user.id, user.name, and user.age to render a list of user names and ages.
3. Rendering Lists with Conditional Rendering
You can also use conditional rendering inside your map() method to display different content based on certain conditions.

import React from 'react';
const ListRendering = () => {
    const users = [
        { id: 1, name: 'Alice', age: 25, isActive: true },
        { id: 2, name: 'Bob', age: 30, isActive: false },
        { id: 3, name: 'Charlie', age: 35, isActive: true }
    ];

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old) - 
                        {user.isActive ? 'Active' : 'Inactive'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRendering;
•	Here, we conditionally render whether a user is "Active" or "Inactive" based on the isActive property.
4. Rendering Lists with Nested Data
If your data is nested (e.g., lists within objects), you can render it by using multiple map() functions.
import React from 'react';
const ListRendering = () => {
    const categories = [
        {
            id: 1,
            name: 'Fruits',
            items: ['Apple', 'Banana', 'Cherry']
        },
        {
            id: 2,
            name: 'Vegetables',
            items: ['Carrot', 'Potato', 'Lettuce']
        }
    ];
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <h2>{category.name}</h2>
                        <ul>
                            {category.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRendering;
•	In this case, each category object has a nested array of items. We use two map() functions: one to iterate over the categories and one to iterate over the items in each category.
5. Rendering Empty Lists
Sometimes you might need to display something when the list is empty, which can be done with a simple conditional rendering.
import React from 'react';
const ListRendering = () => {
    const items = [];
    return (
        <div>
            <ul>
                {items.length > 0 ? (
                    items.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                    <li>No items available</li>
                )}
            </ul>
        </div>
    );
};

export default ListRendering;
•	If the items array is empty, a message "No items available" is displayed instead of the list.
2. filter():
•	The filter() method creates a new array with all the elements that pass a test (the function you provide).
•	It does not modify the original array but returns a new one with the filtered data.
React Example Using filter():
In a React component, you might use filter() to display only certain elements based on a condition.
import React from 'react';
const products = [
  { id: 1, name: 'Laptop', available: true },
  { id: 2, name: 'Phone', available: false },
  { id: 3, name: 'Tablet', available: true },
];
function AvailableProducts() {
  const availableProducts = products.filter(product => product.available);
  return (
    <ul>
      {availableProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
export default AvailableProducts;
CSS stylings:-
In React, there are several ways to apply styles to your components. Here's an overview of the four common approaches:
1. CSS Stylesheet (External CSS)
Using an external CSS file is one of the traditional ways to style a React component. You link the CSS file to your component and apply the classes as usual.
Steps:
•	Create a CSS file (e.g., App.css).
•	Import the CSS file in your React component.
/* App.css */
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

.button:hover {
    background-color: darkblue;
}
// App.js
import React from 'react';
import './App.css';
const App = () => {
    return (
        <div>
            <button className="button">Click Me</button>
        </div>
    );
};

export default App;
•	Pros:
o	Simple and familiar if you're coming from traditional web development.
o	Allows you to manage global styles easily.
•	Cons:
o	Global scope can lead to naming conflicts or unintended style leaks.
o	Harder to manage styles in large applications with many components.


2. Inline Styling
Inline styles are applied directly to React elements through the style attribute. This method uses a JavaScript object to define CSS styles.
Example:
import React from 'react';
const App = () => {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer'
    };
    return (
        <div>
            <button style={buttonStyle}>Click Me</button>
        </div>
    );
};

export default App;
•	Pros:
o	Styles are scoped to the component.
o	Dynamically apply styles based on JavaScript logic (e.g., conditionally applying styles).
•	Cons:
o	Cannot use CSS pseudo-classes (like :hover or :focus) directly.
o	Less efficient for large styles, as styles are written inline.
3. CSS Modules
CSS Modules allow you to write CSS that is scoped locally to the component, avoiding global styles and naming conflicts. This approach generates unique class names for each component.
Steps:
1.	Create a CSS file with the .module.css extension.
2.	Import and use the styles as an object.
Example:
/* Button.module.css */
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}
// Button.js
import React from 'react';
import styles from './Button.module.css';

const Button = () => {
    return (
        <button className={styles.button}>Click Me</button>
    );
};

export default Button;
•	Pros:
o	Styles are scoped locally to the component, preventing conflicts with other styles.
o	Supports regular CSS features like pseudo-classes (:hover).
•	Cons:
o	Requires configuration (though many build tools like Create React App handle it out of the box).
o	You need to manage separate CSS files for each component.
4. CSS-in-JS Libraries
CSS-in-JS libraries like styled-components or emotion allow you to write CSS directly inside your JavaScript files. They generate unique class names dynamically and apply them to the DOM.
Example :Use app.css and write your styles and use that style when you want.
Life cycle of react:
React lifecycle methods in class components are special methods that get invoked at different stages of a component's lifecycle. They are broadly categorized into three phases:
1. Mounting Phase
This is when a component is being created and inserted into the DOM.
Methods in the Mounting Phase:
1.	constructor()
o	Called before the component is mounted.
o	Used to initialize state or bind methods.
o	Avoid side effects here (e.g., API calls).
constructor(props) {
    super(props);
    this.state = { count: 0 };
}
2.	static getDerivedStateFromProps(props, state)
o	Rarely used.
o	Called just before render().
o	Used to update state based on props.
o	Does not have access to this.
static getDerivedStateFromProps(props, state) {
    if (props.someValue !== state.someValue) {
        return { someValue: props.someValue };
    }
    return null;
}
3.	render()
o	The only required method in a class component.
o	Returns the JSX to be rendered.
render() {
    return <h1>Hello, World!</h1>;
}
4.	componentDidMount()
o	Invoked immediately after the component is mounted.
o	Ideal for API calls, DOM manipulation, or subscriptions.

componentDidMount() {
    console.log('Component mounted');
}
________________________________________
2. Updating Phase
This happens when a component’s state or props change, causing a re-render.
Methods in the Updating Phase:
1.	static getDerivedStateFromProps(props, state)
o	Same as in the mounting phase, called whenever props or state change.
2.	shouldComponentUpdate(nextProps, nextState)
o	Determines whether a re-render is necessary.
o	Can improve performance by preventing unnecessary renders.
shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count; // Only update if count changes
}
3.	render()
o	Same as in the mounting phase.
4.	getSnapshotBeforeUpdate(prevProps, prevState)
o	Invoked before the DOM is updated.
o	Can be used to capture information (e.g., scroll position).
getSnapshotBeforeUpdate(prevProps, prevState) {
    return { scrollPosition: window.scrollY };
}
5.	componentDidUpdate(prevProps, prevState, snapshot)
o	Invoked after the component has been updated.
o	Good for reacting to DOM changes or making API calls based on the update.
componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component updated');
    if (snapshot) {
        console.log('Scroll position before update:', snapshot.scrollPosition);
    }
}
________________________________________
3. Unmounting Phase
This happens when a component is removed from the DOM.
Method in the Unmounting Phase:
1.	componentWillUnmount()
o	Invoked just before the component is unmounted and destroyed.
o	Ideal for cleanup (e.g., removing event listeners, canceling API requests).
componentWillUnmount() {
    console.log('Component will unmount');
}
________________________________________
4. Error Handling Phase
This phase is used to catch errors during rendering or lifecycle methods.
Methods in the Error Handling Phase:
1.	static getDerivedStateFromError(error)
o	Updates the state when an error is thrown.
o	Typically used to display a fallback UI.
static getDerivedStateFromError(error) {
    return { hasError: true };
}
2.	componentDidCatch(error, info)
o	Logs error details for debugging.
componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
}
HOOKS:
In React, hooks are special functions that allow you to use state and other React features in functional components (introduced in React 16.8). Hooks let you “hook into” React's lifecycle and state management without writing a class. 
Hooks are used to state management in classHere are some key concepts related to hooks:


TYPES OF HOOKS-----------
1)USESTATE
2) USE-EFFECT
3) USECONTEXT
4) USEREF
5) USEREDUCER
6) CUSTOM HOOK
____________________________________________________
1. useState
•	Manages state in functional components.
•	Example:
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
2. useEffect
•	Manages side effects like data fetching, subscriptions, or manual DOM changes.
•	It runs after rendering and can optionally clean up when the component unmounts.
•	Example:
import { useState, useEffect } from 'react';
function Example() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    return () => {
      // Cleanup if necessary
    };
  }, []); // [] means the effect runs only once (after the first render)

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
3. useContext
•	Accesses React context without needing to wrap components in a Consumer component.
•	Example:
import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');
function MyComponent() {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
}
4. useRef
•	Returns a mutable ref object that persists across renders.
•	Can be used to access a DOM element or store a value that doesn't cause a re-render when changed.
•	Example:
import { useRef } from 'react';
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const handleFocus = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}
5. useReducer
•	A more advanced hook for state management when the state logic becomes complex, similar to Redux.
•	Example:
import { useReducer } from 'react';
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
6. Custom Hooks
•	You can create custom hooks to encapsulate reusable logic. Custom hooks are just JavaScript functions prefixed with use that can use other hooks.
•	Example:
import { useState, useEffect } from 'react';
function useFetchData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setData);
  }, [url]);

  return data;
}
function DataComponent() {
  const data = useFetchData('https://api.example.com/data');
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
Key Points to Remember:
•	Hooks should only be used inside functional components.
•	You must follow the Rules of Hooks:
o	Don’t call Hooks inside loops, conditions, or nested functions. Always call hooks at the top level of your component.
o	Only call Hooks from React functions. Don’t call them from regular JavaScript functions.
Hooks simplify many tasks and allow functional components to have features previously only available in class components.
Routing:
Routing in React is the process of navigating between different views or pages within a React application. React doesn't have built-in routing, so developers typically use a routing library to manage navigation. The most popular library for routing in React is React Router.
1. Setting Up React Router
To get started with routing in React, you first need to install React Router:
npm install react-router-dom
After installing the library, you can use it to define different routes in your application.
2. Basic Routing Setup
Once React Router is installed, you can use BrowserRouter, Route, and Link components to define routes and navigate between them.
Example: Simple Routing with React Router
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Define some sample components for the routes
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
•	BrowserRouter: The Router component that keeps track of the browser history.
•	Route: The Route component defines a mapping between a URL path and the component to render.
•	Link: The Link component is used to create navigation links that update the URL and navigate to different components.
3. Dynamic Routing with Parameters
You can create dynamic routes with parameters. For example, you might want to display a specific user profile based on their ID.
Example: Dynamic Route with URL Parameters
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
const UserProfile = () => {
    const { id } = useParams();
    return <h1>User Profile: {id}</h1>;
};
const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/user/1">User 1</Link></li>
                    <li><Link to="/user/2">User 2</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
        </Router>
    );
};

export default App;
•	useParams: The useParams hook allows you to access the parameters from the URL, in this case, the id of the user.
4. Redirecting with React Router
You can programmatically redirect users to different routes using the Navigate component in React Router.
Example: Redirect After a Button Click
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Navigate to="/home" />;
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
const Home = () => <h1>Home Page</h1>;
const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/home">Home</Link>
            </nav>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
•	Navigate: The Navigate component is used to programmatically redirect the user to another route. In this example, the user is redirected to /home after logging in.
5. Nested Routes
React Router allows you to nest routes inside other routes. This is useful when you have a page with multiple sections or sub-pages.
Example: Nested Routes
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                <li><Link to="profile">Profile</Link></li>
                <li><Link to="settings">Settings</Link></li>
            </ul>

            <Routes>
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </div>
    );
};
const Profile = () => <h2>Profile Page</h2>;
const Settings = () => <h2>Settings Page</h2>;
const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <Routes>
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
•	Nested Routes: In this example, the Dashboard component has two nested routes for profile and settings. The Routes component inside Dashboard renders the appropriate child component based on the URL.
6. 404 Page Not Found (Catch-All Route)
If no route matches, you can render a fallback or 404 page using a wildcard route (*).
Example: 404 Page Not Found
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>Page Not Found</h1>;
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};
export default App;
•	Wildcard Route (*): The wildcard route (*) matches any path that doesn't match the other routes, allowing you to display a 404 page.





      </div>
    </div>
  )
}

  



















`
  },

  
  
  
];

const Notes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleNote = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", fontFamily: "Arial" }}>
      <h1>📒 React Notes</h1>
      {notesData.map((note, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "10px",
            overflow: "hidden"
          }}
        >
          <div
            onClick={() => toggleNote(index)}
            style={{
              background: "#f5f5f5",
              padding: "10px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {note.title}
          </div>
          {openIndex === index && (
            <div style={{ padding: "10px", background: "#255c6eff" }}>
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  background: "#dce3e5ff",
                  padding: "15px",
                  borderRadius: "25px"
                }}
              >
                {note.content}
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notes;
