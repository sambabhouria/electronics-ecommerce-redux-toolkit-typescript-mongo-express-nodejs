// import connectDb from '../config/db';
import Product from '../models/productModel';
import User from '../models/userModel';
// import colors from 'colors';
import products from './products';
import users from './user';
// import dotenv from 'dotenv';
// dotenv.config();


// connectDb();

export const importPoroducttData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};


export const importUserData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(users);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};


// importData();
