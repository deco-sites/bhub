import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function Layout({ children, className }: Props) {
  return <div class={`mx-auto max-w-7xl ${className}`}>{children}</div>;
}
