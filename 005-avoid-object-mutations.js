const toggleTodo = (todo) => {
//   todo.completed = !todo.completed
//   return todo

  return Object.assign({}, todo, {
    completed: !todo.completed
  })

  // ES7 object spread proposal
  // return {
  //   ...todo,
  //   completed: !todo.completed
  // }

};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed.');
