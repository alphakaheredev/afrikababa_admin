import { cn } from "@/lib/utils";

function Divider({ margin }: { margin: string }) {
  return (
    <div className={cn("border-b border-dashed border-t-th-gray-e6", margin)} />
  );
}

export default Divider;
