import React, { Component } from "react";
import "./App.css";
import Modal from "./component/modal";
import { validateName, validateAddress, validateMobile, validateCity, validateStates, validateZip } from "./component/validation";

class Home extends Component {

  state = {
    checked: "",
    show: false,
    show_personal: true,
    name: "",
    mobile: "",
    addrs: "",
    city: "",
    states: "",
    type: "",
    zip: "",
    name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_error: "",
    states_error: "",
    zip_error: "",
    personal: [
      {
        name: "Sample",
        mobile: "1234567890",
        addrss: "a a a",
        city: "Chennai",
        states: "Tamil Nadu",
        zip: "123456",
        type: "Present",
      },
    ],
    business: [
      {
        name: "cool",
        mobile: "1234567890",
        addrss: "a a a",
        city: "Chennai",
        states: "Tamil Nadu",
        zip: "123456",
        type: "Present",
      },
    ],
  };
  personalData = [];
  businessData = [];

  constructor() {
    super();
    this.state = {
      checked: "",
      show: false,
      show_personal: true,
      name: "",
      mobile: "",
      addrs: "",
      city: "",
      state: "",
      type: "",
      zip: "",
      name_error: "",
      mobile_error: "",
      addrs_error: "",
      city_error: "",
      states_error: "",
      zip_error: "",
    };

    // this.checkStatus = this.checkStatus.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }


  showModal = () => {
    this.setState({ show: true });
  };

  componentDidMount = () => {
    this.handleBorder();
  };

  onClose = () => {
    this.setState({ show: false, checked: "" });
  };

  handleChange = (e) => {
    const newInput = (data) => ({
      ...data,
      [e.target.name]: e.target.value
    })
    this.setState(newInput)
  };

  handleSave = (e) => {
    e.preventDefault();
    if (this.state.checked == 'Personal') { this.personalData.push(this.state) }
    if (this.state.checked == 'Business') { this.businessData.push(this.state) }
    this.onClose();
  };

  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      mobile: "",
      addrs: "",
      city: "",
      state: "",
      type: "",
      zip: "",
    });
  };

  handleBorder = () => {
    this.setState({
      borderBottom1: "hidden",
      borderBottom: "3px solid rgb(71, 68, 206)",
      show_personal: true,
    });
  };

  handleBorder1 = () => {
    this.setState({
      borderBottom1: "hidden",
      borderBottom: "3px solid rgb(71, 68, 206)",
      show_personal: false,
    });
  };

  checkStatus = () => {
    this.setState({ show_personal: false })    
  };
  checkStatus2 = () => {
    this.setState({ show_personal: true })    
  };

  renderForm() {
    return (<form >
      <div className="fields">
        <div>
          <label htmlFor="name"> Name </label>
          <input className='input' type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="mobile"> Mobile No.</label>
          <input className='input' type="number" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="addrs"> Address</label>
          <textarea name="addrs" value={this.state.addrs} onChange={this.handleChange} >
          </textarea>
        </div>

        <div>
          <label htmlFor="city"> City </label>
          <input className='input' type="text" name="city" value={this.state.city} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="state"> State </label>
          <input className='input' type="text" name="state" value={this.state.state} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="zip">Postal Code/Zip Code </label>
          <input className='input' type="text" name="zip" value={this.state.zip} onChange={this.handleChange} />
        </div>

      </div>

      <div className="radios">
        <label htmlFor="type">
          <input
            type="radio"
            name="type"
            value="Present"
            checked={this.state.type === 'Present'}
            onChange={this.handleChange}
          />
          Present
        </label>
        <label htmlFor="type">
          <input
            type="radio"
            name="type"
            value="Permanent"
            checked={this.state.type === 'Permanent'}
            onChange={this.handleChange}
          />
          Permanent
        </label>
        <label htmlFor="type">
          <input
            type="radio"
            name="type"
            value="Both"
            checked={this.state.type === 'Both'}
            onChange={this.handleChange}
          />
          Both
        </label>
      </div>

      <div className="btns">
        <button type='submit' className="save" onClick={this.handleSave}>Save</button>
        <button className="clear" onClick={this.handleClear}>Clear</button>

      </div>

    </form>);
  }

  renderFormBasedonData() {
    if (this.state.checked == 'Personal') {      
      return this.renderForm()
    }
    if (this.state.checked == 'Business') {     
      return this.renderForm()
    }
  }

  showPersonalDataInTable() {
    if (this.state.show_personal == true) {
      return (this.personalData.map((numList, i) => (
        <tr key={i}>
          <td >{numList.name}</td>
          <td >{numList.mobile}</td>
          <td >{numList.addrs}</td>
          <td >{numList.city}</td>
          <td>{numList.state}</td>
          <td >{numList.zip}</td>
          <td >{numList.type}</td>
        </tr>
      ))
      )
    }
    if (this.state.show_personal == false) {
      return (
        this.showBusinessDataInTable()
      )
    }
  }

  showBusinessDataInTable() {
    return (this.businessData.map((numList, i) => (
      <tr key={i}>
        <td >{numList.name}</td>
        <td >{numList.mobile}</td>
        <td >{numList.addrs}</td>
        <td >{numList.city}</td>
        <td>{numList.state}</td>
        <td >{numList.zip}</td>
        <td >{numList.type}</td>
      </tr>
    ))
    )

  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h2>Address Book</h2>
          </div>
          <div className="buttons">
            <button className="add" onClick={this.showModal}>Add</button>
          </div>
          <Modal show={this.state.show} >
            <h3>Fill Address Details</h3>
            <button className="close" onClick={this.onClose}>X</button>
            <div className="radio">
              <label htmlFor="checked">
                <input
                  type="radio"
                  name="checked"
                  value="Personal"
                  checked={this.state.checked === 'Personal'}
                  onChange={this.handleChange}
                />
                Personal
              </label>
              <label htmlFor="checked">
                <input
                  type="radio"
                  name="checked"
                  value="Business"
                  checked={this.state.checked === 'Business'}
                  onChange={this.handleChange}
                />
                Business
              </label>
            </div>
            {
              this.renderFormBasedonData()
            }
          </Modal>
          <table>
            <tbody>
              <tr className="buttons">
                <th  onClick={this.checkStatus2}>Personal</th>
                <th onClick={this.checkStatus}>Business</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Present/Permanent Address</th>
              </tr>
              {
                this.showPersonalDataInTable()
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default Home;