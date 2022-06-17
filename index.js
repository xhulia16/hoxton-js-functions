/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a=0,b=0) {
    let sum=a+b
    return sum
    console.log(sum)
  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(a=0) {
    if(a % 2===0){
        console.log(true)
        return true
    }
    else{
        console.log(false) 
        return false
    }
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name = 'stranger') {
    let message1 = `Hi, ${name}`
    console.log(message1)
    return message1 
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(a=0) {
    if(a>=18){
        console.log(true)
        return true
    }
    else{
        console.log(false)
        return false
    }
  }
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(a=0) {
    let yearsLeftToAdulthood=18-a
    return(yearsLeftToAdulthood)
    console.log(yearsLeftToAdulthood)
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit([age=0, personName='stranger']) {
      greet(personName)
   if(isAnAdult(age)===true){
       let message2='You can enter'
       return(message2)
       console.log(message2)
   }
   else{
       yearsToAdulthood(age)
       let message3="Come back later, you are not old enough"
       return(message3)
       console.log(message3)
   }
    // use greet, isAnAdult and yearsToAdulthood to help you!
  }
  