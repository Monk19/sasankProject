import React from "react";

const HocComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterBy: "",
      };
    }
    //   Logic goes here
    render() {
      //   console.log(this.props, this.state);
      return (
        <div>
          <input
            type="text"
            minLength={3}
            maxLength={10}
            onChange={(e) => {
              e.preventDefault();
              this.setState({ filterBy: e.target.value });
              console.log(this.state.name);
            }}
          />
          <OriginalComponent name={this.state} {...this.props} />
        </div>
      );
    }
  }
  return NewComponent;
};

export default HocComponent;
