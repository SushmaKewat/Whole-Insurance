import { ContactModel } from '../models/ContactModel.js';

export const getClientDetailsController = async (req, res) => {
	try {
		const data = await ContactModel.find();

		if (!data || data.length === 0) {
			return res.status(400).json({
				success: false,
				message: 'No Data Found!',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'All Data Retrieved',
			data: data,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: 'Internal server error',
		});
	}
};

export const createContactController = async (req, res) => {
	try {
		console.log(req.body);

		const { name, email, phone, message } = req.body;
		switch (true) {
			case !name:
				return res.status(500).send({ error: 'Name is required' });
			case !email:
				return res.status(500).send({ error: 'Email is required' });
			case !phone:
				return res.status(500).send({ error: 'Phone number is required' });
		}

		const client = new ContactModel({ name, email, phone, message });
		await client.save();
		res.status(200).json({
			success: true,
			message: 'Client details saved successfully',
			client,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: 'Internal Server Error',
		});
	}
};
