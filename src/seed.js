import db, { Gallery, User } from './db'

async function seed() {
  try {
    await db.sync({ force: true })
    const user = await User.create({
      username: 'marvinody',
      password: '123'
    })

    const gallery1 = await Gallery.create({
      title: 'Test Gallery',
      category: 'misc',
    })
    console.log("Successfully seeeded database!")
  } catch (err) {
    console.error(err)
  }
}

seed()
