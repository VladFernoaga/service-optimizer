const request = require('request');


class ModelRunner {

    getLocalModel(callback) {
        return request('http://localhost:3000/model', {
            json: true
        }, callback);
    }


    runModel(inputParam, callbackOnActivation) {
        this.getLocalModel((err, res, body) => {
            // execute model and decide over the next step
            const transition = this._executeModel(inputParam, body);
            callbackOnActivation(inputParam, transition);
        });

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