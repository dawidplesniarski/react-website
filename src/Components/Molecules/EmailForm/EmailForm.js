import React, { useState } from "react"
import { StyledEmailFormContainer, StyledEmailFormWrapper } from "./EmailForm.styles"
import Input from "../../Atoms/Input/Input"
import { Button } from "../../Atoms/Button/Button.styles"
import { ContactPageDescriptionH2 } from "../MapItem/MapItem.styles"
import TextArea from "../../Atoms/TextArea/TextArea"
import { validateEmail } from "../../../Utils/utils"
import { connect } from "react-redux"
import {
  emailFormButton_DE,
  emailFormButton_PL,
  emailFormEmail_DE,
  emailFormEmail_PL, emailFormMessage_DE, emailFormMessage_PL,
  emailFormTitle_DE,
  emailFormTitle_PL,
  emailFormUserData_DE,
  emailFormUserData_PL
} from "../../../Utils/dictionary"

const EmailForm = ({langReducer}) => {
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
          <ContactPageDescriptionH2>{langReducer.isPolish ? emailFormTitle_PL : emailFormTitle_DE}</ContactPageDescriptionH2>
          <Input placeholder={langReducer.isPolish ? emailFormUserData_PL : emailFormUserData_DE} type={"text"} name={"name"}
                 onChange={el => setFromName(el.target.value)}/>
          <Input placeholder={langReducer.isPolish ? emailFormEmail_PL : emailFormEmail_DE} type={"email"} name={"email"} onChange={el => setFromEmail(el.target.value)}/>
          <TextArea placeholder={langReducer.isPolish ? emailFormMessage_PL : emailFormMessage_DE} type={"text"} name={"message"}
                    onChange={el => setMessage(el.target.value)} rows={3} maxLength={500}/>
          <Button disabled={fromName === "" || fromEmail === "" || message === ""} onClick={() => onSubmit()}>
            {langReducer.isPolish ? emailFormButton_PL : emailFormButton_DE}
          </Button>
        </StyledEmailFormWrapper>
      </StyledEmailFormContainer>
    </>
  )
}

const mapStateToProps = ({langReducer}) => {
  return {langReducer};
}

export default connect(mapStateToProps)(EmailForm);
