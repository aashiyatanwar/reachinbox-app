// import { ChevronDown, Reply } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import SingleMail from './SingleMail';
// import SendReply from './SendReply';

// const ReplySection = ({ currColor, singleMail }) => {
//   const [showReply, setShowReply] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'r' || event.key === 'R') {
//         setShowReply(true);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="w-[800px] h-[600px] border border-gray-700 flex justify-between flex-col">
//       <div className="relative w-[800px] flex justify-between flex-col">
//         <div className="flex h-[70px] border border-gray-700 py-3 pl-4">
//           <div className="text-left w-full">
//             <h1 className="text-[14px]">{singleMail && singleMail[0]?.fromName}</h1>
//             <p className="text-[12px] text-gray-400">{singleMail && singleMail[0]?.toEmail}</p>
//           </div>
//           <div className="flex justify-end mr-6 gap-4 h-8 my-2 w-full text-right">
//             <div className={`flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${currColor ? 'bg-[#222426]' : 'bg-[#fff]'}`}>
//               <p className="w-3 h-3 rounded-3xl bg-yellow-600"></p>
//               <p className="text-[12px]">Meeting Completed</p>
//               <ChevronDown />
//             </div>
//             <div className={`flex justify-center p-2 items-center border border-gray-700 rounded ${currColor ? 'bg-[#222426]' : 'bg-[#fff]'}`}>
//               <p className="text-[12px]">Move</p>
//               <ChevronDown className="h-4" />
//             </div>
//             <div className={`flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${currColor ? 'bg-[#222426]' : 'bg-[#fff]'}`}>
//               <p className="mb-2">...</p>
//             </div>
//           </div>
//         </div>
//         <div className="py-3 pl-4">
//           {singleMail?.length > 0 &&
//             singleMail.map((item) => {
//               return <SingleMail currColor={currColor} {...item} key={item.id} />;
//             })}
//           <h2 className="text-[10px] mt-2 mb-3">Today</h2>
//         </div>
//         {showReply && (
//           <div className={`absolute mt-[134px] w-[768px] ml-4 rounded-2xl z-10 overflow-hidden h-[450px] ${currColor ? 'bg-[#141517]' : 'bg-white'} border border-gray-700`}>
//             <SendReply currColor={currColor} singleMail={singleMail[0]} handleCancel={() => setShowReply(!showReply)} />
//           </div>
//         )}
//       </div>

//       <div className="w-[100px] h-10 bg-[#4B63DD] flex items-center ml-4 mb-3 rounded gap-1 flex justify-center items-center">
//         <Reply color="white" />
//         <button className="text-white" onClick={() => setShowReply(!showReply)}>Reply</button>
//       </div>
//     </div>
//   );
// };

// export default ReplySection;
import { ChevronDown, Reply , Mail, Pencil, Trash, Bell, Eye } from 'lucide-react';
import React, { useEffect, useState , useRef} from 'react';
import SingleMail from './SingleMail';
import SendReply from './SendReply';

const ReplySection = ({ currColor, singleMail }) => {
  const [showReply, setShowReply] = useState(false);
  const [showMoveDropdown, setShowMoveDropdown] = useState(false);
  const dropdownRef = useRef(null); 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'r' || event.key === 'R') {
        setShowReply(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMoveDropdown = () => {
    console.log('Move button clicked'); // Debugging log
    setShowMoveDropdown((prev) => !prev);
    console.log('Dropdown state:', !showMoveDropdown); // Debugging log
    setTimeout(() => {
      if (showMoveDropdown) {
        window.addEventListener('click', handleOutsideClick);
      } else {
        window.removeEventListener('click', handleOutsideClick);
      }
    }, 0);
  };


  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log('Clicked outside');
      setShowMoveDropdown(false);
      window.removeEventListener('click', handleOutsideClick);
    }
  };

  // useEffect(() => {
  //   if (showMoveDropdown) {
  //     window.addEventListener('click', handleOutsideClick);
  //   } else {
  //     window.removeEventListener('click', handleOutsideClick);
  //   }

  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [showMoveDropdown]);

  return (
    <div className="w-[800px] h-[600px] border border-gray-700 flex justify-between flex-col">
      <div className="relative w-[800px] flex justify-between flex-col">
        <div className="flex h-[70px] border border-gray-700 py-3 pl-4">
          <div className="text-left w-full">
            <h1 className="text-[14px]">{singleMail && singleMail[0]?.fromName}</h1>
            <p className="text-[12px] text-gray-400">{singleMail && singleMail[0]?.toEmail}</p>
          </div>
          <div className="flex justify-end mr-6 gap-4 h-8 my-2 w-full text-right">
            <div className={`flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${currColor ? 'bg-[#222426]' : 'bg-[#fff]'}`}>
              <p className="w-3 h-3 rounded-3xl bg-yellow-600"></p>
              <p className="text-[12px]">Meeting Completed</p>
              <ChevronDown />
            </div>
            <div className={`relative flex justify-center p-2 items-center border border-gray-700 rounded ${currColor ? 'bg-[#222426]' : 'bg-[#fff]'} cursor-pointer`} onClick={toggleMoveDropdown}>
              <p className="text-[12px]">Move</p>
              <ChevronDown className="h-4" />
              {showMoveDropdown && (
                <div
                  ref={dropdownRef} // Attach the ref to the dropdown
                  className={`absolute top-10 right-0 move-dropdown bg-[#23272C] text-white w-40 rounded shadow-lg z-10`}
                >
                  <ul className="flex flex-col">
                    <li className="px-3 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Mark as unread
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                      <Pencil className="w-4 h-4" />
                      Edit lead
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                      <Trash className="w-4 h-4" />
                      Remove lead
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                      <Bell className="w-4 h-4" />
                      Set reminder
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                      <Trash className="w-4 h-4" />
                      Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={`flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${currColor ? 'bg-[#222426]' : 'bg-[#fff]'}`}>
              <p className="mb-2">...</p>
            </div>
          </div>
        </div>
        <div className="py-3 pl-4">
          {singleMail?.length > 0 &&
            singleMail.map((item) => {
              return <SingleMail currColor={currColor} {...item} key={item.id} />;
            })}
          <h2 className="text-[10px] mt-2 mb-3">Today</h2>
        </div>
        {showReply && (
          <div className={`absolute mt-[134px] w-[768px] ml-4 rounded-2xl z-10 overflow-hidden h-[450px] ${currColor ? 'bg-[#141517]' : 'bg-white'} border border-gray-700`}>
            <SendReply currColor={currColor} singleMail={singleMail[0]} handleCancel={() => setShowReply(!showReply)} />
          </div>
        )}
      </div>

      <div className="w-[100px] h-10 bg-[#4B63DD] flex items-center ml-4 mb-3 rounded gap-1 flex justify-center items-center">
        <Reply color="white" />
        <button className="text-white" onClick={() => setShowReply(!showReply)}>Reply</button>
      </div>
    </div>
  );
};

export default ReplySection;

