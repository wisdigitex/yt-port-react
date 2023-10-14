import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { Alert } from "./";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";

const Contact = () => {
  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  // Create an event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the state for the corresponding input field
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMessage = async () => {
    if (data.email === "" || data.email === null) {
      setAlert({
        isAlert: true,
        message: "Required fields cannot be empty",
        status: "danger",
      });

      setInterval(() => {
        setAlert({
          isAlert: false,
          message: "",
          status: "",
        });
      }, 4000);
    } else {
      await addDoc(collection(db, "contacts"), { ...data })
        .then(() => {
          setAlert({
            isAlert: true,
            message: "Thanks for contacting me..",
            status: "success",
          });

          setData({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
          });

          setInterval(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: "",
            });
          }, 4000);
        })
        .catch((err) => {
          setAlert({
            isAlert: true,
            message: "Something went wrong",
            status: "danger",
          });

          setInterval(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: "",
            });
          }, 4000);
        });
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* Toast Alert  */}
      <AnimatePresence>
        {alert.isAlert && <Alert status={alert?.status} msg={alert?.message} />}
      </AnimatePresence>
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            Contact Me
          </p>
          <img
            src={Leaf2}
            className="w-6 h-auto object-contain rotate-210"
            alt=""
          />
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent w-full outline-none focus:border-primary"
              name="firstname"
              value={data?.firstname}
              onChange={handleInputChange}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent w-full outline-none focus:border-primary"
              name="lastname"
              value={data?.lastname}
              onChange={handleInputChange}
            />
          </div>

          <input
            type="text"
            placeholder="Email"
            className="px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent w-full outline-none focus:border-primary"
            name="email"
            value={data?.email}
            onChange={handleInputChange}
          />

          <textarea
            className="px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent w-full outline-none focus:border-primary"
            name="message"
            id=""
            cols="0"
            rows="10"
            placeholder="Message here..."
            value={data?.message}
            onChange={handleInputChange}
          ></textarea>

          <div className="w-full flex items-center justify-center lg:justify-end">
            <button
              className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md text-bgPrimary w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
