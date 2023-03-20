const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const input = document.querySelector("input#searchByID");
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((resp)=>{
        if(resp.status === 404){
            document.querySelector("section#movieDetails p").innerText = "";
            document.querySelector("section#movieDetails h4").innerText = "Unable to find movie";
            return;
        }
        resp.json()
        .then(data =>{
            const title = document.querySelector("section#movieDetails h4");
            title.innerText = data.title;
            const summary = document.querySelector("section#movieDetails p");
            summary.innerText = data.summary;
        })  
    })
  });
}

document.addEventListener('DOMContentLoaded', init);