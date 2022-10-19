import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FormGroup, MenuItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Col, Input, Label, Row } from "reactstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function NewModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    // loc_name: "",
    report_type: "",
    description: "",
    loc_lat: "",
    loc_long: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const reports = [
    {
      value: "flooding",
      label: "Flooding",
    },
  ];
  let geoId;
  const handleChange = ({ target: { name, value } }) => {
    setForm(p => ({ ...p, [name]: value }));
  };
  useEffect(() => {
    //ComponenntDidMount
    console.log("Exact position located");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    geoId = window.navigator.geolocation.watchPosition(position => {
      setForm(p => ({
        ...p,
        loc_lat: position.coords.latitude,
        loc_long: position.coords.longitude,
      }));
      console.log(form);
    });

    return () => {
      navigator.geolocation.clearWatch(geoId);
    };
  }, []);
  const handleSubmit = () => {
    // console.log(coor);
    console.log(form);
    handleClose();

    // _postApi(
    //     `${apiURL}/general?query_type=insert`,
    //     form,
    //     (data) => {
    //         if (data.success) {
    //             alert("success")

    //         }
    //     },
    // )
  };
  return (
    <div>
      <Button variant="outlined" color="success" onClick={handleOpen}>
        Report Disaster
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2,mb:2 }}>
                <Row>
                {/* {JSON.stringify(form)} */}
                <Col md={12} >
                    <FormGroup>
                        {/* <Label htmlFor="nameText">Location Name</Label> */}
                        <Input type="text" className="form-control" id="nameText" name='lat' hidden onChange={handleChange} value={form.loc_lat} />
                        <Input type="text" className="form-control" id="nameText" hidden name='long ' onChange={handleChange} value={form.loc_long} />
                    </FormGroup>
                    <FormGroup>
                        <Label >Disaster Type</Label>
                        <Input type="select" className="form-control" id="report_type" name='report_type' value={form.report_type} onChange={handleChange}>
                            <option value=''>Select Disaster Type</option>
                            <option value='flooding'>Flooding</option>
                            <option value='fire_outbreak'>Fire Outbreak</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="Message">Message</Label>
                        <Input type="textarea" className="form-control" id="Message" placeholder="Enter your message" name='description' value={form.description} onChange={handleChange} />
                    </FormGroup>
                    <center><Button onClick={handleSubmit} variant="outlined" color='success' className='p-2 mt-3'>Submit</Button></center>
                </Col>
            </Row>
            {/* <FormGroup>
                  <TextField
                    id="outlined-basic"
                    label="Location Name"
                    variant="outlined"
                    className="mb-3"
                  />
                  <TextField
                    id="outlined-select-disaster"
                    select
                    label="Select Disaster"
                    value={form.report_type}
                    onChange={handleChange}
                    helperText="Please select your disaster"
                  >
                    {reports.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
            </FormGroup> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
