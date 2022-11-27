/* eslint @typescript-eslint/no-var-requires: "off" */
'use strict'

const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

const { UserSchema } = require('../dist/modules/mongodb/schemas/user.schema')
const { TweetSchema } = require('../dist/modules/mongodb/schemas/tweet.schema')
const { ReplySchema } = require('../dist/modules/mongodb/schemas/reply.schema')
const { LikeSchema } = require('../dist/modules/mongodb/schemas/like.schema')
const { FollowshipSchema } = require('../dist/modules/mongodb/schemas/followship.schema')

const User = mongoose.model('User', UserSchema)
const Tweet = mongoose.model('Tweet', TweetSchema)
const Reply = mongoose.model('Reply', ReplySchema)
const Like = mongoose.model('Like', LikeSchema)
const Followship = mongoose.model('Followship', FollowshipSchema)

// load .env config
require('dotenv').config()

const DB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`

// connect to database
mongoose.connect(DB_URL)
  .then(() => console.log('Connected to database successfully'))
  .catch(err => console.log(err))

// Read data from file
const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')))

// Import data to DB
const importData = async () => {
  try {
    await insertUser()
    await insertTweet()
    await insertReply()
    await insertLike()
    await insertFollowship()

    console.log('create data success!')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

// Delete data from DB
const deleteData = async () => {
  try {
    await User.deleteMany()
    await Tweet.deleteMany()
    await Reply.deleteMany()
    await Like.deleteMany()
    await Followship.deleteMany()

    console.log('delete data success!')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

// Use command-line arguments to determine which action will be executed
if (process.argv[2] === '--import') {
  importData()
}
if (process.argv[2] === '--delete') {
  deleteData()
}

async function insertUser () {
  await User.create(users)
}

async function insertTweet () {
  const user = await User.find({ role: 20 })
  const tweets = Array.from({length: 10}, (_, i) => i).map((_, i) => {
    return { 
      user: user[randomInt(0, user.length - 1)]._id,
      description: `文章${i+1}`
    }
  })
  
  await Tweet.create(tweets)
}

async function insertReply () {
  const user = await User.find({ role: 20 })
  const tweet = await Tweet.find({})

  const replies = Array.from({ length: 10 }, (_, i) => i).map((_, i) => {
    return {
      user: user[randomInt(0, user.length - 1)]._id,
      tweet: tweet[randomInt(0, tweet.length - 1)]._id,
      content: `回覆${i + 1}`
    }
  })

  await Reply.create(replies)
}

async function insertLike () {
  const user = await User.find({ role: 20 })
  const tweet = await Tweet.find({})

  const like = Array.from({ length: user.length }, (_, i) => i).map((_, i) => {
    return {
      user: user[i]._id,
      tweet: tweet[randomInt(0, tweet.length - 1)]._id,
    }
  })

  await Like.create(like)
}

async function insertFollowship () {
  const user = await User.find({ role: 20 })

  const followship = Array.from({ length: user.length }, (_, i) => i).map((_, i) => {
    let index = randomInt(0, user.length)

    while (index === i) index = randomInt(0, user.length)

    return {
      follower: user[i]._id,
      following: user[index]._id,
    }
  })

  await Followship.create(followship)
}

function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min
}