const modelRunner = require("./edge-model-runner");


for (let i = 0; i < 5; i++) {
    const inputParam = Math.random().toFixed(2);
    modelRunner.runModel(inputParam, (inputParam, stateTransition) => {

        console.log(`Calculated transition form input parameter: ${inputParam}  is ${stateTransition}`);
    });

}