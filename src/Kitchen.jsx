import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen() {
  return(
    <div className='stacked' id='kitchen'>
      <div>
        <Oven />
        <Sink />
      </div>
      <div>
        Kitchen
      </div>
    </div>
  )
}

export default Kitchen