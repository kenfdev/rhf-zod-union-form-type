import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CreateFormSchema } from './CreateForm/useCreateForm';
import { UpdateFormSchema } from './UpdateForm/useUpdateForm';

type BaseSchema = {
  [K in keyof CreateFormSchema & keyof UpdateFormSchema]:
    | CreateFormSchema[K]
    | UpdateFormSchema[K];
};

interface Props {
  onSubmit: () => void;
  register: UseFormRegister<BaseSchema>;
  errors: FieldErrors<BaseSchema>;
}

export default function BaseForm({ onSubmit, register, errors }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" {...register('firstName')} />
      <p>{errors.firstName?.message}</p>

      <label htmlFor="age">Age</label>
      <input id="age" {...register('age')} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}
