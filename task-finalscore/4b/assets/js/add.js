document.getElementById('addCollectionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('collectionName').value;

    fetch('/collection-add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});