import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import { createComplaint } from '../../redux/actions/customers/Services';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DateTimePhoto, MultipleSelect  } from '../../components'

import './style.css';

class AddComplaint extends Component {
  constructor (props) {
    super(props);

    this.state = { 
        submitted: '',
        orderId: '',
        description: '',
        photo: null,
        employee: '',
        successMessage: '',
        errorMessage: '',
        isAdmin: this.props.isAdmin
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  componentDidMount() {
		const cookies = new Cookies();
		var token = cookies.get("token");
		const user = JSON.parse(
			window.atob(
				token
				.split(".")[1]
				.replace("-", "+")
				.replace("_", "/")
			)
    );

    this.setState({ token: token, userId: user.id })
    this.props.id ? this.setState({ orderId: this.props.id }) : ('')
  }

	getDate(date) {
		this.setState({ date: date })
	}

	getTime(time) {
		this.setState({ time: time })
	}

	getPhoto(photo) {
		this.setState({ photo: photo })
	}

  handleChange(event) {
    const { name, value } = event.target;
    this.setState ({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = {
      client_id: this.state.userId,
      is_admin: this.state.isAdmin,
      order_id: this.state.orderId,
      date: this.state.date,
      time: this.state.time,
      description: this.state.description,
      // image_path: this.state.photo
    }

    this.props.dispatch(createComplaint(form, this.state.token))
      .then((res) => {
        if (res.type === "COMPLAINT_CREATE_SUCCESS") {
          this.setState({ successMessage: res.payload })
          this.setState({ errorMessage: '' })
        } else {
          this.setState({ errorMessage: res.payload })
        }
    })
    this.setState({ submitted: true });

  }

    render() {
    const { isAdmin, submitted, orderId, description, employee, successMessage, errorMessage } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5 className="handle_header">Skapa Reklamation</h5>
          <hr />
          <div className="form-group">
            <input type='text' name='orderId' className="form-control" placeholder='Ärende id' value={orderId} onChange={this.handleChange}/>
            {submitted && !orderId &&
              <div className="help-block">Välj ärendenummer!</div>
              }
          </div>
          <div className="form-group">
            <textarea type="text" rows="5" name='description' className="BasicForm__textArea" placeholder='Detaljerad beskrivning av reklamationen' value={description} onChange={this.handleChange}/>
            {submitted && !description &&
              <div className="help-block">Glöm inte bort att beskriva vad vi ska åtgärda</div>
            }
          </div>
          {isAdmin === true? 
          <div className="form-group">
          <MultipleSelect />
            {submitted && !employee &&
              <div className="help-block">Glöm inte att tilldela ärendet till rätt person</div>
            }
          </div>
          : ('')}
            <hr />
          	<p className="pick_time">Välj önskat datum och tid</p>

            <DateTimePhoto getDate={this.getDate.bind(this)} getTime={this.getTime.bind(this)} getPhoto={this.getPhoto.bind(this)} />
          <div className="buttons">
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Skicka
            </button>
              {errorMessage && <div className="help-block">{errorMessage}</div>}
              {successMessage && <div className="help-block">{successMessage}</div>}
              </div>
          </div>  
        </form> 
        </div>    
    )
  }

}

const mapStateToProps = dispatch => ({
  isFetching: dispatch.customer.isFetching
});

export default connect(mapStateToProps)(AddComplaint);
