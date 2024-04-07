import { Controller } from "@hotwired/stimulus"
import { select, geoOrthographic, geoPath, drag, zoom, json } from "d3"

const WIDTH = 200
const HEIGHT = 200

// Connects to data-controller="world-sphere-map"
export default class extends Controller {

  connect() {
    console.log("Enabling Map")
    let width = WIDTH
    let height = HEIGHT
    const sensitivity = 75

    let projection = geoOrthographic()
      .scale(100)
      .center([0, 0])
      .rotate([0,-30])
      .translate([width / 2, height / 2])

    const initialScale = projection.scale()

    let path = geoPath().projection(projection)

    let svg = select(this.element)
      .attr("width", width)
      .attr("height", height)

    let globe = svg.append("circle")
      .attr("fill", "#EEE")
      .attr("stroke", "#000")
      .attr("stroke-width", "0.2")
      .attr("cx", width/2)
      .attr("cy", height/2)
      .attr("r", initialScale)

    svg.call(drag().on('drag', (event) => {
      event.stopPropagation
      const rotate = projection.rotate()
      const k = sensitivity / projection.scale()
      projection.rotate([
        rotate[0] + event.dx * k,
        rotate[1] - event.dy * k
      ])
      path = geoPath().projection(projection)
      svg.selectAll("path").attr("d", path)
      }))
      .call(zoom().on('zoom', (event) => {
        event.stopPropagation
        if(event.transform.k > 0.3) {
          projection.scale(initialScale * event.transform.k)
          path = geoPath().projection(projection)
          svg.selectAll("path").attr("d", path)
          globe.attr("r", projection.scale())
        }
        else {
          event.transform.k = 0.3
        }
      }))
      // .on("dblclick.zoom", null)
      // .on("mousewheel.zoom", null)
      // .on("DOMMouseScroll.zoom",null)

    let map = svg.append("g")

    json("/world.json").then(data => {
       map.append("g")
        .attr("class", "countries" )
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("class", d => "country_" + d.properties.name.replace(" ","_"))
        .attr("d", path)
        .attr("fill", "gray")
        .style('stroke', 'gray')
        .style('stroke-width', 0)
        .style("opacity",0.8)
    })
  }
}