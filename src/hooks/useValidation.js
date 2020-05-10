import { useEffect, useState } from 'react';

const useValidation = fieldsData => {
  const [fields, setFields] = useState({});

  const checkValidation = ({ target }) => {
    const key = target.id;

    if (fieldsData[key] !== '') {
      setFields({
        ...fields,
        [key]: true,
      });
    } else {
      setFields({
        ...fields,
        [key]: false,
      });
    }
  };

  useEffect(() => {
    const validationObject = Object.keys(fieldsData).reduce((previousValue, currentValue) => {
      // eslint-disable-next-line no-param-reassign
      previousValue[currentValue] = true;

      return previousValue;
    }, {});

    setFields(validationObject);
  }, []);

  return [fields, checkValidation];
};

export default useValidation;
