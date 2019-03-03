var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    add: function(colOne, colTwo, valOne, valTwo, cb){
        orm.insertOne("burgers", colOne, colTwo, valOne, valTwo, function(res){
            cb(res);
        });
    },
    update: function(colOne, valOne, colTwo, valTwo, cb){
        orm.updateOne("burgers", colOne, valOne, colTwo, valTwo, function(res){
            cb(res);
        });
    },
};

module.exports = burger;