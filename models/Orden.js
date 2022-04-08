const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdenSchema = new Schema({
  azada: {
    type: Number,
    default: 0,
  },
  pollo: {
    type: Number,
    default: 0,
  },
  barbacoa: {
    type: Number,
    default: 0,
  },
  pastor: {
    type: Number,
    default: 0,
  },
  chorizo: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
  },
  precio: {
    type: Number,
  },
  cancelar: {
    type: Boolean,
    default: false,
  },
  completado: {
    type: Boolean,
    default: false,
  },
  nombreDeOrden: {
    type: String,
    trim: true,
  },
  clienteId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    strictPopulate: false,
  },
  tiempo: {
    type: Date,
    default: Date.now
  },

});

OrdenSchema.methods.addTotal = function () {
  this.total =
    this.azada + this.pollo + this.barbacoa + this.pastor + this.chorizo;
  return this.total;
};
OrdenSchema.methods.getPrecio = function () {
  let cuantos =
    this.azada + this.pollo + this.barbacoa + this.pastor + this.chorizo;
  this.precio = cuantos * 3;
  return this.precio;
};
const Orden = mongoose.model("Orden", OrdenSchema);

module.exports = Orden;
