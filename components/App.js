import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import SidePanel from "./sidepanel/SidePanel";

const App = ({ currentUser }) => (
    <Grid columns="equal" className="app" style={{ background: secondaryColor }}>
      <SidePanel
        key={currentUser && currentUser.uid}
        currentUser={currentUser}
      />
    </Grid>
  );

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);
