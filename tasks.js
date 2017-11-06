var tasks = [
  "Go digging for records",
  "Plan a set",
  "Read the crowd",
  "Have fun",
];
var task = tasks[Math.floor(Math.random() * tasks.length)];
module.exports.tasks = tasks;
module.exports.task = task;
