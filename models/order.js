const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderItems: [
    { type: mongoose.Schema.Types.ObjectId, ref: "OrderItem", required: true },
  ],
  shippingAddress1: { type: String, required: true },
  shippingAddress2: { type: String },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, required: true, default: "Pending" },
  totalPrice: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateOrdered: { type: Date, default: Date.now },
});

orderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

orderSchema.set("toJSON", {
  virtuals: true,
});

exports.Order = mongoose.model("Order", orderSchema);

/**
Order Example:
{
    "orderItems" : [
        {
            "quantity": 3,
            "product" : "63c92edaf4e31f00121a3617"
        },
        {
            "quantity": 2,
            "product" : "63c92e707e26070202770c3c"
        }
    ],
    "shippingAddress1" : "surat",
    "shippingAddress2" : "surat",
    "city": "surat",
    "zip": "395001",
    "country": "India",
    "phone": "99558858",
    "user": "632984049651be0480ca4387"
}

 */
