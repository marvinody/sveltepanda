import db, { User } from './db'

async function seed() {
  try {
    await db.sync({ force: true })
    const user = await User.create({
      username: 'marvinody',
      password: '123'
    })
    console.log(user)
    console.log("Successfully seeeded database!")
  } catch (err) {
    console.error(err)
  }
}

seed()
