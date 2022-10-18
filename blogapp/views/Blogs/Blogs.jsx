const { urlencoded } = require('express')
const React = require('react')
const Edit = require('../Blogs/Edit')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
    render() {

        const { blogs, loggedInUser } = this.props

        return (

            <body style={myStyle.body}>
                <div style={myStyle.font4}>

                    
                    <h2>Hello, {loggedInUser}</h2>
                
                <Navbar/>



                    <h1 style={myStyle.font1}>Blogs</h1>

                    <section style={myStyle.mainBlog}>{blogs.map((blog) => (

                        <div key={blog._id}>
                            <a href={`blog/${blog._id}`} style={myStyle.font2}>{blog.title}</a>
                            <br />
                            {/* <p style={myStyle.font3}>{blog.body}</p> */}
                            <h4 style={myStyle.font4}>By: {blog.author}</h4>

                            <form action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                                <input type='submit' value='Delete' />
                            </form>
                            <a href={`/blog/${blog._id}/edit`}><button>Edit</button></a>
                            <br />
                            <br />
                            <a href={'/'} style={myStyle.font5}>Back to Homepage</a>
                            <br />
                            <br />

                            {blog.author === loggedInUser ? (
                                <div>
                                    <a href={`/blog/${blog._id}/edit`}>Edit</a>
                                </div>
                            ) : null}

                        </div>
                    ))}
                    </section>

                </div>
            </body>
        )
    }
}
const myStyle = {
    body: {
        backgroundColor: '#455a64',
        backgroundSize: 'cover',
        backgroundPosition: 'center center fixed',
        backgroundRepeat: 'no-repeat',
        margin: '-8px',
        padding: '10px',
        width: '100%',
        backgroundAttachment: 'fixed',
    },
    mainBlog: {
        textAlign: 'justify',
        marginTop: '100px',
        marginRight: '400px',
        marginBottom: '150px',
        marginLeft: '400px',
        padding: '80px',
    },
    font1: {
        fontFamily: "Lucida Calligraphy",
        color: 'white',
        fontSize: '60px',
        textAlign: 'center',
        marginTop: '60px',
        marginBottom: '20px',
        fontStretch: 'ultra-expanded',
    },
    font2: {
        color: 'white',
        fontSize: '30px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Calibri',
    },
    font3: {
        color: 'gold',
        fontSize: '20px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Tahoma',
    },
    font4: {
        color: 'cyan',
        fontSize: '15px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Tahoma',
    },
    font5: {
        color: 'white',
        fontSize: '25px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Tahoma',
    }
}


module.exports = Blogs