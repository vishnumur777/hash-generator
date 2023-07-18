interface Props {
  cn: string;
  source: string;
  message: String;
}
function Final(props: Props) {
  return (
    <div className={props.cn}>
      <img className="vsx" src={props.source} />
      <p className="psx">{props.message}</p>
    </div>
  );
}

export default Final;
