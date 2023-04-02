
const movieId = window.localStorage.getItem('movieId')
console.log(movieId)

const movieHeader = document.getElementById('movie-header')
const movieItems = document.getElementById('movie-items')
const movieActors = document.getElementById('movie-actors')

movieURL = `https://imdb-api.com/en/API/Title/k_0esyzcfg/${movieId}/FullActor,Posters,Trailer,Ratings`

fetch(movieURL)
.then(response => {return response.json()})
.then(json=>{movieInfo(json)});


const movieInfo = (json) => {

    movieHeader.innerHTML = 
    `<div>
    <li id='movie-item'> ${json.fullTitle}</li>
    <img src="${json.image}" alt ="movie-pic">
    <li id='movie-item'> ${json.year} • ${json.runtimeStr} • ${json.contentRating} </li> 
    <li id='movie-item'> ⭐️${json.imDbRating}/10 </li>
    </div>
    `
    movieItems.innerHTML =
    `<div>
    <li>${json.awards}</li>
    <p>${json.plot}</p>
    <li>${json.genres}</li>
    <li> Director: ${json.directors}></li>
    <li> Writers: ${json.writers} </li>
    <li> Stars: ${json.starList[0].name} ${json.starList[1].name} ${json.starList[2].name}</li>
    <div id="budget">
        <li>${json.boxOffice.budget}</li>
        <li>${json.boxOffice.grossUSA}</li>
        <li>${json.boxOffice.cumulativeWorldwideGross}</li>
    </div>
    `
    listOfActors = json.actorList.slice(11)
    movieActors.innerHTML =listOfActors.map((actor) => `
    <div id='actor-card>
    <img id='actor-img src'${actor.image}' alt="actor-pic">
    <li id="actor-info">${actor.name} as ${actor.asCharacter}></li>
    </div>
    `)

    
}


// https://imdb-api.com/API/ResizeImage?apikey=k_0esyzcfg&size=240x360&url= come back to this later