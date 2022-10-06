const React = require('react');
const vegetables = require('../../models/vegetables');

class Index extends React.Component {
    render() {

        const { vegetable } = this.props
        return (
            <div style={styles.container} >
                <h1 style={styles.header}>Veggies!!!</h1>

                {/* DISPLAY THE ARRAY WITH THE IMAGES */}

                <ul>{vegetables.map((vegetables, idx) => (
                    <li key={idx}>
                        <a href={`/vegetables/${idx}`}>{vegetables.name}</a>
                        {' '}is {vegetables.color} and {vegetables.readyToEat ? " it is ready to eat" : " it is not ready to eat"}.
                        <br />
                        <a href={`/vegetables/${idx}`}>
                            <img src={vegetables.image} width="200" height="200" />
                        </a>
                    </li>
                ))}</ul>

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
    
}

module.exports = Index
