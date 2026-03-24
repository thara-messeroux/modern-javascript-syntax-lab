import './App.css'
/*
  Components are just functions that return JSX
      - JSX = HTML + JS (similar to EJS)
  These components are called just like html elements
      
      <CustomButton />
      <CustomButton></CustomButton>

 */
function CustomButton(){
   return <button onClick={()=>{console.log("you won a prize. Heres a pop quiz")}} >Billies Blue Button</button>
}

function App(){
  return <div>
    <h1>Hello world!!!!!!!!</h1>
    <CustomButton />
    <CustomButton></CustomButton>
  </div>
}

export default App
