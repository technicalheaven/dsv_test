import StarwarApi from "./StarWarApi.js";

async function renderData(){
    const starwarApi = new StarwarApi();
    const {results:peoples}:any = await starwarApi.getPeoples();
    {
    const targetElement = document.querySelector('#peoples .content');
    let html = ''; 
    peoples.forEach((element:any) => {
        html += `<div class="card">`;
        html += `<ul class="list">`;
        html += `<li><div class="title">Name: </div><div>${element?.name}</div></li>`;
        html += `<li><div class="title">Birth Year</div><div>${element?.birth_year}</div></li>`;
        html += `<li><div class="title">Eye Color</div><div>${element?.eye_color}</div></li>`;
        html += `<li><div class="title">Skin Color</div><div>${element?.skin_color}</div></li>`;
        html += "</ul></div>";
    });

    if(targetElement != undefined){
    targetElement.innerHTML += html;
    }
   }

   {
    const {results:films}:any = await starwarApi.getFilms();
    const targetElement = document.querySelector('#films .content');
    let html = ''; 
    films.forEach((element:any) => {
        html += `<div class="card">`;
        html += `<ul class="list">`;
        html += `<li><div class="title">Title: </div><div>${element?.title}</div></li>`;
        html += `<li><div class="title">Director</div><div>${element?.director}</div></li>`;
        html += `<li><div class="title">Producer</div><div>${element?.producer}</div></li>`;
        html += `<li><div class="title">Release Date</div><div>${element?.release_date}</div></li>`;
        html += "</ul></div>";
    });

    if(targetElement != undefined){
    targetElement.innerHTML += html;
    }
}


{
    const {results:species}:any = await starwarApi.getSpecies();
    const targetElement = document.querySelector('#species .content');
    let html = ''; 
    species.forEach((element:any) => {
        html += `<div class="card">`;
        html += `<ul class="list">`;
        html += `<li><div class="title">Name: </div><div>${element?.name}</div></li>`;
        html += `<li><div class="title">Classification</div><div>${element?.classification}</div></li>`;
        html += `<li><div class="title">Designation</div><div>${element?.designation}</div></li>`;
        html += `<li><div class="title">Average LifeSpan</div><div>${element?.average_lifespan}</div></li>`;
        html += "</ul></div>";
    });

    if(targetElement != undefined){
    targetElement.innerHTML += html;
    }
}

    
}

renderData();
