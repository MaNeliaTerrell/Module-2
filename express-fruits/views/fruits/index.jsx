const React = require('react')
// const fruits = require("../models/fruits")


class Index extends React.Component{
    render(){
        // console.log("Herreeee", this.props.fruits);
        const {fruits} = this.props
        return(
        <div>
            <hi>All Fruits</hi>
            <br />
            <a href='/fruits/new'>Create New Fruit</a>

            <ul>{fruits.map((fruit, idx) => (

                <li key={idx}>
                    The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}{''}
                <br />
                {fruit.readyToEat
                ? 'It is ready to eat'
                : 'It is not ready to eat'}

                <form action={`/fruits/${fruit._id}?_method=delete`} method='post'>
                    <input type='submit' value='Delete' />
                </form>
                    <a href={`/fruits/${fruit._id}/edit`}>Edit this Fruit</a>
                </li>
            ))}
            </ul>
        </div>)
    }
}
module.exports = Index