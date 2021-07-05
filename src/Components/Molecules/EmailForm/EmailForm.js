import React, { useState } from "react"
import { StyledEmailFormContainer, StyledEmailFormWrapper } from "./EmailForm.styles"
import Input from "../../Atoms/Input/Input"
import { Button } from "../../Atoms/Button/Button.styles"
import { ContactPageDescriptionH2 } from "../MapItem/MapItem.styles"
import TextArea from "../../Atoms/TextArea/TextArea"
import { validateEmail } from "../../../Utils/utils"

const EmailForm = () => {
  const [fromName, setFromName] = useState("")
  const [fromEmail, setFromEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = () => {
    const templateId = "template_0iauu7h"
    const serviceId = "service_qzuqz79"
    if(validateEmail(fromEmail)) {
      sendFeedback(serviceId, templateId, { from_name: fromName, message: message, reply_to: fromEmail })
    } else {
      alert("Wrong E-mail address!");
    }
  }

  const sendFeedback = (serviceId, templateId, variables) => {
    window.emailjs.send(serviceId, templateId, variables).then(res => {
      if(res) {
        alert(`Wiadomość z adresu ${fromEmail} została pomyślnie wysłana!`)
      }
    })
      .catch(err => alert("There has been an error.  Here some thoughts on the error that occured:", err))
  }

  return (
    <>
      <StyledEmailFormContainer>
        <StyledEmailFormWrapper>
          <ContactPageDescriptionH2>Wyślij zapytanie ofertowe!</ContactPageDescriptionH2>
          <Input placeholder={"Imię i nazwisko"} type={"text"} name={"name"}
                 onChange={el => setFromName(el.target.value)}/>
          <Input placeholder={"E-mail"} type={"email"} name={"email"} onChange={el => setFromEmail(el.target.value)}/>
          {/*<Input placeholder={"Wiadomość"} type={"text"} name={"message"} onChange={el => setMessage(el.target.value)}/>*/}
          <TextArea placeholder={"Wiadomość"} type={"text"} name={"message"}
                    onChange={el => setMessage(el.target.value)} rows={3} maxLength={500}/>
          <Button disabled={fromName === "" || fromEmail === "" || message === ""} onClick={() => onSubmit()}>
            Wyślij wiadomość
          </Button>
        </StyledEmailFormWrapper>
      </StyledEmailFormContainer>
    </>
  )
}

export default EmailForm
