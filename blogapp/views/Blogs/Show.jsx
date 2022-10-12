const React = require('react');
const BlogSchema = require('../../models/BlogSchema');
const Blogs = require('./Blogs');

class Show extends React.Component {
    render() {
        const { blog } = this.props
        return (
            <div>
                <h1>Blogs Show Page</h1>

                    <h2>{blog.title}{blog.body} {blog.author}</h2>


                    
            </div>
        );
    }
}




module.exports = Show;