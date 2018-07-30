exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table){
    table.increments()
    table.text('firstname')
    table.text('lastname')
    table.text('prevoccupation')
    table.text('hometown')

  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students')
}
