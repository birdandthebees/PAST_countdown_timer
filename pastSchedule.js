let PAST_SCHEDULE = [
  { title: "Prepare to Start", interval: 10 },
  { title: "First 25m Underwater Swim", interval: 180 },
  { title: "Second 25m Underwater Swim", interval: 180 },
  { title: "500m Freestyle Swim", interval: 607 },
  { title: "First 30 min Rest", interval: 1800 },
  { title: "1.5 Mile Run in under 10 mins10sec", interval: 610 },
  { title: "Second 10 min Rest", interval: 600 },
  { title: "Pull-ups", repetitions: 10, interval: 120 },
  { title: "Third Rest for 10 mins", interval: 120 },
  { title: "Sit-ups", repetitions: 54, interval: 120 },
  { title: "Fourth Rest for 2 mins", interval: 120 },
  { title: "Push-ups", repetitions: 52, interval: 120 },
];

let totalExerciseTimeInSeconds = 0;

PAST_SCHEDULE.forEach(function (phase) {
  totalExerciseTimeInSeconds += phase.interval;
  phase.timeMap = totalExerciseTimeInSeconds;
});

PAST_SCHEDULE.forEach(function (phase) {
  phase.timeMap = totalExerciseTimeInSeconds - phase.timeMap;
});

var workoutPhases = PAST_SCHEDULE.map((phase) => phase.timeMap);
workoutPhases.unshift(totalExerciseTimeInSeconds);
