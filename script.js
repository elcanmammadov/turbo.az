const hiddeninp = document.querySelector(".hidden-inp");
const yenielan = document.querySelector(".yenielan");
const nav = document.querySelector("nav");
const mainsearch = document.querySelector(".main-search");
const textA = document.querySelector("#textA");
const footerlist = document.querySelector("#footerlist");
const logo = document.querySelector("#logo");
const footermarkalar = document.querySelector(".footermarkalar");
const main = document.querySelector("main");
const body = document.querySelector("body");
const cards = document.querySelector(".cards");
const heart = document.querySelector(".heart");
const secilmisler = document.querySelector(".secilmisler");
const loginn = document.querySelector(".login");
const secilmismain = document.querySelector(".secilmis-main");
const marka = document.querySelector("#marka");
const model = document.querySelector("#model");
const ban = document.querySelector("#ban");
const ilMax = document.querySelector("#il-max");
const ilMin = document.querySelector("#il-min");
const qiymetMax = document.querySelector("#qiymet-max");
const qiymetMin = document.querySelector("#qiymet-min");
const button = document.querySelector("button");
const h4 = document.querySelector('h4');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const markalar = document.querySelector("#markalar");
const filtersNone = document.querySelector('#filters-none');
const markNone = document.querySelector('#mark-none');
const kredit = document.querySelector('#kredit');
const barter = document.querySelector('#barter');
const yardim = document.querySelector('.yardim');
const dahaCox = document.querySelector('#daha-cox');
const mobilnav = document.querySelector('#mobile-nav');
const searchMark = document.querySelector('#searchMark');
const city = document.querySelector("#city");



//selectlere yigilanlar
function getOptions(uniqueItems, element) {
    uniqueItems.forEach(item => { element.innerHTML += `<option value="${item}">${item}</option>` });
}
getOptions([...new Set(data.cars.map(item => item.brand))], marka);
getOptions([...new Set(data.cars.map(item => item.model))], model);
getOptions([...new Set(data.cars.map(item => item.currency))], valyuta);
getOptions([...new Set(data.cars.map(item => item.year))], ilMax);
getOptions([...new Set(data.cars.map(item => item.year))], ilMin);
getOptions([...new Set(data.cars.map(item => item.year))], ilMin);
getOptions([...new Set(data.cars.map(item => item.city))], city);

function showCard() {
    let kod = '';
    data.cars
        .filter(item => 
            item.brand.includes(marka.value) && 
            item.model.includes(model.value) && 
            item.city !== city.value &&
           
            item.currency.includes(valyuta.value) &&
            (ilMax.value >= item.year || ilMin.value <= item.year ) &&
            (+qiymetMax.value >= item.price ) || (+qiymetMin.value <= item.price ) 
        )
        .forEach(item => {
            function showCard() {
    let kod = '';
    data.cars
        .filter(item => 
            (!marka.value || item.brand.includes(marka.value)) &&
            (!model.value || item.model.includes(model.value)) &&
            (!city.value || item.city.includes(city.value)) &&
            (!valyuta.value || item.currency.includes(valyuta.value)) &&
            (!ilMax.value || item.year <= ilMax.value) &&
            (!ilMin.value || item.year >= ilMin.value) &&
            (!qiymetMax.value || +item.price <= +qiymetMax.value) &&
            (!qiymetMin.value || +item.price >= +qiymetMin.value)
        )
        .forEach(item => {
            kod += ` 
                <div class="card">
                    <div class="card-img">
                        <img src="${item.images[0]}" alt="">
                        <i class="fa-regular fa-heart" onclick="like(this, ${item.id})"></i>
                        <span class="df">
                            <i class="fa-solid fa-crown"></i>
                            <i class="fa-solid fa-gem"></i>
                        </span>
                    </div>
                    <div class="card-sum">
                        <h3>${item.price} ${item.currency}</h3>
                        <p>${item.brand} ${item.model}</p>
                        <p>${item.year}, ${item.engine}L, ${item.city}</p>
                    </div>
                </div>`;
        });

        city.addEventListener("change", showCard);

    cards.innerHTML = kod;
}

        });
    cards.innerHTML = kod;
}
showCard(); 

