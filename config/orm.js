var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[table], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, colOne, colTwo, valOne, valTwo, cb){
        var queryString = "INSERT INTO ?? ( ??, ??) VALUES (?, ?)";
        connection.query(queryString,[table, colONe, colTwo, valOne, valTwo], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, colOne, valOne, colTwo, valTwo, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString,[table, colOne, valOne, colTwo, valTwo], function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;