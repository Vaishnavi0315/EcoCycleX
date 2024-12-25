import React from 'react';

const CommunityInput = () => {
  const contributions = [
    { user: 'Alice', insight: 'Using compost reduces waste.' },
    { user: 'Bob', insight: 'Rainwater harvesting saves water.' },
  ];

  return (
    <section>
      <h2>Community Input</h2>
      <ul>
        {contributions.map((contribution, index) => (
          <li key={index}>
            <strong>{contribution.user}:</strong> {contribution.insight}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommunityInput;