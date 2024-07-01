const most_popular_main = document.getElementById("most-popular");
const action_main = document.getElementById("action");
const horror_main = document.getElementById("horror");
const documentary_main = document.getElementById("documentary");
const animation_main = document.getElementById("animation");
const scifi_main = document.getElementById("sci-fi");
const romantic_main = document.getElementById("romantic");
const thriller_main = document.getElementById("thriller");
const mystery_main = document.getElementById("mystery");
const adventure_main = document.getElementById("adventure");
const comedy_main = document.getElementById("comedy");
const fantasy_main = document.getElementById("fantasy");
const family_main = document.getElementById("family");
const tv_series_main = document.getElementById("tv-series");
const crime_main = document.getElementById("crime");
const award_winning_main = document.getElementById('award-winning');
const hidden_gems_main = document.getElementById('hidden-gems');
const western_main = document.getElementById('western');
const war_main = document.getElementById('war');
const classic_main = document.getElementById('classic');
const director_main = document.getElementById('director-spotlight');
const korean_main = document.getElementById('korean');
const vietnamese_main = document.getElementById('vietnamese');
const indian_main = document.getElementById("indian");
const musical_main = document.getElementById('musical');
const drama_main = document.getElementById('drama');
const recommended_main = document.getElementById('recommended');

const form = document.getElementById("form");
const search = document.getElementById("search");
const searchButton = document.getElementById("button-search");
const searchTitle = document.getElementById("search-title");
const otherTitle = document.getElementById("other1");

function showSpinner() {
    document.getElementById('myModal').classList.add('modal-visible');
}

function hideSpinner() {
    document.getElementById('myModal').classList.remove('modal-visible');
}

