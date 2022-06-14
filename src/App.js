import { Component } from "react";
import api from "./api";

class App extends Component{
  state = {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('')
    this.setState({filmes: response.data})
  }
  render(){

    const { filmes } = this.state

    return(
      <div>
        <h1>Listar os filmes</h1>
        <ul> 
        {filmes.map(filme =>(
          <li key={filme.show.id}>
            <h2>
            <strong>Título: </strong>
            {filme.show.name}
            </h2>
            <p>{filme.show.url} </p>
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default App;
