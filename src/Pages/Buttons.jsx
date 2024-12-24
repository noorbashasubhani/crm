import React from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'

const Buttons = () => {
  return (
<div className="container-fluid page-body-wrapper">
   
  <Menu />
  <Sidebar />
 
  <div className="main-panel mt-0 ">
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title"> Buttons </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">UI Elements</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Buttons
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Gradient buttons</h4>
              <p className="card-description">
                Add class{" "}
                <code>
                  .btn-gradient-{"{"}color{"}"}
                </code>{" "}
                for gradient buttons
              </p>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-gradient-primary btn-fw"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-secondary btn-fw"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-success btn-fw"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-danger btn-fw"
                >
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-warning btn-fw"
                >
                  Warning
                </button>
                <button type="button" className="btn btn-gradient-info btn-fw">
                  Info
                </button>
                <button type="button" className="btn btn-gradient-light btn-fw">
                  Light
                </button>
                <button type="button" className="btn btn-gradient-dark btn-fw">
                  Dark
                </button>
                <button type="button" className="btn btn-link btn-fw">
                  Link
                </button>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">Rounded buttons</h4>
              <p className="card-description">
                Add class <code>.btn-rounded</code>
              </p>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-gradient-primary btn-rounded btn-fw"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-secondary btn-rounded btn-fw"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-success btn-rounded btn-fw"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-danger btn-rounded btn-fw"
                >
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-warning btn-rounded btn-fw"
                >
                  Warning
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-info btn-rounded btn-fw"
                >
                  Info
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-light btn-rounded btn-fw"
                >
                  Light
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-dark btn-rounded btn-fw"
                >
                  Dark
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-rounded btn-fw"
                >
                  Link
                </button>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">Outlined buttons</h4>
              <p className="card-description">
                Add class{" "}
                <code>
                  .btn-outline-{"{"}color{"}"}
                </code>{" "}
                for outline buttons
              </p>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-fw"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-fw"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-fw"
                >
                  Success
                </button>
                <button type="button" className="btn btn-outline-danger btn-fw">
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-fw"
                >
                  Warning
                </button>
                <button type="button" className="btn btn-outline-info btn-fw">
                  Info
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light text-black btn-fw"
                >
                  Light
                </button>
                <button type="button" className="btn btn-outline-dark btn-fw">
                  Dark
                </button>
                <button type="button" className="btn btn-link btn-fw">
                  Link
                </button>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">Single color buttons</h4>
              <p className="card-description">
                Add class{" "}
                <code>
                  .btn-{"{"}color{"}"}
                </code>{" "}
                for buttons in theme colors
              </p>
              <div className="template-demo">
                <button type="button" className="btn btn-primary btn-fw">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary btn-fw">
                  Secondary
                </button>
                <button type="button" className="btn btn-success btn-fw">
                  Success
                </button>
                <button type="button" className="btn btn-danger btn-fw">
                  Danger
                </button>
                <button type="button" className="btn btn-warning btn-fw">
                  Warning
                </button>
                <button type="button" className="btn btn-info btn-fw">
                  Info
                </button>
                <button type="button" className="btn btn-light btn-fw">
                  Light
                </button>
                <button type="button" className="btn btn-dark btn-fw">
                  Dark
                </button>
                <button type="button" className="btn btn-link btn-fw">
                  Link
                </button>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">Inverse buttons</h4>
              <p className="card-description">
                Add class{" "}
                <code>
                  .btn-inverse-{"{"}color{"}"} for inverse buttons
                </code>
              </p>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-inverse-primary btn-fw"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-inverse-secondary btn-fw"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-inverse-success btn-fw"
                >
                  Success
                </button>
                <button type="button" className="btn btn-inverse-danger btn-fw">
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-inverse-warning btn-fw"
                >
                  Warning
                </button>
                <button type="button" className="btn btn-inverse-info btn-fw">
                  Info
                </button>
                <button type="button" className="btn btn-inverse-light btn-fw">
                  Light
                </button>
                <button type="button" className="btn btn-inverse-dark btn-fw">
                  Dark
                </button>
                <button type="button" className="btn btn-link btn-fw">
                  Link
                </button>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">Normal buttons</h4>
              <p className="card-description">
                Use any of the available button classes to quickly create a
                styled button.{" "}
              </p>
              <div className="template-demo">
                <button type="button" className="btn btn-gradient-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-gradient-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-gradient-success">
                  Success
                </button>
                <button type="button" className="btn btn-gradient-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-gradient-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-gradient-info">
                  Info
                </button>
                <button type="button" className="btn btn-gradient-light">
                  Light
                </button>
                <button type="button" className="btn btn-gradient-dark">
                  Dark
                </button>
                <button type="button" className="btn btn-link">
                  Link
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-7">
                  <h4 className="card-title">Icon Buttons</h4>
                  <p className="card-description">
                    Add class <code>.btn-icon</code> for buttons with only icons
                  </p>
                  <div className="template-demo d-lg-flex justify-content-between flex-nowrap">
                    <button
                      type="button"
                      className="btn btn-gradient-primary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-home-outline" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-dark btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-microsoft-internet-explorer" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-danger btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-email-open" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-info btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-star" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-success btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-map-marker" />
                    </button>
                  </div>
                  <div className="template-demo d-lg-flex justify-content-between flex-nowrap">
                    <button
                      type="button"
                      className="btn btn-inverse-primary btn-icon"
                    >
                      <i className="mdi mdi-home-outline" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-inverse-dark btn-icon"
                    >
                      <i className="mdi mdi-microsoft-internet-explorer" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-inverse-danger btn-icon"
                    >
                      <i className="mdi mdi-email-open" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-inverse-info btn-icon"
                    >
                      <i className="mdi mdi-star" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-inverse-success btn-icon"
                    >
                      <i className="mdi mdi-map-marker" />
                    </button>
                  </div>
                  <div className="template-demo d-lg-flex justify-content-between flex-nowrap mt-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-heart-outline text-danger" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-music text-dark" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-star text-primary" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-signal text-info" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-trending-up text-success" />
                    </button>
                  </div>
                  <div className="template-demo d-lg-flex justify-content-between flex-nowrap">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-heart-outline" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-music" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-star" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-signal" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-rounded btn-icon"
                    >
                      <i className="mdi mdi-trending-up" />
                    </button>
                  </div>
                </div>
                <div className="col-md-5">
                  <h4 className="card-title">Button Size</h4>
                  <p className="card-description">
                    Use class{" "}
                    <code>
                      .btn-{"{"}size{"}"}
                    </code>
                  </p>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                    >
                      btn-lg
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-md"
                    >
                      btn-md
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                    >
                      btn-sm
                    </button>
                  </div>
                  <div className="template-demo mt-4">
                    <button
                      type="button"
                      className="btn btn-gradient-danger btn-lg"
                    >
                      btn-lg
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-success btn-md"
                    >
                      btn-md
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-primary btn-sm"
                    >
                      btn-sm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Block buttons</h4>
              <p className="card-description">
                Add class <code>. d-grid gap-2</code>
              </p>
              <div className="template-demo d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-gradient-info btn-lg btn-block"
                >
                  Block buttons <i className="mdi mdi-menu float-end" />
                </button>
                <button type="button" className="btn btn-dark btn-lg btn-block">
                  Block buttons
                </button>
                <button
                  type="button"
                  className="btn btn-gradient-primary btn-lg btn-block"
                >
                  <i className="mdi mdi-account" /> Block buttons{" "}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg btn-block"
                >
                  Block buttons
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="card-title">Button groups</h4>
                  <p className="card-description">
                    Wrap a series of buttons with <code>.btn</code> in{" "}
                    <code>.btn-group</code>
                  </p>
                  <div className="template-demo">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        3
                      </button>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-heart-outline" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-calendar" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-clock" />
                      </button>
                    </div>
                  </div>
                  <div className="template-demo">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-primary">
                        1
                      </button>
                      <button type="button" className="btn btn-primary">
                        2
                      </button>
                      <button type="button" className="btn btn-primary">
                        3
                      </button>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-primary">
                        <i className="mdi mdi-heart-outline" />
                      </button>
                      <button type="button" className="btn btn-primary">
                        <i className="mdi mdi-calendar" />
                      </button>
                      <button type="button" className="btn btn-primary">
                        <i className="mdi mdi-clock" />
                      </button>
                    </div>
                  </div>
                  <div className="template-demo mt-4">
                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-format-vertical-align-top" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-format-vertical-align-center" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-format-vertical-align-bottom" />
                      </button>
                    </div>
                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Default
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-outline-secondary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Dropdown
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item">Go back</a>
                          <a className="dropdown-item">Delete</a>
                          <a className="dropdown-item">Swap</a>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Default
                      </button>
                    </div>
                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Top
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Middle
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Bottom
                      </button>
                    </div>
                  </div>
                  <div className="template-demo mt-4">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-star d-block mb-1" /> Favourites{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-reload d-block mb-1" /> Reload{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="mdi mdi-account d-block mb-1" /> Users{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="card-title mt-3 mt-lg-0">
                    Button with text and icon
                  </h4>
                  <p className="card-description">
                    Wrap icon and text inside <code>.btn-icon-text</code> and
                    use <code>.btn-icon-prepend</code> or{" "}
                    <code>.btn-icon-append</code> for icon tags{" "}
                  </p>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-gradient-primary btn-icon-text"
                    >
                      <i className="mdi mdi-file-check btn-icon-prepend" />{" "}
                      Submit{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-dark btn-icon-text"
                    >
                      {" "}
                      Edit <i className="mdi mdi-file-check btn-icon-append" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-success btn-icon-text"
                    >
                      <i className="mdi mdi-alert btn-icon-prepend" /> Warning{" "}
                    </button>
                  </div>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-gradient-danger btn-icon-text"
                    >
                      <i className="mdi mdi-upload btn-icon-prepend" /> Upload{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-info btn-icon-text"
                    >
                      {" "}
                      Print <i className="mdi mdi-printer btn-icon-append" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-gradient-warning btn-icon-text"
                    >
                      <i className="mdi mdi-reload btn-icon-prepend" /> Reset{" "}
                    </button>
                  </div>
                  <div className="template-demo mt-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-icon-text"
                    >
                      <i className="mdi mdi-file-check btn-icon-prepend" />{" "}
                      Submit{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-icon-text"
                    >
                      {" "}
                      Edit <i className="mdi mdi-file-check btn-icon-append" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-icon-text"
                    >
                      <i className="mdi mdi-alert btn-icon-prepend" /> Warning{" "}
                    </button>
                  </div>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-icon-text"
                    >
                      <i className="mdi mdi-upload btn-icon-prepend" /> Upload{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-icon-text"
                    >
                      {" "}
                      Print <i className="mdi mdi-printer btn-icon-append" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-icon-text"
                    >
                      <i className="mdi mdi-reload btn-icon-prepend" /> Reset{" "}
                    </button>
                  </div>
                  <div className="template-demo mt-2">
                    <button className="btn btn-outline-dark btn-icon-text">
                      <i className="mdi mdi-apple btn-icon-prepend mdi-36px" />
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Available on the
                        </small>{" "}
                        App Store{" "}
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      <i className="mdi mdi-android-debug-bridge btn-icon-prepend mdi-36px" />
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Get it on the
                        </small>{" "}
                        Google Play{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Social Icon Buttons</h4>
              <p className="card-description">
                Add class <code>.btn-social-icon</code>
              </p>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-social-icon btn-outline-facebook"
                >
                  <i className="mdi mdi-facebook" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-outline-youtube"
                >
                  <i className="mdi mdi-youtube" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-outline-twitter"
                >
                  <i className="mdi mdi-twitter" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-outline-dribbble"
                >
                  <i className=" ti ti-dribbble" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-outline-linkedin"
                >
                  <i className="mdi mdi-linkedin" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-outline-google"
                >
                  <i className="mdi mdi-google-plus" />
                </button>
              </div>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-social-icon btn-facebook"
                >
                  <i className="mdi mdi-facebook" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-youtube"
                >
                  <i className="mdi mdi-youtube" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-twitter"
                >
                  <i className="mdi mdi-twitter" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-dribbble"
                >
                  <i className=" ti ti-dribbble" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-linkedin"
                >
                  <i className="mdi mdi-linkedin" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-google"
                >
                  <i className="mdi mdi-google-plus" />
                </button>
              </div>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-social-icon btn-facebook btn-rounded"
                >
                  <i className="mdi mdi-facebook" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-youtube btn-rounded"
                >
                  <i className="mdi mdi-youtube" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-twitter btn-rounded"
                >
                  <i className="mdi mdi-twitter" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-dribbble btn-rounded"
                >
                  <i className=" ti ti-dribbble" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-linkedin btn-rounded"
                >
                  <i className="mdi mdi-linkedin" />
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon btn-google btn-rounded"
                >
                  <i className="mdi mdi-google-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Social button with text</h4>
              <p className="card-description">
                Add class <code>.btn-social-icon-text</code>
              </p>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-social-icon-text btn-facebook"
                >
                  <i className="mdi mdi-facebook" />
                  Facebook
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon-text btn-youtube"
                >
                  <i className="mdi mdi-youtube" />
                  Youtube
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon-text btn-twitter"
                >
                  <i className="mdi mdi-twitter" />
                  Twitter
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon-text btn-dribbble"
                >
                  <i className=" ti ti-dribbble" />
                  Dribbble
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon-text btn-linkedin"
                >
                  <i className="mdi mdi-linkedin" />
                  Linkedin
                </button>
                <button
                  type="button"
                  className="btn btn-social-icon-text btn-google"
                >
                  <i className="mdi mdi-google-plus" />
                  Google
                </button>
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
          Hand-crafted &amp; made with{" "}
          <i className="mdi mdi-heart text-danger" />
        </span>
      </div>
    </footer>
    {/* partial */}
  </div>

</div>
  )
}

export default Buttons