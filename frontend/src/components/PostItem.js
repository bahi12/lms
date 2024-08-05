import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const PostItem = ({ post, view }) => {
  const renderPost = (text) => {
    if (text.split(' ').length > 50) {
      return `${text.split(' ').slice(0, 50).join(' ')}...`;
    }
    return text;
  };

  if (view === 'cards') {
    return (
      <Col md={6} className="mb-2">
        <Card className="h-100">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <p dangerouslySetInnerHTML={{ __html: renderPost(post.post) }}></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" size="sm" href={`/post/${post.id}`}>Read More</Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  } else if (view === 'list') {
    return (
      <ListGroup.Item className='mt-2'>
        <h5>{post.title}</h5>
        <p dangerouslySetInnerHTML={{ __html: renderPost(post.post) }}></p>
      </ListGroup.Item>
    );
  }
};

export default PostItem;
