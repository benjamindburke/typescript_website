import * as React from "react";

interface Props {
  compiler: string,
  framework: string,
  bundler: string,
}

export class Hello extends React.Component<Props> {
  public render() {
    return (
      <h1 className="hello">
        This is a {this.props.framework} application using {this.props.compiler} with {this.props.bundler}.
      </h1>
    );
  }
}
