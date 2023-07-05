export const closeIcon = () => (
    <svg version="1.1"
         xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="11"
              x2="11" y2="1"
              stroke="black"
              strokeWidth="2"/>
        <line x1="1" y1="1"
              x2="11" y2="11"
              stroke="black"
              strokeWidth="2"/>
    </svg>
);


export const BackIcon: ({size}: { size?: any }) => JSX.Element = ({size = 100}) => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} x="0" y="0" viewBox="0 0 24 24"
         className="">
        <g>
            <path
                d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"
                fill="#ffffff" data-original="#000000" className=""></path>
        </g>
    </svg>
)
