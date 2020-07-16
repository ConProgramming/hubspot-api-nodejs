const _ = require('lodash')
const Promise = require('bluebird')
const trelloClientHelper = require('./trello-client-helper')
const mysqlDbHelper = require('./mysql-db-helper')
const logResponse = require('../helpers/log-response-helper')
const AUTHENTICATED_MEMBER = 'me'

module.exports = {
    searchForCards: async (query) => {
        const client = await trelloClientHelper.getClient()
        if (_.isNil(query) || _.isEmpty(query)) {
            return []
        }

        console.log(`Getting trello cards by query [${query}]`)
        const result = await client.makeRequest('GET', '/1/search', { query, modelTypes: ['cards'] })
        logResponse(result)

        return _.get(result, 'cards') || []
    },
    getCard: async (cardId) => {
        const client = await trelloClientHelper.getClient()

        console.log(`Getting trello card by id [${cardId}]`)
        const result = await client.makeRequest('GET', `/1/cards/${cardId}`)
        logResponse(result)

        return result
    },
    getMembers: async (idMembers) => {
        const client = await trelloClientHelper.getClient()

        console.log(`Getting trello card members`)
        const result = await Promise.map(idMembers, (memberId) => client.getMember(memberId))
        logResponse(result)

        return result
    },
    getBoards: async () => {
        const client = await trelloClientHelper.getClient()

        console.log(`Getting trello boards`)
        const result = await client.getBoards(AUTHENTICATED_MEMBER)
        logResponse(result)

        return result
    },
    getBoardLists: async (boardId) => {
        const client = await trelloClientHelper.getClient()

        console.log(`Getting trello board lists`)
        const result = await client.getListsOnBoard(boardId)
        logResponse(result)

        return result
    },
    createCardWebhookSubscription: async (cardId) => {
        const client = await trelloClientHelper.getClient()
        const baseUrl = await mysqlDbHelper.getUrl()
        const callbackUrl = `${baseUrl}/trello/cards/webhook`
        const webhook = await client.addWebhook(undefined, callbackUrl, cardId)
        await mysqlDbHelper.saveCardWebhook(webhook.id, cardId)

        return webhook
    },
    checkIfCardWebhookCreated: async (cardId) => {
        const webhookId = await mysqlDbHelper.getCardWebhookId(cardId)
        return !_.isNil(webhookId)
    },
    deleteCardWebhookSubscription: async (webhookId) => {
        const client = await trelloClientHelper.getClient()
        await client.deleteWebhook(webhookId)
        await mysqlDbHelper.deleteCardWebhook(webhookId)
    },
}
