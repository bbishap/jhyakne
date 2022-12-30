import Portal from "@mui/base/Portal";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function PortalComponent(children: any) {
  return <Portal>{children}</Portal>;
}
