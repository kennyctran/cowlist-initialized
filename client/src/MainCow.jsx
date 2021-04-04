import React from 'react';

export default function MainCow({ mainCow }) {
  return (
    <main>
      <h1>{mainCow.name}</h1>
      <p>{mainCow.description}</p>
    </main>
  )
}