import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../template/Card'; // Import the Card component

function   
 PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/');   

        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Card key={post.id} title={post.title} post={post.post} linkText="Read More" />
      ))}
    </div>
  );
}

export default PostList;