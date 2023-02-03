import React from "react";
import { useState, useEffect } from "react";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// NEED THIS:
import storage from "./firebaseConfig";

export default function AddItem() {

    const [item, setItem] = useState('')
    const [price, setPrice] = useState('')
    const [costToBake, setCostToBake] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [batchQuantity, setBatchQuantity] = useState('')
    const [file, setFile] = useState('')

    const [items, setItems] = useState([]);

    const resetFields = () => {
        setItem('')
        setPrice('')
        setCostToBake('')
        setIngredients('')
        setBatchQuantity('')
        setFile('')
    }

    useEffect(() => {
        fetch("/items", {
        })
          .then(response => response.json())
          .then(async data => {
            setItems(data.items);
          })
     
    }, [])

    const uploadTaskPromise = async () => {

        return new Promise(function(resolve, reject) {
        
        const storage = getStorage();
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed', (snapshot) => {}, 
            (error) => {console.log(error)}, 
            () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // setImageUrl(downloadURL)
                    resolve(downloadURL)
                    });
                }
            );
        })

    }

    function handleChange(event) {
        setFile(event.target.files[0]);
        }

    const addItem = async (url) => {
        const itemObj = {itemName: item,
                        price,
                        image: url,
                        costToBake,
                        ingredients,
                        batchQuantity}

        const response = await fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemObj),
        })
        const data = await response.json()

        if (response.ok) {
            console.log('data', data)
        }
    
        setItems(data.items)
    }

    const addItemWrapper = async () => {
        const storageUrl = await uploadTaskPromise()

        await addItem(storageUrl)

        resetFields()
    }

    const deleteItem = async (id) => {
        console.log('this is id', id)
        const response = await fetch('/items/deleteItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        })
        const data = await response.json()

        if (response.ok) {
            console.log('data', data)
        }
        setItems(data.items)
    }

    const selectedItem = (itemObj) => {
        setItem(itemObj.itemName)
        setPrice(itemObj.price)
        setCostToBake(itemObj.costToBake)
        setIngredients(itemObj.ingredients)
        setBatchQuantity(itemObj.batchQuantity)
        setFile('')
    }

    const editItem = async (itemObj) => {

        selectedItem(itemObj)

        const updatedItem = {itemName: item,
            price,
            costToBake,
            ingredients,
            batchQuantity}

        const response = await fetch('/items/editItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: itemObj._id, updatedItem}),
        })
        const data = await response.json()

        if(response.ok) {
            console.log('data', data)
        }
        setItems(data.items)
    }

    const itemDisplay = items?.map((item) => {

        return (
            <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.itemName}</div>
            </div>
          </div>
        </td>
        <td>
          {item.price}
          <br/>
        </td>
        <td>{item.costToBake}</td>
        <td>
          {item.ingredients}
        </td>
        <td>{item.batchQuantity}</td>
        <th className="flex justify-around">
          {/* <button className="btn" onClick={() => {editItem(item)}}>edit</button> */}
          <label htmlFor="my-modal-5" className="btn" onClick={() => {selectedItem(item)}}>edit</label>

          <button className="btn" onClick={() => {deleteItem(item._id)}}>delete</button>
        </th>
      </tr>
        )}
        )

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Cost to Bake</th>
                        <th>ingredients</th>
                        <th>Batch Quantity</th>
                        <th>
                        <label htmlFor="my-modal-5" className="btn" onClick={resetFields}>add item</label></th>
                        </tr>
                    </thead>
                    <tbody>
                    {itemDisplay}
                    </tbody>    
                </table>
            </div>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Add new item</h3>
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Item" 
                        className="input input-bordered" 
                        value={item}
                        onChange={(e) => setItem(e.target.value)}/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="price" 
                        className="input input-bordered"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cost to bake</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Cost to bake" 
                        className="input input-bordered" 
                        value={costToBake}
                        onChange={(e) => setCostToBake(e.target.value)}/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="ingredients" 
                        className="input input-bordered" 
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Batch Quantity</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Batch Quantity" 
                        className="input input-bordered" 
                        value={batchQuantity}
                        onChange={(e) => setBatchQuantity(e.target.value)}/>
                        </div>
                        <div className="form-control mt-6">
                        <label className="btn btn-primary" htmlFor="my-modal-5" onClick={addItemWrapper}>Add</label>
                       </div>
                      <input type="file" 
                      className="file-input file-input-bordered file-input-xs w-full max-w-xs" 
                      onChange={handleChange}
                      accept="/image/*"/>
                    </div>
                    <div className="modal-action">
                    <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
                </div>
        </div>
    )
}