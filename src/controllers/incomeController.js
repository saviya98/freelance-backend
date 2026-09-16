const pool = require("../config/db");

const createIncomeRecord = async (req, res, next) => {
  try {
    const { month, platform, income, deductions, recordTotal } = req.body;

    const insertQuery = `
            INSERT INTO income_records (month, platform, income, deductions, record_total)
            VALUES (?,?,?,?,?)
        `;

    const [result] = await pool.execute(insertQuery, [
      month,
      platform,
      income,
      deductions,
      recordTotal,
    ]);

    return res.status(201).json({
      success: true,
      message: "Income record created successfully",
      data: {
        id: result.insertId,
        month,
        platform,
        income,
        deductions,
        recordTotal,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getIncomeRecords = async (req, res, next) => {
    try {
        const selectQuery = `
            SELECT * FROM income_records
            ORDER BY id desc
        `;

        const [rows] = await pool.execute(selectQuery);

        return res.status(200).json({
            success:true,
            data: rows,
            count: rows.length,
        })


    } catch (error) {
    next(error);
  }
}


module.exports = {
    createIncomeRecord,
    getIncomeRecords,
};