const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmNjM2RhM2Q0ODlhYTM2YjQzNzM1MDY0YTAxMDg0ZCIsInN1YiI6IjY1MmYyNjA0YTgwMjM2MDBmZDJkMzlhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUf1DxWR1UWNsmL_2319U3IzLAF3Q7BDU6vHZ6rEpZw'
    }
};

// class 선택자 : . 
// id 선택자 : #
const contentLine = document.querySelector(".content-line")

// 검색 기능 구현
// const searchContent = document.querySelector(".search-box")
// searchContent.toUpperCase()
// console.log(searchContent)
// const search_html = ""
const searchText = document.querySelector(".search-box")
function searchContent(searchText) {
    console.log(searchText)
}



// 첫 페이지 화면 출력
viewPage(1)

// 페이지 번호 누르면 해당 페이지 출력
function viewPage(pageNum) {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNum}`, options)
    .then(response => response.json())
    .then(response => {
        let str = "";

        response.results.forEach(movie => {
            console.log(movie)

            const id = movie.id
            const title = movie.original_title
            const overview = movie.overview
            const image = movie.poster_path

            const base_url = "https://image.tmdb.org/t/p/w500"

            const temp_html = `
            <div class="content-box">
                <div class="movie-content" onclick = alert(${id})>
                    <img id="moive-img" class="img" src="${base_url + image}">
                    <h3 id="movie-title">${title}</h3>
                    <p id = "movie-exp" class="movie-exp">${overview}</p>
                </div>        
            </div>`

            str += temp_html
        });

        contentLine.innerHTML = str
    })
    .catch(err => console.error(err));
}