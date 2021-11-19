import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

/*ReactDOM.render("Olá mundo",document.getElementById('root')
);*/

/*let nome = "Renato";

var saudacao = `Olá ${nome}, seja bem vindo!`;
ReactDOM.render(saudacao,document.getElementById('root')
);*/

/*const frutas = [<em>🍓</em>, <strong>🍍</strong>, <span>🍉</span>];
let feira = <p>{frutas}</p>;
ReactDOM.render(frutas , document.getElementById("root"));*/

/*let hoje = new Date();
const semana = ["Domingo" , "Segunda" , "Terça" , "Quarta" , "Quinta" , "Sexta" , "Sabado" , "Domingo"];
let dia = hoje.getDay();
const diaSemana = semana[dia];
const texto = `Hoje é ${diaSemana} sim!`;
ReactDOM.render(texto , document.getElementById("root"));*/

  
  
 
/*let cliquei = () => console.log ("joinha");
let botao = < button onClick = {cliquei}> Clique aqui</button>
  ReactDOM.render (botao , document.getElementById ("root"));*/

 /* const estilo = {
    background: "tomato",
  };
  let quadrado = <div style={estilo}>🍅</div>;*/
 

  /*let site = "Bem vindo ao meu site!";
  let hoje = new Date();

  site = hoje.toLocaleDateString();
  ReactDOM.render (site , document.getElementById ("root"));*/
  
 /* let nome, resposta;
nome = "";
resposta = nome || "braya"; //braya
resposta = nome && "braya"; //""
nome = "zando";
resposta = nome || "braya"; //zando
resposta = nome && "braya"; //braya

ReactDOM.render (site , document.getElementById ("root"));*/

const musicas = ["Domination - Pantera" , "Fear of  the Dark - Iron Maiden" , "The trooper - Iron Maiden" , "Qwerty - Linkin Park" , "Quinta Feira - Cbjr" , "Enter Sandman - Metallica" , "Sic - Slipknot" ];
const minhasMusicas = <ul>{musicas.map(musica => <li key = {musica}>{musica}</li>)}</ul>;

/*function minhasMusicas()
{
  for(let i = 0; i < musicas.length; i++)
  {
     return <li>Oi</li>
  }
}
const musica = [];
//for(i = 0; i < musicas.length; i++)*/
     
ReactDOM.render (<ul>{minhasMusicas}</ul>, document.getElementById ("root"));