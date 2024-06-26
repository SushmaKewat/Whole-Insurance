import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
	},
	message: {
		type: String,
		required: true,
	},
});

export const ContactModel = mongoose.model('ContactDetails', contactSchema);
