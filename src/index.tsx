import * as React                 from "react"
import * as ReactDOM              from "react-dom"
import * as d3                    from 'd3'
import * as d3Graphviz            from 'd3-graphviz'

// Force d3-graphviz to be loaded in bundle, so it installs itself as a plugin of d3
const _ = d3Graphviz.graphviz

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
    d3.select(".dot_view_port").graphviz().renderDot("digraph{a->b}")
  }
}

ReactDOM.render(<DotViewer/>, document.getElementById("main"))

