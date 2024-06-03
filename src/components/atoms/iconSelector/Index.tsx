import { IconSelectorProps } from "@/Interfaces/layout.interface";

export const IconSelector: React.FC<IconSelectorProps> = ({
  name,
  color = "text-inherit",
  width = "w-6",
  stroke = 2,
  height = "h-6",
  fill = "fill-current",
  className = "",
}: IconSelectorProps) => {
  switch (name) {
    case "close":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${width} ${height} ${color} ${className} ${fill} `}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
        </svg>
      );
    case "menu":
      return (
        <svg
          className={`${width} ${height} ${color} ${className}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={stroke}
          stroke="currentColor"
        >
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      );
    case "moon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${width} ${height} ${color} ${className} ${fill} `}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385
             0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 
             9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 
             9.753 0 0 0 9.002-5.998Z"
          ></path>
        </svg>
      );

    case "sun":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${width} ${height} ${color} ${className} ${fill} `}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246
           5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12
            8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 
            8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 
            19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219
             18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24
              6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 
              2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"
          ></path>
        </svg>
      );
    default:
      return null;
  }
};
