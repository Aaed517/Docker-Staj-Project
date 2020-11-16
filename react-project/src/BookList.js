// App.js
import React, { Component } from 'react';
import { Jumbotron, Container, Col, Button, Form, FormGroup, Label, Input, Table, Row } from 'reactstrap';
import axios from 'axios'
class App extends Component {
  state = {
    todos: [],
    counter: 1
  };

  async componentDidMount() {
    try {
     const res = await fetch('http://127.0.0.1:8000/api/libary/list');
     /*   const res = await fetch('http://192.168.99.100:8000/api/libary/list');*/
      const abc = await res.json();
      const todos = abc['results'];
      console.log(todos[0]['ismi']);
      console.log(todos);
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
  /*
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
   handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
        console.log(data)
      fetch('http://127.0.0.1:8000/api/libary/create', {
        method: 'POST',
        body: data,
      });
    }
  */
  handleChange(e) {
    this.setState({ ismi: e.target.value })
    console.log(e.target.value)
  }
  handleChangeAdres(e) {
    this.setState({ adres: e.target.value })
    console.log(e.target.value)
  }
  postContent() {
    console.log(this.state.adres)
  /*  axios.post("http://127.0.0.1:8000/api/libary/create", {  */
          axios.post("http://192.168.99.100:8000/api/libary/create", {
      ismi: this.state.ismi,
      adres: this.state.adres,
      telefon: 3,
      resim: null
    })
    this.componentDidMount()
    this.refreshPage()
  }
  handleDelete(e) {
   /* var url = "http://127.0.0.1:8000/api/libary/delete/" + e.target.name */
     var url = "http://192.168.99.100:8000/api/libary/delete/" + e.target.name
    axios.delete(url)
    this.refreshPage()
  }
  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (

      <div>
        <Table>
          <thead>
            <tr style={{ backgroundColor: '#B6BECB' }}>
              <th>#</th>
              <th> Kütüphane Adı</th>
              <th>Adres</th>
              <th>Telefon</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todos.map((item, index) => (
                <tr key={index + 1}>
                  <th style={{ backgroundColor: "#D2D4DC" }} scope="row">{index + 1}</th>
                  <td >{item['ismi']}</td>
                  <td >{item['adres']}</td>
                  <td >{item['telefon']}</td>
                  <td><Button name={item['url'].split('/').pop()} onClick={this.handleDelete.bind(this)} color="danger"> Sil</Button></td>
                </tr>
              ))
            }
            <tr style={{ backgroundColor: '#B6BECB' }}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

          </tbody>
        </Table>
        <Form onSubmit={this.handleSubmit} inline>
          <Container>
            <Jumbotron style={{ width: 800 }}>
              <Row >
                <Col>
                  <FormGroup style={{ height: 100, marginLeft: "1%" }}>
                    <Label for="exampleEmail" style={{ width: 100 }} >Kütüphane Adı</Label>
                    <Input name="ismi" value={this.state.text} onChange={this.handleChange.bind(this)} id="exampleEmail" style={{ width: 500 }} placeholder="Kütüphane Adı" />
                  </FormGroup>
                </Col>
              </Row>

              <Row >
                <FormGroup >
                  <Label for="exampleText" style={{ width: 125 }}>Adres</Label>
                  <Input maxLength="200" type="textarea" value={this.state.text} onChange={this.handleChangeAdres.bind(this)} name="adres" id="exampleText" placeholder="Adres" style={{ height: 125, width: 500 }} />
                </FormGroup>
              </Row>
              <Row >
                <FormGroup xs={200} style={{ height: 200 }}>
                  <Button onClick={this.postContent.bind(this)} color="info" style={{ marginLeft: 525, height: 100, width: 100 }}>Ekle</Button>
                </FormGroup>
              </Row>
            </Jumbotron>

          </Container>
        </Form>

      </div>
    );
  }
}

export default App;
