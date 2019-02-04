import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import API from '../services/API';
import conf from '../config.json';

const apiService = new API({ url:`${conf.API_SERVER_URL}` });


class ContactForm extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        validated: false,
        contact: {
          first_name: '',
          last_name: '',
          email: '',
          company_name: '',
          work_phone: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          url: ''
        }
      };
    }

    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        apiService.createEntity({ name: 'contact' })
        if (this.state.contact.hasOwnProperty('id')){
          apiService.endpoints.contact.update(this.state.contact).then((res) => {
              this.props.updateHandler(res, 'success');
          }).catch((err) => {
            this.props.updateHandler(err, 'danger');
          })
        } else {
          apiService.endpoints.contact.create(this.state.contact).then(res => {
            this.props.updateHandler(res, 'success');
          }).catch((err) => {
            this.props.updateHandler(err, 'danger');
          })
        }
      }
      this.setState({ validated: true });
      event.preventDefault();
    }

    handleChange(event){
      event.preventDefault();
      let contact = Object.assign({}, this.state.contact);
      contact[event.target.name] = event.target.value
      this.setState({
          contact: contact
      });
    }

    componentDidMount(){
      this.setState({
        contact: this.props.contact
      })
    }

    render(){
      const { validated } = this.state;
      let readonly;
      if (this.props.action === 'Show Contact') {
        readonly = true;
      }
      return(
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
          >
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                name="first_name"
                placeholder="First name"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.first_name}
                readOnly={readonly}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a first name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="last_name"
                type="text"
                placeholder="Last name"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.last_name}
                readOnly={readonly}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a last name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={ this.handleChange.bind(this) }
                  defaultValue={this.state.contact.email}
                  aria-describedby="inputGroupPrepend"
                  readOnly={readonly}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Company</Form.Label>
              <Form.Control
                name="company_name"
                type="text"
                placeholder="Company"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.company_name}
                readOnly={readonly}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a Company.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                placeholder="Phone"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.phone}
                readOnly={readonly}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Work Phone</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="work_phone"
                  placeholder="Work Phone"
                  onChange={ this.handleChange.bind(this) }
                  defaultValue={this.state.contact.work_phone}
                  aria-describedby="inputGroupPrepend"
                  readOnly={readonly}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a work phone.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Apartment, studio, or floor"
                name="address"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.address} readOnly={readonly} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" placeholder="URL"
                name="url"
                type='url'
                pattern="https?://.+"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.url} readOnly={readonly}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid URL.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City"
                name="city"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.city}
                readOnly={readonly}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State"
                name="state"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.state}
                readOnly={readonly}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip"
                name="zip"
                onChange={ this.handleChange.bind(this) }
                defaultValue={this.state.contact.zip}
                readOnly={readonly}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Button disabled={readonly} className='mt-1 mb-1 btn-block' type="submit">Submit form</Button>
          </Form.Row>
        </Form>
      )
    }
}

export default ContactForm
