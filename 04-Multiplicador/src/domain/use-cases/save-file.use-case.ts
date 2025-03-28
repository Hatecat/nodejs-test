import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor() {
    }

    execute({ fileContent, destination = 'output/', fileName = 'tabla' }: Options): boolean {
        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            return true;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
}