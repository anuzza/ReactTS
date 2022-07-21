class Todo {
  id: string;
  text: string;

  constructor(totoText: string) {
    this.text = totoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
