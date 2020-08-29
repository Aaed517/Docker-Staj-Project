import React, { Component } from 'react'
import { Jumbotron, Container, Col, Button, Form, FormGroup, Label, Input,  Row } from 'reactstrap';
import axios from 'axios'
export default class writersave extends Component {
    state = {
        todos: [],
        counter: 1
      };
    handleChangeWriter(e) {
        this.setState({ yazar: e.target.value })
        console.log(e.target.value)
      }
      postContentWriter() {
          console.log(this.state.yazar)
        axios.post("http://127.0.0.1:8000/api/books/Writer-Create-List", {
          ismi: this.state.yazar,
        })
      }
    render() {
        return (
            <div>
                        <Form inline>
          <Container style={{ marginTop:200}}>
            <Jumbotron style={{ width: 800 }}>
              <Row >
                <Col>
                  <FormGroup style={{ height: 100, marginLeft: "1%" }}>
                    <Label for="exampleEmail" style={{ width: 100 }} >Yazar Adı</Label>
                    <Input    name="yazar"value={this.state.text}  onChange={this.handleChangeWriter.bind(this)} id="yazar" placeholder="Yazar" style={{ height: 125, width: 500 }} />
                  </FormGroup>
                </Col>
              </Row>

              <Row >
                <FormGroup xs={200} style={{ height: 200 }}>
                  <Button onClick={this.postContentWriter.bind(this)} color="info" style={{ marginLeft: 525, height: 100, width: 100 }}>Ekle</Button>
                </FormGroup>
              </Row>
            </Jumbotron>

          </Container>
        </Form>
            </div>
        )
    }
}
