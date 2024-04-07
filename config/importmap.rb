# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers", preload: false
pin "d3", preload: false # @7.9.0
pin "d3-array", preload: false # @3.2.4
pin "d3-axis", preload: false # @3.0.0
pin "d3-brush", preload: false # @3.0.0
pin "d3-chord", preload: false # @3.0.1
pin "d3-color", preload: false # @3.1.0
pin "d3-contour", preload: false # @4.0.2
pin "d3-delaunay", preload: false # @6.0.4
pin "d3-dispatch", preload: false # @3.0.1
pin "d3-drag", preload: false # @3.0.0
pin "d3-dsv", preload: false # @3.0.1
pin "d3-ease", preload: false # @3.0.1
pin "d3-fetch", preload: false # @3.0.1
pin "d3-force", preload: false # @3.0.0
pin "d3-format", preload: false # @3.1.0
pin "d3-geo", preload: false # @3.1.1
pin "d3-hierarchy", preload: false # @3.1.2
pin "d3-interpolate", preload: false # @3.0.1
pin "d3-path", preload: false # @3.1.0
pin "d3-polygon", preload: false # @3.0.1
pin "d3-quadtree", preload: false # @3.0.1
pin "d3-random", preload: false # @3.0.1
pin "d3-scale", preload: false # @4.0.2
pin "d3-scale-chromatic", preload: false # @3.1.0
pin "d3-selection", preload: false # @3.0.0
pin "d3-shape", preload: false # @3.2.0
pin "d3-time", preload: false # @3.1.0
pin "d3-time-format", preload: false # @4.1.0
pin "d3-timer", preload: false # @3.0.1
pin "d3-transition", preload: false # @3.0.1
pin "d3-zoom", preload: false # @3.0.0
pin "delaunator", preload: false # @5.0.1
pin "internmap", preload: false # @2.0.3
pin "robust-predicates", preload: false # @3.0.2
