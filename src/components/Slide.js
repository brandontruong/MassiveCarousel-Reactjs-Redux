import React from 'react';

export default class Slide extends React.Component {
  render() {
    const { imageurl, link, synopsis, title } = this.props;
    return (
      <a className="slide" href={'http://' + link} target="_blank">
        <div className="left"><img src={imageurl} alt={title} /></div>
        <div className="right">
          <div>
            <div className="title">{title}</div>
            <div className="description" dangerouslySetInnerHTML={{ __html: synopsis }}></div>
          </div>
        </div>
      </a>
    );
  }
}
