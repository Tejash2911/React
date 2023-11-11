import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Modal, ModalHeader, ModalBody, Form, Row, FormGroup, Input, Col, Label } from "reactstrap";
import { addUser, updateUser } from "../../redux/userSlice";

const UserForm = ({ modal, toggle, index, setIndex, userData }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const initData = { id: "", name: "", email: "", mobileNumber: "", userType: "" };
  const [data, setData] = useState(initData);

  useEffect(() => {
    setData(userData);
  }, [userData]);

  const submitHandler = () => {
    toggle();
    data.id = Date.now().toString();
    console.log(data);
    dispatch(addUser(data));
    toast.success("User added..!");
    setData(initData);
  };
  const updateHandler = () => {
    toggle();
    dispatch(updateUser({ index, data: data }));
    toast.success("User updated..!");
    setIndex(null);
  };

  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>User Form</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={data.name || ""}
                    placeholder="Enter User name"
                    onChange={(e) =>
                      setData({
                        ...data,
                        name: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="text"
                    id="email"
                    value={data.email || ""}
                    placeholder="Enter email address"
                    onChange={(e) =>
                      setData({
                        ...data,
                        email: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="mobile">Mobile Number</Label>
                  <Input
                    type="text"
                    id="mobile"
                    value={data.mobileNumber || ""}
                    placeholder="Enter Mobile Number"
                    onChange={(e) =>
                      setData({
                        ...data,
                        mobileNumber: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="userType">User Type</Label>
                  <Row>
                    <Col>
                      <Input
                        type="select"
                        value={data.userType || ""}
                        id="userType"
                        name="select"
                        onChange={(e) =>
                          setData({
                            ...data,
                            userType: e?.target?.value,
                          })
                        }
                      >
                        <option value={-1}>---Select User Type---</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                      </Input>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                {index || index === 0 ? (
                  <Button className="w-100" onClick={updateHandler}>
                    Update User
                  </Button>
                ) : (
                  <Button className="w-100" onClick={submitHandler}>
                    Add User
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UserForm;
