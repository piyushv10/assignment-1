document.addEventListener('DOMContentLoaded', () => {
    const productListElement = document.getElementById('productList');

    // Fetch JSON data
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
        .then(response => response.json())
        .then(data => {
            // Sort data based on descending popularity
            const sortedData = data.sort((a, b) => b.Popularity - a.Popularity);

            // Display products
            sortedData.forEach(product => {
                const productElement = document.createElement('div');
                productElement.innerHTML = `
                    <h3>${product.Title}</h3>
                    <p>Price: $${product.Price}</p>
                    <p>Popularity: ${product.Popularity}</p>
                    <hr>
                `;
                productListElement.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
