import { Logo } from "../atoms/Logo.tsx";
import {
  Action,
  ActionStyleTypes,
  classSet,
  Header,
  HeaderProps,
} from "../src.deps.ts";

export function HarborHeader(props: HeaderProps) {
  return (
    <Header
      class={classSet(undefined, "bg-[#3E5F7A]-500")}
      logo={
        <Action
          href="/"
          actionStyle={ActionStyleTypes.Link | ActionStyleTypes.Rounded}
        >
          <Logo />
        </Action>
      }
      {...props}
    />
  );
}
