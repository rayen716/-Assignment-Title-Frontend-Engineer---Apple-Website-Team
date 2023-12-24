document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the mock API
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            const productTitle = document.getElementById('product-title');
            const productDescription = document.getElementById('product-description');

            // Update content dynamically
            productTitle.textContent = response.data.title;
            productDescription.textContent = response.data.body;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
