// import React from 'react';
// import ClockIcon from './clockSvgCode';

// const BackgroundColor: React.FC = () => (
//   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//     {/* Background SVG */}
//     <svg
//       width="667"
//       height="254"
//       viewBox="0 0 667 254"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g style={{ mixBlendMode: 'multiply' }}>
//         <rect
//           width="667"
//           height="254"
//           fill="url(#paint0_linear_29_28444)"
//         />
//       </g>
//       <defs>
//         <linearGradient
//           id="paint0_linear_29_28444"
//           x1="500.25"
//           y1="127"
//           x2="281.014"
//           y2="-121.21"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#491D8B" />
//           <stop offset="1" stopColor="#491D8B" stopOpacity="0.88" />
//         </linearGradient>
//       </defs>
//     </svg>

//     {/* Clock Icon on the right */}
//     <ClockIcon width={48} height={48} />
//   </div>
// );

// export default BackgroundColor;P

import React from 'react';

const BackgroundColor: React.FC = () => (
  <svg
    width="667"
    height="254"
    viewBox="0 0 667 254"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g style={{ mixBlendMode: 'multiply' }}>
      <rect
        width="667"
        height="254"
        fill="url(#paint0_linear_29_28444)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_29_28444"
        x1="500.25"
        y1="127"
        x2="281.014"
        y2="-121.21"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#491D8B" />
        <stop offset="1" stopColor="#491D8B" stopOpacity="0.88" />
      </linearGradient>
    </defs>
  </svg>
);

export default BackgroundColor;

