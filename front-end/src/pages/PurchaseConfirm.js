import { useHistory, useParams } from "react-router-dom";



export default function Confirmation(){
    const history = useHistory()
    const {email} = useParams()

    const BackToVouchers = (e) => {
        e.preventDefault()
        history.push("/vouchers")
    }

    return(
        <div className="confcontainer">
            <div className="confirmation">
                <p>Your voucher hass been to sent to following email:<span className="emailtag">{email}</span> </p>
                <button className="btnHP" onClick={BackToVouchers}>Continue shopping</button>
            </div>
        </div>
    )
}