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

            <a href={`/pokemon/${idx}`}>
              <img src={pokemon.img} width="200" height="200" />
            </a>
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
    backgroundColor: 'yellow',
    textTransform: 'capitalize',
  }
};



module.exports = Index;