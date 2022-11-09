import express, { Application } from 'express';
import { Server } from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';

import sanitizedConfig from '../config';
import connectDb from './config/db';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';
import uploadRoutes from './routes/uploadRoutes';
import { errorHandler, notFound } from './middleware/errorMiddleware';

// import {importPoroducttData} from './seeds/seeders'

  dotenv.config({
    path: path.resolve(__dirname, '../.env'),
  });

  connectDb();

  const app: Application = express();


  if (sanitizedConfig.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  const PORT: number | string = sanitizedConfig.PORT || 1337;

  // importPoroducttData();

  app.use(express.json());
  app.use(cors());

    // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to redux toolkit crud node and express and mongodb application." });
  });

  app.use('/api/products', productRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/uploads', uploadRoutes);


  // app.use('/uploads', express.static(path.join(process.cwd(), '/uploads')));

  app.use(notFound);
  app.use(errorHandler);



  const server: Server = app.listen(PORT, () =>
  console.log(
    `🟢 Server running in ${sanitizedConfig.NODE_ENV} mode on port ${PORT}`
  )
);
