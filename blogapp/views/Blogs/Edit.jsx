const React = require('react')

class Edit extends React.Component {
    render(){
        console.log(this.props.blog);
        const {blog} = this.props
        return(
            <div>
                <h1>Edit Blog Page</h1>
            <form action={`/blog/${this.props.blog._id}?_method=PUT`} method="POST">
                title: <input type="text" name="name" defaultValue={blog.title} />
                <br />
                body: <input type='text' name='body'defaultValue={blog.body} />
                <br />
                author: <input type='text' name='author'defaultValue={blog.author} />
                likes: <input type='text' name='likes'defaultValue={blog.likes} />
                sponsored: { blog.sponsored ? <input type='checkbox' name='sponsored' defaultChecked /> : <input type='checkbox'
                name='sponsored'/>}
                <br />
                <input type="submit" value='Update Blog'/>
            </form> 

            </div>
        )
    }
}
module.exports = Edit