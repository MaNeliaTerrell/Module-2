const React = require('react')

class Navbar extends React.Component {
    render () {
        return (

           
            <div>


            <nav>
                <a href='/'>Home</a>
                <br/>
                <a href='/blog'>Blogs</a>
                <br/>
                <a href='/blog/new'>Create New Blog</a>
                <br/>
                <a href='/user/signup'>Signin/up</a>
                <br/>
                <a href='/user/signout'>Sign out</a>
            </nav>
            </div>
        )
    }
}

module.exports = Navbar