const React = require('react')

class Show extends React.Component {

   render () {
    // console.log(this.props);
    // receive data from models
    const fruit = this.props.fruit
    const presentDate = this.props.date

    const sayHello = () => console.log('hello');
    return (
        <div style={styles.container}>
            <h1> Show Page!!! </h1>
            <h3 style={styles.header}> The fruit name is {fruit.name} and the color is {fruit.color}.</h3>
            <h4> {fruit.readyToEat ? 'It\'s ready to eat' : 'It is not ready to eat...Can\'t touch this'}.</h4>
            <h6> Year: {presentDate} {sayHello()}</h6>
        </div>

     );
    }
 }

 const styles = {
    container: {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
    },
    header:{
        fontSize: '20px',
        color: 'darkgreen'
    }
    
}
 module.exports  = Show;