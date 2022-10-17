const React = require('react');
const BlogSchema = require('../../models/BlogSchema');
const Blogs = require('./Blogs');

class Show extends React.Component {
    render() {
        const { blog } = this.props
        return (
            <body style={myStyle.body}>

                <h1>Blogs Show Page</h1>
                
            <div style={myStyle.font1}>
                

                    <h2>{blog.title}</h2>
                    <br/>
                    <h3>{blog.body}</h3> 
                    <br/>
                    <img src={blog.image} style={myStyle.image}></img>
                    <br/>
                    <h3>{blog.author}</h3>

                Click to Like:<input type='checkbox' name='likes'/>
                <br/>
                <a href='/blog' style={myStyle.font2}>BACK to Blog List</a>
                <br/>
                <a href={'/'}style={myStyle.font2}>Back to Homepage</a>
                    
            </div>
            </body>
        );
    }
}

const myStyle = {
    body: {
    backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/580/751/766/earth-sunset-blue-horizon-wallpaper-preview.jpg")' ,
    backgroundSize: 'cover',
    backgroundPosition: 'center center fixed',
    backgroundRepeat: 'no-repeat',
    margin: '20px',
    padding: '10px',
    width: '100%',
    backgroundAttachment: 'fixed',
    },
    font1:{
    color: 'white',
    fontSize: '20px',
    textAlign: 'center center',
    margin: '30px',
    fontFamily: 'Tahoma',
    background: 'rgba(53, 26, 68, 0.55)',
    },
    font2:{
        color: 'cyan',
        fontSize: '30px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Tahoma',
    },
    image: {
        width: '350px',
        height: '250px',
    }
}


module.exports = Show;