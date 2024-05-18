// Gloabl Variables
let storage = []
let meals = []
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// general functions

function getdayindex(input){
    var currentd = 0
    for (let i = 0; i < input; i++){
        currentd += 1
        if (currentd == 7){currentd = 0}}
    return currentd
}

const getJSON = async url => {
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(response.statusText);
    const data = response.json();
    return data;
}
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
function formattoHTML(text){
    let out = text.replace(/\n/gi, "<br>")
    return out
}
// search
function getmeal(element) {
    console.log('searching for who asked')
    let query = document.getElementById(element).value
    console.log(query)
    for (let i = 0; i < document.getElementsByClassName('search-result').length; i++){
        document.getElementsByClassName('search-result')[i].remove()
    }
    document.getElementById('search-progress-indicator').innerHTML = "searching"
    getJSON(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then(data => {
        console.log(data)
        storage[0] = data
        let items = data.meals.length
        for (let i = 0; i < items; i++) {
            let html = create(
`<div class="search-result" id="result-${i}" onclick="resultselected('${i}')">
    <img src="${data.meals[i].strMealThumb}" alt="Image of ${data.meals[i].strMeal}">
    <p class="result-text">${data.meals[i].strMeal}</p>
</div>`)
            document.getElementById('results').appendChild(html)
        }
        
    }).catch(error => {
        console.error(error);
    });
    document.getElementById('search-progress-indicator').innerHTML = ""
}

function resultselected(result){
    console.log(result)
    let meal = storage[0].meals[result]
    console.log(meal)
    meals[result] = meal
    let current = document.getElementsByClassName('meal-list-item').length
    let html = create(`
<div class="meal-list-item" id="${current}">
    <h2 class="meal-date"><b>${days[getdayindex(current)]}</b></h2>
    <img src="${meal.strMealThumb}" alt="meal image" class="meal-list-image">
    <p class="meal-list-text">${(meal.strMeal).replace(" ", "<br>")}</p>
</div>`)
    document.getElementById('meal-list').appendChild(html)
    document.querySelectorAll('.search-result').forEach(e => e.remove());
    document.getElementById('close').click()
}

/*return listener*/
function listener() {
var searchbox = document.getElementById('searchtxt')
searchbox.addEventListener("keydown", function(e){
    console.log("type")
    if (e.code === "Enter"){getmeal('searchtxt')}
})}
setTimeout(listener, 1000)