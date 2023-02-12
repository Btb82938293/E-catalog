export default function Contact(props) {
  return (
    <li className="contact">
      {props.firstName} {props.lastName}
      <button onClick={() => props.delete(props.id)}>X</button>
      <button onClick={() => props.showInfo(props.id)}>V</button>
      <div className={props.isShown ? "contacts active" : "contacts"}>
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </li>
  );
}
