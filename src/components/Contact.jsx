import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill out all fields");
      return;
    }
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        }
      )
      .then(
        (response) => {
          toast.success("Email sent successfully");
          console.log(response);
          e.target.reset();
        },
        (error) => {
          toast.error("Error sending email");
          console.log(error);
        }
      );
  };

  return (
    <div
      className="flex items-center justify-center bg-[#2b2d42] pb-12"
      id="contact"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-white flex flex-col mt-12 p-4 w-full md:w-1/3"
      >
        <h3 className="text-4xl font-bold text-center">Contact</h3>
        <label className="mb-1">Name</label>
        <input
          type="text"
          name="user_name"
          className="p-1 rounded-md text-black mb-4"
        />
        <label className="mb-1">Email</label>
        <input
          type="email"
          name="user_email"
          className="p-1 rounded-md text-black mb-4"
        />
        <label className="mb-1">Message</label>
        <textarea name="message" rows="8" className="text-black" />
        <input
          type="submit"
          value="Send"
          className="p-1 rounded-md mt-6  bg-lime-700 text-semibold  hover:bg-[#2b2d42] hover:border-2 hover:border-lime-700 hover:text-white"
        />
      </form>
    </div>
  );
};

export default Contact;
