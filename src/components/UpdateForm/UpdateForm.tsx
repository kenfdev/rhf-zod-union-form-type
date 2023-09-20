import BaseForm from '../BaseForm';
import { useUpdateForm } from './useUpdateForm';

export default function UpdateForm() {
  const { methods } = useUpdateForm();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => console.log('update', data);

  return (
    <div>
      <h1>Update Form</h1>
      <BaseForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </div>
  );
}
