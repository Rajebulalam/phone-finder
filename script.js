// Search Phone
const searchPhone = () => {
    // Taken Search Value
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // Spinner Show
    toggleSpinner('block');

    // Error Message for Empty
    if (searchText === '') {
        emptyError.style.display = 'block';
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
    // Clear Data
    searchResult.textContent = '';
    const phoneDetails = document.getElementById('product-details');
    // Clear Data
    phoneDetails.textContent = '';
    emptyError.style.display = 'none';
    nullError.style.display = 'none'
    if(phones.length == 0 ){
        nullError.style.display = 'block'
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
        // Spinner Off
        toggleSpinner('none');
    }
    
}


// load API for Phone Daetails
const loadPhoneDetails = phone => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data));
}

// Display Phone Deatils
const displayPhoneDetails = details =>{
    const phoneDetails = document.getElementById('product-details');
    // Clear Data
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card mb-3 py-5 px-2">
            <img src=" ${details.image} " class="card-img-top w-50 h-50 mx-auto" alt="phone-img">
            <div class="card-body">
                <h5 class="card-title text-success fw-bold"> ${details.name} </h5>
                <p class="card-text"> ${details.releaseDate? details.releaseDate : 'No Release Date Found'} </p> 
                <span class = "fw-bold text-success"> Features : </span>
                <p class="card-text"> <span class ="fw-bold">Storage : </span>${details.mainFeatures.storage} </p>
                <p class="card-text"> <span class ="fw-bold">DisplaySize : </span>${details.mainFeatures.displaySize} </p>
                <p class="card-text"> <span class ="fw-bold">ChipSet : </span>${details.mainFeatures.chipSet} </p>
                <p class="card-text"> <span class ="fw-bold">Memory : </span>${details.mainFeatures.memory} </p>
                <span class ="fw-bold text-success">Sensors :</span>
                <p class="card-text"> ${details.mainFeatures.sensors} </p>
                <span class = "fw-bold text-success"> Others : </span>
                <p class="card-text"> <span class ="fw-bold">WLAN : </span>${details.others.WLAN} </p>
                <p class="card-text"> <span class ="fw-bold">Bluetooth : </span>${details.others.Bluetooth} </p>
                <p class="card-text"> <span class ="fw-bold">GPS : </span>${details.others.GPS} </p>
                <p class="card-text"> <span class ="fw-bold">NFC : </span>${details.others.NFC} </p>
                <p class="card-text"> <span class ="fw-bold">Radio : </span>${details.others.Radio} </p>
                <p class="card-text"> <span class ="fw-bold">USB : </span>${details.others.USB} </p>
            </div>
        </div>
    `;
    phoneDetails.appendChild(div);
}

// Spinner
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

// Error
const emptyError = document.getElementById('empty-error');
emptyError.style.display = 'none';
const nullError = document.getElementById('null-error');
nullError.style.display = 'none'