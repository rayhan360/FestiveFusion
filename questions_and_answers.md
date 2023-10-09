<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is option A: `{}` 
<i>because greeting is defined and assigned an empty object {} when console.log "greeting" display the output is empty `{}`,
note: here the variable declaration `greeting` is written but while assigning `greetign`, if we consoled with greeting, if would show undefined
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is option C: `"12"`

<i>In this case, 1 is a number, and "2" is a string, so JavaScript converts the number 1 to a string and then concatenates it with "2", resulting in "12" as the final result. 
note: if you do console.log here, the output will be "12" but if you run the code exactly then no output will be shown i.e there will be a TypeError
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is option A: `['🍕', '🍫', '🥑', '🍔']`

<i>we have an array "food" containing four food emojis. Then, we have an object info with a property "favoriteFood" Changing the value of info."favoriteFood" does not affect the original "food", when we log food, it remains unchanged,</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is option B: `Hi there, undefined`

<i>`sayHi` function expects an argument `name`, when call sayHi() without providing any argument, name becomes undefined and output will be show Hi there, undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is C: 3

<i>forEach method iterates over the elements of the nums array. Inside the callback function, the condition if (num) checks if the current element num is truthy. If num is truthy, it increments the count variable by 1. The final value of count is 3, which corresponds to option C.</i>

</p>
</details>
