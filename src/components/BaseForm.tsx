interface Props {
  onSubmit: () => void;
  register: any;
  errors: any;
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
