const User = require('../models/User');
const Mendietplan = require('../models/Mendietplan');
const Womendietplan = require('../models/Womendietplan');

exports.gender = async (req, res) => {
  try {
    const { IDnumber, Day, Meal } = req.body;

    // Find the user based on IDnumber
    const existingUser = await User.findOne({ IDnumber: IDnumber });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get the gender from the user document
    const gender = existingUser.gender.toLowerCase();

    // Initialize dietPlan variable
    let dietPlan;

    // Fetch data from the appropriate collection based on gender and meal type
    if (gender === 'male') {
      dietPlan = await Mendietplan.findOne({ Day: Day, Meal: Meal });
    } else if (gender === 'female') {
      dietPlan = await Womendietplan.findOne({ Day: Day, Meal: Meal });
    } else {
      return res.status(400).json({ message: 'Invalid gender' });
    }

    // Check if dietPlan exists
    if (!dietPlan) {
      //return res.status(404).json({ message: 'Diet plan not found' });
      return res.status(404).json({ message: `Diet plan not found for ${Meal} on ${Day}` });
    
    }

    // If dietPlan is found, return it in the response
    res.status(200).json({ message: 'Diet plan fetched successfully', dietPlan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
