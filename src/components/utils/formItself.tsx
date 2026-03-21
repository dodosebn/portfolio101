import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  FaLocationArrow,
  FaGlobe,
  FaMobileAlt,
  FaTools,
  FaBullhorn,
  FaRobot,
} from "react-icons/fa";
import Confetti from "react-confetti";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type Template = {
  label: string;
  icon: React.ReactNode;
  message: string;
};

const TEMPLATES: Template[] = [
  {
    label: "Website",
    icon: <FaGlobe />,
    message: "Hi, I'd like to build a website. Idea: [brief]. Budget: [range].",
  },
  {
    label: "Mobile App",
    icon: <FaMobileAlt />,
    message: "Hi, I want to develop a mobile app. Idea: [brief]. Budget: [range].",
  },
  {
    label: "Web Management",
    icon: <FaTools />,
    message: "Hi, I need help managing and maintaining my website. Scope: [details].",
  },
  {
    label: "Ad & Marketing",
    icon: <FaBullhorn />,
    message:
      "Hi, I'm looking for help with advertising and marketing. Goal: [objective]. Budget: [range].",
  },
  {
    label: "AI Agent / Bot",
    icon: <FaRobot />,
    message:
      "Hi, I need an AI agent or automation bot. Use case: [e.g. WhatsApp bot, workflow automation]. Budget: [range].",
  },
];

const FIELD_CONFIG = [
  {
    id: "name",
    label: "Your Name",
    type: "text",
    placeholder: "Enter your name",
    multiline: false,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    multiline: false,
  },
  {
    id: "message",
    label: "Message",
    type: "text",
    placeholder: "Tell me about your project...",
    multiline: true,
  },
] as const;

const inputBaseClass = `
  p-2 w-full border rounded-md
  placeholder-gray-500 dark:placeholder-gray-400
  focus:outline-none focus:ring-1 transition-all
`;

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const FormItself = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    document.body.style.overflow = showConfetti ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showConfetti]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email: string): boolean =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleTemplateClick = (message: string) => {
    setFormData((prev) => ({ ...prev, message }));
  };

  const showFeedback = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!validateEmail(formData.email)) errors.email = "Invalid email format";
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
        showFeedback("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({});
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      } else {
        showFeedback("Failed to send message. Please try again.");
      }
    } catch {
      showFeedback("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {showConfetti &&
        ReactDOM.createPortal(
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={300}
            style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none", background: "transparent" }}
          />,
          document.body
        )}

      {successMessage && (
        <div className="text-green-600 font-bold mb-2" aria-live="polite">
          {successMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`${successMessage ? "hidden" : "block"} space-y-3`}
      >
        {FIELD_CONFIG.map(({ id, label, type, placeholder, multiline }) => {
          const hasError = !!formErrors[id as keyof FormErrors];
          const borderClass = hasError
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-600";

          return (
            <div key={id} className="flex flex-col">
              <label htmlFor={id} className="text-start text-sm mb-1">
                {label}
              </label>

              {multiline ? (
                <>
                  <textarea
                    className={`${inputBaseClass} ${borderClass} min-h-24 resize-y`}
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    value={formData[id as keyof FormData]}
                    onChange={handleChange}
                  />

                  <div className="mt-3 border border-gray-300 dark:border-gray-600 rounded-md p-3">
                    <p className="text-xs text-gray-500 text-start mb-2">
                      Quick Templates
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TEMPLATES.map(({ label: tLabel, icon, message }) => (
                        <button
                          key={tLabel}
                          type="button"
                          onClick={() => handleTemplateClick(message)}
                          className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-full
                           dark:bg-gray-800/60 dark:hover:bg-gray-700/60 transition-colors"
                        >
                          {icon}
                          {tLabel}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <input
                  className={`${inputBaseClass} ${borderClass}`}
                  type={type}
                  name={id}
                  id={id}
                  placeholder={placeholder}
                  value={formData[id as keyof FormData]}
                  onChange={handleChange}
                />
              )}

              {hasError && (
                <p className="text-xs text-red-500 mt-1">
                  {formErrors[id as keyof FormErrors]}
                </p>
              )}
            </div>
          );
        })}

        <div className="pt-2 flex items-start">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#09090b] dark:bg-[#1f2938] px-4 py-2 rounded-full text-[#fafafa] disabled:opacity-50 flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white" />
            ) : (
              <>
                <FaLocationArrow size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormItself;