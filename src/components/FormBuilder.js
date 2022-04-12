import React from 'react'
import Sidebar from './Sidebar';
import './FormBuilder.css';

export default function FormBuilder() {
  return (
    <div className='form-builder'>
        <Sidebar />
        <form action="" className='form'>
            <label htmlFor="amount">Amount</label> <br />
            <input type="number" placeholder='$1000 - $5000' />
            <div>Please choose the amount you want to consolidate</div>
            <br />
            <label htmlFor="amount">Amount</label> <br />
            <select name="amount" id="amount">
                <option value="$1000">$ 1000</option>
                <option value="$2000">$ 2000</option>
                <option value="$3000">$ 3000</option>
                <option value="$4000">$ 4000</option>
            </select>
            <br />
            <br />
            <label htmlFor="msg">Message</label> <br />
            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
        </form>
    </div>
  )
}
