import React from 'react';
import CalendarTable from './calendar';
import Orders from './orders';

export default function BakeryIndex() {

    <script src="../path/to/fullcalendar.min.js"></script>

    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <Orders></Orders>
                </div>
            </div>
        <body>
            <div className='flex'>
                <div className="mt-5 ml-20 w-10/12 h-10/12 mockup-window border bg-green">
                    <div className="flex justify-center px-4 py-96 bg-base-200">
    {/* company photo */}
                    <div className='fixed mt-10 h-96 w-96 top-10 left-80 bg-bone card rounded-full'>
                        <div className="artboard artboard-horizontal phone-1"></div>
                    </div>
    {/* company name */}
            </div>
    {/* cards that contain 3 elements */}
                    <div className="fixed mt-40 top-80 left-80 right-30 card-body bg-darkgreen card shadow-xl w-96">
                        <button class="btn bg-beige text-bone btn-block"><a href='/addItem'>Add more items</a></button>
                            {/* <button class="btn bg-beige text-bone btn-block"><a href='/orders'>Upcoming orders</a></button> */}
                            <label for="my-modal-3" class="btn bg-beige text-bone btn-block">Upcoming orders</label>
                            
                            <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
                                <button class="btn btn-sm bg-beige text-bone btn-block">Add order</button>
                          {/* calendar */}
                            <div className="fixed mt-60 top-60 right-80 w-96 h-96 border-solid border-5 border-green mb-10"> 
                          <CalendarTable></CalendarTable>
                </div>
            </div>
        </div>
    </div>
            </body>
            </div>
    )
}