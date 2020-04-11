const modelRunner = require("./edge-model-runner");



async function main() {
    for (let i = 0; i < 5; i++) {
        const inputParam = Math.random().toFixed(2);
        await modelRunner.runModel(inputParam, (inputParam, stateTransition) => {

            console.log(`Calculated transition for input parameter: ${inputParam}  is ${stateTransition}`);
        });

    }
}

main();