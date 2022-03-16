import React, { Component } from "react";
import "./App.css";
import Modal from "./component/modal";

class Home extends Component {

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
      personal: [
        {
          name: "Sample",
          mobile: "1234567890",
          addrs: "a a a",
          city: "Chennai",
          state: "Tamil Nadu",
          zip: "123456",
          type: "Present",
        },
      ],
      business: [
        {
          name: "cool",
          mobile: "1234567890",
          addrs: "a a a",
          city: "Chennai",
          state: "Tamil Nadu",
          zip: "123456",
          type: "Present",
        },
      ],
    };

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
    this.handleClear();
  };

  handleChange = (e) => {
    const newInput = (data) => ({
      ...data,
      [e.target.name]: e.target.value
    })
    this.setState(newInput);

    if(e.target.name==='name'){     
      if(!e.target.value){
        this.setState({name_error:"Please enter a value"})
      }
      if(e.target.value==='5'){
        this.setState({name_error:"Characters from a-z/A-Z allowed"})
      }
    }
    if(e.target.name==='mobile'){     
      if(!e.target.value){
        this.setState({mobile_error:"Please enter a value"})
      }
      if(e.target.value==='h'){
        this.setState({mobile_error:"Please enter numeric value"})
      }
      if(e.target.value.length<=10 && e.target.value.length>1){
        this.setState({mobile_error:"Please enter a valid 10 digit mobile number"})
      }
    }
    if(e.target.name==='addrs'){     
      if(!e.target.value){
        this.setState({addrs_error:"Please enter a value"})
      }
      if(e.target.value==='sample'){
        this.setState({addrs_error:"Address should have a length of atleast 3 words"})
      }
    }
    if(e.target.name==='city'){     
      if(!e.target.value){
        this.setState({city_error:"Please enter a value"})
      }
      if(e.target.value==='5'){
        this.setState({city_error:"Characters from a-z/A-Z allowed"})
      }
    }
    if(e.target.name==='state'){     
      if(!e.target.value){
        this.setState({state_error:"Please enter a value"})
      }
      if(e.target.value==='5'){
        this.setState({state_error:"Characters from a-z/A-Z allowed"})
      }
    }

    if(e.target.name==='zip'){     
      if(!e.target.value){
        this.setState({zip_error:"Please enter a value"})
      }
      if(e.target.value==='h'){
        this.setState({zip_error:"Please enter a numeric value"})
      }
      if(e.target.value==='123456789'){
        this.setState({zip_error:"Please enter a digit zip pin"})
      }
    }


  }

  handleSave = () => {    
    const stvalue = {
      name: this.state.name,
      mobile: this.state.mobile,
      addrs: this.state.addrs,
      city: this.state.city,
      state: this.state.state,        
      zip: this.state.zip,
      type: this.state.type
    };  
    if (this.state.checked == 'Personal') {           
      this.state.personal.push(stvalue); 
      this.checkP();
    }
    if (this.state.checked == 'Business') {
      this.state.business.push(stvalue);  
      this.checkB();    
    }
    this.onClose();
  };

  handleClear = () => {
    this.setState({
      name: "",
      mobile: "",
      addrs: "",
      city: "",
      state: "",
      type: "",
      zip: "",
      checked: "",
      name_error: "",
      mobile_error: "",
      addrs_error: "",
      city_error: "",
      states_error: "",
      zip_error: ""
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

  checkB = () => {
    this.setState({ show_personal: false })
  }

  checkP = () => {
    this.setState({ show_personal: true })
  }

  renderForm() {
    return (<form >
      <div className="fields">
        <div>
          <label htmlFor="name"> Name </label>
          <input className='input' type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <span>{this.state.name_error}</span>
        </div>

        <div>
          <label htmlFor="mobile"> Mobile No.</label>
          <input className='input' type="number" name="mobile" 
          value={this.state.mobile} onChange={this.handleChange}
          min="1"
          max="10" />
          <span>{this.state.mobile_error}</span>
        </div>

        <div>
          <label htmlFor="addrs"> Address</label>
          <textarea name="addrs" value={this.state.addrs} onChange={this.handleChange} >
          </textarea>
          <span>{this.state.addrs_error}</span>
        </div>

        <div>
          <label htmlFor="city"> City </label>
          <input className='input' type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          <span>{this.state.city_error}</span>
        </div>

        <div>
          <label htmlFor="state"> State </label>
          <input className='input' type="text" name="state" value={this.state.state} onChange={this.handleChange} />
          <span>{this.state.state_error}</span>
        </div>

        <div>
          <label htmlFor="zip">Postal Code/Zip Code </label>
          <input className='input' type="text" name="zip" value={this.state.zip} onChange={this.handleChange} />
          <span>{this.state.zip_error}</span>
        </div>

      </div>

      <div className="radios">
        <div>

          <input
            type="radio"
            name="type"
            value="Present"
            checked={this.state.type === 'Present'}
            onChange={this.handleChange}
          />
          <label htmlFor="type">Present</label>

        </div>
        <div>

          <input
            type="radio"
            name="type"
            value="Permanent"
            checked={this.state.type === 'Permanent'}
            onChange={this.handleChange}
          />
          <label htmlFor="type"> Permanent
          </label>
        </div>
        <div>

          <input
            type="radio"
            name="type"
            value="Both"
            checked={this.state.type === 'Both'}
            onChange={this.handleChange}
          />
          <label htmlFor="type"> Both
          </label>
        </div>
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
      if (!this.state.personal.length) { return (<h3>No personal recordes to display</h3>) }
      return (this.state.personal.map((numList, i) => (
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
    if (!this.state.business.length) { return (<h3>No business records to display</h3>) }
    return (this.state.business.map((numList, i) => (
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
            <div className="bg">
              <div className="pop">
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
              </div>
            </div>
          </Modal>
          <table>
            <tbody>
              <tr className="buttons">
                <th onClick={this.checkP}>Personal</th>
                <th onClick={this.checkB}>Business</th>
              </tr>
              <tr>
                <td>Name</td>
                <td>Mobile No.</td>
                <td>Address</td>
                <td>City</td>
                <td>State</td>
                <td>Zip</td>
                <td>Present/Permanent Address</td>
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