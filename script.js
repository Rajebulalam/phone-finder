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


// Display Phone 
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(phones.length == 0 ){
        alert('Sorry!! No Phone Found');
    }else{
        phones.slice(0, 20).forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card h-100 shadow p-3">
                    <img src=" ${phone.image} " class="card-img-top h-75" alt="phone-img">
                    <div class="card-body">
                        <h5 class="card-title"> ${phone.phone_name} </h5>
                        <p class="card-text"> ${phone.brand} </p>
                        <button onclick = "loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-success fw-bold">Details</button>
                    </div>
                </div>
            `;
            searchResult.appendChild(div);
        });
    }
    
}