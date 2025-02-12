import { CheckService } from "../domain/use-cases/check/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    static start() {
        console.log('Server started');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                new CheckService().execute('http://localhost:3000');
            });
    }
} 