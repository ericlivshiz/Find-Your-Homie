import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TextInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

export default function TextInput({ id, name, value, onChange, label, type = 'text', required = false, placeholder = '' }: TextInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} value={value} onChange={onChange} type={type} required={required} placeholder={placeholder} />
    </div>
  );
} 