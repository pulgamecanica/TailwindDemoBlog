import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.disappear()
  }

  disappear() {
    this.element.style.transition = "transform 4s ease-in-out 1s"
    this.element.style.transform = "translateY(-100%)"
  }

  appear() {
    this.element.style.transition = "none"
    this.element.style.transform = "translateY(0%)"
  }

  close() {
    this.element.style.display = "none"
  }
}
