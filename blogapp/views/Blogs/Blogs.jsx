const { urlencoded } = require('express')
const React = require('react')
const Edit = require('../Blogs/Edit')


class Blogs extends React.Component {
    render() {

        const {blogs} = this.props

        return (

        <body style={myStyle.body}>
        <div >
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
                <br/>
                <br/>
                 <a href={'/'} style={myStyle.font5}>Back to Homepage</a>
                 <br/>
                 <br/>
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
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg")' ,
    backgroundSize: 'cover',
    backgroundPosition: 'center center fixed',
    backgroundRepeat: 'no-repeat',
    margin: '-8px',
    padding: '10px',
    width: '100%',
    backgroundAttachment: 'fixed',
    },
    mainBlog:{
        textAlign: 'justify', 
        background: 'rgba(50, 45, 20, .4)',
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
    font3:{
    color: 'gold',
    fontSize: '20px',
    textAlign: 'center center',
    margin: '30px',
    fontFamily: 'Tahoma',
    },
    font4:{
    color: 'cyan',
    fontSize: '15px',
    textAlign: 'center center',
    margin: '30px',
    fontFamily: 'Tahoma',
    },
    font5:{
        color: 'pink',
        fontSize: '25px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Tahoma',
        }
    }


module.exports = Blogs