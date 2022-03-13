import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css"
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./DataList.css"
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

function DataList() {
  const [userList, setUserList] = useState([]);
  const columns = [
    { dataField: "name.first", text: "Name", sort: true,filter: textFilter({placeholder: ' ', delay:100})},
    { dataField: "gender", text: "Gender", sort:true,filter: textFilter({placeholder: ' ',delay: 100})},
    { dataField: "dob.age", text: "Age", sort:true},
    { dataField: "email", text: "Email", filter: textFilter({placeholder: ' ', delay:100}) },
    { dataField: "login.uuid", text: "Login-ID"},
  ];

  const paginationArray = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((response) => setUserList(response.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <BootstrapTable 
      bootstrap4 
      keyField="login.uuid" 
      columns={columns} 
      data={userList}
      bordered
      striped
      filter={ filterFactory() }
      rowClasses="custom-row-class"
      wrapperClasses="table-responsive"
      pagination={paginationArray}
      />
      {/* <table > 
        <thead>
          <tr>
            <th>Nationality</th>
            <th>Name</th>
            <th>Gender</th>
            <th>AGE</th>
            <th>Email</th>
          </tr>
        </thead>

        {userList && userList.length >= 0
          ? userList.map((usr) => (
              <tbody>
                <tr>
                  <td>{usr.nat}</td>
                  <td>{usr.name.title+" "+usr.name.first+" "+usr.name.last}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.dob.age}</td>
                  <td>{usr.email}</td>
                </tr>
              </tbody>
            ))
          : "Loading"}
      </table> */}
    </div>
  );
}

export default DataList;
