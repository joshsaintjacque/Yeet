import Link from "components/Link";
import { User } from "models/User";
import React from "react";
import {
  destroy_user_session_path,
  new_user_session_path,
} from "routes.js.erb";

interface MainLayoutProps {
  children: React.ReactNode;
  currentUser?: User;
}

const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const { children, currentUser } = props;
  return (
    <div>
      <header>
        <ul>
          {currentUser && (
            <li>
              <Link href={destroy_user_session_path()} method="DELETE">
                Sign Out
              </Link>
            </li>
          )}
          {!currentUser && (
            <li>
              <Link href={new_user_session_path()}>Sign In</Link>
            </li>
          )}
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
