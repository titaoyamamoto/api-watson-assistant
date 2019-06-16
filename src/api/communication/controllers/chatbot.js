const watsonAssistant = require('./../../../services/watson/assistant');
const cache = require('./../../../services/store/redisdb');

const errorMessage = 'Desculpe, não consegui processar sua solicitação.';


const message = async (request, reply) => {
    let { message, user } = request.payload;

    try {

        console.log('------ Start Proccess -------');
        console.log(`- user: ${user}`);
        console.log(`- message: ${message}`);

        const context = JSON.parse(await cache.getByKey(user));
        console.log(`- context: ${JSON.stringify(context)}`);

        let chatbotMessage = await watsonAssistant.sendMessage(message, context);
        console.log(`- chatbot message: ${JSON.stringify(chatbotMessage)}`);

        if (!chatbotMessage.output.context) { //dont has the context object

            if (!chatbotMessage.context.system.branch_exited) //if dialog continue, store the context 
                await cache.setByKey(user, chatbotMessage.context);

            return reply.response(
                {
                    statusCode: 200,
                    message: chatbotMessage.output.text[0]
                }).code(200);

        }else {
            await cache.delByKey(user); //if has the context object, remove stored context 
        }

        //TODO flows and process here!
        //Use the flow variable to call the correct method
        //And the bag variable to use the correct parameters
        const { flow, bag } = chatbotMessage.output.context;

        //TODO Remove this code
        //Use the flow to return the message
        return reply.response(
            {
                statusCode: 200,
                message: chatbotMessage.output.text[0]
            }).code(200);

    }
    catch (error) {
        console.log(`Error: ${error}`);

        return reply.response(
            {
                statusCode: 500,
                message: errorMessage
            }).code(500);
    }
}

module.exports = {
    message: message,
}