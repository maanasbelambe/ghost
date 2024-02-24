import React, { useEffect } from 'react';
import '../styles/Join.css'

function Join() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <div>
        <div className="join">
            <iframe title="joinform" src="https://docs.google.com/forms/d/e/1FAIpQLSdfDWrpqsBBB54QqfaVNxusNceC7x9g6HOLcLC1u3IH_37UWw/viewform?embedded=true" width="640px" height="1800px" frameBorder={0}>Loading…</iframe>
        </div>
    </div>
  );
}

export default Join;