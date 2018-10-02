import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      data: []
    };
  }

  loadData = () => {
    this.setState({ loading: true });

    /**
     * On successful fetch
     * this.setState({
          loading: false,
          error: false,
          data: result.data.data
        });

      * On Error
      * this.setState({
          error: `${error}`
        });
     */
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (this.state.loading) return "Loading...";
    if (this.state.error) return `Error: ${this.state.error}`;

    return (
      <div className="App">
        <h1>Weather</h1>
        {
          // Display weather info here
        }
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
