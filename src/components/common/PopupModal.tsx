
import { useEffect, useState } from "react";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Automatically open the modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[#1F4788]">Welcome to Tutor Christabel!</h2>
        <p className="text-gray-600 mb-4">
          We offer personalized tutoring services to help you achieve your academic goals. Feel free to reach out to us for more information.
        </p>
        <button
          onClick={closeModal}
          className="bg-[#1F4788] text-white px-4 py-2 rounded hover:bg-[#16375C]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupModal;