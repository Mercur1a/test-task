import React  from 'react';
import Button from '../components/UI/button/Button';
import {Link,Redirect} from 'react-router-dom';
import Input from '../components/UI/forms/input/Input';
import './addproducts.css';
        

const formValid = (isError, data) => {
    let valid = true;
    console.log(data)
    Object.values(data).forEach(value => {
        (value.length > 0 && value != 0)  && (valid = true);
        console.log(value)
    })
    Object.values(isError).forEach(value => {
        value.length > 0 && (valid = false);
        console.log(value.length)
        console.log(value)
    })
        console.log(valid)
    return valid;
    }

    
    class AddProductAlt extends React.Component {
            
        constructor(props) {
            super(props)
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
                    sku: '',
                },
                isValid: false,
                redirect: false
                
            }
            
        }
        

        

        submit = (e) => {
            this.setState = {
                attribute: this.getAttribute(this.state.productType)
            }
            const data = {
                type: this.state.productType,
                attribute: this.state.attribute,
                sku: this.state.sku,
                name: this.state.name,
                price: this.state.price,
            }

            if (formValid(this.state.isError, data)) {
                console.log('true')
                fetch('http://localhost/simple/queries.php', {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{'Content-Type': 'application/json'}})
                    .then(res => res.json())
                window.location.href = '/'
                console.log(this.state)
            } else {
                console.log('false')
            }
        }

        

        getAttribute(str) {
            const attributeValue = {
                Book: this.state.weight + 'KG' ,
                DVD: this.state.size +'MB',
                Furniture: this.state.height +'x'+ this.state.width +'x'+ this.state.length
            }
            this.state.attribute = attributeValue[str]
        }

        handleChange = (e) => {
            const { name, value } = e.target
            this.setState({ [name]: value }, () => this.validation(name, value))
        }

        validation(name, value) {
            let isError = this.state.isError
            const checkIsValid = {
                name: value.length == 0 ? 'please write the name' : '',
                price: (value < 0 || value == 0) ? 'please write the price' : '',
                width: value.length == 0 ? 'please write the width' : '',
                size: value.length == 0 ? 'please write the size' : '',
                length:  value.length == 0 ? 'please write the length' : '',
                weight: value.length == 0 ? 'please write the weight' : '',
                height: value.length == 0 ? 'please write the height' : '',
                sku: value.length < 4  ? 'minimum 4 characters required' : ''
            }
            return isError[name] = checkIsValid[name] 
        }
        
        checkValid = (isValid) => {
            const valid = {
                false: <span>please check the written data</span>,
                true: <span></span>
            }
            return valid[isValid]
        }

        getProductType = (str) => {
            const isError = this.state.isError
            const productsType = {
                DVD: <div className='main_input'>
                    <label className='input_block'>
                        <span>Size(MB)</span>
                        <Input
                            type='number'
                            name='size'
                            value={this.size}
                            placeholder='size...'
                            onChange={this.handleChange}
                        />
                        {isError.size.length > 0 && <span className='validation_error'>{isError.size }</span>}
                    </label>
                </div>,
                Book: <div className='main_input'>
                    <label className='input_block'>
                        
                        <span>Weight(KG)</span>
                        <Input
                            type='number'
                            name='weight'
                            value={this.weight}
                            placeholder='weight...'
                            onChange={this.handleChange}
                        />
                        {isError.weight.length > 0 && <span className='validation_error'>{isError.weight }</span>}
                    </label>
                </div>,
                Furniture: <div className='main_input'>
                    <label className='input_block'>
                        
                        <span>Height(CM)</span>
                        <Input
                            type='number'
                            name='height'
                            value={this.height}
                            placeholder='height...'
                            onChange={this.handleChange}
                        />
                        {isError.height.length > 0 && <span className='validation_error'>{isError.height }</span>}
                    </label>
                    <label className='input_block'>
                        
                        <span>Width(CM)</span>
                        <Input
                            type='number'
                            name='width'
                            value={this.width}
                            placeholder='width...'
                            onChange={this.handleChange}
                        />
                        {isError.width.length > 0 && <span className='validation_error'>{isError.width }</span>}
                    </label>
                    <label className='input_block'>
                        <span>Length(CM)</span>
                        <Input
                            type='number'
                            name='length'
                            value={this.length}
                            placeholder='length...'
                            onChange={this.handleChange}
                        />
                        {isError.length.length > 0 && <span className='validation_error'>{isError.length }</span>}
                    </label>
                </div> 
            }
            return productsType[str]
        }


        render() {
            const { isError, isValid } = this.state;
            return (
        <div>
            <div className='navbar'>
                <h1>Product Add</h1>
                    <div>
                        <Button onClick={this.submit}>SAVE</Button>
                        <Button><Link to='/'>CANCEL</Link></Button>
                    </div>
            </div>
                    <hr />
                    
                <form className='product_form' id='product_form'>
                    <div className='main_input'>
                        <h2 className='title'>Product form</h2>
                            <label className='input_block'>
                                
                            <span className='input_block_text'>Sku:</span>
                                <Input
                                id='#sku'
                                type='text'
                                name='sku'
                                value={this.sku}
                                placeholder='sku...'
                                onChange={this.handleChange}
                            />
                            {isError.sku.length > 0 && <span className='validation_error'>{isError.sku }</span>}
                        </label>

                        <label className='input_block'>
                            <span>Name:</span>
                                <Input
                                id='#name'
                                type='text'
                                name='name'
                                value={this.name}
                                placeholder='product name...'
                                onChange={this.handleChange}
                                />
                                {isError.name.length > 0 && <span className='validation_error'>{isError.name }</span>}
                        </label>

                        <label className='input_block'>
                            <span>Price:</span>
                                <Input
                                id='#price'
                                type='number'
                                name='price'
                                value={this.price}
                                placeholder='30$...'
                                onChange={this.handleChange}
                                />
                                {isError.price.length > 0 && <span className='validation_error'>{isError.price }</span>}
                        </label>
                </div>
                    <div className='product_type'>
                        <label className='input_block'>
                            <span>Product Type </span>
                            <select
                                id='productType'
                                name='productType'
                                onChange={this.handleChange}
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
                        {this.getProductType(this.state.productType)}
                    </div>
                </form>
        </div>)
    }
}



export default AddProductAlt;