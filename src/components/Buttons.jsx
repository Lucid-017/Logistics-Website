import { AiOutlineMenu } from "react-icons/ai"

export const NeutralButton = () => {
  return (
    <div>
     <button  className="btn p-3 font-bold text-black bg-white border-2 border-black hover:bg-transparent hover:text-white ">Place Order</button>

    </div>
  )
}
export const ContactButton = () => {
  return (
    <div>
      <button type="submit" class="my-4 btn p-3 font-bold text-black bg-white border-2 border-black ">SEND MESSAGE</button>
    </div>
  )
}
export const ChatButton = () => {
  return (
    <div className="order z-20">
        <div style={{borderBottomLeftRadius:'50%',borderBottomRightRadius:'50%',borderTopLeftRadius:'50%',borderTopRightRadius:'5px'}} 
        className="p-4 bg-green-500 hover:bg-green-400 fixed bottom-20 right-10 cursor-pointer">
          <AiOutlineMenu color='white' size={'30'}/>
        </div>
      </div>
  )
}


