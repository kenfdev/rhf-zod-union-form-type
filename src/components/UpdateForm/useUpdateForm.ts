import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const updateFormSchema = z.object({
  id: z.string().default('some-id'), // the update schema has an id
  firstName: z.string(),
  age: z.string(),
});

export type UpdateFormSchema = z.infer<typeof updateFormSchema>;

export function useUpdateForm() {
  const methods = useForm<UpdateFormSchema>({
    resolver: zodResolver(updateFormSchema),
  });

  return {
    methods,
  };
}
