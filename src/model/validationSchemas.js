module.exports = {
    AuthSchema: {
        type: 'object',
        properties: {
            user: {
                type: 'string'
            },
            password:{
                type: 'string'
            }
        },
        required: ['user', 'password']
    }
}