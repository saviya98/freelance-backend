const express = require('express');
const {
    createIncomeRecord,
    getIncomeRecords,
} = require('../controllers/incomeController');

const router = express.Router();

router.post('/', createIncomeRecord);
router.get('/',getIncomeRecords);

module.exports = router;