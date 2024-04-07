import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-display"
export default class extends Controller {
  static targets = [ "toggleableBox" ]
  static values = {
    display: {type: String, default: "block"}
  }

  toggle() {
    if (this.toggleableBoxTarget.style.display === this.displayValue)
      this.toggleableBoxTarget.style.display = "none"
    else
      this.toggleableBoxTarget.style.display = this.displayValue
  }
}
