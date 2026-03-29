# modern-javascript-syntax-lab

---

## Step 1 🐼
**map() → transform each item in an array**

- `nums = [1, 2, 3]`  
- `doubled = nums.map(n => n * 2)`  
- result → `[2, 4, 6]`

---

## Step 2 🦊
**Array destructuring → grab values by position**

- `toppings = ["cheese", "pepperoni"]`  
- `first = cheese`  
- `second = pepperoni`  

---

## Step 3 🐯
**Object destructuring → grab values by name**

- `car = { make: "Audi", model: "Q5" }`  
- `make = Audi`  
- `model = Q5`  

---

## Step 4 🐸
**Spread (arrays) → copy array safely**

- `a = [1, 2]`  
- `b = [...a]`  
- `b → [1, 2, 3]` after adding 3  
- `a → [1, 2]` (unchanged)  

---

## Step 5 🦁
**Logical OR (||) → fallback/default value**

- `name = "" || "Guest"`  
- result → `Guest`  

---

## 🧠 Key Takeaways

- `map()` → change each item in a list  
- destructuring → extract values easily  
- spread `...` → copy safely (avoid bugs)  
- `||` → provide default value  

✊🏾 Rule:  
Always **copy first → then modify**