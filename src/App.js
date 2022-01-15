import React from "react";


const Equipe = (props) => {
    return ( 
        <div>
          <Sobre nome = {props.nome} cargo = {props.cargo} idade={props.idade}/>
        <hr/>
        </div>
        

    );
}

const Sobre = (props) => {

    return(
        <div>
            <h2>Ola sou (a) {props.nome} </h2>
            <h3>cargo: {props.cargo} </h3>
            <h3>idade: {props.idade} anos </h3>


        </div>

    );

}

function App(){
    return(
        <div>
        
            <h1>Conheça a nossa equipe:</h1>
            <Equipe nome = "Luckas" cargo = "Programador e Zé polvinho" idade = "21"/>
            <Equipe nome = "Predo" cargo = "Tech Lead e Zé polvinho" idade = "22"/>
            <Equipe nome = "Cleitu" cargo = "Tech Lead e Zé polvinho" idade = "23"/>


        </div>
    
    );
}

export default App;