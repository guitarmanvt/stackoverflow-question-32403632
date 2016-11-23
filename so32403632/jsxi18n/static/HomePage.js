var test_text = gettext('example');

@withStyles(styles)
export default class HomePage {
  static contextTypes = {
    i18n: PropTypes.object
  }

  constructor() {
    this.componentDidMount.bind(this);
    this.handleCitySearch.bind(this);
  }

  render() {
    return (
      <Grid className="HomePage">
        <Row className="HomePage-hero">
          <Col md={8} style={{ textAlign: 'center' }}>
            <Input ref="city" bsSize="large" type="text" />
            <Button bsSize="large" bsStyle="default" onClick={this.handleCitySearch}>{gettext('button text')}</Button>
          </Col>
          <Col md={4}>
            <ul>
              <li>{gettext('SOME TEXT')}</li>
              <li>{gettext('MORE TEXT')}</li>
            </ul>
          </Col>
        </Row>
      </Grid>
      );
  }
}
