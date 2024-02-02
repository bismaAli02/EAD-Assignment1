# EAD-Assignment1
The Real-time Health News Dashboard is a dynamic web application that provides users with the news about health. The dashboard fetches data from the NewsAPI  and employs Web Workers for efficient data processing before displaying it to the user. The project enhances user experience by filtering news data based on user input, all in real-time.
# How to Run Locally
1. Clone the repository to your local machine:
       git clone https://github.com/bismaAli02/EAD-Assignment1.git
2. Open the project folder:
       cd EAD-Assignment1
3. Open the index.html file in a web browser.
# Web Worker Performance Benefits
The use of Web Workers in this project provides performance improvements by offloading data processing to a separate thread. This prevents the main UI thread from being blocked during intensive tasks like filtering news data based on the selected date. As a result, the application remains responsive, providing a smoother user experience.
# Challenges Faced and Solutions
Challenge: Asynchronous API Request
Because fetching exchange rates from the API is an asynchronous process, processing big datasets may cause the main thread to become blocked.

Web Workers as a solution
Web Workers are used to manage the processing asynchronously in order to get around this. In order to free up the main thread for user interactions, the worker.js file processes exchange rates independently.

# References
1. [Web workers in JavaScript and when to use them:](https://benestudio.co/web-workers)
2. [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
3. [NewsAPI](https://saurav.tech/NewsAPI)
