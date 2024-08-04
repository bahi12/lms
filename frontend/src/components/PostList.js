import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PostItem from './PostItem'; // Import the new PostItem component

function PostList() {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState('cards');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/');
        if (!response.ok) {
          throw new Error('Error fetching posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleViewChange = (selectedView) => {
    setView(selectedView);
    localStorage.setItem('selectedView', selectedView);
  };

  useEffect(() => {
    const savedView = localStorage.getItem('selectedView');
    if (savedView) {
      setView(savedView);
    }
  }, []);

  const renderPosts = () => {
    if (view === 'cards') {
      return (
        <Row>
          {posts.map(post => (
                <PostItem key={post.id} post={post} view={view} />
          ))}
        </Row>
      );
    } else if (view === 'list') {
      return (
        <ListGroup>
          {posts.map(post => (
            <PostItem key={post.id} post={post} view={view} />
          ))}
        </ListGroup>
      );
    }
  };

  return (
    <Container>
      <DropdownButton id="dropdown-basic-button" title="Select View" onSelect={handleViewChange}>
        <Dropdown.Item eventKey="cards">Cards</Dropdown.Item>
        <Dropdown.Item eventKey="list">List</Dropdown.Item>
      </DropdownButton>
      {renderPosts()}
    </Container>
  );
}

export default PostList;