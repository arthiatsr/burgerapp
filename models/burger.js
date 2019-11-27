var orm = require("../config/orm.js");
var burger = {
    selectAll: function(columnName,tableInput){
orm.selectAll("burger_name", "burgers");
    },
    insertOne: function(tableInput,columnName,columnValue){
orm.insertOne("burgers", "burger_name", "columnValue");
    },
    updateOne: function(tableInput, columnName1, columnValue1,condition){
orm.updateOne("burgers", "devoured", "columnValue", condition );
    },
delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
        cb(res);
    });
    }
};    
    
module.exports = burger;