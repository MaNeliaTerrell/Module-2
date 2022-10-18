const React = require('react')
const Navbar = require('../components/Navbar')

class Edit extends React.Component {
    render(){
        
        const {blogs} = this.props
        return(
            <div>

            <Navbar/>
                <h1>Edit Blog Page</h1>
            <form action={`/blog/${blogs._id}?_method=PUT`} method="POST">
                
                title: <input type="text" name='title' defaultValue={blogs.title} />
                <br />

                body: <textarea type='text' name='body'defaultValue={blogs.body} rows="20" cols="60"/>
                <br />

                author: <input type='text' name='author'defaultValue={blogs.author} />
                <br/>
                likes: <input type='text' name='likes'defaultValue={blogs.likes} />
                <br/>
                sponsored: { blogs.sponsored ? <input type='checkbox' name='sponsored' defaultChecked /> : 

                <input type='checkbox' name='sponsored'/>}
                <br />

                <input type="submit" value='Update Blog'/>
            </form> 

            <form action={`/blog/${blogs._id}?_method=delete`} method='post'>
            <input type='submit' value='Delete Blog' />
            </form>

            </div>

        )
    }
}
module.exports = Edit