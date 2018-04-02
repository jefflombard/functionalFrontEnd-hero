export function loadUsers(){

  const users = [
    {
      name: {
        first: "test",
        last: "alst"
      },
      email: "test@test.com"
    }
  ];

  return {
      type: "UPDATE_USERS",
      payload: users
  }
}
