const React = require('react');

class Index extends React.Component {
  render() {
    const {pokemon} = this.props
    return (
    <div style={myStyles.container}>

        <h1>See All the Pokemon</h1>

        
    </div>
    )}
}

const myStyles = {
  container: {color: 'blue',
  backgroundColor: 'yellow',
}};



module.exports = Index;