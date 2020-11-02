import React from "react";
import css from './Spinner.scss';
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  return (
    <div className="spinner">
      <ClipLoader
        css={css}
        size={100}
        color={"#e64eb8"}
        loading={loading}
      />
    </div>
  );
}

export default Spinner;