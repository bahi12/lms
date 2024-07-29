import React from 'react';

function Header() {
  return (
    <div className="row gx-4 gx-lg-5 align-items-center my-5">
      <div className="col-lg-7">
        <img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." />
      </div>
      <div className="col-lg-5">
        <h1>Business Name or Tagline</h1>
        <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
        <a className="btn btn-primary" href="#!">Call to Action!</a>
      </div>
    </div>
  );
}

export default Header;
