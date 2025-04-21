import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const ClockIcon: React.FC<SvgIconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 209 206"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* All the <path> elements below remain unchanged */}
    <path d="M173.636 75.5947H169.176C168.124 ..." fill="white" />
    <path d="M39.8242 75.5947H35.364C34.3115 ..." fill="white" />
    <path d="M104.5 140.271C103.448 ..." fill="white" />
    {/* Add more <path> elements as needed */}
  </svg>
);

export default ClockIcon;

// import React from "react";

// interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
// }

// const ClockIcon: React.FC<SvgIconProps> = ({ className, ...props }) => (
//   <svg
//     viewBox="0 0 209 206"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//     {...props}
//   >
//     {/* All the <path> elements below remain unchanged */}
//     <path d="M173.636 75.5947H169.176C168.124 ..." fill="white" />
//     <path d="M39.8242 75.5947H35.364C34.3115 ..." fill="white" />
//     <path d="M104.5 140.271C103.448 ..." fill="white" />
//     {/* Keep all your other paths here */}
//   </svg>
// );

// export default ClockIcon;
// import React from "react";

// interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
// }

// const ClockIcon: React.FC<SvgIconProps> = ({ className, ...props }) => {
//   return (
//     <svg
//       viewBox="0 0 209 206"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       {...props}
//     >
//       {/* All the <path> elements below remain unchanged */}
//       <path d="M173.636 75.5947H169.176C168.124 ..." fill="white" />
//       <path d="M39.8242 75.5947H35.364C34.3115 ..." fill="white" />
//       <path d="M104.5 140.271C103.448 ..." fill="white" />
//       {/* Keep all your other paths here */}
//     </svg>
//   );
// };

// export default ClockIcon;