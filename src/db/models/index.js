import File from './File';
import Gallery from './Gallery';
import User from './User';

Gallery.hasOne(User, { as: 'author' })
User.hasMany(Gallery)

// gallery pagse needs to be brought out into sep. model to account for ordering
// maybe something else
Gallery.belongsToMany(File, { as: 'pages', through: 'galleryPages' })
File.belongsToMany(Gallery, { as: 'gallery', through: 'galleryPages' })

// don't need the assoc the other way for this
Gallery.hasOne(File, { as: 'coverPage' })

export { File, Gallery, User };

