import { Gallery } from '../../../db'
export async function get(req, res, next) {
  try {
    const galleries = await Gallery.findAll({
      include: [
        'pages', 'coverPage', 'uploader'
      ],
    })
    res.json(galleries)
  } catch (err) {
    next(err)
  }
}
