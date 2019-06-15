const watsonAssistantConfig = {
    workspace_id: "",
    iam_apikey: "",
    version: "",
    url: ""
}

const redisDBConfig = {
    port: 6379,
    host: 'redisdb',
    destroy: 600 //in seconds
}

module.exports = {
    watsonAssistantConfig: watsonAssistantConfig,
    redisDBConfig:redisDBConfig
}