document.addEventListener('DOMContentLoaded', function() {
    const pagination = document.getElementById('most-popular-pagination');
    const genresContainer = document.querySelector('.genres');
    const mainContainer = document.getElementById('most-popular');

    function movePagination() {
        if (window.innerWidth <= 767) {
            mainContainer.parentNode.insertBefore(pagination, mainContainer);
        }
        else {
            genresContainer.appendChild(pagination);
        }
    }

    movePagination();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageMostPopular = 1;
    const totalPages = 60;
    const mostPopularMain = document.getElementById('most-popular');
    const paginationContainer = document.getElementById('most-popular-pagination');

    const fetchAndUpdateMostPopular = () => {
        const mostPopularUrl = `https://${getMovieVerseData()}/3/movie/popular?${generateMovieNames()}${getMovieCode()}`;
        getMovies(mostPopularUrl, mostPopularMain, currentPageMostPopular);
        updatePaginationDisplay();
    };

    const updatePaginationDisplay = () => {
        paginationContainer.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageMostPopular > 1, () => {
            currentPageMostPopular--;
            fetchAndUpdateMostPopular();
        });
        paginationContainer.appendChild(prevButton);

        let startPage = Math.max(currentPageMostPopular - 2, 1);
        let endPage = Math.min(startPage + 4, totalPages);

        if (endPage === totalPages) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainer.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainer.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainer.appendChild(createPageButton(i));
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) paginationContainer.appendChild(createPageButton('...'));
            paginationContainer.appendChild(createPageButton(totalPages));
        }

        const nextButton = createNavigationButton('>', currentPageMostPopular < totalPages, () => {
            currentPageMostPopular++;
            fetchAndUpdateMostPopular();
        });
        paginationContainer.appendChild(nextButton);
    };

    const createNavigationButton = (text, enabled, clickHandler) => {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.onclick = clickHandler;
        }
        return button;
    };

    const createPageButton = (pageNum) => {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.onclick = function() {
                currentPageMostPopular = pageNum;
                fetchAndUpdateMostPopular();
            };
            if (pageNum === currentPageMostPopular) {
                button.classList.add('active');
            }
        }
        return button;
    };

    fetchAndUpdateMostPopular();
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('award-winning');
    const paginationContainerAwardWinning = document.getElementById('award-winning-pagination');
    const genresContainer = document.getElementById('award-winning-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&sort_by=vote_average.desc&vote_count.gte=1000`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('action');
    const paginationContainerAwardWinning = document.getElementById('action-pagination');
    const genresContainer = document.getElementById('action-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=28&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('vietnamese');
    const paginationContainerAwardWinning = document.getElementById('vietnamese-pagination');
    const genresContainer = document.getElementById('vietnamese-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_original_language=vi&sort_by=popularity.desc`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

async function getMovies(url, mainElement, page = 1) {
    showSpinner();

    url += `&page=${page}`;

    const numberOfMovies = calculateMoviesToDisplay();
    let allMovies = [];

    const response = await fetch(url);
    const data = await response.json();
    allMovies = allMovies.concat(data.results);

    const popularityThreshold = 0.5;

    allMovies.sort((a, b) => {
        const popularityDifference = Math.abs(a.popularity - b.popularity);
        if (popularityDifference < popularityThreshold) {
            return b.vote_average - a.vote_average;
        }
        return b.popularity - a.popularity;
    });

    if (allMovies.length > 0) {
        showMovies(allMovies.slice(0, numberOfMovies), mainElement);
    }
    else {
        mainElement.innerHTML = `<p>We're having trouble fetching movies right now. Please try again later.</p>`;
    }

    hideSpinner();
}

function showMovies(movies, mainElement) {
    mainElement.innerHTML = '';
    movies.forEach(movie => {
        const { id, poster_path, title, vote_average, vote_count, overview, genre_ids } = movie;
        const movieEl = document.createElement('div');
        movieEl.style.zIndex = '1000';
        movieEl.classList.add('movie');
        const movieImage = poster_path
            ? `<img src="${IMGPATH + poster_path}" style="cursor: pointer;" alt="${title} poster - loading..." width="150" height="225">`
            : `<div class="no-image" style="text-align: center; padding: 20px;">Image Not Available</div>`;

        const voteAvg = vote_count === 0 ? "Unrated" : vote_average.toFixed(1);
        const ratingClass = vote_count === 0 ? "unrated" : getClassByRate(vote_average);

        movieEl.innerHTML = `
            ${movieImage}
            <div class="movie-info" style="display: flex; justify-content: space-between; align-items: start; cursor: pointer;">
                <h3 style="text-align: left; margin-right: 5px; flex: 1;">${title}</h3>
                <span class="${ratingClass}" style="white-space: nowrap;">${voteAvg}</span>
            </div>
            <div class="overview" style="cursor: pointer;">
                <h4>Overview: </h4>
                ${overview}
            </div>`;

        movieEl.addEventListener('click', () => {
            localStorage.setItem('selectedMovieId', id);
            updateUniqueMoviesViewed(id);
            updateFavoriteGenre(genre_ids);
            window.location.href = 'MovieVerse-Frontend/html/movie-details.html';
            updateMovieVisitCount(id, title);
        });

        mainElement.appendChild(movieEl);
    });
}

function updateFavoriteGenre(genre_ids) {
    if (genre_ids && genre_ids.length > 0) {
        const favoriteGenres = JSON.parse(localStorage.getItem('favoriteGenres')) || [];
        favoriteGenres.push(genre_ids[0]);
        localStorage.setItem('favoriteGenres', JSON.stringify(favoriteGenres));
    }
}

function updateUniqueMoviesViewed(movieId) {
    let viewedMovies = JSON.parse(localStorage.getItem('uniqueMoviesViewed')) || [];

    if (!viewedMovies.includes(movieId)) {
        viewedMovies.push(movieId);
        localStorage.setItem('uniqueMoviesViewed', JSON.stringify(viewedMovies));
    }
}

async function ensureGenreMapIsAvailable() {
    if (!localStorage.getItem('genreMap')) {
        await fetchGenreMap();
    }
}

async function fetchGenreMap() {
    const url = `https://${getMovieVerseData()}/3/genre/movie/list?${generateMovieNames()}${getMovieCode()}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const genreMap = data.genres.reduce((map, genre) => {
            map[genre.id] = genre.name;
            return map;
        }, {});
        localStorage.setItem('genreMap', JSON.stringify(genreMap));
    }
    catch (error) {
        console.log('Error fetching genre map:', error);
    }
}

async function rotateUserStats() {
    await ensureGenreMapIsAvailable();

    const stats = [
        {
            label: "Your Current Time",
            getValue: () => {
                const now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                return `${hours}:${minutes}`;
            }
        },
        { label: "Most Visited Movie", getValue: getMostVisitedMovie },
        { label: "Most Visited Director", getValue: getMostVisitedDirector },
        { label: "Most Visited Actor", getValue: getMostVisitedActor },
        {
            label: "Movies Discovered",
            getValue: () => {
                const viewedMovies = JSON.parse(localStorage.getItem('uniqueMoviesViewed')) || [];
                return viewedMovies.length;
            }
        },
        {
            label: "Favorite Movies",
            getValue: () => {
                const favoritedMovies = JSON.parse(localStorage.getItem('favoritesMovies')) || [];
                return favoritedMovies.length;
            }
        },
        {
            label: "Favorite Genre",
            getValue: () => {
                const mostCommonGenreCode = getMostCommonGenre();
                const genreMap = JSON.parse(localStorage.getItem('genreMap')) || {};
                return genreMap[mostCommonGenreCode] || 'Not Available';
            }
        },
        { label: "Watchlists Created", getValue: () => localStorage.getItem('watchlistsCreated') || 0 },
        { label: "Average Movie Rating", getValue: () => localStorage.getItem('averageMovieRating') || 'Not Rated' },
        {
            label: "Directors Discovered",
            getValue: () => {
                const viewedDirectors = JSON.parse(localStorage.getItem('uniqueDirectorsViewed')) || [];
                return viewedDirectors.length;
            }
        },
        {
            label: "Actors Discovered",
            getValue: () => {
                const viewedActors = JSON.parse(localStorage.getItem('uniqueActorsViewed')) || [];
                return viewedActors.length;
            }
        },
        { label: "Your Trivia Accuracy", getValue: getTriviaAccuracy },
    ];

    let currentStatIndex = 0;

    function updateStatDisplay() {
        const currentStat = stats[currentStatIndex];
        document.getElementById('stats-label').textContent = currentStat.label + ':';
        document.getElementById('stats-display').textContent = currentStat.getValue();
        currentStatIndex = (currentStatIndex + 1) % stats.length;
    }

    updateStatDisplay();

    const localTimeDiv = document.getElementById('local-time');
    let statRotationInterval = setInterval(updateStatDisplay, 3000);

    localTimeDiv.addEventListener('click', () => {
        clearInterval(statRotationInterval);
        updateStatDisplay();
        statRotationInterval = setInterval(updateStatDisplay, 3000);
    });
}

function updateMovieVisitCount(movieId, movieTitle) {
    let movieVisits = JSON.parse(localStorage.getItem('movieVisits')) || {};
    if (!movieVisits[movieId]) {
        movieVisits[movieId] = { count: 0, title: movieTitle };
    }
    movieVisits[movieId].count += 1;
    localStorage.setItem('movieVisits', JSON.stringify(movieVisits));
}

function getMostVisitedMovie() {
    const movieVisits = JSON.parse(localStorage.getItem('movieVisits')) || {};
    let mostVisitedMovie = '';
    let maxVisits = 0;

    for (const movieId in movieVisits) {
        if (movieVisits[movieId].count > maxVisits) {
            mostVisitedMovie = movieVisits[movieId].title;
            maxVisits = movieVisits[movieId].count;
        }
    }
    return mostVisitedMovie || 'Not Available';
}

document.addEventListener('DOMContentLoaded', async () => {
    let currentPageRecommended = 1;
    const totalPagesRecommended = 60; // Adjust this based on actual total pages for recommendations
    const recommendedMain = document.getElementById('recommended');
    const paginationContainerRecommended = document.getElementById('recommended-pagination');
    const genresContainer = document.getElementById('recommendedDIV');

    function movePagination() {
        if (window.innerWidth <= 767) {
            recommendedMain.parentNode.insertBefore(paginationContainerRecommended, recommendedMain);
        }
        else {
            genresContainer.appendChild(paginationContainerRecommended);
        }
    }

    async function generateRecommendations(pageNum = currentPageRecommended) {
        showSpinner();

        currentPageRecommended = pageNum;
        const mostCommonGenre = getMostCommonGenre();
        const mostVisitedMovieGenre = await getMostVisitedMovieGenre();

        recommendedMain.innerHTML = '';

        if (!mostVisitedMovieGenre || !mostCommonGenre) {
            recommendedMain.innerHTML = `<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <p style="text-align: center; font-size: 20px;">
                    Start exploring and rating movies or add them to your favorites to get personalized recommendations.
                </p>
            </div>`;
            return;
        }

        const totalMoviesToDisplay = calculateMoviesToDisplay();
        const commonGenreUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=${mostCommonGenre}&sort_by=popularity.desc&vote_count.gte=10&page=${currentPageRecommended}`;
        const visitedGenreUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=${mostVisitedMovieGenre}&sort_by=popularity.desc&vote_count.gte=10&page=${currentPageRecommended}`;

        await fetchAndDisplayMovies(commonGenreUrl, totalMoviesToDisplay, recommendedMain);
        await fetchAndDisplayMovies(visitedGenreUrl, totalMoviesToDisplay, recommendedMain);
        updatePaginationDisplayRecommended();

        hideSpinner();
    }

    function updatePaginationDisplayRecommended() {
        paginationContainerRecommended.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageRecommended > 1, () => generateRecommendations(currentPageRecommended - 1));
        paginationContainerRecommended.appendChild(prevButton);

        let startPage = Math.max(currentPageRecommended - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesRecommended);
        if (endPage === totalPagesRecommended) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerRecommended.appendChild(createPageButton(1, generateRecommendations));
            if (startPage > 2) paginationContainerRecommended.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerRecommended.appendChild(createPageButton(i, generateRecommendations, i === currentPageRecommended));
        }

        if (endPage < totalPagesRecommended) {
            if (endPage < totalPagesRecommended - 1) paginationContainerRecommended.appendChild(createPageButton('...'));
            paginationContainerRecommended.appendChild(createPageButton(totalPagesRecommended, generateRecommendations));
        }

        const nextButton = createNavigationButton('>', currentPageRecommended < totalPagesRecommended, () => generateRecommendations(currentPageRecommended + 1));
        paginationContainerRecommended.appendChild(nextButton);
    }

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum, fetchFunction, isActive) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button' + (isActive ? ' active' : '');
        if (pageNum !== '...') {
            button.addEventListener('click', () => fetchFunction(pageNum));
        }
        else {
            button.disabled = true;
        }
        return button;
    }

    movePagination();
    await generateRecommendations();
    window.addEventListener('resize', movePagination);
});

async function fetchAndDisplayMovies(url, count, mainElement) {
    const response = await fetch(`${url}&page=1`);
    const data = await response.json();
    const movies = data.results.slice(0, count);
    movies.sort(() => Math.random() - 0.5);

    showMovies(movies, mainElement);
}


async function getMostVisitedMovieGenre() {
    const movieVisits = JSON.parse(localStorage.getItem('movieVisits')) || {};
    let mostVisitedGenre = null;
    let maxVisits = 0;

    for (const movieId in movieVisits) {
        const visits = movieVisits[movieId];
        if (visits.count > maxVisits) {
            maxVisits = visits.count;
            mostVisitedGenre = await fetchGenreForMovie(movieId);
        }
    }

    return mostVisitedGenre;
}

async function fetchGenreForMovie(movieId) {
    const movieDetailsUrl = `https://${getMovieVerseData()}/3/movie/${movieId}?${generateMovieNames()}${getMovieCode()}`;
    const response = await fetch(movieDetailsUrl);
    const movieDetails = await response.json();
    return movieDetails.genres[0] ? movieDetails.genres[0].id : null;
}

function getMostVisitedActor() {
    const actorVisits = JSON.parse(localStorage.getItem('actorVisits')) || {};
    let mostVisitedActor = '';
    let maxVisits = 0;

    for (const actorId in actorVisits) {
        if (actorVisits[actorId].count > maxVisits) {
            mostVisitedActor = actorVisits[actorId].name;
            maxVisits = actorVisits[actorId].count;
        }
    }

    return mostVisitedActor || 'Not Available';
}

function getMostVisitedDirector() {
    const directorVisits = JSON.parse(localStorage.getItem('directorVisits')) || {};
    let mostVisitedDirector = '';
    let maxVisits = 0;

    for (const directorId in directorVisits) {
        if (directorVisits[directorId].count > maxVisits) {
            mostVisitedDirector = directorVisits[directorId].name;
            maxVisits = directorVisits[directorId].count;
        }
    }
    return mostVisitedDirector || 'Not Available';
}

function getTriviaAccuracy() {
    let triviaStats = JSON.parse(localStorage.getItem('triviaStats')) || { totalCorrect: 0, totalAttempted: 0 };
    if (triviaStats.totalAttempted === 0) {
        return 'No trivia attempted';
    }
    let accuracy = (triviaStats.totalCorrect / triviaStats.totalAttempted) * 100;
    return `${accuracy.toFixed(1)}% accuracy`;
}

function getMostCommonGenre() {
    const favoriteGenresArray = JSON.parse(localStorage.getItem('favoriteGenres')) || [];
    const genreCounts = favoriteGenresArray.reduce((acc, genre) => {
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
    }, {});

    let mostCommonGenre = '';
    let maxCount = 0;

    for (const genre in genreCounts) {
        if (genreCounts[genre] > maxCount) {
            mostCommonGenre = genre;
            maxCount = genreCounts[genre];
        }
    }

    return mostCommonGenre || 'Not Available';
}

const movieCode = {
    part1: 'YzVhMjBjODY=',
    part2: 'MWFjZjdiYjg=',
    part3: 'ZDllOTg3ZGNjN2YxYjU1OA=='
};

document.addEventListener('DOMContentLoaded', rotateUserStats);

async function showMovieOfTheDay() {
    const year = new Date().getFullYear();
    const url = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&sort_by=vote_average.desc&vote_count.gte=100&primary_release_year=${year}&vote_average.gte=7`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results;

        if (movies.length > 0) {
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];
            localStorage.setItem('selectedMovieId', randomMovie.id);
            window.location.href = 'MovieVerse-Frontend/html/movie-details.html';
        }
        else {
            fallbackMovieSelection();
        }
    }
    catch (error) {
        console.log('Error fetching movie:', error);
        fallbackMovieSelection();
    }
}

function fallbackMovieSelection() {
    const fallbackMovies = [432413, 299534, 1726, 562, 118340, 455207, 493922, 447332, 22970, 530385, 27205, 264660, 120467, 603, 577922, 76341, 539, 419704, 515001, 118340, 424, 98];
    const randomFallbackMovie = fallbackMovies[Math.floor(Math.random() * fallbackMovies.length)];
    localStorage.setItem('selectedMovieId', randomFallbackMovie);
    window.location.href = 'MovieVerse-Frontend/html/movie-details.html';
}

function calculateMoviesToDisplay() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 689.9) return 6; // 1 movie per row
    if (screenWidth <= 1021.24) return 20; // 2 movies per row
    if (screenWidth <= 1353.74) return 21; // 3 movies per row
    if (screenWidth <= 1684.9) return 20; // 4 movies per row
    if (screenWidth <= 2017.49) return 20; // 5 movies per row
    if (screenWidth <= 2349.99) return 18; // 6 movies per row
    if (screenWidth <= 2681.99) return 21; // 7 movies per row
    if (screenWidth <= 3014.49) return 24; // 8 movies per row
    if (screenWidth <= 3345.99) return 27; // 9 movies per row
    if (screenWidth <= 3677.99) return 20; // 10 movies per row
    if (screenWidth <= 4009.99) return 22; // 11 movies per row
    if (screenWidth <= 4340.99) return 24; // 12 movies per row
    if (screenWidth <= 4673.49) return 26; // 13 movies per row
    if (screenWidth <= 5005.99) return 28; // 14 movies per row
    if (screenWidth <= 5337.99) return 30; // 15 movies per row
    if (screenWidth <= 5669.99) return 32; // 16 movies per row
    if (screenWidth <= 6001.99) return 34; // 17 movies per row
    if (screenWidth <= 6333.99) return 36; // 18 movies per row
    if (screenWidth <= 6665.99) return 38; // 19 movies per row
    if (screenWidth <= 6997.99) return 40; // 20 movies per row
    if (screenWidth <= 7329.99) return 42; // 21 movies per row
    if (screenWidth <= 7661.99) return 44; // 22 movies per row
    if (screenWidth <= 7993.99) return 46; // 23 movies per row
    if (screenWidth <= 8325.99) return 48; // 24 movies per row
    return 20;
}

function getClassByRate(vote){
    if (vote >= 8) {
        return 'green';
    }
    else if (vote >= 5) {
        return 'orange';
    }
    else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = document.getElementById('search').value;
    localStorage.setItem('searchQuery', searchQuery);
    window.location.href = 'MovieVerse-Frontend/html/search.html';
});

function toggleNav() {
    const sideNav = document.getElementById('side-nav');
    sideNav.classList.toggle('manual-toggle');
    adjustNavBar();
}

function removeNavBar() {
    const sideNav = document.getElementById('side-nav');
    if (sideNav.classList.contains('manual-toggle')) {
        sideNav.classList.remove('manual-toggle');
    }

    adjustNavBar();
}

function adjustNavBar() {
    const sideNav = document.getElementById('side-nav');
    if (sideNav.classList.contains('manual-toggle')) {
        sideNav.style.left = '0px';
    }
    else {
        sideNav.style.left = '-250px';
    }
}

document.addEventListener('mousemove', function(event) {
    const sideNav = document.getElementById('side-nav');
    if (event.clientX < 10 && !sideNav.classList.contains('manual-toggle')) {
        sideNav.style.left = '0';
    }
});

document.getElementById('side-nav').addEventListener('mouseleave', function() {
    const sideNav = document.getElementById('side-nav');
    if (!sideNav.classList.contains('manual-toggle')) {
        sideNav.style.left = '-250px';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('indian');
    const paginationContainerAwardWinning = document.getElementById('indian-pagination');
    const genresContainer = document.getElementById('indian-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_original_language=hi&sort_by=popularity.desc`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('korean');
    const paginationContainerAwardWinning = document.getElementById('korean-pagination');
    const genresContainer = document.getElementById('korean-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_original_language=ko&sort_by=vote_average.desc,popularity.desc&vote_count.gte=10&vote_average.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('tv-series');
    const paginationContainerAwardWinning = document.getElementById('tv-series-pagination');
    const genresContainer = document.getElementById('tv-series-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10770&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('hidden-gems');
    const paginationContainerAwardWinning = document.getElementById('hidden-gems-pagination');
    const genresContainer = document.getElementById('hidden-gems-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&sort_by=vote_average.desc&vote_count.gte=100&vote_average.gte=7&popularity.lte=10`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('horror');
    const paginationContainerAwardWinning = document.getElementById('horror-pagination');
    const genresContainer = document.getElementById('horror-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=27&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

const DATABASEURL = `https://${getMovieVerseData()}/3/discover/movie?sort_by=popularity.desc&${generateMovieNames()}${getMovieCode()}`;
const IMGPATH = `https://image.tmdb.org/t/p/w500`;
const SEARCHPATH = `https://${getMovieVerseData()}/3/search/movie?&${generateMovieNames()}${getMovieCode()}&query=`;
const ACTIONpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=28&sort_by=popularity.desc&vote_count.gte=8`;
const HORRORpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=27&sort_by=popularity.desc&vote_count.gte=8`;
const DOCUMENTARYRpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=99&sort_by=popularity.desc&vote_count.gte=8`;
const ANIMATIONpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=16&sort_by=popularity.desc&vote_count.gte=8`;
const SCIFIpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=878&sort_by=popularity.desc&vote_count.gte=8`;
const ROMANTICpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10749&sort_by=popularity.desc&vote_count.gte=8`;
const THRILLERpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=53&sort_by=popularity.desc&vote_count.gte=8`;
const MYSTERYpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=9648&sort_by=popularity.desc&vote_count.gte=8`;
const ADVENTUREpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=12&sort_by=popularity.desc&vote_count.gte=8`;
const COMEDYpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=35&sort_by=popularity.desc&vote_count.gte=8`;
const FANTASYpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=14&sort_by=popularity.desc&vote_count.gte=8`;
const FAMILYpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10751&sort_by=popularity.desc&vote_count.gte=8`;
const TVpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10770&sort_by=popularity.desc&vote_count.gte=8`;
const CRIMEpath = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=80&sort_by=popularity.desc&vote_count.gte=8`;
const VIETNAMESE_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_original_language=vi&sort_by=popularity.desc`;
const KOREAN_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_original_language=ko&sort_by=vote_average.desc,popularity.desc&vote_count.gte=10&vote_average.gte=8`;
const INDIAN_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_original_language=hi&sort_by=popularity.desc`;
const HIDDEN_GEMS_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&sort_by=vote_average.desc&vote_count.gte=100&vote_average.gte=7&popularity.lte=10`;
const AWARD_WINNING_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&sort_by=vote_average.desc&vote_count.gte=1000`;
const CLASSIC_MOVIES_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&sort_by=popularity.desc&release_date.lte=1980`;
const MUSICAL_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10402&sort_by=popularity.desc&vote_count.gte=8`;
const DRAMA_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=18&sort_by=popularity.desc&vote_count.gte=8`;
const WESTERN_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=37&sort_by=popularity.desc&vote_count.gte=8`;
const WAR_PATH = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10752&sort_by=popularity.desc&vote_count.gte=8`;

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('classic');
    const paginationContainerAwardWinning = document.getElementById('classic-pagination');
    const genresContainer = document.getElementById('classic-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&sort_by=popularity.desc&release_date.lte=1980`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('drama');
    const paginationContainerAwardWinning = document.getElementById('drama-pagination');
    const genresContainer = document.getElementById('drama-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=18&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('musical');
    const paginationContainerAwardWinning = document.getElementById('musical-pagination');
    const genresContainer = document.getElementById('musical-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10402&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('crime');
    const paginationContainerAwardWinning = document.getElementById('crime-pagination');
    const genresContainer = document.getElementById('crime-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=80&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('family');
    const paginationContainerAwardWinning = document.getElementById('family-pagination');
    const genresContainer = document.getElementById('family-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10751&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('fantasy');
    const paginationContainerAwardWinning = document.getElementById('fantasy-pagination');
    const genresContainer = document.getElementById('fantasy-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=14&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('comedy');
    const paginationContainerAwardWinning = document.getElementById('comedy-pagination');
    const genresContainer = document.getElementById('comedy-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=35&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('adventure');
    const paginationContainerAwardWinning = document.getElementById('adventure-pagination');
    const genresContainer = document.getElementById('adventure-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=12&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('mystery');
    const paginationContainerAwardWinning = document.getElementById('mystery-pagination');
    const genresContainer = document.getElementById('mystery-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=9648&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('thriller');
    const paginationContainerAwardWinning = document.getElementById('thriller-pagination');
    const genresContainer = document.getElementById('thriller-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=53&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('romantic');
    const paginationContainerAwardWinning = document.getElementById('romantic-pagination');
    const genresContainer = document.getElementById('romantic-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10749&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('sci-fi');
    const paginationContainerAwardWinning = document.getElementById('sci-fi-pagination');
    const genresContainer = document.getElementById('sci-fi-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=878&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('animation');
    const paginationContainerAwardWinning = document.getElementById('animation-pagination');
    const genresContainer = document.getElementById('animation-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=16&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);

        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('documentary');
    const paginationContainerAwardWinning = document.getElementById('documentary-pagination');
    const genresContainer = document.getElementById('documentary-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=99&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('western');
    const paginationContainerAwardWinning = document.getElementById('western-pagination');
    const genresContainer = document.getElementById('western-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=37&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentPageAwardWinning = 1;
    const totalPagesAwardWinning = 60;
    const awardWinningMain = document.getElementById('war');
    const paginationContainerAwardWinning = document.getElementById('war-pagination');
    const genresContainer = document.getElementById('war-div');

    function movePagination() {
        if (window.innerWidth <= 767) {
            awardWinningMain.parentNode.insertBefore(paginationContainerAwardWinning, awardWinningMain);
        }
        else {
            genresContainer.appendChild(paginationContainerAwardWinning);
        }
    }

    const fetchAndUpdateAwardWinning = () => {
        const awardWinningUrl = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_genres=10752&sort_by=popularity.desc&vote_count.gte=8`;
        getMovies(awardWinningUrl, awardWinningMain, currentPageAwardWinning);
        updatePaginationDisplayAwardWinning();
    };

    const updatePaginationDisplayAwardWinning = () => {
        paginationContainerAwardWinning.innerHTML = '';

        const prevButton = createNavigationButton('<', currentPageAwardWinning > 1, () => {
            currentPageAwardWinning--;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(prevButton);

        let startPage = Math.max(currentPageAwardWinning - 2, 1);
        let endPage = Math.min(startPage + 4, totalPagesAwardWinning);
        if (endPage === totalPagesAwardWinning) startPage = Math.max(endPage - 4, 1);

        if (startPage > 1) {
            paginationContainerAwardWinning.appendChild(createPageButton(1));
            if (startPage > 2) paginationContainerAwardWinning.appendChild(createPageButton('...'));
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationContainerAwardWinning.appendChild(createPageButton(i));
        }

        if (endPage < totalPagesAwardWinning) {
            if (endPage < totalPagesAwardWinning - 1) paginationContainerAwardWinning.appendChild(createPageButton('...'));
            paginationContainerAwardWinning.appendChild(createPageButton(totalPagesAwardWinning));
        }

        const nextButton = createNavigationButton('>', currentPageAwardWinning < totalPagesAwardWinning, () => {
            currentPageAwardWinning++;
            fetchAndUpdateAwardWinning();
        });
        paginationContainerAwardWinning.appendChild(nextButton);
    };

    function createNavigationButton(text, enabled, clickHandler) {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = !enabled;
        button.className = 'nav-button';
        if (enabled) {
            button.addEventListener('click', clickHandler);
        }
        return button;
    }

    function createPageButton(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.className = 'page-button';
        if (pageNum === '...') {
            button.disabled = true;
        }
        else {
            button.addEventListener('click', () => {
                currentPageAwardWinning = pageNum;
                fetchAndUpdateAwardWinning();
            });
            if (pageNum === currentPageAwardWinning) {
                button.classList.add('active');
            }
        }
        return button;
    }

    movePagination();
    fetchAndUpdateAwardWinning();
    window.addEventListener('resize', movePagination);
});

getMovies(DATABASEURL, most_popular_main);
getMovies(ACTIONpath, action_main);
getMovies(HORRORpath, horror_main);
getMovies(DOCUMENTARYRpath, documentary_main);
getMovies(ANIMATIONpath, animation_main);
getMovies(SCIFIpath, scifi_main);
getMovies(ROMANTICpath, romantic_main);
getMovies(THRILLERpath, thriller_main);
getMovies(MYSTERYpath, mystery_main);
getMovies(ADVENTUREpath, adventure_main);
getMovies(COMEDYpath, comedy_main);
getMovies(FANTASYpath, fantasy_main);
getMovies(FAMILYpath, family_main);
getMovies(TVpath, tv_series_main);
getMovies(CRIMEpath, crime_main);
getMovies(AWARD_WINNING_PATH, award_winning_main);
getMovies(HIDDEN_GEMS_PATH, hidden_gems_main);
getMovies(CLASSIC_MOVIES_PATH, classic_main);
getMovies(WESTERN_PATH, western_main);
getMovies(WAR_PATH, war_main);
getMovies(VIETNAMESE_PATH, vietnamese_main);
getMovies(KOREAN_PATH, korean_main);
getMovies(MUSICAL_PATH, musical_main);
getMovies(DRAMA_PATH, drama_main);
getMovies(INDIAN_PATH, indian_main);

const directors = [
    { name: "Alfred Hitchcock", id: "2636" },
    { name: "Steven Spielberg", id: "488" },
    { name: "Martin Scorsese", id: "1032" },
    { name: "Quentin Tarantino", id: "138" },
    { name: "Christopher Nolan", id: "525" },
    { name: "Stanley Kubrick", id: "240" },
    { name: "Bong Joon-ho", id: "21684" },
    { name: "David Fincher", id: "7467" },
    { name: "James Cameron", id: "2710" },
    { name: "Francis Ford Coppola", id: "1776" },
    { name: "Tim Burton", id: "510" },
    { name: "Ridley Scott", id: "578" },
    { name: "Joel Coen", id: "1223" },
    { name: "Spike Lee", id: "5281" },
    { name: "Woody Allen", id: "1243" },
    { name: "Peter Jackson", id: "108" },
    { name: "Oliver Stone", id: "1152" },
    { name: "David Lynch", id: "5602" },
    { name: "Roman Polanski", id: "3556" },
    { name: "Wes Anderson", id: "5655"},
    { name: "Sergio Leone", id: "4385" },
    { name: "Akira Kurosawa", id: "5026" },
    { name: "Federico Fellini", id: "4415" },
    { name: "John Ford", id: "8500" },
    { name: "Fritz Lang", id: "68" },
    { name: "Frank Capra", id: "2662" },
];

let currentDirectorIndex = 0;
updateDirectorSpotlight();

function changeDirector() {
    currentDirectorIndex++;

    if (currentDirectorIndex >= directors.length) {
        currentDirectorIndex = 0;
    }

    updateDirectorSpotlight();
}

setInterval(changeDirector, 3600000);

function updateDirectorSpotlight() {
    const director = directors[currentDirectorIndex];
    document.getElementById('spotlight-director-name').textContent = director.name;

    const url = `https://${getMovieVerseData()}/3/discover/movie?${generateMovieNames()}${getMovieCode()}&with_people=${director.id}&sort_by=popularity.desc&sort_by=vote_average.desc`;
    getDirectorSpotlight(url);
}

function getMovieVerseData(input) {
    return String.fromCharCode(97, 112, 105, 46, 116, 104, 101, 109, 111, 118, 105, 101, 100, 98, 46, 111, 114, 103);
}

function generateMovieNames(input) {
    return String.fromCharCode(97, 112, 105, 95, 107, 101, 121, 61);
}

function getMovieCode() {
    return atob(movieCode.part1) + atob(movieCode.part2) + atob(movieCode.part3);
}

async function getDirectorSpotlight(url) {
    const numberOfMovies = calculateMoviesToDisplay();
    const resp = await fetch(url);
    const respData = await resp.json();
    let allMovies = [];

    if (respData.results.length > 0) {
        allMovies = respData.results.slice(0, numberOfMovies);
        showMoviesDirectorSpotlight(allMovies);
    }
}

function showMoviesDirectorSpotlight(movies) {
    director_main.innerHTML = '';
    movies.forEach((movie) => {
        const { id, poster_path, title, vote_average } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.style.zIndex = '1000';

        const movieImage = poster_path
            ? `<img src="${IMGPATH + poster_path}" alt="${title}" style="cursor: pointer;" />`
            : `<div class="no-image" style="text-align: center; padding: 20px;">Image Not Available</div>`;

        const voteAvg = vote_average > 0 ? vote_average.toFixed(1) : "Unrated";
        const ratingClass = vote_average > 0 ? getClassByRate(vote_average) : "unrated";

        movieEl.innerHTML = `
            ${movieImage}
            <div class="movie-info" style="display: flex; justify-content: space-between; align-items: start; cursor: pointer;">
                <h3 style="flex: 1; text-align: left; margin-right: 5px;">${title}</h3>
                <span class="${ratingClass}" style="white-space: nowrap;">${voteAvg}</span>
            </div>
            <div class="overview" style="cursor: pointer;">
                <h4>Overview: </h4>
                ${movie.overview}
            </div>`;

        movieEl.addEventListener('click', () => {
            localStorage.setItem('selectedMovieId', id);
            window.location.href = 'MovieVerse-Frontend/html/movie-details.html';
            updateMovieVisitCount(id, title);
        });

        director_main.appendChild(movieEl);
    });
}

function handleSignInOut() {
    const isSignedIn = JSON.parse(localStorage.getItem('isSignedIn')) || false;

    if (isSignedIn) {
        localStorage.setItem('isSignedIn', JSON.stringify(false));
        alert('You have been signed out.');
    }
    else {
        window.location.href = 'MovieVerse-Frontend/html/sign-in.html';
        return;
    }

    updateSignInButtonState();
}

function updateSignInButtonState() {
    const isSignedIn = JSON.parse(localStorage.getItem('isSignedIn')) || false;

    const signInText = document.getElementById('signInOutText');
    const signInIcon = document.getElementById('signInIcon');
    const signOutIcon = document.getElementById('signOutIcon');

    if (isSignedIn) {
        signInText.textContent = 'Sign Out';
        signInIcon.style.display = 'none';
        signOutIcon.style.display = 'inline-block';
    }
    else {
        signInText.textContent = 'Sign In';
        signInIcon.style.display = 'inline-block';
        signOutIcon.style.display = 'none';
    }

    const mobileSignInText = document.getElementById('mobileSignInOutText');
    const mobileSignInIcon = document.getElementById('mobileSignInIcon');
    const mobileSignOutIcon = document.getElementById('mobileSignOutIcon');

    if (isSignedIn) {
        mobileSignInText.textContent = 'Sign Out';
        mobileSignInIcon.style.display = 'none';
        mobileSignOutIcon.style.display = 'inline-block';
    }
    else {
        mobileSignInText.textContent = 'Sign In';
        mobileSignInIcon.style.display = 'inline-block';
        mobileSignOutIcon.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkAndClearLocalStorage();
    updateSignInButtonState();
    document.getElementById('googleSignInBtn').addEventListener('click', handleSignInOut);
});

function applySettings() {
    const savedBg = localStorage.getItem('backgroundImage');
    const savedTextColor = localStorage.getItem('textColor');
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedBg) {
        document.body.style.backgroundImage = `url('${savedBg}')`;
    }
    if (savedTextColor) {
        applyTextColor(savedTextColor);
    }
    if (savedFontSize) {
        const size = savedFontSize === 'small' ? '12px' : savedFontSize === 'medium' ? '16px' : '20px';
        document.body.style.fontSize = size;
    }
}

function applyTextColor(color) {
    document.querySelectorAll('h1, h2, h3, p, a, span, div, button, input, select, textarea, label, li')
        .forEach(element => {
            element.style.color = color;
        });
}

function handleSearch() {
    const searchQuery = document.getElementById('search').value;
    localStorage.setItem('searchQuery', searchQuery);
    window.location.href = 'MovieVerse-Frontend/html/search.html';
}

function checkAndClearLocalStorage() {
    const hasCleared = localStorage.getItem('hasUserClearedMovieVerseData2');
    if (!hasCleared) {
        clearMovieVerseLocalStorage();
        localStorage.setItem('hasUserClearedMovieVerseData2', 'true');
        window.location.reload();
    }
}

function clearMovieVerseLocalStorage() {
    localStorage.removeItem('favorites');
    localStorage.removeItem('localWatchlists');
    localStorage.removeItem('selectedMovieId');
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem('selectedDirectorId');
    localStorage.removeItem('selectedActorId');
    localStorage.removeItem('selectedCompanyId');
    localStorage.removeItem('selectedTvSeriesId');
    localStorage.removeItem('movieVisits');
    localStorage.removeItem('actorVisits');
    localStorage.removeItem('directorVisits');
    localStorage.removeItem('movieRatings');
    localStorage.removeItem('triviaStats');
    localStorage.removeItem('uniqueMoviesViewed');
    localStorage.removeItem('uniqueDirectorsViewed');
    localStorage.removeItem('uniqueActorsViewed');
    localStorage.removeItem('uniqueCompaniesViewed');
    localStorage.removeItem('favoriteGenres');
    localStorage.removeItem('watchlistsCreated');
    localStorage.removeItem('averageMovieRating');
    localStorage.removeItem('backgroundImage');
    localStorage.removeItem('textColor');
    localStorage.removeItem('fontSize');
    localStorage.removeItem('moviesFavorited');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('selectedTVSeriesId');
    localStorage.removeItem('favoritesTVSeries');
    localStorage.removeItem('currentlySignedInMovieVerseUser');
    localStorage.removeItem('hasUserClearedMovieVerseData');
    localStorage.removeItem('selectedCategory');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('watchlists');
    localStorage.removeItem('favoritesMovies');
}

document.addEventListener('DOMContentLoaded', () => {
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationModal = document.getElementById('notificationModal');

    notificationBtn.addEventListener('click', () => {
        notificationModal.style.display = notificationModal.style.display === 'none' ? 'block' : 'none';
        fetchNewReleases();
    });

    window.addEventListener('click', (event) => {
        if (event.target === notificationModal) {
            notificationModal.style.display = 'none';
        }
    });
});

function addCloseButton() {
    const newReleasesList = document.getElementById('newReleasesList');
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.id = 'closeModalButton';
    closeButton.style = 'display: block; margin: 20px auto; margin-bottom: 0; font: inherit; font-size: 15.5px; padding: 5px 15px;';

    closeButton.addEventListener('click', () => {
        const notificationModal = document.getElementById('notificationModal');
        notificationModal.style.display = 'none';
    });

    newReleasesList.appendChild(closeButton);
}

async function fetchNewReleases() {
    const URL = `https://${getMovieVerseData()}/3/movie/now_playing?${generateMovieNames()}${getMovieCode()}&language=en-US&page=1`;
    const newReleasesList = document.getElementById('newReleasesList');

    try {
        const response = await fetch(URL);
        const data = await response.json();
        const movies = data.results;

        const lastVisit = localStorage.getItem('lastVisit') || new Date(0);
        const lastVisitDate = new Date(lastVisit);

        newReleasesList.innerHTML = '<h4 style="font-size: 18px">Notifications</h4><h5 style="font-size: 16px; margin-bottom: 0; margin-top: 10px">New Releases Since Your Last Visit:</h5>';

        let newReleaseFound = false;

        movies.forEach(movie => {
            const releaseDate = new Date(movie.release_date);
            if (releaseDate > lastVisitDate) {
                newReleaseFound = true;
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = movie.title;
                a.href = "javascript:void(0);";
                a.style.color = 'white';
                a.classList.add('notification-link');
                a.addEventListener('click', () => {
                    localStorage.setItem('selectedMovieId', movie.id);
                    window.location.href = 'MovieVerse-Frontend/html/movie-details.html';
                });

                li.appendChild(a);
                newReleasesList.appendChild(li);
            }
        });

        if (!newReleaseFound) {
            const noNewReleasesMsg = document.createElement('p');
            noNewReleasesMsg.textContent = 'No new releases since your last visit.';
            noNewReleasesMsg.style.textAlign = 'center';
            noNewReleasesMsg.style.color = 'white';
            noNewReleasesMsg.style.fontSize = '13.5px';
            noNewReleasesMsg.style.marginTop = '20px';
            newReleasesList.appendChild(noNewReleasesMsg);
        }

        localStorage.setItem('lastVisit', new Date().toISOString());
    }

    catch (error) {
        console.log('Error fetching new releases:', error);
        newReleasesList.innerHTML = '<li>Error fetching new releases.</li>';
    }

    addCloseButton();
}

if (!localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', new Date().toISOString());
}
