import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // For accessibility

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setModalIsOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "",
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1
            style={{ marginTop: "20px" }}
            className="text-3xl  sm:text-4xl font-bold mb-4"
          >
            Contact WallStreetWheels
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Have questions about our luxury vehicles? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Sales & Support</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Sales</h3>
                  <p className="text-gray-300">sales@wallstreetwheels.com</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-medium">Support</h3>
                  <p className="text-gray-300">support@wallstreetwheels.com</p>
                  <p className="text-gray-300">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Showroom</h2>
              <div className="space-y-2">
                <p className="text-gray-300">123 Vandalur</p>
                <p className="text-gray-300">Chennai TamilNadu</p>
                <p className="text-gray-300">Mon-Fri: 9am - 7pm</p>
                <p className="text-gray-300">Sat: 10am - 5pm</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium mb-1"
                >
                  Vehicle Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="sports">Sports Cars</option>
                  <option value="luxury">Luxury Sedans</option>
                  <option value="suv">SUVs</option>
                  <option value="classic">Classic Cars</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-white text-black font-medium rounded hover:bg-gray-200 transition text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Submission Confirmation"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="bg-gray-900 p-6 rounded-lg max-w-md mx-auto mt-20 text-white">
          <h2 className="text-xl font-bold mb-4">Thank You!</h2>
          <p className="mb-4">
            Your message has been sent successfully. Our team will contact you
            soon.
          </p>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </Modal>

      <style jsx global>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          transform: translate(-50%, -50%);
          border: none;
          background: transparent;
          overflow: auto;
          outline: none;
          padding: 0;
          width: 100%;
          max-width: 500px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Contact;
