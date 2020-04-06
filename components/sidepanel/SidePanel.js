import React from "react";
import { Menu } from "./node_modules/semantic-ui-react";

import UserPanel from "../userpanel/UserPanel";

class SidePanel extends React.Component {
  render() {
    const { currentUser } = this.props;

    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
      >
        <UserPanel currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;