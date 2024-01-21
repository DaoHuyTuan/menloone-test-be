const { where } = require('sequelize')
const Pair = require('../models/pair')

exports.getPairById = (req, res, next) => {
  const pair_id = req.query.pair_id
  Pair.findOne({
    where: {
      symbol: pair_id
    }
  })
    .then(pair => {
      if (!pair) {
        return res.status(404).json({ message: 'Pair not found!' })
      }
      res.status(200).json({ pair: pair })
    })
    .catch(err => console.log(err))
}

exports.createPair = (req, res, next) => {
  const {
    pair_id,
    symbol,
    pair_value,
    pair_name,
    twitter,
    website,
    logo,
    github,
    description
  } = req.body
  Pair.create({
    pair_id,
    symbol,
    pair_value,
    pair_name,
    twitter,
    website,
    logo,
    github,
    description
  })
    .then(result => {
      res.status(201).json({
        message: 'Pair created successfully!',
        pair: result
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.bulkCreate = (req, res, next) => {
  const { data } = req.body
  Pair.bulkCreate(data)
    .then(result => {
      res.status(201).json({
        message: 'Pairs created successfully!',
        pair: result
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.getPairs = (req, res, next) => {
  Pair.findAll()
    .then(pairs => {
      res.status(200).json({ pairs: pairs })
    })
    .catch(err => console.log(err))
}
