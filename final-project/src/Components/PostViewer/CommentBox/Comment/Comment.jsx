function Comment(props) {
  return (
    <div className="flex flex-col">
      <div>
        <span className="font-round font-semibold">{props.comment.user.username} said:</span>
      </div>
      <div className="border-l-2 border-gray-700 ml-2 pl-3 mt-1">
        <p>{props.comment.description}</p>
      </div>
    </div>
  );
}

export default Comment;
