import { useEffect, useState } from 'react';

const useValidation = fieldsData => {
  const [fields, setFields] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const setFieldsValue = value => {
    const validationObject = Object.keys(fieldsData).reduce((previousValue, currentValue) => {
      // eslint-disable-next-line no-param-reassign
      previousValue[currentValue] = value;

      return previousValue;
    }, {});

    setFields(validationObject);
  };

  const checkValidation = (event = {}) => {
    const { target } = event;
    const isFormInvalid = Object.values(fields).includes(false);

    if (target) {
      const key = target.id;
      const { value } = target;

      setFields({
        ...fields,
        [key]: value !== '',
      });
    } else {
      setFieldsValue(isFormInvalid);
    }

    return isFormInvalid;
  };

  useEffect(() => {
    setFieldsValue(true);
  }, []);

  useEffect(() => {
    setIsFormValid(!Object.values(fields).includes(false));
  }, [fields]);

  return [fields, checkValidation, isFormValid];
};

export default useValidation;
