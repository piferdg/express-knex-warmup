
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert(
        [
          {firstname: 'Will', lastname: 'Kirkhope', prevoccupation: 'Personal Trainer', hometown: 'San Diego'},
          {firstname: 'Tom', lastname: 'Clukies', prevoccupation: 'Server', hometown: 'Denver'},
          {firstname: 'Josh', lastname: 'Lovely', prevoccupation: 'Fortune Teller', hometown: 'Imaginationland'},
          {firstname: 'R.J.', lastname: 'Kirkhope', prevoccupation: 'Stuntman', hometown: 'San Diego'},
          {firstname: 'Mark', lastname: 'Newcomb', prevoccupation: 'Already was a web developer yo', hometown: 'Hays, KS'},
          {firstname: 'Kim', lastname: 'Hermosillo', prevoccupation: 'Server', hometown: 'Denver'},
          {firstname: 'Tom', lastname: 'Lee', prevoccupation: 'Sales Manager', hometown: 'Colorado Springs'},
          {firstname: 'Ben',  lastname: 'Austin', prevoccupation: 'Social Work', hometown: 'Denver'},
          {firstname: 'Josh', lastname: 'Robbs', prevoccupation: 'professional alligator wrangler', hometown: 'Poquoson'},
          {firstname: 'Matt', lastname: 'Riach', prevoccupation: 'Map Seller', hometown: 'Liverpool'},
          {firstname: 'Natalie', lastname: 'Todd', prevoccupation: 'Recruiter', hometown: 'Anchorage'},
          {firstname: 'Michael', lastname: 'Coons', prevoccupation: 'Director of IT', hometown: 'Bloomington, IN'},
          {firstname: 'Danny', lastname: 'Pifer', prevoccupation: 'QA Tester', hometown: 'San Francisco'},
          {firstname: 'Ryan', lastname: 'McCrory', prevoccupation: 'U.S. Army', hometown: 'Denver, CO'},
          {firstname: 'Matt', lastname: 'Huston', prevoccupation: 'Valet', hometown: 'Littleton, CO'},
          {firstname: 'Ryan', lastname: 'Borgstrom', prevoccupation: 'Doctor', hometown: 'Morris, IL'},
          {firstname: 'Tiffany', lastname: 'Ricks', prevoccupation: 'CNA', hometown: 'Scottsdale'}
        ]
      )
})
}
