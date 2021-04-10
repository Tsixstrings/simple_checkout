import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  Icon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import { updateCatalog, resetCatalog } from "../../store/actions";

export default function SimpleMenu() {
  const dispatch = useDispatch();
  const { catalog } = useSelector((store) => store.catalog);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [catalogData, setCatalogData] = useState(JSON.stringify(catalog));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = () => {
    console.log("Entra correctamente");
    dispatch(updateCatalog(JSON.parse(catalogData)));
    setShowUpdateDialog(false);
  };

  const handleReset = () => {
    dispatch(resetCatalog());
    setAnchorEl(null);
  };

  const handleDisplayUpdate = () => {
    setAnchorEl(null);
    setShowUpdateDialog(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon>settings</Icon>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDisplayUpdate}>Update Catalog</MenuItem>
        <MenuItem onClick={(e) => handleReset()}>Reset Catalog</MenuItem>
      </Menu>
      <Dialog
        onClose={(e) => setShowUpdateDialog(false)}
        open={showUpdateDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Update catalog</DialogTitle>
        <DialogContent>
          <TextField
            label="Catalog Data"
            multiline
            value={catalogData}
            fullWidth
            onChange={(e) => setCatalogData(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => setShowUpdateDialog(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
