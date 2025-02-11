import winston, { format } from 'winston';
const { combine, timestamp, json } = format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});


export const buildLogger = (service: string) => {
    return {
        log: (message: string) => {
            logger.log({
                level: 'info',
                message,
                service
            });
        },
        error: (message: string) => {
            logger.log({
                level: 'error',
                message,
                service
            });
        }
    }
}

logger.add(new winston.transports.Console({
    format: winston.format.simple()
}));
