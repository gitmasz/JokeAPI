import { JokeRewrite } from './model'

const JOKEAPI_URL = 'https://official-joke-api.appspot.com/random_joke'
const CHUCKAPI_URL = 'https://api.chucknorris.io/jokes/random'

export default async function getJoke () {
  try {
    const jokeAPI = await fetch(JOKEAPI_URL)
    const jokeSource = await jokeAPI.json()
    if (jokeAPI.ok) {
      const returnedJoke = new JokeRewrite(jokeSource)
      // return returnedJoke.toString()
      if (returnedJoke.type === 'programming') {
        return returnedJoke.toString()
      } else {
        const chuckAPI = await fetch(CHUCKAPI_URL)
        const chuckJokeSource = await chuckAPI.json()
        return `<h1>Chuck Norris joke:</h1><p>${chuckJokeSource.value}</p><p class="content__reload-button">Reload</p>`
      }
    }
    throw Error('Response not 200')
  } catch (err) {
    console.warn(err)
    return []
  }
}
