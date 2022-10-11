const React = require('react');
const pokemon = require('./Models/pokemon')

class Show extends React.Component {
  render() {
    const {pokemon} = this.props
    return 
    <div>
        <h1>Show Page</h1>

        <ul>
            <li>

            </li>

        </ul>
    </div>;
  }
}

const myStyles = {
  container: {color: 'navyblue',
  backgroundColor: 'aqua',
}};



module.exports = Show;