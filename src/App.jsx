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

function App(props) {
  // We can write any business logic inside of the function before the return
  const todo = { text: 'A brand new task', done: true };

  const taskComplete = todo.done ? "Task Complete" : ""
  
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
        <h1><em>{todo.text}</em></h1>
        <p>{taskComplete}</p>
      </div>
    </div>
  );
}

export default App;
