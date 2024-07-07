import React from "react";

const WithErrorBoundary = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({
        error,
        errorInfo,
      });
    }

    render() {
      const { errorInfo, error } = this.state;
      if (errorInfo || error) {
        return (
          <React.Fragment>
            <p>
              This page is currently not available. We are working on this issue
            </p>
          </React.Fragment>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithErrorBoundary;
