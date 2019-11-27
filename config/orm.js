var connection = require("../config/connection.js");
var orm = {
    selectAll: function(columnName,tableInput){
        var selectQuery = "SELECT ?? FROM ??";
        connection.query(selectQuery, [columnName,tableInput], function(err,result){
            if(err) throw err;
            console.log(result);
        });

    },
    insertOne: function(tableInput,columnName,columnValue){
        var insertQuery = "INSERT INTO " + tableInput;
        insertQuery += " (";
        insertQuery += columnName.toString();
        insertQuery += ") ";
        insertQuery += "VALUES ('";
        insertQuery += columnValue;
        insertQuery += "') ";
        console.log(insertQuery);

        connection.query(insertQuery, [tableInput,columnName,columnValue], function(err, result) {
            if (err) {
              throw err;
            }
      
            console.log(result);
          });


    },
    updateOne: function(tableInput, columnName1, columnValue1,condition ){
        var updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(updateQuery, [tableInput, columnName1, columnValue1,condition], function(err,result){
            if(err) throw err;
            console.log(result);
        });

    }

};

module.exports = orm;