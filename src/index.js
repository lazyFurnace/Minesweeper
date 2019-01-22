import React from 'react';
import ReactDOM from 'react-dom';
import { normalize, schema, denormalize } from 'normalizr';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const data = {
  id_str: '123',
  url: 'https://twitter.com',
  user: {
    id_str: '456',
    name: 'Jimmy'
  }
};

const user = new schema.Entity('users', {}, { idAttribute: 'id_str' });
const tweet = new schema.Entity('tweets', { user: user }, {
  idAttribute: 'id_str',
  // Apply everything from entityB over entityA, except for "favorites"
  mergeStrategy: (entityA, entityB) => ({
    ...entityA,
    ...entityB,
    favorites: entityA.favorites
  }),
  // Remove the URL field from the entity
  processStrategy: (entity) => {
    console.log(entity);
    return entity;
  }
});

const normalizedData = normalize(data, tweet);

console.log(JSON.stringify(data, null, 4));
console.log(JSON.stringify(normalizedData, null, 4));
