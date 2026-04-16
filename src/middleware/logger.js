const logger = (req, res, next) => {
    const timestamps = new Date().toISOString();
    console.log(`[${timestamp} ${req.methos} {req.url}]`)
    next();
};

module.exports = logger;