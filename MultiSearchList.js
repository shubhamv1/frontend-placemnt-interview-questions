import React from "react";
import { TextField, List, ListItem, ListItemText } from "@mui/material";

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" }
];

class MuiList extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <TextField label="Search"   variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={this.handleSearchChange}/>
        <List> {filteredItems.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}</List>
      </div>
    );
  }
}

export default MuiList;

