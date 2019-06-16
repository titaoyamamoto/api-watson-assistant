const { watsonAssistantConfig } = require('../../../application.config');
const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
    iam_apikey: watsonAssistantConfig.iam_apikey,
    version: watsonAssistantConfig.version,
    url: watsonAssistantConfig.url
});

const sendMessage = async (message, context) => {

    let returned = await (new Promise((resolve, reject) => {
        assistant.message({
            workspace_id: watsonAssistantConfig.workspace_id,
            input: { 'text': message },
            context
        },
            (err, response) => {
                if (err)
                    reject(err);
                else
                    resolve(response);
            })
    }));

    return returned;
}

module.exports = {
    sendMessage: sendMessage,
}