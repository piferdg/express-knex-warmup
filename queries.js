const database = require('./database-connection')

module.exports = {

  getCohorts() {
    return database('students').select()
  },

  getId(id) {
    return database('students').select().where('id', id)
  }
}