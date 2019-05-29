class UserRepo {
  constructor(data) {
    this.data = data;
  }
  
  returnUser(name) {
    return this.data.users.find(user => user.name === name);
  }
}

export default UserRepo;