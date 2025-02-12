import { CreateTable } from '../src/domain/use-cases/create-table.use-case';

describe('CreateTableUseCase', () => {
    test('should create a table with default values', () => {
        const createTable = new CreateTable();
        const table = createTable.execute({ base: 2, limit: 10 });
        const rows = table.split('\n').length;
        console.log(table);

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2');
        expect(table).toContain('2 x 10 = 20');
        expect(rows).toBe(10);

    });

    test('should create a table with custom values', () => {
        const options = {
            base: 5,
            limit: 8
        };
        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const rows = table.split('\n').length;
        console.log(table);

        expect(table).toContain('5 x 6 = 30');
        expect(table).toContain('5 x 8 = 40');
        expect(rows).toBe(8);
    });
});


