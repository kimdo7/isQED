module.exports = {
    error: (res, message) => {
        res.json({ status: 'Error', error: message })
    },

    all(res, data){
        res.json({ status: 'Success', data: data })
    }
}