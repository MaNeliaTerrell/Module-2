const React = require('react');
// const pokemon = require('./Models/pokemon')

class Show extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div style={myStyles.container}>
                <h1>Gotta Catch 'Em All</h1>

                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.img} width="200" height="200" />
                    <br />
                    <br />
                    <a href='/pokemon'>BACK</a>
                    
            </div>
        );
    }
}

const myStyles = {
    container: {
        color: 'darkblue',
        backgroundColor: 'teal',
        textTransform: 'capitalize',
        fontFamily: 'Arial',
        fontSize: '30px',
    }
};



module.exports = Show;