
export default function BillingForm() {
  

  return (
    <div className="bg-white max-w-lg mx-auto my-16 rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-6 px-8">
        <h1 className="font-bold text-2xl text-white">
          Billing Details
        </h1>
        <p className="text-green-100 mt-1">Please fill in your information below</p>
      </div>
      
      {/* Form */}
      <div className="p-8">
        {/* Personal Info Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            {/* <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              <span>P</span>
            </div> */}
            <h2 className="font-medium text-gray-700 ml-2">Personal Information</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
              <input 
                type="text" 
                placeholder="" 
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
              <input 
                type="text" 
                placeholder="" 
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              />
            </div>
          </div>
        </div>
        
        {/* Address Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            {/* <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              <span>A</span>
            </div> */}
            <h2 className="font-medium text-gray-700 ml-2">Shipping Address</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
              <select 
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              >
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">State/UT</label>
              <input 
                type="text" 
                placeholder="New Delhi" 
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Address</label>
            <input 
              type="text" 
              placeholder="123 Example Street, Apt 4B" 
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button 
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium flex items-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            <span className="mr-2">✓</span>
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
}