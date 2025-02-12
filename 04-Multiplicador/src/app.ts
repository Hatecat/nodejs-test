import { args } from './plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

(async () => {
    await main();
})();

async function main() {
    const { b: base, l: limit, s: show, d: destination, f: filename } = args;

    ServerApp.run({ base, limit, show, destination, fileName: filename });


}