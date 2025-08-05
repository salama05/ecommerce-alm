import React, { useState } from "react";
import { Link } from "react-router-dom";

const menu = [
  {
    header: "Manage My Account",
    items: [
      { key: "profile", label: "My Profile" },
      { key: "address", label: "Address Book" },
      { key: "payment", label: "My Payment Options" },
    ],
  },
  {
    header: "My Orders",
    items: [
      { key: "returns", label: "My Returns" },
      { key: "cancellations", label: "My Cancellations" },
    ],
  },
  {
    header: "My Wishlist",
    items: [{ key: "wishlist", label: "My Wishlist" }],
  },
];

const Account = () => {
  const [active, setActive] = useState("profile");

  const renderContent = () => {
    switch (active) {
      case "profile":
        return <ProfileForm />;
      default:
        return <div className="py-10 text-center text-gray-500">Coming soon...</div>;
    }
  };

  return (
    <div className="my-12 space-y-10">
      {/* Breadcrumb and Welcome */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          <Link to="/">Home</Link> <span className="mx-1">/</span> My Account
        </div>
        <div className="text-sm font-medium" style={{fontSize: '14px', fontWeight: '500'}}>
          <span style={{color: '#000000'}}>Welcome! </span>
          <span style={{color: '#ef4444'}}>MD Rimel</span>
        </div>
      </div>

      <div className="flex flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          {menu.map((section) => (
            <div key={section.header} className="mb-6">
              <h4 className="mb-3 text-sm font-semibold text-gray-800">
                {section.header}
              </h4>
              <ul className="space-y-2">
                {section.items.map((it) => (
                  <li key={it.key}>
                    <button
                      type="button"
                      onClick={() => setActive(it.key)}
                      className={`text-left text-sm hover:text-red-500 ${
                        active === it.key ? "font-medium text-red-500" : "text-gray-600"
                      }`}
                      style={{
                        backgroundColor: 'transparent',
                        color: active === it.key ? '#ef4444' : '#4b5563',
                        padding: '8px 0',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: active === it.key ? '500' : '400',
                        cursor: 'pointer',
                        display: 'block',
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      {it.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
};

const ProfileForm = () => {
  return (
    <form className="space-y-6 p-8">
      <h3 className="mb-4 text-lg font-semibold text-red-500" style={{color: '#ef4444', fontSize: '18px', fontWeight: '600', marginBottom: '16px'}}>Edit Your Profile</h3>
      <div className="grid grid-cols-2 gap-4">
        <Input label="First Name" defaultValue="Md"  />
        <Input label="Last Name" defaultValue="Rimel"  />
        <Input label="Email" defaultValue="rimel111@gmail.com"  />
        <Input label="Address" defaultValue="Kingston, 5236, United State"  />
      </div>

      <h4 className="pt-4 text-sm font-medium text-gray-700">Password Changes</h4>
      <div className="grid grid-cols-2 gap-4">
        <Input label="Current Password" type="password" />
        <div />
        <Input label="New Password" type="password" />
        <Input label="Confirm New Password" type="password" />
      </div>

      <div className="flex justify-end gap-4 pt-6">
        <button
          type="reset"
          className="rounded-md border px-6 py-2 text-sm hover:bg-gray-100"
          style={{
            backgroundColor: 'white',
            color: '#374151',
            padding: '8px 24px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '80px',
            height: '40px'
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-500 px-6 py-2 text-sm text-white hover:bg-red-600"
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '8px 24px',
            borderRadius: '6px',
            border: 'none',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '120px',
            height: '40px'
          }}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

const Input = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-gray-600">{label}</label>
    <input
      type={type}
      {...props}
      className="h-10 bg-gray-200 px-3 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md"
      style={{backgroundColor: '#e5e7eb', height: '40px', padding: '0 12px', fontSize: '14px', border: 'none', borderRadius: '6px', outline: 'none'}}
    />
  </div>
);

export default Account;
