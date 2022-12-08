import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

import authRoutes from './routes/auth';

// Settings
app.set("port", process.env.PORT || 3000);

// Routes
app.use("/api/auth", authRoutes);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

export default app;