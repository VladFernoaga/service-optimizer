class ModelController {


    getModel(req, res) {
        const model = {
            states: [{
                    id: 'plan_1',
                    activation: {
                        type: "range",
                        start: 0,
                        end: 0.4
                    },
                    transition: "plan_1"
                },
                {
                    id: 'plan_2',
                    activation: {
                        type: "range",
                        start: 0.4,
                        end: 0.8
                    },
                    transition: "plan_2"
                },
                {
                    id: 'plan_3',
                    activation: {
                        type: "range",
                        start: 0.8,
                        end: 1
                    },
                    transition: "plan_3"

                }
            ]

        }
        res.send(model);
    }
}

module.exports = new ModelController();