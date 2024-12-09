import React, { useState } from 'react';
import ResponseList from '../modules/ResponseList'

const PostRequestComponent = (props) => {
  const [responseData, setResponseData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePostRequest = async () => {
    setLoading(true);
    setError(null);

    const data = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    try {
      console.log('/api/service-shuffle/'+ props.amount)
      const response = await fetch('/api/service-shuffle/' + props.amount, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },        
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok!');
      }

      const result = await response.json();
      setResponseData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handlePostRequest}>Send POST Request</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {responseData && (
        <div>
          <h3>Response Data:</h3>
          <ResponseList rows={responseData} />
        </div>
      )}
    </div>
  );
};

export default PostRequestComponent;
