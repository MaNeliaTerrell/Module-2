const React = require('react')

class Navbar extends React.Component {
    render () {
        return (

            <nav>
                <a href='/'>Home</a>
                <br/>
                <a href='/blog'>Blogs</a>
                <br/>
                <a href='/blog/new'>Create New Blog</a>
                <br/>
                <a href='/signin'>Sign up</a>
            </nav>


        )
    }
}

module.exports = Navbar