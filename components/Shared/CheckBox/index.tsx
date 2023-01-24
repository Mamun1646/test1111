import React from "react";
import PropTypes from "prop-types";
import { NextPage } from "next";

type Props = {
  label: string;
  selected: boolean | undefined;
  styleClass: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox: NextPage<Props> = ({
  label,
  selected,
  styleClass,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target;
  };

  return (
    <div className={`form-group ${styleClass}`}>
      <label>
        <input
          type="checkbox"
          className="mr-2"
          //  value={}
          defaultChecked={selected}
          onChange={handleChange}
        />

        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  styleClass: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  styleClass: "",
};

export default Checkbox;
