import { File, Gallery } from '../../../db'
export async function get(req, res, next) {
  try {
    const galleries = await Gallery.findAll({
      // [sequelize.fn('COUNT', sequelize.col('Files.id')), 'pages']
      include: [{
        model: File,
        as: 'pages',
      },
        'coverPage', 'uploader'],
    })
    res.json(galleries)
  } catch (err) {
    next(err)
  }
}
