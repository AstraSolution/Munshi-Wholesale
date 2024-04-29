import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
          <p className="text-sm">About Us | Services | Contact</p>
        </div>
      </footer>
    </div>
  );
}
