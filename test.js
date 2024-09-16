// --- Section 1: Coding Tasks (40 points) ---
const contacts=[
    {"name":"Name1", "contact":"0740000001", "age":28},
    {"name":"Name2", "contact":"0740000002", "age":33},
    {"name":"Name3", "contact":"0740000003", "age":25},
    {"name":"Name4", "contact":"0740000004", "age":42},
    {"name":"Name5", "contact":"0740000005", "age":31},
    {"name":"Name6", "contact":"0740000006", "age":29},
    {"name":"Name7", "contact":"0740000001", "age":35},
    
]
// Task 1: Remove duplicates from an array of contacts
function removeDuplicates(arr) {
    // Implement your solution here 
    /* -----SOLUTION-----:
    1.  I have created this solution in a case scenario where the array is an array of objects. its the time complexity for my algorithm is O(n)
    2. I will attach the second solution and comment it out which is much faster but it works under the case where one needs to
     remove Duplicates in a normal array that is not complex as compared to the case in step 1 above
    */
    const uniqueContacts = {};
    arr.forEach(item => {
        uniqueContacts[item.contact] = item;
    });
    return Object.values(uniqueContacts);

    //1.  solution 2 in the second scenario of a normal array that is not an object. You can comment out the below code and comment the one above to test it
    //return [...new Set(arr)];

}
console.log(removeDuplicates(contacts))

// Task 2: Merge two objects
function mergeObjects(obj1, obj2) {
    // Implement your solution here
 
    /* I decided to use the spread operators since using the custom merging has the same time complexity. But this is more readable for the same functionaluty and perfomance
    unless use case changes and needs an algorithm that needs some customization*/
    const merged = { ...obj1, ...obj2 };
     return merged;
 }

// --- Section 2: Scenario-Based Questions (60 points) ---

// Scenario 1: Debugging
function incrementArray(arr) {
    // Implement your solution here
    /* NB!!: This section had no code to debugg, so i assumed there was an issue with the increment,,
     and i also added my own code to illustrate the array increment where each interger is 
    being incremented to a value 1 step above it*/
    if (!arr.every(Number.isInteger)) {
        return "Error: Array must contain integers only";
      }
      for (let i = 0; i < arr.length; i++) {
        arr[i]++;
      }
    
      return arr;
}

console.log(incrementArray([4,3,4,1,6,7,8]))

// Scenario 2: Closures
/*
Closures is a function that retains access to its lexical scope, even when the function is executed outside that scope. This allows functions to 
remember the environment in which they were created, which includes any variables that were in scope at the time the closure was defined.
Closures allow functions to access variables from their parent scope even after the parent function has finished executing. 
*/
function outer() {
    let count = 0;
    return function(action) {
         // Implement your solution here
        if (action === 'increment') {
            count++;
            return `Count is now ${count}.`;
        } else if (action === 'reset') {
            count = 0;
            return 'Count has been reset.';
        } else {
            return 'Unknown action. Use "increment" or "reset".';
        }    
    };
}
const operation = outer();
console.log(operation('increment'));// this will print the first count= 1
console.log(operation('increment'));//this line will print the second count after getting the computed count abouve. then it will be 2. hence it will remember the 


