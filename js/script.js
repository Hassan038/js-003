(async function () {
    const response = await fetch("../data.json");
    const movies = await response.json();
  
    const selectElement = document.getElementById("my-select");
    const selectYear = document.getElementById("lang");
    const selectGenre = document.getElementById("Genre");
    const selectRate = document.getElementById("rating");
    const showElement = document.getElementById("show-btn");
    let result;
    function outMovies() {
      const selectedElement = selectElement.value;
      const selectedyear = selectYear.value;
      const selectedRating = selectRate.value;
      const selectedGenre = selectGenre.value;
      const result = movies.filter(function (movie) {
        return (
          movie.original_language.toLowerCase() ===
            selectedElement.toLowerCase() 
            &&
          movie.release_date.substring(0, 4) === selectedyear &&
          movie.vote_average === parseFloat(selectedRating) &&
          Array.isArray(movie.genres) &&
          movie.genres.some(
            (genre) => genre.toLowerCase() === selectedGenre.toLowerCase()
          )
        );
      });
      
      console.log(result);
      showTable(result);
    }
    function showTable (result){
        console.log(result);
      let startingCode = '<div class="table-responsive"><table class="table table-hover">'
      let tableHead =  '<thead><tr><th scope="col">#</th><th scope="col">Description</th></tr></thead>'
      let tableBody = '' 
      
      for (let i = 0 ; i < movies.length ; i++) {
          tableBody += '<tr><th scope="row">' + (i +1) +'</th><td>'+movies[i].title + '</td></tr>'
      }
      let endingCode = '</table></div>'
      let table = startingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + endingCode
      showOutput(table)
      }
  
      function showOutput(output) {
      document.getElementById("output").innerHTML = output
  }
    showElement.addEventListener("click", outMovies);
    showElement.addEventListener("click", showTable);
  })();
  
  // function showTable() {
  //   let startingCode =
  //     '<div class="table-responsive"><table class="table table-hover">';
  //   let tableHead =
  //     '<thead><tr><th scope="col">#</th><th scope="col">Description</th><th scope="col">Actions</th></tr></thead>';
  //   let tableBody = "";
  
  //   for (let i = 0; i < movie.length; i++) {
  //     tableBody +=
  //       '<tr><th scope="row">' +
  //       (i + 1) +
  //       "</th><td>" +
  //       movie[i].original_language +
  //       "</td><td>" +
  //       showTable[i].vote_average +
  //       "</td></tr>";
  //   }
  //   let endingCode = "</table></div>";
  // }
  