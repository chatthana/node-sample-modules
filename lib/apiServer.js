const express = require('express');
const bodyParser = require('body-parser');

module.exports = ({ port }) => {
  const api = express();
  api.use(bodyParser.urlencoded({ extended: true }));
  api.use(bodyParser.json());
  
  const initialiseRoutes = () => {
    api.get('/', (req, res) => {
      return res.status(200).json({ status: '000', message: 'Success' });
    });
  }

  const start = () => {
    initialiseRoutes();
    api.listen(port, () => { console.log('The application is initialised on the port %s', port) });
  }

  return { start };
}