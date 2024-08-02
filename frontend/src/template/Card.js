import React from 'react';
import DOMPurify from 'dompurify';
import Col from 'react-bootstrap/Col';

function Card({ title, post, linkText = 'Read More' }) {
  const sanitizedHtml = DOMPurify.sanitize(post);
  const words = sanitizedHtml.split(' ').slice(0, 50).join(' ');

  let content = words;
  if (sanitizedHtml.split(' ').length > 50) {
    content += '(...)';
  }

  return (
    <Col md={4} className="mb-5">
      <div className="card h-100">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="card-footer">
          <a className="btn btn-primary btn-sm" href="#!">{linkText}</a>
        </div>
      </div>
    </Col>
  );
}

export default Card;