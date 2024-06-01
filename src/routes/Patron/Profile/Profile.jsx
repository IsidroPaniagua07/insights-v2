import React from 'react';
import { useAuth } from '../../../components/AuthContext/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faUser, faHouse, faEnvelope, faPhone, faIdCard, faCar, faUserTie, faDollarSign, faPeopleGroup, faPersonMilitaryRifle } from '@fortawesome/free-solid-svg-icons';

const Comp = () => {
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

    let testData = {
      name: 'John Doe',
      accountNumber: '1234567890',
      birthday: '01/01/2000',
      address: '1234 Elm St',
      email: 'testemail@test.com',
      phoneNumber: '123-456-7890',
      validId: '1234567890',
      licensePlates: {
        status: 'Active',
        plates: ['123456', '654321', '987654']
      },
      pointDetails: {
        tierLevel: 'Gold',
        tierPointsTotal: 1000,
        tierPointsToday: 100,
        tierPointsUntilNextTier: 1000,
        tierPointsExpiration: '01/01/2022'
      },
      host: 'Jane Doe',
      points: {
        total: 1000,
        today: 100,
      },
      ethnicity: 'Caucasian',
      militaryBranch: 'Navy',


    }

  return (
    <div className='flex flex-col h-full w-full gap'>
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

      <div className='flex flex-col h-[90%] px-2 py-2 w-full bg-white rounded-md'>
        <div className='flex w-full h-full shadow-2xl rounded-md'>
            <div className='flex flex-col w-[40%] h-full justify-between items-center py-4 px-8'>
              <div className='flex w-full gap-4 justify-start items-center'>
                <FontAwesomeIcon icon={faUser} size='3x' className='big-icon'/>
                <div className='flex flex-col text-xl'>
                  <strong>{testData.name}</strong>
                  <span>{testData.accountNumber}</span>
                </div>
              </div>
              <div className='flex w-full gap-4 justify-start items-center'>
                <FontAwesomeIcon icon={faCakeCandles} size='4x' className='big-icon'/>
                <div className='flex flex-col text-xl'>
                  <strong>{testData.birthday}</strong>
                  <span>xxx days until bday</span>
                </div>
              </div>
              <div className='flex w-full gap-4 justify-start items-center'>
                <FontAwesomeIcon icon={faHouse} size='4x' className='big-icon'/>
                <strong>{testData.address}</strong>
              </div>
              <div className='flex w-full gap-4 justify-start items-center'>
                <FontAwesomeIcon icon={faEnvelope} size='4x' className='big-icon'/>
                <strong>{testData.email}</strong>
              </div>
              <div className='flex w-full gap-4 justify-start items-center'>
                <FontAwesomeIcon icon={faPhone} size='4x' className='big-icon'/>
                <strong>{testData.phoneNumber}</strong>
              </div>
              <div className='flex w-full gap-4 justify-start items-center'>
                <FontAwesomeIcon icon={faIdCard} size='4x' className='big-icon'/>
                <strong>{testData.validId}</strong>
              </div>
              <div className='flex w-full gap-4 justify-start items-center'>
                <FontAwesomeIcon icon={faCar} size='4x' className='big-icon'/>
                <div className='flex flex-col'>

                <strong>{testData.licensePlates.status}</strong>
                <span>{testData.licensePlates.plates[0]}</span>
                <span>{testData.licensePlates.plates[1]}</span>
                <span>{testData.licensePlates.plates[2]}</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[40%] h-full justify-between items-center py-4 px-8'>
              <div className='flex w-full gap-4 justify-start items-center'>
                <FontAwesomeIcon icon={faUser} size='3x' className='big-icon'/>
                  <div className='flex flex-col text-xl'>
                    <span>Tier Points Total: {testData.pointDetails.tierPointsTotal}</span>
                    <span>{testData.pointDetails.tierPointsToday} earned today</span>
                    <span>{testData.pointDetails.tierPointsUntilNextTier} until next tier</span>
                    <span>Expires on {testData.pointDetails.tierPointsExpiration}</span>
                  </div>
                </div>
                <div className='flex w-full gap-4 justify-start items-center'>
                    <FontAwesomeIcon icon={faUserTie} size='4x' className='big-icon'/>
                    <strong>{testData.host}</strong>
                </div>
                <div className='flex w-full gap-4 justify-start items-center'>
                  <FontAwesomeIcon icon={faDollarSign} size='4x' className='big-icon'/>
                  <div className='flex flex-col text-xl'>
                    <strong>Points: {testData.points.total}</strong>
                    {testData.points.today} earned today
                  </div>
                </div>
                <div className='flex w-full gap-4 justify-start items-center'>
                  <FontAwesomeIcon icon={faHouse} size='4x' className='big-icon'/>
                  <strong>{testData.ethnicity}</strong>
                </div>
                <div className='flex w-full gap-4 justify-start items-center'>
                  <FontAwesomeIcon icon={faPersonMilitaryRifle} size='4x' className='big-icon'/>
                  <strong>{testData.militaryBranch}</strong>
                </div>

              </div>
            <div className='flex flex-col w-[20%] gap-10 shadow-2xl h-full rounded-md justify-center items-center'>
              <button className='btn'>Update Contact Info</button>
              <button className='btn'>Update License Plate</button>
              <button className='btn'>Reset Pin</button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Comp;