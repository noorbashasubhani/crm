import React from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'

const Dropdowns = () => {
  return (
    <>
  <div className="container-fluid page-body-wrapper">
  <Menu />
  <Sidebar />
  <div className="main-panel mt-0">
  <div className="content-wrapper">
    <div className="page-header">
      <h3 className="page-title">Dropdowns</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">UI Elements</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {" "}
            Dropdowns{" "}
          </li>
        </ol>
      </nav>
    </div>
    <div className="row">
      <div className="col-lg-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Gradient Dropdown</h4>
            <p className="card-description">
              {" "}
              Add class{" "}
              <code>
                .btn-gradient-{"{"}color{"}"}
              </code>{" "}
              to the button inside <code>.dropdown</code>
            </p>
            <div className="template-demo">
              <div className="dropdown">
                <button
                  className="btn btn-gradient-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton1"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-gradient-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton2"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-gradient-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton3"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-gradient-warning dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton4"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton4"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-gradient-success dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton5"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton5"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-gradient-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton6"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton6"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h4 className="card-title">Basic dropdown</h4>
            <p className="card-description">
              {" "}
              Wrap the dropdown’s toggle (your button or link) and the dropdown
              menu within <code>.dropdown</code>
            </p>
            <div className="template-demo">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton3"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-warning dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton4"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton4"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-success dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton5"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton5"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton6"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton6"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h4 className="card-title">Dropdown outline</h4>
            <p className="card-description">
              {" "}
              Add class{" "}
              <code>
                .btn-outline-{"{"}color{"}"}
              </code>{" "}
              to the button inside <code>.dropdown</code>
            </p>
            <div className="template-demo">
              <div className="dropdown">
                <button
                  className="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton1"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton2"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-outline-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton3"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-outline-warning dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton4"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton4"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton5"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton5"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-outline-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuOutlineButton6"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOutlineButton6"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Dropdown menu</h4>
            <div className="row">
              <div className="col-md-3 dropdown-menu-static-demo">
                <div className="dropdown">
                  <button
                    className="btn btn-gradient-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuOutlineButton1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuOutlineButton1"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 dropdown-menu-static-demo">
                <div className="dropdown">
                  <button
                    className="btn btn-gradient-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuOutlineButton2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuOutlineButton2"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 dropdown-menu-static-demo">
                <div className="dropdown">
                  <button
                    className="btn btn-gradient-danger dropdown-toggle"
                    type="button"
                    id="dropdownMenuOutlineButton3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuOutlineButton3"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 dropdown-menu-static-demo">
                <div className="dropdown">
                  <button
                    className="btn btn-gradient-warning dropdown-toggle"
                    type="button"
                    id="dropdownMenuOutlineButton4"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuOutlineButton4"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 dropdown-menu-static-demo">
                <div className="dropdown">
                  <button
                    className="btn btn-gradient-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuOutlineButton8"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuOutlineButton8"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 dropdown-menu-static-demo">
                <div className="dropdown">
                  <button
                    className="btn btn-gradient-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuOutlineButton5"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuOutlineButton5"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 dropdown-menu-static-demo">
                <div className="dropdown">
                  <button
                    className="btn btn-gradient-info dropdown-toggle"
                    type="button"
                    id="dropdownMenuOutlineButton6"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuOutlineButton6"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 dropdown-menu-static-demo">
                <div className="dropdown">
                  <button
                    className="btn btn-gradient-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuOutlineButton7"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuOutlineButton7"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Split button dropdowns</h4>
            <p className="card-description">
              {" "}
              Wrap two buttons in <code>.btn-group</code> and add{" "}
              <code>.dropdown-toggle-split</code> to the toggling button{" "}
            </p>
            <div className="template-demo">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                  id="dropdownMenuSplitButton1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSplitButton1"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-danger">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                  id="dropdownMenuSplitButton2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSplitButton2"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-success">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-success dropdown-toggle dropdown-toggle-split"
                  id="dropdownMenuSplitButton3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSplitButton3"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-secondary">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  id="dropdownMenuSplitButton4"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSplitButton4"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-info">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle dropdown-toggle-split"
                  id="dropdownMenuSplitButton5"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSplitButton5"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-warning">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                  id="dropdownMenuSplitButton6"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSplitButton6"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Icon dropdowns</h4>
            <p className="card-description"> Add icon tags instead of text </p>
            <div className="row">
              <div className="col-12">
                <div className="template-demo d-lg-flex justify-content-between">
                  <div className="dropdown">
                    <button
                      className="btn btn-gradient-warning dropdown-toggle"
                      type="button"
                      id="dropdownMenuIconButton1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-earth" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton1"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-gradient-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuIconButton2"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-trophy-outline" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton2"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-info dropdown-toggle"
                      id="dropdownMenuIconButton3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-clock" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton3"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="template-demo d-lg-flex justify-content-between">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-gradient-success dropdown-toggle"
                      id="dropdownMenuIconButton4"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-heart" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton4"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-gradient-warning dropdown-toggle"
                      id="dropdownMenuIconButton5"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-logout" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton5"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-gradient-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuIconButton6"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-security" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton6"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="template-demo d-lg-flex justify-content-between">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-gradient-dark dropdown-toggle"
                      id="dropdownMenuIconButton7"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-account" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton7"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-gradient-info dropdown-toggle"
                      id="dropdownMenuIconButton8"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-bell" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton8"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-gradient-success dropdown-toggle"
                      id="dropdownMenuIconButton7"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-account" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuIconButton9"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Dropup variation</h4>
            <p className="card-description">
              {" "}
              Add class <code>.dropup</code>
            </p>
            <div className="template-demo">
              <div className="btn-group dropup">
                <button type="button" className="btn btn-primary">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                  id="dropupMenuSplitButton1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropupMenuSplitButton1"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group dropup">
                <button type="button" className="btn btn-danger">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                  id="dropupMenuSplitButton2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropupMenuSplitButton2"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group dropup">
                <button type="button" className="btn btn-success">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-success dropdown-toggle dropdown-toggle-split"
                  id="dropupMenuSplitButton3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropupMenuSplitButton3"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group dropup">
                <button type="button" className="btn btn-secondary">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  id="dropupMenuSplitButton4"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropupMenuSplitButton4"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group dropup">
                <button type="button" className="btn btn-info">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle dropdown-toggle-split"
                  id="dropupMenuSplitButton5"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropupMenuSplitButton5"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="btn-group dropup">
                <button type="button" className="btn btn-warning">
                  {" "}
                  Dropdown{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                  id="dropupMenuSplitButton6"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropupMenuSplitButton6"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Dropdown sizes</h4>
            <p className="card-description">
              {" "}
              Add class{" "}
              <code>
                .btn-{"{"}size{"}"}
              </code>{" "}
              to dropdown buttons{" "}
            </p>
            <div className="template-demo mt-5">
              <div className="dropdown">
                <button
                  className="btn btn-danger btn-lg dropdown-toggle"
                  type="button"
                  id="dropdownMenuSizeButton1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSizeButton1"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuSizeButton2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSizeButton2"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-danger btn-sm dropdown-toggle"
                  type="button"
                  id="dropdownMenuSizeButton3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuSizeButton3"
                >
                  <h6 className="dropdown-header">Settings</h6>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* content-wrapper ends */}
  {/* partial:../../partials/_footer.html */}
  <footer className="footer">
    <div className="d-sm-flex justify-content-center justify-content-sm-between">
      <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
        Copyright © 2023{" "}
        <a href="https://www.bootstrapdash.com/" target="_blank">
          BootstrapDash
        </a>
        . All rights reserved.
      </span>
      <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
        Hand-crafted &amp; made with <i className="mdi mdi-heart text-danger" />
      </span>
    </div>
  </footer>
  {/* partial */}
</div>

    
  </div>
  </>
  )
}

export default Dropdowns