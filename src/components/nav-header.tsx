import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  onClick: () => void;
  state: boolean;
};
export function NavHeader({ onClick, state }: Props) {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Icons.logo className="w-8 h-8 fill-primary" />
      </Link>

      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={onClick}
        >
          {state && <XIcon className="w-6 h-6" />}
          {!state && <MenuIcon className="w-8 h-8" />}
        </Button>
      </div>
    </div>
  );
}
