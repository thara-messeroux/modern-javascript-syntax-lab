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

## 🧠 Key Takeaways

- `map()` → change each item in a list  
- destructuring → extract values easily  
- spread `...` → copy safely (avoid bugs)  
- `||` → provide default value  

✊🏾 Rule:  
Always **copy first → then modify**