import React, {
  ForwardedRef,
  forwardRef,
  useContext,
  useImperativeHandle
} from 'react';
import { IFormContext, IFormProps, IFormRef } from './types';

const defaultFormContextValues: IFormContext = {
  updateFormValue: () => undefined,
  updateFormTouched: () => undefined,
  unsetFormValue: () => undefined,
  loading: false,
  formValues: undefined,
  formErrors: undefined,
  formTouched: undefined,
  initialValues: undefined,
  formActions: {
    submit: () => {},
    reset: () => {},
    isValid: true,
    setErrors: () => {}
  }
};

export const FormContext: React.Context<IFormContext> = React.createContext(
  defaultFormContextValues
);

const Form = forwardRef((props: IFormProps, ref: ForwardedRef<IFormRef>) => {
  const {
    children,
    onSubmit,
    onReset,
    onChange,
    onError,
    onValidate,
    onValidateAsync,
    validationSchema,
    initialValues,
    loading,
    ...rest
  } = props;

  const [formValues, setFormValues] = React.useState(initialValues || {});
  const [formErrors, setFormErrors] = React.useState({});
  const [formTouched, setFormTouched] = React.useState({});
  const [formSessionId, setFormSessionId] = React.useState(1);

  const validate = (values: any) => {
    let validationRes = {};
    if (validationSchema) {
      try {
        validationSchema.validateSync(values, { abortEarly: false });
      } catch (errors: any) {
        validationRes = errors.inner.reduce(
          (a: any, v: any) => ({ ...a, [v.path]: v.message }),
          {}
        );
      }
      setFormErrors(validationRes);

      return validationRes;
    }
    if (onValidate) {
      setFormErrors(() => onValidate(values));
    }
    if (onValidateAsync) {
      onValidateAsync(values)
        .then((errors: any) => setFormErrors(() => errors))
        .catch((errors: any) => setFormErrors(() => errors));
    }
  };

  /** Set everything to "touched" to highlight errors on submit */
  const setAllTouched = () =>
    setFormTouched(() =>
      Object.keys(formValues).reduce(
        (acc: any, key: string) => ({ ...acc, [key]: true }),
        {}
      )
    );

  const setFormErrorsActionWrapper = (errors: any) => {
    setAllTouched();
    setFormErrors(errors);
    onError && onError(errors, formValues);
  };

  const onSubmitFormWrapper = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      setAllTouched();
      onError && onError(formErrors, formValues);
    } else {
      onSubmit && onSubmit(formValues, formActions);
    }
  };

  const onResetFormWrapper = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    setFormValues(() => initialValues || {});
    setFormSessionId((id) => id + 1);
    onReset && onReset(formValues);
  };

  const formActions = {
    isValid: JSON.stringify(formErrors) === '{}',
    setErrors: setFormErrorsActionWrapper,
    reset: onResetFormWrapper,
    submit: onSubmitFormWrapper
  };

  /** Updating form values whenever a change is made within an input field */
  const updateFormValue = (name: string, value: any, init = false) => {
    setFormValues((formValues: any) => {
      const newFormValues = { ...formValues };
      newFormValues[name] = value;
      const validationResult = validate(newFormValues);
      const isValid = JSON.stringify(validationResult) === '{}';
      !init &&
        onChange &&
        onChange({ ...newFormValues }, { ...formActions, isValid });

      return newFormValues;
    });
  };

  /** Updating field touched status (needed for a correct error display */
  const updateFormTouched = (name: string, touched = true) => {
    setFormTouched((formTouched: any) => {
      const newFormTouched = { ...formTouched };
      newFormTouched[name] = touched;
      return newFormTouched;
    });
  };

  /** Un-setting value (clearing it from the form) */
  const unsetFormValue = (name: string) => {
    updateFormValue(name, undefined);
    updateFormTouched(name, false);
  };

  useImperativeHandle(ref, () => formActions);

  React.useEffect(() => {
    validate(formValues);
  }, []);

  return (
    <form
      {...rest}
      onSubmit={onSubmitFormWrapper}
      onReset={onResetFormWrapper}
      key={formSessionId}
    >
      <FormContext.Provider
        value={{
          updateFormValue,
          updateFormTouched,
          unsetFormValue,
          initialValues,
          formValues,
          formErrors,
          formTouched,
          formActions,
          loading
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  );
});

Form.displayName = 'Form';

export const useFormContext = (fieldName = 'unnamed') => {
  const {
    updateFormValue,
    updateFormTouched,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
    formActions
  } = useContext(FormContext);
  return {
    fieldError:
      fieldName &&
      formTouched &&
      formTouched[fieldName] &&
      formErrors[fieldName],
    fieldValue: fieldName && formValues && formValues[fieldName],
    updateFormValue: formValues ? updateFormValue : () => {},
    updateFormTouched: formTouched ? updateFormTouched : () => {},
    unsetFormValue: formValues ? unsetFormValue : () => {},
    formActions
  };
};

export default Form;
