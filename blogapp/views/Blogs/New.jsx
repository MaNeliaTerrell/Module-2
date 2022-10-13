const React = require('react')


class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Add New Blog</h1>

                <form action='/blog' method='POST'>
                    title: <input type='text' name='title'/>
                    <br/>
                    body: <input type='text' name='body'/>
                    <br/>
                    author: <input type='text' name='author'/>
                    <br/>
                    likes:<input type='text' name='likes'/>
                    <input type='submit' value='Create New Folder'/>
                    <br/>
                    sponsored: <input type='boolean'/>
                </form>
            </div>
        )
    }
}
module.exports = New