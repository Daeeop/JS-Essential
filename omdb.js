import axios from 'axios'
// omdbapi 
// Query(검색) String : 웹사이트 주소 ? apikey = apikey & 속성 = 값 & 속성 = 값 
// axios 활용 하여 영화 정보 가져오기
// 자료를 요청할때는 https 사용 

const fetchMovies = () => {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((res) => {
      console.log(res);
      const title = document.querySelector('h1')
      const img = document.querySelector('img')
      title.textContent = res.data.Search[0].Title
      img.src = res.data.Search[0].Poster
    })
}

fetchMovies()