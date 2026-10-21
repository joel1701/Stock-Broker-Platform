const {model} = require("mongoose");
const {OrdesSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new model("order", OrdesSchema);

module.exports = {OrdersModel};