const formFiller = document.getElementById("form")
const movieInput = document.getElementById("movie-search")
const movieFiller = document.getElementById("movies")
const placehold = document.getElementById('place-holder-movie')

const key = "k_0esyzcfg"


nowPlaying()
function nowPlaying(){
    let urlNowPLaying = `https://imdb-api.com/en/API/InTheaters/${key}`
    
    fetch(urlNowPLaying).then(response => {return response.json()}).then(json=>{displayNowPlaying(json)})
} 

let displayNowPlaying = (json) =>{

    arrOfMovies = json.items
    
    movieFiller.innerHTML = arrOfMovies.map((movie) =>
        `<div id ='movie-card'>
        <a href="index_2.html" onclick="getMovieId('${movie.id}');"><img id='movie-img' src="${movie.image}" alt ="movie-pic"></a>
        <li id='movie-info'>⭐️ ${movie.imDbRating}</li>
        <li id="movie-info">${movie.fullTitle}</li>
        </div>
        `
    ).join('');

}


formFiller.addEventListener("submit", (event) =>{
    event.preventDefault()

    let movie = movieInput.value
    movieInput.value = "" 

    let movieSearch = `https://imdb-api.com/en/API/SearchMovie/${key}/${movie}`

    fetch(movieSearch)
    .then(response => {return response.json()})
    .then (json=> {
        fill(json)})
    .catch()
})


let fill = (movies) => {
    placehold.innerHTML =""
    movieFiller.innerHTML=''
    arrOfMovies = movies.results 
    arrOfMovies.forEach(movie => {
        
        let movieId = movie.id
        
        let movieCard = document.createElement('div')
        movieCard.className = "movie-card"

        let cardInfo = document.createElement('div')
        cardInfo.setAttribute('id', `${movieId}`)
        cardInfo.className = 'movie-id'
        movieCard.append(cardInfo)

        let movieImg = document.createElement('div')
        movieImg.className = "movie-info"

        if (movie.image.length === 0){
            movieImg.innerHTML = `<a href="index_2.html" onlick='getMovieId((${movie.id}'><img id='movie-img' src="./pics/no-image.jpg" alt ="movie-pic"></a>`
        }
        else{
            movieImg.innerHTML = `<a href="index_2.html" onlick='getMovieId((${movie.id}'><img id='movie-img' src="${movie.image}" alt ="movie-pic"></a>`
        }

        movieCard.append(movieImg)

        yearDesc = movie.description
        yearDesc = yearDesc.split(' ')[0]

        let title = document.createElement("button")
        title.className = 'button1'
        title.setAttribute('id', 'button1')
        title.innerHTML = `${movie.title} (${yearDesc})`
        movieCard.append(title)


        movieFiller.append(movieCard)

       
    });

}

const getMovieId = (movieId) => {
    window.localStorage.setItem("movieId", String(movieId));
}
