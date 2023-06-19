
import React from 'react';


function Panel() {
  return (
    <div>
      <h1>Panel</h1>
        <form>
          <input type='text' placeholder='introduzca URL original' defaultValue="URL larga"></input>
            <button type='submit'>Generate</button>
        </form>
        <div>
          <p></p>
        </div>
    </div>
  );
}

export default Panel;
