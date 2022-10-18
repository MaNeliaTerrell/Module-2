const React = require('react')

class Navbar extends React.Component {
    render () {

        const {loggedInUser} = this.props
        return (

            <div>
            <nav style={styles.container}>
                <a href='/'>Home</a>
                <br/>
                <a href='/blog'>Blogs</a>
                <br/>
                <a href='/blog/new'>Create New Blog</a>
                <br/>
                <a href='/user/signup'>Signin/up</a>
                <br/>
                <a href='/user/signout'>Sign out</a>

                { loggedInUser && <h6>{loggedInUser}</h6>}
               { loggedInUser && <a href='/user/signout'>Signout</a>}

            </nav>
            </div>
        )
    }
}

const styles = {
    container : {
        display:"flex",
        justifyContent: 'space-between',
        color: 'yellow',
        fontSize: '20px',
    }
}

module.exports = Navbar