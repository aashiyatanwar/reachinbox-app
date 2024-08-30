import { ChevronDown, Eye, Reply, X, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { postMailMessages } from "../api/index";

const initalState = {
  toName: "",
  to: "",
  from: "",
  fromName: "",
  subject: "",
  body: "",
  references: [],
  inReplyTo: "",
};

const SendReply = ({ currColor, handleCancel, singleMail }) => {
  const [formData, setFormData] = useState(initalState);

  useEffect(() => {
    const token = localStorage.getItem("reachinbox-auth");
    setFormData({
      ...formData,
      toName: singleMail.toName || "",
      fromName: singleMail.fromEmail || "",
      to: singleMail.toEmail || "",
      from: singleMail.fromEmail || "",
      references: singleMail.references || [],
      inReplyTo: singleMail.inReplyTo || "",
    });
  }, [singleMail]);
  console.log("singleMail", singleMail);
  const handleSubmit = () => {
    console.log(formData, "data");
    postMailMessages(singleMail.threadId, formData)
      .then(() => {
        alert("Reply has been sent");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Section */}
      <div
        className={`h-10 flex justify-between items-center px-8 py-2 text-[16px] ${
          currColor ? "bg-[#23272C]" : "bg-white"
        } border-b ${currColor ? "border-gray-700" : "border-gray-300"}`}
      >
        <p>Reply</p>
        <p onClick={handleCancel} className="cursor-pointer">
          <X />
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex-grow overflow-auto">
        <div className="text-[12px] flex items-center gap-2 px-8 py-2 border-b border-gray-700">
          <p className="text-gray-400">To Name:</p>
          <input
            type="text"
            value={formData.toName}
            className={`flex-grow ${
              currColor ? "bg-[#141517]" : "bg-white"
            } text-white px-2 py-1 rounded outline-none`}
            onChange={(e) =>
              setFormData({ ...formData, toName: e.target.value })
            }
          />
        </div>

        <div className="text-[12px] flex items-center gap-2 px-8 py-2 border-b border-gray-700">
          <p className="text-gray-400">To:</p>
          <input
            type="text"
            value={formData.to}
            className={`flex-grow ${
              currColor ? "bg-[#141517]" : "bg-white"
            } text-white px-2 py-1 rounded outline-none`}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          />
        </div>

        <div className="text-[12px] flex items-center gap-2 px-8 py-2 border-b border-gray-700">
          <p className="text-gray-400">From:</p>
          <input
            type="text"
            value={formData.from}
            className={`flex-grow ${
              currColor ? "bg-[#141517]" : "bg-white"
            } text-white px-2 py-1 rounded outline-none`}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
        </div>

        <div className="text-[12px] flex items-center gap-2 px-8 py-2 border-b border-gray-700">
          <p className="text-gray-400">Subject:</p>
          <input
            type="text"
            value={formData.subject}
            className={`flex-grow ${
              currColor ? "bg-[#141517]" : "bg-white"
            } text-white px-2 py-1 rounded outline-none`}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>

        {/* Textarea for Email Body */}
        <div className="text-[12px] px-8 py-2">
          <textarea
            placeholder=""
            value={formData.body}
            className={`w-full h-[150px] ${
              currColor ? "bg-[#141517]" : "bg-white"
            } text-white px-2 py-1 rounded outline-none`}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>
      </div>

      {/* Footer Section with Buttons */}
      <div className="w-full mt-auto px-8 py-2 border-t border-gray-700">
        <div className="flex justify-start gap-4">
          <div className="flex items-center rounded bg-[#4B63DD] hover:bg-[#3B52CC] cursor-pointer">
            <button className="text-white px-4 py-2" onClick={handleSubmit}>
              Send
            </button>
            <ChevronDown className="text-white" />
          </div>
          <div className="flex items-center rounded cursor-pointer px-4 py-2">
            <Zap className="h-4 mr-2" />
            <button>Variables</button>
          </div>
          <div className="flex items-center rounded cursor-pointer px-4 py-2">
            <Eye className="h-4 mr-2" />
            <button>Preview Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendReply;
