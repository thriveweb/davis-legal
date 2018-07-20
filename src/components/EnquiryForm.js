import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

class EnquiryForm extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon.',
    errorMessage:
      'There was a problem sending your enquiry. Please try again or contact Robert via email.',
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
    const { name, subject, action } = this.props

    return (
      <form
        className="enquiry"
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=""
        data-netlify-honeypot="_gotcha"
      >
        {this.state.alert && (
          <div className="enquiry-alert">{this.state.alert}</div>
        )}

        <label className="enquiry-label">
          <input
            className="enquiry-input"
            type="text"
            placeholder="Solicitor's Reference"
            name="referenece"
            required
          />
        </label>

        <label className="enquiry-label">
          <input
            className="enquiry-input"
            type="text"
            placeholder="Solicitor's Firm Name"
            name="name"
            required
          />
        </label>

        <label className="enquiry-label">
          <input
            className="enquiry-input"
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </label>

        <label className="enquiry-label has-arrow">
          <select
            className="enquiry-input enquiry-select"
            name="type"
            defaultValue="I need help with..."
            required
          >
            <option disabled hidden>
              I need help with...
            </option>
            <option>First Option</option>
            <option>Second Option</option>
            <option>Third Option</option>
          </select>
        </label>

        <label className="enquiry-label">
          <textarea
            className="enquiry-input enquiry-textarea"
            placeholder="Comments"
            name="comments"
            rows="5"
            required
          />
        </label>

        <p>
          Court and other commitments may sometimes result in a delay in
          responding to email inquiries. If your inquiry is urgent then it is
          best to phone. Robert cannot accept urgent briefs without prior
          discussion and agreement.
        </p>

        <button type="sumbit">
          <p>send now</p>
          <div className="circle" />
        </button>
      </form>
    )
  }
}

export default EnquiryForm
