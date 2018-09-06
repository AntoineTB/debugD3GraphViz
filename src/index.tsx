import * as React                 from "react"
import * as ReactDOM              from "react-dom"
import * as d3                    from 'd3'
import * as d3Graphviz            from 'd3-graphviz'

class DotViewer extends React.Component<{},{}>{
  constructor(props){
    super(props)
    this.renderGraph = this.renderGraph.bind(this)
  }
  render(){
    return <div className='DotViewer'>
      <div className='dot_view_port'></div>
    </div>
  }
  componentDidMount(){this.renderGraph()}
  renderGraph(){
    console.log(d3) // d3 object, no graphviz key
    console.log(d3.graphviz) // undefined
    console.log(d3Graphviz.graphviz) // object, contains a function named graphviz

    /* TypeError : d3.graphviz is not a function */
    //d3.graphviz(".dot_view_port").renderDot("digraph{a->b}")

    /* Uncaught Cannot call a class as a function (worker.onmessage @ d3-graphviz.js:1178) */
    d3.select(".dot_view_port").graphviz().renderDot("digraph{a->b}")

    /* Cannot call a class as a function (worker.onmessage @ d3-graphviz.js:1178) */
    //d3Graphviz.graphviz(".dot_view_port").renderDot("digraph{a->b}")
  }
}

ReactDOM.render(<DotViewer/>, document.getElementById("main"))

