class ModelController {


    getModel(req, res) {
        const model = {
            states: [{
                    id: 'plan_1',
                    activation: {
                        type: "range",
                        start: 24,
                        end: 54
                    },
                    output: "Plan2"
                },
                {
                    id: 'plan_2',
                    activation: {
                        type: "range",
                        start: 55,
                        end: 70
                    },
                    output: "Plan3"
                },
                {
                    id: 'plan_3',
                    activation: {
                        type: "range",
                        start: 71,
                        end: 85
                    },
                    output: "Plan3"
                }
            ]

        }
        res.send(model);
    }
}

module.exports = new ModelController();