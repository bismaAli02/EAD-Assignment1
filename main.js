// let worker;

// Function to start fetching news data and initiate the Web Worker
function startFetching() {
  // Create a Web Worker
  const worker = new Worker("worker.js");

  // Listen for messages from the worker
  worker.onmessage = function (event) {
    console.log(event.data);
    displayData(event.data);

    worker.terminate();
  };

  // Start fetching news data
  const date = document.getElementById("date").value;

  // API URL for fetching news data about Tesla
  const url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

  // Fetch news data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Send data to the Web Worker for filtering based on the date
      // console.log(data.data);
      worker.postMessage({ newsData: data.articles, selectedDate: date });
    })
    .catch((error) => console.error("Error fetching news data:", error));
}

// Function to display filtered news data in the table
function displayData(filteredNewsData) {
  const tableBody = document.getElementById("table");
  tableBody.innerHTML = ""; // Clear previous data

  // Display filtered news data in the table
  filteredNewsData.forEach((article, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${article.title}</td>
      <td>${article.publishedAt}</td>
      <td><a href="${article.url}" target="_blank">Visit</a></td>
    `;
  });
}