import React,{useState} from "react";
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

const StatusModal=(props)=>{
  const [modal,setmodal]=useState(true)
  console.log(props)

    const toggle=()=> {
        setmodal(!modal)
        props.sets('')
      }
    return(
        <div>
        <Modal isOpen={modal} toggle={toggle} className={props.className}>
          <ModalHeader>Status
          <i class="far fa-times mt-1" style={{cursor:'pointer'}}  onClick={toggle}></i></ModalHeader>
          <ModalBody>
              {props.status}
          </ModalBody>
         
        </Modal>

        </div>
    )
}
export default StatusModal