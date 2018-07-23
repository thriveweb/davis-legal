import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '', // optional subject of the notification email
    action: '',
    honeypot: 'email',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email',
  }

  state = {
    alert: '',
    disabled: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST',
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false,
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage,
        })
      })
  }

  render() {
    const { name, subject, action, honeypot } = this.props

    return (
      <form
        className="enquiry"
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=""
        data-netlify-honeypot={honeypot}
      >
        {this.state.alert && <div className="alert">{this.state.alert}</div>}
        <label className="label">
          <input
            className="input"
            type="text"
            placeholder="Solicitor's Reference"
            name="reference"
            required
          />
        </label>
        <label className="label">
          <input
            className="input"
            type="text"
            placeholder="Solicitor's Firm Name"
            name="firmName"
            required
          />
        </label>
        <label className="label">
          <input
            className="input"
            type="text"
            placeholder="I need help with..."
            name="help"
            required
          />
        </label>
        <label className="label">
          <textarea
            className="input textarea"
            placeholder="Comments"
            name="message"
            rows="10"
            required
          />
        </label>
        {/* <input
          type="text"
          name={honeypot}
          className="input-honey"
          placeholder="Leave blank if you are a human"
        /> */}
        {!!subject && <input type="hidden" name="subject" value={subject} />}
        <input type="hidden" name="form-name" value={name} />
        <button type="submit" className="button">
          <p>send now</p>
          <div className="circle" />
        </button>
      </form>
    )
  }
}

export default Form
