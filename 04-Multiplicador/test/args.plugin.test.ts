


describe('Test args plugin', () => {
    test('should return default values', async () => {
        const argv = await runCommand(['-b', '5']);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            d: 'output/',
            f: 'tabla del {base}'
        }))

    });
});

const runCommand = async (args0: string[]) => {
    process.argv = [...process.argv, ...args0];
    const { args } = await import('../src/plugins/args.plugin');
    console.log(args);
    return args;
}