// filterleme
function like(element, id) {
    if (element.classList.contains("fa-regular")) {
        element.classList.remove("fa-regular");
        element.classList.add("fa-solid", "heart-red");
    } else {
        element.classList.remove("fa-solid", "heart-red");
        element.classList.add("fa-regular");
    }
}

marka.addEventListener("change", function () {
    let selectedBrand = marka.value;
    let models = [...new Set(data.cars.filter(car => car.brand === selectedBrand).map(car => car.model))];

    model.innerHTML = '<option value="" disabled selected hidden>Model</option>';
    models.forEach(item => {
        model.innerHTML += `<option value="${item}">${item}</option>`;
    });
});

function showCard() {
    let selectedBrand = marka.value;
    let selectedModel = model.value;
    
    let filteredCars = data.cars.filter(item =>
        (!selectedBrand || item.brand === selectedBrand) &&
        (!selectedModel || item.model === selectedModel)
    );

    let kod = '';
    filteredCars.forEach(item => {
        kod += `
            <div class="card">
                <div class="card-img">
                    <img src="${item.images[0]}" alt="">
                    <i class="fa-regular fa-heart" onclick="like(this, ${item.id})"></i>
                    <span class="df">
                        <i class="fa-solid fa-crown"></i>
                        <i class="fa-solid fa-gem"></i>
                    </span>
                </div>
                <div class="card-sum">
                    <h3>${item.price} ${item.currency}</h3>
                    <p>${item.brand} ${item.model}</p>
                    <p>${item.year}, ${item.engine}L</p>
                </div>
            </div>`;
    });

    cards.innerHTML = kod;
}

marka.addEventListener("change", showCard);
model.addEventListener("change", showCard);


// marka axtarisi
document.getElementById("searchInput").addEventListener("input", function() {
    let searchValue = this.value.toLowerCase();
    let filteredCars = data.cars.filter(car => 
        car.brand.toLowerCase().includes(searchValue) || 
        car.model.toLowerCase().includes(searchValue)
    );

    showFilteredCars(filteredCars);
});

function showFilteredCars(filteredCars) {
    let kod = '';
    filteredCars.forEach(item => {
        kod += `
            <div class="card">
                <div class="card-img">
                    <img src="${item.images[0]}" alt="">
                    <i class="fa-regular fa-heart" onclick="like(this, ${item.id})"></i>
                    <span class="df">
                        <i class="fa-solid fa-crown"></i>
                        <i class="fa-solid fa-gem"></i>
                    </span>
                </div>
                <div class="card-sum">
                    <h3>${item.price} ${item.currency}</h3>
                    <p>${item.brand} ${item.model}</p>
                    <p>${item.year}, ${item.engine}L</p>
                </div>
            </div>`;
    });

    document.querySelector(".cards").innerHTML = kod;
}


let flag = false; // flag dəyişəni səhifə başlanğıcında 'false' olaraq təyin edilir

// Yeni Elan bölməsini göstərmək və gizlətmək üçün funksiya
function yeniElan() {
    flag = !flag;  // flag dəyişəni tərs edir
    yenielan.style.display = flag ? "block" : "none";  // 'yenielan' göstəriləcək ya da gizlədiləcək
    main.style.display = flag ? "none" : "block";  // 'main' gizlədiləcək ya da göstəriləcək
    mainsearch.style.display = flag ? "none" : "block";  // 'mainsearch' gizlədiləcək ya da göstəriləcək
}

// Login səhifəsini açmaq üçün funksiya
function login() {
    loginn.style.display = 'block';
    nav.style.display = 'none';
    mainsearch.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
}

// Yardım səhifəsini açmaq üçün funksiya
function goYardim() {
    yardim.style.display = 'block';
    nav.style.display = 'none';
    mainsearch.style.display = "none";
    main.style.display = "none";
}

