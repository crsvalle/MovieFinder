
const movieId = window.localStorage.getItem('movieId')
console.log(movieId)
const key = 'k_0esyzcfg'


const movieHeader = document.getElementById('movie-header')
const movieItems = document.getElementById('movie-items')
const movieActors = document.getElementById('movie-actors')

const date = new Date();

let day = (`0${date.getDate()}`).slice(-2);
let month = ('0' + (date.getMonth()+1)).slice(-2);
let year = date.getFullYear();

const currentDate = `${year}-${month}-${day}`

movieURL = `https://imdb-api.com/en/API/Title/${key}/${movieId}/FullActor,Posters,Trailer,Ratings`

fetch(movieURL)
.then(response => {return response.json()})
.then(json=>{movieInfo(json)});

const movieInfo = (json) => {

    if(json.releaseDate > currentDate){
        movieHeader.innerHTML = 
        `<div>
        <h1 id='movie-info-title'> ${json.title}</h1>
        <img id='movie-info-img'src="${json.image}" alt ="movie-pic">
        <div id='rating-year'>
            <p id='movie-info-item'> <strong> Releases:</strong>&nbsp ${json.releaseDate} • ${json.runtimeStr}</p> 
        </div>
        </div>
        `
        movieItems.innerHTML =
        `<div>
        <li id='poster-info'><strong>Genre</strong>: ${json.genres}</li>
        <p id='poster-info'>${json.plot}</p>
        <li id='poster-info'> <strong>Director</strong>: ${json.directors}</li>
        <li id='poster-info' > <strong>Writers</strong>: ${json.writers} </li>
        <li id='poster-info'> <strong>Stars</strong>: ${json.starList[0].name} • ${json.starList[1].name} • ${json.starList[2].name}</li>
        </div>
        `
        listOfActors = json.actorList.slice(0, 12)
        movieActors.innerHTML =listOfActors.map((actor) => 
        `
        <div id='actor-card'>
        <img id='actor-img'src="${actor.image}" alt="actor-pic">
        <li id="actor-info"><strong>${actor.name}</strong> <br>${actor.asCharacter}</li>
        </div>
        `).join('')
    
    }

    else{
    movieHeader.innerHTML = 
    `<div>
    <h1 id='movie-info-title'> ${json.title}</h1>
    <img id='movie-info-img'src="${json.image}" alt ="movie-pic">
    <div id='rating-year'>
        <p id='movie-info-item'> ${json.year} • ${json.runtimeStr} • ${json.contentRating} </p> 
        <p id='rating'> ⭐️ ${json.imDbRating}/10 </p>
    </div>
    </div>
    `
    movieItems.innerHTML =
    `<div>
    <li id='poster-info'><strong>Genre</strong>: ${json.genres}</li>
    <p id='poster-info'>${json.plot}</p>
    <li id='poster-info'> <strong>Director</strong>: ${json.directors}</li>
    <li id='poster-info' > <strong>Writers</strong>: ${json.writers} </li>
    <li id='poster-info'> <strong>Stars</strong>: ${json.starList[0].name} • ${json.starList[1].name} • ${json.starList[2].name}</li>
    <div id="budget">
        <p>Budget: ${json.boxOffice.budget}</p>
        <p>Box Office USA: ${json.boxOffice.grossUSA}</p>
        <p>Box Office Worldwide: ${json.boxOffice.cumulativeWorldwideGross}</p>
    </div>
    <li>${json.awards}</li>
    `
    listOfActors = json.actorList.slice(0, 12)
    movieActors.innerHTML =listOfActors.map((actor) => 
    `
    <div id='actor-card'>
    <img id='actor-img'src="${actor.image}" alt="actor-pic">
    <li id="actor-info"><strong>${actor.name}</strong> <br>${actor.asCharacter}</li>
    </div>
    `).join('')

    }
}


// https://imdb-api.com/API/ResizeImage?apikey=k_0esyzcfg&size=240x360&url= come back to this later