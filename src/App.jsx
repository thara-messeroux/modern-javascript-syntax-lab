import "./App.css";
/*
  Components are just functions that return JSX
      - JSX = HTML + JS (similar to EJS)
  These components are called just like html elements
      
      <CustomButton />
      <CustomButton></CustomButton>


      These can be arrow or normal function declarations
 */
const CustomButton = ({ color, name }) => {
  //props === {}, and in the props obj we have any attributes passed to this component¸
  // console.log(props)
  // const {color, name} = props
  return (
    <button
      onClick={() => {
        console.log("you won a prize. Heres a pop quiz");
      }}
    >
      {" "}
      {name} {color} Button
    </button>
  );
};

const Todo = (props) => {
  const { todo } = props
  const taskComplete = todo.done ? "Task Complete" : "";

  return (
    <div>
      <h1>{todo.text} -  <em style={{color: 'red'}}>{taskComplete}</em></h1>
    </div>
  );
};

function App(props) {
  // We can write any business logic inside of the function before the return
  const todo = { text: "A brand new task", done: true };

  const todos = [
   { text: "Learn JavaScript", done: true }, 
    { text: "Learn JSX", done: false },
    { text: "Learn HTML", done: true },
    { text: "Learn CSS", done: true },
    { text: "Master React", done: false },
  ];

  const taskComplete = todo.done ? "Task Complete" : "";

  return (
    <div className="bg-blue font-red">
      <h1>Hello world!!!!!!!!</h1>
      <img
        src="https://dragonball.fandom.com/wiki/Goku"
        alt="SSome alt image"
      />
      <br />
      <a href="https://www.google.com">Go to google</a>

      <CustomButton isLoggedIn={false} name="Billie" color="blue" />
      <CustomButton isLoggedIn={true} name="Carlos" color="red"></CustomButton>

      <div>
        <h1>
          <em>{todo.text}</em>
        </h1>
        <p>{todo.done ? "Task Complete" : ""}</p>
      </div>
        
          { todos.map(t => <Todo todo={t} />) }
    </div>

  );
}

export default App;
