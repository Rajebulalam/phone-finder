// Search Phone
const searchPhone = () => {
    // Taken Search Value
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    // Error Message for Empty
    if (searchText === '') {
        alert('Please!! Write Something to display');
    } else {
        // Load API Data
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data));
    }
}
