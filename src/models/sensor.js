const { Schema, model } = require('mongoose');

const SensorSchema = new Schema({
    tipo: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        required: true,
    },
    valor: Number
}, {
    timestamps: true
});

module.exports = model('Sensor', SensorSchema);