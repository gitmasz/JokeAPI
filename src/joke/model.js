export class JokeRewrite {
  constructor ({ type, setup, punchline }) {
    this.type = type
    this.setup = setup
    this.punchline = punchline
  }

  get jokeQuestion () {
    return this.setup ? `<h1>${this.type.charAt(0).toUpperCase() + this.type.slice(1)} joke:</h1><p>${this.setup} 🤔</p>` : '<p>No joke 🤬</p>>'
  }

  get jokeAnswer () {
    return this.punchline ? `<p class="content__punchline content__punchline--button" data-punchline="${this.punchline} 🤣">Reveal</p>` : '<p>No answer 😭</p>'
  }

  toString () {
    return `${this.jokeQuestion} ${this.jokeAnswer}`
  }
}
