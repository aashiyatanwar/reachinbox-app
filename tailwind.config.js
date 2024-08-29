// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       width: {
        
//         'full': '100%', // Ensure full width usage
//       },
//       height: {
//         'full': '100vh', // Ensure full height usage
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'full': '100%', // Full width
        'screen': '100vw', // Full width of the viewport
      },
      height: {
        'full': '100%', // Full height
        'screen': '100vh', // Full height of the viewport
      },
      maxWidth: {
        'content': '2040px', // Maximum width for your content
      },
    },
  },
  plugins: [],
};
