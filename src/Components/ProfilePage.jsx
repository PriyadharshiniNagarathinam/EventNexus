import React, { useState } from "react";

const ProfilePage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    profileImage: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    other: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change for profile image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#2b2219] p-8 pt-[100px]">
      <div className="max-w-4xl mx-auto bg-[#1c1c1c] p-8 rounded-lg shadow-lg">
        <h1 className="text-[#f2ae01] text-3xl font-bold mb-6 text-center">
          Edit Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Image */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <img
                src={formData.profileImage || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2 text-[#f2ae01]"
            />
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#f2ae01] mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-[#f14b17]"
              />
            </div>
            <div>
              <label className="block text-[#f2ae01] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-[#f14b17]"
              />
            </div>
            <div>
              <label className="block text-[#f2ae01] mb-2">Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-[#f14b17]"
              />
            </div>
            <div>
              <label className="block text-[#f2ae01] mb-2">Other Details</label>
              <textarea
                name="other"
                value={formData.other}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-[#f14b17]"
                rows="4"
              />
            </div>
          </div>

          {/* Social Accounts */}
          <div className="mt-6">
            <h2 className="text-[#f2ae01] text-2xl font-bold mb-4">
              Social Accounts
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[#f2ae01] mb-2">Facebook</label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-[#f14b17]"
                />
              </div>
              <div>
                <label className="block text-[#f2ae01] mb-2">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-[#f14b17]"
                />
              </div>
              <div>
                <label className="block text-[#f2ae01] mb-2">Instagram</label>
                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-[#f14b17]"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f14b17] text-white font-semibold py-3 rounded-lg hover:bg-[#e03b1e] transition-colors duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
