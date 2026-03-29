# modern-javascript-syntax-lab

---

## Step/Exercise 1 🐼
**map() → transform each item in an array**

- `nums = [1, 2, 3]`  
- `doubled = nums.map(n => n * 2)`  
- result → `[2, 4, 6]`

---

## Step/Exercise 2 🦊
**Array destructuring → grab values by position**

- `toppings = ["cheese", "pepperoni"]`  
- `first = cheese`  
- `second = pepperoni`  

---

## Step/Exercise 3 🐯
**Object destructuring → grab values by name**

- `car = { make: "Audi", model: "Q5" }`  
- `make = Audi`  
- `model = Q5`  

---

## Step/Exercise 4 🐸
**Spread (arrays) → copy array safely**

- `a = [1, 2]`  
- `b = [...a]`  
- `b → [1, 2, 3]` after adding 3  
- `a → [1, 2]` (unchanged)  

---

## Step/Exercise 5 🦁
**Spread on objects → copy object safely**

- `myCar = { make: 'Mazda', model: '3' }`
- `newCar = { ...myCar }`
- change `myCar.make = 'Toyota'`
- change `myCar.model = 'Camry'`
- `myCar` changes  
- `newCar` stays the original copy
---

## Step/Exercise 6 🐼
**Dynamic keys → use variables as object keys**

- `mySportsTeam = 'celtics'`
- `sportsProfile = { [mySportsTeam]: 'Boston Celtics' }`
- key is created from variable
- result → `{ celtics: 'Boston Celtics' }`

---

## Step/Exercise 7 🐨
**import / export → share code between files**

- `export default 'Matt'` from one file  
- `import name from './exportingFile.js'` in another file  
- run → `node importingFile.js`  
- result → `Matt`

---

## Step/Exercise 8 🐧
**Default parameters → set default values in functions**

- `describe(noun = 'cat', adjective = 'sleepy')`
- default values used if nothing is passed
- `describe()` → `The cat is sleepy`
- `describe('dog', 'happy')` → `The dog is happy`

---

## Step/Exercise 9 🐺
**Ternary operator → short if/else**

- `score = 85`
- `result = score >= 60 ? 'Pass' : 'Fail'`
- condition true → `Pass`
- result → `Pass`

---

## Step/Exercise 10 🐙
**Boolean gates → control logic with `&&` and `||`**

- `isLoggedIn && console.log('Welcome back!')`
- runs only if true  
- `username = '' || 'Guest'`
- fallback value → `Guest`
- combined → `isLoggedIn && console.log(\`Hello ${username}\`)`

---

## Step/Exercise 11 🐬
**Optional chaining → safely access nested data**

- `user = { name: 'Alex' }`
- `user?.name` → `Alex`
- `user?.address?.city` → `undefined`
- prevents errors when data is missing

---

## 🧠 Key Takeaways

- `map()` → transform each item in an array  
- `destructuring` → extract values from arrays/objects easily  
- `spread ...` → copy arrays/objects safely (avoid bugs)  
- `dynamic keys` → use variables as object keys  
- `import/export` → organize code into reusable files  
- `default parameters` → set fallback values in functions  
- `ternary ? :` → write short if/else logic  
- `&&` → run code only if condition is true  
- `||` → provide default value when something is empty  
- `?.` (optional chaining) → safely access nested data  

✊🏾 Rule:
Always copy first → then modify (avoid mutating original data)