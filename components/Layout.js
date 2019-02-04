import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'


const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

export default ({ children,title = 'ACST' }) => (
  <React.Fragment>
    <div className="container-fluid">
    <Head>
      <meta charSet="UTF-8" />
      <title>{ title }</title>
      <meta name="description" content={defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css"/>
      <script src="https://unpkg.com/react-table@latest/react-table.min.js"></script>

      <link rel="stylesheet" href="static/css/index.css" />
      </Head>
      <header>
        <Navigation>
        </Navigation>
      </header>

      { children }

    </div>
  </React.Fragment>
)
