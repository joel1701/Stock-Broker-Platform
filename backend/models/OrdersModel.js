const {model} = require("mongoose");
const {OrdersSchmema} = require("../schemas/OrdersSchema");

const OrdersModel = new model("order", OrdersSchmema);

module.exports = {OrdersModel};