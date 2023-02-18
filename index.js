// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, desription) {
//   taskTitles.push(title);
//   taskDescriptions.push(desription)
//   taskComplete.push(false);
// }

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState : function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}




// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

//marks the provided task as completed - refactored of above. later refactored again into the object newTask
// function completeTask(task) {
//   task.complete= true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// //prints out the provided task's details -refactored of above. later refactored again into the object newTask
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? ' ' : ' not '} been completed`)
// }


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];




// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

// // refactored of above
// logTaskState(task1);
// completeTask(task1);
// logTaskState(task1);

// refactored again after turning functions into methods under newTask
task1.logState(); // clean cat litter has not been completed
task1.markCompleted();
task1.logState(); // clean cat litter has been completed


// console.log(tasks)
