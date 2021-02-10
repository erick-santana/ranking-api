import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGODB_URI || '';

export const connectToDatabase = async () => {
	mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => {
			console.log('Mongo connected!');
		})
		.catch(err => {
			console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
		}
	);
};

export const disconnectToDatabase = async () => {
	mongoose.disconnect().then(() => {
		console.log('Mongo Disconnected!');
	})
	.catch(err => {
		console.log('Fail to disconnect')
	})
};