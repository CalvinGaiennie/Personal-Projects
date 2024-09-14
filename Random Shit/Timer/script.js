const timer = document.getElementById("timer");
const run = document.getElementById("run");
function displayTime(time) {
  console.log(time);
  timer.innerHTML = time;
  time = time - 1;
  return time;
}
run.addEventListener("click", function () {
  const timeI = document.getElementById("timeI");
  const timeIV = timeI.value;
  let time = Number(timeIV);
  let cumulativeTime = 0;

  for (let i = 0; i < timeIV; i++) {
    setTimeout(() => {
      time = displayTime(time);
    }, cumulativeTime * 1000);
    cumulativeTime = cumulativeTime + 1;
    console.log(cumulativeTime);
  }
});
