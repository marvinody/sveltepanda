
import Sequelize from 'sequelize';
import { name as pkgName } from '../../package.json';

const databaseName = pkgName + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false
  }
)

export default db;
