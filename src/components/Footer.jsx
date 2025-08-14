import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Md Milon Mia — All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
