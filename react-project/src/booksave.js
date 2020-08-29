import React, { Component } from 'react'
import { Jumbotron, Container, Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import axios from 'axios'
export default class booksave extends Component {
    async componentDidMount() {

        try {
            const res = await fetch(' http://127.0.0.1:8000/api/books/Kind-Create-List')
            console.log(res)
            const abc = await res.json();
            const tipler = abc;
            this.setState({
                tipler
            });
        } catch (e) {
            console.log(e);
        }
        try {
            const resNEW = await fetch(' http://127.0.0.1:8000/api/books/Writer-Create-List')
            console.log(resNEW)
            const abcD = await resNEW.json();
            const yazarlar = abcD;
            this.setState({
                yazarlar
            });
        } catch (e) {
            console.log(e);
        }


        try {
            const res = await fetch('http://127.0.0.1:8000/api/libary/list');
            const abc = await res.json();
            const todos = abc['results'];
            console.log(todos,'libary list_____');
            this.setState({
              todos
            });
          } catch (e) {
            console.log(e);
          }


    }

    state = {
        tipler: [],
        counter: 1,
        modal: false,
        yazarlar: [],
        tip_id:0,
        todos: [],
        sayfa_sayisi:0,



    };

    handleChangeOne(e) {
        this.setState({ kitap_ismi: e.target.value })
        console.log(e.target.value)
    }
    handleChangeOnee(e) {
        this.setState({ aciklama: e.target.value })
        console.log(e.target.value)
    }
    handleChangeOneee(e) {
        this.setState({ sayfa_sayisi: e.target.value })
        console.log(e.target.value)
    }
    tipchange(e) {
        console.log(e.target.value)
        this.setState({ tip: e.target.value })

    }
    yazarchange(e) {
        console.log(e.target.value)
        this.setState({ yazar: e.target.value })

    }
    libarychange(e) {
        console.log(e.target.value)
        this.setState({ libary: e.target.value })

    }


    postContentOne() {
        console.log(this.state.kitap_ismi)
        console.log(this.state.aciklama)
        console.log(this.state.tip,'tip')
        console.log(this.state.sayfa_sayisi,'sayi')
        console.log("yazar_id",this.state.yazar)
        console.log("tür_id",this.state.tip)
        console.log("libary_id",this.state.libary)
        try{
        axios.post("http://127.0.0.1:8000/api/books/create", {
            kitap_ismi: this.state.kitap_ismi,
            aciklama: this.state.aciklama,
            sayfa_sayisi: this.state.sayfa_sayisi,
            tip: this.state.tip,
            yazar: this.state.yazar,
            libary:this.state.libary,
            ilk_yayınlanma_tarihi: "2020-08-12T13:00:00Z",


        })}
        catch(e){
            console.log(e)
        }
    }


    render() {
        return (
            <div>
            
                <Form onSubmit={this.handleSubmit} inline>
                    <Container style={{ marginTop: 100 }}>
                        <Jumbotron style={{ width: 800 }}>
                        <h3>Kitap Kayıt Formu</h3>

                            <Row >
                                <Col>
                                    <FormGroup style={{ height: 100, marginLeft: "1%" }}>
                                        <Label for="exampleEmail" style={{ width: 100 }} >Kitap Adı</Label>
                                        <Input name="kitap_ismi" value={this.state.text} onChange={this.handleChangeOne.bind(this)} id="exampleEmail" style={{ width: 500 }} placeholder="Kitap Adı" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <FormGroup style={{ height: 100, marginLeft: "1%" }}>
                                        <Label for="exampleEmail" style={{ width: 100 }} >Açıklama</Label>
                                        <Input name="aciklama" value={this.state.text} onChange={this.handleChangeOnee.bind(this)} id="exampleEmail" style={{ width: 500 }} placeholder="Açıklama" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <FormGroup style={{ height: 100, marginLeft: "1%" }}>
                                        <Label for="exampleEmail" style={{ width: 100 }} >Sayfa Sayisi</Label>
                                        <Input name="sayfa_sayisi" value={this.state.text} onChange={this.handleChangeOneee.bind(this)} id="exampleEmail" style={{ width: 500 }} placeholder="Sayfa Sayisi" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <FormGroup style={{ height: 100, marginLeft: "1%" }}>
                                    <Label for="type">Tür</Label>
                                       <Input style={{marginLeft:70, width:510}} onChange={this.tipchange.bind(this)}  type="select" name="type" id="type"  multiple>
                                            {
                                                this.state.tipler.map(item=>(
                                                <option key={item['id']} value={item['id']}>{item['tip']}</option>
                                                ))
                                            }
                                         </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <FormGroup style={{ height: 100, marginLeft: "1%" }}>
                                    <Label for="yazar">Yazar</Label>
                                       <Input style={{marginLeft:55, width:510}} onChange={this.yazarchange.bind(this)}  type="select" name="yazar" id="yazar"  multiple>
                                            {
                                                this.state.yazarlar.map(item=>(
                                                <option key={item['id']} value={item['id']}>{item['ismi']}</option>
                                                ))
                                            }
                                         </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <FormGroup style={{ height: 100, marginLeft: "1%" }}>
                                    <Label for="libary">Kütüphane</Label>
                                       <Input style={{marginLeft:20, width:510}} onChange={this.libarychange.bind(this)}  type="select" name="libary" id="libary"  multiple>
                                            {
                                                this.state.todos.map(item=>(
                                                <option key={item['id']} value={item['id']}>{item['ismi']}</option>
                                                ))
                                            }
                                         </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
              
              


                            <Row >
                                <FormGroup xs={200} style={{ height: 200 }}>
                                    <Button onClick={this.postContentOne.bind(this)} color="info" style={{ marginLeft: 525, height: 100, width: 100 }}>Ekle</Button>
                                </FormGroup>
                            </Row>
                        </Jumbotron>

                    </Container>
                </Form>
            </div>
        )
    }
}
