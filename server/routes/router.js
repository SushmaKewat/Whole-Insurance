import express from 'express';

import {
	createContactController,
	getClientDetailsController,
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/client-details', getClientDetailsController);

router.post('/add-client-details', createContactController);

export default router;
