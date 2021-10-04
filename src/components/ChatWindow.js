import React from 'react'

export default function ChatWindow(props) {
    return (
        <div>
            <form>
       {/* here after Button disabled means when we keep empty field button will not work to submit */} 
      <FormControl>
  <input value= {input} onChange={event => setInput(event.target.value)}/>
  <Button disabled={!input} variant="contained" color="secondary" type= 'submit' onClick={props.sendMessage}>Send Message</Button>
</FormControl>
</form>
        </div>
    )
}
