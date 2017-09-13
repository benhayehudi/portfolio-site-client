import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

const Footer = (
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col mdPush={5}>
              &copy; 2017 Rabbi Ben Greenberg. All Rights Reserved.
              <a href="/admin/login"><img src="/images/key-icon.png" width="60" alt="admin key" /></a>
            </Col>
          </Row>
        </Grid>
)
export default Footer;