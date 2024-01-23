import getJoke from './service'

export default async () => {
  document.body.innerHTML = '<div class="fullpage-message"><div class="content fullpage-message__content">Loading joke...</div></div>'
  const joke = await getJoke()
  if (joke) {
    document.body.innerHTML = '<div class="fullpage-message"><div class="content fullpage-message__content">' + joke + '</div></div>'

    document.addEventListener('click', (e) => {
      const TargetElement = e.target

      if (TargetElement.classList.contains('content__punchline--button')) {
        const PunchlineText = TargetElement.dataset.punchline
        TargetElement.classList.remove('content__punchline--button')
        TargetElement.innerHTML = PunchlineText

        const ReloadButton = document.createElement('p')
        const ReloadButtonText = document.createTextNode('Reload')
        ReloadButton.classList.add('content__reload-button')
        ReloadButton.appendChild(ReloadButtonText)
        TargetElement.parentNode.insertBefore(ReloadButton, TargetElement.nextSibling)
      }

      if (TargetElement.classList.contains('content__reload-button')) {
        location.reload()
      }
    })
  }
}
