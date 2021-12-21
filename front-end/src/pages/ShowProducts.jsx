import React,{useEffect, useState} from 'react';
import Button from '../components/UI/button/Button';
import {Link} from 'react-router-dom'
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';

const ShowProducts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(posts.id)
    // function readPosts() {
    //     fetch('http://localhost/simple/queries.php')
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(post);
    //             setPost(response.data)
    //         })
    //     //     .then(res => res.json())
    //     //     .then(
    //     //     (result) => {
    //     //             this.setState({
    //     //                 isLoaded: true,
    //     //                 items: result.data
    //     //             });
    //     //         },
    //     //         (error) => {
    //     //             this.setState({
    //     //                 isLoaded: true,
    //     //                 error
    //     //             })
    //     //         }   
    //     // )
        
    // }
    
    const deletePost = (post) => {
        fetch();
    }

    useEffect(() => {
        fetch('http://localhost/simple/queries.php')
            .then(res => res.json())
            .then(
                (result) => {
                    // setIsLoaded(true);
                    setPosts(result.data);
                // },
                // error => {
                //     setIsLoaded(true);
                //     setError(error);
                    // 
                })
    }, [])

    // useEffect(() => {
    //     fetch('http://localhost/simple/queries.php')
    //         .then(response => response.json())
    //         .then(
    //             response => {
    //                 setIsLoaded(true);
    //                 setPosts(response);
    //                 console.log(response.data)
    //                 console.log(response)
    //             },
    //             error => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             })
    // }, [])
    

    return (
        <div>
            
            <div className='navbar'>
                <h1>Product List</h1>
                <div>
                    <Button><Link to='/add-product'>ADD</Link></Button>
                    <Button >MASS DELETE</Button>
                </div>
            </div>
            <hr />
                <ProductList posts={posts} revome={deletePost} />
        </div>
    )
 
}

export default ShowProducts;


