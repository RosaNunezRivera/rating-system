import React, { useState } from 'react';
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";

function App() {

  const ratings = [
      'Regular',
      'Average',
      'Good',
      'Great',
      'Excelent'
  ]

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <body className='flex'>
      <div className='container flex'>
        
        <section>
           <StarRating ratings={ratings}/>
        </section>

        <section>
          <button 
            className='dialog-btn' 
            onClick={() => setIsDialogOpen(!isDialogOpen)}>
            {isDialogOpen ? 'Close Dialog' : 'Open Dialog'}
          </button>
        </section>
        {isDialogOpen && <Dialog onClose={handleCloseDialog} />}
     </div>
    </body>
    
  );
}

export default App;
