
import "./Product.css";

function MsgBox({ userName, textColor }) {
    return (
        <div className="Product">
            <p>Username {userName}</p>
            <p>Message {textColor}</p>
        </div>
    );
}

export default MsgBox;