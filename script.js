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
const seher = document.querySelector("#seher");
const valyuta = document.querySelector("#valyuta");
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
const likedCars = [];
let data = {
        "cars": [
          {
            "id": "1",
            "brand": "Mercedes",
            "model": "w202",
            "price": "10 500",
            "currency": "AZN",
            "year": 1998,
            "images": [
            'https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg'
            ],
            "engine": "2.0"
          },
          {
            "id": "2",
            "brand": "Kio",
            "model": "Rio",
            "price": "21 000",
            "currency": "AZN",
            "year": 2014,
            "credit": true,
            "barter": true,
            "images": [
              'https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg'
            ],
            "engine": 1.4
          },
          {
            "id": "3",
            "brand": "Hyundai",
            "model": "Tucson",
            "price": "12 000",
            "currency": "AZN",
            "year": 2014,
            "images": [
              'https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg' 
            ],
            "engine": "2.0"
          },
          {
            "id": "4",
            "brand": "LADA (VAZ)",
            "model": "2107",
            "price": "35 000",
            "currency": "AZN",
            "year": 2010,
            "images": [
             'https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg'
            ],
            "engine": 1.6
          },
          {
            "id": "5",
            "brand": "BMW M5",
            "model": "e39",
            "price": "28 700",
            "currency": "AZN",
            "year": 1998,
            "images": [
             'https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg'
            ],
            "engine": 4.4
          },
          {
            "id": "6",
            "brand": "Mercedes",
            "model": "CLS",
            "price": "86 500",
            "currency": "AZN",
            "year": 2022,
            "images": [
                'https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg' 
            ],
            "engine": 2.9
          },
          {
            "id": "7",
            "brand": "Toyota",
            "model": "Camry",
            "price": " 54 000",
            "currency": "AZN",
            "year": 2024,
            "images": [
             'https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg' 
            ],
            "engine": 2.0
          },
          {
            "id": "8",
            "brand": "Porche 911",
            "model": "Carrera",
            "price": "118 400",
            "currency": "AZN",
            "year": 2023,
            "images": [
             'https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg'
            ],
            "engine": 4.4
          }
        ]
      }

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

function showCard() {
    let kod = '';
    data.cars
        .filter(item => 
            item.brand.includes(marka.value) && 
            item.model.includes(model.value) && 
            item.city !== seher.value &&
           
            item.currency.includes(valyuta.value) &&
            (ilMax.value >= item.year || ilMin.value <= item.year ) &&
            (+qiymetMax.value >= item.price ) || (+qiymetMin.value <= item.price ) 
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
                        <h3>${item. price} ${item.currency}</h3>
                        <p>${item.brand} ${item.model}</p>
                        <p>${item.year}, ${item.engine}L, ${item.color}</p>
                    </div>
                </div>`;
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



