var mongoose = require('mongoose')

var User = mongoose.model('User')

module.exports = {
  /**
   * Create a new user
   */
  create: (req, res) => {
    User.create(req.body, (err, data) => {
      if (err) {
        res.json({ message: 'Error', error: err })
      } else {
        res.json({ message: 'Success', data: data })
      }
    })
  },

  /**
   * Get all users
   */
  getAll: (req, res) => {
    // R list all users
    User.find({}, function (err, data) {
      if (err) {
        res.json({ message: 'Error', error: err })
      } else {
        res.json({ message: 'Success', data: data })
      }
    })
  },

  getById: (req, res) => {
    // R return one user
    var id = req.params.id
    User.findById(id, function (err, data) {
      if (err) {
        res.json({ message: 'Error', error: err })
      } else {
        res.json({ message: 'Success', data: data })
      }
    })
  },

  updateById: (req, res) => {
    console.log(req.body)
    // U update one user
    var id = req.params.id
    var update = req.body
    User.findByIdAndUpdate(id, update, { $set: req.body }, function (err, data) {
      if (err) {
        res.json({ message: 'Error', error: err })
      } else {
        res.json({ message: 'Success', data: data })
      }
    })
  },

  deleteById: (req, res) => {
    // D delete one user
    var id = req.params.id
    User.findByIdAndDelete(id, function (err, data) {
      if (err) {
        res.json({ message: 'Error', error: err })
      } else {
        res.json({ message: 'Success', data: data })
      }
    })
  },

  // non-CRUD
  login: (req, res) => {
    // do login stuff
  }
}
