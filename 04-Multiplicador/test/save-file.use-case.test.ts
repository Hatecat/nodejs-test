import fs from 'fs';
import { SaveFile } from "../src/domain/use-cases/save-file.use-case";

describe('SaveFileUseCase', () => {

    beforeEach(() => {
        if (fs.existsSync('output'))
            fs.rmdirSync('output', { recursive: true });
    });
    afterEach(() => {
        if (fs.existsSync('output'))
            fs.rmdirSync('output', { recursive: true });
    });


    test('should save a file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'output/tabla.txt';
        const options = {
            fileContent: 'test-content'
        };

        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });


    test('should save a file with custom values', () => {
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'custom-content',
            fileName: 'custom-file-name',
            destination: 'output/custom-folder'
        };
        const filePath = `${options.destination}/${options.fileName}.txt`;

        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });

    test('should return false if directory could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => { throw new Error('Error creating directory') });

        const result = saveFile.execute({ fileContent: 'test-content' });
        expect(result).toBe(false);
    });

    test('should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => { throw new Error('Error writing the file') });

        const result = saveFile.execute({ fileContent: 'test-content' });
        expect(result).toBe(false);
    });

});