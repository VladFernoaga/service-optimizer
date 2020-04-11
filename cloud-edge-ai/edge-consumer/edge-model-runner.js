const fetch = require("node-fetch");

const url = 'http://localhost:3000/model';
class ModelRunner {
    constructor() {
        this.cachedModel = undefined;
    }

    async _getModelFromCache() {
        if (this.cachedModel === undefined) {
            const response = await fetch(url);
            this.cachedModel = await response.json();
            console.log('Model form network was retrieved');
            console.log(JSON.stringify(this.cachedModel, undefined, 4));
        }
        return this.cachedModel;
    }


    async runModel(inputParam, callbackOnActivation) {
        const model = await this._getModelFromCache();
        const transition = this._executeModel(inputParam, model);
        callbackOnActivation(inputParam, transition);
    }

    _executeModel(inputParam, localModel) {

        for (const state of localModel.states) {
            if (state.activation.type === 'range') {
                if (state.activation.start <= inputParam && inputParam < state.activation.end) {
                    return state.transition;
                }
            }
        }
        throw new Error('Model failed to execute');
    }
}

module.exports = new ModelRunner();