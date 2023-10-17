import { useFormikContext } from "formik";
import Button from "@/src/components/Button";

const SubmitButton = () => {
  const { isSubmitting, submitForm } = useFormikContext();

  return (
    <Button loading={isSubmitting} onClick={submitForm}>
      Create
    </Button>
  );
};

export default SubmitButton;
