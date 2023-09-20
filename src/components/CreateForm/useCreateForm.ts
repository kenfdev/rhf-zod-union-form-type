import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const createFormSchema = z.object({
  firstName: z.string(),
  age: z.string(),
  hiddenField: z.string().default('this is a hidden field'), // the create schema has a hiddenField
});

export type CreateFormSchema = z.infer<typeof createFormSchema>;

export function useCreateForm() {
  const methods = useForm<CreateFormSchema>({
    resolver: zodResolver(createFormSchema),
  });

  return {
    methods,
  };
}
