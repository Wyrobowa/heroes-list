import { useEffect, useState } from 'react';

const useValidation = fieldsData => {
  const [fields, setFields] = useState({});

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
    const isFormInvalid = !Object.values(fields).includes(false);

    if (target) {
      const key = target.id;
      const { value } = target;

      if (key === 'type.name') {
        setFields({
          ...fields,
          type: value !== 'default',
        });
      } else {
        setFields({
          ...fields,
          [key]: value !== '',
        });
      }
    } else {
      setFieldsValue(isFormInvalid);
    }
  };

  useEffect(() => {
    setFieldsValue(true);
  }, []);

  return [fields, checkValidation];
};

export default useValidation;
