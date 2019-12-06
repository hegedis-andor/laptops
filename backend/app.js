const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

app.use(cors());
const port = 3000;
const mongo_url = 'mongodb://127.0.0.1:27017';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/v1/laptops', (req, res) => {
  MongoClient.connect(mongo_url, { useNewUrlParser: true }, (err, client) => {
    const db = client.db('db');
    const collection = db.collection('laptops');

    let query = buildMongoQuery(req.query);

    console.log(req.originalUrl);
    console.log(query);

    collection
      .find(query)
      .sort()
      .limit(30)
      .toArray()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.error(err));
  });
});

app.get('/api/v1/newest/laptops', (req, res) => {
  MongoClient.connect(mongo_url, { useNewUrlParser: true }, (err, client) => {
    const db = client.db('db');
    const collection = db.collection('laptops');

    const sortby = req.query.sortBy;
    let sortField = {};
    sortField[sortby] = -1;
    const limitSize = +req.query.limit;

    collection
      .find()
      .sort(sortField)
      .limit(limitSize)
      .toArray()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.error(err));
  });
});

app.listen(port, () => console.info(`REST API running on port ${port}`));

function buildMongoQuery(queryParams) {
  let queryObject = {};

  const laptopName = queryParams.name.replace(/"/g, '');
  if (laptopName !== '') {
    queryObject['name'] = {
      $regex: laptopName,
      $options: 'i'
    };
  }

  const cpuCoresCounts = queryParams.cpuCoresCounts;
  if (cpuCoresCounts.length > 0) {
    queryObject['cpu.cores'] = { $in: [...cpuCoresCounts] };
  }

  const displayResolutions = queryParams.displayResolutions.split(',');
  if (queryParams.displayResolutions.length > 0) {
    queryObject['display.resolution'] = { $in: [...displayResolutions] };
  }

  const cpuProducers = queryParams.cpuProducers.split(',');
  if (queryParams.cpuProducers.length > 0) {
    queryObject['cpu.prod'] = { $in: [...cpuProducers] };
  }

  const dedicatedGpu = queryParams.dedicatedGpu.replace(/"/g, '');
  if (dedicatedGpu === 'Yes') {
    queryObject['$or'] = [{ 'gpu.prod': 'Amd' }, { 'gpu.prod': 'Nvidia' }];
  }
  if (dedicatedGpu === 'No') {
    queryObject['$nor'] = [{ 'gpu.prod': 'Amd' }, { 'gpu.prod': 'Nvidia' }];
  }

  const minPriceStr = queryParams.minPrice;
  const minPrice = +minPriceStr;

  const maxPriceStr = queryParams.maxPrice;
  const maxPrice = +maxPriceStr;

  queryObject['price'] = { $lte: maxPrice, $gte: minPrice };

  return queryObject;
}
