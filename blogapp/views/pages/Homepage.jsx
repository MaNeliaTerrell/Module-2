const React = require('react')
const Navbar = require('../components/Navbar')

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <header>
                <link rel="stylesheet" href="/CSS/app.css"/> 
                </header>

                <h1>Welcome to Marinel's Blog App</h1>

            <Navbar />


            </div>
        )
    }
}
module.exports = HomePage