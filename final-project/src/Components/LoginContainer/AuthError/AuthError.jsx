export default function AuthError(props) {
  let message = [];
  if (props.errorMsg.constructor === Array) {
    for (let msg of props.errorMsg) {
      if (msg.search("user") !== -1) {
        message.push(<p>Mi amor, ponga el usuario</p>);
      }
      if (msg.search("pass") !== -1) {
        message.push(<p>Mi amor, ponga el password</p>);
      }
    }
  } else {
    if (props.errorMsg.search("User") !== -1) {
      message.push(<p>Mi amor, revise el usuario</p>);
    } else if (props.errorMsg.search("Pass") !== -1) {
      message.push(<p>Mi amor, revise el password</p>);
    }
  }
  return (
    <div className="w-full font-normal text-red-500 font-semibold text-lg break-all flex flex-col gap-5 text-center">
      {message}
    </div>
  );
}
