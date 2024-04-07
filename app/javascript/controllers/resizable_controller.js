import { Controller } from "@hotwired/stimulus"
import { select, selectAll, drag, pointer, scaleLinear } from "d3"

// LocalStorage Helper Functions
const getLocalStorageOrDefault = (storage) => {
  const currSettings = JSON.parse(localStorage.getItem(storage));
  if (currSettings === null)
    return 100;
  else
    return currSettings;
}
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Scale Helpers & Functions
const SIDEBAR_WIDTH_MIN = 100
const SIDEBAR_WIDTH_MAX = 600
const myScale = scaleLinear()
  .domain([SIDEBAR_WIDTH_MIN, SIDEBAR_WIDTH_MAX])
  .range([SIDEBAR_WIDTH_MIN, SIDEBAR_WIDTH_MAX])
  .clamp(true)

// When using this controller be careful and don't give the value to your data-values
// that could conflict with another local Storage elemnt, such as 'theme'
export default class extends Controller {
  static targets = [ "resizer" ]
  static values = {
    storage: String,
    rightToLeft: { type: Boolean, default: true } 
  }

  connect() {
    // Create a d3 reference to the resizable element
    const resizable = select(this.element)
    if (window.innerWidth > 480)  { // Do not resize for small resolutions
      resizable.style("width", getLocalStorageOrDefault(this.storageValue) + "px")
    }
    // Debugggggg
    console.log(this.storageValue, resizable.style("width"))
    // Resize D3:drag component
    select(this.resizerTarget).call(drag()
        .on('drag', () => {
          // Get the width based on the pointer position
          let x = pointer(event, resizable)[0]
          if (this.rightToLeftValue == false) {
            x = window.innerWidth - x
          }
          // Resize the element
          resizable.style('width', myScale(x) + 'px')
          // sidebarIconsResponsive(x);
        })
        .on('end', () => {
          // On drag end save the width to localStorage
          let x = pointer(event, resizable)[0]
          if (this.rightToLeftValue == false) {
            x = window.innerWidth - x
          }
          saveToLocalStorage(this.storageValue, myScale(x))
        })
    );
  }
}
