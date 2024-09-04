'use client';
import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function JsonParser() {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedOutput, setParsedOutput] = useState('');
  const [error, setError] = useState('');
  const firebaseConfig = {
    apiKey: "AIzaSyAj1BYbyauIyzX02y0css7Y7k-yAcFqgEo",
    authDomain: "json-parser-a160d.firebaseapp.com",
    projectId: "json-parser-a160d",
    storageBucket: "json-parser-a160d.appspot.com",
    messagingSenderId: "890392434361",
    appId: "1:890392434361:web:bcc821cf36e9c02f5d2d68",
    measurementId: "G-TBM737YS4P"
  };
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  },[])
  const handleParseJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setParsedOutput(JSON.stringify(parsed, null, 2)); // Pretty print JSON
      setError('');
    } catch (e) {
      setError('Invalid JSON');
      setParsedOutput('');
    }
  };

  return (
    <div className="container mx-auto h-screen p-4">
      <Helmet>
        <title>JSON Parser Online</title>
        <meta name="description" content="Parse your JSON quickly and easily with our online JSON parser tool." />
        <meta name="keywords" content="JSON, parser, online tool, developer tools, JSON formatter" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="flex h-full">
        {/* JSON Input Section */}
        <div className="w-1/2 p-2 border-r">
          <h2 className="text-xl font-bold mb-2">JSON Input</h2>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Enter JSON here"
            rows={20}
            className="w-full h-5/6 p-2 border rounded"
          />
          <button
            onClick={handleParseJson}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Parse JSON
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* JSON Output Section */}
        <div className="w-1/2 p-2">
          <h2 className="text-xl font-bold mb-2">Parsed Output</h2>
          <textarea
            value={parsedOutput}
            readOnly
            rows={20}
            className="w-full h-5/6 p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default JsonParser;
