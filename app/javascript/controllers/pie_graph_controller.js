import { Controller } from "@hotwired/stimulus"
import { select, pie, arc, scaleOrdinal, schemeDark2 } from "d3"

// Connects to data-controller="pie-chart"
export default class extends Controller {
  static targets = [ "svg" ]

  connect() {
    let svg = select(this.svgTarget)
      .attr("height", 200)
      .attr("width", 200)
    // Raw Hard coded Data, in the future it should contain info about the posts and views
    let data = [
      {title: "Bob", views: 4},
      {title: "Amelie", views: 15},
      {title: "Emily", views: 20},
      {title: "Ferdinand", views: 18},
      {title: "Frank", views: 25},
      {title: "Mariane", views: 12},
    ]

    let pie_graph = pie().value( d=>d.views ).padAngle( 0.02 )( data )

    let arcMkr = arc().innerRadius(30).outerRadius(100).cornerRadius(5)

    // let scX = scaleOrdinal( schemeDark2 ).domain( pie_graph.map(d=>d.index) )
    let scX = scaleOrdinal().domain(pie_graph.map(d=>d.index)).range(["#222222", "#666666", "#666666", "#999999", "#B3B3B3", "#424242", "#DDDDDD"]);


    let g = svg.append( "g" ).attr( "transform", "translate(100, 100)");

    g.selectAll("path").data( pie_graph ).enter().append( "path" )
      .attr( "d", arcMkr ).attr( "fill", d=>scX(d.index) ).attr( "stroke", "gray" );

    g.selectAll("text").data( pie_graph ).enter().append( "text" )
      .text( d=>d.data.title )
      .attr( "x", d=>arcMkr.innerRadius(30).centroid(d)[0] )
      .attr( "y", d=>arcMkr.innerRadius(30).centroid(d)[1] )
      .attr( "font-family", "sans-serif" ).attr("font-size", 10)
      .attr( "text-anchor", "middle" )
  }
}
