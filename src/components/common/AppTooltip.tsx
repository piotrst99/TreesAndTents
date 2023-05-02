import { Tooltip } from "@mui/material";
import { ReactElement } from "react";

interface IAppTooltip {
  children: ReactElement;
  title: string;
}

export default function AppTooltip(props: IAppTooltip) {
  const { children, title } = props;

  return (
    <Tooltip title={title} arrow>
      {children}
    </Tooltip>
  );
}
