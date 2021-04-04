import React from 'react';

export default function SubmitCow() {
  return (
    <form>
      <input type="text" id="have-a-cow" name="have-a-cow" />
      <button onClick={(e) => {e.preventDefault(); alert()}}>Submit!</button>
    </form>
  )
}