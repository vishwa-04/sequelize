
import fs from 'fs';
import path from 'path';
import { ModelCtor, Sequelize } from 'sequelize-typescript';

let db: Sequelize;
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

export const initSequelize = () => {
  const _basename = path.basename(module.filename);

  const config = require(__dirname + '/../config/config.json')[env];

  const  sequelize = config.url
    ? new Sequelize(config.url, config)
    : new Sequelize(config.database, config.username, config.password, config);
  

  const _models = fs
    .readdirSync(__dirname) 
    .filter((file: string) => {
      return (
        file !== _basename &&
        file !== 'interfaces' &&
        file.slice(-5) !== '.d.ts' &&
        (file.slice(-3) === '.js' || file.slice(-3) === '.ts')
      );
    })
    .map((file: string) => {
      const model: ModelCtor = require(path.join(__dirname, file))?.default;
      return model;
    });

  sequelize.addModels(_models);

  return sequelize;
};

if (!db) {
  db = initSequelize();
}

export default db;  
