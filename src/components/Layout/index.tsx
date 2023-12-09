import React, { CSSProperties } from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};
const Layout: React.FC<Props> = (props) => {
  return (
    <div
      className={clsx("max-w-screen-xs mx-auto w-full", props?.className)}
      style={props?.style}
    >
      {props.children}
    </div>
  );
};

export default Layout;
