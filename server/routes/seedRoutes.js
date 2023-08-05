import express from 'express';
import Product from '../models/productModel.js';
import item from '../item.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(item.products);
  
  await User.deleteMany({});
  const createdUsers = await User.insertMany(item.users);
  res.send({ createdProducts, createdUsers });
  });
  
export default seedRouter;