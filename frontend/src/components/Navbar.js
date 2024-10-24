import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <div>
          <button className="btn btn-outline-light me-2">로그인</button>
          <button className="btn btn-outline-light">회원가입</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
