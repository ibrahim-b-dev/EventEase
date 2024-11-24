const winston = require("winston");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
      ),
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

// Middleware: Add Request ID Logger
const requestIdLogger = (req, res, next) => {
  req.requestId = uuidv4();
  next();
};

// Middleware: Morgan Logger with Winston Integration
const morganLogger = morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

// Middleware: Request Timing Logger
const requestTimingLogger = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info(
      `Request ID: ${req.requestId} - ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - Duration: ${duration}ms`
    );
  });
  next();
};

module.exports = {
  logger,
  requestIdLogger,
  morganLogger,
  requestTimingLogger,
};
