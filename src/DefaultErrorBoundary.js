import React, { Component } from "react";

export default class DefaultErrorBoundary extends Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <div>Something went wrong</div> : children;
  }
}
