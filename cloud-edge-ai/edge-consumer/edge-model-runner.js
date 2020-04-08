const request = require('request');

class ModelRunner {

    getLocalModel(callback) {
        return request('http://localhost:3000/model', {
            json: true
        }, callback);
    }


    runModel(inputParam) {
        this.getLocalModel((err, res, body) => {
            // execute model and decide over the next step
            this._executeModel(inputParam, body);
        });

    }

    _executeModel(inputParam, localModel) {
        // execution logic
        console.log(inputParam);
        console.log(localModel);

    }

}

module.exports = new ModelRunner();