import React, { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";

const Crud = () => {
  let obj = { name: "", email: "", password: "" };
  let [user, setUser] = useState(obj);
  let [data, setData] = useState([]);
  let [isUpdate, setIsUpdate] = useState(false);
  let [index, setIndex] = useState(null);

  const getData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  // To Add Data
  const handleAdd = () => {
    if (isUpdate) {
      data.splice(index, 1, user);
      setData([...data]);
      setUser(obj);
      setIsUpdate(false);
      localStorage.setItem("data", JSON.stringify([...data]));
    } else {
      setData([...data, user]);
      setUser(obj);
      localStorage.setItem("data", JSON.stringify([...data, user]));
    }
  };

  // To Delete Data
  const handleDelete = (index) => {
    let newData = data.filter((item, id) => {
      return id !== index;
    });
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  // To Update Data
  const handleUpdate = (ele, index) => {
    // console.log(ele, index);
    setIsUpdate(true);
    setUser({ name: ele.name, email: ele.email, password: ele.password });
    setIndex(index);
  };

  // Get Data From Local Storage
  useEffect(() => {
    if (localStorage.getItem("data") !== null) {
      let data = localStorage.getItem("data");
      let normalData = JSON.parse(data);
      setData([...normalData]);
    }
  }, []);

  return (
    <>
      <Table size="sm" borderless className="w-50 m-auto mt-5 table-warning ">
        <thead>
          <tr>
            <td className="p-3">
              <Input
                type="text"
                placeholder="Name"
                value={user.name}
                name="name"
                onChange={(e) => getData(e)}
              />
            </td>
            <td className="p-3">
              <Input
                type="text"
                placeholder="Email"
                value={user.email}
                name="email"
                onChange={(e) => getData(e)}
              />
            </td>
            <td className="p-3">
              <Input
                type="text"
                placeholder="Password"
                value={user.password}
                name="password"
                onChange={(e) => getData(e)}
              />
            </td>
            <td className="p-3">
              <Button color="primary" onClick={() => handleAdd()}>
                {isUpdate ? "Update" : "Add"}
              </Button>
            </td>
          </tr>
        </thead>
      </Table>
      {data.length > 0 ? (
        <Table bordered hover className="w-50 m-auto mt-5">
          <thead>
            <tr className="table-primary text-center">
              <th>Sr No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i} className="table-secondary text-center">
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.password}</td>
                  <td>
                    <Button
                      size="sm"
                      color="danger"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </Button>
                    <Button
                      size="sm"
                      color="warning"
                      className="ms-3"
                      onClick={() => handleUpdate(e, i)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h5 className="text-center mt-5 text-danger">Data Not Found!!!</h5>
      )}
    </>
  );
};

export default Crud;
