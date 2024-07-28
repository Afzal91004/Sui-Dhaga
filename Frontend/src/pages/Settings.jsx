import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleDeleteAccount = () => {
    console.log("Account deleted");
  };

  return (
    <div className={`settings-page min-h-screen flex items-center justify-center ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className={`shadow-lg rounded-lg p-8 max-w-md w-full text-${isDarkMode ? "white" : "black"} ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-3xl font-semibold mb-4">Settings</h2>
        <p className="mb-6">
          Manage your account and preferences.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-user-edit mr-2"></i>Profile
            </span>
            <Link
              to="/profile"
              className="text-gray-400 hover:text-gray-200 font-medium flex items-center"
            >
              <i className="fas fa-cog mr-2"></i>Manage your profile
            </Link>
          </div>
          <hr className="border-gray-700"/>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-bell mr-2"></i>Notifications
            </span>
            <Link
              to="/notifications"
              className="text-gray-400 hover:text-gray-200 font-medium flex items-center"
            >
              <i className="fas fa-cog mr-2"></i>Manage notifications
            </Link>
          </div>
          <hr className="border-gray-700"/>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-user-shield mr-2"></i>Privacy
            </span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-gray-200 font-medium flex items-center"
            >
              <i className="fas fa-cog mr-2"></i>Manage privacy
            </Link>
          </div>
          <hr className="border-gray-700" />
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-key mr-2"></i>Change Password
            </span>
            <Link
              to="/change-password"
              className="text-gray-400 hover:text-gray-200 font-medium flex items-center"
            >
              <i className="fas fa-cog mr-2"></i>Change Password
            </Link>
          </div>
          <hr className="border-gray-700"/>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-adjust mr-2"></i>Dark Mode
            </span>
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`${
                isDarkMode ? "bg-blue-600" : "bg-gray-600"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </button>
          </div>
          <hr className="border-gray-700"/>
          <div className="flex items-center justify-between">
            <span className="text-red-600 flex items-center">
              <i className="fas fa-trash-alt mr-2"></i>Delete Account
            </span>
            <button
              onClick={handleDeleteAccount}
              className="text-red-600 hover:text-red-400 font-medium flex items-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
