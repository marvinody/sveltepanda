import Sequelize from 'sequelize'
import db from '../db'

const File = db.define('file', {
  name: {
    type: Sequelize.STRING,
    defaultValue: 'Unnamed file'
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  resolution: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  }
})
export default File

/**
 * instanceMethods
 */


/**
 * classMethods
 */


/**
 * hooks
 */
