interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

export class CheckService implements CheckServiceUseCase {
    async execute(url: string): Promise<boolean> {
        // console.log('Checking', url);

        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error checking service: ${url}`);
            }
            console.log('Service is OK');
        }
        catch (e) {
            console.error(e);
            return false;
        }

        return true;
    }
}