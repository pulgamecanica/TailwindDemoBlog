import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // Loading 
    this.setTheme()
    // Finished loading
  }

  enableLightTheme() {
    localStorage.theme = 'light'
    this.setTheme()
  }

  enableDarkTheme() {
    localStorage.theme = 'dark'
    this.setTheme()
  }

  removeTheme() {
    localStorage.removeItem('theme')
    this.setTheme()
  }

  setTheme() {
    console.log("Setting theme...")
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
