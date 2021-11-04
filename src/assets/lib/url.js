import { derived, writable } from 'svelte/store'
import * as url from 'url'

const isBrowser = typeof window !== 'undefined'

const href = writable(isBrowser ? window.location.href : 'http://localhost:3000')

const URL = isBrowser ? window.URL : url.URL

if (isBrowser) {
  const originalPushState = history.pushState
  const originalReplaceState = history.replaceState

  const updateHref = () => href.set(window.location.href)

  history.pushState = function () {
    originalPushState.apply(this, arguments)
    updateHref()
  }

  history.replaceState = function () {
    originalReplaceState.apply(this, arguments)
    updateHref()
  }

  window.addEventListener('popstate', updateHref)
  window.addEventListener('hashchange', updateHref)
}

export default {
  subscribe: derived(href, ($href) => new URL($href)).subscribe,
  ssrSet: (urlHref) => href.set(urlHref),
}

