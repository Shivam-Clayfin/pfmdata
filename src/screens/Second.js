import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';
import Img1 from "../components/Images/Img1.jpeg"


export default function Second({ page, setPage, formData, setFormData }) {
  return (
    <>
      <div className='main'>
        <div className='contr'>
          <div>  <form >
            <div className='centerr'><img className='log' src={Img1} alt="description" /></div>

            <div className='start' style={{ paddingTop: "10px" }}>    MCC_Code_ID:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'MCC_Code_ID'}
                value={formData.MCCCodeID}
                onChange={(e) => setFormData({ ...formData, MCCCodeID: e.target.value })}
              />
            </div>
            <div className='start'>Active_Flag:</div>
            <div className='start' style={{ paddingTop: "10px" }}>

              <input
                type='radio'
                id='1'
                name='1'
                value='1'
                checked={formData.ActiveFlag === '1'}
                onChange={(e) => setFormData({ ...formData, ActiveFlag: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='1'
              >
                Yes
              </label>

              <input
                style={{ marginLeft: 40 }}
                type='radio'
                id='0'
                name='0'
                value='0'
                checked={formData.ActiveFlag === '0'}
                onChange={(e) => setFormData({ ...formData, ActiveFlag: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='0'
              >
                No
              </label>
            </div>
            <div className='start' style={{ paddingTop: "10px" }} >   Transaction_Currency_Code_ID:</div>
            <div className='centerr'>
              <FormInput
                placeholderText={'Transaction_Currency_Code_ID'}
                value={formData.TransactionCurrencyCodeID}
                onChange={(e) => setFormData({ ...formData, TransactionCurrencyCodeID: e.target.value })}
              />
            </div>
            <div className='start'>Transaction_Mode_ID:</div>
            <div className='start' style={{ paddingTop: "10px" }}>

              <input
                type='radio'
                id='1'
                name='1'
                value='1'
                checked={formData.TransactionModeID === '1'}
                onChange={(e) => setFormData({ ...formData, TransactionModeID: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='1'
              >
                1
              </label>

              <input
                style={{ marginLeft: 40 }}
                type='radio'
                id='0'
                name='0'
                value='0'
                checked={formData.TransactionModeID === '0'}
                onChange={(e) => setFormData({ ...formData, TransactionModeID: e.target.value })}
              />
              <label style={{ marginLeft: 7 }}
                htmlFor='0'
              >
                0
              </label>
            </div>
            <div className='start' style={{ paddingTop: "10px" }}>  Category_ID:</div>
            <div className='centerr'>
              <select
                style={{ margin: 7, maxWidth: 400, padding: 10 }}
                className="form-select"
                value={formData.CategoryID}
                onChange={(e) => setFormData({ ...formData, CategoryID: e.target.value })}
              >
                <option defaultValue value='0'>Open this for select Category ID</option>
                <option value="91">Hotel</option>
                <option value="87">Groceries</option>
                <option value="67">Bank Charges</option>

                <option value="101">Medical</option>
                <option value="84">Furniture</option>
                <option value="83">Fuel</option>
                <option value="63">Accounting</option>
                <option value="64">Agricultural</option>
                <option value="65">Architecture</option>
                <option value="66">Art</option>
                <option value="68">Books</option>
                <option value="69">Bus</option>
                <option value="70">Bussiness</option>
                <option value="71">CAb/Taxi</option>
                <option value="72">Cable/TV</option>
                <option value="74">Contractor</option>

              </select>
            </div>


            <div className='centerr'>
              <div><FormButton

                className='btn btn-primary'
                buttonText={'Previous'}
                onClick={() => {
                  return setPage(page - 1);

                }}
              />

                <FormButton

                  className='btn btn-primary'
                  buttonText={'Next'}
                  onClick={() => {
                    setFormData({ ...formData, ActiveFlag: Number(formData.ActiveFlag), MCCCodeID: Number(formData.MCCCodeID), TransactionCurrencyCodeID: Number(formData.TransactionCurrencyCodeID), TransactionModeID: (formData.TransactionModeID === '1' ? true : false) });
                    setPage(page + 1);
                  }}
                />
              </div>
            </div>



          </form>
          </div>
        </div>
      </div>



    </>
  )
}
