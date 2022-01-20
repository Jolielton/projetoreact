import React, {Component} from 'react';

class Equipe extends Component {
    render (){
        return(

            <div>
                <h2>
                   Ola sou o {this.props.nome}
                </h2>
            </div>
        )
    }
} 

function App (){

    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome ="Jolielton" cargo="Programador"/>
        </div>
    )
}

export default App; 