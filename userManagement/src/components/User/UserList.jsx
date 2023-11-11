import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import { deleteUser } from "../../redux/userSlice";
import { useEffect } from "react";

const UserList = ({ setIndex, toggle, setUserData }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
    toast.success("User deleted");
  };
  const updateHandler = (data, index) => {
    console.log(data);
    toggle();
    setUserData(data);
    setIndex(index);
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center  align-items-center">
        {user.length ? (
          <Table className="mt-3 text-center" striped>
            <thead>
              <tr>
                <th>ID.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>User Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user?.map?.((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{e?.id}</th>
                    <td className="text-truncate">{e?.name}</td>
                    <td className="text-truncate">{e?.email}</td>
                    <td className="text-truncate">{e?.mobileNumber}</td>
                    <td>{e?.userType}</td>
                    <td>
                      <Button className="me-4" size="sm" color="secondary" onClick={() => updateHandler(e, i)}>
                        Edit
                      </Button>
                      <Button onClick={() => deleteHandler(e?.id)} color="danger" size="sm">
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <h4 className="text-danger m-3">Data Not Found...</h4>
        )}
      </div>
    </>
  );
};

export default UserList;
