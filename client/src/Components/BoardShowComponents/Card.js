import React from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import Paper from "material-ui/Paper";
import { ListItem } from "material-ui/List";
import Editable from "../Editable";

const paperStyle = {
  margin: 5,
  height: "100%",
  width: "100%"
};
const style = {
  width: "100px",
  height: "100px",
  border: "1px solid red",
  margin: "10px"
};

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  // onChange = (e, attribute) => {
  //   console.log("you changed something");
  //   console.log(`${attribute} and ${e.target.value}`);
  //   this.props.editCard();
  // };

  //material-ui modal methods
  onClose = e => {
    //things
    console.log("closing");
    this.setState({ open: false });
  };
  onOpen = e => {
    console.log("opening");
    this.setState({ open: true });
  };
  render() {
    const {
      onClose,
      edit,
      title,
      description,
      activity,
      comments,
      members,
      _id,
      labels
    } = this.props;
    return (
      <Paper onClick={this.onOpen} style={style}>
        <ListItem hoverColor="none" primaryText={title}>
          {/* MODAL */}
          <Dialog
            modal={false}
            open={this.state.open}
            onRequestClose={this.onClose}
          >
            <div>
              <h5>{title}</h5>
              <div>
                <h5>description</h5>
                <Editable name="description" onSubmit={edit}>
                  <h5>{description}</h5>
                </Editable>
              </div>
              <div>
                <h5>members</h5>
                <Editable name="members" onSubmit={edit}>
                  <p>{members}</p>
                </Editable>
              </div>
              <div>
                <h5>activity</h5>
                <Editable name="activity" onSubmit={edit}>
                  <h5>{activity}</h5>
                </Editable>
              </div>
            </div>
          </Dialog>
        </ListItem>
      </Paper>
    );
  }
}
// const Card = props => {
//   return (
//     <div>
//       <Dialog
//         title={prop.title}
//         // actions={actions}
//         modal={true}
//         open={this.state.open}
//         onRequestClose={this.handleClose}
//       >
//         The actions in this window were passed in as an array of React objects.
//       </Dialog>
//       <Paper style={paperStyle}>
//         <p>{props.title}</p>
//       </Paper>
//     </div>
//
//   );
// };
export default Card;