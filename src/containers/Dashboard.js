import React, { Component } from "react";
import { Card, CardBody, Fa } from "mdbreact";
import { Line } from "react-chartjs-2";
import { Container } from "mdbreact";
import { data, dataLine2 } from "../constants";
import { Header, Sidebar } from "../components";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="flex-container">
        <div>
          <Header />
        </div>
        <div className="content row" style={{ margin: "0px" }}>
          <Sidebar />
          <div className="col-10" style={{ padding: "0px" }}>
            <div className="header">
              <h4 style={{ display: "inline" }}>Dashboard</h4>
              <div
                style={{ display: "inline", float: "right" }}
                className="customise-icon"
              >
                <Fa icon="pencil" className="paa" />
                <h6
                  style={{
                    textAlign: "right",
                    display: "inline",
                    padding: "5px",
                    float: "right",
                    fontWeight: "500"
                  }}
                >
                  CUSTOMIZE
                </h6>
              </div>
            </div>
            <div className="row m0">
              <div className="col-4 p0">
                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag"> Project </h2>
                  </CardBody>

                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag"> ID : 124874511451 </h2>
                  </CardBody>
                </Card>

                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag"> Resources </h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTagChild"> Compute </h2>
                    <div className="subtitle-span">
                      <i className="fa fa-sun-o iconsSize" />
                      <span>App Engine</span>
                      <br />
                      <span className="subtitle-span-child">0 instances</span>
                    </div>
                    <div className="subtitle-span">
                      <i className="fa fa-microchip iconsSize" />
                      <span>Compute Engine</span>
                      <br />
                      <span className="subtitle-span-child">1 instances</span>
                    </div>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTagChild"> Stroage </h2>
                    <div className="subtitle-span">
                      <i className="fa fa-archive iconsSize" />
                      <span>Cloud Stroage</span>
                      <br />
                      <span className="subtitle-span-child">2 buckets</span>
                    </div>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTagChild"> Big Data </h2>
                    <div className="subtitle-span">
                      <i className="fa fa-database iconsSize" />
                      <span> BigQuery </span>
                      <br />
                      <span className="subtitle-span-child">
                        Data unavailable
                      </span>
                    </div>
                  </CardBody>
                </Card>

                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag">Explore other services</h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <div className="subtitle-span">
                      <i className="fa fa-codepen iconsSize" />
                      <span>Enable APIS and get credentials like keys</span>
                      <br />
                    </div>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <div className="subtitle-span">
                      <i className="fa fa-archive iconsSize" />
                      <span>Deploy and prebuild soultions</span>
                      <br />
                    </div>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <div className="subtitle-span">
                      <i className="fa fa-database iconsSize" />
                      <span>Try new cloud debugger </span>
                      <br />
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className="col-4 p0">
                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag"> App Engine </h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTagChild">
                      Summary (count/sec)
                    </h2>
                    <Container>
                      <Line data={data} />
                    </Container>
                    <i className="fa fa-square bluetint" aria-hidden="true" style={{marginRight:"5px"}}/>
                    <span className="genericCardHTagChild">
                      Requests : 0.0333
                    </span>
                  </CardBody>
                </Card>

                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag"> APIs </h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTagChild">
                      Requests (request/sec)
                    </h2>
                    <Container>
                      <Line data={dataLine2} />
                    </Container>
                    <i className="fa fa-square bluetint" aria-hidden="true" style={{marginRight:"5px"}}/>
                    <span className="genericCardHTagChild">
                      Requests : 0.0267
                    </span>
                  </CardBody>
                </Card>
              </div>
              <div className="col-4 p0">
                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag">Google Platform Status</h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <div className="margin10">
                      <i
                        className="fa fa-check-circle greenCircle"
                        aria-hidden="true"
                      />
                      <span> All services normal </span>
                    </div>
                  </CardBody>
                </Card>

                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag"> Billing </h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="medium-text-black"> $0.0 </h2>
                    <h2 className="medium-text">
                      Approximate charges so far this month
                    </h2>
                  </CardBody>
                </Card>

                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag"> News </h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="medium-text-black">
                      Google shares software network load balancers design
                      powering GCP networking
                    </h2>
                    <h2 className="medium-text">
                      Google cloud platform blog - 4 days ago
                    </h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="medium-text-black">
                      Google coumputes engine boosts high availablity controls
                    </h2>
                    <h2 className="medium-text">
                      Google cloud platform blog - 4 days ago
                    </h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <h2 className="medium-text-black">
                      Calculating and searching 500 billing digits of Pi
                    </h2>
                    <h2 className="medium-text">
                      Google cloud platform blog - 6 days ago
                    </h2>
                  </CardBody>
                </Card>

                <Card className="genericCard">
                  <CardBody className="border-bottom">
                    <h2 className="genericCardHTag"> Documentation </h2>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <div className="subtitle-span">
                      <i className="fa fa-file iconsSize" />
                      <span className="medium-text-black">
                        Google Cloud Platform Documentation
                      </span>
                      <i className="fa fa-external-link-square iconsSize margin-left-4" />
                      <br />
                    </div>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <div className="subtitle-span">
                      <i className="fa fa-file iconsSize" />
                      <span className="medium-text-black">
                        Cloud Platform solutions
                      </span>
                      <i className="fa fa-external-link-square iconsSize margin-left-4" />
                      <br />
                    </div>
                  </CardBody>
                  <CardBody className="border-bottom">
                    <div className="subtitle-span">
                      <i className="fa fa-file iconsSize" />
                      <span className="medium-text-black">
                        Cloud Platform solutions
                      </span>
                      <i className="fa fa-external-link-square iconsSize margin-left-4" />
                      <br />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
