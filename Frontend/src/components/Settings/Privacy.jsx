import React, { useState } from "react";

const Privacy = () => {
  const [isAccountPublic, setIsAccountPublic] = useState(true);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Privacy settings saved:", {
      isAccountPublic,
    });
    alert("Privacy settings updated successfully!");
  };

  return (
    <div className="privacy-page min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full text-white">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Privacy</h2>
        <p className="mb-6 text-gray-400">Manage your privacy settings.</p>
        <form onSubmit={handleSaveChanges} className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-gray-300">Private your Account</label>
            <button
              type="button"
              onClick={() => setIsAccountPublic(!isAccountPublic)}
              className={`${
                isAccountPublic ? "bg-blue-600" : "bg-gray-600"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  isAccountPublic ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Privacy;
