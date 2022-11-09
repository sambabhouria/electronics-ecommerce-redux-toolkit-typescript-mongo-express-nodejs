// const  connectDb = require('../config/db');
const  Product =  require('../models/productModel');
// import colors from 'colors';
const  products =  require('./products');
// const  dotenv = require('dotenv');
// dotenv.config();


// connectDb();

export const importData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Errrer : ${error}`);
    process.exit(1);
  }
};

// importData();
