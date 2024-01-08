import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import WizardTab from "./WizardTab";
import WizardButton from "./WizardButton";
import "react-form-wizard-component/dist/style.css";

const FormWizard = forwardRef(
  (
    {
      title,
      shape = "",
      color = "#2196f3",
      children,
      subtitle = "",
      nextButtonText = "Next",
      nextButtonTemplate,
      backButtonText = "Back",
      backButtonTemplate,
      finishButtonText = "Finish",
      finishButtonTemplate,
      stepSize = "md",
      layout = "horizontal",
      startIndex = 0,
      onComplete,
      onTabChange,
      handleNextButton,
      handlePrevButton
    },
    ref
  ) => {
    const steps = React.Children.toArray(children);

    const wizardTabRef = steps.map(() => React.useRef(null));

    useImperativeHandle(ref, () => ({
      // nextTab: () => {
      //   handleNext();
      // },
      // prevTab: () => {
      //   handlePrevious();
      // },
      reset: () => {
        setCurrentStep(startIndex);
        wizardTabRef.forEach((tab, index) => {
          if (startIndex >= index) tab.current.setChecked(true);
          else tab.current.setChecked(false);
        });
      },
      activeAll: () => {
        wizardTabRef.forEach((tab) => {
          tab.current.setChecked(true);
        });
      },
      goToTab: (index) => {
        handelNavigate(index, true);
        wizardTabRef.forEach((tab, i) => {
          if (index >= i) tab.current.setChecked(true);
          else tab.current.setChecked(false);
        });
      },
    }));

    if (startIndex < 0 || startIndex > steps.length) {
      startIndex = 0;
      console.error(
        "startIndex should be greater than or equal to 0 or less than steps.length"
      );
    }

    const [currentStep, setCurrentStep] = useState(startIndex);

    useEffect(() => {
      if (currentStep > 0) {
        wizardTabRef.forEach((tab, index) => {
          if (startIndex >= index) tab.current.setChecked(true);
        });
      }
    }, [currentStep, startIndex, wizardTabRef]);

    if (typeof onTabChange === "function") {
      onTabChange({
        prevIndex: currentStep,
        nextIndex: currentStep + 1,
      });
    }

    const handelNavigate = (index, navigateMode = false) => {
      if (navigateMode) {
        setCurrentStep(index);
        return;
      }
      if (index <= currentStep) {
        setCurrentStep(index);
      }
    };

    const handleNext = () => {
      let result = handleNextButton();
      if (!result) {
        return;
      }
      if (currentStep === steps.length - 1) return;
      setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
      handlePrevButton();
      if (currentStep === 0) return;
      setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
      if (typeof onComplete === "function") onComplete();
    };

    const renderTabs = () => {
      return steps.map((step, index) => {
        const { title, icon, isValid = true, validationError } = step.props;
        const isActive = index === currentStep;

        // useEffect(() => {
        //   if (isActive && !isValid) {
        //     setCurrentStep(index - 1);
        //     wizardTabRef[index]?.current.setChecked(false);
        //     if (typeof validationError === "function") validationError();
        //   }
        // }, [isActive, isValid, index, validationError]);

        return (
          <WizardTab
            key={index}
            ref={wizardTabRef[index]}
            title={title}
            icon={icon}
            shape={shape}
            color={color}
            isActive={isActive}
            index={index}
            onClick={() => handelNavigate(index)}
          />
        );
      });
    };

    const renderContent = () => {
      return steps[currentStep];
    };

    const progressBarStyle = {
      backgroundColor: color,
      width: `${((currentStep + 1) / steps.length) * 100}%`,
      color: color,
    };
    const fillButtonStyle = {
      backgroundColor: color,
      borderColor: color,
      borderRadius: "4px",
    };
    const isVertical = layout === "vertical" ? "vertical" : "horizontal";

    return (
      <div className={`react-form-wizard ${stepSize} ${isVertical}`}>
        <div className="wizard-header">
          {typeof title === "string" ? (
            <>
              <h4 className="wizard-title">{title}</h4>
              <p className="category">{subtitle}</p>
            </>
          ) : (
            title
          )}
        </div>
        <div className="wizard-navigation">
          <div className="wizard-progress-with-circle">
            <div className="wizard-progress-bar" style={progressBarStyle}></div>
          </div>
          <ul
            className={`form-wizard-steps wizard-nav wizard-nav-pills ${shape} ${stepSize}`}
            style={{ borderColor: color }}
          >
            {renderTabs()}
          </ul>
          <div className="wizard-tab-content">{renderContent()}</div>
        </div>

        <div className="wizard-card-footer clearfix">
          {currentStep > 0 && (
            <>
                <div className="wizard-footer-left" style={fillButtonStyle}>
                  <WizardButton onClick={handlePrevious}>
                    {backButtonText}
                  </WizardButton>
                </div>
            </>
          )}
          {currentStep < steps.length - 1 && (
            <>
                <div className="wizard-footer-right" style={fillButtonStyle}>
                  <WizardButton onClick={handleNext}>
                    {nextButtonText}
                  </WizardButton>
                </div>
            </>
          )}
          {currentStep === steps.length - 1 && (
            <>
                <div className="wizard-footer-right" style={fillButtonStyle}>
                  <WizardButton onClick={handleSubmit}>
                    {finishButtonText}
                  </WizardButton>
                </div>
            </>
          )}
        </div>
      </div>
    );
  }
);

FormWizard.TabContent = ({ children, isValid = true }) => {
  return <>{isValid && children}</>;
};

export default FormWizard;