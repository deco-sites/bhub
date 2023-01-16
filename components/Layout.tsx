import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return <div class="min-h-screen">{props.children}</div>;
}
