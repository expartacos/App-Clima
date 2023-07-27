

const key = "afe5cfc9067db0e240eb5a27e18fcdd5";


function colocarDadosNaTela(dados){
    console.log(dados);
    document.querySelector("h2").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-prvisao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(res => res.json());
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao (){
    const cidade = document.querySelector("input").value;
    buscarCidade(cidade);
}