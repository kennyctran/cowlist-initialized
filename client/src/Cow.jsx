import React from 'react';

export default function Cow({ cow, handleCowClick }) {
  return <li onClick={() => handleCowClick(cow)}>{cow.name}</li>
}