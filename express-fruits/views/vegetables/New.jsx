const React = require('react')


class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Add New Vegetable</h1>

                <form action='/vegetables' method='POST'>
                    Name: <input type='text' name='name'/>
                    <br/>
                    Color: <input type='text' name='color'/>
                    <br/>
                    Ready to Eat: <input type='checkbox' name='readyToEat'/>
                    <br/>
                    <input type='submit' value='Create New Vegetable'/>
                </form>
            </div>
        )
    }
}
module.exports = New