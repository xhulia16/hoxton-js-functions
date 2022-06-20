/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a,b) {
    return a+b

  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(number) {
    return number % 2 === 0
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
    console.log(`Hi, ${name}`)
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
        return age>=18
  }
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function getYearsToAdulthood(age) {
    return 18-age
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(person) {
      greet(person.name)
   if(isAnAdult(person.age)){
      console.log ("You can enter")
   }
   else{
    console.log(`Come back in ${getYearsToAdulthood(person.age)} years`)
   }
    // use greet, isAnAdult and yearsToAdulthood to help you!
  }
  