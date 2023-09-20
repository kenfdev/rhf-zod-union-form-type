import BaseForm from '../BaseForm';
import { useCreateForm } from './useCreateForm';

export default function CreateForm() {
  const { methods } = useCreateForm();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => console.log('create', data);

  return (
    <div>
      <h1>Create Form</h1>
      <BaseForm
        onSubmit={handleSubmit(onSubmit, (e) =>
          console.error(e, methods.getValues())
        )}
        register={register}
        errors={errors}
      />
    </div>
  );
}
