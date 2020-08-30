import React, { Component } from 'react'
import { Table } from 'reactstrap';
import axios from 'axios'
export default class booklibarylist extends Component {

    async componentDidMount() {
        
        try {
          /*  const res = await fetch('http://127.0.0.1:8000/api/books/list') */
             const res = await fetch('http://192.168.99.100:8000/api/books/list')
            console.log(res)
            const abc = await res.json();
            const todos = abc;
            console.log(todos)
            this.setState({
                todos
            });
        } catch (e) {
            console.log(e);
        }
       
        

    }

    state = {
        todos: [],
        counter: 1,
        modal:false,
        
        
    };

    handleDelete(e){
      /*  var url = "http://127.0.0.1:8000/api/books/delete/"+e.target.name */
         var url = "http://192.168.99.100:8000/api/books/delete/"+e.target.name
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
                            <th> Kitap İsmi</th>
                            <th>Yazar</th>
                            <th>Tür</th>
                            <th>Kütüphane</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map((item, index) => (
                                <tr key={index + 1}>
                                    <th style={{ backgroundColor: "#D2D4DC" }} scope="row">{index + 1}</th>
                                    <td >{item['kitap_ismi']}</td>
                                    <td >{item['yazar']['ismi']}</td>
                                    <td >{item['tip']['tip']}</td>
                                    <td>{item['libary']['ismi']}</td>
                                    <td style={{ backgroundColor: "#D2D4DC" }}></td>
                                </tr>
                            ))
                        }
        <tr style={{ backgroundColor: '#B6BECB' }}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

                    </tbody>
                </Table>
            </div>
                      
        )
    }
    
}

