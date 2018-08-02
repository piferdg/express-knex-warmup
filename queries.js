const database = require('./database-connection')

module.exports = {

  getCohorts() {
    return database('students').select().orderBy('id', 'asc')
  },

  getId(id) {
    return database('students').select().where('id', id)
  },

  createStudent(students) {
    return database('students').insert(students).returning('*')
    .then(record => record[0])

  },

  updateStudents(id, students) {
    return database('students').update(students).where('id', id).returning('*')
    .then(record => record[0])
    
  },

  deleteStudent(id) {
    return database('students').delete().where('id', id)
  }

}