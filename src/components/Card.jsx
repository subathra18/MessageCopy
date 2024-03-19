import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const Card = ({ data }) => {
  const { category, message } = data;
  const [msg, setMsg] = useCopyToClipboard();
  const URL = `https://wa.me/?text=${message}`;
  const shareViaWhatsapp = () => {
    window.open(URL, "_blank");
  };
  return (
    <div className="card w-full bg-base-100 py-8 shadow-xl hover:scale-110  transition duration-500">
      <div className="card-body ">
        <p className="text-lg font-semibold">{message}</p>

        <div className="card-actions mt-5  justify-end">
          <button className="btn-square w-8 h-8">
            <MdContentCopy onClick={() => setMsg(message)}></MdContentCopy>
          </button>
          <button className="btn-square w-8 h-8">
            <FaWhatsapp onClick={shareViaWhatsapp}></FaWhatsapp>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
