import React from 'react';
import Cow from './cow.jsx';

export default function CowList({ cowData }) {
  return (
    <section>
        <h2>All the cows in the yard</h2>
        <ul>
          { cowData.map(cow => <Cow cow={cow}/>) }
        </ul>
    </section>
  )
}