// Scenario 3: Performance Optimization
/*

-On this occasion i will use the entire application optimization and also algorithm.
-----OPTIMIZATION TECHNIQUES----
1. Caching: This technique involves storing frequently accessed data in a faster memory location to reduce the need for repeated calculations or database queries.
 This really improves perfomance of the application 
especially when dealing with large datasets or complex computations
        1.client-sidecaching: This includes  Intercepting network requests and serves cached responses. This can provide offline capabilities and improving performance.
         Or when you dont need to fetch data from the server to poppulate the UI when the request is not that neccesarry.
          You can also store Images and css/javascript on client memory for easy access and maintain the UI incase the is network interuption to communicate with the server and to avoind redudant fetching of the same files

2. Asynchronous Processing: 
        This coding paradigm allows tasks to be executed independently of the main program flow, enabling other tasks to continue without waiting for completion.
         This can significantly improve responsiveness and prevent the user interface from freezing while waiting for long-running operations.
         1. With this you can prioritize tasks based on importance or urgency to ensure that critical operations are processed first through "Task queuing". 
         2. Implement mechanisms to cancel or timeout the tasks that are taking too long to complete. this will avoid program from freezing and using too much resources without giving productive response or even end up running in a loop.

    -in practical day to day i have used this to fetch data from an API asynchronously to prevent
     the user interface from freezing while waiting for the response. By using asynchronous processing, the application can continue to respond to user input while the data is being fetched. i have show this in the "fetchUserPosts()" function in this test

3. Code Minification and Compression:
        This techniques can reduce the size of code files, leading to faster download times and improved performance. 
        By removing unnecessary characters and compressing the code, you can significantly reduce the amount of data that needs to be transferred over the network.
            1. you can integrate minification and compression into your build process to ensure that code is optimized automatically. especially when it comes to files like images. 
            2. Code Optimization: refining the code itself to make it run more efficiently. you can Minimizing the number of iterations or reducing the complexity of loops.

4. Lazy Loading:
        Here you, it involve loading of resources until they are actually needed. This improves page load times. Especially for users with slow internet or slower devices.

5. Load Balancing:
        This means distributing incoming traffic or workload evenly across multiple servers or resources to ensure no single server is overwhelmed. I have implemented this in AWS by redirecting client requests to a geographically closer server to reduce latency
 
6. Concurrency Control:       
        This involves managing access to shared resources in a multi-threaded or distributed environment to avoid conflicts and ensure consistency. You can achieve this
        by eg: allowing multiple threads / processes to work independently and resolving conflicts incase they occur.
       
 */



// Scenario 4: Data Manipulation
const ages=[
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 3},
    {"name": "Diana", "age": 17},
    {"name": "Edward", "age": 50},
]
function getAdultNames(users) {
    // Implement your solution here

    //NOTE: my solution has a time complexity of O(n) same as using array iteration like filter() and map. 
    // the space complexity will be O(m) since my solution has only one additional array (adultsList) that is used to store the names of adult users.
    const adultsList = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            adultsList.push(users[i].name);
        }
    }
    return adultsList;
}
console.log(getAdultNames(ages));


// Scenario 5: Asynchronous Data Handling
async function fetchUserPosts(apiUrl) {
    // Implement your solution here
    return fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            //i always check for erros first to make the algorithm more efficient and fast.. since for example if you check for the data first with if statement,and it doesnt get it, it executes the next statement, until it reaches the error statement checker. but if we check for the error first it will stop from running the next stateent.
            // i have added this "thrown" error which will then be caught by the catch block if anything wrong happens here
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then(posts => {
        console.log("Fetched user posts:", posts);
        return posts;
    })
    .catch(error => {
        console.error("Failed to fetch user posts:", error);
    });
}
fetchUserPosts('https://catfact.ninja/fact')


// Scenario 6: Memoization
function memoize(fn) {
    // Implement your solution here
/* Memoization is an optimization technique that makes applications more
     efficient and hence faster. This is achieved by storing computation
      results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again   */ 

      /* 
      Therefore memoization function is a higher-order function that enhances the performance of another function by caching its results. It basically stores the results of repetitive function calls by caching..that is why its an optimization technique
      */

      const cache = new Map();
      return function(...args) {
          const key = generateKey(args);
  
          if (cache.has(key)) {
              return cache.get(key);
          }
  
          const result = fn(...args);
          cache.set(key, result);  
          return result;
      };
  }
  
  function generateKey(args) {
      return args.map(arg => 
          typeof arg === 'object' 
              ? JSON.stringify(arg, Object.keys(arg).sort()) 
              : arg
      ).join('|');
  }
  
  function processData(user, options) {
      console.log('Processing data...');
      return `${user.name} - ${options.theme}`;
  }
  const memoized_Processed_Data = memoize(processData);
  
  const first_User = { name: 'Job Sidney', years: 32 };
  const themeOption1 = { theme: 'dark', layout: 'grid' };
  
  const second_User = { name: 'Bob', yearse: 29 };
  const themeOption2 = { theme: 'light', layout: 'list' };
  //TIm trying now to call and to see what input ill get/ testing my code. This will  Computes and returns "Job Sidney - dark"
  console.log(memoized_Processed_Data(first_User, themeOption1));
  // The below implimentation Fetches from cache and returns "Job Sidney - dark" . the same thing will happen in the functions calls i have made after  that just for testing
  console.log(memoized_Processed_Data(first_User, themeOption1));
  console.log(memoized_Processed_Data(second_User, themeOption2));
  console.log(memoized_Processed_Data(second_User, themeOption2));
