const React = require('react');
const pokemonArr = require('../Models/pokemon');



class Index extends React.Component {

  render() {

    const { pokemon } = this.props

    return (

      <div style={myStyles.container}>

        <h1>See All the Pokemon</h1>

        <ul>{pokemon.map((pokemon, idx) => (

          <li key={idx}>
            <a href={`/pokemon/${idx}`}>{pokemon.name}</a>


          </li>
        ))}
        </ul>

      </div>

    )
  }
}


const myStyles = {
  container: {
    color: 'blue',
    fontSize: '25px',
    fontFamily:'Arial',
    backgroundColor: 'yellow',
    textTransform: 'capitalize',
  }
};



module.exports = Index;