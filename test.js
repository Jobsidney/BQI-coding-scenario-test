// --- Section 1: Coding Tasks (40 points) ---
const contacts=[
    {"name":"Name1", "contact":"0740000001", "age":28},
    {"name":"Name2", "contact":"0740000002", "age":33},
    {"name":"Name3", "contact":"0740000003", "age":25},
    {"name":"Name4", "contact":"0740000004", "age":42},
    {"name":"Name5", "contact":"0740000005", "age":31},
    {"name":"Name6", "contact":"0740000006", "age":29},
    {"name":"Name7", "contact":"0740000007", "age":35},
    {"name":"Name8", "contact":"0740000008", "age":27},
    {"name":"Name9", "contact":"0740000009", "age":40},
    {"name":"Name10", "contact":"0740000010", "age":38},
    {"name":"Name11", "contact":"0740000011", "age":26},
    {"name":"Name12", "contact":"0740000012", "age":32},
    {"name":"Name13", "contact":"0740000013", "age":37},
    {"name":"Name14", "contact":"0740000014", "age":30},
    {"name":"Name15", "contact":"0740000015", "age":22},
    {"name":"Name16", "contact":"0740000016", "age":34},
    {"name":"Name17", "contact":"0740000017", "age":41},
    {"name":"Name18", "contact":"0740000018", "age":39},
    {"name":"Name19", "contact":"0740000019", "age":28},
    {"name":"Name20", "contact":"0740000020", "age":33},
    {"name":"Name21", "contact":"0740000021", "age":46},
    {"name":"Name22", "contact":"0740000022", "age":24},
    {"name":"Name23", "contact":"0740000023", "age":30},
    {"name":"Name24", "contact":"0740000024", "age":31},
    {"name":"Name25", "contact":"0740000025", "age":27},
    {"name":"Name26", "contact":"0740000026", "age":42},
    {"name":"Name27", "contact":"0740000027", "age":35},
    {"name":"Name28", "contact":"0740000028", "age":29},
    {"name":"Name29", "contact":"0740000029", "age":40},
    {"name":"Name30", "contact":"0740000030", "age":38},
    {"name":"Name31", "contact":"0740000031", "age":25},
    {"name":"Name32", "contact":"0740000032", "age":33},
    {"name":"Name33", "contact":"0740000033", "age":37},
    {"name":"Name34", "contact":"0740000034", "age":31},
    {"name":"Name35", "contact":"0740000035", "age":28},
    {"name":"Name36", "contact":"0740000036", "age":39},
    {"name":"Name37", "contact":"0740000037", "age":34},
    {"name":"Name38", "contact":"0740000038", "age":30},
    {"name":"Name39", "contact":"0740000039", "age":43},
    {"name":"Name40", "contact":"0740000040", "age":32},
    {"name":"Name41", "contact":"0740000041", "age":27},
    {"name":"Name42", "contact":"0740000042", "age":38},
    {"name":"Name43", "contact":"0740000043", "age":29},
    {"name":"Name44", "contact":"0740000044", "age":33},
    {"name":"Name45", "contact":"0740000045", "age":25},
    {"name":"Name46", "contact":"0740000046", "age":36},
    {"name":"Name47", "contact":"0740000047", "age":41},
    {"name":"Name48", "contact":"0740000048", "age":32},
    {"name":"Name49", "contact":"0740000049", "age":40},
    {"name":"Name50", "contact":"0740000050", "age":35},
    {"name":"Name51", "contact":"0740000051", "age":24},
    {"name":"Name52", "contact":"0740000052", "age":39},
    {"name":"Name53", "contact":"0740000053", "age":28},
    {"name":"Name54", "contact":"0740000054", "age":31},
    {"name":"Name55", "contact":"0740000055", "age":27},
    {"name":"Name56", "contact":"0740000056", "age":30},
    {"name":"Name57", "contact":"0740000057", "age":34},
    {"name":"Name58", "contact":"0740000058", "age":33},
    {"name":"Name59", "contact":"0740000059", "age":26},
    {"name":"Name60", "contact":"0740000060", "age":43},
    {"name":"Name61", "contact":"0740000061", "age":38},
    {"name":"Name62", "contact":"0740000062", "age":35},
    {"name":"Name63", "contact":"0740000063", "age":27},
    {"name":"Name64", "contact":"0740000064", "age":32},
    {"name":"Name65", "contact":"0740000065", "age":40},
    {"name":"Name66", "contact":"0740000066", "age":29},
    {"name":"Name67", "contact":"0740000067", "age":28},
    {"name":"Name68", "contact":"0740000068", "age":33},
    {"name":"Name99", "contact":"0740000099", "age":26},
    {"name":"Name100", "contact":"0740000100", "age":35},
    {"name":"Name69", "contact":"0740000069", "age":31},
    {"name":"Name70", "contact":"0740000070", "age":36},
    {"name":"Name71", "contact":"0740000071", "age":25},
    {"name":"Name72", "contact":"0740000072", "age":43},
    {"name":"Name73", "contact":"0740000073", "age":32},
    {"name":"Name74", "contact":"0740000074", "age":27},
    {"name":"Name75", "contact":"0740000075", "age":38},
    {"name":"Name76", "contact":"0740000076", "age":30},
    {"name":"Name77", "contact":"0740000077", "age":41},
    {"name":"Name78", "contact":"0740000078", "age":35},
    {"name":"Name79", "contact":"0740000079", "age":28},
    {"name":"Name80", "contact":"0740000080", "age":37},
    {"name":"Name81", "contact":"0740000081", "age":32},
    {"name":"Name82", "contact":"0740000082", "age":29},
    {"name":"Name83", "contact":"0740000083", "age":33},
    {"name":"Name84", "contact":"0740000084", "age":30},
    {"name":"Name85", "contact":"0740000085", "age":27},
    {"name":"Name86", "contact":"0740000086", "age":42},
    {"name":"Name87", "contact":"0740000087", "age":35},
    {"name":"Name88", "contact":"0740000088", "age":39},
    {"name":"Name89", "contact":"0740000089", "age":32},
    {"name":"Name90", "contact":"0740000090", "age":25},
    {"name":"Name91", "contact":"0740000091", "age":28},
    {"name":"Name92", "contact":"0740000092", "age":33},
    {"name":"Name93", "contact":"0740000093", "age":31},
    {"name":"Name94", "contact":"0740000094", "age":29},
    {"name":"Name95", "contact":"0740000095", "age":42},
    {"name":"Name96", "contact":"0740000096", "age":37},
    {"name":"Name97", "contact":"0740000097", "age":30},
    {"name":"Name98", "contact":"0740000098", "age":41},
    {"name":"Name99", "contact":"0740000099", "age":26},
    {"name":"Name100", "contact":"0740000100", "age":35},
    {"name":"Name981", "contact":"0740000981", "age":47},
    {"name":"Name982", "contact":"0740000982", "age":52},
    {"name":"Name983", "contact":"0740000983", "age":45},
    {"name":"Name984", "contact":"0740000984", "age":29},
    {"name":"Name985", "contact":"0740000985", "age":36},
    {"name":"Name986", "contact":"0740000986", "age":33},
    {"name":"Name987", "contact":"0740000987", "age":42},
    {"name":"Name988", "contact":"0740000988", "age":31},
    {"name":"Name989", "contact":"0740000989", "age":24},
    {"name":"Name990", "contact":"0740000990", "age":40},
    {"name":"Name991", "contact":"0740000991", "age":27},
    {"name":"Name992", "contact":"0740000992", "age":35},
    {"name":"Name993", "contact":"0740000993", "age":32},
    {"name":"Name994", "contact":"0740000994", "age":26},
    {"name":"Name995", "contact":"0740000995", "age":38},
    {"name":"Name996", "contact":"0740000996", "age":29},
    {"name":"Name997", "contact":"0740000997", "age":34},
    {"name":"Name998", "contact":"0740000998", "age":41},
    {"name":"Name999", "contact":"0740000999", "age":30},
    {"name":"Name1000", "contact":"0740001000", "age":39}
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
//console.log(removeDuplicates(contacts))

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
    {"name": "John", "age": 25},
    {"name": "Jane", "age": 30},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},{"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41}
    ,{"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 33},
    {"name": "Hannah", "age": 41},
    {"name": "Job Sidney", "age": 22},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 28},
    {"name": "Diana", "age": 45},
    {"name": "Edward", "age": 50},
    {"name": "Fiona", "age": 27},
    {"name": "George", "age": 2},
    {"name": "Hannah", "age": 3}
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
//console.log(getAdultNames(ages));

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
