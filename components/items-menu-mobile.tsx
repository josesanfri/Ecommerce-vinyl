import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
        <Popover>
            <PopoverTrigger>
                <Menu strokeWidth="1" className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent>
                <Link className="block" href={"/category/reggeaton"}>
                    Reggaeton
                </Link>
                <Link className="block" href={"/category/urbano"}>
                    Urbano
                </Link>
                <Link className="block" href={"/category/rap"}>
                    Rap
                </Link>
            </PopoverContent>
        </Popover>

    );
}

export default ItemsMenuMobile;