import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "../styles/style.css";
import {
  Container,
  Card,
  Col,
  Row,
  CardBody,
  FormGroup,
  Input,
  Label,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ButtonDropdown,
  Button,
} from "reactstrap";
export default () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div className="pt-5 mt-4">
      <Container fluid className="mx-auto">
        <Row className="mx-auto">
          <Col>
            <Card className="shadow-lg px-3 mt-5">
              <CardBody>
                {" "}
                <FormGroup>
                  <Label className="labelinput" for="exampleText">
                    Write your Text Here (2000 characters left / day) *
                  </Label>
                  <Input
                    className="input shadow-none"
                    type="textarea"
                    name="text"
                    id="exampleText"
                  />
                </FormGroup>
                <ButtonDropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  color="transparent"
                  className="w-100 text-dark"
                >
                  <DropdownToggle caret className="voice text-dark shadow-none">
                    {" "}
                    <strong>Voices</strong>{" "}
                  </DropdownToggle>
                  <DropdownMenu className="w-100 justify-content-center text-center">
                    <DropdownItem>
                      English (Female) : Diana S. Scott
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      English (Female) : Diana S. Scott
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      English (Female) : Diana S. Scott
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      English (Female) : Diana S. Scott
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      English (Female) : Diana S. Scott
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      English (Female) : Diana S. Scott
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <Container fluid className="mx-auto">
                  <Row className="mx-auto mt-3">
                    <Button className="prev m-0 px-5 mx-auto btn-xs shdadow-lg rounded-pill">
                      <strong>Preview</strong>
                    </Button>

                    <ReactAudioPlayer
                      className="m-0 px-auto mx-auto"
                      src="/assets/test.mp3"
                      autoPlay
                      controls
                    />
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>

          <Col>
            {" "}
            <img className="robot" src="/assets/image/robot2.png" alt="robot" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
