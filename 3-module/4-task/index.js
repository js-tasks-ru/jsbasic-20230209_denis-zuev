function showSalary(users, age) {
  return users.reduce((result, item) => result + (item.age <= age ? `${item.name}, ${item.balance}\n` : ''), '').slice(0, -1);
}
