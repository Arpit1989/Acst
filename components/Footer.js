import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => (
    <Row className="fixed-bottom mt-3 mb-3">
      <Col xs={4} md={9}>
        <div className=" ml-5"> ACST © 2019 All rights reserved.</div>
      </Col>
      <Col className="text-center" xs={8} md={3}>
        <img src="static/images/ic-facebook.svg" className="mr-4 facebook-svg"/>
        <img src="static/images/ic-linkedin.svg" className="mr-4 linkedin-svg"/>
        <img src="static/images/ic-twitter.svg" className="mr-4 twitter-svg"/>
        <img src="static/images/ic-youtube.svg" className="mr-4 youtube-svg"/>
      </Col>

    </Row>
)

export default Footer
