const rateLimit = require('express-rate-limit');

const apiRateLimiter = rateLimit({
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS),
    max: Number(process.env.RATE_LIMIT_MAX_REQUESTS),
    standardHeaders: true,
    legacyHeaders: false,
    message:{
        success: false,
        message: 'Too many requests. Please try again later.',
    },
})

module.exports = apiRateLimiter;