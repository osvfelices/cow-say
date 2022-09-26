const userInfo = require('./information');
var cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello, Im ${userInfo.name} from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));

