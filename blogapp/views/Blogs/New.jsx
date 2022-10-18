const React = require('react')


class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Add New Blog</h1>

                <form action='/blog' method='POST'>
                    title: <input type='text' name='title' style={myStyles.inputBox} required/>
                    <br/>
                    body: 
                    <br/><textarea  name="body" placeholder="body" rows="20" cols="60" required />
                    <br/>
                    image url: <input type='url' name='image' style={myStyles.inputBox}></input>
                    <br/>
                    author: <input type='text' name='author'style={myStyles.inputBox} required/>
                    <br/>
                    likes:<input type='text' name='likes'style={myStyles.inputBox}/>
                    <br/>
                    Create a New Blog: <input type='submit' value="Let's Go!"/>
                    <br/>
                    sponsored: <input type='checkbox'/>
                    <br/>
                    <br/>
                    <a href={'/'}>Back to Homepage</a>
                </form>
            </div>
        )
    }
}

const myStyles = {
    inputBox: {
        height: '15px',
        width: '350px',
    }
}
module.exports = New