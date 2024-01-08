import React, { forwardRef, useEffect, useState, useImperativeHandle } from "react";

const WizardTab = forwardRef(
  (
    {
      title,
      icon,
      shape,
      color = "#2196f3",
      isActive,
      index,
      onClick,
    },
    ref
  ) => {
    const stepClasses = isActive ? "active" : "";
    const cursorStyle = shape === "square" ? "default" : "";
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
      if (isActive) {
        setIsChecked(true);
      }
    }, [isActive]);

    const iconStyle = () => {
      if (isActive && isChecked) {
        return { color: "white" };
      }
      if (isChecked) {
        return { color: color };
      }
    };
    useImperativeHandle(ref, () => ({
      setChecked: (value) => {
        setIsChecked(value);
      },
    }));

    const handelIcon = () => {
      if (!icon) return <span style={iconStyle()}>{index + 1}</span>;
      if (typeof icon === "string") {
        return <i className={icon} style={iconStyle()}></i>;
      }
      return icon;
    };

    return (
      <li key={index} className={stepClasses}>
        <a
          className={isActive ? "active" : ""}
          style={{ cursor: cursorStyle }}
          onClick={onClick}
        >
          <div
            className={`wizard-icon-circle md ${isChecked ? "checked" : ""} ${
              shape === "square" ? "square_shape" : ""
            }`}
            role="tab"
            tabIndex={isActive ? 0 : undefined}
            id={`step-${index}`}
            aria-controls={`step-${index}`}
            aria-disabled={isActive}
            aria-selected={isActive}
            style={{
              borderColor: isChecked ? color : "",
            }}
          >
            <div
              className={`wizard-icon-container ${
                shape === "square" ? "square_shape" : ""
              }`}
              style={{
                backgroundColor: isActive ? color : "",
              }}
            >
              <span className="wizard-icon">
                {handelIcon()}
              </span>
            </div>
          </div>
          <span
            className={`stepTitle ${isActive ? "active" : ""}`}
            style={{
              color: isChecked ? color : "",
              marginTop: "8px",
            }}
          >
            {title}
          </span>
        </a>
      </li>
    );
  }
);

export default WizardTab;