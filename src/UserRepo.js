class UserRepo {
  constructor(data) {
    this.data = data;
  }
  
  returnUser(name) {
    return this.data.users.find(user => user.name === name);
  }

  createNewUser(name) {
    const ids = this.data.users.map(user => user.id);
    const highestId = Math.max(...ids);
    return {id: highestId + 1, name: name}
  }
}

export default UserRepo;