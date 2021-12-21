import React  from 'react';
import Button from '../components/UI/button/Button';
import {Link} from 'react-router-dom';
import Input from '../components/UI/forms/input/Input';

        


// const formValid = (isError) => {
//     let isValid = false;
//     console.log(isError)
//     Object.values(isError).forEach(val => {
//         if (val.length != 0) {
//             isValid = false
//             console.log(val.length)
//         } else {
//             isValid = true
//         }
        
//     });
//     console.log(isValid)
//     return isValid;
//     };

    class AddProduct extends React.Component {
            
        constructor(props) {
            super(props)
            this.submit = this.submit.bind(this)
            this.getProductType = this.getProductType.bind(this)
            this.Validation = this.Validation.bind(this)
            this.state = {
                sku: '',
                name: '',
                price: '',
                productType: 'DVD',
                size: '',
                height: '',
                width: '',
                length: '',
                weight: '',
                attribute: '',
                isError: {
                    name: '',
                    price: '',
                    size: '',
                    height: '',
                    width: '',
                    length: '',
                    weight: '',
                    sku: ''
                },
                error: false
            }
            
        }
        



        submit(e) {
            e.preventDefault()
            this.setState = {
                attribute: this.getAttribute(this.state.productType)
            }
            const data = {
                sku: this.state.sku,
                name: this.state.name,
                price: this.state.price,
                type: this.state.productType,
                attribute: this.state.attribute
            }
            console.log(this.state)
            // fetch('http://localhost/simple/queries.php', {
            //     method: 'POST',
            //     body: JSON.stringify(data),
            //     headers:{'Content-Type': 'application/json'}})
            //     .then(res => res.json())
            
            
        }

        getAttribute(str) {
            const attributeValue = {
                Book: this.state.weight + 'KG' ,
                DVD: this.state.size +'MB',
                Furniture: this.state.height +'x'+ this.state.width +'x'+ this.state.length
            }
            this.state.attribute = attributeValue[str]
        }

        Validation = (e) => {
            let { sku, name, price, width, height, length, weight, size } = this.state
            let targetName = e.target.name
            let value = e.target.value
            let isError = this.state.isError
            let productType = this.state.productType
            const ValidationByType = {
                DVD: {
                    
                },
                Furniture: {

                },
                Book: {

                }
            }
        }

        
        onChange =(e) => {
            this.setState({ [e.target.name]: e.target.value })
            
        }


        getProductType (str) {
            const productsType = {
                DVD: <div>
                    <label>
                        Size(MB)
                        <Input
                            type='text'
                            name='size'
                            value={this.size}
                            placeholder='#size'
                            onChange={this.formValChange} />
                    </label>
                </div>,
                Book: <div>
                    <label>
                        Weight(KG)
                        <Input
                            type='text'
                            name='weight'
                            value={this.weight}
                            placeholder='#weight'
                            onChange={this.formValChange} />
                    </label>
                </div>,
                Furniture: <div>
                    <label>
                        Height(CM)
                        <Input
                            type='text'
                            name='height'
                            value={this.height}
                            placeholder='#height'
                            onChange={this.formValChange} />
                    </label>
                    <label>
                        Width(CM)
                        <Input
                            type='text'
                            name='width'
                            value={this.width}
                            placeholder='#width'
                            onChange={this.formValChange} />
                    </label>
                    <label>
                        Length(CM)
                        <Input
                            type='text'
                            name='length'
                            value={this.length}
                            placeholder='#length'
                            onChange={this.formValChange} />
                    </label>
                </div> 
            }
            return productsType[str]
        }


        render() {
            const { isError } = this.state;
        return (
        <div>
            <div className='navbar'>
                <h1>Product List</h1>
                <div>
                    <Button  onClick={this.submit}>SAVE</Button>
                    <Button><Link to='/'>CANCEL</Link></Button>
                </div>
                </div>
                    <hr />
                    
                <form id='product_form'>
                    <div className='main_input'>
                    <label>
                        Sku
                            <Input
                            type='text'
                            name='sku'
                            value={this.sku}
                            placeholder='#sku'
                            onChange={this.onChange}
                            />
                             {isError.sku.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                    </label>
                    <label>
                        Name
                            <Input
                            type='text'
                            name='name'
                            value={this.name}
                            placeholder='product name'
                            onChange={this.onChange} />
                    </label>
                    <label>
                        Price
                        <Input
                            type='number'
                            name='price'
                            value={this.price}
                            placeholder='30$'
                                onChange={this.onChange}
                            />
                    </label>
                    </div>


                    <label>
                            <select
                                name='productType'
                                onChange={this.onChange}
                        >
                                <option
                                    value='DVD'
                            >
                                DVD</option>
                            <option
                                    value='Furniture'
                            >
                                Furniture</option>
                            <option
                                    value='Book'
                            >
                                Book</option>
                        </select>
                        </label>
                        {/* {Object.keys(errors).map((key) => {
                            return <div key={key}>{errors[key]}</div>
                        })} */}
                        {this.getProductType(this.state.productType)}
                        {console.log(this.state.productType)}
                </form><div>

                </div>
        </div>
        )
    }
}



export default AddProduct;