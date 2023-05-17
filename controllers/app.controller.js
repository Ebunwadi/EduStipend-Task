const axios = require('axios');

const fetchResult = async (url, req, res) => {
try {
    const { data } = await axios.get(url);
    const { limit } = req.query
 
    if (!limit) {
    return res.status(200).json({
      status: 'success',
      data
    })
   }
    const newData = data.slice(0, limit)
    return res.status(200).json({
      status: 'success',
      data: newData
    })
 } catch (error) {
    return res.status(500).json({
     status: 'error',
     'error': error.message
  })
 }
}

const getComments = async (req, res) => {
  return fetchResult('https://jsonplaceholder.typicode.com/comments', req, res)
}

const getPosts = async (req, res) => {
  return fetchResult('https://jsonplaceholder.typicode.com/posts', req, res)

}

module.exports = {
  getComments,
  getPosts
}