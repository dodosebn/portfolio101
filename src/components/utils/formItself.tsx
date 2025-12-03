import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

const FormItself = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!validateEmail(formData.email))
      errors.email = "Invalid email format";
    if (!formData.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMessage(" Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({});
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setSuccessMessage("🚩Failed to send message. Please try again.");
        setTimeout(() => setSuccessMessage(""), 5000);
      }
    } catch (err) {
      setSuccessMessage("🚩 Failed to send message. Please try again.");
      setTimeout(() => setSuccessMessage(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {successMessage && (
        <div className="text-green-600 font-bold mb-2" aria-live="polite">
          {successMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`${successMessage ? "hidden" : "block"} space-y-2`}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-start">
            Your Name
          </label>
          <input
            className={`p-2 border ${
              formErrors.name && "border-red-500"
            } w-full`}
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-start">
            Email
          </label>
          <input
            className={` p-2 border ${
              formErrors.email && "border-red-500"
            } w-full`}
                        placeholder="Enter Your Email"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-start">
            Message
          </label>
          <textarea
            className={` p-2 border ${
              formErrors.message && "border-red-500"
            } w-full h-24`}
            name="message"
                                    placeholder="Table Your Idea"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="pt-2 flex items-start">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#09090b] dark:bg-[#1f2938] button px-4 py-2 rounded-full text-[#fafafa] disabled:opacity-50"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
            ) : ( <div className="flex space-x-0.5">
             <FaLocationArrow size={18} className="mt-1" /> <div>Send Message</div>  </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormItself;