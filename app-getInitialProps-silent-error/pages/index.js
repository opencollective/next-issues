import React from 'react';
import Link from 'next/link';

export default class Index extends React.Component {

  render () {
    return (
      <div>
        <Link href="/hello"><a>Say Hello?</a></Link>
      </div>
    );
  }

}
