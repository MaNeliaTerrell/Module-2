const React = require('react');
const vegetables = require('../../models/vegetables');


class Show extends React.Component {
    render() {
        const { vegetable } = this.props
        return (
            <div style={styles.container}>
                <h1 style={styles.header}>Veggies Show Page</h1>
                <div>
                    <li style={styles.liText}> {vegetable.name} is {vegetable.color}.</li>
                </div>


            </div>)
    }
}

const styles = {
    container: {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header:{
        fontSize: '20px',
        color: 'darkgreen'
    },
    liText:{
        fontSize: '18px',
        color: 'maroon'
    }
}
module.exports = Show