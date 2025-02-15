import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

  const handleQuery = async () => {
    try {
      const result = await axios.post('http://localhost:8000/chatbot/query', { query });
      setResponse(result.data.response);
      setHistory([...history, { query, response: result.data.response }]);
      setQuery('');
    } catch (error) {
      console.error('Error querying chatbot:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">AI-Powered Chatbot</h1>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query here..."
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleQuery}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>

        {response && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Response:</h2>
            <p>{response}</p>
          </div>
        )}

        {history.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-bold">Query History:</h2>
            <ul>
              {history.map((item, index) => (
                <li key={index} className="border-b py-2">
                  <strong>Query:</strong> {item.query}
                  <br />
                  <strong>Response:</strong> {item.response}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;