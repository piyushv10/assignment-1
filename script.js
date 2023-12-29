document.addEventListener('DOMContentLoaded', function () {
    // Fetch JSON data from the API
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
        .then(response => response.json())
        .then(data => {
            // Sort data by descending popularity
            const sortedData = data.sort((a, b) => b.Popularity - a.Popularity);

            // Display data in the table
            const tableBody = document.querySelector('#productTable tbody');
            sortedData.forEach(product => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = product.Title;
                row.insertCell(1).textContent = product.Price;
                row.insertCell(2).textContent = product.Popularity;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
