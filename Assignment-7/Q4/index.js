let data = [];

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      data = res;
      console.log("Data fetched");
    });
}

function filterData() {
  if(data.length===0) return
  let filtered = data.filter((user) => user.name.startsWith("C"));
  console.log("Filtered Users:", filtered);
}

function throttle(func, delay) {
  let last = 0;
  return function () {
    let now = new Date().getTime();
    if (now - last > delay) {
      last = now;
      func.apply(this, args);
    }
  };
}

let throttledFilter = throttle(filterData, 2000);

document.getElementById("filterBtn").addEventListener("click", throttledFilter);

fetchData();
