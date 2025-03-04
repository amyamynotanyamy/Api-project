fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 4)}</pre>`;
    })
    .catch(error => console.error('Error fetching data:', error));