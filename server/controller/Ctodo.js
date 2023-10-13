const { Todo } = require('../models');
const { Op } = require('sequelize');

// GET /api/todos - show all todos (READ)
exports.readTodos = async (_, res) => {
  try {
    let todos = await Todo?.findAll({
      order : [['id', 'desc']]
  });
    if (!todos) {
      return res.status(204).send()
    }
    res.json(todos);
  } catch (err) {
    res.send(err);
  }
};

// POST /api/todo - create a new todo (CREATE)
exports.createTodo = async (req, res) => {
  // console.log('>>>>', req.body);
  
  try {
    const {title}  = req?.body
    if (!title) {
      return res.status(400).send("todo는 입력되어야 합니다.")
    }
    const newTodo = await Todo?.create({
      title,
      done: false,
    });
    res.status(201).json(newTodo);
    // res.status(201).send(newTodo);

    // res.end();
  } catch (err) {
    res.send(err);
  }
};

// PATCH /api/todo/:todoId - edit a specific todo (UPDATE)
exports.updateTodo = async (req, res) => {
  try {
    const {title, done} = req?.body
    const response = await Todo.update(
      {
        title,
        done,
      },
      {
        where: {
          id: { [Op.eq]: req?.params?.todoId },
        },
      }
    );
    // 수정 실패
    if (idUpdated === 0) {
      return res.status(400).send("존재하지 않는 투두입니다.");
    }
    // 수정 성공
    res.status(201).send();
  } catch (err) {
    res.send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    let isDeleted = await Todo.destroy({
      where: {
        id: { [Op.eq]: req?.params?.todoId },
      },
      raw: true,
    });
    // 삭제 실패
    if (!isDeleted) {
      return res.status(400).send("존재하지 않는 todo입니다.");
    }
    // 삭제 성공
    res
    .status(200)
    .send("삭제가 완료되었습니다.");
  } catch (err) {
    res.send(err);
  }
};
