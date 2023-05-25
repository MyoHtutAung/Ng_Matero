
export class UserService {
  users = [ 
    { name: 'John', status: 'Active'},
    { name: 'Mark', status: 'Inactive'},
    { name: 'Steve', status: 'Active'}
  ]

  AddNewUser(name: string, status: string)
  {
    this.users.push({name: name, status: status})
  }


}