import { Button, FormGroup, Input } from "reactstrap";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { useState } from "react";

const UserCom = () => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(null);
  const [userData, setUserData] = useState({});

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="m-3">
        <div className="border-bottom d-flex justify-content-between">
          <Button className="mb-3" color="primary" size="sm" onClick={() => toggle()}>
            Add User
          </Button>
          <FormGroup>
            <Input type="select" id="filterSelect" name="filterSelect">
              <option value={-1}>Filter</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
            </Input>
          </FormGroup>
        </div>
        <UserForm modal={modal} toggle={toggle} index={index} setIndex={setIndex} userData={userData} />
        <UserList setIndex={setIndex} toggle={toggle} setUserData={setUserData} />
      </div>
    </>
  );
};

export default UserCom;
