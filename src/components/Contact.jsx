import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          console.log("Email sent successfully:", response);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center bg-slate-950" id="contact">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-white flex flex-col mt-12 p-4 w-full md:w-1/3"
      >
        <h3 className="text-4xl font-bold text-center">Contact</h3>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="p-1 rounded-md text-black mb-4"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="p-1 rounded-md text-black mb-4"
        />
        <label>Message</label>
        <textarea name="message" rows="8" className="text-black" />
        <input
          type="submit"
          value="Send"
          className="p-1 rounded-md hover:border-2 mt-2"
        />
      </form>
    </div>
  );
};

export default Contact;
