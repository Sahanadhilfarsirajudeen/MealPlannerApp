const mongoose = require('mongoose');

const menDietPlanSchema = new mongoose.Schema({
  Day: { type: String, required: true },
  Meal: { type: String, required: true },
  Item: { type: String, required: true },
  Quantity: { type: mongoose.Schema.Types.Mixed, required: true }, // Allow mixed data types for Quantity
  Receipe: { type: String } // Note: You have a typo here, it should be "Recipe" instead of "Receipe"
});

const Mendietplan = mongoose.model('Mendietplan', menDietPlanSchema);

module.exports = Mendietplan;
