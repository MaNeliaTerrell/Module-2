const message = 'Hello World!'

const message1 = 'GoodBye!'

const sayHello = () => console.log(message);
sayHello()

const sayBye = () => console.log(message1);
sayBye()

// module.exports = sayBye
module.exports = sayHello

console.log(module);