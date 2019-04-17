if(process.env.NODE_ENV === 'production'){
    console.log("MODE: Production");
    module.exports = require('./keys_prod')
} else{
    console.log("MODE: Development");
    module.exports = require('./keys_dev')
}