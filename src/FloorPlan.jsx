import Bath from './Bath';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';

function FloorPlan() {
  return (
    <>
      <div id='top'>
        <div className='stacked left'>
          <Bedroom className='bedroom' bedNum={1} />
          <Bath size={'Full'} />
        </div>
        
        <LivingRoom />
        <Kitchen />
      </div>

      <div id='bottom'>
        <Bedroom className='bedroom' bedNum={2} />
        <Bath size={'Half'} />
        <Bedroom className='bedroom' bedNum={3} />
      </div>
    </>
  );
}

export default FloorPlan;
