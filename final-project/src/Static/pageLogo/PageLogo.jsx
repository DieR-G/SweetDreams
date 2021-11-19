import candyLogo from '../../Assets/candy_logo.svg'
function PageLogo(props) {
  return (
    <div className="flex h-16 w-40">
      <img
        className="w-10 h-10 bg-white"
        src={candyLogo}
        alt=""
      ></img>
      <div>
        <p className="font-styled">Sweet Dreams</p>
      </div>
    </div>
  );
}

export default PageLogo;
