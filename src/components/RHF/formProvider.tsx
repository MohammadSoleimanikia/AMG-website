import React, { ReactNode } from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';
type FormProviderProps = {
  handleSubmit: ()=>void
  methods: UseFormReturn<any>;
  children: ReactNode;
};
export default function FormProvider({
  handleSubmit,
  children,
  methods,
}: FormProviderProps) {
  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit}>{children}</form>
    </Form>
  );
}