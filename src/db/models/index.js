import File from './File';
import Gallery from './Gallery';
import User from './User';

// user can upload multiple albums
// also, fk is just so it'll look nice in db
Gallery.belongsTo(User, { as: 'uploader', foreignKey: 'uploaderId' })
User.hasMany(Gallery, { foreignKey: 'uploaderId' })

// gallery pagse needs to be brought out into sep. model to account for ordering
// maybe something else
Gallery.belongsToMany(File, { as: 'pages', through: 'galleryPages' })
File.belongsToMany(Gallery, { as: 'gallery', through: 'galleryPages' })

// don't need the assoc the other way for this
Gallery.belongsTo(File, { as: 'coverPage' })

export { File, Gallery, User };

