import React from 'react';
import { useState } from 'react';

const Profile = (props) => {

    const [newPostMessage, setNewPostMessage] = useState("");
    const [toggleNewMessage, setToggleNewMessage] = useState("");

    const profile_styling = (
        <div class='flex'>
                <div class="mt-5 ml-20 w-10/12 h-10/12 mockup-window border bg-green">
                    <div class="flex justify-center px-4 py-96 bg-base-200">
{/* company photo */}
                    <div class='fixed mt-10 h-96 w-96 top-10 left-80 bg-bone card rounded-full'>
                         <div class="artboard artboard-horizontal phone-1"></div>
                    </div>
{/* company name */}
                <div class='fixed mt-40 top-60 left-70 right-80'>
                    <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Bakewells Bakery</h1>
                    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    </div>
                </div>
            </div>
{/* cards that contain 3 elements */}
            <div class="fixed mt-40 top-80 left-80 right-30 card-body bg-darkgreen card shadow-xl w-96">
                <label for="my-modal" class="btn text-bone ">Current orders</label>
                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Pull in orders coming up</h3>
                        <p class="py-4">from some sort of array we make</p>
                        <div class="modal-action">
                            <label for="my-modal" class="btn">Close</label>
                        </div>
                    </div>
                </div>
            <label for="my-modal" class="btn text-bone">Previous orders</label>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Pull in orders due for today</h3>
                        <p class="py-4">from some sort of array we make</p>
                        <div class="modal-action">
                            <label for="my-modal" class="btn">Close</label>
                        </div>
                    </div>
                </div>
                <label for="my-modal" class="btn text-bone ">Invoices</label>
                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Pull in invoices</h3>
                        <p class="py-4">from some sort of array we make maybe send straight from order form</p>
                        <div class="modal-action">
                            <label for="my-modal" class="btn">Close</label>
                        </div>
                    </div>
                </div >
{/* text box bio */}
                <div class="fixed mt-40 top-80 right-80 w-96 h-40 border-solid border-5 border-green mb-10 form-control">        
                    <textarea class="textarea textarea-bordered textarea-xl border-darkgreen" placeholder="Bio"></textarea>
                    <br></br>
                    <div class="btn text-bone ">
                        <p>post</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

    return (
        <body>
            {profile_styling}
        </body>            
    )
}

export default Profile;