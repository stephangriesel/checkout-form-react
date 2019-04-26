const renderCouponValidationError = coupon.valid ? "" : <ErrorValidationLabel txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt} />;
const renderDateValidationError = lastname.valid ? "" : <ErrorValidationLabel txtLbl={lastname.requiredTxt} />;
const renderFnameValidationError = firstname.valid ? "" : <ErrorValidationLabel txtLbl={firstname.requiredTxt} />;