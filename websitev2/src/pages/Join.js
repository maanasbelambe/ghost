import React, { useEffect } from 'react';
import '../styles/Join.css'

function Join() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <div>
        <div className="join">
        <iframe title='joinForm' src="https://docs.google.com/forms/d/e/1FAIpQLSftNc8y5yukpGNpKEmJkdMfKlV4zco_HZcLL6XXV4FRkbnQRA/viewform?embedded=true" width="640" height="2174" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>    </div>
    </div>
  );
}

export default Join;