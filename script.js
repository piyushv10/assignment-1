document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded'); // Check if script is loaded
    // Fetch JSON data from the API
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
        .then(response => response.json())
        .then(data => {
            
            console.log('Data structure:', data);
            // Check if "products" property exists
            if (!data.hasOwnProperty("products")) {
                console.error('Error: "products" property not found');
                return;
            }

            const productsObject  = data.products;

            // Check if productsObject is an object
            if (typeof productsObject !== 'object') {
                console.error('Error: "products" is not an object');
                return;
            }
            const productsArray = Object.values(productsObject);


            const sortedData = productsArray.sort((a, b) => b.popularity - a.popularity);

            // Display data in the table
            const tableBody = document.querySelector('#productTable tbody');
            sortedData.forEach(product => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = product.title || '';
                row.insertCell(1).textContent = product.price || '';
                row.insertCell(2).textContent = product.popularity || '';
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
