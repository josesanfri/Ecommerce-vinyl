import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu } from "lucide-react";

const ItemsMenuMobile = () => {
  return (
        <DropdownMenu>
            <DropdownMenuTrigger><Menu className="h-8 w-8" /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem><Link href={'/category/reggeaton'}>Reggaeton</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href={'/category/urbano'}>Urbano</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href={'/category/rap'}>Rap</Link></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ItemsMenuMobile;