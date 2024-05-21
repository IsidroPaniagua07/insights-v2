import React from 'react';
import { useAuth } from '../../components/AuthContext/AuthContext';

const Patron = () => {
  const { isAuthenticated, login, logout } = useAuth();

    const notes = [
      {
        startDate: '2021-09-01',
        endDate: '2021-09-30',
        content: 'This is the content of note 1.'
      },
      {
        startDate: '2021-10-01',
        endDate: '2021-10-31',
        content: 'This is the content of note 2.'
      },
      {
        startDate: '2021-11-01',
        endDate: '2021-11-30',
        content: 'This is the content of note 3.'
      }

    ];


  return (
    <div className='flex flex-col h-full w-full'>
      <div className='flex flex-col gap-[1px] min-h-[130px] max-h-[130px] overflow-auto'>
        {notes? notes.map((note, index) => (
            <div key={index} className='flex flex-row bg-green-300 text-md w-full h-fit p-2'>
              <div className='flex flex-col min-w-[220px]'>
                <span className=''>
                  <strong>Start Date: </strong>{note.startDate}
                </span>
                <span className=''>
                  <strong>End Date: </strong>{note.endDate}
                </span>
              </div>
              <span className='flex h-full w-full items-center'>
                {note.content}
              </span>
            </div>
          )
        ) : null}
      </div>

      <div className='flex flex-col h-full w-full bg-white'>
        <div className='flex flex-row w-full h-[600px]'>
          <div className='h-full w-[65%] border border-black rounded-md'>
            Player Info
          </div>
          <div className='h-full w-[35%] border border-black rounded-md'>
            Comp rollup
          </div>

        </div>
        <div className='flex h-[300px] border border-black rounded-md'>
          Synkros reinvestment detials
        </div>
      </div>
    </div>
  );
};

export default Patron;