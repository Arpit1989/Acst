import Layout from '../components/Layout';
import MyModal from '../components/MyModal';
import ContactForm from '../components/ContactForm';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import conf from '../config.json';
import ReactTable from "react-table";
import Alert from 'react-bootstrap/Alert';
import API from '../services/API';

const apiService = new API({ url:`${conf.API_SERVER_URL}` });
apiService.createEntity({ name: 'contact' })

class Index extends React.Component {
  constructor(...args) {
    super(...args);
    this.updateHandler = this.updateHandler.bind(this)
    this.state = {
      modalShow: false,
      alertShow: false,
      action: 'Create Contact',
      data: [],
      pages: null,
      loading: true,
      variant: 'info',
      query: {},
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
    this.fetchData = this.fetchData.bind(this);
  }

  getAllContact(query){
    apiService.endpoints.contact.getAll({ query } , {}).then((res ) => {
      // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
      this.setState({
        data: res.data.data,
        query: query,
        pages: Math.ceil(res.data.total / res.data.per_page),
        loading: false
      });
    }).catch((err) => {
      this.setState({
        alertShow: true,
        variant: 'danger',
        alertMessage: 'unable to fetch Contacts'
      });
    });
  }

  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: true });
    // Requesting the data
    let sort = 'first_name'
    let desc = false
    if (state.sorted.length !== 0){
      sort = state.sorted[0].id
      desc = state.sorted[0].desc
    }
    let query = {
      "limit": state.pageSize,
      "sort": sort,
      "desc": desc,
      "page": state.page + 1
    };
    this.setState({ query: query });
    this.getAllContact(query);
  }

  showMethod(event){
    this.setState({
      contact: event.row._original,
      modalShow: true,
      action: 'Show Contact'
    })
  }

  deleteMethod(event){
    let status = confirm('Are you sure? You are about to delete contact '+ event.row._original.first_name + ' ' + event.row._original.last_name)
    if (status){
      apiService.endpoints.contact.delete({ id: event.row._original.id }).then(res => {
        this.setState({
          contact: event.row._original,
          action: 'Deleted Contact',
          alertShow: true,
          variant: 'success',
          alertMessage: 'deleted the contact named ' + event.row._original.first_name + ' ' + event.row._original.last_name,
        })
      }).catch((err) => {
        this.setState({
          contact: event.row._original,
          action: 'Deleted Contact',
          alertShow: true,
          variant: 'danger',
          alertMessage: 'cannot delete the contact named ' + event.row._original.first_name + ' ' + event.row._original.last_name,
        });
      });
      let query = this.state.query
      this.getAllContact(query);
    }
  }

  editMethod(event){
    this.setState({
      contact: event.row._original,
      modalShow: true,
      action: 'Edit Contact'
    })
  }

  updateHandler(event ,type) {
    if (event.data && event.data.success){
      this.setState({
        contact: this.state.contact,
        action: this.state.action,
        alertShow: true,
        modalShow: false,
        variant: type,
        alertMessage: this.state.action + ' successful!'
      })
    } else{
      this.setState({
        contact: this.state.contact,
        action: this.state.action,
        alertShow: true,
        modalShow: false,
        variant: type,
        alertMessage: this.state.action + ' failed! with status ' + event.response.status
      })
    }
    let query = this.state.query
    this.getAllContact(query);
  }

render (){
  const { data, pages, loading, contact } = this.state;
  const handleHide = () => this.setState({ alertShow: false });
  const handleShow = () => this.setState({ alertShow: true });
  let modalClose = () => this.setState({ modalShow: false });
  return(
    <Layout>
      <Alert dismissible onClose={handleHide} show={this.state.alertShow} variant={this.state.variant}>
        <Alert.Heading>{this.state.action}</Alert.Heading>
        <p>
          {this.state.alertMessage}
        </p>
      </Alert>

      <Button
        className='mt-3 mb-3'
        variant="primary"
        onClick={() => this.setState({ modalShow: true,contact: {
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
        },
        action: 'Create Contact'
       })}
      >
        Create Contact
      </Button>
      <Button
        className='ml-3 mt-3 mb-3'
        variant="primary"
        href="https://github.com/Arpit1989/Acst"
      >
        Github Link and ReadMe
      </Button>
      <MyModal
          title={this.state.action}
          show={this.state.modalShow}
          onHide={modalClose}
        >
        <ContactForm updateHandler={this.updateHandler.bind(this)} action={this.state.action} contact={contact}></ContactForm>
        </MyModal>

      <ReactTable
          columns={[
            {
              Header: "First Name",
              accessor: "first_name"
            },
            {
              Header: "Last Name",
              accessor: "last_name"
            },
            {
              Header: "Company Name",
              accessor: "company_name"
            },
            {
              Header: "Address",
              accessor: "address"
            },
            {
              Header: "City",
              accessor: "city"
            },
            {
              Header: "State",
              accessor: "state"
            },
            {
              Header: "Zip",
              accessor: "zip"
            },
            {
              Header: "Phone",
              accessor: "phone"
            },
            {
              Header: "Work Phone",
              accessor: "work_phone"
            },
            {
              Header: "Email",
              accessor: "email"
            },
            {
              Header: "Url",
              accessor: "url"
            },
            {
              Header: "Created At",
              accessor: "created_at"
            },
            {
              Header: "Updated At",
              accessor: "updated_at"
            },
            {
              Header: 'Actions',
              accessor: "id",
              Cell: row => (
                <div style={{display: 'flex'}}>
                  <div style={{color: 'green', cursor: 'pointer', padding: '1px 5px 1px 5px'}} onClick={() => this.showMethod(row)}><i className="fas fa-eye"></i></div>
                  <div style={{color: '#007aff', cursor: 'pointer', padding: '1px 5px 1px 5px'}} onClick={() => this.editMethod(row)}><i className="fas fa-pencil-alt"></i></div>
                  <div style={{color: 'red', cursor: 'pointer', padding: '1px 5px 1px 5px'}} onClick={() => this.deleteMethod(row)}><i className="fas fa-times-circle"></i></div>
                </div>
              )
            }
          ]}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={data}
          pages={pages} // Display the total number of pages
          loading={loading} // Display the loading overlay when we need it
          onFetchData={this.fetchData} // Request new data when things change
          noDataText="Oh Noes!"
          defaultPageSize={10}
          className="-striped -highlight"
        />
    </Layout>
  )}
}

export default Index
