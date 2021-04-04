import React from 'react';

export default function SubmitCow() {
  return (
    <form>
      <input type="text" id="have-a-cow" name="have-a-cow" value="Register a cow!" />
      <button onClick={() => alert()}>Submit!</button>
    </form>
  )
}