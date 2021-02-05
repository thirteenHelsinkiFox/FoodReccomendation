const bcryptjs = require('bcryptjs');

function hashPass(password){
    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt)
}

function comparePass(password, hashedPass){
    return bcryptjs.compareSync(password, hashedPass)
}

module.exports = {
    hashPass,
    comparePass
}