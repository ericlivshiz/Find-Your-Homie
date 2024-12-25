import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface SwitchInputProps {
  id: string;
  checked: boolean;
  onCheckedChange: () => void;
  label: string;
}

export default function SwitchInput({ id, checked, onCheckedChange, label }: SwitchInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
} 