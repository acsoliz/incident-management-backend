import express from 'express';
import {
    createIncident, 
    getAllIncidents,
    updateIncidentStatus,
    assignIncident
} from '../controllers/incidentController.js';
import { query, param, body } from 'express-validator';
import { authGuard } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', 
    authGuard,
    getAllIncidents
);

router.post('/create',
    authGuard,
    createIncident
);

router.put('/update/:id',
    authGuard,
    updateIncidentStatus
);

router.put('/assign/:id',
    authGuard,
    assignIncident
);

export default router;
