import { ReactNode } from "react";
import { UsersProvider } from "./users";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return <UsersProvider>{children}</UsersProvider>;
};
export default Providers;
