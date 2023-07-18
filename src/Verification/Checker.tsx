import CryptoJS from "crypto-js";
import Final from "./Final";
import { useEffect, useState } from "react";

const sha256Hashing = (string: string) => {
  const hash = CryptoJS.SHA256(string);
  return hash.toString();
};
const md5Hashing = (string: string) => {
  const hashmd = CryptoJS.MD5(string);
  return hashmd.toString();
};

interface Props {
  hash: string;
  value: string;
  format: string;
}

const Checker = (props: Props) => {
  const [ca, setCa] = useState(false);
  const caCall = () => {
    useEffect(() => {
      setCa(true);
    }, [props.hash, props.value, props.format]);
  };
  const caFCall = () => {
    useEffect(() => {
      setCa(false);
    }, [props.hash, props.value, props.format]);
  };
  var format = props.format;
  if (format == "MD5") {
    const y1s = md5Hashing(props.value);
    if (y1s == props.hash) {
      caCall();
    } else {
      caFCall();
    }
  } else if (format == "SHA256") {
    const z1s = sha256Hashing(props.value);
    if (z1s == props.hash) {
      caCall();
    } else {
      caFCall();
    }
  }
  if (ca) {
    return (
      <Final
        cn="co"
        source="correct.png"
        message="The checksum is matched perfectly with the given value."
      />
    );
  } else {
    return (
      <Final
        cn="wr"
        source="wrong.png"
        message="The checksum is not matched with the given value."
      />
    );
  }
};

export default Checker;
