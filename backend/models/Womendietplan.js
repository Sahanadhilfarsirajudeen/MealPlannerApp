const mongoose = require('mongoose');

const womenDietPlanSchema = new mongoose.Schema({
    Day: { type: String, required: true },
    Meal: { type: String, required: true },
    Item: { type: String, required: true },
    Quantity: { type: mongoose.Schema.Types.Mixed, required: true }, // Allow mixed data types for Quantity
    Receipe: { type: String }
});

const Womendietplan = mongoose.model('Womendietplan', womenDietPlanSchema);

module.exports = Womendietplan;
