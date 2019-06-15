const Joi = require('@hapi/joi');
var controller = require('./../controllers/chatbot');

module.exports = [
    {
        method: 'POST',
        path: '/v1/communication/message',
        config: {
            handler: controller.message,
            description: 'Result',
            notes: ['Endpoint to communication with watson assistant.'],
            validate:
            {
                payload: {
                    message: Joi.string().required(),
                    user: Joi.string().required()
                }
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Success',
                            schema: Joi.object({
                                statusCode: Joi.number(),
                                message: Joi.string()
                            }).label('Result')
                        },
                        '500': {
                            description: 'Internal Server Error',
                            schema: Joi.object({
                                statusCode: Joi.number(),
                                message: Joi.string()
                            }).label('Result')
                        }
                    }
                }
            },
            tags: ['api', 'communication', 'message', 'chatbot'],
        }
    }
];
