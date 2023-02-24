const express = require('express');

const userRoutes = require('./users.routes');
const organizationRoutes = require('./organization.routes');
const charityRoutes = require('./charity.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/organization', organizationRoutes);
router.use('/charity', charityRoutes);

module.exports = router;
