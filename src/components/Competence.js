import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Competence = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/competences.json')
      .then(response => response.json())
      .then(data => {
        setData(data.competences.find(item => item.id === id));
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      {data.content.map((item, index) => {
        switch (item.type) {
          case 'title':
            return <h2 key={index}>{item.text}</h2>;
          case 'paragraph':
            return <p key={index}>{item.text}</p>;
          case 'image':
            return <img key={index} src={item.src} alt={item.alt} />;
          case 'code':
            return (
              <pre key={index}>
                <code>{item.text}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Competence;
