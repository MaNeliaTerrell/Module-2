const React = require('react')

class Edit extends React.Component {
    render(){
        console.log(this.props.fruit);
        const {fruit} = this.props
        return(
            <div>
                <h1>Edit Page</h1>
            <form action={`/fruits/${this.props.fruit._id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={fruit.name} />
                <br />
                Color: <input type='text' name='color'defaultValue={fruit.color} />
                <br />
                Ready to Eat: { fruit.readyToEat ? <input type='checkbox' name='readyToEat' defaultChecked /> : <input type='checkbox'
                name='readyToEat'/>}
                <br />
                <input type="submit" value='Update Fruit'/>
            </form> 

            </div>
        )
    }
}
module.exports = Edit