const React = require('react')
const Navbar = require('../components/Navbar')

class HomePage extends React.Component {
    render() {

        const { blogs, loggedInUser } = this.props

        return (
            <div>
                <header>
                <link rel="stylesheet" href="/CSS/app.css"/> 
                </header>

                <h1>Welcome to Marinel's Blog App</h1>

                {/* <h3 style={styles.font1}>Hello,{loggedInUser}</h3> */}

            <Navbar/>

            </div>
        )
    }
}

const styles={
    font1:{
        color: 'gold',
        fontSize: '35px',
        textAlign: 'center',
        fontFamily: 'Papyrus',
    }
}
module.exports = HomePage