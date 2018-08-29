import React from 'react';

const throwSampleError = () => {
  throw new Error('Sample Error');
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await this.timeout(5000);
    this.setState({ loading: false });
  }

  timeout(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <p>Loading. This should take 5 sec then issue an error.</p>;
    }

    return <div>{throwSampleError()}</div>;
  }
}

export default Index;
