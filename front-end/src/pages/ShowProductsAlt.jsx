import React,{useEffect, useState} from 'react';
import Button from '../components/UI/button/Button';
import {Link} from 'react-router-dom'
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';

class ShowProductsAlt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            posts: [],
            checkedBoxes: []
        };
    }
    componentDidMount() {
        fetch('http://localhost/simple/queries.php')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        posts: result.data
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }



    handleDelete = () => {
        fetch('http://localhost/simple/queries.php', {
            method: 'DELETE',
            body: JSON.stringify(this.state.checkedBoxes),
            headers: { 'Content-Type': 'application/json; charset=UTF-8'}
        }).then(response => {
            if (response.status === 200) {
                console.log('delete succesfuly')
            }
        })
        
        
    }

    onChange = (e) => {
        let checkedBoxes = this.state.checkedBoxes
        let posts = this.state.posts
        posts.forEach(post => {
            if (post.id === e.target.id && e.target.checked) {
                checkedBoxes.push(post.id)
                    }else if(!e.target.checked && post.id === e.target.id ) {
                checkedBoxes.splice(checkedBoxes.indexOf(e.target.id), 1)
            }
        })
    }

    render() {
        return(
            <div>
                { console.log(this.state.posts)}
                <div className='navbar'>
                    <h1>Product List</h1>
                    <div>
                        <Button><Link to='/add-product'>ADD</Link></Button>
                        <Button onClick={()=>{this.handleDelete()}} >MASS DELETE</Button>
                    </div>
                </div>
                <hr />
                <ProductList onChange={this.onChange} posts={this.state.posts}/>
            </div>
            
        );
    }
 
}

export default ShowProductsAlt;


