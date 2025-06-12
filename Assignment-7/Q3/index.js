let input = document.getElementById("search");

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer) //Cancel the previous timeout if a new event comes in within the delay
    timer =setTimeout(() => {
      fn();
    }, delay);
  };
}

function handleSearch() {
  console.log("Searching:", input.value);
}

let debouncedSearch = debounce(handleSearch, 500);

input.addEventListener("input", debouncedSearch);
