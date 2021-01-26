import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

// Example 1: Default Parameters



	console.log("Example 1: Default Parameters");
var defaultStudent = {
	name: {
		firstName: "Bobby",
		lastName: "Johnson" 
	},
	favSubject: "math"
}
function  myClass (x = defaultStudent){
	console.log(`Use default`);
	console.log(`The first student in my class is ${x.name.firstName} ${x.name.lastName} and his favorite subject is ${x.favSubject}`);
}
myClass();
function  myClass2 (name = "Gerald Hopkins", subject = "science"){
	        console.log(`Use parameters`);
	        console.log(`The second student in my class is ${name} and his favorite subject is ${subject}.`);
		console.log("----------");
}
myClass2();


//Example 2. Arrow functions
 console.log("Example 2: Arrow Functions");

var sentence = function (name){
	return `${name} of Valdosta`
}
console.log("sentence is an arrow function")
console.log( sentence("Langdale"))
console.log( sentence("Lowndes"))
console.log("----------");


//Example 3. Destruction assignment

console.log("Example 3: Destruction Assignment");
var outfit = {
	shirt: "red shirt",
	pants: "bluepants",
	shoes: "Nike airmax",
	extras : ["bookbag", "phone", "calculator"]
}
var {shirt, pants, shoes} = outfit
console.log(shirt, pants, shoes)
console.log(shirt, pants)
console.log("----------");

//Example 4. spread Operator


console.log("Example 4: Spread Operator");

var class1 = ["James", "Jimmy", "Jared"]
var class2 = ["Khiley", "Alissa"]
var together = [...class1, ...class2]

console.log(together.join(','))
console.log("----------");

export default App;
