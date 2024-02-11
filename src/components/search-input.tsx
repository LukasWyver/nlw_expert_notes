import { SearchIcon } from 'lucide-react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { z } from "zod";

const formSchema = z.object({
  search: z
    .string({
      required_error: "Campo obrigatório.",
    })
    .trim()
    .min(1, "Campo obrigatório."),
});

interface SearchProps {
  defaultValues?: z.infer<typeof formSchema>;
}

export function SearchInput({defaultValues}: SearchProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function handleSubmit(data: z.infer<typeof formSchema>){
    alert(JSON.stringify(data,null,2))
  };

  return (
    <div className="flex items-center gap-2">

      <Form {...form}>
        <form className="flex w-full gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            name="search"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder='Busque em suas notas...' {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      
          <Button variant="default">
            <SearchIcon size={20} type="submit"/>
          </Button>
        </form>
      </Form>
    </div>
  );
}