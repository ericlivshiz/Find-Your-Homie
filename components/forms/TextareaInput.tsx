import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface TextareaInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  required?: boolean;
}

export default function TextareaInput({ id, name, value, onChange, label, required = false }: TextareaInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} name={name} value={value} onChange={onChange} required={required} />
    </div>
  );
} 