
# The Film Research!

A website that allows you to look at movie information, also shows you what is currently on theaters and movies soon to release.


## Acknowledgements

 - [General Info](#General-Info)
 - [How it works](#How-it-works)
 - [Future Features](#Future-Features)
 - [Problems](#Problems)


## General Info

The website uses a movie database api from imdb-api.com that gives access to information such as movie titles, actors, ratings, and much more.

You can select a movie from the "Coming Soon" tab or the "Now Playing" tab. And if none of those are interesting enough for you, you can look up your own within the search bar.

## How it works

The website triggers the api once a button is clicked on (Coming Soon, Now Playing, Search) and it shows you a list of movies with their titles, IMDb rating and poster.

Comind Soon and Now Playing work the same way as in that they just post whatever is the current movie line up.

Search has to take an input and pull out movies related to that name, the first choice is always going to be the one closest to what was inputted. 

Each poster is linked with its own unique movie ID straight from the api, whatever poster you click on will show you only that specific information regarding that movie.

In the new link, it shows you the information regarding that film from the title, budget and who worked on the movie (Actors, Directors, Writers).

The movies release date is compared to whatever todays day is and checks if it is out or not, if it isn't then the output of the information would be different (less information).

## Future Features

- Add a '+' sign next to movie titles to "add to watch list".
- Add another page dedicated for actor information.
- Add a "similar movies" section when looking at a specific movie.
- Show movie description when hovering the poster.
- Show more ratings from other websites

## Problems

- In the search api, the movies didn't include the ratings so I have to find another way to include the ratings in that portion.
- Did not take into account if some movie information is not available. But should work eitherway. 