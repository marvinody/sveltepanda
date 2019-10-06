import Sequelize from 'sequelize'
import db from '../db'

const Gallery = db.define('gallery', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM('misc', 'plush'),
    allowNull: true,
  },
})
export default Gallery

/**
 * instanceMethods
 */


/**
 * classMethods
 */


/**
 * hooks
 */
